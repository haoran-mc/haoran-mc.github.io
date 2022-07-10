'use strict';
import './jquery-3.3.1.min.js';
import './darkreader.min.js';
import {
		isPageHome,
		isCurPage,
		browserRedirect,
		scrollToTop,
		addPostambleLists,
} from './utils.js';

// Init before
$('body').append(`<div id="nav-btn" onclick="location.href = './index.html'">IDX ←</div>`);
$('body').append(`<div id="top-btn" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">TOP ↑</div>`);
$('#postamble').before('<input type="checkbox" id="input-postamble-menu"/>');
$('#postamble').before('<label for="input-postamble-menu" id="label-postamble-menu"><img src="./static/assets/three-bars.svg"/>Menu</label>');

// Init after
$(function () {
		$('#table-of-contents > h2').wrap('<div id="header-table-of-contents"/>');
		$('#table-of-contents').append('<div id="footer-table-of-contents"/>');
		$('#header-table-of-contents').append('<div id="pin-table-of-contents"><img src="./static/assets/pin16.svg"/></div>');

		$('#pin-table-of-contents').click(toggleTableOfContentsPin);
		// $('.title').click(toggleColor);

		addPostambleLists();

		$('#toggle-theme-dark-light').click(toggleColor);
});

// Init global variables
// ------------------------------------------------------------------
// const isPC = browserRedirect() === 'PC';
// const isMB = !isPC;

// Resolve current theme color
// ------------------------------------------------------------------
let isDark = false;

if (Boolean(localStorage.getItem('isDark'))) {
		toggleColor();
}
function toggleColor() {
		if (!isDark) {
				// light -> dark
				DarkReader.enable({
						brightness: 100,
						contrast: 90,
						sepia: 10,
				});
				isDark = true;
				localStorage.setItem('isDark', isDark);
		} else {
				// dark -> light
				DarkReader.disable();
				isDark = false;
				localStorage.removeItem('isDark');
		}
}

// div.table-oof-contents
// 		div.header-table-of-contents
// 		    h2
// 				pin-table-of-contents
//    div.text-table-of-contents
let isPin = false;
if (Boolean(localStorage.getItem('isPin'))) {
		toggleTableOfContentsPin();
}
function toggleTableOfContentsPin() {
		if (!isPin) {
				// ^ Switch to pin
				$(function () {
						$('#pin-table-of-contents').addClass('clockwise');
				});
				$('#table-of-contents').css('left', '0');
				$('#table-of-contents').css('opacity', '1');
				$('#table-of-contents').off('mouseenter mouseleave');
				isPin = true;
				localStorage.setItem('isPin', isPin);
		} else {
				// ^ to unpin
				$('#pin-table-of-contents').removeClass('clockwise');
				$('#table-of-contents').css('left', '-16%');
				$('#table-of-contents').css('opacity', '0');
				$('#table-of-contents').hover(function () {
						$(this).css('left', '0');
						$(this).css('opacity', '1');
				}, function () {
						$(this).css('left', '-16%');
						$(this).css('opacity', '0');
				});
				isPin = false;
				localStorage.removeItem('isPin');
		}
}


// Calculate the scroll top distance.
$(window).scroll(() => scrollToTop($('#top-btn')[0]));

// CODELINE
window.onload = () => {
		const src_container = document.getElementsByClassName('org-src-container');

		var src = document.getElementsByClassName('src-haoran');   // 肯定没有这个语言
		var src_go = document.getElementsByClassName('src-go');
		var src_c = document.getElementsByClassName('src-C');
		var src_cpp = document.getElementsByClassName('src-C++');
		var src_py = document.getElementsByClassName('src-python');

		src = Array.from(src);   // 变成数组处理
		src_go = Array.from(src_go);
		src_c = Array.from(src_c);
		src_cpp = Array.from(src_cpp);
		src_py = Array.from(src_py);

		src = src.concat(src_go);   // 给这些语言添加 codeline
		src = src.concat(src_c);
		src = src.concat(src_cpp);
		src = src.concat(src_py);

		for (let i=0, len=src.length|0; i<len; i=i+1|0) {
				let lines = src[i].innerHTML.split('\n').length - 1;
				let div = document.createElement('div');
				div.setAttribute('class', 'code-line');
				let ul = document.createElement('ul');
				src_container[i].insertBefore(div, src[i]);
				div.appendChild(ul);

				for (let n = 1; n <= lines; n ++ ) {
						let newLine = document.createElement('li');
						let number = document.createTextNode(n);

						newLine.appendChild(number);
						ul.appendChild(newLine);
				}
		}
}

// HOME PAGE
// ---------------------------------
if (isPageHome()) {
		$('#content').addClass('js-home-content');
		if ($('#table-of-contents'))
				$('#table-of-contents').css('display', 'none');
		$('#nav-btn').css('display', 'none');
		$('#top-btn').css('display', 'none');
		// $('#label-postamble-menu').css('display', 'none');
}

// NAVIGATIONS PAGE
// ---------------------------------
if (isCurPage('Navigation')) {
		$('body').addClass('js-nav-body');
		$('td a').each(function (idx, item) {
				$(this).attr('target', '_blank');
		});
		// if (isMB) {
		//     $('table').hide();
		//     $('<div class="js-nav-link-container"></div>').insertAfter($('.title'));
		//     $('td a').each(function (idx, item) {
		//         $(this).attr('target', '_blank');
		//         $('.js-nav-link-container').append(item);
		//     });
		//     $('.org-ul a').each(function () {
		//         $(this).attr('target', '_blank');
		//     });

		//     let NL = $('.js-nav-link-container a');
		//     let _len = NL.length,
		//         _remainder = 0;

		//     _remainder = _len % 5;
		//     if (_remainder == 0) _remainder = 5;

		//     for (let i = 0; i < 5 - _remainder; i++) {
		//         $('.js-nav-link-container').append('<a></a>');
		//     }
		// }
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
		// outline-1 $('.title')
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
		|| isCurPage('Math-wiki')
		|| isCurPage('Editor-Vim-notes')
		|| isCurPage('Poem')
		|| isCurPage('Go-wiki')
		|| isCurPage('Front_end-card')
		|| isCurPage('Linux-wiki')
	 ) {
		$('.outline-2').each(function () {
				$(this).addClass('js-card');
		});
}
