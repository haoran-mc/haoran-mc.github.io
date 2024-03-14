'use strict';
import './jquery-3.3.1.min.js';
import {
	isCurPage,
	scrollToTop,
} from './utils.js';

// Init before
$('body').append(`<div id="nav-btn" onclick="location.href = './index.html'">IDX ←</div>`);
$('body').append(`<div id="top-btn" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">TOP ↑</div>`);

// Init after, table-of-contents
$(function () {
	$('#table-of-contents > h2').wrap('<div id="header-table-of-contents"/>');
	$('#table-of-contents').append('<div id="footer-table-of-contents"/>');
	$('#header-table-of-contents').append('<div id="pin-table-of-contents"><img src="./assets/pin16.svg"/></div>');

	$('#pin-table-of-contents').click(toggleTableOfContentsPin);
});

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

// Idea Page
// ---------------------------------
if (isCurPage('231006-Ideas')) {
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

// 链接在新页面打开
// ---------------------------------
if (isCurPage('231016-Links')
    || isCurPage('210814-dynamic_programming')
   ) {
    var a_elements = $("a");
    a_elements.not("#text-table-of-contents a").each(function () {
        $(this).attr({rel:"noopener", target: "_blank"});
    })
}

// 卡片页面
// ---------------------------------
if (isCurPage('231018-wiki')
	|| isCurPage('231009-history')
    || isCurPage('231105-neovim')
   ) {
	$('.outline-2').each(function () {
		$(this).addClass('js-card');
	});
}
