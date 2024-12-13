"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [208],
  {
    2883: function (t, e, n) {
      n.d(e, {
        r: function () {
          return l;
        },
      });
      var r = n(6554),
        i = n(7030),
        o = n(3179),
        u = n(6914),
        a = n(5432),
        c = n(5893),
        l = (0, r.G)(function (t, e) {
          let n = (0, i.mq)("Link", t),
            { className: r, isExternal: l, ...s } = (0, o.Lr)(t);
          return (0,
          c.jsx)(u.m.a, { target: l ? "_blank" : void 0, rel: l ? "noopener" : void 0, ref: e, className: (0, a.cx)("chakra-link", r), ...s, __css: n });
        });
      l.displayName = "Link";
    },
    2177: function (t, e, n) {
      n.d(e, {
        M: function () {
          return s;
        },
      });
      var r = n(6554),
        i = n(6914),
        o = n(5893),
        u = (0, r.G)(function (t, e) {
          let {
            templateAreas: n,
            gap: r,
            rowGap: u,
            columnGap: a,
            column: c,
            row: l,
            autoFlow: s,
            autoRows: f,
            templateRows: d,
            autoColumns: p,
            templateColumns: m,
            ...g
          } = t;
          return (0,
          o.jsx)(i.m.div, { ref: e, __css: { display: "grid", gridTemplateAreas: n, gridGap: r, gridRowGap: u, gridColumnGap: a, gridAutoColumns: p, gridColumn: c, gridRow: l, gridAutoFlow: s, gridAutoRows: f, gridTemplateRows: d, gridTemplateColumns: m }, ...g });
        });
      u.displayName = "Grid";
      var a = n(8940),
        c = n(7634),
        l = n(3951),
        s = (0, r.G)(function (t, e) {
          let {
              columns: n,
              spacingX: r,
              spacingY: i,
              spacing: s,
              minChildWidth: f,
              ...d
            } = t,
            p = (0, a.F)(),
            m = f
              ? (0, l.XQ)(f, (t) => {
                  let e = (0, c.LP)(
                    "sizes",
                    t,
                    "number" == typeof t ? `${t}px` : t
                  )(p);
                  return null === t
                    ? null
                    : `repeat(auto-fit, minmax(${e}, 1fr))`;
                })
              : (0, l.XQ)(n, (t) =>
                  null === t ? null : `repeat(${t}, minmax(0, 1fr))`
                );
          return (0,
          o.jsx)(u, { ref: e, gap: s, columnGap: r, rowGap: i, templateColumns: m, ...d });
        });
      s.displayName = "SimpleGrid";
    },
    8783: function (t, e, n) {
      n.d(e, {
        g: function () {
          return u;
        },
      });
      var r = n(5281),
        i = n(6554),
        o = n(5893),
        u = (0, i.G)((t, e) =>
          (0, o.jsx)(r.K, {
            align: "center",
            ...t,
            direction: "column",
            ref: e,
          })
        );
      u.displayName = "VStack";
    },
    4028: function (t, e, n) {
      n.d(e, {
        n: function () {
          return l;
        },
      });
      var r = n(959),
        i = n(797),
        o = n(5432),
        u = n(6554),
        a = n(6914),
        c = n(5893),
        l = (0, u.G)(function (t, e) {
          let n = (0, i.bt)(t),
            u = (0, r.s)();
          return (0,
          c.jsx)(a.m.div, { ...n, width: "100%", ref: e, className: (0, o.cx)("chakra-tabs__tab-panels", t.className), __css: u.tabpanels });
        });
      l.displayName = "TabPanels";
    },
    4461: function (t, e, n) {
      n.d(e, {
        t: function () {
          return l;
        },
      });
      var r = n(959),
        i = n(797),
        o = n(5432),
        u = n(6554),
        a = n(6914),
        c = n(5893),
        l = (0, u.G)(function (t, e) {
          let n = (0, i.hp)({ ...t, ref: e }),
            u = { display: "flex", ...(0, r.s)().tablist };
          return (0,
          c.jsx)(a.m.div, { ...n, className: (0, o.cx)("chakra-tabs__tablist", t.className), __css: u });
        });
      l.displayName = "TabList";
    },
    959: function (t, e, n) {
      n.d(e, {
        m: function () {
          return m;
        },
        s: function () {
          return p;
        },
      });
      var r = n(797),
        i = n(5227),
        o = n(6554),
        u = n(7030),
        a = n(3179),
        c = n(6914),
        l = n(5432),
        s = n(7294),
        f = n(5893),
        [d, p] = (0, i.k)({
          name: "TabsStylesContext",
          errorMessage:
            "useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" ",
        }),
        m = (0, o.G)(function (t, e) {
          let n = (0, u.jC)("Tabs", t),
            { children: i, className: o, ...p } = (0, a.Lr)(t),
            { htmlProps: m, descendants: g, ...b } = (0, r.YE)(p),
            y = (0, s.useMemo)(() => b, [b]),
            { isFitted: v, ...h } = m,
            x = { position: "relative", ...n.root };
          return (0,
          f.jsx)(r.mE, { value: g, children: (0, f.jsx)(r.X, { value: y, children: (0, f.jsx)(d, { value: n, children: (0, f.jsx)(c.m.div, { className: (0, l.cx)("chakra-tabs", o), ref: e, ...h, __css: x, children: i }) }) }) });
        });
      m.displayName = "Tabs";
    },
    4124: function (t, e, n) {
      n.d(e, {
        O: function () {
          return l;
        },
      });
      var r = n(959),
        i = n(797),
        o = n(5432),
        u = n(6554),
        a = n(6914),
        c = n(5893),
        l = (0, u.G)(function (t, e) {
          let n = (0, r.s)(),
            u = (0, i.xD)({ ...t, ref: e }),
            l = {
              outline: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ...n.tab,
            };
          return (0,
          c.jsx)(a.m.button, { ...u, className: (0, o.cx)("chakra-tabs__tab", t.className), __css: l });
        });
      l.displayName = "Tab";
    },
    889: function (t, e, n) {
      n.d(e, {
        x: function () {
          return l;
        },
      });
      var r = n(959),
        i = n(797),
        o = n(5432),
        u = n(6554),
        a = n(6914),
        c = n(5893),
        l = (0, u.G)(function (t, e) {
          let n = (0, i.WE)({ ...t, ref: e }),
            u = (0, r.s)();
          return (0,
          c.jsx)(a.m.div, { outline: "0", ...n, className: (0, o.cx)("chakra-tabs__tab-panel", t.className), __css: u.tabpanel });
        });
      l.displayName = "TabPanel";
    },
    797: function (t, e, n) {
      n.d(e, {
        mE: function () {
          return d;
        },
        X: function () {
          return y;
        },
        xD: function () {
          return x;
        },
        hp: function () {
          return h;
        },
        WE: function () {
          return E;
        },
        bt: function () {
          return j;
        },
        YE: function () {
          return b;
        },
      });
      var r = n(2678),
        i = n(5225),
        o = n(5227),
        u = n(7294),
        a = n(5155),
        c = n(2495),
        l = n(1103),
        s = n(2625),
        f = n(5432),
        [d, p, m, g] = (0, i.n)();
      function b(t) {
        var e;
        let {
            defaultIndex: n,
            onChange: r,
            index: i,
            isManual: o,
            isLazy: c,
            lazyBehavior: l = "unmount",
            orientation: s = "horizontal",
            direction: f = "ltr",
            ...d
          } = t,
          [p, g] = (0, u.useState)(null != n ? n : 0),
          [b, y] = (function (t) {
            let {
                value: e,
                defaultValue: n,
                onChange: r,
                shouldUpdate: i = (t, e) => t !== e,
              } = t,
              o = (0, a.W)(r),
              c = (0, a.W)(i),
              [l, s] = (0, u.useState)(n),
              f = void 0 !== e,
              d = f ? e : l,
              p = (0, a.W)(
                (t) => {
                  let e = "function" == typeof t ? t(d) : t;
                  c(d, e) && (f || s(e), o(e));
                },
                [f, o, d, c]
              );
            return [d, p];
          })({ defaultValue: null != n ? n : 0, value: i, onChange: r });
        (0, u.useEffect)(() => {
          null != i && g(i);
        }, [i]);
        let v = m(),
          h = (0, u.useId)(),
          x = null != (e = t.id) ? e : h;
        return {
          id: `tabs-${x}`,
          selectedIndex: b,
          focusedIndex: p,
          setSelectedIndex: y,
          setFocusedIndex: g,
          isManual: o,
          isLazy: c,
          lazyBehavior: l,
          orientation: s,
          descendants: v,
          direction: f,
          htmlProps: d,
        };
      }
      var [y, v] = (0, o.k)({
        name: "TabsContext",
        errorMessage:
          "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />",
      });
      function h(t) {
        let { focusedIndex: e, orientation: n, direction: r } = v(),
          i = p(),
          o = (0, u.useCallback)(
            (t) => {
              let o = () => {
                  var t;
                  let n = i.nextEnabled(e);
                  n && (null == (t = n.node) || t.focus());
                },
                u = () => {
                  var t;
                  let n = i.prevEnabled(e);
                  n && (null == (t = n.node) || t.focus());
                },
                a = "horizontal" === n,
                c = "vertical" === n,
                l = {
                  ["ltr" === r ? "ArrowLeft" : "ArrowRight"]: () => a && u(),
                  ["ltr" === r ? "ArrowRight" : "ArrowLeft"]: () => a && o(),
                  ArrowDown: () => c && o(),
                  ArrowUp: () => c && u(),
                  Home: () => {
                    var t;
                    let e = i.firstEnabled();
                    e && (null == (t = e.node) || t.focus());
                  },
                  End: () => {
                    var t;
                    let e = i.lastEnabled();
                    e && (null == (t = e.node) || t.focus());
                  },
                }[t.key];
              l && (t.preventDefault(), l(t));
            },
            [i, e, n, r]
          );
        return {
          ...t,
          role: "tablist",
          "aria-orientation": n,
          onKeyDown: (0, f.v0)(t.onKeyDown, o),
        };
      }
      function x(t) {
        let { isDisabled: e = !1, isFocusable: n = !1, ...i } = t,
          {
            setSelectedIndex: o,
            isManual: u,
            id: a,
            setFocusedIndex: c,
            selectedIndex: s,
          } = v(),
          { index: d, register: p } = g({ disabled: e && !n }),
          m = d === s;
        return {
          ...(0, r.h)({
            ...i,
            ref: (0, l.lq)(p, t.ref),
            isDisabled: e,
            isFocusable: n,
            onClick: (0, f.v0)(t.onClick, () => {
              o(d);
            }),
          }),
          id: S(a, d),
          role: "tab",
          tabIndex: m ? 0 : -1,
          type: "button",
          "aria-selected": m,
          "aria-controls": k(a, d),
          onFocus: e
            ? void 0
            : (0, f.v0)(t.onFocus, () => {
                c(d);
                let t = e && n;
                u || t || o(d);
              }),
        };
      }
      var [w, O] = (0, o.k)({});
      function j(t) {
        let { id: e, selectedIndex: n } = v(),
          r = (0, c.W)(t.children).map((t, r) =>
            (0, u.createElement)(
              w,
              {
                key: r,
                value: {
                  isSelected: r === n,
                  id: k(e, r),
                  tabId: S(e, r),
                  selectedIndex: n,
                },
              },
              t
            )
          );
        return { ...t, children: r };
      }
      function E(t) {
        let { children: e, ...n } = t,
          { isLazy: r, lazyBehavior: i } = v(),
          { isSelected: o, id: a, tabId: c } = O(),
          l = (0, u.useRef)(!1);
        o && (l.current = !0);
        let f = (0, s.k)({
          wasSelected: l.current,
          isSelected: o,
          enabled: r,
          mode: i,
        });
        return {
          tabIndex: 0,
          ...n,
          children: f ? e : null,
          role: "tabpanel",
          "aria-labelledby": c,
          hidden: !o,
          id: a,
        };
      }
      function S(t, e) {
        return `${t}--tab-${e}`;
      }
      function k(t, e) {
        return `${t}--tabpanel-${e}`;
      }
    },
    8371: function (t, e, n) {
      n.d(e, {
        Sn: function () {
          return p;
        },
        Vp: function () {
          return d;
        },
      });
      var r = n(6948),
        i = n(5227),
        o = n(6554),
        u = n(7030),
        a = n(3179),
        c = n(6914),
        l = n(5893),
        [s, f] = (0, i.k)({
          name: "TagStylesContext",
          errorMessage:
            "useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" ",
        }),
        d = (0, o.G)((t, e) => {
          let n = (0, u.jC)("Tag", t),
            r = (0, a.Lr)(t),
            i = {
              display: "inline-flex",
              verticalAlign: "top",
              alignItems: "center",
              maxWidth: "100%",
              ...n.container,
            };
          return (0, l.jsx)(s, {
            value: n,
            children: (0, l.jsx)(c.m.span, { ref: e, ...r, __css: i }),
          });
        });
      d.displayName = "Tag";
      var p = (0, o.G)((t, e) => {
        let n = f();
        return (0, l.jsx)(c.m.span, {
          ref: e,
          noOfLines: 1,
          ...t,
          __css: n.label,
        });
      });
      (p.displayName = "TagLabel"),
        ((0, o.G)((t, e) =>
          (0, l.jsx)(r.J, {
            ref: e,
            verticalAlign: "top",
            marginEnd: "0.5rem",
            ...t,
          })
        ).displayName = "TagLeftIcon"),
        ((0, o.G)((t, e) =>
          (0, l.jsx)(r.J, {
            ref: e,
            verticalAlign: "top",
            marginStart: "0.5rem",
            ...t,
          })
        ).displayName = "TagRightIcon");
      var m = (t) =>
        (0, l.jsx)(r.J, {
          verticalAlign: "inherit",
          viewBox: "0 0 512 512",
          ...t,
          children: (0, l.jsx)("path", {
            fill: "currentColor",
            d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z",
          }),
        });
      (m.displayName = "TagCloseIcon"),
        ((0, o.G)((t, e) => {
          let { isDisabled: n, children: r, ...i } = t,
            o = {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              outline: "0",
              ...f().closeButton,
            };
          return (0, l.jsx)(c.m.button, {
            ref: e,
            "aria-label": "close",
            ...i,
            type: "button",
            disabled: n,
            __css: o,
            children: r || (0, l.jsx)(m, {}),
          });
        }).displayName = "TagCloseButton");
    },
    6143: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      let r = {
        direction: "forward",
        speed: 2,
        startDelay: 1e3,
        active: !0,
        breakpoints: {},
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        rootNode: null,
      };
      function i(t = {}) {
        let e, n, o, u, a;
        let c = !1,
          l = !0,
          s = 0;
        function f() {
          if (o || c || !l) return;
          n.emit("autoScroll:play");
          let t = n.internalEngine(),
            { ownerWindow: r } = t;
          (s = r.setTimeout(() => {
            (t.scrollBody = (function (t) {
              let {
                  location: r,
                  previousLocation: i,
                  offsetLocation: o,
                  target: u,
                  scrollTarget: a,
                  index: c,
                  indexPrevious: l,
                  limit: { reachedMin: s, reachedMax: f, constrain: p },
                  options: { loop: m },
                } = t,
                g = "forward" === e.direction ? -1 : 1,
                b = () => O,
                y = 0,
                v = 0,
                h = r.get(),
                x = 0,
                w = !1,
                O = {
                  direction: () => v,
                  duration: () => -1,
                  velocity: () => y,
                  settled: () => w,
                  seek: function (t) {
                    i.set(r),
                      (y = g * e.speed * 55),
                      (h += y),
                      r.add((t / 1e3) * y),
                      u.set(r),
                      (v = Math.sign(h - x)),
                      (x = h);
                    let b = a.byDistance(0, !1).index;
                    c.get() !== b &&
                      (l.set(c.get()), c.set(b), n.emit("select"));
                    let j = "forward" === e.direction ? s(o.get()) : f(o.get());
                    if (!m && j) {
                      w = !0;
                      let t = p(r.get());
                      r.set(t), u.set(r), d();
                    }
                    return O;
                  },
                  useBaseFriction: b,
                  useBaseDuration: b,
                  useFriction: b,
                  useDuration: b,
                };
              return O;
            })(t)),
              t.animation.start();
          }, u)),
            (c = !0);
        }
        function d() {
          if (o || !c) return;
          n.emit("autoScroll:stop");
          let t = n.internalEngine(),
            { ownerWindow: e } = t;
          (t.scrollBody = a), e.clearTimeout(s), (s = 0), (c = !1);
        }
        function p() {
          l && f(), n.off("settle", p);
        }
        function m() {
          n.on("settle", p);
        }
        return {
          name: "autoScroll",
          options: t,
          init: function (c, s) {
            n = c;
            let { mergeOptions: p, optionsAtMedia: g } = s,
              b = p(r, i.globalOptions);
            if (((e = g(p(b, t))), n.scrollSnapList().length <= 1)) return;
            (u = e.startDelay), (o = !1), (a = n.internalEngine().scrollBody);
            let { eventStore: y } = n.internalEngine(),
              v = n.rootNode(),
              h = (e.rootNode && e.rootNode(v)) || v,
              x = n.containerNode();
            n.on("pointerDown", d),
              e.stopOnInteraction || n.on("pointerUp", m),
              e.stopOnMouseEnter &&
                (y.add(h, "mouseenter", () => {
                  (l = !1), d();
                }),
                e.stopOnInteraction ||
                  y.add(h, "mouseleave", () => {
                    (l = !0), f();
                  })),
              e.stopOnFocusIn &&
                (y.add(x, "focusin", () => {
                  d(), n.scrollTo(n.selectedScrollSnap(), !0);
                }),
                e.stopOnInteraction || y.add(x, "focusout", f)),
              e.playOnInit && f();
          },
          destroy: function () {
            n.off("pointerDown", d).off("pointerUp", m).off("settle", p),
              d(),
              (o = !0),
              (c = !1);
          },
          play: function (t) {
            void 0 !== t && (u = t), (l = !0), f();
          },
          stop: function () {
            c && d();
          },
          reset: function () {
            c && (d(), m());
          },
          isPlaying: function () {
            return c;
          },
        };
      }
      i.globalOptions = void 0;
    },
    9382: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return S;
        },
      });
      var r = n(7294);
      function i(t) {
        return (
          "[object Object]" === Object.prototype.toString.call(t) ||
          Array.isArray(t)
        );
      }
      function o(t, e) {
        let n = Object.keys(t),
          r = Object.keys(e);
        return (
          n.length === r.length &&
          JSON.stringify(Object.keys(t.breakpoints || {})) ===
            JSON.stringify(Object.keys(e.breakpoints || {})) &&
          n.every((n) => {
            let r = t[n],
              u = e[n];
            return "function" == typeof r
              ? `${r}` == `${u}`
              : i(r) && i(u)
              ? o(r, u)
              : r === u;
          })
        );
      }
      function u(t) {
        return t
          .concat()
          .sort((t, e) => (t.name > e.name ? 1 : -1))
          .map((t) => t.options);
      }
      function a(t) {
        return "number" == typeof t;
      }
      function c(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return "boolean" == typeof t;
      }
      function s(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function f(t) {
        return Math.abs(t);
      }
      function d(t) {
        return Math.sign(t);
      }
      function p(t) {
        return y(t).map(Number);
      }
      function m(t) {
        return t[g(t)];
      }
      function g(t) {
        return Math.max(0, t.length - 1);
      }
      function b(t, e = 0) {
        return Array.from(Array(t), (t, n) => e + n);
      }
      function y(t) {
        return Object.keys(t);
      }
      function v(t, e) {
        return void 0 !== e.MouseEvent && t instanceof e.MouseEvent;
      }
      function h() {
        let t = [],
          e = {
            add: function (n, r, i, o = { passive: !0 }) {
              let u;
              return (
                "addEventListener" in n
                  ? (n.addEventListener(r, i, o),
                    (u = () => n.removeEventListener(r, i, o)))
                  : (n.addListener(i), (u = () => n.removeListener(i))),
                t.push(u),
                e
              );
            },
            clear: function () {
              t = t.filter((t) => t());
            },
          };
        return e;
      }
      function x(t = 0, e = 0) {
        let n = f(t - e);
        function r(n) {
          return n < t || n > e;
        }
        return {
          length: n,
          max: e,
          min: t,
          constrain: function (n) {
            return r(n) ? (n < t ? t : e) : n;
          },
          reachedAny: r,
          reachedMax: function (t) {
            return t > e;
          },
          reachedMin: function (e) {
            return e < t;
          },
          removeOffset: function (t) {
            return n ? t - n * Math.ceil((t - e) / n) : t;
          },
        };
      }
      function w(t) {
        let e = t;
        function n(t) {
          return a(t) ? t : t.get();
        }
        return {
          get: function () {
            return e;
          },
          set: function (t) {
            e = n(t);
          },
          add: function (t) {
            e += n(t);
          },
          subtract: function (t) {
            e -= n(t);
          },
        };
      }
      function O(t, e) {
        let n =
            "x" === t.scroll
              ? function (t) {
                  return `translate3d(${t}px,0px,0px)`;
                }
              : function (t) {
                  return `translate3d(0px,${t}px,0px)`;
                },
          r = e.style,
          i = !1;
        return {
          clear: function () {
            i ||
              ((r.transform = ""),
              e.getAttribute("style") || e.removeAttribute("style"));
          },
          to: function (e) {
            i || (r.transform = n(t.direction(e)));
          },
          toggleActive: function (t) {
            i = !t;
          },
        };
      }
      let j = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
      };
      function E(t, e, n) {
        let r, i, o, u, S;
        let k = t.ownerDocument,
          N = k.defaultView,
          T = (function (t) {
            function e(t, e) {
              return (function t(e, n) {
                return [e, n].reduce(
                  (e, n) => (
                    y(n).forEach((r) => {
                      let i = e[r],
                        o = n[r],
                        u = s(i) && s(o);
                      e[r] = u ? t(i, o) : o;
                    }),
                    e
                  ),
                  {}
                );
              })(t, e || {});
            }
            return {
              mergeOptions: e,
              optionsAtMedia: function (n) {
                let r = n.breakpoints || {},
                  i = y(r)
                    .filter((e) => t.matchMedia(e).matches)
                    .map((t) => r[t])
                    .reduce((t, n) => e(t, n), {});
                return e(n, i);
              },
              optionsMediaQueries: function (e) {
                return e
                  .map((t) => y(t.breakpoints || {}))
                  .reduce((t, e) => t.concat(e), [])
                  .map(t.matchMedia);
              },
            };
          })(N),
          D =
            ((S = []),
            {
              init: function (t, e) {
                return (
                  (S = e.filter(
                    ({ options: t }) => !1 !== T.optionsAtMedia(t).active
                  )).forEach((e) => e.init(t, T)),
                  e.reduce((t, e) => Object.assign(t, { [e.name]: e }), {})
                );
              },
              destroy: function () {
                S = S.filter((t) => t.destroy());
              },
            }),
          I = h(),
          A = (function () {
            let t,
              e = {},
              n = {
                init: function (e) {
                  t = e;
                },
                emit: function (r) {
                  return (e[r] || []).forEach((e) => e(t, r)), n;
                },
                off: function (t, r) {
                  return (e[t] = (e[t] || []).filter((t) => t !== r)), n;
                },
                on: function (t, r) {
                  return (e[t] = (e[t] || []).concat([r])), n;
                },
                clear: function () {
                  e = {};
                },
              };
            return n;
          })(),
          { mergeOptions: _, optionsAtMedia: L, optionsMediaQueries: P } = T,
          { on: C, off: M, emit: F } = A,
          G = !1,
          z = _(j, E.globalOptions),
          B = _(z),
          R = [];
        function $(e, n) {
          !G &&
            ((B = L((z = _(z, e)))),
            (R = n || R),
            (function () {
              let { container: e, slides: n } = B;
              o = (c(e) ? t.querySelector(e) : e) || t.children[0];
              let r = c(n) ? o.querySelectorAll(n) : n;
              u = [].slice.call(r || o.children);
            })(),
            (r = (function e(n) {
              let r = (function (t, e, n, r, i, o, u) {
                let s, j;
                let {
                    align: E,
                    axis: S,
                    direction: k,
                    startIndex: N,
                    loop: T,
                    duration: D,
                    dragFree: I,
                    dragThreshold: A,
                    inViewThreshold: _,
                    slidesToScroll: L,
                    skipSnaps: P,
                    containScroll: C,
                    watchResize: M,
                    watchSlides: F,
                    watchDrag: G,
                  } = o,
                  z = {
                    measure: function (t) {
                      let {
                        offsetTop: e,
                        offsetLeft: n,
                        offsetWidth: r,
                        offsetHeight: i,
                      } = t;
                      return {
                        top: e,
                        right: n + r,
                        bottom: e + i,
                        left: n,
                        width: r,
                        height: i,
                      };
                    },
                  },
                  B = z.measure(e),
                  R = n.map(z.measure),
                  $ = (function (t, e) {
                    let n = "rtl" === e,
                      r = "y" === t,
                      i = !r && n ? -1 : 1;
                    return {
                      scroll: r ? "y" : "x",
                      cross: r ? "x" : "y",
                      startEdge: r ? "top" : n ? "right" : "left",
                      endEdge: r ? "bottom" : n ? "left" : "right",
                      measureSize: function (t) {
                        let { height: e, width: n } = t;
                        return r ? e : n;
                      },
                      direction: function (t) {
                        return t * i;
                      },
                    };
                  })(S, k),
                  V = $.measureSize(B),
                  H = {
                    measure: function (t) {
                      return (t / 100) * V;
                    },
                  },
                  W = (function (t, e) {
                    let n = {
                      start: function () {
                        return 0;
                      },
                      center: function (t) {
                        return (e - t) / 2;
                      },
                      end: function (t) {
                        return e - t;
                      },
                    };
                    return {
                      measure: function (r, i) {
                        return c(t) ? n[t](r) : t(e, r, i);
                      },
                    };
                  })(E, V),
                  q = !T && !!C,
                  {
                    slideSizes: U,
                    slideSizesWithGaps: X,
                    startGap: J,
                    endGap: K,
                  } = (function (t, e, n, r, i, o) {
                    let { measureSize: u, startEdge: a, endEdge: c } = t,
                      l = n[0] && i,
                      s = (function () {
                        if (!l) return 0;
                        let t = n[0];
                        return f(e[a] - t[a]);
                      })(),
                      d = l
                        ? parseFloat(
                            o
                              .getComputedStyle(m(r))
                              .getPropertyValue(`margin-${c}`)
                          )
                        : 0,
                      p = n.map(u),
                      b = n
                        .map((t, e, n) => {
                          let r = e === g(n);
                          return e
                            ? r
                              ? p[e] + d
                              : n[e + 1][a] - t[a]
                            : p[e] + s;
                        })
                        .map(f);
                    return {
                      slideSizes: p,
                      slideSizesWithGaps: b,
                      startGap: s,
                      endGap: d,
                    };
                  })($, B, R, n, T || !!C, i),
                  Q = (function (t, e, n, r, i, o, u, c, l) {
                    let { startEdge: s, endEdge: d, direction: b } = t,
                      y = a(n);
                    return {
                      groupSlides: function (t) {
                        return y
                          ? p(t)
                              .filter((t) => t % n == 0)
                              .map((e) => t.slice(e, e + n))
                          : t.length
                          ? p(t)
                              .reduce((n, a, l) => {
                                let p = m(n) || 0,
                                  y = a === g(t),
                                  v = i[s] - o[p][s],
                                  h = i[s] - o[a][d],
                                  x = r || 0 !== p ? 0 : b(u),
                                  w = f(h - (!r && y ? b(c) : 0) - (v + x));
                                return (
                                  l && w > e + 2 && n.push(a),
                                  y && n.push(t.length),
                                  n
                                );
                              }, [])
                              .map((e, n, r) => {
                                let i = Math.max(r[n - 1] || 0);
                                return t.slice(i, e);
                              })
                          : [];
                      },
                    };
                  })($, V, L, T, B, R, J, K, 0),
                  { snaps: Y, snapsAligned: Z } = (function (t, e, n, r, i) {
                    let { startEdge: o, endEdge: u } = t,
                      { groupSlides: a } = i,
                      c = a(r)
                        .map((t) => m(t)[u] - t[0][o])
                        .map(f)
                        .map(e.measure),
                      l = r.map((t) => n[o] - t[o]).map((t) => -f(t)),
                      s = a(l)
                        .map((t) => t[0])
                        .map((t, e) => t + c[e]);
                    return { snaps: l, snapsAligned: s };
                  })($, W, B, R, Q),
                  tt = -m(Y) + m(X),
                  { snapsContained: te, scrollContainLimit: tn } = (function (
                    t,
                    e,
                    n,
                    r,
                    i
                  ) {
                    let o = x(-e + t, 0),
                      u = n
                        .map((t, e) => {
                          let { min: r, max: i } = o,
                            u = o.constrain(t),
                            a = e === g(n);
                          return e
                            ? a || 1 > f(r - u)
                              ? r
                              : 1 > f(i - u)
                              ? i
                              : u
                            : i;
                        })
                        .map((t) => parseFloat(t.toFixed(3))),
                      a = (function () {
                        let t = u[0],
                          e = m(u);
                        return x(u.lastIndexOf(t), u.indexOf(e) + 1);
                      })();
                    return {
                      snapsContained: (function () {
                        if (e <= t + 2) return [o.max];
                        if ("keepSnaps" === r) return u;
                        let { min: n, max: i } = a;
                        return u.slice(n, i);
                      })(),
                      scrollContainLimit: a,
                    };
                  })(V, tt, Z, C, 0),
                  tr = q ? te : Z,
                  { limit: ti } = (function (t, e, n) {
                    let r = e[0];
                    return { limit: x(n ? r - t : m(e), r) };
                  })(tt, tr, T),
                  to = (function t(e, n, r) {
                    let { constrain: i } = x(0, e),
                      o = e + 1,
                      u = a(n);
                    function a(t) {
                      return r ? f((o + t) % o) : i(t);
                    }
                    function c() {
                      return t(e, u, r);
                    }
                    let l = {
                      get: function () {
                        return u;
                      },
                      set: function (t) {
                        return (u = a(t)), l;
                      },
                      add: function (t) {
                        return c().set(u + t);
                      },
                      clone: c,
                    };
                    return l;
                  })(g(tr), N, T),
                  tu = to.clone(),
                  ta = p(n),
                  tc = (
                    {
                      dragHandler: t,
                      scrollBody: e,
                      scrollBounds: n,
                      options: { loop: r },
                    },
                    i
                  ) => {
                    r || n.constrain(t.pointerDown()), e.seek(i);
                  },
                  tl = (
                    {
                      scrollBody: t,
                      translate: e,
                      location: n,
                      offsetLocation: r,
                      scrollLooper: i,
                      slideLooper: o,
                      dragHandler: u,
                      animation: a,
                      eventHandler: c,
                      scrollBounds: l,
                      options: { loop: s },
                    },
                    f
                  ) => {
                    let d = t.settled(),
                      p = !l.shouldConstrain(),
                      m = s ? d : d && p;
                    m && !u.pointerDown() && (a.stop(), c.emit("settle")),
                      m || c.emit("scroll");
                    let g = n.get() * f + tp.get() * (1 - f);
                    r.set(g),
                      s && (i.loop(t.direction()), o.loop()),
                      e.to(r.get());
                  },
                  ts = (function (t, e, n, r) {
                    let i = h(),
                      o = 1e3 / 60,
                      u = null,
                      a = 0,
                      c = 0;
                    function l(t) {
                      if (!c) return;
                      u || (u = t);
                      let i = t - u;
                      for (u = t, a += i; a >= o; ) n(o), (a -= o);
                      r(a / o), c && e.requestAnimationFrame(l);
                    }
                    function s() {
                      e.cancelAnimationFrame(c), (u = null), (a = 0), (c = 0);
                    }
                    return {
                      init: function () {
                        i.add(t, "visibilitychange", () => {
                          t.hidden && ((u = null), (a = 0));
                        });
                      },
                      destroy: function () {
                        s(), i.clear();
                      },
                      start: function () {
                        c || (c = e.requestAnimationFrame(l));
                      },
                      stop: s,
                      update: () => n(o),
                      render: r,
                    };
                  })(
                    r,
                    i,
                    (t) => tc(tE, t),
                    (t) => tl(tE, t)
                  ),
                  tf = tr[to.get()],
                  td = w(tf),
                  tp = w(tf),
                  tm = w(tf),
                  tg = w(tf),
                  tb = (function (t, e, n, r, i, o) {
                    let u = 0,
                      a = 0,
                      c = i,
                      l = 0.68,
                      s = t.get(),
                      p = 0;
                    function m(t) {
                      return (c = t), b;
                    }
                    function g(t) {
                      return (l = t), b;
                    }
                    let b = {
                      direction: function () {
                        return a;
                      },
                      duration: function () {
                        return c;
                      },
                      velocity: function () {
                        return u;
                      },
                      seek: function (e) {
                        let i = e / 1e3,
                          o = c * i,
                          f = r.get() - t.get(),
                          m = 0;
                        return (
                          c
                            ? (n.set(t),
                              (u += f / o),
                              (u *= l),
                              (s += u),
                              t.add(u * i),
                              (m = s - p))
                            : ((u = 0), n.set(r), t.set(r), (m = f)),
                          (a = d(m)),
                          (p = s),
                          b
                        );
                      },
                      settled: function () {
                        return 0.001 > f(r.get() - e.get());
                      },
                      useBaseFriction: function () {
                        return g(0.68);
                      },
                      useBaseDuration: function () {
                        return m(i);
                      },
                      useFriction: g,
                      useDuration: m,
                    };
                    return b;
                  })(td, tm, tp, tg, D, 0),
                  ty = (function (t, e, n, r, i) {
                    let { reachedAny: o, removeOffset: u, constrain: a } = r;
                    function c(t) {
                      return t.concat().sort((t, e) => f(t) - f(e))[0];
                    }
                    function l(e, r) {
                      let i = [e, e + n, e - n];
                      if (!t) return e;
                      if (!r) return c(i);
                      let o = i.filter((t) => d(t) === r);
                      return o.length ? c(o) : m(i) - n;
                    }
                    return {
                      byDistance: function (n, r) {
                        let c = i.get() + n,
                          { index: s, distance: d } = (function (n) {
                            let r = t ? u(n) : a(n),
                              { index: i } = e
                                .map((t, e) => ({
                                  diff: l(t - r, 0),
                                  index: e,
                                }))
                                .sort((t, e) => f(t.diff) - f(e.diff))[0];
                            return { index: i, distance: r };
                          })(c),
                          p = !t && o(c);
                        if (!r || p) return { index: s, distance: n };
                        let m = n + l(e[s] - d, 0);
                        return { index: s, distance: m };
                      },
                      byIndex: function (t, n) {
                        let r = l(e[t] - i.get(), n);
                        return { index: t, distance: r };
                      },
                      shortcut: l,
                    };
                  })(T, tr, tt, ti, tg),
                  tv = (function (t, e, n, r, i, o, u) {
                    function a(i) {
                      let a = i.distance,
                        c = i.index !== e.get();
                      o.add(a),
                        a &&
                          (r.duration()
                            ? t.start()
                            : (t.update(), t.render(1), t.update())),
                        c && (n.set(e.get()), e.set(i.index), u.emit("select"));
                    }
                    return {
                      distance: function (t, e) {
                        a(i.byDistance(t, e));
                      },
                      index: function (t, n) {
                        let r = e.clone().set(t);
                        a(i.byIndex(r.get(), n));
                      },
                    };
                  })(ts, to, tu, tb, ty, tg, u),
                  th = (function (t) {
                    let { max: e, length: n } = t;
                    return {
                      get: function (t) {
                        return n ? -((t - e) / n) : 0;
                      },
                    };
                  })(ti),
                  tx = h(),
                  tw = (function (t, e, n, r) {
                    let i;
                    let o = {},
                      u = null,
                      a = null,
                      c = !1;
                    return {
                      init: function () {
                        (i = new IntersectionObserver(
                          (t) => {
                            c ||
                              (t.forEach((t) => {
                                o[e.indexOf(t.target)] = t;
                              }),
                              (u = null),
                              (a = null),
                              n.emit("slidesInView"));
                          },
                          { root: t.parentElement, threshold: r }
                        )),
                          e.forEach((t) => i.observe(t));
                      },
                      destroy: function () {
                        i && i.disconnect(), (c = !0);
                      },
                      get: function (t = !0) {
                        if (t && u) return u;
                        if (!t && a) return a;
                        let e = y(o).reduce((e, n) => {
                          let r = parseInt(n),
                            { isIntersecting: i } = o[r];
                          return ((t && i) || (!t && !i)) && e.push(r), e;
                        }, []);
                        return t && (u = e), t || (a = e), e;
                      },
                    };
                  })(e, n, u, _),
                  { slideRegistry: tO } = (function (t, e, n, r, i, o) {
                    let { groupSlides: u } = i,
                      { min: a, max: c } = r;
                    return {
                      slideRegistry: (function () {
                        let r = u(o);
                        return 1 === n.length
                          ? [o]
                          : t && "keepSnaps" !== e
                          ? r.slice(a, c).map((t, e, n) => {
                              let r = e === g(n);
                              return e
                                ? r
                                  ? b(g(o) - m(n)[0] + 1, m(n)[0])
                                  : t
                                : b(m(n[0]) + 1);
                            })
                          : r;
                      })(),
                    };
                  })(q, C, tr, tn, Q, ta),
                  tj = (function (t, e, n, r, i, o, u) {
                    let c = 0;
                    function l(t) {
                      "Tab" === t.code && (c = new Date().getTime());
                    }
                    function s(l) {
                      o.add(
                        l,
                        "focus",
                        () => {
                          if (new Date().getTime() - c > 10) return;
                          t.scrollLeft = 0;
                          let o = e.indexOf(l),
                            s = n.findIndex((t) => t.includes(o));
                          a(s) &&
                            (i.useDuration(0),
                            r.index(s, 0),
                            u.emit("slideFocus"));
                        },
                        { passive: !0, capture: !0 }
                      );
                    }
                    return {
                      init: function () {
                        o.add(document, "keydown", l, !1), e.forEach(s);
                      },
                    };
                  })(t, n, tO, tv, tb, tx, u),
                  tE = {
                    ownerDocument: r,
                    ownerWindow: i,
                    eventHandler: u,
                    containerRect: B,
                    slideRects: R,
                    animation: ts,
                    axis: $,
                    dragHandler: (function (
                      t,
                      e,
                      n,
                      r,
                      i,
                      o,
                      u,
                      a,
                      c,
                      s,
                      p,
                      m,
                      g,
                      b,
                      y,
                      w,
                      O,
                      j,
                      E
                    ) {
                      let { cross: S, direction: k } = t,
                        N = ["INPUT", "SELECT", "TEXTAREA"],
                        T = { passive: !1 },
                        D = h(),
                        I = h(),
                        A = x(50, 225).constrain(b.measure(20)),
                        _ = { mouse: 300, touch: 400 },
                        L = { mouse: 500, touch: 600 },
                        P = y ? 43 : 25,
                        C = !1,
                        M = 0,
                        F = 0,
                        G = !1,
                        z = !1,
                        B = !1,
                        R = !1;
                      function $(t) {
                        if (!v(t, r) && t.touches.length >= 2) return V(t);
                        let e = o.readPoint(t),
                          n = o.readPoint(t, S),
                          u = f(e - M),
                          c = f(n - F);
                        if (!z && !R && (!t.cancelable || !(z = u > c)))
                          return V(t);
                        let l = o.pointerMove(t);
                        u > w && (B = !0),
                          s.useFriction(0.3).useDuration(0.75),
                          a.start(),
                          i.add(k(l)),
                          t.preventDefault();
                      }
                      function V(t) {
                        let e = p.byDistance(0, !1).index !== m.get(),
                          n =
                            o.pointerUp(t) * (y ? L : _)[R ? "mouse" : "touch"],
                          r = (function (t, e) {
                            let n = m.add(-1 * d(t)),
                              r = p.byDistance(t, !y).distance;
                            return y || f(t) < A
                              ? r
                              : O && e
                              ? 0.5 * r
                              : p.byIndex(n.get(), 0).distance;
                          })(k(n), e),
                          i = (function (t, e) {
                            var n, r;
                            if (0 === t || 0 === e || f(t) <= f(e)) return 0;
                            let i = ((n = f(t)), (r = f(e)), f(n - r));
                            return f(i / t);
                          })(n, r);
                        (z = !1),
                          (G = !1),
                          I.clear(),
                          s.useDuration(P - 10 * i).useFriction(0.68 + i / 50),
                          c.distance(r, !y),
                          (R = !1),
                          g.emit("pointerUp");
                      }
                      function H(t) {
                        B &&
                          (t.stopPropagation(), t.preventDefault(), (B = !1));
                      }
                      return {
                        init: function (t) {
                          E &&
                            D.add(e, "dragstart", (t) => t.preventDefault(), T)
                              .add(e, "touchmove", () => void 0, T)
                              .add(e, "touchend", () => void 0)
                              .add(e, "touchstart", a)
                              .add(e, "mousedown", a)
                              .add(e, "touchcancel", V)
                              .add(e, "contextmenu", V)
                              .add(e, "click", H, !0);
                          function a(a) {
                            (l(E) || E(t, a)) &&
                              (function (t) {
                                let a = v(t, r);
                                (R = a),
                                  (B = y && a && !t.buttons && C),
                                  (C = f(i.get() - u.get()) >= 2),
                                  (a && 0 !== t.button) ||
                                    (function (t) {
                                      let e = t.nodeName || "";
                                      return N.includes(e);
                                    })(t.target) ||
                                    ((G = !0),
                                    o.pointerDown(t),
                                    s.useFriction(0).useDuration(0),
                                    i.set(u),
                                    (function () {
                                      let t = R ? n : e;
                                      I.add(t, "touchmove", $, T)
                                        .add(t, "touchend", V)
                                        .add(t, "mousemove", $, T)
                                        .add(t, "mouseup", V);
                                    })(),
                                    (M = o.readPoint(t)),
                                    (F = o.readPoint(t, S)),
                                    g.emit("pointerDown"));
                              })(a);
                          }
                        },
                        destroy: function () {
                          D.clear(), I.clear();
                        },
                        pointerDown: function () {
                          return G;
                        },
                      };
                    })(
                      $,
                      t,
                      r,
                      i,
                      tg,
                      (function (t, e) {
                        let n, r;
                        function i(t) {
                          return t.timeStamp;
                        }
                        function o(n, r) {
                          let i = r || t.scroll,
                            o = `client${"x" === i ? "X" : "Y"}`;
                          return (v(n, e) ? n : n.touches[0])[o];
                        }
                        return {
                          pointerDown: function (t) {
                            return (n = t), (r = t), o(t);
                          },
                          pointerMove: function (t) {
                            let e = o(t) - o(r),
                              u = i(t) - i(n) > 170;
                            return (r = t), u && (n = t), e;
                          },
                          pointerUp: function (t) {
                            if (!n || !r) return 0;
                            let e = o(r) - o(n),
                              u = i(t) - i(n),
                              a = i(t) - i(r) > 170,
                              c = e / u;
                            return u && !a && f(c) > 0.1 ? c : 0;
                          },
                          readPoint: o,
                        };
                      })($, i),
                      td,
                      ts,
                      tv,
                      tb,
                      ty,
                      to,
                      u,
                      H,
                      I,
                      A,
                      P,
                      0,
                      G
                    ),
                    eventStore: tx,
                    percentOfView: H,
                    index: to,
                    indexPrevious: tu,
                    limit: ti,
                    location: td,
                    offsetLocation: tm,
                    previousLocation: tp,
                    options: o,
                    resizeHandler: (function (t, e, n, r, i, o, u) {
                      let a, c;
                      let s = [t].concat(r),
                        d = [],
                        p = !1;
                      function m(t) {
                        return i.measureSize(u.measure(t));
                      }
                      return {
                        init: function (i) {
                          o &&
                            ((c = m(t)),
                            (d = r.map(m)),
                            (a = new ResizeObserver((n) => {
                              (l(o) || o(i, n)) &&
                                (function (n) {
                                  for (let o of n) {
                                    if (p) return;
                                    let n = o.target === t,
                                      u = r.indexOf(o.target),
                                      a = n ? c : d[u];
                                    if (f(m(n ? t : r[u]) - a) >= 0.5) {
                                      i.reInit(), e.emit("resize");
                                      break;
                                    }
                                  }
                                })(n);
                            })),
                            n.requestAnimationFrame(() => {
                              s.forEach((t) => a.observe(t));
                            }));
                        },
                        destroy: function () {
                          (p = !0), a && a.disconnect();
                        },
                      };
                    })(e, u, i, n, $, M, z),
                    scrollBody: tb,
                    scrollBounds: (function (t, e, n, r, i) {
                      let o = i.measure(10),
                        u = i.measure(50),
                        a = x(0.1, 0.99),
                        c = !1;
                      function l() {
                        return !!(
                          !c &&
                          t.reachedAny(n.get()) &&
                          t.reachedAny(e.get())
                        );
                      }
                      return {
                        shouldConstrain: l,
                        constrain: function (i) {
                          if (!l()) return;
                          let c = t.reachedMin(e.get()) ? "min" : "max",
                            s = f(t[c] - e.get()),
                            d = n.get() - e.get(),
                            p = a.constrain(s / u);
                          n.subtract(d * p),
                            !i &&
                              f(d) < o &&
                              (n.set(t.constrain(n.get())),
                              r.useDuration(25).useBaseFriction());
                        },
                        toggleActive: function (t) {
                          c = !t;
                        },
                      };
                    })(ti, tm, tg, tb, H),
                    scrollLooper: (function (t, e, n, r) {
                      let { reachedMin: i, reachedMax: o } = x(
                        e.min + 0.1,
                        e.max + 0.1
                      );
                      return {
                        loop: function (e) {
                          if (!(1 === e ? o(n.get()) : -1 === e && i(n.get())))
                            return;
                          let u = -1 * e * t;
                          r.forEach((t) => t.add(u));
                        },
                      };
                    })(tt, ti, tm, [td, tm, tp, tg]),
                    scrollProgress: th,
                    scrollSnapList: tr.map(th.get),
                    scrollSnaps: tr,
                    scrollTarget: ty,
                    scrollTo: tv,
                    slideLooper: (function (t, e, n, r, i, o, u, a, c) {
                      let l = p(i),
                        s = m(d(p(i).reverse(), u[0]), n, !1).concat(
                          m(d(l, e - u[0] - 1), -n, !0)
                        );
                      function f(t, e) {
                        return t.reduce((t, e) => t - i[e], e);
                      }
                      function d(t, e) {
                        return t.reduce(
                          (t, n) => (f(t, e) > 0 ? t.concat([n]) : t),
                          []
                        );
                      }
                      function m(i, u, l) {
                        let s = o.map((t, n) => ({
                          start: t - r[n] + 0.5 + u,
                          end: t + e - 0.5 + u,
                        }));
                        return i.map((e) => {
                          let r = l ? 0 : -n,
                            i = l ? n : 0,
                            o = s[e][l ? "end" : "start"];
                          return {
                            index: e,
                            loopPoint: o,
                            slideLocation: w(-1),
                            translate: O(t, c[e]),
                            target: () => (a.get() > o ? r : i),
                          };
                        });
                      }
                      return {
                        canLoop: function () {
                          return s.every(
                            ({ index: t }) =>
                              0.1 >=
                              f(
                                l.filter((e) => e !== t),
                                e
                              )
                          );
                        },
                        clear: function () {
                          s.forEach((t) => t.translate.clear());
                        },
                        loop: function () {
                          s.forEach((t) => {
                            let {
                                target: e,
                                translate: n,
                                slideLocation: r,
                              } = t,
                              i = e();
                            i !== r.get() && (n.to(i), r.set(i));
                          });
                        },
                        loopPoints: s,
                      };
                    })($, V, tt, U, X, Y, tr, tm, n),
                    slideFocus: tj,
                    slidesHandler:
                      ((j = !1),
                      {
                        init: function (t) {
                          F &&
                            (s = new MutationObserver((e) => {
                              !j &&
                                (l(F) || F(t, e)) &&
                                (function (e) {
                                  for (let n of e)
                                    if ("childList" === n.type) {
                                      t.reInit(), u.emit("slidesChanged");
                                      break;
                                    }
                                })(e);
                            })).observe(e, { childList: !0 });
                        },
                        destroy: function () {
                          s && s.disconnect(), (j = !0);
                        },
                      }),
                    slidesInView: tw,
                    slideIndexes: ta,
                    slideRegistry: tO,
                    slidesToScroll: Q,
                    target: tg,
                    translate: O($, e),
                  };
                return tE;
              })(t, o, u, k, N, n, A);
              return n.loop && !r.slideLooper.canLoop()
                ? e(Object.assign({}, n, { loop: !1 }))
                : r;
            })(B)),
            P([z, ...R.map(({ options: t }) => t)]).forEach((t) =>
              I.add(t, "change", V)
            ),
            B.active &&
              (r.translate.to(r.location.get()),
              r.animation.init(),
              r.slidesInView.init(),
              r.slideFocus.init(),
              r.eventHandler.init(U),
              r.resizeHandler.init(U),
              r.slidesHandler.init(U),
              r.options.loop && r.slideLooper.loop(),
              o.offsetParent && u.length && r.dragHandler.init(U),
              (i = D.init(U, R))));
        }
        function V(t, e) {
          let n = q();
          H(), $(_({ startIndex: n }, t), e), A.emit("reInit");
        }
        function H() {
          r.dragHandler.destroy(),
            r.eventStore.clear(),
            r.translate.clear(),
            r.slideLooper.clear(),
            r.resizeHandler.destroy(),
            r.slidesHandler.destroy(),
            r.slidesInView.destroy(),
            r.animation.destroy(),
            D.destroy(),
            I.clear();
        }
        function W(t, e, n) {
          B.active &&
            !G &&
            (r.scrollBody
              .useBaseFriction()
              .useDuration(!0 === e ? 0 : B.duration),
            r.scrollTo.index(t, n || 0));
        }
        function q() {
          return r.index.get();
        }
        let U = {
          canScrollNext: function () {
            return r.index.add(1).get() !== q();
          },
          canScrollPrev: function () {
            return r.index.add(-1).get() !== q();
          },
          containerNode: function () {
            return o;
          },
          internalEngine: function () {
            return r;
          },
          destroy: function () {
            G || ((G = !0), I.clear(), H(), A.emit("destroy"), A.clear());
          },
          off: M,
          on: C,
          emit: F,
          plugins: function () {
            return i;
          },
          previousScrollSnap: function () {
            return r.indexPrevious.get();
          },
          reInit: V,
          rootNode: function () {
            return t;
          },
          scrollNext: function (t) {
            W(r.index.add(1).get(), t, -1);
          },
          scrollPrev: function (t) {
            W(r.index.add(-1).get(), t, 1);
          },
          scrollProgress: function () {
            return r.scrollProgress.get(r.location.get());
          },
          scrollSnapList: function () {
            return r.scrollSnapList;
          },
          scrollTo: W,
          selectedScrollSnap: q,
          slideNodes: function () {
            return u;
          },
          slidesInView: function () {
            return r.slidesInView.get();
          },
          slidesNotInView: function () {
            return r.slidesInView.get(!1);
          },
        };
        return $(e, n), setTimeout(() => A.emit("init"), 0), U;
      }
      function S(t = {}, e = []) {
        let n = (0, r.useRef)(t),
          i = (0, r.useRef)(e),
          [a, c] = (0, r.useState)(),
          [l, s] = (0, r.useState)(),
          f = (0, r.useCallback)(() => {
            a && a.reInit(n.current, i.current);
          }, [a]);
        return (
          (0, r.useEffect)(() => {
            if (
              "undefined" != typeof window &&
              window.document &&
              window.document.createElement &&
              l
            ) {
              E.globalOptions = S.globalOptions;
              let t = E(l, n.current, i.current);
              return c(t), () => t.destroy();
            }
            c(void 0);
          }, [l, c]),
          (0, r.useEffect)(() => {
            o(n.current, t) || ((n.current = t), f());
          }, [t, f]),
          (0, r.useEffect)(() => {
            !(function (t, e) {
              if (t.length !== e.length) return !1;
              let n = u(t),
                r = u(e);
              return n.every((t, e) => o(t, r[e]));
            })(i.current, e) && ((i.current = e), f());
          }, [e, f]),
          [s, a]
        );
      }
      (E.globalOptions = void 0), (S.globalOptions = void 0);
    },
    5955: function (t, e, n) {
      n.d(e, {
        w_: function () {
          return s;
        },
      });
      var r = n(7294),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = r.createContext && r.createContext(i),
        u = ["attr", "size", "title"];
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function s(t) {
        return (e) =>
          r.createElement(
            f,
            a({ attr: l({}, t.attr) }, e),
            (function t(e) {
              return (
                e &&
                e.map((e, n) =>
                  r.createElement(e.tag, l({ key: n }, e.attr), t(e.child))
                )
              );
            })(t.child)
          );
      }
      function f(t) {
        var e = (e) => {
          var n,
            { attr: i, size: o, title: c } = t,
            s = (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                i = (function (t, e) {
                  if (null == t) return {};
                  var n = {};
                  for (var r in t)
                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                      if (e.indexOf(r) >= 0) continue;
                      n[r] = t[r];
                    }
                  return n;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (r = 0; r < o.length; r++)
                  (n = o[r]),
                    !(e.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, n) &&
                      (i[n] = t[n]);
              }
              return i;
            })(t, u),
            f = o || e.size || "1em";
          return (
            e.className && (n = e.className),
            t.className && (n = (n ? n + " " : "") + t.className),
            r.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                i,
                s,
                {
                  className: n,
                  style: l(l({ color: t.color || e.color }, e.style), t.style),
                  height: f,
                  width: f,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              c && r.createElement("title", null, c),
              t.children
            )
          );
        };
        return void 0 !== o
          ? r.createElement(o.Consumer, null, (t) => e(t))
          : e(i);
      }
    },
  },
]);
