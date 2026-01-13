import * as P from "react";
import X, { createContext as yt, memo as bt, useEffect as R, useLayoutEffect as Tt, useState as V, useCallback as A, useMemo as x, isValidElement as St, cloneElement as Pe, useContext as Ot } from "react";
function Et(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var G = { exports: {} }, F = {};
var Re;
function wt() {
  if (Re) return F;
  Re = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function r(n, i, o) {
    var a = null;
    if (o !== void 0 && (a = "" + o), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      o = {};
      for (var c in i)
        c !== "key" && (o[c] = i[c]);
    } else o = i;
    return i = o.ref, {
      $$typeof: t,
      type: n,
      key: a,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return F.Fragment = e, F.jsx = r, F.jsxs = r, F;
}
var U = {};
var _e;
function xt() {
  return _e || (_e = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === mt ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case b:
          return "Fragment";
        case w:
          return "Profiler";
        case S:
          return "StrictMode";
        case q:
          return "Suspense";
        case gt:
          return "SuspenseList";
        case pt:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case g:
            return "Portal";
          case H:
            return s.displayName || "Context";
          case N:
            return (s._context.displayName || "Context") + ".Consumer";
          case te:
            var D = s.render;
            return s = s.displayName, s || (s = D.displayName || D.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case ht:
            return D = s.displayName || null, D !== null ? D : t(s.type) || "Memo";
          case re:
            D = s._payload, s = s._init;
            try {
              return t(s(D));
            } catch {
            }
        }
      return null;
    }
    function e(s) {
      return "" + s;
    }
    function r(s) {
      try {
        e(s);
        var D = !1;
      } catch {
        D = !0;
      }
      if (D) {
        D = console;
        var T = D.error, O = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return T.call(
          D,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), e(s);
      }
    }
    function n(s) {
      if (s === b) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === re)
        return "<...>";
      try {
        var D = t(s);
        return D ? "<" + D + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var s = ne.A;
      return s === null ? null : s.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(s) {
      if (Ee.call(s, "key")) {
        var D = Object.getOwnPropertyDescriptor(s, "key").get;
        if (D && D.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function c(s, D) {
      function T() {
        we || (we = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          D
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: T,
        configurable: !0
      });
    }
    function f() {
      var s = t(this.type);
      return xe[s] || (xe[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function h(s, D, T, O, Y, oe) {
      var E = T.ref;
      return s = {
        $$typeof: d,
        type: s,
        key: D,
        props: T,
        _owner: O
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function y(s, D, T, O, Y, oe) {
      var E = D.children;
      if (E !== void 0)
        if (O)
          if (vt(E)) {
            for (O = 0; O < E.length; O++)
              m(E[O]);
            Object.freeze && Object.freeze(E);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(E);
      if (Ee.call(D, "key")) {
        E = t(s);
        var j = Object.keys(D).filter(function(Dt) {
          return Dt !== "key";
        });
        O = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", Ne[E + O] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          E,
          j,
          E
        ), Ne[E + O] = !0);
      }
      if (E = null, T !== void 0 && (r(T), E = "" + T), a(D) && (r(D.key), E = "" + D.key), "key" in D) {
        T = {};
        for (var se in D)
          se !== "key" && (T[se] = D[se]);
      } else T = D;
      return E && c(
        T,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), h(
        s,
        E,
        T,
        i(),
        Y,
        oe
      );
    }
    function m(s) {
      p(s) ? s._store && (s._store.validated = 1) : typeof s == "object" && s !== null && s.$$typeof === re && (s._payload.status === "fulfilled" ? p(s._payload.value) && s._payload.value._store && (s._payload.value._store.validated = 1) : s._store && (s._store.validated = 1));
    }
    function p(s) {
      return typeof s == "object" && s !== null && s.$$typeof === d;
    }
    var u = X, d = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), H = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), gt = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), pt = Symbol.for("react.activity"), mt = Symbol.for("react.client.reference"), ne = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ee = Object.prototype.hasOwnProperty, vt = Array.isArray, ie = console.createTask ? console.createTask : function() {
      return null;
    };
    u = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var we, xe = {}, Ie = u.react_stack_bottom_frame.bind(
      u,
      o
    )(), Ce = ie(n(o)), Ne = {};
    U.Fragment = b, U.jsx = function(s, D, T) {
      var O = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return y(
        s,
        D,
        T,
        !1,
        O ? Error("react-stack-top-frame") : Ie,
        O ? ie(n(s)) : Ce
      );
    }, U.jsxs = function(s, D, T) {
      var O = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return y(
        s,
        D,
        T,
        !0,
        O ? Error("react-stack-top-frame") : Ie,
        O ? ie(n(s)) : Ce
      );
    };
  })()), U;
}
var je;
function It() {
  return je || (je = 1, process.env.NODE_ENV === "production" ? G.exports = wt() : G.exports = xt()), G.exports;
}
var l = It();
const Xe = yt({
  dragDropManager: void 0
});
function I(t) {
  return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. ";
}
var ke = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})(), Me = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Ae = {
  INIT: "@@redux/INIT" + Me(),
  REPLACE: "@@redux/REPLACE" + Me()
};
function Ct(t) {
  if (typeof t != "object" || t === null) return !1;
  for (var e = t; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function Nt(t) {
  if (t === void 0) return "undefined";
  if (t === null) return "null";
  var e = typeof t;
  switch (e) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return e;
  }
  if (Array.isArray(t)) return "array";
  if (_t(t)) return "date";
  if (Rt(t)) return "error";
  var r = Pt(t);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return e.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Pt(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function Rt(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function _t(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function k(t) {
  var e = typeof t;
  return process.env.NODE_ENV !== "production" && (e = Nt(t)), e;
}
function Je(t, e, r) {
  var n;
  if (typeof e == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? I(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof e == "function" && typeof r > "u" && (r = e, e = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? I(1) : "Expected the enhancer to be a function. Instead, received: '" + k(r) + "'");
    return r(Je)(t, e);
  }
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? I(2) : "Expected the root reducer to be a function. Instead, received: '" + k(t) + "'");
  var i = t, o = e, a = [], c = a, f = !1;
  function h() {
    c === a && (c = a.slice());
  }
  function y() {
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? I(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function m(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? I(4) : "Expected the listener to be a function. Instead, received: '" + k(g) + "'");
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? I(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var b = !0;
    return h(), c.push(g), function() {
      if (b) {
        if (f)
          throw new Error(process.env.NODE_ENV === "production" ? I(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        b = !1, h();
        var w = c.indexOf(g);
        c.splice(w, 1), a = null;
      }
    };
  }
  function p(g) {
    if (!Ct(g))
      throw new Error(process.env.NODE_ENV === "production" ? I(7) : "Actions must be plain objects. Instead, the actual type was: '" + k(g) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof g.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? I(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? I(9) : "Reducers may not dispatch actions.");
    try {
      f = !0, o = i(o, g);
    } finally {
      f = !1;
    }
    for (var b = a = c, S = 0; S < b.length; S++) {
      var w = b[S];
      w();
    }
    return g;
  }
  function u(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? I(10) : "Expected the nextReducer to be a function. Instead, received: '" + k(g));
    i = g, p({
      type: Ae.REPLACE
    });
  }
  function d() {
    var g, b = m;
    return g = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(w) {
        if (typeof w != "object" || w === null)
          throw new Error(process.env.NODE_ENV === "production" ? I(11) : "Expected the observer to be an object. Instead, received: '" + k(w) + "'");
        function N() {
          w.next && w.next(y());
        }
        N();
        var H = b(N);
        return {
          unsubscribe: H
        };
      }
    }, g[ke] = function() {
      return this;
    }, g;
  }
  return p({
    type: Ae.INIT
  }), n = {
    dispatch: p,
    subscribe: m,
    getState: y,
    replaceReducer: u
  }, n[ke] = d, n;
}
function v(t, e, ...r) {
  if (jt() && e === void 0)
    throw new Error("invariant requires an error message argument");
  if (!t) {
    let n;
    if (e === void 0)
      n = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      let i = 0;
      n = new Error(e.replace(/%s/g, function() {
        return r[i++];
      })), n.name = "Invariant Violation";
    }
    throw n.framesToPop = 1, n;
  }
}
function jt() {
  return typeof process < "u" && process.env.NODE_ENV === "production";
}
function kt(t, e, r) {
  return e.split(".").reduce(
    (n, i) => n && n[i] ? n[i] : r || null,
    t
  );
}
function Mt(t, e) {
  return t.filter(
    (r) => r !== e
  );
}
function Ze(t) {
  return typeof t == "object";
}
function At(t, e) {
  const r = /* @__PURE__ */ new Map(), n = (o) => {
    r.set(o, r.has(o) ? r.get(o) + 1 : 1);
  };
  t.forEach(n), e.forEach(n);
  const i = [];
  return r.forEach((o, a) => {
    o === 1 && i.push(a);
  }), i;
}
function Lt(t, e) {
  return t.filter(
    (r) => e.indexOf(r) > -1
  );
}
const De = "dnd-core/INIT_COORDS", J = "dnd-core/BEGIN_DRAG", ye = "dnd-core/PUBLISH_DRAG_SOURCE", Z = "dnd-core/HOVER", Q = "dnd-core/DROP", K = "dnd-core/END_DRAG";
function Le(t, e) {
  return {
    type: De,
    payload: {
      sourceClientOffset: e || null,
      clientOffset: t || null
    }
  };
}
const Ht = {
  type: De,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function Ft(t) {
  return function(r = [], n = {
    publishSource: !0
  }) {
    const { publishSource: i = !0, clientOffset: o, getSourceClientOffset: a } = n, c = t.getMonitor(), f = t.getRegistry();
    t.dispatch(Le(o)), Ut(r, c, f);
    const h = qt(r, c);
    if (h == null) {
      t.dispatch(Ht);
      return;
    }
    let y = null;
    if (o) {
      if (!a)
        throw new Error("getSourceClientOffset must be defined");
      $t(a), y = a(h);
    }
    t.dispatch(Le(o, y));
    const p = f.getSource(h).beginDrag(c, h);
    if (p == null)
      return;
    Vt(p), f.pinSource(h);
    const u = f.getSourceType(h);
    return {
      type: J,
      payload: {
        itemType: u,
        item: p,
        sourceId: h,
        clientOffset: o || null,
        sourceClientOffset: y || null,
        isSourcePublic: !!i
      }
    };
  };
}
function Ut(t, e, r) {
  v(!e.isDragging(), "Cannot call beginDrag while dragging."), t.forEach(function(n) {
    v(r.getSource(n), "Expected sourceIds to be registered.");
  });
}
function $t(t) {
  v(typeof t == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function Vt(t) {
  v(Ze(t), "Item must be an object.");
}
function qt(t, e) {
  let r = null;
  for (let n = t.length - 1; n >= 0; n--)
    if (e.canDragSource(t[n])) {
      r = t[n];
      break;
    }
  return r;
}
function Yt(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Gt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    }))), n.forEach(function(i) {
      Yt(t, i, r[i]);
    });
  }
  return t;
}
function Wt(t) {
  return function(r = {}) {
    const n = t.getMonitor(), i = t.getRegistry();
    zt(n), Jt(n).forEach((a, c) => {
      const f = Bt(a, c, i, n), h = {
        type: Q,
        payload: {
          dropResult: Gt({}, r, f)
        }
      };
      t.dispatch(h);
    });
  };
}
function zt(t) {
  v(t.isDragging(), "Cannot call drop while not dragging."), v(!t.didDrop(), "Cannot call drop twice during one drag operation.");
}
function Bt(t, e, r, n) {
  const i = r.getTarget(t);
  let o = i ? i.drop(n, t) : void 0;
  return Xt(o), typeof o > "u" && (o = e === 0 ? {} : n.getDropResult()), o;
}
function Xt(t) {
  v(typeof t > "u" || Ze(t), "Drop result must either be an object or undefined.");
}
function Jt(t) {
  const e = t.getTargetIds().filter(t.canDropOnTarget, t);
  return e.reverse(), e;
}
function Zt(t) {
  return function() {
    const r = t.getMonitor(), n = t.getRegistry();
    Qt(r);
    const i = r.getSourceId();
    return i != null && (n.getSource(i, !0).endDrag(r, i), n.unpinSource()), {
      type: K
    };
  };
}
function Qt(t) {
  v(t.isDragging(), "Cannot call endDrag while not dragging.");
}
function ge(t, e) {
  return e === null ? t === null : Array.isArray(t) ? t.some(
    (r) => r === e
  ) : t === e;
}
function Kt(t) {
  return function(r, { clientOffset: n } = {}) {
    er(r);
    const i = r.slice(0), o = t.getMonitor(), a = t.getRegistry(), c = o.getItemType();
    return rr(i, a, c), tr(i, o, a), nr(i, o, a), {
      type: Z,
      payload: {
        targetIds: i,
        clientOffset: n || null
      }
    };
  };
}
function er(t) {
  v(Array.isArray(t), "Expected targetIds to be an array.");
}
function tr(t, e, r) {
  v(e.isDragging(), "Cannot call hover while not dragging."), v(!e.didDrop(), "Cannot call hover after drop.");
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    v(t.lastIndexOf(i) === n, "Expected targetIds to be unique in the passed array.");
    const o = r.getTarget(i);
    v(o, "Expected targetIds to be registered.");
  }
}
function rr(t, e, r) {
  for (let n = t.length - 1; n >= 0; n--) {
    const i = t[n], o = e.getTargetType(i);
    ge(o, r) || t.splice(n, 1);
  }
}
function nr(t, e, r) {
  t.forEach(function(n) {
    r.getTarget(n).hover(e, n);
  });
}
function ir(t) {
  return function() {
    if (t.getMonitor().isDragging())
      return {
        type: ye
      };
  };
}
function or(t) {
  return {
    beginDrag: Ft(t),
    publishDragSource: ir(t),
    hover: Kt(t),
    drop: Wt(t),
    endDrag: Zt(t)
  };
}
class sr {
  receiveBackend(e) {
    this.backend = e;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    const e = this, { dispatch: r } = this.store;
    function n(o) {
      return (...a) => {
        const c = o.apply(e, a);
        typeof c < "u" && r(c);
      };
    }
    const i = or(this);
    return Object.keys(i).reduce((o, a) => {
      const c = i[a];
      return o[a] = n(c), o;
    }, {});
  }
  dispatch(e) {
    this.store.dispatch(e);
  }
  constructor(e, r) {
    this.isSetUp = !1, this.handleRefCountChange = () => {
      const n = this.store.getState().refCount > 0;
      this.backend && (n && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !n && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
    }, this.store = e, this.monitor = r, e.subscribe(this.handleRefCountChange);
  }
}
function ar(t, e) {
  return {
    x: t.x + e.x,
    y: t.y + e.y
  };
}
function Qe(t, e) {
  return {
    x: t.x - e.x,
    y: t.y - e.y
  };
}
function cr(t) {
  const { clientOffset: e, initialClientOffset: r, initialSourceClientOffset: n } = t;
  return !e || !r || !n ? null : Qe(ar(e, n), r);
}
function ur(t) {
  const { clientOffset: e, initialClientOffset: r } = t;
  return !e || !r ? null : Qe(e, r);
}
const $ = [], be = [];
$.__IS_NONE__ = !0;
be.__IS_ALL__ = !0;
function lr(t, e) {
  return t === $ ? !1 : t === be || typeof e > "u" ? !0 : Lt(e, t).length > 0;
}
class dr {
  subscribeToStateChange(e, r = {}) {
    const { handlerIds: n } = r;
    v(typeof e == "function", "listener must be a function."), v(typeof n > "u" || Array.isArray(n), "handlerIds, when specified, must be an array of strings.");
    let i = this.store.getState().stateId;
    const o = () => {
      const a = this.store.getState(), c = a.stateId;
      try {
        c === i || c === i + 1 && !lr(a.dirtyHandlerIds, n) || e();
      } finally {
        i = c;
      }
    };
    return this.store.subscribe(o);
  }
  subscribeToOffsetChange(e) {
    v(typeof e == "function", "listener must be a function.");
    let r = this.store.getState().dragOffset;
    const n = () => {
      const i = this.store.getState().dragOffset;
      i !== r && (r = i, e());
    };
    return this.store.subscribe(n);
  }
  canDragSource(e) {
    if (!e)
      return !1;
    const r = this.registry.getSource(e);
    return v(r, `Expected to find a valid source. sourceId=${e}`), this.isDragging() ? !1 : r.canDrag(this, e);
  }
  canDropOnTarget(e) {
    if (!e)
      return !1;
    const r = this.registry.getTarget(e);
    if (v(r, `Expected to find a valid target. targetId=${e}`), !this.isDragging() || this.didDrop())
      return !1;
    const n = this.registry.getTargetType(e), i = this.getItemType();
    return ge(n, i) && r.canDrop(this, e);
  }
  isDragging() {
    return !!this.getItemType();
  }
  isDraggingSource(e) {
    if (!e)
      return !1;
    const r = this.registry.getSource(e, !0);
    if (v(r, `Expected to find a valid source. sourceId=${e}`), !this.isDragging() || !this.isSourcePublic())
      return !1;
    const n = this.registry.getSourceType(e), i = this.getItemType();
    return n !== i ? !1 : r.isDragging(this, e);
  }
  isOverTarget(e, r = {
    shallow: !1
  }) {
    if (!e)
      return !1;
    const { shallow: n } = r;
    if (!this.isDragging())
      return !1;
    const i = this.registry.getTargetType(e), o = this.getItemType();
    if (o && !ge(i, o))
      return !1;
    const a = this.getTargetIds();
    if (!a.length)
      return !1;
    const c = a.indexOf(e);
    return n ? c === a.length - 1 : c > -1;
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return !!this.store.getState().dragOperation.isSourcePublic;
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return cr(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return ur(this.store.getState().dragOffset);
  }
  constructor(e, r) {
    this.store = e, this.registry = r;
  }
}
const He = typeof global < "u" ? global : self, Ke = He.MutationObserver || He.WebKitMutationObserver;
function et(t) {
  return function() {
    const r = setTimeout(i, 0), n = setInterval(i, 50);
    function i() {
      clearTimeout(r), clearInterval(n), t();
    }
  };
}
function fr(t) {
  let e = 1;
  const r = new Ke(t), n = document.createTextNode("");
  return r.observe(n, {
    characterData: !0
  }), function() {
    e = -e, n.data = e;
  };
}
const gr = typeof Ke == "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  fr
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  et
);
class hr {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(e) {
    const { queue: r, requestFlush: n } = this;
    r.length || (n(), this.flushing = !0), r[r.length] = e;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: e } = this;
      for (; this.index < e.length; ) {
        const r = this.index;
        if (this.index++, e[r].call(), this.index > this.capacity) {
          for (let n = 0, i = e.length - this.index; n < i; n++)
            e[n] = e[n + this.index];
          e.length -= this.index, this.index = 0;
        }
      }
      e.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (e) => {
      this.pendingErrors.push(e), this.requestErrorThrow();
    }, this.requestFlush = gr(this.flush), this.requestErrorThrow = et(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class pr {
  call() {
    try {
      this.task && this.task();
    } catch (e) {
      this.onError(e);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(e, r) {
    this.onError = e, this.release = r, this.task = null;
  }
}
class mr {
  create(e) {
    const r = this.freeTasks, n = r.length ? r.pop() : new pr(
      this.onError,
      (i) => r[r.length] = i
    );
    return n.task = e, n;
  }
  constructor(e) {
    this.onError = e, this.freeTasks = [];
  }
}
const tt = new hr(), vr = new mr(tt.registerPendingError);
function Dr(t) {
  tt.enqueueTask(vr.create(t));
}
const Te = "dnd-core/ADD_SOURCE", Se = "dnd-core/ADD_TARGET", Oe = "dnd-core/REMOVE_SOURCE", ee = "dnd-core/REMOVE_TARGET";
function yr(t) {
  return {
    type: Te,
    payload: {
      sourceId: t
    }
  };
}
function br(t) {
  return {
    type: Se,
    payload: {
      targetId: t
    }
  };
}
function Tr(t) {
  return {
    type: Oe,
    payload: {
      sourceId: t
    }
  };
}
function Sr(t) {
  return {
    type: ee,
    payload: {
      targetId: t
    }
  };
}
function Or(t) {
  v(typeof t.canDrag == "function", "Expected canDrag to be a function."), v(typeof t.beginDrag == "function", "Expected beginDrag to be a function."), v(typeof t.endDrag == "function", "Expected endDrag to be a function.");
}
function Er(t) {
  v(typeof t.canDrop == "function", "Expected canDrop to be a function."), v(typeof t.hover == "function", "Expected hover to be a function."), v(typeof t.drop == "function", "Expected beginDrag to be a function.");
}
function he(t, e) {
  if (e && Array.isArray(t)) {
    t.forEach(
      (r) => he(r, !1)
    );
    return;
  }
  v(typeof t == "string" || typeof t == "symbol", e ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
var C;
(function(t) {
  t.SOURCE = "SOURCE", t.TARGET = "TARGET";
})(C || (C = {}));
let wr = 0;
function xr() {
  return wr++;
}
function Ir(t) {
  const e = xr().toString();
  switch (t) {
    case C.SOURCE:
      return `S${e}`;
    case C.TARGET:
      return `T${e}`;
    default:
      throw new Error(`Unknown Handler Role: ${t}`);
  }
}
function Fe(t) {
  switch (t[0]) {
    case "S":
      return C.SOURCE;
    case "T":
      return C.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${t}`);
  }
}
function Ue(t, e) {
  const r = t.entries();
  let n = !1;
  do {
    const { done: i, value: [, o] } = r.next();
    if (o === e)
      return !0;
    n = !!i;
  } while (!n);
  return !1;
}
class Cr {
  addSource(e, r) {
    he(e), Or(r);
    const n = this.addHandler(C.SOURCE, e, r);
    return this.store.dispatch(yr(n)), n;
  }
  addTarget(e, r) {
    he(e, !0), Er(r);
    const n = this.addHandler(C.TARGET, e, r);
    return this.store.dispatch(br(n)), n;
  }
  containsHandler(e) {
    return Ue(this.dragSources, e) || Ue(this.dropTargets, e);
  }
  getSource(e, r = !1) {
    return v(this.isSourceId(e), "Expected a valid source ID."), r && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
  }
  getTarget(e) {
    return v(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
  }
  getSourceType(e) {
    return v(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
  }
  getTargetType(e) {
    return v(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
  }
  isSourceId(e) {
    return Fe(e) === C.SOURCE;
  }
  isTargetId(e) {
    return Fe(e) === C.TARGET;
  }
  removeSource(e) {
    v(this.getSource(e), "Expected an existing source."), this.store.dispatch(Tr(e)), Dr(() => {
      this.dragSources.delete(e), this.types.delete(e);
    });
  }
  removeTarget(e) {
    v(this.getTarget(e), "Expected an existing target."), this.store.dispatch(Sr(e)), this.dropTargets.delete(e), this.types.delete(e);
  }
  pinSource(e) {
    const r = this.getSource(e);
    v(r, "Expected an existing source."), this.pinnedSourceId = e, this.pinnedSource = r;
  }
  unpinSource() {
    v(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
  }
  addHandler(e, r, n) {
    const i = Ir(e);
    return this.types.set(i, r), e === C.SOURCE ? this.dragSources.set(i, n) : e === C.TARGET && this.dropTargets.set(i, n), i;
  }
  constructor(e) {
    this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = e;
  }
}
const Nr = (t, e) => t === e;
function Pr(t, e) {
  return !t && !e ? !0 : !t || !e ? !1 : t.x === e.x && t.y === e.y;
}
function Rr(t, e, r = Nr) {
  if (t.length !== e.length)
    return !1;
  for (let n = 0; n < t.length; ++n)
    if (!r(t[n], e[n]))
      return !1;
  return !0;
}
function _r(t = $, e) {
  switch (e.type) {
    case Z:
      break;
    case Te:
    case Se:
    case ee:
    case Oe:
      return $;
    case J:
    case ye:
    case K:
    case Q:
    default:
      return be;
  }
  const { targetIds: r = [], prevTargetIds: n = [] } = e.payload, i = At(r, n);
  if (!(i.length > 0 || !Rr(r, n)))
    return $;
  const a = n[n.length - 1], c = r[r.length - 1];
  return a !== c && (a && i.push(a), c && i.push(c)), i;
}
function jr(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function kr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    }))), n.forEach(function(i) {
      jr(t, i, r[i]);
    });
  }
  return t;
}
const $e = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function Mr(t = $e, e) {
  const { payload: r } = e;
  switch (e.type) {
    case De:
    case J:
      return {
        initialSourceClientOffset: r.sourceClientOffset,
        initialClientOffset: r.clientOffset,
        clientOffset: r.clientOffset
      };
    case Z:
      return Pr(t.clientOffset, r.clientOffset) ? t : kr({}, t, {
        clientOffset: r.clientOffset
      });
    case K:
    case Q:
      return $e;
    default:
      return t;
  }
}
function Ar(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function M(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    }))), n.forEach(function(i) {
      Ar(t, i, r[i]);
    });
  }
  return t;
}
const Lr = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function Hr(t = Lr, e) {
  const { payload: r } = e;
  switch (e.type) {
    case J:
      return M({}, t, {
        itemType: r.itemType,
        item: r.item,
        sourceId: r.sourceId,
        isSourcePublic: r.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case ye:
      return M({}, t, {
        isSourcePublic: !0
      });
    case Z:
      return M({}, t, {
        targetIds: r.targetIds
      });
    case ee:
      return t.targetIds.indexOf(r.targetId) === -1 ? t : M({}, t, {
        targetIds: Mt(t.targetIds, r.targetId)
      });
    case Q:
      return M({}, t, {
        dropResult: r.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case K:
      return M({}, t, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return t;
  }
}
function Fr(t = 0, e) {
  switch (e.type) {
    case Te:
    case Se:
      return t + 1;
    case Oe:
    case ee:
      return t - 1;
    default:
      return t;
  }
}
function Ur(t = 0) {
  return t + 1;
}
function $r(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Vr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    }))), n.forEach(function(i) {
      $r(t, i, r[i]);
    });
  }
  return t;
}
function qr(t = {}, e) {
  return {
    dirtyHandlerIds: _r(t.dirtyHandlerIds, {
      type: e.type,
      payload: Vr({}, e.payload, {
        prevTargetIds: kt(t, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: Mr(t.dragOffset, e),
    refCount: Fr(t.refCount, e),
    dragOperation: Hr(t.dragOperation, e),
    stateId: Ur(t.stateId)
  };
}
function Yr(t, e = void 0, r = {}, n = !1) {
  const i = Gr(n), o = new dr(i, new Cr(i)), a = new sr(i, o), c = t(a, e, r);
  return a.receiveBackend(c), a;
}
function Gr(t) {
  const e = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return Je(qr, t && e && e({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
function Wr(t, e) {
  if (t == null) return {};
  var r = zr(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      n = o[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function zr(t, e) {
  if (t == null) return {};
  var r = {}, n = Object.keys(t), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
let Ve = 0;
const B = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var Br = /* @__PURE__ */ bt(function(e) {
  var { children: r } = e, n = Wr(e, [
    "children"
  ]);
  const [i, o] = Xr(n);
  return R(() => {
    if (o) {
      const a = rt();
      return ++Ve, () => {
        --Ve === 0 && (a[B] = null);
      };
    }
  }, []), /* @__PURE__ */ l.jsx(Xe.Provider, {
    value: i,
    children: r
  });
});
function Xr(t) {
  if ("manager" in t)
    return [
      {
        dragDropManager: t.manager
      },
      !1
    ];
  const e = Jr(t.backend, t.context, t.options, t.debugMode), r = !t.context;
  return [
    e,
    r
  ];
}
function Jr(t, e = rt(), r, n) {
  const i = e;
  return i[B] || (i[B] = {
    dragDropManager: Yr(t, e, r, n)
  }), i[B];
}
function rt() {
  return typeof global < "u" ? global : window;
}
var ae, qe;
function Zr() {
  return qe || (qe = 1, ae = function t(e, r) {
    if (e === r) return !0;
    if (e && r && typeof e == "object" && typeof r == "object") {
      if (e.constructor !== r.constructor) return !1;
      var n, i, o;
      if (Array.isArray(e)) {
        if (n = e.length, n != r.length) return !1;
        for (i = n; i-- !== 0; )
          if (!t(e[i], r[i])) return !1;
        return !0;
      }
      if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
      if (o = Object.keys(e), n = o.length, n !== Object.keys(r).length) return !1;
      for (i = n; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
      for (i = n; i-- !== 0; ) {
        var a = o[i];
        if (!t(e[a], r[a])) return !1;
      }
      return !0;
    }
    return e !== e && r !== r;
  }), ae;
}
var Qr = Zr();
const Kr = /* @__PURE__ */ Et(Qr), _ = typeof window < "u" ? Tt : R;
function en(t, e, r) {
  const [n, i] = V(
    () => e(t)
  ), o = A(() => {
    const a = e(t);
    Kr(n, a) || (i(a), r && r());
  }, [
    n,
    t,
    r
  ]);
  return _(o), [
    n,
    o
  ];
}
function tn(t, e, r) {
  const [n, i] = en(t, e, r);
  return _(function() {
    const a = t.getHandlerId();
    if (a != null)
      return t.subscribeToStateChange(i, {
        handlerIds: [
          a
        ]
      });
  }, [
    t,
    i
  ]), n;
}
function nt(t, e, r) {
  return tn(
    e,
    t || (() => ({})),
    () => r.reconnect()
  );
}
function it(t, e) {
  const r = [];
  return typeof t != "function" && r.push(t), x(() => typeof t == "function" ? t() : t, r);
}
function rn(t) {
  return x(
    () => t.hooks.dragSource(),
    [
      t
    ]
  );
}
function nn(t) {
  return x(
    () => t.hooks.dragPreview(),
    [
      t
    ]
  );
}
let ce = !1, ue = !1;
class on {
  receiveHandlerId(e) {
    this.sourceId = e;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    v(!ce, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return ce = !0, this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      ce = !1;
    }
  }
  isDragging() {
    if (!this.sourceId)
      return !1;
    v(!ue, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return ue = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      ue = !1;
    }
  }
  subscribeToStateChange(e, r) {
    return this.internalMonitor.subscribeToStateChange(e, r);
  }
  isDraggingSource(e) {
    return this.internalMonitor.isDraggingSource(e);
  }
  isOverTarget(e, r) {
    return this.internalMonitor.isOverTarget(e, r);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(e) {
    return this.internalMonitor.subscribeToOffsetChange(e);
  }
  canDragSource(e) {
    return this.internalMonitor.canDragSource(e);
  }
  canDropOnTarget(e) {
    return this.internalMonitor.canDropOnTarget(e);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(e) {
    this.sourceId = null, this.internalMonitor = e.getMonitor();
  }
}
let le = !1;
class sn {
  receiveHandlerId(e) {
    this.targetId = e;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(e, r) {
    return this.internalMonitor.subscribeToStateChange(e, r);
  }
  canDrop() {
    if (!this.targetId)
      return !1;
    v(!le, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      return le = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      le = !1;
    }
  }
  isOver(e) {
    return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, e) : !1;
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(e) {
    this.targetId = null, this.internalMonitor = e.getMonitor();
  }
}
function an(t, e, r) {
  const n = r.getRegistry(), i = n.addTarget(t, e);
  return [
    i,
    () => n.removeTarget(i)
  ];
}
function cn(t, e, r) {
  const n = r.getRegistry(), i = n.addSource(t, e);
  return [
    i,
    () => n.removeSource(i)
  ];
}
function pe(t, e, r, n) {
  let i;
  if (i !== void 0)
    return !!i;
  if (t === e)
    return !0;
  if (typeof t != "object" || !t || typeof e != "object" || !e)
    return !1;
  const o = Object.keys(t), a = Object.keys(e);
  if (o.length !== a.length)
    return !1;
  const c = Object.prototype.hasOwnProperty.bind(e);
  for (let f = 0; f < o.length; f++) {
    const h = o[f];
    if (!c(h))
      return !1;
    const y = t[h], m = e[h];
    if (i = void 0, i === !1 || i === void 0 && y !== m)
      return !1;
  }
  return !0;
}
function me(t) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    t !== null && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function un(t) {
  if (typeof t.type == "string")
    return;
  const e = t.type.displayName || t.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function ln(t) {
  return (e = null, r = null) => {
    if (!St(e)) {
      const o = e;
      return t(o, r), o;
    }
    const n = e;
    return un(n), dn(n, r ? (o) => t(o, r) : t);
  };
}
function ot(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    const n = t[r];
    if (r.endsWith("Ref"))
      e[r] = t[r];
    else {
      const i = ln(n);
      e[r] = () => i;
    }
  }), e;
}
function Ye(t, e) {
  typeof t == "function" ? t(e) : t.current = e;
}
function dn(t, e) {
  const r = t.ref;
  return v(typeof r != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? Pe(t, {
    ref: (n) => {
      Ye(r, n), Ye(e, n);
    }
  }) : Pe(t, {
    ref: e
  });
}
class fn {
  receiveHandlerId(e) {
    this.handlerId !== e && (this.handlerId = e, this.reconnect());
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(e) {
    this.dragSourceOptionsInternal = e;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(e) {
    this.dragPreviewOptionsInternal = e;
  }
  reconnect() {
    const e = this.reconnectDragSource();
    this.reconnectDragPreview(e);
  }
  reconnectDragSource() {
    const e = this.dragSource, r = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    return r && this.disconnectDragSource(), this.handlerId ? e ? (r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions)), r) : (this.lastConnectedDragSource = e, r) : r;
  }
  reconnectDragPreview(e = !1) {
    const r = this.dragPreview, n = e || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (n && this.disconnectDragPreview(), !!this.handlerId) {
      if (!r) {
        this.lastConnectedDragPreview = r;
        return;
      }
      n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = r, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, r, this.dragPreviewOptions));
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !pe(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !pe(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
  }
  disconnectDragPreview() {
    this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null, this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null, this.dragPreviewRef = null;
  }
  constructor(e) {
    this.hooks = ot({
      dragSource: (r, n) => {
        this.clearDragSource(), this.dragSourceOptions = n || null, me(r) ? this.dragSourceRef = r : this.dragSourceNode = r, this.reconnectDragSource();
      },
      dragPreview: (r, n) => {
        this.clearDragPreview(), this.dragPreviewOptions = n || null, me(r) ? this.dragPreviewRef = r : this.dragPreviewNode = r, this.reconnectDragPreview();
      }
    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = e;
  }
}
class gn {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    e && this.disconnectDropTarget();
    const r = this.dropTarget;
    if (this.handlerId) {
      if (!r) {
        this.lastConnectedDropTarget = r;
        return;
      }
      e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = r, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, r, this.dropTargetOptions));
    }
  }
  receiveHandlerId(e) {
    e !== this.handlerId && (this.handlerId = e, this.reconnect());
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(e) {
    this.dropTargetOptionsInternal = e;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !pe(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null, this.dropTargetNode = null;
  }
  constructor(e) {
    this.hooks = ot({
      dropTarget: (r, n) => {
        this.clearDropTarget(), this.dropTargetOptions = n, me(r) ? this.dropTargetRef = r : this.dropTargetNode = r, this.reconnect();
      }
    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = e;
  }
}
function L() {
  const { dragDropManager: t } = Ot(Xe);
  return v(t != null, "Expected drag drop context"), t;
}
function hn(t, e) {
  const r = L(), n = x(
    () => new fn(r.getBackend()),
    [
      r
    ]
  );
  return _(() => (n.dragSourceOptions = t || null, n.reconnect(), () => n.disconnectDragSource()), [
    n,
    t
  ]), _(() => (n.dragPreviewOptions = e || null, n.reconnect(), () => n.disconnectDragPreview()), [
    n,
    e
  ]), n;
}
function pn() {
  const t = L();
  return x(
    () => new on(t),
    [
      t
    ]
  );
}
class mn {
  beginDrag() {
    const e = this.spec, r = this.monitor;
    let n = null;
    return typeof e.item == "object" ? n = e.item : typeof e.item == "function" ? n = e.item(r) : n = {}, n ?? null;
  }
  canDrag() {
    const e = this.spec, r = this.monitor;
    return typeof e.canDrag == "boolean" ? e.canDrag : typeof e.canDrag == "function" ? e.canDrag(r) : !0;
  }
  isDragging(e, r) {
    const n = this.spec, i = this.monitor, { isDragging: o } = n;
    return o ? o(i) : r === e.getSourceId();
  }
  endDrag() {
    const e = this.spec, r = this.monitor, n = this.connector, { end: i } = e;
    i && i(r.getItem(), r), n.reconnect();
  }
  constructor(e, r, n) {
    this.spec = e, this.monitor = r, this.connector = n;
  }
}
function vn(t, e, r) {
  const n = x(
    () => new mn(t, e, r),
    [
      e,
      r
    ]
  );
  return R(() => {
    n.spec = t;
  }, [
    t
  ]), n;
}
function Dn(t) {
  return x(() => {
    const e = t.type;
    return v(e != null, "spec.type must be defined"), e;
  }, [
    t
  ]);
}
function yn(t, e, r) {
  const n = L(), i = vn(t, e, r), o = Dn(t);
  _(function() {
    if (o != null) {
      const [c, f] = cn(o, i, n);
      return e.receiveHandlerId(c), r.receiveHandlerId(c), f;
    }
  }, [
    n,
    e,
    r,
    i,
    o
  ]);
}
function bn(t, e) {
  const r = it(t);
  v(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  const n = pn(), i = hn(r.options, r.previewOptions);
  return yn(r, n, i), [
    nt(r.collect, n, i),
    rn(i),
    nn(i)
  ];
}
function Tn(t) {
  return x(
    () => t.hooks.dropTarget(),
    [
      t
    ]
  );
}
function Sn(t) {
  const e = L(), r = x(
    () => new gn(e.getBackend()),
    [
      e
    ]
  );
  return _(() => (r.dropTargetOptions = t || null, r.reconnect(), () => r.disconnectDropTarget()), [
    t
  ]), r;
}
function On() {
  const t = L();
  return x(
    () => new sn(t),
    [
      t
    ]
  );
}
function En(t) {
  const { accept: e } = t;
  return x(() => (v(t.accept != null, "accept must be defined"), Array.isArray(e) ? e : [
    e
  ]), [
    e
  ]);
}
class wn {
  canDrop() {
    const e = this.spec, r = this.monitor;
    return e.canDrop ? e.canDrop(r.getItem(), r) : !0;
  }
  hover() {
    const e = this.spec, r = this.monitor;
    e.hover && e.hover(r.getItem(), r);
  }
  drop() {
    const e = this.spec, r = this.monitor;
    if (e.drop)
      return e.drop(r.getItem(), r);
  }
  constructor(e, r) {
    this.spec = e, this.monitor = r;
  }
}
function xn(t, e) {
  const r = x(
    () => new wn(t, e),
    [
      e
    ]
  );
  return R(() => {
    r.spec = t;
  }, [
    t
  ]), r;
}
function In(t, e, r) {
  const n = L(), i = xn(t, e), o = En(t);
  _(function() {
    const [c, f] = an(o, i, n);
    return e.receiveHandlerId(c), r.receiveHandlerId(c), f;
  }, [
    n,
    e,
    i,
    r,
    o.map(
      (a) => a.toString()
    ).join("|")
  ]);
}
function Cn(t, e) {
  const r = it(t), n = On(), i = Sn(r.options);
  return In(r, n, i), [
    nt(r.collect, n, i),
    Tn(i)
  ];
}
function st(t) {
  let e = null;
  return () => (e == null && (e = t()), e);
}
function Nn(t, e) {
  return t.filter(
    (r) => r !== e
  );
}
function Pn(t, e) {
  const r = /* @__PURE__ */ new Set(), n = (o) => r.add(o);
  t.forEach(n), e.forEach(n);
  const i = [];
  return r.forEach(
    (o) => i.push(o)
  ), i;
}
class Rn {
  enter(e) {
    const r = this.entered.length, n = (i) => this.isNodeInDocument(i) && (!i.contains || i.contains(e));
    return this.entered = Pn(this.entered.filter(n), [
      e
    ]), r === 0 && this.entered.length > 0;
  }
  leave(e) {
    const r = this.entered.length;
    return this.entered = Nn(this.entered.filter(this.isNodeInDocument), e), r > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(e) {
    this.entered = [], this.isNodeInDocument = e;
  }
}
class _n {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((e) => {
      Object.defineProperty(this.item, e, {
        configurable: !0,
        enumerable: !0,
        get() {
          return console.warn(`Browser doesn't allow reading "${e}" until the drop event.`), null;
        }
      });
    });
  }
  loadDataTransfer(e) {
    if (e) {
      const r = {};
      Object.keys(this.config.exposeProperties).forEach((n) => {
        const i = this.config.exposeProperties[n];
        i != null && (r[n] = {
          value: i(e, this.config.matchesTypes),
          configurable: !0,
          enumerable: !0
        });
      }), Object.defineProperties(this.item, r);
    }
  }
  canDrag() {
    return !0;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(e, r) {
    return r === e.getSourceId();
  }
  endDrag() {
  }
  constructor(e) {
    this.config = e, this.item = {}, this.initializeExposedProperties();
  }
}
const at = "__NATIVE_FILE__", ct = "__NATIVE_URL__", ut = "__NATIVE_TEXT__", lt = "__NATIVE_HTML__", Ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: at,
  HTML: lt,
  TEXT: ut,
  URL: ct
}, Symbol.toStringTag, { value: "Module" }));
function de(t, e, r) {
  const n = e.reduce(
    (i, o) => i || t.getData(o),
    ""
  );
  return n ?? r;
}
const ve = {
  [at]: {
    exposeProperties: {
      files: (t) => Array.prototype.slice.call(t.files),
      items: (t) => t.items,
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Files"
    ]
  },
  [lt]: {
    exposeProperties: {
      html: (t, e) => de(t, e, ""),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [ct]: {
    exposeProperties: {
      urls: (t, e) => de(t, e, "").split(`
`),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [ut]: {
    exposeProperties: {
      text: (t, e) => de(t, e, ""),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};
function jn(t, e) {
  const r = ve[t];
  if (!r)
    throw new Error(`native type ${t} has no configuration`);
  const n = new _n(r);
  return n.loadDataTransfer(e), n;
}
function fe(t) {
  if (!t)
    return null;
  const e = Array.prototype.slice.call(t.types || []);
  return Object.keys(ve).filter((r) => {
    const n = ve[r];
    return n?.matchesTypes ? n.matchesTypes.some(
      (i) => e.indexOf(i) > -1
    ) : !1;
  })[0] || null;
}
const kn = st(
  () => /firefox/i.test(navigator.userAgent)
), dt = st(
  () => !!window.safari
);
class We {
  interpolate(e) {
    const { xs: r, ys: n, c1s: i, c2s: o, c3s: a } = this;
    let c = r.length - 1;
    if (e === r[c])
      return n[c];
    let f = 0, h = a.length - 1, y;
    for (; f <= h; ) {
      y = Math.floor(0.5 * (f + h));
      const u = r[y];
      if (u < e)
        f = y + 1;
      else if (u > e)
        h = y - 1;
      else
        return n[y];
    }
    c = Math.max(0, h);
    const m = e - r[c], p = m * m;
    return n[c] + i[c] * m + o[c] * p + a[c] * m * p;
  }
  constructor(e, r) {
    const { length: n } = e, i = [];
    for (let u = 0; u < n; u++)
      i.push(u);
    i.sort(
      (u, d) => e[u] < e[d] ? -1 : 1
    );
    const o = [], a = [];
    let c, f;
    for (let u = 0; u < n - 1; u++)
      c = e[u + 1] - e[u], f = r[u + 1] - r[u], o.push(c), a.push(f / c);
    const h = [
      a[0]
    ];
    for (let u = 0; u < o.length - 1; u++) {
      const d = a[u], g = a[u + 1];
      if (d * g <= 0)
        h.push(0);
      else {
        c = o[u];
        const b = o[u + 1], S = c + b;
        h.push(3 * S / ((S + b) / d + (S + c) / g));
      }
    }
    h.push(a[a.length - 1]);
    const y = [], m = [];
    let p;
    for (let u = 0; u < h.length - 1; u++) {
      p = a[u];
      const d = h[u], g = 1 / o[u], b = d + h[u + 1] - p - p;
      y.push((p - d - b) * g), m.push(b * g * g);
    }
    this.xs = e, this.ys = r, this.c1s = h, this.c2s = y, this.c3s = m;
  }
}
const Mn = 1;
function ft(t) {
  const e = t.nodeType === Mn ? t : t.parentElement;
  if (!e)
    return null;
  const { top: r, left: n } = e.getBoundingClientRect();
  return {
    x: n,
    y: r
  };
}
function W(t) {
  return {
    x: t.clientX,
    y: t.clientY
  };
}
function An(t) {
  var e;
  return t.nodeName === "IMG" && (kn() || !(!((e = document.documentElement) === null || e === void 0) && e.contains(t)));
}
function Ln(t, e, r, n) {
  let i = t ? e.width : r, o = t ? e.height : n;
  return dt() && t && (o /= window.devicePixelRatio, i /= window.devicePixelRatio), {
    dragPreviewWidth: i,
    dragPreviewHeight: o
  };
}
function Hn(t, e, r, n, i) {
  const o = An(e), c = ft(o ? t : e), f = {
    x: r.x - c.x,
    y: r.y - c.y
  }, { offsetWidth: h, offsetHeight: y } = t, { anchorX: m, anchorY: p } = n, { dragPreviewWidth: u, dragPreviewHeight: d } = Ln(o, e, h, y), g = () => {
    let q = new We([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      f.y,
      // Align at the center
      f.y / y * d,
      // Dock to the bottom
      f.y + d - y
    ]).interpolate(p);
    return dt() && o && (q += (window.devicePixelRatio - 1) * d), q;
  }, b = () => new We([
    0,
    0.5,
    1
  ], [
    // Dock to the left
    f.x,
    // Align at the center
    f.x / h * u,
    // Dock to the right
    f.x + u - h
  ]).interpolate(m), { offsetX: S, offsetY: w } = i, N = S === 0 || S, H = w === 0 || w;
  return {
    x: N ? S : b(),
    y: H ? w : g()
  };
}
class Fn {
  get window() {
    if (this.globalContext)
      return this.globalContext;
    if (typeof window < "u")
      return window;
  }
  get document() {
    var e;
    return !((e = this.globalContext) === null || e === void 0) && e.document ? this.globalContext.document : this.window ? this.window.document : void 0;
  }
  get rootElement() {
    var e;
    return ((e = this.optionsArgs) === null || e === void 0 ? void 0 : e.rootElement) || this.window;
  }
  constructor(e, r) {
    this.ownerDocument = null, this.globalContext = e, this.optionsArgs = r;
  }
}
function Un(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function ze(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    }))), n.forEach(function(i) {
      Un(t, i, r[i]);
    });
  }
  return t;
}
class $n {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var e, r;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((e = this.dragStartSourceIds) === null || e === void 0 ? void 0 : e.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((r = this.dragOverTargetIds) === null || r === void 0 ? void 0 : r.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    const e = this.rootElement;
    if (e !== void 0) {
      if (e.__isReactDndBackendSetUp)
        throw new Error("Cannot have two HTML5 backends at the same time.");
      e.__isReactDndBackendSetUp = !0, this.addEventListeners(e);
    }
  }
  teardown() {
    const e = this.rootElement;
    if (e !== void 0 && (e.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
      var r;
      (r = this.window) === null || r === void 0 || r.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(e, r, n) {
    return this.sourcePreviewNodeOptions.set(e, n), this.sourcePreviewNodes.set(e, r), () => {
      this.sourcePreviewNodes.delete(e), this.sourcePreviewNodeOptions.delete(e);
    };
  }
  connectDragSource(e, r, n) {
    this.sourceNodes.set(e, r), this.sourceNodeOptions.set(e, n);
    const i = (a) => this.handleDragStart(a, e), o = (a) => this.handleSelectStart(a);
    return r.setAttribute("draggable", "true"), r.addEventListener("dragstart", i), r.addEventListener("selectstart", o), () => {
      this.sourceNodes.delete(e), this.sourceNodeOptions.delete(e), r.removeEventListener("dragstart", i), r.removeEventListener("selectstart", o), r.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(e, r) {
    const n = (a) => this.handleDragEnter(a, e), i = (a) => this.handleDragOver(a, e), o = (a) => this.handleDrop(a, e);
    return r.addEventListener("dragenter", n), r.addEventListener("dragover", i), r.addEventListener("drop", o), () => {
      r.removeEventListener("dragenter", n), r.removeEventListener("dragover", i), r.removeEventListener("drop", o);
    };
  }
  addEventListeners(e) {
    e.addEventListener && (e.addEventListener("dragstart", this.handleTopDragStart), e.addEventListener("dragstart", this.handleTopDragStartCapture, !0), e.addEventListener("dragend", this.handleTopDragEndCapture, !0), e.addEventListener("dragenter", this.handleTopDragEnter), e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.addEventListener("dragover", this.handleTopDragOver), e.addEventListener("dragover", this.handleTopDragOverCapture, !0), e.addEventListener("drop", this.handleTopDrop), e.addEventListener("drop", this.handleTopDropCapture, !0));
  }
  removeEventListeners(e) {
    e.removeEventListener && (e.removeEventListener("dragstart", this.handleTopDragStart), e.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), e.removeEventListener("dragend", this.handleTopDragEndCapture, !0), e.removeEventListener("dragenter", this.handleTopDragEnter), e.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.removeEventListener("dragover", this.handleTopDragOver), e.removeEventListener("dragover", this.handleTopDragOverCapture, !0), e.removeEventListener("drop", this.handleTopDrop), e.removeEventListener("drop", this.handleTopDropCapture, !0));
  }
  getCurrentSourceNodeOptions() {
    const e = this.monitor.getSourceId(), r = this.sourceNodeOptions.get(e);
    return ze({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, r || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const e = this.monitor.getSourceId(), r = this.sourcePreviewNodeOptions.get(e);
    return ze({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: !1
    }, r || {});
  }
  isDraggingNativeItem() {
    const e = this.monitor.getItemType();
    return Object.keys(Ge).some(
      (r) => Ge[r] === e
    );
  }
  beginDragNativeItem(e, r) {
    this.clearCurrentDragSourceNode(), this.currentNativeSource = jn(e, r), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(e) {
    this.clearCurrentDragSourceNode(), this.currentDragSourceNode = e;
    const r = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var n;
      return (n = this.rootElement) === null || n === void 0 ? void 0 : n.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
    }, r);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      if (this.currentDragSourceNode = null, this.rootElement) {
        var e;
        (e = this.window) === null || e === void 0 || e.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
      }
      return this.mouseMoveTimeoutTimer = null, !0;
    }
    return !1;
  }
  handleDragStart(e, r) {
    e.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(r));
  }
  handleDragEnter(e, r) {
    this.dragEnterTargetIds.unshift(r);
  }
  handleDragOver(e, r) {
    this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(r);
  }
  handleDrop(e, r) {
    this.dropTargetIds.unshift(r);
  }
  constructor(e, r, n) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map(), this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map(), this.sourceNodes = /* @__PURE__ */ new Map(), this.sourceNodeOptions = /* @__PURE__ */ new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (i) => {
      const o = this.sourceNodes.get(i);
      return o && ft(o) || null;
    }, this.endDragNativeItem = () => {
      this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
    }, this.isNodeInDocument = (i) => !!(i && this.document && this.document.body && this.document.body.contains(i)), this.endDragIfSourceWasRemovedFromDOM = () => {
      const i = this.currentDragSourceNode;
      i == null || this.isNodeInDocument(i) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
    }, this.scheduleHover = (i) => {
      this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(() => {
        this.monitor.isDragging() && this.actions.hover(i || [], {
          clientOffset: this.lastClientOffset
        }), this.hoverRafId = null;
      }));
    }, this.cancelHover = () => {
      this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
    }, this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
    }, this.handleTopDragStart = (i) => {
      if (i.defaultPrevented)
        return;
      const { dragStartSourceIds: o } = this;
      this.dragStartSourceIds = null;
      const a = W(i);
      this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(o || [], {
        publishSource: !1,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset: a
      });
      const { dataTransfer: c } = i, f = fe(c);
      if (this.monitor.isDragging()) {
        if (c && typeof c.setDragImage == "function") {
          const y = this.monitor.getSourceId(), m = this.sourceNodes.get(y), p = this.sourcePreviewNodes.get(y) || m;
          if (p) {
            const { anchorX: u, anchorY: d, offsetX: g, offsetY: b } = this.getCurrentSourcePreviewNodeOptions(), N = Hn(m, p, a, {
              anchorX: u,
              anchorY: d
            }, {
              offsetX: g,
              offsetY: b
            });
            c.setDragImage(p, N.x, N.y);
          }
        }
        try {
          c?.setData("application/json", {});
        } catch {
        }
        this.setCurrentDragSourceNode(i.target);
        const { captureDraggingState: h } = this.getCurrentSourcePreviewNodeOptions();
        h ? this.actions.publishDragSource() : setTimeout(
          () => this.actions.publishDragSource(),
          0
        );
      } else if (f)
        this.beginDragNativeItem(f);
      else {
        if (c && !c.types && (i.target && !i.target.hasAttribute || !i.target.hasAttribute("draggable")))
          return;
        i.preventDefault();
      }
    }, this.handleTopDragEndCapture = () => {
      this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleTopDragEnterCapture = (i) => {
      if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
        var o;
        (o = this.currentNativeSource) === null || o === void 0 || o.loadDataTransfer(i.dataTransfer);
      }
      if (!this.enterLeaveCounter.enter(i.target) || this.monitor.isDragging())
        return;
      const { dataTransfer: c } = i, f = fe(c);
      f && this.beginDragNativeItem(f, c);
    }, this.handleTopDragEnter = (i) => {
      const { dragEnterTargetIds: o } = this;
      if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return;
      this.altKeyPressed = i.altKey, o.length > 0 && this.actions.hover(o, {
        clientOffset: W(i)
      }), o.some(
        (c) => this.monitor.canDropOnTarget(c)
      ) && (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = this.getCurrentDropEffect()));
    }, this.handleTopDragOverCapture = (i) => {
      if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
        var o;
        (o = this.currentNativeSource) === null || o === void 0 || o.loadDataTransfer(i.dataTransfer);
      }
    }, this.handleTopDragOver = (i) => {
      const { dragOverTargetIds: o } = this;
      if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
        i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none");
        return;
      }
      this.altKeyPressed = i.altKey, this.lastClientOffset = W(i), this.scheduleHover(o), (o || []).some(
        (c) => this.monitor.canDropOnTarget(c)
      ) ? (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? i.preventDefault() : (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none"));
    }, this.handleTopDragLeaveCapture = (i) => {
      this.isDraggingNativeItem() && i.preventDefault(), this.enterLeaveCounter.leave(i.target) && (this.isDraggingNativeItem() && setTimeout(
        () => this.endDragNativeItem(),
        0
      ), this.cancelHover());
    }, this.handleTopDropCapture = (i) => {
      if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
        var o;
        i.preventDefault(), (o = this.currentNativeSource) === null || o === void 0 || o.loadDataTransfer(i.dataTransfer);
      } else fe(i.dataTransfer) && i.preventDefault();
      this.enterLeaveCounter.reset();
    }, this.handleTopDrop = (i) => {
      const { dropTargetIds: o } = this;
      this.dropTargetIds = [], this.actions.hover(o, {
        clientOffset: W(i)
      }), this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleSelectStart = (i) => {
      const o = i.target;
      typeof o.dragDrop == "function" && (o.tagName === "INPUT" || o.tagName === "SELECT" || o.tagName === "TEXTAREA" || o.isContentEditable || (i.preventDefault(), o.dragDrop()));
    }, this.options = new Fn(r, n), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new Rn(this.isNodeInDocument);
  }
}
const Vn = function(e, r, n) {
  return new $n(e, r, n);
};
function qn(t, e) {
  return /* @__PURE__ */ P.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: e
  }, t), /* @__PURE__ */ P.createElement("path", {
    d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
  }));
}
const Yn = P.forwardRef(qn);
function Gn(t, e) {
  return /* @__PURE__ */ P.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: e
  }, t), /* @__PURE__ */ P.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}
const Wn = P.forwardRef(Gn);
function zn(t, e) {
  return /* @__PURE__ */ P.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: e
  }, t), /* @__PURE__ */ P.createElement("path", {
    fillRule: "evenodd",
    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}
const Bn = P.forwardRef(zn), Xn = ({ input: t, setInput: e, onSubmit: r }) => /* @__PURE__ */ l.jsxs(
  "form",
  {
    onSubmit: r,
    className: "flex items-center gap-3 p-2 rounded-2xl bg-app-surface/60 backdrop-blur-lg border border-app-border/20 shadow-glass",
    children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "submit",
          className: "p-3 rounded-xl bg-app-primary text-white shadow-lg shadow-app-primary/30 hover:bg-app-primary/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
          disabled: !t.trim(),
          children: /* @__PURE__ */ l.jsx(Wn, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "text",
          value: t,
          onChange: (n) => e(n.target.value),
          placeholder: "Add a new idea..",
          className: "w-full bg-transparent text-lg placeholder:text-app-text-muted/70 focus:outline-none px-2"
        }
      )
    ]
  }
), Jn = X.memo(Xn), Zn = ({ todo: t, index: e, onDelete: r, onEdit: n }) => {
  const [{ isDragging: i }, o] = bn(() => ({
    type: "TODO_ITEM",
    item: { id: t.id, index: e },
    collect: (a) => ({
      isDragging: a.isDragging()
    })
  }));
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: o,
      className: `group flex items-center justify-between p-2 rounded-xl bg-app-surface/50 backdrop-blur-lg border border-app-border/20 shadow-sm transition-all duration-300 cursor-move hover:border-app-primary/30 ${i ? "opacity-50" : "opacity-100"}`,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "flex items-center gap-3 pl-1.5", children: /* @__PURE__ */ l.jsx("span", { className: "text-sm font-medium text-app-text", children: t.title }) }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              onClick: () => n(t.id, prompt("Enter new skill name:", t.title)),
              className: "p-1.5 rounded-lg hover:bg-app-primary/10 text-app-text/40 hover:text-app-primary transition-colors",
              children: /* @__PURE__ */ l.jsx(Yn, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              onClick: () => r(t.id),
              className: "p-1.5 rounded-lg hover:bg-red-500/10 text-app-text/40 hover:text-red-500 transition-colors",
              children: /* @__PURE__ */ l.jsx(Bn, { className: "w-4 h-4" })
            }
          )
        ] })
      ]
    }
  );
}, Qn = X.memo(Zn), Kn = ({ title: t, status: e, todos: r, onDrop: n, onDelete: i, onEdit: o, hideHeader: a = !1 }) => {
  const [{ isOver: c }, f] = Cn(() => ({
    accept: "TODO_ITEM",
    drop: (h) => n(h.id, e),
    collect: (h) => ({
      isOver: h.isOver()
    })
  }));
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: f,
      className: `flex flex-col h-full w-full transition-colors duration-200 p-4 ${c ? "bg-app-primary/10" : ""}`,
      children: [
        !a && /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between mb-4 px-2", children: [
          /* @__PURE__ */ l.jsx("h3", { className: "font-black text-sm tracking-wide uppercase flex items-center gap-2 text-app-text", children: t }),
          /* @__PURE__ */ l.jsx("span", { className: "font-mono text-sm text-app-text-muted", children: r.length })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "flex-1 overflow-y-auto space-y-3", children: r.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "h-full flex flex-col items-center justify-center text-app-text-muted/50", children: /* @__PURE__ */ l.jsx("span", { className: "font-bold text-xs  tracking-widest uppercase  opacity-25", children: "Empty Slot" }) }) : r.map((h, y) => /* @__PURE__ */ l.jsx(
          Qn,
          {
            todo: h,
            index: y,
            onDelete: i,
            onEdit: o
          },
          h.id
        )) })
      ]
    }
  );
}, Be = X.memo(Kn), ei = (t) => {
  const [e, r] = V([]), [n, i] = V(!0);
  R(() => {
    t || console.error("SkillTree: No Supabase client provided!");
  }, [t]);
  const o = A(async (m = !0) => {
    if (t) {
      m && i(!0);
      try {
        const { data: p, error: u } = await t.from("todos").select("*").order("created_at", { ascending: !1 });
        if (u) throw u;
        const d = (p || []).map((g) => ({
          ...g,
          status: g.status || (g.completed ? "completed" : "inbox")
        }));
        r(d);
      } catch (p) {
        console.error(p), m && r([]);
      } finally {
        m && i(!1);
      }
    }
  }, [t]);
  R(() => {
    if (!t) return;
    o(!0);
    const m = t.channel("todos-realtime").on(
      "postgres_changes",
      { event: "*", schema: "public", table: "todos" },
      () => o(!1)
      // Silent refresh
    ).subscribe();
    return () => t.removeChannel(m);
  }, [o, t]);
  const a = A(async (m) => {
    if (!t || !m.trim()) return;
    const p = Date.now(), u = { id: p, title: m.trim(), status: "inbox", completed: !1 };
    r((d) => [u, ...d]);
    try {
      const { data: d, error: g } = await t.from("todos").insert([{ title: m.trim(), status: "inbox", completed: !1 }]).select();
      if (g) throw g;
      d && d[0] && r((b) => b.map((S) => S.id === p ? { ...S, ...d[0] } : S));
    } catch (d) {
      console.error("Add failed:", d), r((g) => g.filter((b) => b.id !== p));
    }
  }, [t]), c = A(async (m) => {
    if (!t) return;
    const p = [...e];
    r((u) => u.filter((d) => d.id !== m));
    try {
      await t.from("todos").delete().eq("id", m);
    } catch (u) {
      console.error("Delete failed:", u), r(p);
    }
  }, [e, t]), f = A(async (m, p) => {
    if (!t || !p || !p.trim()) return;
    const u = [...e];
    r((d) => d.map((g) => g.id === m ? { ...g, title: p } : g));
    try {
      await t.from("todos").update({ title: p }).eq("id", m);
    } catch (d) {
      console.error("Edit failed:", d), r(u);
    }
  }, [e, t]), h = A(async (m, p) => {
    if (!t) return;
    const u = [...e];
    r((d) => d.map((g) => g.id === m ? { ...g, status: p } : g));
    try {
      await t.from("todos").update({ status: p }).eq("id", m);
    } catch (d) {
      console.error("Move failed:", d), r(u);
    }
  }, [e, t]), y = x(() => {
    const m = e.length, p = e.filter((d) => d.status === "inbox" || !d.status).length, u = m - p;
    return { total: m, inbox: p, stacked: u };
  }, [e]);
  return {
    skills: e,
    isLoading: n,
    stats: y,
    addSkill: a,
    deleteSkill: c,
    editSkill: f,
    moveSkill: h
  };
}, ti = [
  { id: "web", title: "WEB" },
  { id: "ai", title: "AI" },
  { id: "video", title: "VIDEO" },
  { id: "3d", title: "3D" },
  { id: "ppt", title: "PPT" },
  { id: "tools", title: "TOOLS" },
  { id: "design", title: "DESIGN" },
  { id: "misc", title: "MISC" }
], z = {
  light: "light",
  dark: "dark"
}, ri = () => {
  const [t, e] = V(z.light);
  return R(() => {
    document.documentElement.setAttribute("data-theme", t);
  }, [t]), { theme: t, toggleTheme: () => {
    e((n) => n === z.light ? z.dark : z.light);
  } };
};
function ii({ supabaseClient: t }) {
  const [e, r] = V(""), { theme: n, toggleTheme: i } = ri(), {
    skills: o,
    isLoading: a,
    stats: c,
    addSkill: f,
    deleteSkill: h,
    editSkill: y,
    moveSkill: m
  } = ei(t), p = (d) => {
    d.preventDefault(), f(e), r("");
  }, u = o.filter((d) => d.status === "inbox" || !d.status);
  return a ? /* @__PURE__ */ l.jsx("div", { className: "min-h-screen w-full bg-app-bg flex items-center justify-center", children: /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
    /* @__PURE__ */ l.jsx("div", { className: "w-12 h-12 border-4 border-app-primary/30 border-t-app-primary rounded-full animate-spin" }),
    /* @__PURE__ */ l.jsx("p", { className: "text-app-text/60 font-medium animate-pulse", children: "Loading SkillTree..." })
  ] }) }) : /* @__PURE__ */ l.jsx(Br, { backend: Vn, children: /* @__PURE__ */ l.jsxs("div", { className: "min-h-screen lg:h-screen w-full bg-app-bg font-sans text-app-text flex flex-col p-4 sm:p-6 gap-4", children: [
    /* @__PURE__ */ l.jsxs("header", { className: "flex-shrink-0 h-14 rounded-2xl bg-app-surface/50 backdrop-blur-lg border border-app-border/20 shadow-glass flex items-center px-6 justify-between z-10", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ l.jsx("div", { className: "w-8 h-8 bg-app-primary flex items-center justify-center rounded-lg shadow-lg shadow-app-primary/20", children: /* @__PURE__ */ l.jsx("span", { className: "text-white font-bold text-xl", children: "S" }) }),
        /* @__PURE__ */ l.jsx("span", { className: "text-lg font-bold tracking-tight bg-gradient-to-r from-app-text to-app-text/70 bg-clip-text text-transparent", children: "SkillTree" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "hidden md:flex items-center gap-6 text-sm font-medium text-app-text/60", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l.jsx("span", { className: "w-2 h-2 rounded-full bg-app-primary shadow-[0_0_8px_rgba(var(--color-primary),0.5)]" }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Active: ",
              c.stacked
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l.jsx("span", { className: "w-2 h-2 rounded-full border border-app-primary/50" }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Pool: ",
              c.inbox
            ] })
          ] })
        ] }),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            onClick: i,
            className: "p-1.5 rounded-lg bg-app-surface/50 border border-app-border/20 text-app-text/70 hover:text-app-primary hover:bg-app-primary/10 transition-all duration-300 active:scale-95",
            children: n === "light" ? /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ l.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" }) }) : /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ l.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" }) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("main", { className: "flex-1 flex flex-col lg:flex-row gap-4 overflow-hidden", children: [
      /* @__PURE__ */ l.jsxs("section", { className: "w-full lg:w-1/4 flex flex-col bg-app-surface/50 backdrop-blur-lg border border-app-border/20 shadow-glass rounded-2xl min-w-[280px]", children: [
        /* @__PURE__ */ l.jsx("div", { className: "p-4 border-b border-app-border/10", children: /* @__PURE__ */ l.jsx("h2", { className: "text-base font-bold text-app-text/80 tracking-wide uppercase text-xs", children: "Skill Pool" }) }),
        /* @__PURE__ */ l.jsx("div", { className: "p-4", children: /* @__PURE__ */ l.jsx(Jn, { input: e, setInput: r, onSubmit: p }) }),
        /* @__PURE__ */ l.jsx("div", { className: "flex-1 overflow-y-auto space-y-3", children: /* @__PURE__ */ l.jsx(
          Be,
          {
            title: "UNASSIGNED",
            status: "inbox",
            todos: u,
            onDrop: m,
            onDelete: h,
            onEdit: y,
            hideHeader: !0
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx("section", { className: "w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-px bg-app-border/10 rounded-2xl overflow-hidden shadow-glass", children: ti.map((d) => /* @__PURE__ */ l.jsx("div", { className: "bg-app-surface/40 backdrop-blur-lg", children: /* @__PURE__ */ l.jsx(
        Be,
        {
          title: d.title,
          status: d.id,
          todos: o.filter((g) => g.status === d.id),
          onDrop: m,
          onDelete: h,
          onEdit: y
        }
      ) }, d.id)) })
    ] })
  ] }) });
}
export {
  ti as SKILL_ZONES,
  ii as SkillTree,
  z as THEME_CONFIG,
  ei as useSkills,
  ri as useTheme
};
