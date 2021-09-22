'use strict';
import 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js';
import 'https://cdn.jsdelivr.net/npm/darkreader@4.9.34/darkreader.min.js';
import userconfig from './user.config.js';
import {
    isHome,
    isCurPage,
    initCardPages,
    initEncryptedPages,
    initMouseClickAnimate,
    initImageZoom,
    browserRedirect,
    scrollToTop,
    betterLocalStorage as bls,
} from './utils.js';
import userConfig from './user.config.js';

// Every area may have a `*-card.org`, so set card as its default style
if (location.pathname.indexOf('card') > -1) {
    let _re = /[\w+-]+\w+(.html)$/,
        _pages = location.pathname.match(_re),
        _page = _pages[0].split('.html')[0];

    userconfig.card.pages.push(_page);
}

// Some initial operations.
// ------------------------------------------------------------------
initCardPages(userconfig.card.pages, userconfig.card.activeAll);
initEncryptedPages(userconfig.encrypt.pages, userconfig.encrypt.password);
initImageZoom();

// Init global variables
// ------------------------------------------------------------------
const isPC = browserRedirect() === 'PC';
const isMB = !isPC;

const TOC = $('#table-of-contents');
const BODY = $('body');
const TITLE = $('.title');
const CONTENT = $('#content');

// Valine comments.
/*
  if (!isCurPage(userConfig.nonvaline) && !isHome()) {
      CONTENT.append(`
          <div style="margin-top: .64rem;"></div>
          <p style="font-family: 'segoe print'; font-size: .18rem; color: #ccc;">✒&nbsp; May you want to say :</p>
          <div id="vcomments" style="margin: 24px 0;"></div>
      `);
      new Valine({
          el: '#vcomments',
          appId: 'pBwk0ut3wQWR9nxTfncT3c6d-gzGzoHsz',
          appKey: 'KMWHVAMFBGd2mx3Nd8pVeAA1',
          avatar: 'wavatar', // robohash
          placeholder: '说些什么呢 ……'
      })
  }
  
  if (isMB) { $('#encrypt').hide() }
  initEncryptedPages(['joker', 'story', 'diary', 'plan'], 'jjkkk');
  if ($('#pw')) { $('#pw').focus() }
*/

// Add animate effects.
// Create nav & top buttons.
// ------------------------------------------------------------------
BODY.append(
    `<div class="nav-btn" onclick="location.href = './index.html'">IDX ←</div>`
);
// `behavior` - instant, smooth, auto
BODY.append(
    `<div class="top-btn" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">TOP ↑</div>`
);

// Listen touch event in Moblie
BODY.on('touchstart', touchStart);
BODY.on('touchend', touchEnd);

// Toggle color of site.
TITLE.click(toggleColor);

// Calculate the scroll top distance.
$(window).scroll(() => scrollToTop($('.top-btn')[0]));

// Hide directory when click it of Mobile.
if (isMB && TOC) TOC.click(hideDir);
if (isPC && TOC) {
    // Auto adjust TOC width to avoid it hover the main contents.
    let t_w = '' + -parseInt((TOC.width() / $(document).width()) * 100) + '%';
    TOC.css('left', t_w);
    TOC.mouseenter(() => TOC.css('left', 0));
    TOC.mouseleave(() => TOC.css('left', t_w));
}

// Customize HOME page style
// ---------------------------------
if (isHome()) {
    // Hide nav and top button in index page.
    CONTENT.addClass('js-home-content');

    if (TOC) TOC.css('display', 'none'); // Hide table of contents.
    $('.top-btn').css('display', 'none'); // Hide top button.
    $('.nav-btn').css('display', 'none'); // Hide nav button.

    // Customize posts list showwing
    $('thead').each(function () {
        if (isPC) {
            $(this)
                .parent()
                .hover(function () {
                    $(this).find('tbody').fadeToggle();
                });
        } else {
            $(this)
                .parent()
                .click(function () {
                    $(this).find('tbody').fadeToggle();
                });
        }

        // Show post counts of current category
        let _len = $(this).parent().find('td').length;
        let _html = $(this).find('th').html();
        $(this)
            .find('th')
            .html(
                `${_html} <span style="font-size: 12px; color: #ace; float: right;">(${_len})</span>`
            );
    });

    // Open link in a new tab
    $('a').each(function () {
        $(this).attr('target', '_blank');
    });
}

$('.jk-drawer .collapsible').each(function () {
    $(this).click(function () {
        this.classList.toggle('active');
        let _ctx = this.nextElementSibling;
        if (_ctx.style.maxHeight) {
            _ctx.style.maxHeight = null;
        } else {
            _ctx.style.maxHeight = _ctx.scrollHeight + 'px';
        }
    });
});

// Customize contacts way
// -------------------------------------------
$('.me .contact #email').attr('href', 'mailto:' + userconfig.email);
$('.me .contact #github').attr(
    'href',
    (userconfig.gitee || '//github.com/') + userconfig.github
);


// Listen mousewheel event
// ---------------------------------
// Firefox
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
// IE
window.addEventListener('mousewheel', scrollFunc);
document.addEventListener('mousewheel', scrollFunc);

// Add mouse-click animation
// ---------------------------------
if (isPC) {
    initMouseClickAnimate();
}


// Show type of code block
// ---------------------------------
$('.src').each(function () {
    let str = $(this)[0].className.split(' src-')[1];
    $('<span class="js-code-src">' + str + '</span>').prependTo($(this));
});

// Hide line number when copy
$('pre').each(function () {
    $(this).dblclick(function () {
        let _this = $(this);
        _this.addClass('js-pre-dblclick');
        setTimeout(function () {
            _this.removeClass('js-pre-dblclick');
        }, 10000);
    });
});

