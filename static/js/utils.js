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

export function addPostambleLists() {
	$('#postamble').prepend(`
<div id="operation-of-postamble">
		<ul>
				<li id="toggle-theme-dark-light"><span>function - toggle theme</span></li>
		</ul>
</div>
`);
	$('#postamble').prepend(`
<div id="common-list">
		<ul>
				<li><a href="./index.html">page - home</a></li>
				<li><a href="./About.html">page - about</a></li>
				<li><a href="./Navigation.html">page - navigation</a></li>
				<li><a href="./Links.html">page - links</a></li>
				<li><a href="./Ideas.html">page - ideas</a></li>
				<li><a href="./wiki.html">page - wiki</a></li>
				<li><a href="./Lists.html">page - Lists</a></li>
				<li><a href="./Go.html">page - golang</a></li>
		</ul>
</div>
`);
	// <div id="footer-div-postamble"></div>
	$('#postamble').prepend(`<div id="header-of-postamble">Haoran's Notes</div>`);
}
