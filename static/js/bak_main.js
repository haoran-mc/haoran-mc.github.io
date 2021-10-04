'use strict';
import 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js';
import {
    isPageHome,
    isCurPage,
    browserRedirect,
} from './utils.js';

// Init global variables
// ------------------------------------------------------------------
const isPC = browserRedirect() === 'PC';
const isMB = !isPC;
const TOC = $('#table-of-contents');
const BODY = $('body');
const TITLE = $('.title');
const CONTENT = $('#content');
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
            $(this).parent().click(function () {$(this).find('tbody').fadeToggle("fast", "linear");});
        } else {
            $(this).parent().click(function () {$(this).find('tbody').fadeToggle("fast", "linear");});
        }
    });
    // Open link in a new tab
    $('a').each(function () {
        $(this).attr('target', '_blank');
    });
}

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
