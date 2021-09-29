'use strict';
import 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js';
import 'https://cdn.jsdelivr.net/npm/darkreader@4.9.34/darkreader.min.js';
import {
    isPageHome,
    isCurPage,
    initCardPages,
    initEncryptedPages,
    initMouseClickAnimate,
    initImageZoom,
    browserRedirect,
    scrollToTop,
    betterLocalStorage as bls,
} from './utils.js';

// Init global variables
// ------------------------------------------------------------------
const isPC = browserRedirect() === 'PC';
const isMB = !isPC;
const TOC = $('#table-of-contents');
const BODY = $('body');
const TITLE = $('.title');
const CONTENT = $('#content');

// nav & top button
// ------------------------------------------------------------------
BODY.append(
    `<div class="nav-btn" onclick="location.href = './index.html'">IDX ←</div>`
);
// `behavior` - instant, smooth, auto
BODY.append(
    `<div class="top-btn" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">TOP ↑</div>`
);

// Toggle color of site.
TITLE.click(toggleColor);

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


// Calculate the scroll top distance.
$(window).scroll(() => scrollToTop($('.top-btn')[0]));

// HOME PAGE
// ---------------------------------
if (isPageHome()) {
    // Hide nav and top button in index page.
    CONTENT.addClass('js-home-content');
    if (TOC) TOC.css('display', 'none');  // Hide table of contents.
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

// Add mouse-click animation
// ---------------------------------
if (isPC) {
    initMouseClickAnimate();
}

if (isMB) {
    $('#postamble').css('display', 'none');
    $('body').append(
        `<a class="js-footer-slogan" href="http://beian.miit.gov.cn/" target="_blank">${userconfig.icp}</a>`
    );
    $('.me #wechat img').width('40%');
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

// NAVIGATIONS PAGE
// ---------------------------------
if (isCurPage('nav')) {
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
}
