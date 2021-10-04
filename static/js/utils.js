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
    if (['/index.html'].includes(location.pathname)) {
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

export function initMouseClickAnimate() {
    $(document).click((e) => {
        let size = 120; // size of water block
        $('body').append(`<div class='water-animate'></div>`); // create a water block

        $('.water-animate')
            .css({
                // init style
                position: 'fixed',
                left: e.clientX,
                top: e.clientY,
                borderRadius: size + 'px',
                border: '2px solid #19f',
                'z-index': -1,
            })
            .stop() // to stop non-end previous animate
            .animate(
                {
                    width: size,
                    height: size,
                    left: e.clientX - size / 2,
                    top: e.clientY - size / 2,
                    opacity: '0',
                },
                'slow',
                () => $('body .water-animate').remove()
            );
    });
}

export const betterLocalStorage = {
    get(key) {
        if (!localStorage.getItem(key)) {
            return;
        }
        let [type, val] = localStorage.getItem(key).split('_');

        if (type === 'str') {
            return val;
        }
        if (type === 'bol') {
            return Boolean(val);
        }
        if (type === 'obj') {
            return JSON.parse(val);
        }
    },
    set(key, val) {
        if (typeof val === 'string') {
            localStorage.setItem(key, 'str_' + val);
            return;
        }
        if (typeof val === 'boolean') {
            localStorage.setItem(key, 'bol_' + val);
            return;
        }
        if (typeof val === 'object') {
            localStorage.setItem(key, 'obj_' + JSON.stringify(val));
            return;
        }
    },
    del(key) {
        localStorage.removeItem(key);
    },
};