// Beautify navigations
// ---------------------------------
if (isCurPage('Navigation')) {
    BODY.addClass('js-nav-body');

    $('td a').each(function (idx, item) {
        $(this).attr('target', '_blank');
    });

    if (isMB) {
        $('table').hide();
        $('<div class="js-nav-link-container"></div>').insertAfter(TITLE);

        $('td a').each(function (idx, item) {
            $(this).attr('target', '_blank');
            $('.js-nav-link-container').append(item);
        });

        $('.org-ul a').each(function () {
            $(this).attr('target', '_blank');
        });

        let NL = $('.js-nav-link-container a');
        let _len = NL.length,
            _remainder = 0;

        _remainder = _len % 5;

        if (_remainder == 0) _remainder = 5;

        for (let i = 0; i < 5 - _remainder; i++) {
            $('.js-nav-link-container').append('<a></a>');
        }
    }

    // Bookmark tips
    $('#content p').addClass('js-nav-bookmarks');
    let _bmLen = $('li').length - 1,
        _tip = '';

    _tip =
        _bmLen > 20 ? '（🔥太多了，赶快处理吧，亲！）' : '（😤状态还不错！）';
    $('#content p').append(
        `<span style="float: right;"><progress value="${_bmLen}" max="100"></progress> ${_tip}${_bmLen} 条</span>`
    );

    $('.org-ul').addClass('js-nav-bookmarks-container');
}

// ==================================================================

// Resolve current theme color
// ------------------------------------------------------------------
let isDark = false;

if (bls.get('isDark')) {
    toggleColor();
}
// Encapsulation darkreader and bind it to title.
// ---------------------------------
function toggleColor() {
    if (!isDark) {
        // ^ Switch to dark
        DarkReader.enable({
            brightness: 100,
            contrast: 90,
            sepia: 10,
        });

        isDark = true;
        bls.set('isDark', isDark);
    } else {
        // ^ to light
        DarkReader.disable();

        bls.del('isDark');
        location.reload();
    }
}

// Hide directory when click it
// ---------------------------------
function hideDir() {
    if (isMB) {
        let ele = document.getElementById('table-of-contents');
        let _opacity = getComputedStyle(ele).opacity;

        if (_opacity == 1) {
            ele.style.top = '-380px';
            ele.style.opacity = 0;
        } else {
            ele.style.top = '0px';
            ele.style.opacity = 1;
        }
    }
}

// Scroll listener
// ---------------------------------
function scrollFunc(e) {
    e = e || window.event;
    if (e.wheelDelta) {
        // For IE&Chrome
        if (e.wheelDelta > 0) {
            // ↑
            _showNav();
            setTimeout(() => {
                _hideNav();
            }, 1000);
        }

        if (e.wheelDelta < 0) {
            // ↓
            _showNav();
            setTimeout(() => {
                _hideNav();
            }, 1000);
        }
    } else if (e.detail) {
        // For Firefox
        if (e.detail > 0) {
            // ↑
            _showNav();
            setTimeout(() => {
                _hideNav();
            }, 1000);
        }

        if (e.detail < 0) {
            // ↓
            _showNav();
            setTimeout(() => {
                _hideNav();
            }, 2000);
        }
    }
}

// Mobile scroll
let startY = 0; // init touch-point coordinates

function touchStart(e) {
    let touch = e.touches[0]; // get the first touch point
    let y = touch.pageY;

    startY = y; // set init y point
}

function touchEnd(e) {
    let touch = e.changedTouches[0]; // get the first touch point
    let y = touch.pageY;

    // Judge which direction to move
    if (y - startY < 0) {
        // ↑
        _showNav();
        setTimeout(() => {
            _hideNav();
        }, 1000);
    } else {
        // ↓
        _showNav();
        setTimeout(() => {
            _hideNav();
        }, 2000);
    }
}

// Show/Hide nav buttons
function _showNav() {
    if (isMB) {
        $('.top-btn').css('opacity', '0.9');
        $('.nav-btn').css('opacity', '0.9');
    } else {
        $('.top-btn').addClass('nav-show-hide');
        $('.nav-btn').addClass('nav-show-hide');
    }
}

// Reduce opaciry
function _hideNav() {
    if (isMB) {
        $('.top-btn').css('opacity', '0');
        $('.nav-btn').css('opacity', '0');
    } else {
        $('.top-btn').removeClass('nav-show-hide');
        $('.nav-btn').removeClass('nav-show-hide');
    }
}

// DIR -- Highlight current headline
// ---------------------------------
// Re-construct <a> of '#table-of-contents'
$(document).ready(function () {
    let _links = $('#text-table-of-contents a');

    _links.each(function () {
        let _class = $(this).attr('href').split('#')[1];
        $(this).addClass('links ' + _class);
    });

    $.each([2, 3, 4, 5, 6], function (index, val) {
        if ($('.outline-' + val)) {
            let _outlines = $('.outline-' + val);

            _outlines.each(function () {
                $(this).addClass('outline');
            });
        }
    });
});

// Scroll
$(window).scroll(function () {
    var $sections = $('.outline'); // get all content blocks
    var currentScroll = $(this).scrollTop(); // height of window scroll
    var $currentSection; // current content block

    var _arrTop = []; // just for getting the distance from the first headline to top

    $sections.each(function () {
        var divPosition = $(this).offset().top;

        _arrTop.push(divPosition);

        if (divPosition - 1 < currentScroll) {
            $currentSection = $(this);
        }

        // Avoid there no block at current height
        if (currentScroll >= _arrTop[0]) {
            let _id = $currentSection.attr('id');

            let _idArr = _id.split('-');
            _id = _idArr[_idArr.length - 1];

            $('.links').removeClass('js-link-active');
            $('.' + _id).addClass('js-link-active');
        }
    });
});
