(() => {
  "use strict";
  let e = !0,
    t = (t = 500) => {
      let s = document.querySelector("body");
      if (e) {
        let i = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight = "0px";
          }
          (s.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    s = (t = 500) => {
      let s = document.querySelector("body");
      if (e) {
        let i = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < i.length; e++) {
          i[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (s.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  function i(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  let n = (e, s = !1, n = 500, r = 0) => {
    const a = document.querySelector(e);
    if (a) {
      let o = "",
        l = 0;
      s &&
        ((o = "header.header"), (l = document.querySelector(o).offsetHeight));
      let d = {
        speedAsDuration: !0,
        speed: n,
        header: o,
        offset: r,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (t(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(a, "", d);
      else {
        let e = a.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
      }
      i(`[gotoBlock]: Юхуу...едем к ${e}`);
    } else i(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
  };
  function r(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function a(e = {}, t = {}) {
    Object.keys(t).forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : r(t[s]) && r(e[s]) && Object.keys(t[s]).length > 0 && a(e[s], t[s]);
    });
  }
  const o = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function l() {
    const e = "undefined" != typeof document ? document : {};
    return a(e, o), e;
  }
  const d = {
    document: o,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function c() {
    const e = "undefined" != typeof window ? window : {};
    return a(e, d), e;
  }
  class p extends Array {
    constructor(e) {
      super(...(e || [])),
        (function (e) {
          const t = e.__proto__;
          Object.defineProperty(e, "__proto__", {
            get: () => t,
            set(e) {
              t.__proto__ = e;
            },
          });
        })(this);
    }
  }
  function u(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...u(e)) : t.push(e);
      }),
      t
    );
  }
  function h(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function f(e, t) {
    const s = c(),
      i = l();
    let n = [];
    if (!t && e instanceof p) return e;
    if (!e) return new p(n);
    if ("string" == typeof e) {
      const s = e.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let e = "div";
        0 === s.indexOf("<li") && (e = "ul"),
          0 === s.indexOf("<tr") && (e = "tbody"),
          (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
          0 === s.indexOf("<tbody") && (e = "table"),
          0 === s.indexOf("<option") && (e = "select");
        const t = i.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1)
          n.push(t.childNodes[e]);
      } else
        n = (function (e, t) {
          if ("string" != typeof e) return [e];
          const s = [],
            i = t.querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) s.push(i[e]);
          return s;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) n.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof p) return e;
      n = e;
    }
    return new p(
      (function (e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1)
          -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(n)
    );
  }
  f.fn = p.prototype;
  const m = "resize scroll".split(" ");
  function g(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          m.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : f(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  g("click"),
    g("blur"),
    g("focus"),
    g("focusin"),
    g("focusout"),
    g("keyup"),
    g("keydown"),
    g("keypress"),
    g("submit"),
    g("change"),
    g("mousedown"),
    g("mousemove"),
    g("mouseup"),
    g("mouseenter"),
    g("mouseleave"),
    g("mouseout"),
    g("mouseover"),
    g("touchstart"),
    g("touchend"),
    g("touchmove"),
    g("resize"),
    g("scroll");
  const v = {
    addClass: function (...e) {
      const t = u(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = u(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = u(e.map((e) => e.split(" ")));
      return (
        h(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = u(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1)
        if (2 === arguments.length) this[s].setAttribute(e, t);
        else
          for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, s, i, n] = e;
      function r(e) {
        const t = e.target;
        if (!t) return;
        const n = e.target.dom7EventData || [];
        if ((n.indexOf(e) < 0 && n.unshift(e), f(t).is(s))) i.apply(t, n);
        else {
          const e = f(t).parents();
          for (let t = 0; t < e.length; t += 1)
            f(e[t]).is(s) && i.apply(e[t], n);
        }
      }
      function a(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
      }
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const o = t.split(" ");
      let l;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (s)
          for (l = 0; l < o.length; l += 1) {
            const e = o[l];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: i, proxyListener: r }),
              t.addEventListener(e, r, n);
          }
        else
          for (l = 0; l < o.length; l += 1) {
            const e = o[l];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: i, proxyListener: a }),
              t.addEventListener(e, a, n);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, s, i, n] = e;
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const r = t.split(" ");
      for (let e = 0; e < r.length; e += 1) {
        const t = r[e];
        for (let e = 0; e < this.length; e += 1) {
          const r = this[e];
          let a;
          if (
            (!s && r.dom7Listeners
              ? (a = r.dom7Listeners[t])
              : s && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]),
            a && a.length)
          )
            for (let e = a.length - 1; e >= 0; e -= 1) {
              const s = a[e];
              (i && s.listener === i) ||
              (i &&
                s.listener &&
                s.listener.dom7proxy &&
                s.listener.dom7proxy === i)
                ? (r.removeEventListener(t, s.proxyListener, n), a.splice(e, 1))
                : i ||
                  (r.removeEventListener(t, s.proxyListener, n),
                  a.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = c(),
        s = e[0].split(" "),
        i = e[1];
      for (let n = 0; n < s.length; n += 1) {
        const r = s[n];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s];
          if (t.CustomEvent) {
            const s = new t.CustomEvent(r, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            });
            (n.dom7EventData = e.filter((e, t) => t > 0)),
              n.dispatchEvent(s),
              (n.dom7EventData = []),
              delete n.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function s(i) {
            i.target === this && (e.call(this, i), t.off("transitionend", s));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = c();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = c(),
          t = l(),
          s = this[0],
          i = s.getBoundingClientRect(),
          n = t.body,
          r = s.clientTop || n.clientTop || 0,
          a = s.clientLeft || n.clientLeft || 0,
          o = s === e ? e.scrollY : s.scrollTop,
          d = s === e ? e.scrollX : s.scrollLeft;
        return { top: i.top + o - r, left: i.left + d - a };
      }
      return null;
    },
    css: function (e, t) {
      const s = c();
      let i;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1)
            for (const t in e) this[i].style[t] = e[t];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, s) => {
            e.apply(t, [t, s]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = c(),
        s = l(),
        i = this[0];
      let n, r;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (n = f(e), r = 0; r < n.length; r += 1) if (n[r] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof p) {
        for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
          if (n[r] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return f([]);
      if (e < 0) {
        const s = t + e;
        return f(s < 0 ? [] : [this[s]]);
      }
      return f([this[e]]);
    },
    append: function (...e) {
      let t;
      const s = l();
      for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const i = s.createElement("div");
            for (i.innerHTML = t; i.firstChild; )
              this[e].appendChild(i.firstChild);
          } else if (t instanceof p)
            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = l();
      let s, i;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof e) {
          const n = t.createElement("div");
          for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
            this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof p)
          for (i = 0; i < e.length; i += 1)
            this[s].insertBefore(e[i], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && f(this[0].nextElementSibling).is(e)
            ? f([this[0].nextElementSibling])
            : f([])
          : this[0].nextElementSibling
          ? f([this[0].nextElementSibling])
          : f([])
        : f([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return f([]);
      for (; s.nextElementSibling; ) {
        const i = s.nextElementSibling;
        e ? f(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return f(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && f(t.previousElementSibling).is(e)
            ? f([t.previousElementSibling])
            : f([])
          : t.previousElementSibling
          ? f([t.previousElementSibling])
          : f([]);
      }
      return f([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return f([]);
      for (; s.previousElementSibling; ) {
        const i = s.previousElementSibling;
        e ? f(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return f(t);
    },
    parent: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (e
            ? f(this[s].parentNode).is(e) && t.push(this[s].parentNode)
            : t.push(this[s].parentNode));
      return f(t);
    },
    parents: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let i = this[s].parentNode;
        for (; i; ) e ? f(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
      }
      return f(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? f([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].querySelectorAll(e);
        for (let e = 0; e < i.length; e += 1) t.push(i[e]);
      }
      return f(t);
    },
    children: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].children;
        for (let s = 0; s < i.length; s += 1)
          (e && !f(i[s]).is(e)) || t.push(i[s]);
      }
      return f(t);
    },
    filter: function (e) {
      return f(h(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(v).forEach((e) => {
    Object.defineProperty(f.fn, e, { value: v[e], writable: !0 });
  });
  const w = f;
  function b(e, t = 0) {
    return setTimeout(e, t);
  }
  function S() {
    return Date.now();
  }
  function T(e, t = "x") {
    const s = c();
    let i, n, r;
    const a = (function (e) {
      const t = c();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((n = a.transform || a.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((r =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = r.toString().split(","))),
      "x" === t &&
        (n = s.WebKitCSSMatrix
          ? r.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (n = s.WebKitCSSMatrix
          ? r.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      n || 0
    );
  }
  function y(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function E(...e) {
    const t = Object(e[0]),
      s = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < e.length; n += 1) {
      const r = e[n];
      if (
        null != r &&
        ((i = r),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? i instanceof HTMLElement
          : i && (1 === i.nodeType || 11 === i.nodeType)))
      ) {
        const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
        for (let s = 0, i = e.length; s < i; s += 1) {
          const i = e[s],
            n = Object.getOwnPropertyDescriptor(r, i);
          void 0 !== n &&
            n.enumerable &&
            (y(t[i]) && y(r[i])
              ? r[i].__swiper__
                ? (t[i] = r[i])
                : E(t[i], r[i])
              : !y(t[i]) && y(r[i])
              ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : E(t[i], r[i]))
              : (t[i] = r[i]));
        }
      }
    }
    var i;
    return t;
  }
  function C(e, t, s) {
    e.style.setProperty(t, s);
  }
  function x({ swiper: e, targetPosition: t, side: s }) {
    const i = c(),
      n = -e.translate;
    let r,
      a = null;
    const o = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > n ? "next" : "prev",
      d = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
      p = () => {
        (r = new Date().getTime()), null === a && (a = r);
        const l = Math.max(Math.min((r - a) / o, 1), 0),
          c = 0.5 - Math.cos(l * Math.PI) / 2;
        let u = n + c * (t - n);
        if ((d(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), d(u, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: u });
            }),
            void i.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = i.requestAnimationFrame(p);
      };
    p();
  }
  let L, M, P;
  function k() {
    return (
      L ||
        (L = (function () {
          const e = c(),
            t = l();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const s = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, s);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      L
    );
  }
  function $(e = {}) {
    return (
      M ||
        (M = (function ({ userAgent: e } = {}) {
          const t = k(),
            s = c(),
            i = s.navigator.platform,
            n = e || s.navigator.userAgent,
            r = { ios: !1, android: !1 },
            a = s.screen.width,
            o = s.screen.height,
            l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let d = n.match(/(iPad).*OS\s([\d_]+)/);
          const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            u = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === i;
          let f = "MacIntel" === i;
          return (
            !d &&
              f &&
              t.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${a}x${o}`) >= 0 &&
              ((d = n.match(/(Version)\/([\d.]+)/)),
              d || (d = [0, 1, "13_0_0"]),
              (f = !1)),
            l && !h && ((r.os = "android"), (r.android = !0)),
            (d || u || p) && ((r.os = "ios"), (r.ios = !0)),
            r
          );
        })(e)),
      M
    );
  }
  function O() {
    return (
      P ||
        (P = (function () {
          const e = c();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      P
    );
  }
  const A = {
    on(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      const n = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][n](t);
        }),
        i
      );
    },
    once(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      function n(...s) {
        i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(i, s);
      }
      return (n.__emitterProxy = t), i.on(e, n, s);
    },
    onAny(e, t) {
      const s = this;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((i, n) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(n, 1);
                });
          }),
          s)
        : s;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners) return t;
      let s, i, n;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
        : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
        i.unshift(n);
      return (
        (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(n, [e, ...i]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(n, i);
              });
        }),
        t
      );
    },
  };
  const z = {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i[0].clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(i.css("padding-left") || 0, 10) -
            parseInt(i.css("padding-right") || 0, 10)),
          (s =
            s -
            parseInt(i.css("padding-top") || 0, 10) -
            parseInt(i.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const i = e.params,
        { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: o } = e,
        l = e.virtual && i.virtual.enabled,
        d = l ? e.virtual.slides.length : e.slides.length,
        c = n.children(`.${e.params.slideClass}`),
        p = l ? e.virtual.slides.length : c.length;
      let u = [];
      const h = [],
        f = [];
      let m = i.slidesOffsetBefore;
      "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
      let g = i.slidesOffsetAfter;
      "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        w = e.slidesGrid.length;
      let b = i.spaceBetween,
        S = -m,
        T = 0,
        y = 0;
      if (void 0 === r) return;
      "string" == typeof b &&
        b.indexOf("%") >= 0 &&
        (b = (parseFloat(b.replace("%", "")) / 100) * r),
        (e.virtualSize = -b),
        a
          ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        i.centeredSlides &&
          i.cssMode &&
          (C(e.wrapperEl, "--swiper-centered-offset-before", ""),
          C(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const E = i.grid && i.grid.rows > 1 && e.grid;
      let x;
      E && e.grid.initSlides(p);
      const L =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < p; n += 1) {
        x = 0;
        const a = c.eq(n);
        if (
          (E && e.grid.updateSlide(n, a, p, t), "none" !== a.css("display"))
        ) {
          if ("auto" === i.slidesPerView) {
            L && (c[n].style[t("width")] = "");
            const r = getComputedStyle(a[0]),
              o = a[0].style.transform,
              l = a[0].style.webkitTransform;
            if (
              (o && (a[0].style.transform = "none"),
              l && (a[0].style.webkitTransform = "none"),
              i.roundLengths)
            )
              x = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
            else {
              const e = s(r, "width"),
                t = s(r, "padding-left"),
                i = s(r, "padding-right"),
                n = s(r, "margin-left"),
                o = s(r, "margin-right"),
                l = r.getPropertyValue("box-sizing");
              if (l && "border-box" === l) x = e + n + o;
              else {
                const { clientWidth: s, offsetWidth: r } = a[0];
                x = e + t + i + n + o + (r - s);
              }
            }
            o && (a[0].style.transform = o),
              l && (a[0].style.webkitTransform = l),
              i.roundLengths && (x = Math.floor(x));
          } else
            (x = (r - (i.slidesPerView - 1) * b) / i.slidesPerView),
              i.roundLengths && (x = Math.floor(x)),
              c[n] && (c[n].style[t("width")] = `${x}px`);
          c[n] && (c[n].swiperSlideSize = x),
            f.push(x),
            i.centeredSlides
              ? ((S = S + x / 2 + T / 2 + b),
                0 === T && 0 !== n && (S = S - r / 2 - b),
                0 === n && (S = S - r / 2 - b),
                Math.abs(S) < 0.001 && (S = 0),
                i.roundLengths && (S = Math.floor(S)),
                y % i.slidesPerGroup == 0 && u.push(S),
                h.push(S))
              : (i.roundLengths && (S = Math.floor(S)),
                (y - Math.min(e.params.slidesPerGroupSkip, y)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(S),
                h.push(S),
                (S = S + x + b)),
            (e.virtualSize += x + b),
            (T = x),
            (y += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + g),
        a &&
          o &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
        i.setWrapperSize &&
          n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
        E && e.grid.updateWrapperSize(x, u, t),
        !i.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < u.length; s += 1) {
          let n = u[s];
          i.roundLengths && (n = Math.floor(n)),
            u[s] <= e.virtualSize - r && t.push(n);
        }
        (u = t),
          Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - r);
      }
      if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
        const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
        c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
          [s]: `${b}px`,
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        f.forEach((t) => {
          e += t + (i.spaceBetween ? i.spaceBetween : 0);
        }),
          (e -= i.spaceBetween);
        const t = e - r;
        u = u.map((e) => (e < 0 ? -m : e > t ? t + g : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (f.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
          (e -= i.spaceBetween),
          e < r)
        ) {
          const t = (r - e) / 2;
          u.forEach((e, s) => {
            u[s] = e - t;
          }),
            h.forEach((e, s) => {
              h[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: h,
          slidesSizesGrid: f,
        }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        C(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
          C(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - f[f.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      p !== d && e.emit("slidesLengthChange"),
        u.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        h.length !== w && e.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && e.updateSlidesOffset();
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      let n,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const a = (e) =>
        i
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          t.visibleSlides.each((e) => {
            s.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !i) break;
            s.push(a(e));
          }
      else s.push(a(t.activeIndex));
      for (n = 0; n < s.length; n += 1)
        if (void 0 !== s[n]) {
          const e = s[n].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let s = 0; s < t.length; s += 1)
        t[s].swiperSlideOffset = e.isHorizontal()
          ? t[s].offsetLeft
          : t[s].offsetTop;
    },
    updateSlidesProgress: function (e = (this && this.translate) || 0) {
      const t = this,
        s = t.params,
        { slides: i, rtlTranslate: n, snapGrid: r } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let a = -e;
      n && (a = e),
        i.removeClass(s.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < i.length; e += 1) {
        const o = i[e];
        let l = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
        const d =
            (a + (s.centeredSlides ? t.minTranslate() : 0) - l) /
            (o.swiperSlideSize + s.spaceBetween),
          c =
            (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
            (o.swiperSlideSize + s.spaceBetween),
          p = -(a - l),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (p <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(o),
          t.visibleSlidesIndexes.push(e),
          i.eq(e).addClass(s.slideVisibleClass)),
          (o.progress = n ? -d : d),
          (o.originalProgress = n ? -c : c);
      }
      t.visibleSlides = w(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: r, isEnd: a } = t;
      const o = r,
        l = a;
      0 === i
        ? ((n = 0), (r = !0), (a = !0))
        : ((n = (e - t.minTranslate()) / i), (r = n <= 0), (a = n >= 1)),
        Object.assign(t, { progress: n, isBeginning: r, isEnd: a }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        a && !l && t.emit("reachEnd toEdge"),
        ((o && !r) || (l && !a)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: s,
          $wrapperEl: i,
          activeIndex: n,
          realIndex: r,
        } = e,
        a = e.virtual && s.virtual.enabled;
      let o;
      t.removeClass(
        `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
      ),
        (o = a
          ? e.$wrapperEl.find(
              `.${s.slideClass}[data-swiper-slide-index="${n}"]`
            )
          : t.eq(n)),
        o.addClass(s.slideActiveClass),
        s.loop &&
          (o.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass)
            : i
                .children(
                  `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass));
      let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(s.slideNextClass));
      let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
      s.loop &&
        0 === d.length &&
        ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
        s.loop &&
          (l.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass),
          d.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: i,
          snapGrid: n,
          params: r,
          activeIndex: a,
          realIndex: o,
          snapIndex: l,
        } = t;
      let d,
        c = e;
      if (void 0 === c) {
        for (let e = 0; e < i.length; e += 1)
          void 0 !== i[e + 1]
            ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
              ? (c = e)
              : s >= i[e] && s < i[e + 1] && (c = e + 1)
            : s >= i[e] && (c = e);
        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }
      if (n.indexOf(s) >= 0) d = n.indexOf(s);
      else {
        const e = Math.min(r.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / r.slidesPerGroup);
      }
      if ((d >= n.length && (d = n.length - 1), c === a))
        return void (d !== l && ((t.snapIndex = d), t.emit("snapIndexChange")));
      const p = parseInt(
        t.slides.eq(c).attr("data-swiper-slide-index") || c,
        10
      );
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: a,
        activeIndex: c,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        o !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        i = w(e).closest(`.${s.slideClass}`)[0];
      let n,
        r = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (r = !0), (n = e);
            break;
          }
      if (!i || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              w(i).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const I = {
    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
      const { params: t, rtlTranslate: s, translate: i, $wrapperEl: n } = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let r = T(n[0], e);
      return s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        {
          rtlTranslate: i,
          params: n,
          $wrapperEl: r,
          wrapperEl: a,
          progress: o,
        } = s;
      let l,
        d = 0,
        c = 0;
      s.isHorizontal() ? (d = i ? -e : e) : (c = e),
        n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
        n.cssMode
          ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -d
              : -c)
          : n.virtualTranslate ||
            r.transform(`translate3d(${d}px, ${c}px, 0px)`),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? d : c);
      const p = s.maxTranslate() - s.minTranslate();
      (l = 0 === p ? 0 : (e - s.minTranslate()) / p),
        l !== o && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
      const r = this,
        { params: a, wrapperEl: o } = r;
      if (r.animating && a.preventInteractionOnTransition) return !1;
      const l = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = i && e > l ? l : i && e < d ? d : e),
        r.updateProgress(c),
        a.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              x({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            s &&
              (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(c),
            s &&
              (r.emit("beforeTransitionStart", t, n),
              r.emit("transitionStart")),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    s && r.emit("transitionEnd"));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function D({ swiper: e, runCallbacks: t, direction: s, step: i }) {
    const { activeIndex: n, previousIndex: r } = e;
    let a = s;
    if (
      (a || (a = n > r ? "next" : n < r ? "prev" : "reset"),
      e.emit(`transition${i}`),
      t && n !== r)
    ) {
      if ("reset" === a) return void e.emit(`slideResetTransition${i}`);
      e.emit(`slideChangeTransition${i}`),
        "next" === a
          ? e.emit(`slideNextTransition${i}`)
          : e.emit(`slidePrevTransition${i}`);
    }
  }
  const _ = {
    slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
      if ("number" != typeof e && "string" != typeof e)
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const r = this;
      let a = e;
      a < 0 && (a = 0);
      const {
        params: o,
        snapGrid: l,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: f,
      } = r;
      if ((r.animating && o.preventInteractionOnTransition) || (!f && !i && !n))
        return !1;
      const m = Math.min(r.params.slidesPerGroupSkip, a);
      let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
      g >= l.length && (g = l.length - 1),
        (p || o.initialSlide || 0) === (c || 0) &&
          s &&
          r.emit("beforeSlideChangeStart");
      const v = -l[g];
      if ((r.updateProgress(v), o.normalizeSlideIndex))
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
            s = Math.floor(100 * d[e]),
            i = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < i - (i - s) / 2
              ? (a = e)
              : t >= s && t < i && (a = e + 1)
            : t >= s && (a = e);
        }
      if (r.initialized && a !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          v > r.translate &&
          v > r.maxTranslate() &&
          (p || 0) !== a
        )
          return !1;
      }
      let w;
      if (
        ((w = a > p ? "next" : a < p ? "prev" : "reset"),
        (u && -v === r.translate) || (!u && v === r.translate))
      )
        return (
          r.updateActiveIndex(a),
          o.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== o.effect && r.setTranslate(v),
          "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)),
          !1
        );
      if (o.cssMode) {
        const e = r.isHorizontal(),
          s = u ? v : -v;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._swiperImmediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              x({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(v),
        r.updateActiveIndex(a),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, i),
        r.transitionStart(s, w),
        0 === t
          ? r.transitionEnd(s, w)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, w));
              }),
            r.$wrapperEl[0].addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            ),
            r.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
      const n = this;
      let r = e;
      return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
    },
    slideNext: function (e = this.params.speed, t = !0, s) {
      const i = this,
        { animating: n, enabled: r, params: a } = i;
      if (!r) return i;
      let o = a.slidesPerGroup;
      "auto" === a.slidesPerView &&
        1 === a.slidesPerGroup &&
        a.slidesPerGroupAuto &&
        (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o;
      if (a.loop) {
        if (n && a.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      return a.rewind && i.isEnd
        ? i.slideTo(0, e, t, s)
        : i.slideTo(i.activeIndex + l, e, t, s);
    },
    slidePrev: function (e = this.params.speed, t = !0, s) {
      const i = this,
        {
          params: n,
          animating: r,
          snapGrid: a,
          slidesGrid: o,
          rtlTranslate: l,
          enabled: d,
        } = i;
      if (!d) return i;
      if (n.loop) {
        if (r && n.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = c(l ? i.translate : -i.translate),
        u = a.map((e) => c(e));
      let h = a[u.indexOf(p) - 1];
      if (void 0 === h && n.cssMode) {
        let e;
        a.forEach((t, s) => {
          p >= t && (e = s);
        }),
          void 0 !== e && (h = a[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      return (
        void 0 !== h &&
          ((f = o.indexOf(h)),
          f < 0 && (f = i.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
            (f = Math.max(f, 0)))),
        n.rewind && i.isBeginning
          ? i.slideTo(i.slides.length - 1, e, t, s)
          : i.slideTo(f, e, t, s)
      );
    },
    slideReset: function (e = this.params.speed, t = !0, s) {
      return this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
      const n = this;
      let r = n.activeIndex;
      const a = Math.min(n.params.slidesPerGroupSkip, r),
        o = a + Math.floor((r - a) / n.params.slidesPerGroup),
        l = n.rtlTranslate ? n.translate : -n.translate;
      if (l >= n.snapGrid[o]) {
        const e = n.snapGrid[o];
        l - e > (n.snapGrid[o + 1] - e) * i && (r += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[o - 1];
        l - e <= (n.snapGrid[o] - e) * i && (r -= n.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, n.slidesGrid.length - 1)),
        n.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: s } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        r = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(w(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? r < e.loopedSlides - i / 2 ||
              r > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                b(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - i
            ? (e.loopFix(),
              (r = s
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              b(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  const G = {
    loopCreate: function () {
      const e = this,
        t = l(),
        { params: s, $wrapperEl: i } = e,
        n = i.children().length > 0 ? w(i.children()[0].parentNode) : i;
      n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
      let r = n.children(`.${s.slideClass}`);
      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
        if (e !== s.slidesPerGroup) {
          for (let i = 0; i < e; i += 1) {
            const e = w(t.createElement("div")).addClass(
              `${s.slideClass} ${s.slideBlankClass}`
            );
            n.append(e);
          }
          r = n.children(`.${s.slideClass}`);
        }
      }
      "auto" !== s.slidesPerView ||
        s.loopedSlides ||
        (s.loopedSlides = r.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(s.loopedSlides || s.slidesPerView, 10)
        )),
        (e.loopedSlides += s.loopAdditionalSlides),
        e.loopedSlides > r.length && (e.loopedSlides = r.length);
      const a = [],
        o = [];
      r.each((t, s) => {
        const i = w(t);
        s < e.loopedSlides && o.push(t),
          s < r.length && s >= r.length - e.loopedSlides && a.push(t),
          i.attr("data-swiper-slide-index", s);
      });
      for (let e = 0; e < o.length; e += 1)
        n.append(w(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      for (let e = a.length - 1; e >= 0; e -= 1)
        n.prepend(w(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: s,
        loopedSlides: i,
        allowSlidePrev: n,
        allowSlideNext: r,
        snapGrid: a,
        rtlTranslate: o,
      } = e;
      let l;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const d = -a[t] - e.getTranslate();
      if (t < i) {
        (l = s.length - 3 * i + t), (l += i);
        e.slideTo(l, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((o ? -e.translate : e.translate) - d);
      } else if (t >= s.length - i) {
        (l = -s.length + t + i), (l += i);
        e.slideTo(l, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((o ? -e.translate : e.translate) - d);
      }
      (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: s } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        s.removeAttr("data-swiper-slide-index");
    },
  };
  function B(e) {
    const t = this,
      s = l(),
      i = c(),
      n = t.touchEventsData,
      { params: r, touches: a, enabled: o } = t;
    if (!o) return;
    if (t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let d = e;
    d.originalEvent && (d = d.originalEvent);
    let p = w(d.target);
    if ("wrapper" === r.touchEventsTarget && !p.closest(t.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = "touchstart" === d.type),
      !n.isTouchEvent && "which" in d && 3 === d.which)
    )
      return;
    if (!n.isTouchEvent && "button" in d && d.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!r.noSwipingClass &&
      "" !== r.noSwipingClass &&
      d.target &&
      d.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (p = w(e.path[0]));
    const u = r.noSwipingSelector
        ? r.noSwipingSelector
        : `.${r.noSwipingClass}`,
      h = !(!d.target || !d.target.shadowRoot);
    if (
      r.noSwiping &&
      (h
        ? (function (e, t = this) {
            return (function t(s) {
              return s && s !== l() && s !== c()
                ? (s.assignedSlot && (s = s.assignedSlot),
                  s.closest(e) || t(s.getRootNode().host))
                : null;
            })(t);
          })(u, d.target)
        : p.closest(u)[0])
    )
      return void (t.allowClick = !0);
    if (r.swipeHandler && !p.closest(r.swipeHandler)[0]) return;
    (a.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
      (a.currentY =
        "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
    const f = a.currentX,
      m = a.currentY,
      g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
      v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (g && (f <= v || f >= i.innerWidth - v)) {
      if ("prevent" !== g) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (a.startX = f),
      (a.startY = m),
      (n.touchStartTime = S()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      r.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== d.type)
    ) {
      let e = !0;
      p.is(n.focusableElements) && (e = !1),
        s.activeElement &&
          w(s.activeElement).is(n.focusableElements) &&
          s.activeElement !== p[0] &&
          s.activeElement.blur();
      const i = e && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !i) ||
        p[0].isContentEditable ||
        d.preventDefault();
    }
    t.emit("touchStart", d);
  }
  function N(e) {
    const t = l(),
      s = this,
      i = s.touchEventsData,
      { params: n, touches: r, rtlTranslate: a, enabled: o } = s;
    if (!o) return;
    let d = e;
    if ((d.originalEvent && (d = d.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", d)
      );
    if (i.isTouchEvent && "touchmove" !== d.type) return;
    const c =
        "touchmove" === d.type &&
        d.targetTouches &&
        (d.targetTouches[0] || d.changedTouches[0]),
      p = "touchmove" === d.type ? c.pageX : d.pageX,
      u = "touchmove" === d.type ? c.pageY : d.pageY;
    if (d.preventedByNestedSwiper) return (r.startX = p), void (r.startY = u);
    if (!s.allowTouchMove)
      return (
        (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(r, { startX: p, startY: u, currentX: p, currentY: u }),
          (i.touchStartTime = S()))
        )
      );
    if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
      if (s.isVertical()) {
        if (
          (u < r.startY && s.translate <= s.maxTranslate()) ||
          (u > r.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (p < r.startX && s.translate <= s.maxTranslate()) ||
        (p > r.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      i.isTouchEvent &&
      t.activeElement &&
      d.target === t.activeElement &&
      w(d.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", d),
      d.targetTouches && d.targetTouches.length > 1)
    )
      return;
    (r.currentX = p), (r.currentY = u);
    const h = r.currentX - r.startX,
      f = r.currentY - r.startY;
    if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && r.currentY === r.startY) ||
      (s.isVertical() && r.currentX === r.startX)
        ? (i.isScrolling = !1)
        : h * h + f * f >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", d),
      void 0 === i.startMoving &&
        ((r.currentX === r.startX && r.currentY === r.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !n.cssMode && d.cancelable && d.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && d.stopPropagation(),
      i.isMoved ||
        (n.loop && !n.cssMode && s.loopFix(),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (i.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", d)),
      s.emit("sliderMove", d),
      (i.isMoved = !0);
    let m = s.isHorizontal() ? h : f;
    (r.diff = m),
      (m *= n.touchRatio),
      a && (m = -m),
      (s.swipeDirection = m > 0 ? "prev" : "next"),
      (i.currentTranslate = m + i.startTranslate);
    let g = !0,
      v = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (v = 0),
      m > 0 && i.currentTranslate > s.minTranslate()
        ? ((g = !1),
          n.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + i.startTranslate + m) ** v))
        : m < 0 &&
          i.currentTranslate < s.maxTranslate() &&
          ((g = !1),
          n.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - i.startTranslate - m) ** v)),
      g && (d.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(m) > n.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (i.currentTranslate = i.startTranslate),
          void (r.diff = s.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
        n.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        n.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function V(e) {
    const t = this,
      s = t.touchEventsData,
      { params: i, touches: n, rtlTranslate: r, slidesGrid: a, enabled: o } = t;
    if (!o) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", l),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    i.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const d = S(),
      c = d - s.touchStartTime;
    if (t.allowClick) {
      const e = l.path || (l.composedPath && l.composedPath());
      t.updateClickedSlide((e && e[0]) || l.target),
        t.emit("tap click", l),
        c < 300 &&
          d - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", l);
    }
    if (
      ((s.lastClickTime = S()),
      b(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === n.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let p;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (p = i.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      i.cssMode)
    )
      return;
    if (t.params.freeMode && i.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: p });
    let u = 0,
      h = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < a.length;
      e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== a[e + t]
        ? p >= a[e] && p < a[e + t] && ((u = e), (h = a[e + t] - a[e]))
        : p >= a[e] && ((u = e), (h = a[a.length - 1] - a[a.length - 2]));
    }
    const f = (p - a[u]) / h,
      m = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (c > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (f >= i.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u)),
        "prev" === t.swipeDirection &&
          (f > 1 - i.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
        ? l.target === t.navigation.nextEl
          ? t.slideTo(u + m)
          : t.slideTo(u)
        : ("next" === t.swipeDirection && t.slideTo(u + m),
          "prev" === t.swipeDirection && t.slideTo(u));
    }
  }
  function H() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = i),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function j(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function F() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let W = !1;
  function q() {}
  const R = (e, t) => {
    const s = l(),
      {
        params: i,
        touchEvents: n,
        el: r,
        wrapperEl: a,
        device: o,
        support: d,
      } = e,
      c = !!i.nested,
      p = "on" === t ? "addEventListener" : "removeEventListener",
      u = t;
    if (d.touch) {
      const t = !(
        "touchstart" !== n.start ||
        !d.passiveListener ||
        !i.passiveListeners
      ) && { passive: !0, capture: !1 };
      r[p](n.start, e.onTouchStart, t),
        r[p](
          n.move,
          e.onTouchMove,
          d.passiveListener ? { passive: !1, capture: c } : c
        ),
        r[p](n.end, e.onTouchEnd, t),
        n.cancel && r[p](n.cancel, e.onTouchEnd, t);
    } else
      r[p](n.start, e.onTouchStart, !1),
        s[p](n.move, e.onTouchMove, c),
        s[p](n.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) &&
      r[p]("click", e.onClick, !0),
      i.cssMode && a[p]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[u](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            H,
            !0
          )
        : e[u]("observerUpdate", H, !0);
  };
  const Y = {
      attachEvents: function () {
        const e = this,
          t = l(),
          { params: s, support: i } = e;
        (e.onTouchStart = B.bind(e)),
          (e.onTouchMove = N.bind(e)),
          (e.onTouchEnd = V.bind(e)),
          s.cssMode && (e.onScroll = F.bind(e)),
          (e.onClick = j.bind(e)),
          i.touch && !W && (t.addEventListener("touchstart", q), (W = !0)),
          R(e, "on");
      },
      detachEvents: function () {
        R(this, "off");
      },
    },
    X = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const U = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: s,
          loopedSlides: i = 0,
          params: n,
          $el: r,
        } = e,
        a = n.breakpoints;
      if (!a || (a && 0 === Object.keys(a).length)) return;
      const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
      if (!o || e.currentBreakpoint === o) return;
      const l = (o in a ? a[o] : void 0) || e.originalParams,
        d = X(e, n),
        c = X(e, l),
        p = n.enabled;
      d && !c
        ? (r.removeClass(
            `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !d &&
          c &&
          (r.addClass(`${n.containerModifierClass}grid`),
          ((l.grid.fill && "column" === l.grid.fill) ||
            (!l.grid.fill && "column" === n.grid.fill)) &&
            r.addClass(`${n.containerModifierClass}grid-column`),
          e.emitContainerClasses());
      const u = l.direction && l.direction !== n.direction,
        h = n.loop && (l.slidesPerView !== n.slidesPerView || u);
      u && s && e.changeDirection(), E(e.params, l);
      const f = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        p && !f ? e.disable() : !p && f && e.enable(),
        (e.currentBreakpoint = o),
        e.emit("_beforeBreakpoint", l),
        h &&
          s &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - i + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", l);
    },
    getBreakpoint: function (e, t = "window", s) {
      if (!e || ("container" === t && !s)) return;
      let i = !1;
      const n = c(),
        r = "window" === t ? n.innerHeight : s.clientHeight,
        a = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: r * t, point: e };
          }
          return { value: e, point: e };
        });
      a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < a.length; e += 1) {
        const { point: r, value: o } = a[e];
        "window" === t
          ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = r)
          : o <= s.clientWidth && (i = r);
      }
      return i || "max";
    },
  };
  const K = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: s, rtl: i, $el: n, device: r, support: a } = e,
        o = (function (e, t) {
          const s = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((i) => {
                    e[i] && s.push(t + i);
                  })
                : "string" == typeof e && s.push(t + e);
            }),
            s
          );
        })(
          [
            "initialized",
            s.direction,
            { "pointer-events": !a.touch },
            { "free-mode": e.params.freeMode && s.freeMode.enabled },
            { autoheight: s.autoHeight },
            { rtl: i },
            { grid: s.grid && s.grid.rows > 1 },
            {
              "grid-column":
                s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
            },
            { android: r.android },
            { ios: r.ios },
            { "css-mode": s.cssMode },
            { centered: s.cssMode && s.centeredSlides },
          ],
          s.containerModifierClass
        );
      t.push(...o), n.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const Q = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function J(e, t) {
    return function (s = {}) {
      const i = Object.keys(s)[0],
        n = s[i];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in n
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              E(t, s))
            : E(t, s))
        : E(t, s);
    };
  }
  const Z = {
      eventsEmitter: A,
      update: z,
      translate: I,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          i.cssMode ||
            (i.autoHeight && s.updateAutoHeight(),
            D({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          (s.animating = !1),
            i.cssMode ||
              (s.setTransition(0),
              D({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: _,
      loop: G,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (s.style.cursor = "move"),
            (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (s.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: Y,
      breakpoints: U,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s;
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: K,
      images: {
        loadImage: function (e, t, s, i, n, r) {
          const a = c();
          let o;
          function l() {
            r && r();
          }
          w(e).parent("picture")[0] || (e.complete && n)
            ? l()
            : t
            ? ((o = new a.Image()),
              (o.onload = l),
              (o.onerror = l),
              i && (o.sizes = i),
              s && (o.srcset = s),
              t && (o.src = t))
            : l();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const i = e.imagesToLoad[s];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    ee = {};
  class te {
    constructor(...e) {
      let t, s;
      if (
        (1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
        s || (s = {}),
        (s = E({}, s)),
        t && !s.el && (s.el = t),
        s.el && w(s.el).length > 1)
      ) {
        const e = [];
        return (
          w(s.el).each((t) => {
            const i = E({}, s, { el: t });
            e.push(new te(i));
          }),
          e
        );
      }
      const i = this;
      (i.__swiper__ = !0),
        (i.support = k()),
        (i.device = $({ userAgent: s.userAgent })),
        (i.browser = O()),
        (i.eventsListeners = {}),
        (i.eventsAnyListeners = []),
        (i.modules = [...i.__modules__]),
        s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
      const n = {};
      i.modules.forEach((e) => {
        e({
          swiper: i,
          extendParams: J(s, n),
          on: i.on.bind(i),
          once: i.once.bind(i),
          off: i.off.bind(i),
          emit: i.emit.bind(i),
        });
      });
      const r = E({}, Q, n);
      return (
        (i.params = E({}, r, ee, s)),
        (i.originalParams = E({}, i.params)),
        (i.passedParams = E({}, s)),
        i.params &&
          i.params.on &&
          Object.keys(i.params.on).forEach((e) => {
            i.on(e, i.params.on[e]);
          }),
        i.params && i.params.onAny && i.onAny(i.params.onAny),
        (i.$ = w),
        Object.assign(i, {
          enabled: i.params.enabled,
          el: t,
          classNames: [],
          slides: w(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === i.params.direction,
          isVertical: () => "vertical" === i.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: i.params.allowSlideNext,
          allowSlidePrev: i.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (i.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              i.support.touch || !i.params.simulateTouch
                ? i.touchEventsTouch
                : i.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: i.params.focusableElements,
            lastClickTime: S(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: i.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        i.emit("_swiper"),
        i.params.init && i.init(),
        i
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = s.minTranslate(),
        n = (s.maxTranslate() - i) * e + i;
      s.translateTo(n, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return e.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper-slide") ||
            0 === e.indexOf(t.params.slideClass)
        )
        .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((s) => {
        const i = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: s,
        slides: i,
        slidesGrid: n,
        slidesSizesGrid: r,
        size: a,
        activeIndex: o,
      } = this;
      let l = 1;
      if (s.centeredSlides) {
        let e,
          t = i[o].swiperSlideSize;
        for (let s = o + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
        for (let s = o - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
      } else if ("current" === e)
        for (let e = o + 1; e < i.length; e += 1) {
          (t ? n[e] + r[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
        }
      else
        for (let e = o - 1; e >= 0; e -= 1) {
          n[o] - n[e] < a && (l += 1);
        }
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (i(), e.params.autoHeight && e.updateAutoHeight())
          : ((n =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            n || i()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const s = this,
        i = s.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${i}`)
            .addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = w(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = w(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => s.children(e)), t;
        }
        return s.children(i());
      })();
      if (0 === n.length && t.params.createElements) {
        const e = l().createElement("div");
        (n = w(e)),
          (e.className = t.params.wrapperClass),
          s.append(e),
          s.children(`.${t.params.slideClass}`).each((e) => {
            n.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: n,
          wrapperEl: n[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === n.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const s = this,
        { params: i, $el: n, $wrapperEl: r, slides: a } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            n.removeAttr("style"),
            r.removeAttr("style"),
            a &&
              a.length &&
              a
                .removeClass(
                  [
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      E(ee, e);
    }
    static get extendedDefaults() {
      return ee;
    }
    static get defaults() {
      return Q;
    }
    static installModule(e) {
      te.prototype.__modules__ || (te.prototype.__modules__ = []);
      const t = te.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => te.installModule(e)), te)
        : (te.installModule(e), te);
    }
  }
  Object.keys(Z).forEach((e) => {
    Object.keys(Z[e]).forEach((t) => {
      te.prototype[t] = Z[e][t];
    });
  }),
    te.use([
      function ({ swiper: e, on: t, emit: s }) {
        const i = c();
        let n = null;
        const r = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s("beforeResize"), s("resize"));
          },
          a = () => {
            e && !e.destroyed && e.initialized && s("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== i.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((n = new ResizeObserver((t) => {
                const { width: s, height: i } = e;
                let n = s,
                  a = i;
                t.forEach(
                  ({ contentBoxSize: t, contentRect: s, target: i }) => {
                    (i && i !== e.el) ||
                      ((n = s ? s.width : (t[0] || t).inlineSize),
                      (a = s ? s.height : (t[0] || t).blockSize));
                  }
                ),
                  (n === s && a === i) || r();
              })),
              n.observe(e.el))
            : (i.addEventListener("resize", r),
              i.addEventListener("orientationchange", a));
        }),
          t("destroy", () => {
            n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
              i.removeEventListener("resize", r),
              i.removeEventListener("orientationchange", a);
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: i }) {
        const n = [],
          r = c(),
          a = (e, t = {}) => {
            const s = new (r.MutationObserver || r.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const t = function () {
                  i("observerUpdate", e[0]);
                };
                r.requestAnimationFrame
                  ? r.requestAnimationFrame(t)
                  : r.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              n.push(s);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = e.$el.parents();
                for (let e = 0; e < t.length; e += 1) a(t[e]);
              }
              a(e.$el[0], { childList: e.params.observeSlideChildren }),
                a(e.$wrapperEl[0], { attributes: !1 });
            }
          }),
          s("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const se = te;
  function ie({ swiper: e, extendParams: t, on: s, emit: i }) {
    const n = l();
    let r,
      a,
      o,
      d,
      c = !1,
      p = null,
      u = null;
    function h() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: t, rtlTranslate: s, progress: i } = e,
        { $dragEl: n, $el: r } = t,
        l = e.params.scrollbar;
      let d = a,
        c = (o - a) * i;
      s
        ? ((c = -c), c > 0 ? ((d = a - c), (c = 0)) : -c + a > o && (d = o + c))
        : c < 0
        ? ((d = a + c), (c = 0))
        : c + a > o && (d = o - c),
        e.isHorizontal()
          ? (n.transform(`translate3d(${c}px, 0, 0)`),
            (n[0].style.width = `${d}px`))
          : (n.transform(`translate3d(0px, ${c}px, 0)`),
            (n[0].style.height = `${d}px`)),
        l.hide &&
          (clearTimeout(p),
          (r[0].style.opacity = 1),
          (p = setTimeout(() => {
            (r[0].style.opacity = 0), r.transition(400);
          }, 1e3)));
    }
    function f() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: t } = e,
        { $dragEl: s, $el: i } = t;
      (s[0].style.width = ""),
        (s[0].style.height = ""),
        (o = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight),
        (d =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        (a =
          "auto" === e.params.scrollbar.dragSize
            ? o * d
            : parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? (s[0].style.width = `${a}px`)
          : (s[0].style.height = `${a}px`),
        (i[0].style.display = d >= 1 ? "none" : ""),
        e.params.scrollbar.hide && (i[0].style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          t.$el[e.isLocked ? "addClass" : "removeClass"](
            e.params.scrollbar.lockClass
          );
    }
    function m(t) {
      return e.isHorizontal()
        ? "touchstart" === t.type || "touchmove" === t.type
          ? t.targetTouches[0].clientX
          : t.clientX
        : "touchstart" === t.type || "touchmove" === t.type
        ? t.targetTouches[0].clientY
        : t.clientY;
    }
    function g(t) {
      const { scrollbar: s, rtlTranslate: i } = e,
        { $el: n } = s;
      let l;
      (l =
        (m(t) -
          n.offset()[e.isHorizontal() ? "left" : "top"] -
          (null !== r ? r : a / 2)) /
        (o - a)),
        (l = Math.max(Math.min(l, 1), 0)),
        i && (l = 1 - l);
      const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * l;
      e.updateProgress(d),
        e.setTranslate(d),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function v(t) {
      const s = e.params.scrollbar,
        { scrollbar: n, $wrapperEl: a } = e,
        { $el: o, $dragEl: l } = n;
      (c = !0),
        (r =
          t.target === l[0] || t.target === l
            ? m(t) -
              t.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        t.preventDefault(),
        t.stopPropagation(),
        a.transition(100),
        l.transition(100),
        g(t),
        clearTimeout(u),
        o.transition(0),
        s.hide && o.css("opacity", 1),
        e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
        i("scrollbarDragStart", t);
    }
    function S(t) {
      const { scrollbar: s, $wrapperEl: n } = e,
        { $el: r, $dragEl: a } = s;
      c &&
        (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
        g(t),
        n.transition(0),
        r.transition(0),
        a.transition(0),
        i("scrollbarDragMove", t));
    }
    function T(t) {
      const s = e.params.scrollbar,
        { scrollbar: n, $wrapperEl: r } = e,
        { $el: a } = n;
      c &&
        ((c = !1),
        e.params.cssMode &&
          (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
        s.hide &&
          (clearTimeout(u),
          (u = b(() => {
            a.css("opacity", 0), a.transition(400);
          }, 1e3))),
        i("scrollbarDragEnd", t),
        s.snapOnRelease && e.slideToClosest());
    }
    function y(t) {
      const {
          scrollbar: s,
          touchEventsTouch: i,
          touchEventsDesktop: r,
          params: a,
          support: o,
        } = e,
        l = s.$el[0],
        d = !(!o.passiveListener || !a.passiveListeners) && {
          passive: !1,
          capture: !1,
        },
        c = !(!o.passiveListener || !a.passiveListeners) && {
          passive: !0,
          capture: !1,
        };
      if (!l) return;
      const p = "on" === t ? "addEventListener" : "removeEventListener";
      o.touch
        ? (l[p](i.start, v, d), l[p](i.move, S, d), l[p](i.end, T, c))
        : (l[p](r.start, v, d), n[p](r.move, S, d), n[p](r.end, T, c));
    }
    function E() {
      const { scrollbar: t, $el: s } = e;
      e.params.scrollbar = (function (e, t, s, i) {
        const n = l();
        return (
          e.params.createElements &&
            Object.keys(i).forEach((r) => {
              if (!s[r] && !0 === s.auto) {
                let a = e.$el.children(`.${i[r]}`)[0];
                a ||
                  ((a = n.createElement("div")),
                  (a.className = i[r]),
                  e.$el.append(a)),
                  (s[r] = a),
                  (t[r] = a);
              }
            }),
          s
        );
      })(e, e.originalParams.scrollbar, e.params.scrollbar, {
        el: "swiper-scrollbar",
      });
      const i = e.params.scrollbar;
      if (!i.el) return;
      let n = w(i.el);
      e.params.uniqueNavElements &&
        "string" == typeof i.el &&
        n.length > 1 &&
        1 === s.find(i.el).length &&
        (n = s.find(i.el));
      let r = n.find(`.${e.params.scrollbar.dragClass}`);
      0 === r.length &&
        ((r = w(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
        n.append(r)),
        Object.assign(t, { $el: n, el: n[0], $dragEl: r, dragEl: r[0] }),
        i.draggable && e.params.scrollbar.el && y("on"),
        n &&
          n[e.enabled ? "removeClass" : "addClass"](
            e.params.scrollbar.lockClass
          );
    }
    function C() {
      e.params.scrollbar.el && y("off");
    }
    t({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
      },
    }),
      (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
      s("init", () => {
        E(), f(), h();
      }),
      s("update resize observerUpdate lock unlock", () => {
        f();
      }),
      s("setTranslate", () => {
        h();
      }),
      s("setTransition", (t, s) => {
        !(function (t) {
          e.params.scrollbar.el &&
            e.scrollbar.el &&
            e.scrollbar.$dragEl.transition(t);
        })(s);
      }),
      s("enable disable", () => {
        const { $el: t } = e.scrollbar;
        t &&
          t[e.enabled ? "removeClass" : "addClass"](
            e.params.scrollbar.lockClass
          );
      }),
      s("destroy", () => {
        C();
      }),
      Object.assign(e.scrollbar, {
        updateSize: f,
        setTranslate: h,
        init: E,
        destroy: C,
      });
  }
  function ne({ swiper: e, extendParams: t, on: s, emit: i }) {
    let n;
    function r() {
      const t = e.slides.eq(e.activeIndex);
      let s = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") &&
        (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
        clearTimeout(n),
        (n = b(() => {
          let t;
          e.params.autoplay.reverseDirection
            ? e.params.loop
              ? (e.loopFix(),
                (t = e.slidePrev(e.params.speed, !0, !0)),
                i("autoplay"))
              : e.isBeginning
              ? e.params.autoplay.stopOnLastSlide
                ? o()
                : ((t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)),
                  i("autoplay"))
              : ((t = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
            : e.params.loop
            ? (e.loopFix(),
              (t = e.slideNext(e.params.speed, !0, !0)),
              i("autoplay"))
            : e.isEnd
            ? e.params.autoplay.stopOnLastSlide
              ? o()
              : ((t = e.slideTo(0, e.params.speed, !0, !0)), i("autoplay"))
            : ((t = e.slideNext(e.params.speed, !0, !0)), i("autoplay")),
            ((e.params.cssMode && e.autoplay.running) || !1 === t) && r();
        }, s));
    }
    function a() {
      return (
        void 0 === n &&
        !e.autoplay.running &&
        ((e.autoplay.running = !0), i("autoplayStart"), r(), !0)
      );
    }
    function o() {
      return (
        !!e.autoplay.running &&
        void 0 !== n &&
        (n && (clearTimeout(n), (n = void 0)),
        (e.autoplay.running = !1),
        i("autoplayStop"),
        !0)
      );
    }
    function d(t) {
      e.autoplay.running &&
        (e.autoplay.paused ||
          (n && clearTimeout(n),
          (e.autoplay.paused = !0),
          0 !== t && e.params.autoplay.waitForTransition
            ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                e.$wrapperEl[0].addEventListener(t, p);
              })
            : ((e.autoplay.paused = !1), r())));
    }
    function c() {
      const t = l();
      "hidden" === t.visibilityState && e.autoplay.running && d(),
        "visible" === t.visibilityState &&
          e.autoplay.paused &&
          (r(), (e.autoplay.paused = !1));
    }
    function p(t) {
      e &&
        !e.destroyed &&
        e.$wrapperEl &&
        t.target === e.$wrapperEl[0] &&
        (["transitionend", "webkitTransitionEnd"].forEach((t) => {
          e.$wrapperEl[0].removeEventListener(t, p);
        }),
        (e.autoplay.paused = !1),
        e.autoplay.running ? r() : o());
    }
    function u() {
      e.params.autoplay.disableOnInteraction ? o() : d(),
        ["transitionend", "webkitTransitionEnd"].forEach((t) => {
          e.$wrapperEl[0].removeEventListener(t, p);
        });
    }
    function h() {
      e.params.autoplay.disableOnInteraction || ((e.autoplay.paused = !1), r());
    }
    (e.autoplay = { running: !1, paused: !1 }),
      t({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      }),
      s("init", () => {
        if (e.params.autoplay.enabled) {
          a();
          l().addEventListener("visibilitychange", c),
            e.params.autoplay.pauseOnMouseEnter &&
              (e.$el.on("mouseenter", u), e.$el.on("mouseleave", h));
        }
      }),
      s("beforeTransitionStart", (t, s, i) => {
        e.autoplay.running &&
          (i || !e.params.autoplay.disableOnInteraction
            ? e.autoplay.pause(s)
            : o());
      }),
      s("sliderFirstMove", () => {
        e.autoplay.running &&
          (e.params.autoplay.disableOnInteraction ? o() : d());
      }),
      s("touchEnd", () => {
        e.params.cssMode &&
          e.autoplay.paused &&
          !e.params.autoplay.disableOnInteraction &&
          r();
      }),
      s("destroy", () => {
        e.$el.off("mouseenter", u),
          e.$el.off("mouseleave", h),
          e.autoplay.running && o();
        l().removeEventListener("visibilitychange", c);
      }),
      Object.assign(e.autoplay, { pause: d, run: r, start: a, stop: o });
  }
  function re() {
    let e = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)'
    );
    e &&
      e.forEach((e) => {
        e.parentElement.classList.add("swiper"),
          e.classList.add("swiper-wrapper");
        for (const t of e.children) t.classList.add("swiper-slide");
      });
  }
  window.addEventListener("load", function (e) {
    re(),
      document.querySelector(".slider-team") &&
        new se(".slider-team__cards", {
          modules: [ie, ne],
          autoplay: { delay: 1500, disableOnInteraction: !1 },
          scrollbar: {
            el: ".slider-team__scrollbar",
            draggable: !0,
            dragSize: 80,
          },
          slidesPerView: 4,
          spaceBetween: 30,
          speed: 800,
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
              scrollbar: { dragSize: 40 },
            },
            475: { slidesPerView: 2, spaceBetween: 20 },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
              scrollbar: { dragSize: 50 },
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
              scrollbar: { dragSize: 60 },
            },
            1268: {
              slidesPerView: 4,
              spaceBetween: 30,
              scrollbar: { dragSize: 80 },
            },
          },
          on: {},
        }),
      document.querySelector(".cards-project") &&
        new se(".cards-project__slider", {
          modules: [ne],
          autoplay: { delay: 2500, disableOnInteraction: !1 },
          slidesPerView: 3,
          spaceBetween: 30,
          speed: 800,
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: !0,
              centeredSlidesBounds: !1,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: !0,
              centeredSlidesBounds: !0,
            },
            1268: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: !0,
              centeredSlidesBounds: !0,
            },
          },
          on: {},
        });
  });
  let ae = !1;
  setTimeout(() => {
    if (ae) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    document.addEventListener("DOMContentLoaded", function (e) {
      document.querySelector("body").style.opacity = "1";
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let i = document.querySelector(".icon-menu");
      i &&
        i.addEventListener("click", function (i) {
          e &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? t(e) : s(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const s = t.closest("[data-goto]"),
              i = s.dataset.goto ? s.dataset.goto : "",
              r = !!s.hasAttribute("data-goto-header"),
              a = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
            n(i, r, a), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            s = t.target;
          if ("navigator" === s.dataset.watch) {
            const e = s.id,
              i =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? i && i.classList.add("_navigator-active")
              : i && i.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })(),
    (function () {
      ae = !0;
      const e = document.querySelector("header.header"),
        t = e.hasAttribute("data-scroll-show"),
        s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
        i = e.dataset.scroll ? e.dataset.scroll : 1;
      let n,
        r = 0;
      document.addEventListener("windowScroll", function (a) {
        const o = window.scrollY;
        clearTimeout(n),
          o >= i
            ? (!e.classList.contains("_header-scroll") &&
                e.classList.add("_header-scroll"),
              t &&
                (o > r
                  ? e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")
                  : !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show"),
                (n = setTimeout(() => {
                  !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show");
                }, s))))
            : (e.classList.contains("_header-scroll") &&
                e.classList.remove("_header-scroll"),
              t &&
                e.classList.contains("_header-show") &&
                e.classList.remove("_header-show")),
          (r = o <= 0 ? 0 : o);
      });
    })();
})();
