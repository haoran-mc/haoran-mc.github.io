export function isPageHome() {
	if (['/index.html', '/', 'index'].includes(location.pathname)) {
		return true;
	}
}

export function isCurPage(args) {
	if (typeof args === 'string') {
		if (['/' + args + '.html',].includes(location.pathname))
			return true;
	}
}

export function scrollToTop(ele) {
	// page height
	let totalH = $(document).height();
	// view height
	let clientH = $(window).height();
	// scroll height
	let scrollH = $(document).scrollTop();

	let _cent = parseInt((scrollH / (totalH - clientH)) * 100);
	_cent = ('' + _cent).length < 2 ? '0' + _cent : _cent;
	ele.innerHTML = _cent + '% ↑';
}
