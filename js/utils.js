/**
 * Judege whether `args` in current page.
 * @param {Array | String} args - Pages array or page string.
 */
export function isCurPage(args) {
    if (typeof args === 'string') {
        if (
            [
                '/public/' + args + '.html',
                '/public/' + args,
                '/' + args + '.html',
                '/' + args,
            ].includes(location.pathname)
        )
            return true;
    } else if (args instanceof Array) {
        let _res = 0;
        args.map((item) => {
            if (
                [
                    '/public/' + item + '.html',
                    '/public' + item,
                    '/' + item + '.html',
                    '/' + item,
                ].includes(location.pathname)
            )
                _res += 1;
        });

        if (_res > 0) return true;
    }
}

/**
 * Diff device type.
 */
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

/**
 * Judge if current page is HOME page.
 */
export function isHome() {
    if (
        [
            '/public/index.html',
            '/public/index',
            '/public/',
            '/index.html',
            '/index',
            '/',
        ].includes(location.pathname)
    ) {
        return true;
    }
}

/**
 * Beautify item like `Idea`,
 * and you can Activate/Deactivate global card style.
 * @param { Array } cardPages Card pages
 * @param { Boolean } isAllCardStyle Active global site card style
 */
export function initCardPages(cardPages, isAllCardStyle = false) {
    if (isAllCardStyle) {
        $('.outline-2').each(function () {
            $(this).addClass('js-outline-2');
        });

        $('.outline-3').each(function () {
            $(this).addClass('js-outline-3');
        });

        return;
    }

    if (isCurPage(cardPages)) {
        $('.outline-2').each(function () {
            $(this).addClass('js-outline-2');
        });

        $('.outline-3').each(function () {
            $(this).addClass('js-outline-3');
        });
    }
}

/**
 * To encrypted your pages.
 * @param {Array} encryptedPages - Encrypted pages
 * @param {String} password - Password
 */
export function initEncryptedPages(encryptedPages, password) {

    if (isCurPage(encryptedPages)) {
        if (sessionStorage.getItem('f2f0c89f0c89')) {
            console.log('Welcome, Sir.');
        } else {
            $('body').addClass('body-fuzzy')
            $('body').append(`
                <div class='body-mask'>
                    <div class="body-mask--password">
                        <div style="display: inline-block; width: 20px;">🔐</div>
                        <input id="pw" type="password" placeholder="这是私人页面，请离开，谢谢 ！" />
                        <div id="tip" style="visibility: hidden; color: #900;">真的，你走吧</div>
                    </div>
                </div>
            `)

            $('#pw').keypress(function(event) {
                let _password = $(this).val();
                if(event.keyCode == '13') {
                    console.log(_password);
                    if (_password === password) {
                        $('.body-mask').remove()
                        sessionStorage.setItem('f2f0c89f0c89', true);
                    } else {
                        $('#pw').val('');
                        $('#tip').css({ visibility: 'visible' })
                    }
                }
            })

            // let _passwd = prompt('Sorry, you have no permissions！');
            // if (_passwd === password) {
            //     console.log('Welcome, Sir.');
            //     sessionStorage.setItem('pw', true);
            // } else {
            //     window.location.pathname = '/';
            // }
        }
    }
}

/**
 * Active mouse animate.
 */
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

/**
 * Zoom images.
 */
export function initImageZoom() {
    let isZoom = false;

    // Do not zoom in HOME page.
    if (isHome()) {
        return;
    }

    $('img').each(function (idx, ele) {
        $(this).click(function () {
            if (!isZoom) {
                $('html').append(
                    `<div class='img-wrapper'>
                        <img class='img-zoom' src=${ele.src} />
                    </div>`
                );

                $('.img-wrapper').click(function () {
                    $('.img-wrapper').remove();
                    isZoom = false;
                });

                isZoom = true;
            }
        });
    });
}

/**
 * Update cent of element's innerHHTML when page scroll
 * @param { Object } ele - DOM element
 */
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

/**
 * Better localStorage which can remember the data type.
 */
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
