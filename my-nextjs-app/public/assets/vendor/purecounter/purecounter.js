(function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
    }

    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(r, a, function(t) {
                return e[t];
            }.bind(null, a));
        return r;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/", n(n.s = 2);
})([,, function(e, t, n) {
    e.exports = n(3);
}, function(e, t, n) {
    "use strict";

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    n.r(t);
    var r = function() {
        function e() {
            _classCallCheck(this, e), this.registerEventListeners();
        }
        return e.prototype.registerEventListeners = function() {
            var e = this,
                t = document.querySelectorAll(".purecounter");
            if (this.intersectionListenerSupported()) {
                var n = new IntersectionObserver(this.animateElements.bind(this), {
                    root: null,
                    rootMargin: "20px",
                    threshold: .5
                });
                t.forEach(function(t) {
                    n.observe(t);
                });
            } else window.addEventListener && (this.animateLegacy(t), window.addEventListener("scroll", function() {
                e.animateLegacy(t);
            }, {
                passive: !0
            }));
        }, e.prototype.animateLegacy = function(e) {
            var t = this;
            e.forEach(function(e) {
                t.parseConfig(e).legacy && t.elementIsInView(e) && t.animateElements([e]);
            });
        }, e.prototype.animateElements = function(e) {
            var t = this;
            e.forEach(function(e) {
                var n = e.getAttribute("data-purecounter-config") || "{}";
                n = JSON.parse(n), n.duration <= 0 ? e.innerHTML = n.end.toFixed(n.decimals) : setTimeout(function() {
                    t.startCounter(e, n);
                }, n.delay);
            });
        }, e.prototype.startCounter = function(e, t) {
            var n = this;
            var r = setInterval(function() {
                var a = t.start;
                t.start < t.end ? t.start += (t.end - t.start) / (t.duration / t.delay) : t.start -= (t.start - t.end) / (t.duration / t.delay), t.decimals <= 0 ? a = parseInt(t.start) : a = parseFloat(t.start).toFixed(t.decimals), e.innerHTML = a, t.start == t.end && clearInterval(r);
            }, t.delay);
        }, e.prototype.parseConfig = function(e) {
            var t = {
                start: 0,
                end: 9001,
                duration: 2e3,
                delay: 10,
                decimals: 0,
                legacy: !0
            };
            var n = e.attributes;
            for (var r = 0; r < n.length; r++) {
                var a = n[r].name;
                var i = n[r].value;
                if (a.startsWith("data-purecounter-")) {
                    var o = a.replace("data-purecounter-", "");
                    t[o] = o === "duration" ? parseInt(i) * 1e3 : isNaN(parseFloat(i)) ? i : parseFloat(i);
                }
            }
            return t;
        }, e.prototype.nextNumber = function(e, t, n, r) {
            return void 0 === r && (r = "inc"), "inc" === r ? n.decimals <= 0 ? parseInt(e) + parseInt(t) : parseFloat(e) + parseFloat(t) : n.decimals <= 0 ? parseInt(e) - parseInt(t) : parseFloat(e) - parseFloat(t);
        }, e.prototype.formatNumber = function(e, t) {
            return t.decimals <= 0 ? parseInt(e) : e.toLocaleString(void 0, {
                minimumFractionDigits: t.decimals,
                maximumFractionDigits: t.decimals
            });
        }, e.prototype.castDataType = function(e) {
            return /^[0-9]+\.[0-9]+$/.test(e) ? parseFloat(e) : /^[0-9]+$/.test(e) ? parseInt(e) : e;
        }, e.prototype.elementIsInView = function(e) {
            var t = e.getBoundingClientRect();
            return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth);
        }, e.prototype.intersectionListenerSupported = function() {
            return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;
        }, e;
    }();
    new r();
}]);
