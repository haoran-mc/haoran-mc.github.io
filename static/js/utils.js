export function browserRedirect() {
		let sUserAgent = navigator.userAgent.toLowerCase();
		let bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
		let bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os';
		let bIsMidp = sUserAgent.match(/midp/i) == 'midp';
		let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
		let bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb';
		let bIsAndroid = sUserAgent.match(/android/i) == 'android';
		let bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
		let bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';

		if (
				bIsIpad ||
						bIsIphoneOs ||
						bIsMidp ||
						bIsUc7 ||
						bIsUc ||
						bIsAndroid ||
						bIsCE ||
						bIsWM
		) {
				return 'MB';
		} else {
				return 'PC';
		}
}

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
				<li><a href="./Go.html">page - go</a></li>
		</ul>
</div>
`);
		// <div id="footer-div-postamble"></div>
		$('#postamble').prepend(`<div id="header-of-postamble">Haoran's Blog</div>`);
}
