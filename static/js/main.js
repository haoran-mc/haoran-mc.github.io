'use strict';
import './jquery.min.js';
import './darkreader.min.js';
import {
    isPageHome,
    isCurPage,
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

// Resolve current theme color
// ------------------------------------------------------------------
let isDark = false;

if (bls.get('isDark')) {
    toggleColor();
}
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

// Toggle color of site.
TITLE.click(toggleColor);

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
    // Open link in a new tab
    $('a').each(function () {
        $(this).attr('target', '_blank');
    });
}

// NAVIGATIONS PAGE
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
}

// Link PAGE
// ---------------------------------
if (isCurPage('Links')) {
    $('a').each(function (idx, item) {
        $(this).attr('target', '_blank');
        $(this).css('font-size', '12.5px');
    });
}


// Idea PAGE
// ---------------------------------
if (isCurPage('Ideas')) {
    // outline-1 TITLE
    // outline-2 *
    // outline-3 **
    $('.outline-2').each(function () {
        $(this).addClass('js-card');
        $(this).addClass('js-title');
    });
		$('p').each(function () {
				$(this).css('margin-bottom', '0');
				$(this).css('margin-top', '0');
				$(this).css('text-indent', '0');
		});
}

// Card PAGE
// ---------------------------------
if (isCurPage('wiki')
		|| isCurPage('Math')
		|| isCurPage('Editor-Vim-notes')
		|| isCurPage('Poem')
		|| isCurPage('Go-wiki')
	 ) {
    $('.outline-2').each(function () {
        $(this).addClass('js-card');
    });
		$('p').each(function () {
				$(this).css('margin-bottom', '0');
		});
		$('p+ul').each(function () {
				$(this).css('margin-top', '0');
		});
}
