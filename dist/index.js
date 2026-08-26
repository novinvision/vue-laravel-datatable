var Hl = Object.defineProperty;
var ql = (e, t, n) => t in e ? Hl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var re = (e, t, n) => ql(e, typeof t != "symbol" ? t + "" : t, n);
import { ref as Pe, shallowRef as Fl, defineComponent as Lt, markRaw as Di, h as Qe, computed as pe, onMounted as lr, onUnmounted as vn, Fragment as or, watch as Ut, onBeforeUnmount as mn, provide as Bl, nextTick as jl, reactive as lo, createElementBlock as Mt, openBlock as Nt, createElementVNode as ct, renderList as co, toDisplayString as uo, getCurrentInstance as fo, setBlockTracking as Ni, mergeProps as Il, renderSlot as Ml, render as $l, unref as ho, onBeforeMount as Ul, createBlock as Wl, createCommentVNode as _i, normalizeClass as Un, createVNode as Vl } from "vue";
const Ri = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || /* @__PURE__ */ function() {
  return this;
}();
function Kl(e, t, { signal: n, edges: i } = {}) {
  let a, f = null;
  const u = i != null && i.includes("leading"), v = i == null || i.includes("trailing"), m = () => {
    f !== null && (e.apply(a, f), a = void 0, f = null);
  }, w = () => {
    v && m(), N();
  };
  let y = null;
  const x = () => {
    y != null && clearTimeout(y), y = setTimeout(() => {
      y = null, w();
    }, t);
  }, A = () => {
    y !== null && (clearTimeout(y), y = null);
  }, N = () => {
    A(), a = void 0, f = null;
  }, F = () => {
    m();
  }, _ = function(...X) {
    if (n != null && n.aborted) return;
    a = this, f = X;
    const k = y == null;
    x(), u && k && m();
  };
  return _.schedule = x, _.cancel = N, _.flush = F, n == null || n.addEventListener("abort", N, { once: !0 }), _;
}
function po() {
}
function xs(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function Ss(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Xl(e) {
  if (xs(e)) return e;
  if (Array.isArray(e) || Ss(e) || e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
  const t = Object.getPrototypeOf(e);
  if (t == null) return Object.assign(Object.create(t), e);
  const n = t.constructor;
  if (e instanceof Date || e instanceof Map || e instanceof Set) return new n(e);
  if (e instanceof RegExp) {
    const i = new n(e);
    return i.lastIndex = e.lastIndex, i;
  }
  if (e instanceof DataView) return new n(e.buffer.slice(0));
  if (e instanceof Error) {
    let i;
    return e instanceof AggregateError ? i = new n(e.errors, e.message, { cause: e.cause }) : i = new n(e.message, { cause: e.cause }), i.stack = e.stack, Object.assign(i, e), i;
  }
  return typeof File < "u" && e instanceof File ? new n([e], e.name, {
    type: e.type,
    lastModified: e.lastModified
  }) : typeof e == "object" ? Object.assign(Object.create(t), e) : e;
}
function tn(e) {
  return typeof Ri.Buffer < "u" && Ri.Buffer.isBuffer(e);
}
function rn(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function Tr(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const go = "[object RegExp]", Cs = "[object String]", Ts = "[object Number]", Es = "[object Boolean]", vo = "[object Arguments]", mo = "[object Symbol]", yo = "[object Date]", bo = "[object Map]", wo = "[object Set]", Po = "[object Array]", zl = "[object Function]", xo = "[object ArrayBuffer]", zr = "[object Object]", Gl = "[object Error]", So = "[object DataView]", Co = "[object Uint8Array]", To = "[object Uint8ClampedArray]", Eo = "[object Uint16Array]", Ao = "[object Uint32Array]", Ql = "[object BigUint64Array]", Oo = "[object Int8Array]", ko = "[object Int16Array]", Do = "[object Int32Array]", Jl = "[object BigInt64Array]", No = "[object Float32Array]", _o = "[object Float64Array]";
function Yl(e, t) {
  return $t(e, void 0, e, /* @__PURE__ */ new Map(), t);
}
function $t(e, t, n, i = /* @__PURE__ */ new Map(), a = void 0) {
  const f = a == null ? void 0 : a(e, t, n, i);
  if (f !== void 0) return f;
  if (xs(e)) return e;
  if (i.has(e)) return i.get(e);
  if (Array.isArray(e)) {
    const u = new Array(e.length);
    i.set(e, u);
    for (let v = 0; v < e.length; v++) u[v] = $t(e[v], v, n, i, a);
    return Object.hasOwn(e, "index") && (u.index = e.index), Object.hasOwn(e, "input") && (u.input = e.input), u;
  }
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof RegExp) {
    const u = new RegExp(e.source, e.flags);
    return u.lastIndex = e.lastIndex, u;
  }
  if (e instanceof Map) {
    const u = /* @__PURE__ */ new Map();
    i.set(e, u);
    for (const [v, m] of e) u.set(v, $t(m, v, n, i, a));
    return u;
  }
  if (e instanceof Set) {
    const u = /* @__PURE__ */ new Set();
    i.set(e, u);
    for (const v of e) u.add($t(v, void 0, n, i, a));
    return u;
  }
  if (tn(e)) return e.subarray();
  if (Ss(e)) {
    const u = new (Object.getPrototypeOf(e)).constructor(e.length);
    i.set(e, u);
    for (let v = 0; v < e.length; v++) u[v] = $t(e[v], v, n, i, a);
    return u;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
  if (e instanceof DataView) {
    const u = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return i.set(e, u), lt(u, e, n, i, a), u;
  }
  if (typeof File < "u" && e instanceof File) {
    const u = new File([e], e.name, { type: e.type });
    return i.set(e, u), lt(u, e, n, i, a), u;
  }
  if (typeof Blob < "u" && e instanceof Blob) {
    const u = new Blob([e], { type: e.type });
    return i.set(e, u), lt(u, e, n, i, a), u;
  }
  if (e instanceof Error) {
    const u = structuredClone(e);
    return i.set(e, u), u.message = e.message, u.name = e.name, u.stack = e.stack, u.cause = e.cause, u.constructor = e.constructor, lt(u, e, n, i, a), u;
  }
  if (e instanceof Boolean) {
    const u = new Boolean(e.valueOf());
    return i.set(e, u), lt(u, e, n, i, a), u;
  }
  if (e instanceof Number) {
    const u = new Number(e.valueOf());
    return i.set(e, u), lt(u, e, n, i, a), u;
  }
  if (e instanceof String) {
    const u = new String(e.valueOf());
    return i.set(e, u), lt(u, e, n, i, a), u;
  }
  if (typeof e == "object" && Zl(e)) {
    const u = Object.create(Object.getPrototypeOf(e));
    return i.set(e, u), lt(u, e, n, i, a), u;
  }
  return e;
}
function lt(e, t, n = e, i, a) {
  const f = [...Object.keys(t), ...rn(t)];
  for (let u = 0; u < f.length; u++) {
    const v = f[u], m = Object.getOwnPropertyDescriptor(e, v);
    (m == null || m.writable) && (e[v] = $t(t[v], v, n, i, a));
  }
}
function Zl(e) {
  switch (Tr(e)) {
    case vo:
    case Po:
    case xo:
    case So:
    case Es:
    case yo:
    case No:
    case _o:
    case Oo:
    case ko:
    case Do:
    case bo:
    case Ts:
    case zr:
    case go:
    case wo:
    case Cs:
    case mo:
    case Co:
    case To:
    case Eo:
    case Ao:
      return !0;
    default:
      return !1;
  }
}
function Ae(e) {
  return $t(e, void 0, e, /* @__PURE__ */ new Map(), void 0);
}
function Li(e) {
  if (!e || typeof e != "object") return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(e) === "[object Object]" : !1;
}
function nn(e) {
  return e === "__proto__";
}
function Wn(e) {
  var n;
  if (typeof e != "object" || e == null) return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  if (Object.prototype.toString.call(e) !== "[object Object]") {
    const i = e[Symbol.toStringTag];
    return i == null || !((n = Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)) != null && n.writable) ? !1 : e.toString() === `[object ${i}]`;
  }
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Ro(e, t) {
  return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function ec(e, t, n) {
  return wr(e, t, void 0, void 0, void 0, void 0, n);
}
function wr(e, t, n, i, a, f, u) {
  const v = u(e, t, n, i, a, f);
  if (v !== void 0) return v;
  if (typeof e == typeof t) switch (typeof e) {
    case "bigint":
    case "string":
    case "boolean":
    case "symbol":
    case "undefined":
      return e === t;
    case "number":
      return e === t || Object.is(e, t);
    case "function":
      return e === t;
    case "object":
      return xr(e, t, f, u);
  }
  return xr(e, t, f, u);
}
function xr(e, t, n, i) {
  if (Object.is(e, t)) return !0;
  let a = Tr(e), f = Tr(t);
  if (a === "[object Arguments]" && (a = zr), f === "[object Arguments]" && (f = zr), a !== f) return !1;
  switch (a) {
    case Cs:
      return e.toString() === t.toString();
    case Ts:
      return Ro(e.valueOf(), t.valueOf());
    case Es:
    case yo:
    case mo:
      return Object.is(e.valueOf(), t.valueOf());
    case go:
      return e.source === t.source && e.flags === t.flags;
    case zl:
      return e === t;
  }
  n = n ?? /* @__PURE__ */ new Map();
  const u = n.get(e), v = n.get(t);
  if (u != null && v != null) return u === t;
  n.set(e, t), n.set(t, e);
  try {
    switch (a) {
      case bo:
        if (e.size !== t.size) return !1;
        for (const [m, w] of e.entries()) if (!t.has(m) || !wr(w, t.get(m), m, e, t, n, i)) return !1;
        return !0;
      case wo: {
        if (e.size !== t.size) return !1;
        const m = Array.from(e.values()), w = Array.from(t.values());
        for (let y = 0; y < m.length; y++) {
          const x = m[y], A = w.findIndex((N) => wr(x, N, void 0, e, t, n, i));
          if (A === -1) return !1;
          w.splice(A, 1);
        }
        return !0;
      }
      case Po:
      case Co:
      case To:
      case Eo:
      case Ao:
      case Ql:
      case Oo:
      case ko:
      case Do:
      case Jl:
      case No:
      case _o:
        if (tn(e) !== tn(t) || e.length !== t.length) return !1;
        for (let m = 0; m < e.length; m++) if (!wr(e[m], t[m], m, e, t, n, i)) return !1;
        return !0;
      case xo:
        return e.byteLength !== t.byteLength ? !1 : xr(new Uint8Array(e), new Uint8Array(t), n, i);
      case So:
        return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : xr(new Uint8Array(e), new Uint8Array(t), n, i);
      case Gl:
        return e.name === t.name && e.message === t.message;
      case zr: {
        if (!(xr(e.constructor, t.constructor, n, i) || Li(e) && Li(t))) return !1;
        const m = [...Object.keys(e), ...rn(e)], w = [...Object.keys(t), ...rn(t)];
        if (m.length !== w.length) return !1;
        for (let y = 0; y < m.length; y++) {
          const x = m[y], A = e[x];
          if (!Object.hasOwn(t, x)) return !1;
          const N = t[x];
          if (!wr(A, N, x, e, t, n, i)) return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    n.delete(e), n.delete(t);
  }
}
function ft(e, t) {
  return ec(e, t, po);
}
function tc(e) {
  return Number.isSafeInteger(e) && e >= 0;
}
const rc = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function nc(e) {
  return e.replace(/[&<>"']/g, (t) => rc[t]);
}
function sc(e) {
  return e != null && typeof e != "function" && tc(e.length);
}
function Lo(e) {
  return e == null ? "" : Ho(e);
}
function Ho(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return e.map(Ho).join(",");
  const t = String(e);
  return t === "0" && Object.is(Number(e), -0) ? "-0" : t;
}
function As(e) {
  var t;
  return typeof e == "string" || typeof e == "symbol" ? e : Object.is((t = e == null ? void 0 : e.valueOf) == null ? void 0 : t.call(e), -0) ? "-0" : String(e);
}
function yn(e) {
  if (Array.isArray(e)) return e.map(As);
  if (typeof e == "symbol") return [e];
  e = Lo(e);
  const t = [], n = e.length;
  if (n === 0) return t;
  let i = 0, a = "", f = "", u = !1, v = !1;
  const m = /^-?\d+(?:\.\d+)?$/;
  for (e.charCodeAt(0) === 46 && t.push(""); i < n; ) {
    const w = e[i];
    if (f) w === "\\" && i + 1 < n ? (i++, a += e[i]) : w === f ? f = "" : a += w;
    else if (u) if (w === '"' || w === "'")
      f = w, v = !0;
    else if (w === "]") {
      if (u = !1, !v && a.includes(".") && !m.test(a)) {
        const y = a.split(".");
        for (let x = 0; x < y.length; x++) y[x] !== "" && t.push(y[x]);
      } else t.push(a);
      a = "";
    } else a += w;
    else if (w === "[")
      u = !0, v = !1, a && (t.push(a), a = "");
    else if (w === ".") {
      a && (t.push(a), a = "");
      const y = e[i + 1];
      (y === void 0 || y === ".") && t.push("");
    } else a += w;
    i++;
  }
  return a && t.push(a), t;
}
const ic = /\.|(\[(?:[^[\]]*|(["'])(?:(?!\2)[^\\]|\\.)*?\2)\])/;
function qo(e) {
  switch (typeof e) {
    case "number":
    case "symbol":
      return !1;
    case "string":
      return e === "" || e.startsWith(".") || e.endsWith(".") ? !1 : ic.test(e);
    default:
      return !1;
  }
}
function Se(e, t, n) {
  if (e == null) return n;
  switch (typeof t) {
    case "string": {
      if (nn(t)) return n;
      const i = e[t];
      return i === void 0 ? qo(t) && !Object.hasOwn(e, t) ? Se(e, yn(t), n) : n : i;
    }
    case "number":
    case "symbol": {
      typeof t == "number" && (t = As(t));
      const i = e[t];
      return i === void 0 ? n : i;
    }
    default: {
      if (Array.isArray(t)) return oc(e, t, n);
      if (Object.is(t == null ? void 0 : t.valueOf(), -0) ? t = "-0" : t = String(t), nn(t)) return n;
      const i = e[t];
      return i === void 0 ? n : i;
    }
  }
}
function oc(e, t, n) {
  if (t.length === 0) return n;
  let i = e;
  for (let a = 0; a < t.length; a++) {
    if (i == null || nn(t[a])) return n;
    i = i[t[a]];
  }
  return i === void 0 ? n : i;
}
function Hi(e) {
  return e !== null && (typeof e == "object" || typeof e == "function");
}
function ac(e, t) {
  return Yl(e, (n, i, a, f) => {
    if (typeof e == "object") {
      if (Tr(e) === "[object Object]" && typeof e.constructor != "function") {
        const u = {};
        return f.set(e, u), lt(u, e, a, f), u;
      }
      switch (Object.prototype.toString.call(e)) {
        case Ts:
        case Cs:
        case Es: {
          const u = new e.constructor(e == null ? void 0 : e.valueOf());
          return lt(u, e), u;
        }
        case vo: {
          const u = {};
          return lt(u, e), u.length = e.length, u[Symbol.iterator] = e[Symbol.iterator], u;
        }
        default:
          return;
      }
    }
  });
}
function qi(e) {
  return ac(e);
}
function as(e) {
  return e !== null && typeof e == "object" && Tr(e) === "[object Arguments]";
}
const lc = /^(?:0|[1-9]\d*)$/;
function Fo(e, t = Number.MAX_SAFE_INTEGER) {
  switch (typeof e) {
    case "number":
      return Number.isInteger(e) && e >= 0 && e < t;
    case "symbol":
      return !1;
    case "string":
      return lc.test(e);
  }
}
function Bo(e, t) {
  let n;
  if (Array.isArray(t) ? n = t : typeof t == "string" && qo(t) && !(t in Object(e)) ? n = yn(t) : n = [t], n.length === 0) return !1;
  let i = e;
  for (let a = 0; a < n.length; a++) {
    const f = n[a];
    if ((i == null || !Object.hasOwn(i, f)) && !((Array.isArray(i) || as(i)) && Fo(f) && f < i.length))
      return !1;
    i = i[f];
  }
  return !0;
}
function ls(e) {
  return typeof e == "object" && e !== null;
}
function cc(e) {
  return ls(e) && sc(e);
}
function uc(e) {
  return typeof e == "symbol" || e instanceof Symbol;
}
const fc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, dc = /^\w*$/;
function hc(e, t) {
  return Array.isArray(e) ? !1 : typeof e == "number" || typeof e == "boolean" || e == null || uc(e) ? !0 : typeof e == "string" && (dc.test(e) || !fc.test(e)) || t != null && Object.hasOwn(t, e);
}
function Vn(e) {
  return Ss(e);
}
const pc = (e, t, n) => {
  const i = e[t];
  (!(Object.hasOwn(e, t) && Ro(i, n)) || n === void 0 && !(t in e)) && (e[t] = n);
};
function gc(e) {
  return e === "__proto__" || e === "constructor" || e === "prototype";
}
function vc(e, t, n, i) {
  if (e == null && !Hi(e)) return e;
  let a;
  hc(t, e) ? a = [t] : Array.isArray(t) ? a = t : a = yn(t);
  const f = n(Se(e, a));
  let u = e;
  for (let v = 0; v < a.length && u != null; v++) {
    const m = As(a[v]);
    if (gc(m)) return e;
    let w;
    if (v === a.length - 1) w = f;
    else {
      const y = u[m], x = i == null ? void 0 : i(y, m, e);
      w = x !== void 0 ? x : Hi(y) ? y : Fo(a[v + 1]) ? [] : {};
    }
    pc(u, m, w), u = u[m];
  }
  return e;
}
function Je(e, t, n) {
  return vc(e, t, () => n, () => {
  });
}
function mc(e, t = 0, n = {}) {
  typeof n != "object" && (n = {});
  const { leading: i = !1, trailing: a = !0, maxWait: f } = n, u = Array(2);
  i && (u[0] = "leading"), a && (u[1] = "trailing");
  let v, m = null;
  const w = Kl(function(...A) {
    v = e.apply(this, A), m = null;
  }, t, { edges: u }), y = function(...A) {
    return f != null && (m === null && (m = Date.now()), Date.now() - m >= f) ? (v = e.apply(this, A), m = Date.now(), w.cancel(), w.schedule(), v) : (w.apply(this, A), v);
  }, x = () => (w.flush(), v);
  return y.cancel = w.cancel, y.flush = x, y;
}
function yc(e, ...t) {
  const n = t.slice(0, -1), i = t[t.length - 1];
  let a = e;
  for (let f = 0; f < n.length; f++) {
    const u = n[f];
    a = Gr(a, u, i, /* @__PURE__ */ new Map());
  }
  return a;
}
function Gr(e, t, n, i) {
  if (xs(e) && (e = Object(e)), t == null || typeof t != "object") return e;
  if (i.has(t)) return Xl(i.get(t));
  if (i.set(t, e), Array.isArray(t)) {
    t = t.slice();
    for (let f = 0; f < t.length; f++) t[f] = t[f] ?? void 0;
  }
  const a = [...Object.keys(t), ...rn(t)];
  for (let f = 0; f < a.length; f++) {
    const u = a[f];
    if (nn(u)) continue;
    let v = t[u], m = e[u];
    if (as(v) && (v = { ...v }), as(m) && (m = { ...m }), tn(v) && (v = qi(v)), Array.isArray(v)) if (Array.isArray(m)) {
      const y = [], x = Reflect.ownKeys(m);
      for (let A = 0; A < x.length; A++) {
        const N = x[A];
        y[N] = m[N];
      }
      m = y;
    } else if (cc(m)) {
      const y = [];
      for (let x = 0; x < m.length; x++) y[x] = m[x];
      m = y;
    } else m = [];
    const w = n(m, v, u, e, t, i);
    w !== void 0 ? e[u] = w : Array.isArray(v) || ls(m) && ls(v) && (Wn(m) || Wn(v) || Vn(m) || Vn(v)) ? e[u] = Gr(m, v, n, i) : m == null && Wn(v) ? e[u] = Gr({}, v, n, i) : m == null && Vn(v) ? e[u] = qi(v) : (m === void 0 || v !== void 0) && (e[u] = v);
  }
  return e;
}
function sn(e, ...t) {
  return yc(e, ...t, po);
}
function jo(e) {
  return nc(Lo(e));
}
const Os = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, bn = (e) => e instanceof FormData ? !0 : Os(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => bn(t));
let on = class extends Error {
  constructor(n) {
    super(`HTTP error ${n.status}`);
    re(this, "response");
    this.name = "HttpResponseError", this.response = n;
  }
}, Io = class extends Error {
  constructor(t = "Request was cancelled") {
    super(t), this.name = "HttpCancelledError";
  }
}, bc = class extends Error {
  constructor(t = "Network error") {
    super(t), this.name = "HttpNetworkError";
  }
};
function wc(e) {
  const t = new URLSearchParams();
  return Object.entries(e).forEach(([n, i]) => {
    i != null && (Array.isArray(i) ? i.forEach((a) => t.append(`${n}[]`, String(a))) : typeof i == "object" ? t.append(n, JSON.stringify(i)) : t.append(n, String(i)));
  }), t.toString();
}
function Pc(e, t, n) {
  if (t && !e.startsWith("http://") && !e.startsWith("https://") && (e = t.replace(/\/$/, "") + "/" + e.replace(/^\//, "")), n && Object.keys(n).length > 0) {
    const i = wc(n);
    i && (e += (e.includes("?") ? "&" : "?") + i);
  }
  return e;
}
function xc() {
  var e, t, n, i;
  return typeof window > "u" ? null : ((i = (n = (t = (e = window.axios) == null ? void 0 : e.defaults) == null ? void 0 : t.headers) == null ? void 0 : n.common) == null ? void 0 : i["X-Requested-With"]) ?? null;
}
function Mo(e, t = new FormData(), n = null) {
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) && $o(t, n ? `${n}[${i}]` : i, e[i]);
  return t;
}
function $o(e, t, n) {
  if (Array.isArray(n))
    return n.forEach((i, a) => $o(e, `${t}[${a}]`, i));
  if (n instanceof Date)
    return e.append(t, n.toISOString());
  if (typeof File < "u" && n instanceof File)
    return e.append(t, n, n.name);
  if (n instanceof Blob)
    return e.append(t, n);
  if (typeof n == "boolean")
    return e.append(t, n ? "1" : "0");
  if (typeof n == "string")
    return e.append(t, n);
  if (typeof n == "number")
    return e.append(t, `${n}`);
  if (n == null)
    return e.append(t, "");
  Mo(n, e, t);
}
function Sc(e, t) {
  var n;
  if (e != null)
    return e instanceof FormData ? e : typeof e == "object" && bn(e) ? Mo(e) : typeof e == "object" || (n = t["Content-Type"]) != null && n.includes("application/json") ? JSON.stringify(e) : String(e);
}
function Cc(e) {
  const t = {};
  return e.forEach((n, i) => {
    t[i.toLowerCase()] = n;
  }), t;
}
function Tc(e = {}) {
  let t = e.xsrfCookieName ?? "XSRF-TOKEN", n = e.xsrfHeaderName ?? "X-XSRF-TOKEN";
  function i() {
    if (typeof document > "u")
      return null;
    const a = document.cookie.match(new RegExp("(^|;\\s*)" + t + "=([^;]*)"));
    return a ? decodeURIComponent(a[2]) : null;
  }
  return {
    setXsrfCookieName(a) {
      t = a;
    },
    setXsrfHeaderName(a) {
      n = a;
    },
    async request(a) {
      const f = Pc(a.url, a.baseURL, a.params), u = a.method.toUpperCase(), v = {}, m = xc();
      m && (v["X-Requested-With"] = m), a.data !== void 0 && !["GET", "DELETE"].includes(u) && !(a.data instanceof FormData) && !bn(a.data) && (v["Content-Type"] = "application/json"), a.headers && Object.entries(a.headers).forEach(([F, _]) => {
        _ !== void 0 && (v[F] = String(_));
      });
      const w = i();
      w && !["GET", "HEAD", "OPTIONS"].includes(u) && (v[n] = w);
      let y = a.signal, x;
      const A = a.timeout ?? 3e4;
      if (A > 0 && !y) {
        const F = new AbortController();
        y = F.signal, x = setTimeout(() => F.abort(), A);
      }
      const N = ["GET", "DELETE"].includes(u) ? void 0 : Sc(a.data, v);
      N instanceof FormData && delete v["Content-Type"];
      try {
        const F = await fetch(f, {
          method: u,
          headers: v,
          body: N,
          signal: y,
          credentials: a.credentials ?? "same-origin"
        });
        x && clearTimeout(x);
        let _;
        const X = F.headers.get("content-type");
        X != null && X.includes("application/json") ? _ = await F.json() : _ = await F.text();
        const k = {
          status: F.status,
          data: _,
          headers: Cc(F.headers)
        };
        if (!F.ok)
          throw new on(k);
        return k;
      } catch (F) {
        throw x && clearTimeout(x), F instanceof on ? F : F instanceof DOMException && F.name === "AbortError" ? new Io() : F instanceof TypeError ? new bc(F.message) : F;
      }
    }
  };
}
const cs = Tc();
let ks = cs, Ds, Uo, Wo = "same-origin", Vo = (e) => `${e.method}:${e.baseURL ?? Ds ?? ""}${e.url}`, Ko = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const an = {}, Ie = {
  get: (e, t = {}, n = {}) => mr(vr("get", e, t, n)),
  post: (e, t = {}, n = {}) => mr(vr("post", e, t, n)),
  patch: (e, t = {}, n = {}) => mr(vr("patch", e, t, n)),
  put: (e, t = {}, n = {}) => mr(vr("put", e, t, n)),
  delete: (e, t = {}, n = {}) => mr(vr("delete", e, t, n)),
  useHttpClient(e) {
    return ks = e, Ie;
  },
  withBaseURL(e) {
    return Ds = e, Ie;
  },
  withTimeout(e) {
    return Uo = e, Ie;
  },
  withCredentials(e) {
    return Wo = typeof e == "string" ? e : e ? "include" : "omit", Ie;
  },
  fingerprintRequestsUsing(e) {
    return Vo = e === null ? () => null : e, Ie;
  },
  determineSuccessUsing(e) {
    return Ko = e, Ie;
  },
  withXsrfCookieName(e) {
    return cs.setXsrfCookieName(e), Ie;
  },
  withXsrfHeaderName(e) {
    return cs.setXsrfHeaderName(e), Ie;
  }
}, vr = (e, t, n, i) => ({
  url: t,
  method: e,
  ...i,
  ...["get", "delete"].includes(e) ? {
    params: sn({}, n, i == null ? void 0 : i.params)
  } : {
    data: sn({}, n, i == null ? void 0 : i.data)
  }
}), mr = (e = {}) => {
  const t = [
    Ec,
    Oc,
    kc
  ].reduce((n, i) => i(n), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), ks.request({
    method: t.method,
    url: t.url,
    baseURL: t.baseURL ?? Ds,
    data: t.data,
    params: t.params,
    headers: t.headers,
    signal: t.signal,
    timeout: t.timeout,
    credentials: Wo
  }).then(async (n) => {
    t.precognitive && Fi(n);
    const i = n.status;
    let a = n;
    return t.precognitive && t.onPrecognitionSuccess && Ko(n) && (a = await Promise.resolve(t.onPrecognitionSuccess(n) ?? a)), t.onSuccess && Ac(i) && (a = await Promise.resolve(t.onSuccess(a) ?? a)), (Bi(t, i) ?? ((u) => u))(a) ?? a;
  }, (n) => {
    if (Dc(n))
      return Promise.reject(n);
    const i = n;
    return t.precognitive && Fi(i.response), (Bi(t, i.response.status) ?? ((f, u) => Promise.reject(u)))(i.response, i);
  }).finally(t.onFinish ?? (() => null)));
}, Ec = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? Uo,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? Vo(e, ks) : e.fingerprint,
    headers: {
      ...e.headers,
      Accept: "application/json",
      "Content-Type": Nc(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, Ac = (e) => e >= 200 && e < 300, Oc = (e) => {
  var t;
  return typeof e.fingerprint != "string" || ((t = an[e.fingerprint]) == null || t.abort(), delete an[e.fingerprint]), e;
}, kc = (e) => typeof e.fingerprint != "string" || e.signal || !e.precognitive ? e : (an[e.fingerprint] = new AbortController(), {
  ...e,
  signal: an[e.fingerprint].signal
}), Fi = (e) => {
  var t;
  if (((t = e.headers) == null ? void 0 : t.precognition) !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, Dc = (e) => {
  var t;
  return !(e instanceof on) || typeof ((t = e.response) == null ? void 0 : t.status) != "number";
}, Bi = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], Nc = (e) => {
  var t, n, i;
  return ((t = e.headers) == null ? void 0 : t["Content-Type"]) ?? ((n = e.headers) == null ? void 0 : n["Content-type"]) ?? ((i = e.headers) == null ? void 0 : i["content-type"]) ?? (bn(e.data) ? "multipart/form-data" : "application/json");
}, _c = (e, t) => {
  if (!e.includes("*"))
    return [e];
  const n = e.split(".");
  let i = [""];
  for (const a of n)
    if (a === "*") {
      const f = [];
      for (const u of i) {
        const v = u ? Se(t, u) : t;
        if (Array.isArray(v))
          for (let m = 0; m < v.length; m++)
            f.push(u ? `${u}.${m}` : String(m));
        else if (v !== null && typeof v == "object")
          for (const m of Object.keys(v))
            f.push(u ? `${u}.${m}` : m);
      }
      i = f;
    } else
      i = i.map((f) => f ? `${f}.${a}` : a);
  return i;
}, Rc = (e, t) => t.includes("*") ? new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, "[^.]+") + "$").test(e) : e === t, ji = (e, t) => Object.fromEntries(Object.entries(e).filter(([n]) => !t.some((i) => Rc(n, i)))), Lc = (e, t = {}) => {
  const n = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let i = !1, a = !1;
  const f = (te) => te !== a ? (a = te, n.validatingChanged) : [];
  let u = [];
  const v = (te) => {
    const S = [...new Set(te)];
    return u.length !== S.length || !S.every((p) => u.includes(p)) ? (u = S, n.validatedChanged) : [];
  }, m = () => u.filter((te) => typeof x[te] > "u");
  let w = [];
  const y = (te) => {
    const S = [...new Set(te)];
    return w.length !== S.length || !S.every((p) => w.includes(p)) ? (w = S, n.touchedChanged) : [];
  };
  let x = {};
  const A = (te) => {
    const S = qc(te);
    return ft(x, S) ? [] : (x = S, n.errorsChanged);
  }, N = (te) => {
    const S = { ...x };
    return delete S[Sr(te)], A(S);
  }, F = () => Object.keys(x).length > 0;
  let _ = 1500;
  const X = (te) => {
    _ = te, l.cancel(), l = Z();
  };
  let k = t, q = null, j = [], I = null;
  const Z = () => mc((te) => {
    e({
      get: (S, p = {}, g = {}) => Ie.get(S, K(p), U(g, te, p)),
      post: (S, p = {}, g = {}) => Ie.post(S, K(p), U(g, te, p)),
      patch: (S, p = {}, g = {}) => Ie.patch(S, K(p), U(g, te, p)),
      put: (S, p = {}, g = {}) => Ie.put(S, K(p), U(g, te, p)),
      delete: (S, p = {}, g = {}) => Ie.delete(S, K(p), U(g, te, p))
    }).catch((S) => {
      var p;
      return S instanceof Io || S instanceof on && ((p = S.response) == null ? void 0 : p.status) === 422 ? null : Promise.reject(S);
    });
  }, _, { leading: !0, trailing: !0 });
  let l = Z();
  const U = (te, S, p = {}) => {
    const g = {
      ...te,
      ...S
    }, P = Array.from(g.only ?? g.validate ?? w);
    return {
      ...S,
      ...sn({}, te, S),
      only: P,
      timeout: g.timeout ?? 5e3,
      onValidationError: (E, O) => ([
        ...v([...u, ...P]),
        ...A(sn(ji({ ...x }, P), E.data.errors))
      ].forEach((H) => H()), g.onValidationError ? g.onValidationError(E, O) : Promise.reject(O)),
      onSuccess: (E) => (v([...u, ...P]).forEach((O) => O()), g.onSuccess ? g.onSuccess(E) : E),
      onPrecognitionSuccess: (E) => ([
        ...v([...u, ...P]),
        ...A(ji({ ...x }, P))
      ].forEach((O) => O()), g.onPrecognitionSuccess ? g.onPrecognitionSuccess(E) : E),
      onBefore: () => {
        const E = w.some((B) => B.includes("*")), O = E ? [...new Set(w.flatMap((B) => _c(B, p)))] : w;
        return g.onBeforeValidation && g.onBeforeValidation({ data: p, touched: O }, { data: k, touched: j }) === !1 || (g.onBefore || (() => !0))() === !1 ? !1 : (E && y(O).forEach((B) => B()), I = w, q = p, !0);
      },
      onStart: () => {
        f(!0).forEach((E) => E()), (g.onStart ?? (() => null))();
      },
      onFinish: () => {
        f(!1).forEach((E) => E()), j = I, k = q, I = q = null, (g.onFinish ?? (() => null))();
      }
    };
  }, ne = (te, S, p) => {
    if (typeof te > "u") {
      const g = Array.from((p == null ? void 0 : p.only) ?? (p == null ? void 0 : p.validate) ?? []);
      y([...w, ...g]).forEach((P) => P()), l(p ?? {});
      return;
    }
    if (Os(S) && !i) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    te = Sr(te), (te.includes("*") || Se(k, te) !== S) && (y([te, ...w]).forEach((g) => g()), l(p ?? {}));
  }, K = (te) => i === !1 ? us(te) : te, V = {
    touched: () => w,
    validate(te, S, p) {
      return typeof te == "object" && !("target" in te) && (p = te, te = S = void 0), ne(te, S, p), V;
    },
    touch(te) {
      const S = Array.isArray(te) ? te : [Sr(te)];
      return y([...w, ...S]).forEach((p) => p()), V;
    },
    validating: () => a,
    valid: m,
    errors: () => x,
    hasErrors: F,
    setErrors(te) {
      return A(te).forEach((S) => S()), V;
    },
    forgetError(te) {
      return N(te).forEach((S) => S()), V;
    },
    defaults(te) {
      return t = te, k = te, V;
    },
    reset(...te) {
      if (te.length === 0)
        y([]).forEach((S) => S());
      else {
        const S = [...w];
        te.forEach((p) => {
          S.includes(p) && S.splice(S.indexOf(p), 1), Je(k, p, Se(t, p));
        }), y(S).forEach((p) => p());
      }
      return V;
    },
    setTimeout(te) {
      return X(te), V;
    },
    on(te, S) {
      return n[te].push(S), V;
    },
    validateFiles() {
      return i = !0, V;
    },
    withoutFileValidation() {
      return i = !1, V;
    }
  };
  return V;
}, Hc = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), qc = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: typeof e[n] == "string" ? [e[n]] : e[n]
}), {}), Sr = (e) => typeof e != "string" ? e.target.name : e, us = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((n) => {
    const i = t[n];
    if (i !== null) {
      if (Os(i)) {
        delete t[n];
        return;
      }
      if (Array.isArray(i)) {
        t[n] = Object.values(us({ ...i }));
        return;
      }
      if (typeof i == "object") {
        t[n] = us(t[n]);
        return;
      }
    }
  }), t;
};
var Fc = class {
  constructor(e) {
    re(this, "config", {});
    re(this, "defaults");
    this.defaults = e;
  }
  extend(e) {
    return e && (this.defaults = { ...this.defaults, ...e }), this;
  }
  replace(e) {
    this.config = e;
  }
  get(e) {
    return Bo(this.config, e) ? Se(this.config, e) : Se(this.defaults, e);
  }
  set(e, t) {
    typeof e == "string" ? Je(this.config, e, t) : Object.entries(e).forEach(([n, i]) => {
      Je(this.config, n, i);
    });
  }
}, Wt = new Fc({
  form: {
    recentlySuccessfulDuration: 2e3,
    forceIndicesArrayFormatInFormData: !0,
    withAllErrors: !1
  },
  prefetch: {
    cacheFor: 3e4,
    hoverDelay: 75
  }
});
function Er(e, t) {
  let n;
  return function(...i) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, i), t);
  };
}
function $e(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Ii = (e) => $e("before", { cancelable: !0, detail: { visit: e } }), Bc = (e, { page: t, visitId: n } = {}) => $e("error", { detail: { errors: e, page: t, visitId: n } }), jc = (e) => $e("networkError", { cancelable: !0, detail: { error: e } }), Ic = (e) => $e("finish", { detail: { visit: e } }), Mi = (e) => $e("httpException", { cancelable: !0, detail: { response: e } }), Mc = (e) => $e("beforeUpdate", { detail: { page: e } }), ln = (e, { cached: t = !1, visitId: n } = {}) => $e("navigate", { detail: { page: e, cached: t, visitId: n } }), $c = (e, { replace: t, visitId: n }) => $e("clientVisit", { detail: { page: e, replace: t, visitId: n } }), Uc = (e) => $e("progress", { detail: { progress: e } }), Wc = (e) => $e("start", { detail: { visit: e } }), Vc = (e, { visitId: t } = {}) => $e("success", { detail: { page: e, visitId: t } }), Kc = (e, t) => $e("prefetched", { detail: { fetchedAt: Date.now(), response: e, visit: t } }), Xc = (e) => $e("prefetching", { detail: { visit: e } }), cn = (e) => $e("flash", { detail: { flash: e } }), zc = (e, t) => $e("location", { cancelable: !0, detail: { url: e, versionChange: t } }), os, ze = (os = class {
  static set(e, t) {
    typeof window < "u" && window.sessionStorage.setItem(e, JSON.stringify(t));
  }
  static get(e) {
    if (typeof window < "u")
      return JSON.parse(window.sessionStorage.getItem(e) || "null");
  }
  static merge(e, t) {
    const n = this.get(e);
    n === null ? this.set(e, t) : this.set(e, { ...n, ...t });
  }
  static remove(e) {
    typeof window < "u" && window.sessionStorage.removeItem(e);
  }
  static removeNested(e, t) {
    const n = this.get(e);
    n !== null && (delete n[t], this.set(e, n));
  }
  static exists(e) {
    try {
      return this.get(e) !== null;
    } catch {
      return !1;
    }
  }
  static clear() {
    typeof window < "u" && window.sessionStorage.clear();
  }
}, re(os, "locationVisitKey", "inertiaLocationVisit"), os), Gc = async (e) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  const t = Xo(), n = await zo(), i = await tu(n);
  if (!i)
    throw new Error("Unable to encrypt history");
  return await Jc(t, i, e);
}, ar = {
  key: "historyKey",
  iv: "historyIv"
}, Qc = async (e) => {
  const t = Xo(), n = await zo();
  if (!n)
    throw new Error("Unable to decrypt history");
  return await Yc(t, n, e);
}, Jc = async (e, t, n) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  const i = new TextEncoder(), a = JSON.stringify(n), f = new Uint8Array(a.length * 3), u = i.encodeInto(a, f);
  return window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: e
    },
    t,
    f.subarray(0, u.written)
  );
}, Yc = async (e, t, n) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  const i = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: e
    },
    t,
    n
  );
  return JSON.parse(new TextDecoder().decode(i));
}, Xo = () => {
  const e = ze.get(ar.iv);
  if (e)
    return new Uint8Array(e);
  const t = window.crypto.getRandomValues(new Uint8Array(12));
  return ze.set(ar.iv, Array.from(t)), t;
}, Zc = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256
  },
  !0,
  ["encrypt", "decrypt"]
), eu = async (e) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  const t = await window.crypto.subtle.exportKey("raw", e);
  ze.set(ar.key, Array.from(new Uint8Array(t)));
}, tu = async (e) => {
  if (e)
    return e;
  const t = await Zc();
  return t ? (await eu(t), t) : null;
}, zo = async () => {
  const e = ze.get(ar.key);
  return e ? await window.crypto.subtle.importKey(
    "raw",
    new Uint8Array(e),
    {
      name: "AES-GCM",
      length: 256
    },
    !0,
    ["encrypt", "decrypt"]
  ) : null;
}, $i = (e) => {
  const t = {};
  for (const n of Object.keys(e))
    e[n] !== void 0 && (t[n] = e[n]);
  return t;
}, Go = (e, t, n) => {
  if (e === t)
    return !0;
  for (const i in e)
    if (!n.includes(i) && e[i] !== t[i] && !ru(e[i], t[i]))
      return !1;
  for (const i in t)
    if (!n.includes(i) && !(i in e))
      return !1;
  return !0;
}, ru = (e, t) => {
  switch (typeof e) {
    case "object":
      return Go(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, nu = (e, t, n) => {
  const i = yn(t);
  if (i.length === 0)
    return e;
  const a = (f, u) => {
    if (u === i.length)
      return n;
    const v = i[u], m = Array.isArray(f) ? [...f] : f && typeof f == "object" ? { ...f } : /^(?:0|[1-9]\d*)$/.test(v) ? [] : {};
    return m[v] = a(f == null ? void 0 : f[v], u + 1), m;
  };
  return a(e, 0);
}, su = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
}, Ui = (e) => {
  if (typeof e == "number")
    return e;
  for (const [t, n] of Object.entries(su))
    if (e.endsWith(t))
      return parseFloat(e) * n;
  return parseInt(e);
}, iu = class {
  constructor() {
    re(this, "cached", []);
    re(this, "inFlightRequests", []);
    re(this, "removalTimers", []);
    re(this, "currentUseId", null);
  }
  add(e, t, { cacheFor: n, cacheTags: i }) {
    if (this.findInFlight(e))
      return Promise.resolve();
    const f = this.findCached(e);
    if (!e.fresh && f && f.staleTimestamp > Date.now())
      return Promise.resolve();
    const [u, v] = this.extractStaleValues(n), m = new Promise((w, y) => {
      t({
        ...e,
        onCancel: () => {
          this.remove(e), e.onCancel(), y();
        },
        onError: (x) => {
          this.remove(e), e.onError(x), y();
        },
        onPrefetching(x) {
          e.onPrefetching(x);
        },
        onPrefetched(x, A) {
          e.onPrefetched(x, A);
        },
        onPrefetchResponse(x) {
          w(x);
        },
        onPrefetchError(x) {
          bt.removeFromInFlight(e), y(x);
        }
      });
    }).then((w) => {
      this.remove(e);
      const y = w.getPageResponse();
      J.mergeOncePropsIntoResponse(y), this.cached.push({
        params: { ...e },
        staleTimestamp: Date.now() + u,
        expiresAt: Date.now() + v,
        response: m,
        singleUse: v === 0,
        timestamp: Date.now(),
        inFlight: !1,
        tags: Array.isArray(i) ? i : [i]
      });
      const x = this.getShortestOncePropTtl(y);
      return this.scheduleForRemoval(
        e,
        x ? Math.min(v, x) : v
      ), this.removeFromInFlight(e), w.handlePrefetch(), w;
    });
    return this.inFlightRequests.push({
      params: { ...e },
      response: m,
      staleTimestamp: null,
      inFlight: !0
    }), m;
  }
  removeAll() {
    this.cached = [], this.removalTimers.forEach((e) => {
      clearTimeout(e.timer);
    }), this.removalTimers = [];
  }
  removeByTags(e) {
    this.cached = this.cached.filter((t) => !t.tags.some((n) => e.includes(n)));
  }
  remove(e) {
    this.cached = this.cached.filter((t) => !this.paramsAreEqual(t.params, e)), this.clearTimer(e);
  }
  removeFromInFlight(e) {
    this.inFlightRequests = this.inFlightRequests.filter((t) => !this.paramsAreEqual(t.params, e));
  }
  extractStaleValues(e) {
    const [t, n] = this.cacheForToStaleAndExpires(e);
    return [Ui(t), Ui(n)];
  }
  cacheForToStaleAndExpires(e) {
    if (!Array.isArray(e))
      return [e, e];
    switch (e.length) {
      case 0:
        return [0, 0];
      case 1:
        return [e[0], e[0]];
      default:
        return [e[0], e[1]];
    }
  }
  clearTimer(e) {
    const t = this.removalTimers.find((n) => this.paramsAreEqual(n.params, e));
    t && (clearTimeout(t.timer), this.removalTimers = this.removalTimers.filter((n) => n !== t));
  }
  scheduleForRemoval(e, t) {
    if (!(typeof window > "u") && (this.clearTimer(e), t > 0)) {
      const n = window.setTimeout(() => this.remove(e), t);
      this.removalTimers.push({
        params: e,
        timer: n
      });
    }
  }
  get(e) {
    return this.findCached(e) || this.findInFlight(e);
  }
  use(e, t) {
    const n = `${t.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    this.currentUseId = n;
    const i = {
      ...t,
      cached: !0
    };
    return e.response.then((a) => {
      if (this.currentUseId === n)
        return a.mergeParams({ ...i, onPrefetched: () => {
        } }), this.removeSingleUseItems(t), a.handle();
    });
  }
  removeSingleUseItems(e) {
    this.cached = this.cached.filter((t) => this.paramsAreEqual(t.params, e) ? !t.singleUse : !0);
  }
  findCached(e) {
    return this.cached.find((t) => this.paramsAreEqual(t.params, e)) || null;
  }
  findInFlight(e) {
    return this.inFlightRequests.find((t) => this.paramsAreEqual(t.params, e)) || null;
  }
  withoutPurposePrefetchHeader(e) {
    const t = Ae(e);
    return t.headers.Purpose === "prefetch" && delete t.headers.Purpose, t;
  }
  paramsAreEqual(e, t) {
    return Go(
      this.withoutPurposePrefetchHeader(e),
      this.withoutPurposePrefetchHeader(t),
      [
        "id",
        "showProgress",
        "replace",
        "prefetch",
        "preserveScroll",
        "preserveState",
        "onBefore",
        "onBeforeUpdate",
        "onStart",
        "onProgress",
        "onFinish",
        "onCancel",
        "onSuccess",
        "onError",
        "onFlash",
        "onPrefetched",
        "onCancelToken",
        "onPrefetching",
        "async",
        "viewTransition",
        "optimistic",
        "component",
        "pageProps",
        "cached"
      ]
    );
  }
  updateCachedOncePropsFromCurrentPage() {
    this.cached.forEach((e) => {
      e.response.then((t) => {
        const n = t.getPageResponse();
        J.mergeOncePropsIntoResponse(n, { force: !0 });
        for (const [u, v] of Object.entries(n.deferredProps ?? {})) {
          const m = v.filter((w) => Se(n.props, w) === void 0);
          m.length > 0 ? n.deferredProps[u] = m : delete n.deferredProps[u];
        }
        const i = this.getShortestOncePropTtl(n);
        if (i === null)
          return;
        const a = e.expiresAt - Date.now(), f = Math.min(a, i);
        f > 0 ? this.scheduleForRemoval(e.params, f) : this.remove(e.params);
      });
    });
  }
  getShortestOncePropTtl(e) {
    const t = Object.values(e.onceProps ?? {}).map((n) => n.expiresAt).filter((n) => !!n);
    return t.length === 0 ? null : Math.min(...t) - Date.now();
  }
}, bt = new iu(), Kn = (e) => {
  if (e.offsetParent === null)
    return !1;
  const t = e.getBoundingClientRect(), n = t.top < window.innerHeight && t.bottom >= 0, i = t.left < window.innerWidth && t.right >= 0;
  return n && i;
}, ou = (e) => {
  const t = (u) => {
    const v = window.getComputedStyle(u);
    return v.overflowY === "scroll" ? !0 : v.overflowY !== "auto" ? !1 : ["visible", "clip"].includes(v.overflowX) ? !0 : i(v.maxHeight, u.style.height) || a(u, "height");
  }, n = (u) => {
    const v = window.getComputedStyle(u);
    return v.overflowX === "scroll" ? !0 : v.overflowX !== "auto" ? !1 : ["visible", "clip"].includes(v.overflowY) ? !0 : i(v.maxWidth, u.style.width) || a(u, "width");
  }, i = (u, v) => !!(u && u !== "none" && u !== "0px" || v && v !== "auto" && v !== "0"), a = (u, v) => {
    const m = u.parentElement;
    if (!m)
      return !1;
    const w = window.getComputedStyle(m);
    if (["flex", "inline-flex"].includes(w.display)) {
      const y = ["column", "column-reverse"].includes(w.flexDirection);
      return v === "height" ? y : !y;
    }
    return ["grid", "inline-grid"].includes(w.display);
  };
  let f = e == null ? void 0 : e.parentElement;
  for (; f; ) {
    const u = t(f) || n(f);
    if (window.getComputedStyle(f).display !== "contents" && u)
      return f;
    f = f.parentElement;
  }
  return null;
}, Qo = (e, t) => {
  if (!t)
    return e.filter((f) => Kn(f));
  const n = e.indexOf(t), i = [], a = [];
  for (let f = n; f >= 0; f--) {
    const u = e[f];
    if (Kn(u))
      i.push(u);
    else
      break;
  }
  for (let f = n + 1; f < e.length; f++) {
    const u = e[f];
    if (Kn(u))
      a.push(u);
    else
      break;
  }
  return [...i.reverse(), ...a];
}, Cr = (e, t = 1) => {
  window.requestAnimationFrame(() => {
    t > 1 ? Cr(e, t - 1) : e();
  });
}, Pr = typeof window > "u", au = !Pr && /Firefox/i.test(window.navigator.userAgent), Ge = class {
  static save() {
    ve.saveScrollPositions(this.getScrollRegions());
  }
  static getScrollRegions() {
    return Array.from(this.regions()).map((e) => ({
      top: e.scrollTop,
      left: e.scrollLeft
    }));
  }
  static regions() {
    return document.querySelectorAll("[scroll-region]");
  }
  static scrollToTop() {
    if (au && getComputedStyle(document.documentElement).scrollBehavior === "smooth")
      return Cr(() => window.scrollTo(0, 0), 2);
    window.scrollTo(0, 0);
  }
  static reset() {
    (Pr ? null : window.location.hash) || this.scrollToTop(), this.regions().forEach((t) => {
      typeof t.scrollTo == "function" ? t.scrollTo(0, 0) : (t.scrollTop = 0, t.scrollLeft = 0);
    }), this.save(), this.scrollToAnchor();
  }
  static scrollToAnchor() {
    const e = Pr ? null : window.location.hash;
    e && setTimeout(() => {
      const t = document.getElementById(e.slice(1));
      t ? t.scrollIntoView() : this.scrollToTop();
    });
  }
  static restore(e) {
    Pr || window.requestAnimationFrame(() => {
      this.restoreDocument(), this.restoreScrollRegions(e);
    });
  }
  static restoreScrollRegions(e) {
    Pr || this.regions().forEach((t, n) => {
      const i = e[n];
      i && (typeof t.scrollTo == "function" ? t.scrollTo(i.left, i.top) : (t.scrollTop = i.top, t.scrollLeft = i.left));
    });
  }
  static restoreDocument() {
    const e = ve.getDocumentScrollPosition();
    window.scrollTo(e.left, e.top);
  }
  static onScroll(e) {
    const t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    ve.saveDocumentScrollPosition({
      top: window.scrollY,
      left: window.scrollX
    });
  }
}, Ns = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0;
function fs(e) {
  return Ns(e) || e instanceof FormData && Array.from(e.values()).some((t) => fs(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => fs(t));
}
var ds = (e) => e instanceof FormData;
function Jo(e, t = new FormData(), n = null, i = "brackets") {
  e = e || {};
  for (const a in e)
    Object.prototype.hasOwnProperty.call(e, a) && Zo(t, Yo(n, a, "indices"), e[a], i);
  return t;
}
function Yo(e, t, n) {
  return e ? n === "brackets" ? `${e}[]` : `${e}[${t}]` : t;
}
function Zo(e, t, n, i) {
  if (Array.isArray(n))
    return Array.from(n.keys()).forEach(
      (a) => Zo(e, Yo(t, a.toString(), i), n[a], i)
    );
  if (n instanceof Date)
    return e.append(t, n.toISOString());
  if (n instanceof File)
    return e.append(t, n, n.name);
  if (n instanceof Blob)
    return e.append(t, n);
  if (typeof n == "boolean")
    return e.append(t, n ? "1" : "0");
  if (typeof n == "string")
    return e.append(t, n);
  if (typeof n == "number")
    return e.append(t, `${n}`);
  if (n == null)
    return e.append(t, "");
  Jo(n, e, t, i);
}
function lu(e) {
  return /\[\d+\]/.test(decodeURIComponent(e.search));
}
function cu(e) {
  if (!e || e === "?")
    return {};
  const t = {};
  return e.replace(/^\?/, "").split("&").filter(Boolean).forEach((n) => {
    const [i, a] = fu(n);
    du(t, Wi(i), Wi(a));
  }), t;
}
function uu(e, t) {
  const n = [];
  return hs(e, "", n, t), n.length ? "?" + n.join("&") : "";
}
function fu(e) {
  const t = e.indexOf("=");
  return t === -1 ? [e, ""] : [e.substring(0, t), e.substring(t + 1)];
}
function Wi(e) {
  return decodeURIComponent(e.replace(/\+/g, " "));
}
function du(e, t, n) {
  const i = hu(t);
  if (i.some((u) => u === "__proto__"))
    return;
  let a = e;
  for (; i.length > 1; ) {
    const u = i.shift(), v = i[0] === "";
    (typeof a[u] != "object" || a[u] === null) && (a[u] = v ? [] : {}), a = a[u];
  }
  const f = i.shift();
  f === "" && Array.isArray(a) ? a.push(n) : a[f] = n;
}
function hu(e) {
  const t = [], n = e.split("[")[0];
  n && t.push(n);
  let i;
  const a = /\[([^\]]*)\]/g;
  for (; (i = a.exec(e)) !== null; )
    t.push(i[1]);
  return t;
}
function hs(e, t, n, i) {
  if (e !== void 0) {
    if (e === null) {
      n.push(`${t}=`);
      return;
    }
    if (Array.isArray(e)) {
      e.forEach((a, f) => {
        const u = i === "indices" ? `${t}[${f}]` : `${t}[]`;
        hs(a, u, n, i);
      });
      return;
    }
    if (typeof e == "object") {
      Object.keys(e).forEach((a) => {
        hs(e[a], t ? `${t}[${a}]` : a, n, i);
      });
      return;
    }
    n.push(`${t}=${encodeURIComponent(String(e))}`);
  }
}
function it(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var pu = (e, t, n, i, a) => {
  let f = typeof e == "string" ? it(e) : e;
  if ((fs(t) || i) && !ds(t) && (Wt.get("form.forceIndicesArrayFormatInFormData") && (a = "indices"), t = Jo(t, new FormData(), null, a)), ds(t))
    return [f, t];
  const [u, v] = wn(n, f, t, a);
  return [it(u), v];
};
function wn(e, t, n, i = "brackets") {
  const a = e === "get" && !ds(n) && Object.keys(n).length > 0, f = ta(t.toString()), u = f || t.toString().startsWith("/") || t.toString() === "", v = !u && !t.toString().startsWith("#") && !t.toString().startsWith("?"), m = /^[.]{1,2}([/]|$)/.test(t.toString()), w = t.toString().includes("?") || a, y = t.toString().includes("#"), x = new URL(t.toString(), typeof window > "u" ? "http://localhost" : window.location.toString());
  if (a) {
    const A = lu(x) ? "indices" : i;
    x.search = uu({ ...cu(x.search), ...n }, A);
  }
  return [
    [
      f ? `${x.protocol}//${x.host}` : "",
      u ? x.pathname : "",
      v ? x.pathname.substring(m ? 0 : 1) : "",
      w ? x.search : "",
      y ? x.hash : ""
    ].join(""),
    a ? {} : n
  ];
}
function un(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Vi = (e, t) => {
  e.hash && !t.hash && un(e).href === t.href && (t.hash = e.hash);
}, fn = (e, t) => un(e).href === un(t).href, ps = (e, t) => e.origin === t.origin && e.pathname === t.pathname;
function ut(e) {
  return e !== null && typeof e == "object" && e !== void 0 && "url" in e && "method" in e;
}
function ea(e) {
  return e.component ? typeof e.component != "string" ? (console.error(
    `The "component" property on the URL method pair received multiple components (${Object.keys(e.component).join(", ")}), but only a single component string is supported for instant visits. Use the withComponent() method to specify which component to use.`
  ), null) : e.component : null;
}
function ta(e) {
  return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(e);
}
function gu(e, t) {
  const n = typeof e == "string" ? it(e) : e;
  return t ? `${n.protocol}//${n.host}${n.pathname}${n.search}${n.hash}` : `${n.pathname}${n.search}${n.hash}`;
}
var vu = class {
  constructor() {
    re(this, "page");
    re(this, "swapComponent");
    re(this, "resolveComponent");
    re(this, "onFlashCallback");
    re(this, "componentId", {});
    re(this, "listeners", []);
    re(this, "isFirstPageLoad", !0);
    re(this, "cleared", !1);
    re(this, "pendingDeferredProps", null);
    re(this, "historyQuotaExceeded", !1);
    re(this, "optimisticBaseline", {});
    re(this, "pendingOptimistics", []);
    re(this, "optimisticCounter", 0);
  }
  init({
    initialPage: e,
    swapComponent: t,
    resolveComponent: n,
    onFlash: i
  }) {
    return this.page = { ...e, flash: e.flash ?? {}, rescuedProps: e.rescuedProps ?? [] }, this.swapComponent = t, this.resolveComponent = n, this.onFlashCallback = i, wt.on("historyQuotaExceeded", () => {
      this.historyQuotaExceeded = !0;
    }), this;
  }
  set(e, {
    replace: t = !1,
    preserveScroll: n = !1,
    preserveState: i = !1,
    viewTransition: a = !1,
    cached: f = !1,
    initialRender: u = !1,
    visitId: v
  } = {}) {
    Object.keys(e.deferredProps || {}).length && (this.pendingDeferredProps = {
      deferredProps: e.deferredProps,
      component: e.component,
      url: e.url
    }, e.initialDeferredProps === void 0 && (e.initialDeferredProps = e.deferredProps)), this.componentId = {};
    const m = this.componentId;
    return e.clearHistory && ve.clear(), this.resolve(e.component, e).then((w) => {
      if (m !== this.componentId)
        return;
      e.rememberedState ?? (e.rememberedState = {});
      const y = typeof window > "u", x = y ? new URL(e.url) : window.location, A = !y && n ? Ge.getScrollRegions() : [];
      t = t || fn(it(e.url), x);
      const N = { ...e, flash: {} };
      return new Promise(
        (F) => t ? ve.replaceState(N, F) : ve.pushState(N, F)
      ).then(() => {
        const F = !this.isTheSame(e);
        if (!F && Object.keys(e.props.errors || {}).length > 0 && (a = !1), this.page = e, this.cleared = !1, this.hasOnceProps() && bt.updateCachedOncePropsFromCurrentPage(), F && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.historyQuotaExceeded) {
          this.historyQuotaExceeded = !1;
          return;
        }
        return this.swap({
          component: w,
          page: e,
          preserveState: i,
          viewTransition: a,
          initialRender: u
        }).then(() => {
          n ? window.requestAnimationFrame(() => Ge.restoreScrollRegions(A)) : Ge.reset(), this.pendingDeferredProps && this.pendingDeferredProps.component === e.component && this.pendingDeferredProps.url === e.url && wt.fireInternalEvent("loadDeferredProps", this.pendingDeferredProps.deferredProps), this.pendingDeferredProps = null, t || ln(e, { cached: f, visitId: v });
        });
      });
    });
  }
  setQuietly(e, {
    preserveState: t = !1
  } = {}) {
    return this.resolve(e.component, e).then((n) => (this.page = e, this.cleared = !1, ve.setCurrent(e), this.swap({ component: n, page: e, preserveState: t, viewTransition: !1 })));
  }
  clear() {
    this.cleared = !0;
  }
  isCleared() {
    return this.cleared;
  }
  get() {
    return this.page;
  }
  getWithoutFlashData() {
    return { ...this.page, flash: {} };
  }
  hasOnceProps() {
    return Object.keys(this.page.onceProps ?? {}).length > 0;
  }
  merge(e) {
    this.page = { ...this.page, ...e };
  }
  setPropsQuietly(e) {
    return this.page = { ...this.page, props: e }, this.resolve(this.page.component, this.page).then((t) => this.swap({ component: t, page: this.page, preserveState: !0, viewTransition: !1 }));
  }
  setFlash(e) {
    var t;
    this.page = { ...this.page, flash: e }, (t = this.onFlashCallback) == null || t.call(this, e);
  }
  setUrlHash(e) {
    this.page.url.includes(e) || (this.page.url += e);
  }
  remember(e) {
    this.page.rememberedState = e;
  }
  swap({
    component: e,
    page: t,
    preserveState: n,
    viewTransition: i,
    initialRender: a = !1
  }) {
    const f = () => this.swapComponent({ component: e, page: t, preserveState: n, initialRender: a });
    if (!i || !(document != null && document.startViewTransition) || document.visibilityState === "hidden")
      return f();
    const u = typeof i == "boolean" ? () => null : i;
    return new Promise((v) => {
      const m = document.startViewTransition(() => f().then(v));
      m.ready.catch(() => {
      }), u(m);
    });
  }
  resolve(e, t) {
    return Promise.resolve(this.resolveComponent(e, t));
  }
  nextOptimisticId() {
    return ++this.optimisticCounter;
  }
  setBaseline(e, t) {
    e in this.optimisticBaseline || (this.optimisticBaseline[e] = t);
  }
  updateBaseline(e, t) {
    e in this.optimisticBaseline && (this.optimisticBaseline[e] = t);
  }
  hasBaseline(e) {
    return e in this.optimisticBaseline;
  }
  registerOptimistic(e, t) {
    this.pendingOptimistics.push({ id: e, callback: t });
  }
  unregisterOptimistic(e) {
    this.pendingOptimistics = this.pendingOptimistics.filter((t) => t.id !== e);
  }
  replayOptimistics() {
    const e = Object.keys(this.optimisticBaseline);
    if (e.length === 0)
      return {};
    const t = Ae(this.page.props);
    for (const i of e)
      t[i] = Ae(this.optimisticBaseline[i]);
    for (const { callback: i } of this.pendingOptimistics) {
      const a = i(Ae(t));
      a && Object.assign(t, a);
    }
    const n = {};
    for (const i of e)
      n[i] = t[i];
    return n;
  }
  pendingOptimisticCount() {
    return this.pendingOptimistics.length;
  }
  clearOptimisticState() {
    this.optimisticBaseline = {}, this.pendingOptimistics = [];
  }
  isTheSame(e) {
    return this.page.component === e.component;
  }
  on(e, t) {
    return this.listeners.push({ event: e, callback: t }), () => {
      this.listeners = this.listeners.filter((n) => n.event !== e && n.callback !== t);
    };
  }
  fireEventsFor(e) {
    this.listeners.filter((t) => t.event === e).forEach((t) => t.callback());
  }
  mergeOncePropsIntoResponse(e, { force: t = !1 } = {}) {
    Object.entries(e.onceProps ?? {}).forEach(([n, i]) => {
      var f;
      const a = (f = this.page.onceProps) == null ? void 0 : f[n];
      a !== void 0 && (t || Se(e.props, i.prop) === void 0) && (Je(e.props, i.prop, Se(this.page.props, a.prop)), e.onceProps[n].expiresAt = a.expiresAt);
    });
  }
}, J = new vu(), Pn = class {
  constructor() {
    re(this, "items", []);
    re(this, "processingPromise", null);
  }
  add(e) {
    return this.items.push(e), this.process();
  }
  process() {
    return this.processingPromise ?? (this.processingPromise = this.processNext().finally(() => {
      this.processingPromise = null;
    })), this.processingPromise;
  }
  processNext() {
    const e = this.items.shift();
    return e ? Promise.resolve(e()).then(() => this.processNext()) : Promise.resolve();
  }
}, sr = typeof window > "u", yr = new Pn(), Ki = !sr && /CriOS/.test(window.navigator.userAgent), mu = class {
  constructor() {
    re(this, "rememberedState", "rememberedState");
    re(this, "scrollRegions", "scrollRegions");
    re(this, "preserveUrl", !1);
    re(this, "current", {});
    // We need initialState for `restore`
    re(this, "initialState", null);
  }
  remember(e, t) {
    var n;
    this.replaceState({
      ...J.getWithoutFlashData(),
      rememberedState: {
        ...((n = J.get()) == null ? void 0 : n.rememberedState) ?? {},
        [t]: e
      }
    });
  }
  restore(e) {
    var t, n, i, a;
    if (!sr)
      return ((t = this.current[this.rememberedState]) == null ? void 0 : t[e]) !== void 0 ? (n = this.current[this.rememberedState]) == null ? void 0 : n[e] : (a = (i = this.initialState) == null ? void 0 : i[this.rememberedState]) == null ? void 0 : a[e];
  }
  pushState(e, t = null) {
    if (!sr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, yr.add(() => this.getPageData(e).then((n) => {
        const i = () => this.doPushState({ page: n }, e.url).then(() => t == null ? void 0 : t());
        return Ki ? new Promise((a) => {
          setTimeout(() => i().then(a));
        }) : i();
      }));
    }
  }
  clonePageProps(e) {
    try {
      return structuredClone(e.props), e;
    } catch {
      return {
        ...e,
        props: Ae(e.props)
      };
    }
  }
  getPageData(e) {
    const t = this.clonePageProps(e);
    return new Promise((n) => e.encryptHistory ? Gc(t).then(n) : n(t));
  }
  processQueue() {
    return yr.process();
  }
  decrypt(e = null) {
    var n;
    if (sr)
      return Promise.resolve(e ?? J.get());
    const t = e ?? ((n = window.history.state) == null ? void 0 : n.page);
    return this.decryptPageData(t).then((i) => {
      if (!i)
        throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = i ?? void 0 : this.current = i ?? {}, i;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? Qc(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    yr.add(() => Promise.resolve().then(() => {
      var t;
      if ((t = window.history.state) != null && t.page && !ft(this.getScrollRegions(), e))
        return this.doReplaceState({
          page: window.history.state.page,
          scrollRegions: e
        });
    }));
  }
  saveDocumentScrollPosition(e) {
    yr.add(() => Promise.resolve().then(() => {
      var t;
      if ((t = window.history.state) != null && t.page && !ft(this.getDocumentScrollPosition(), e))
        return this.doReplaceState({
          page: window.history.state.page,
          documentScrollPosition: e
        });
    }));
  }
  getScrollRegions() {
    var e;
    return ((e = window.history.state) == null ? void 0 : e.scrollRegions) || [];
  }
  getDocumentScrollPosition() {
    var e;
    return ((e = window.history.state) == null ? void 0 : e.documentScrollPosition) || { top: 0, left: 0 };
  }
  replaceState(e, t = null) {
    if (ft(this.current, e)) {
      t && t();
      return;
    }
    const { flash: n, ...i } = e;
    if (J.merge(i), !sr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, yr.add(() => this.getPageData(e).then((a) => {
        const f = () => this.doReplaceState({ page: a }, e.url).then(() => t == null ? void 0 : t());
        return Ki ? new Promise((u) => {
          setTimeout(() => f().then(u));
        }) : f();
      }));
    }
  }
  isHistoryThrottleError(e) {
    return e instanceof Error && e.name === "SecurityError" && (e.message.includes("history.pushState") || e.message.includes("history.replaceState"));
  }
  isQuotaExceededError(e) {
    return e instanceof Error && e.name === "QuotaExceededError";
  }
  withThrottleProtection(e) {
    return Promise.resolve().then(() => {
      try {
        return e();
      } catch (t) {
        if (!this.isHistoryThrottleError(t))
          throw t;
        console.error(t.message);
      }
    });
  }
  doReplaceState(e, t) {
    return this.withThrottleProtection(() => {
      var n, i;
      window.history.replaceState(
        {
          ...e,
          scrollRegions: e.scrollRegions ?? ((n = window.history.state) == null ? void 0 : n.scrollRegions),
          documentScrollPosition: e.documentScrollPosition ?? ((i = window.history.state) == null ? void 0 : i.documentScrollPosition)
        },
        "",
        t
      );
    });
  }
  doPushState(e, t) {
    return this.withThrottleProtection(() => {
      try {
        window.history.pushState(e, "", t);
      } catch (n) {
        if (!this.isQuotaExceededError(n))
          throw n;
        wt.fireInternalEvent("historyQuotaExceeded", t);
      }
    });
  }
  getState(e, t) {
    var n;
    return ((n = this.current) == null ? void 0 : n[e]) ?? t;
  }
  deleteState(e) {
    this.current[e] !== void 0 && (delete this.current[e], this.replaceState(this.current));
  }
  clearInitialState(e) {
    this.initialState && this.initialState[e] !== void 0 && delete this.initialState[e];
  }
  browserHasHistoryEntry() {
    var e;
    return !sr && !!((e = window.history.state) != null && e.page);
  }
  clear() {
    ze.remove(ar.key), ze.remove(ar.iv);
  }
  setCurrent(e) {
    this.current = e;
  }
  isValidState(e) {
    return !!e.page;
  }
  getAllState() {
    return this.current;
  }
};
typeof window < "u" && window.history.scrollRestoration && (window.history.scrollRestoration = "manual");
var ve = new mu(), yu = class {
  constructor() {
    re(this, "internalListeners", []);
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("pageshow", this.handlePageshowEvent.bind(this)), window.addEventListener("scroll", Er(Ge.onWindowScroll.bind(Ge), 100), !0)), typeof document < "u" && document.addEventListener("scroll", Er(Ge.onScroll.bind(Ge), 100), !0);
  }
  onGlobalEvent(e, t) {
    const n = (i) => {
      const a = t(i);
      i.cancelable && !i.defaultPrevented && a === !1 && i.preventDefault();
    };
    return this.registerListener(`inertia:${e}`, n);
  }
  on(e, t) {
    return this.internalListeners.push({ event: e, listener: t }), () => {
      this.internalListeners = this.internalListeners.filter((n) => n.listener !== t);
    };
  }
  onMissingHistoryItem() {
    J.clear(), this.fireInternalEvent("missingHistoryItem");
  }
  fireInternalEvent(e, ...t) {
    this.internalListeners.filter((n) => n.event === e).forEach((n) => n.listener(...t));
  }
  registerListener(e, t) {
    return document.addEventListener(e, t), () => document.removeEventListener(e, t);
  }
  // bfcache restores pages without firing `popstate`, so we use `pageshow` to
  // re-validate encrypted history entries after `clearHistory` removed the keys.
  // https://web.dev/articles/bfcache
  handlePageshowEvent(e) {
    e.persisted && ve.decrypt().catch(() => this.onMissingHistoryItem());
  }
  handlePopstateEvent(e) {
    const t = e.state || null;
    if (t === null) {
      const n = it(J.get().url);
      n.hash = window.location.hash, ve.replaceState({ ...J.getWithoutFlashData(), url: n.href }), Ge.reset();
      return;
    }
    if (!ve.isValidState(t))
      return this.onMissingHistoryItem();
    ve.decrypt(t.page).then((n) => {
      if (J.get().version !== n.version) {
        this.onMissingHistoryItem();
        return;
      }
      be.cancelAll({ prefetch: !1 }), J.setQuietly(n, { preserveState: !1 }).then(() => {
        Ge.restore(ve.getScrollRegions()), ln(J.get());
        const i = {}, a = J.get().props;
        for (const [f, u] of Object.entries(n.initialDeferredProps ?? n.deferredProps ?? {})) {
          const v = u.filter((m) => Se(a, m) === void 0);
          v.length > 0 && (i[f] = v);
        }
        Object.keys(i).length > 0 && this.fireInternalEvent("loadDeferredProps", i);
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, wt = new yu(), bu = class {
  constructor() {
    re(this, "type");
    this.type = this.resolveType();
  }
  resolveType() {
    var t;
    if (typeof window > "u")
      return "navigate";
    const e = (t = window.performance) == null ? void 0 : t.getEntriesByType("navigation")[0];
    return (e == null ? void 0 : e.type) ?? "navigate";
  }
  get() {
    return this.type;
  }
  isBackForward() {
    return this.type === "back_forward";
  }
  isReload() {
    return this.type === "reload";
  }
}, Xn = new bu();
function Qr() {
  const e = typeof window < "u" ? window.crypto : void 0;
  if (e != null && e.randomUUID)
    return e.randomUUID();
  const t = () => e != null && e.getRandomValues ? e.getRandomValues(new Uint8Array(1))[0] : Math.floor(Math.random() * 256);
  return "10000000-1000-4000-8000-100000000000".replace(
    /[018]/g,
    (n) => (+n ^ t() & 15 >> +n / 4).toString(16)
  );
}
var wu = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((t) => t.bind(this)());
  }
  static clearRememberedStateOnReload() {
    Xn.isReload() && (ve.deleteState(ve.rememberedState), ve.clearInitialState(ve.rememberedState));
  }
  static handleBackForward() {
    if (!Xn.isBackForward() || !ve.browserHasHistoryEntry())
      return !1;
    const e = ve.getScrollRegions();
    return ve.decrypt().then((t) => {
      const n = Qr();
      J.set(t, { preserveScroll: !0, preserveState: !0, visitId: n }).then(() => {
        Ge.restore(e), ln(J.get(), { visitId: n });
      });
    }).catch(() => {
      wt.onMissingHistoryItem();
    }), !0;
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  static handleLocation() {
    if (!ze.exists(ze.locationVisitKey))
      return !1;
    const e = ze.get(ze.locationVisitKey) || {};
    return ze.remove(ze.locationVisitKey), typeof window < "u" && J.setUrlHash(window.location.hash), ve.decrypt(J.get()).then(() => {
      const t = Qr(), n = ve.getState(ve.rememberedState, {}), i = ve.getScrollRegions();
      J.remember(n), J.set(J.get(), {
        preserveScroll: e.preserveScroll,
        preserveState: !0,
        initialRender: !0,
        visitId: t
      }).then(() => {
        e.preserveScroll && Ge.restore(i), this.fireInitialEvents(t);
      });
    }).catch(() => {
      wt.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && J.setUrlHash(window.location.hash);
    const e = Qr();
    J.set(J.get(), { preserveScroll: !0, preserveState: !0, initialRender: !0, visitId: e }).then(() => {
      Xn.isReload() ? Ge.restore(ve.getScrollRegions()) : Ge.scrollToAnchor(), this.fireInitialEvents(e);
    });
  }
  static fireInitialEvents(e) {
    const t = J.get();
    ln(t, { visitId: e }), Object.keys(t.flash).length > 0 && queueMicrotask(() => cn(t.flash));
  }
}, Pu = class {
  constructor(e, t, n) {
    re(this, "intervalId", null);
    re(this, "timeoutId", null);
    re(this, "throttle", !1);
    re(this, "keepAlive", !1);
    re(this, "cb");
    re(this, "interval");
    re(this, "cbCount", 0);
    re(this, "mode");
    re(this, "inFlight", !1);
    re(this, "currentCancel", null);
    re(this, "stopped", !0);
    re(this, "instanceId", 0);
    this.keepAlive = n.keepAlive ?? !1, this.mode = n.mode ?? "overlap", this.cb = t, this.interval = e, (n.autoStart ?? !0) && this.start();
  }
  stop() {
    this.stopped = !0, this.instanceId++, this.inFlight = !1, this.currentCancel = null, this.intervalId && (clearInterval(this.intervalId), this.intervalId = null), this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  start() {
    if (!(typeof window > "u")) {
      if (this.stop(), this.stopped = !1, this.mode === "rest") {
        this.scheduleNext();
        return;
      }
      this.intervalId = window.setInterval(() => this.tick(), this.interval);
    }
  }
  isInBackground(e) {
    this.throttle = this.keepAlive ? !1 : e, this.throttle && (this.cbCount = 0);
  }
  scheduleNext() {
    this.stopped || (this.timeoutId = window.setTimeout(() => {
      this.timeoutId = null, this.tick();
    }, this.interval));
  }
  tick() {
    !this.throttle || this.cbCount % 10 === 0 ? this.fire() : this.mode === "rest" && this.scheduleNext(), this.throttle && this.cbCount++;
  }
  fire() {
    var t;
    this.inFlight && this.mode === "cancel" && ((t = this.currentCancel) == null || t.call(this));
    const e = this.instanceId;
    this.cb({
      onStart: (n) => {
        e === this.instanceId && (this.inFlight = !0, this.currentCancel = n);
      },
      onFinish: () => {
        e === this.instanceId && (this.inFlight = !1, this.currentCancel = null, this.mode === "rest" && this.scheduleNext());
      }
    });
  }
}, xu = class {
  constructor() {
    re(this, "polls", []);
    this.setupVisibilityListener();
  }
  get count() {
    return this.polls.length;
  }
  add(e, t, n) {
    const i = new Pu(e, t, n);
    return this.polls.push(i), {
      stop: () => i.stop(),
      start: () => i.start(),
      destroy: () => {
        i.stop(), this.polls = this.polls.filter((a) => a !== i);
      }
    };
  }
  clear() {
    this.polls.forEach((e) => e.stop()), this.polls = [];
  }
  setupVisibilityListener() {
    typeof document > "u" || document.addEventListener(
      "visibilitychange",
      () => {
        this.polls.forEach((e) => e.isInBackground(document.hidden));
      },
      !1
    );
  }
}, Xi = new xu(), Su = class {
  constructor() {
    re(this, "requestHandlers", []);
    re(this, "responseHandlers", []);
    re(this, "errorHandlers", []);
  }
  onRequest(e) {
    return this.requestHandlers.push(e), () => {
      this.requestHandlers = this.requestHandlers.filter((t) => t !== e);
    };
  }
  onResponse(e) {
    return this.responseHandlers.push(e), () => {
      this.responseHandlers = this.responseHandlers.filter((t) => t !== e);
    };
  }
  onError(e) {
    return this.errorHandlers.push(e), () => {
      this.errorHandlers = this.errorHandlers.filter((t) => t !== e);
    };
  }
  async processRequest(e) {
    let t = e;
    for (const n of this.requestHandlers)
      t = await n(t);
    return t;
  }
  async processResponse(e) {
    let t = e;
    for (const n of this.responseHandlers)
      t = await n(t);
    return t;
  }
  async processError(e) {
    for (const t of this.errorHandlers)
      await t(e);
  }
}, je = new Su(), _s = class extends Error {
  constructor(t, n, i) {
    super(i ? `${t} (${i})` : t);
    re(this, "code");
    re(this, "url");
    this.name = "HttpError", this.code = n, this.url = i;
  }
}, gs = class extends _s {
  constructor(t, n, i) {
    super(t, "ERR_HTTP_RESPONSE", i);
    re(this, "response");
    this.name = "HttpResponseError", this.response = n;
  }
}, vs = class extends _s {
  constructor(e = "Request was cancelled", t) {
    super(e, "ERR_CANCELLED", t), this.name = "HttpCancelledError";
  }
}, zi = class extends _s {
  constructor(t, n, i) {
    super(t, "ERR_NETWORK", n);
    re(this, "cause");
    this.name = "HttpNetworkError", this.cause = i;
  }
};
function Cu(e) {
  const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
  return t ? decodeURIComponent(t[3]) : null;
}
function Tu(e) {
  const t = {};
  return e.getAllResponseHeaders().split(`\r
`).forEach((n) => {
    const i = n.indexOf(":");
    i > 0 && (t[n.slice(0, i).toLowerCase().trim()] = n.slice(i + 1).trim());
  }), t;
}
function ra(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function Eu(e) {
  return typeof e == "string" || ra(e) || typeof Blob < "u" && e instanceof Blob || typeof ArrayBuffer < "u" && e instanceof ArrayBuffer || typeof ArrayBuffer < "u" && ArrayBuffer.isView(e) || typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function Au(e, t) {
  if (!t.headers)
    return;
  const n = ra(t.data);
  Object.entries(t.headers).forEach(([i, a]) => {
    (i.toLowerCase() !== "content-type" || !n) && e.setRequestHeader(i, String(a));
  });
}
function Ou(e, t) {
  if (!t || Object.keys(t).length === 0)
    return e;
  const [n] = wn("get", e, t);
  return n;
}
var na = class {
  constructor(e = {}) {
    re(this, "xsrfCookieName");
    re(this, "xsrfHeaderName");
    this.xsrfCookieName = e.xsrfCookieName ?? "XSRF-TOKEN", this.xsrfHeaderName = e.xsrfHeaderName ?? "X-XSRF-TOKEN";
  }
  async request(e) {
    const t = await je.processRequest(e);
    try {
      const n = await this.doRequest(t);
      return await je.processResponse(n);
    } catch (n) {
      throw (n instanceof gs || n instanceof zi || n instanceof vs) && await je.processError(n), n;
    }
  }
  doRequest(e) {
    return new Promise((t, n) => {
      var m, w;
      const i = new XMLHttpRequest(), a = Ou(e.url, e.params);
      i.open(e.method.toUpperCase(), a, !0);
      const f = Cu(this.xsrfCookieName);
      f && i.setRequestHeader(this.xsrfHeaderName, f), Object.keys(e.headers ?? {}).some(
        (y) => y.toLowerCase() === "x-requested-with"
      ) || i.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      let v = null;
      e.data !== null && e.data !== void 0 && (Eu(e.data) ? v = e.data : typeof e.data == "object" ? (v = JSON.stringify(e.data), !((m = e.headers) != null && m["Content-Type"]) && !((w = e.headers) != null && w["content-type"]) && i.setRequestHeader("Content-Type", "application/json")) : v = String(e.data)), Au(i, e), e.onUploadProgress && (i.upload.onprogress = (y) => {
        const x = y.lengthComputable ? y.loaded / y.total : void 0;
        e.onUploadProgress({
          progress: x,
          percentage: x ? Math.round(x * 100) : 0,
          loaded: y.loaded,
          total: y.lengthComputable ? y.total : void 0
        });
      }), e.signal && e.signal.addEventListener("abort", () => i.abort()), i.onabort = () => n(new vs("Request was cancelled", e.url)), i.onerror = () => n(new zi("Network error", e.url)), i.onload = () => {
        const y = {
          status: i.status,
          data: i.responseText,
          headers: Tu(i)
        };
        i.status >= 400 ? n(new gs(`Request failed with status ${i.status}`, y, e.url)) : t(y);
      }, i.send(v);
    });
  }
}, ku = new na(), zn = ku;
function Du(e) {
  return !("request" in e);
}
var Nu = {
  /**
   * Get the current HTTP client
   */
  getClient() {
    return zn;
  },
  /**
   * Set the HTTP client to use for all Inertia requests
   */
  setClient(e) {
    if (!Du(e)) {
      zn = e;
      return;
    }
    zn = new na(e), e.xsrfCookieName && Ie.withXsrfCookieName(e.xsrfCookieName), e.xsrfHeaderName && Ie.withXsrfHeaderName(e.xsrfHeaderName);
  },
  /**
   * Register a request handler that runs before each request
   */
  onRequest: je.onRequest.bind(je),
  /**
   * Register a response handler that runs after each successful response
   */
  onResponse: je.onResponse.bind(je),
  /**
   * Register an error handler that runs when a request fails
   */
  onError: je.onError.bind(je),
  /**
   * Process a request config through all registered request handlers.
   * For use by custom HttpClient implementations.
   */
  processRequest: je.processRequest.bind(je),
  /**
   * Process a response through all registered response handlers.
   * For use by custom HttpClient implementations.
   */
  processResponse: je.processResponse.bind(je),
  /**
   * Process an error through all registered error handlers.
   * For use by custom HttpClient implementations.
   */
  processError: je.processError.bind(je)
}, _u = class {
  constructor() {
    re(this, "requestHandlers", []);
    re(this, "responseHandlers", []);
  }
  onVisitRequest(e) {
    return this.requestHandlers.push(e), () => {
      this.requestHandlers = this.requestHandlers.filter((t) => t !== e);
    };
  }
  onVisitResponse(e) {
    return this.responseHandlers.push(e), () => {
      this.responseHandlers = this.responseHandlers.filter((t) => t !== e);
    };
  }
  async processRequest(e, t) {
    let n = t;
    for (const i of this.requestHandlers)
      n = await i(e, n);
    return n;
  }
  async processResponse(e, t) {
    let n = t;
    for (const i of this.responseHandlers)
      n = await i(e, n);
    return n;
  }
}, sa = new _u(), Jr = class Yr {
  constructor(t) {
    re(this, "callbacks", []);
    re(this, "params");
    if (!t.prefetch)
      this.params = t;
    else {
      const n = {
        onBefore: this.wrapCallback(t, "onBefore"),
        onBeforeUpdate: this.wrapCallback(t, "onBeforeUpdate"),
        onStart: this.wrapCallback(t, "onStart"),
        onProgress: this.wrapCallback(t, "onProgress"),
        onFinish: this.wrapCallback(t, "onFinish"),
        onCancel: this.wrapCallback(t, "onCancel"),
        onSuccess: this.wrapCallback(t, "onSuccess"),
        onError: this.wrapCallback(t, "onError"),
        onHttpException: this.wrapCallback(t, "onHttpException"),
        onNetworkError: this.wrapCallback(t, "onNetworkError"),
        onFlash: this.wrapCallback(t, "onFlash"),
        onCancelToken: this.wrapCallback(t, "onCancelToken"),
        onPrefetched: this.wrapCallback(t, "onPrefetched"),
        onPrefetching: this.wrapCallback(t, "onPrefetching")
      };
      this.params = {
        ...t,
        ...n,
        onPrefetchResponse: t.onPrefetchResponse || (() => {
        }),
        onPrefetchError: t.onPrefetchError || (() => {
        })
      };
    }
  }
  static create(t) {
    return new Yr(t);
  }
  data() {
    return this.params.method === "get" ? null : this.params.data;
  }
  queryParams() {
    return this.params.method === "get" ? this.params.data : {};
  }
  isPartial() {
    return this.params.only.length > 0 || this.params.except.length > 0 || this.params.reset.length > 0;
  }
  isPrefetch() {
    return this.params.prefetch === !0;
  }
  isDeferredPropsRequest() {
    return this.params.deferredProps === !0;
  }
  isPollRequest() {
    return this.params.poll === !0;
  }
  onCancelToken(t) {
    this.params.onCancelToken({
      cancel: t
    });
  }
  markAsFinished() {
    this.params.completed = !0, this.params.cancelled = !1, this.params.interrupted = !1;
  }
  markAsCancelled({ cancelled: t = !0, interrupted: n = !1 }) {
    this.params.onCancel(), this.params.completed = !1, this.params.cancelled = t, this.params.interrupted = n;
  }
  wasCancelledAtAll() {
    return this.params.cancelled || this.params.interrupted;
  }
  onFinish() {
    this.params.onFinish(this.params);
  }
  onStart() {
    this.params.onStart(this.params);
  }
  onPrefetching() {
    this.params.onPrefetching(this.params);
  }
  onPrefetchResponse(t) {
    this.params.onPrefetchResponse && this.params.onPrefetchResponse(t);
  }
  onPrefetchError(t) {
    this.params.onPrefetchError && this.params.onPrefetchError(t);
  }
  all() {
    return this.params;
  }
  headers() {
    const t = {
      ...this.params.headers
    };
    this.isPartial() && (t["X-Inertia-Partial-Component"] = J.get().component);
    const n = this.params.only.concat(this.params.reset);
    return n.length > 0 && (t["X-Inertia-Partial-Data"] = n.join(",")), this.params.except.length > 0 && (t["X-Inertia-Partial-Except"] = this.params.except.join(",")), this.params.reset.length > 0 && (t["X-Inertia-Reset"] = this.params.reset.join(",")), this.params.errorBag && this.params.errorBag.length > 0 && (t["X-Inertia-Error-Bag"] = this.params.errorBag), t;
  }
  setPreserveOptions(t) {
    this.params.preserveScroll = Yr.resolvePreserveOption(this.params.preserveScroll, t), this.params.preserveState = Yr.resolvePreserveOption(this.params.preserveState, t);
  }
  runCallbacks() {
    this.callbacks.forEach(({ name: t, args: n }) => {
      this.params[t](...n);
    });
  }
  merge(t) {
    this.params = {
      ...this.params,
      ...t
    };
  }
  wrapCallback(t, n) {
    return (...i) => {
      this.recordCallback(n, i), t[n](...i);
    };
  }
  recordCallback(t, n) {
    this.callbacks.push({ name: t, args: n });
  }
  static resolvePreserveOption(t, n) {
    return typeof t == "function" ? t(n) : t === "errors" ? Object.keys(n.props.errors || {}).length > 0 : t;
  }
}, Ru = {
  createIframeAndPage(e) {
    typeof e == "object" && (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(
      e
    )}`);
    const t = document.createElement("html");
    t.innerHTML = e, t.querySelectorAll("a").forEach((i) => i.setAttribute("target", "_top"));
    const n = document.createElement("iframe");
    return n.style.backgroundColor = "white", n.style.borderRadius = "5px", n.style.width = "100%", n.style.height = "100%", n.setAttribute("sandbox", "allow-scripts"), { iframe: n, page: t };
  },
  show(e) {
    const { iframe: t, page: n } = this.createIframeAndPage(e);
    t.style.boxSizing = "border-box", t.style.display = "block";
    const i = document.createElement("dialog");
    i.id = "inertia-error-dialog", Object.assign(i.style, {
      width: "calc(100vw - 100px)",
      height: "calc(100vh - 100px)",
      padding: "0",
      margin: "auto",
      border: "none",
      backgroundColor: "transparent"
    });
    const a = document.createElement("style");
    a.textContent = `
      dialog#inertia-error-dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.6);
      }

      dialog#inertia-error-dialog:focus {
        outline: none;
      }
    `;
    const f = Wt.get("nonce");
    f && (a.nonce = f), document.head.appendChild(a), i.addEventListener("click", (u) => {
      u.target === i && i.close();
    }), i.addEventListener("close", () => {
      a.remove(), i.remove();
    }), i.appendChild(t), document.body.prepend(i), i.showModal(), i.focus(), t.srcdoc = n.outerHTML;
  }
}, Gi = (e, t) => e === t || e.startsWith(`${t}.`), ia = (e, t) => {
  const { only: n, except: i } = e;
  return !(n.length === 0 && i.length === 0 || n.length > 0 && !n.some((a) => Gi(t, a)) || i.length > 0 && i.some((a) => Gi(t, a)));
}, Lu = (e, t) => t.some((n) => ia(e, n)), Hu = new Pn(), Qi = class oa {
  constructor(t, n, i) {
    re(this, "requestParams");
    re(this, "response");
    re(this, "originatingPage");
    re(this, "wasPrefetched", !1);
    re(this, "processed", !1);
    this.requestParams = t, this.response = n, this.originatingPage = i;
  }
  static create(t, n, i) {
    return new oa(t, n, i);
  }
  isProcessed() {
    return this.processed;
  }
  async handlePrefetch() {
    fn(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return Hu.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch)
      return this.wasPrefetched = !0, this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), Kc(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), this.processed = !0, !this.isInertiaResponse())
      return this.handleNonInertiaResponse();
    if (this.isHttpException()) {
      const i = {
        ...this.response,
        data: this.getDataFromResponse(this.response.data)
      };
      if (this.requestParams.all().onHttpException(i) === !1 || !Mi(i))
        return;
    }
    await ve.processQueue(), ve.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    const { flash: t } = J.get();
    Object.keys(t).length > 0 && !this.requestParams.isDeferredPropsRequest() && (cn(t), this.requestParams.all().onFlash(t));
    const n = J.get().props.errors || {};
    if (Object.keys(n).length > 0) {
      const i = this.getScopedErrors(n);
      return Bc(i, { page: J.get(), visitId: this.requestParams.all().id }), this.requestParams.all().onError(i);
    }
    be.flushByCacheTags(this.requestParams.all().invalidateCacheTags || []), this.wasPrefetched || be.flush(J.get().url), Vc(J.get(), { visitId: this.requestParams.all().id }), await this.requestParams.all().onSuccess(J.get()), ve.preserveUrl = !1;
  }
  mergeParams(t) {
    this.requestParams.merge(t);
  }
  getPageResponse() {
    const t = this.getDataFromResponse(this.response.data);
    return typeof t == "object" ? this.response.data = { ...t, flash: t.flash ?? {}, rescuedProps: t.rescuedProps ?? [] } : this.response.data = t;
  }
  async handleNonInertiaResponse() {
    if (this.isInertiaRedirect()) {
      be.visit(this.getHeader("x-inertia-redirect"), {
        ...this.requestParams.all(),
        method: "get",
        data: {}
      });
      return;
    }
    if (this.isLocationVisit()) {
      const n = it(this.getHeader("x-inertia-location"));
      return Vi(this.requestParams.all().url, n), this.locationVisit(n);
    }
    const t = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if (this.requestParams.all().onHttpException(t) !== !1 && Mi(t))
      return Ru.show(t.data);
  }
  isInertiaResponse() {
    return this.hasHeader("x-inertia");
  }
  isHttpException() {
    return this.response.status >= 400;
  }
  hasStatus(t) {
    return this.response.status === t;
  }
  getHeader(t) {
    return this.response.headers[t];
  }
  hasHeader(t) {
    return this.getHeader(t) !== void 0;
  }
  isInertiaRedirect() {
    return this.hasStatus(409) && this.hasHeader("x-inertia-redirect");
  }
  isLocationVisit() {
    return this.hasStatus(409) && this.hasHeader("x-inertia-location");
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  locationVisit(t) {
    try {
      if (typeof window > "u")
        return;
      const n = this.getHeader("x-inertia-version"), i = !!n && n !== J.get().version;
      if (!zc(t, i) || i && this.requestParams.all().async)
        return;
      ze.set(ze.locationVisitKey, {
        preserveScroll: this.requestParams.all().preserveScroll === !0
      }), fn(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    const t = this.getPageResponse();
    return this.shouldSetPage(t) ? (this.response = await sa.processResponse(this.requestParams.all(), this.response), this.mergeProps(t), J.mergeOncePropsIntoResponse(t), this.preserveOptimisticProps(t), this.preserveEqualProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = ve.preserveUrl ? J.get().url : this.pageUrl(t), this.requestParams.all().onBeforeUpdate(t), Mc(t), J.set(t, {
      replace: this.requestParams.all().replace,
      preserveScroll: this.requestParams.all().preserveScroll,
      preserveState: this.requestParams.all().preserveState,
      viewTransition: this.requestParams.all().viewTransition,
      cached: this.requestParams.all().cached,
      visitId: this.requestParams.all().id
    })) : Promise.resolve();
  }
  getDataFromResponse(t) {
    if (typeof t != "string")
      return t;
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  }
  shouldSetPage(t) {
    if (!this.requestParams.all().async || this.originatingPage.component !== t.component)
      return !0;
    if (this.originatingPage.component !== J.get().component)
      return !1;
    const n = it(this.originatingPage.url), i = it(J.get().url);
    return n.origin === i.origin && n.pathname === i.pathname;
  }
  pageUrl(t) {
    const n = it(t.url);
    return t.preserveFragment ? n.hash = this.requestParams.all().url.hash : Vi(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
  }
  preserveOptimisticProps(t) {
    if (be.hasPendingOptimistic())
      for (const n of Object.keys(t.props))
        J.hasBaseline(n) && (J.updateBaseline(n, t.props[n]), t.props[n] = J.get().props[n]);
  }
  preserveEqualProps(t) {
    if (t.component !== J.get().component)
      return;
    const n = J.get().props;
    Object.entries(t.props).forEach(([i, a]) => {
      ft(a, n[i]) && (t.props[i] = n[i]);
    });
  }
  mergeProps(t) {
    if (!this.requestParams.isPartial() || t.component !== J.get().component)
      return;
    const n = t.mergeProps || [], i = t.prependProps || [], a = t.deepMergeProps || [], f = t.matchPropsOn || [], u = (w, y) => {
      const x = Se(J.get().props, w), A = Se(t.props, w);
      if (Array.isArray(A)) {
        const N = this.mergeOrMatchItems(
          x || [],
          A,
          w,
          f,
          y
        );
        Je(t.props, w, N);
      } else if (typeof A == "object" && A !== null) {
        const N = {
          ...x || {},
          ...A
        };
        Je(t.props, w, N);
      }
    };
    n.forEach((w) => u(w, !0)), i.forEach((w) => u(w, !1)), a.forEach((w) => {
      const y = Se(J.get().props, w), x = Se(t.props, w), A = (N, F, _) => Array.isArray(F) ? this.mergeOrMatchItems(N, F, _, f) : typeof F == "object" && F !== null ? Object.keys(F).reduce(
        (X, k) => (X[k] = A(N ? N[k] : void 0, F[k], `${_}.${k}`), X),
        { ...N }
      ) : F;
      Je(t.props, w, A(y, x, w));
    });
    const v = new Set(
      [...this.requestParams.all().only, ...this.requestParams.all().except].filter((w) => w.includes(".")).map((w) => w.split(".")[0])
    );
    for (const w of v) {
      const y = J.get().props[w];
      this.isObject(y) && this.isObject(t.props[w]) && (t.props[w] = this.deepMergeObjects(y, t.props[w]));
    }
    t.props = { ...J.get().props, ...t.props }, this.shouldPreserveErrors(t) && (t.props.errors = J.get().props.errors), J.get().scrollProps && (t.scrollProps = {
      ...J.get().scrollProps || {},
      ...t.scrollProps || {}
    }), J.hasOnceProps() && (t.onceProps = {
      ...J.get().onceProps || {},
      ...t.onceProps || {}
    }), this.requestParams.isDeferredPropsRequest() && (t.flash = { ...J.get().flash });
    const m = J.get().initialDeferredProps;
    m && Object.keys(m).length > 0 && (t.initialDeferredProps = m), t.rescuedProps = this.mergeRescuedProps(t);
  }
  mergeRescuedProps(t) {
    const n = J.get().rescuedProps ?? [], i = t.rescuedProps ?? [], a = new Set(
      n.filter((f) => !ia(this.requestParams.all(), f))
    );
    return i.forEach((f) => a.add(f)), Array.from(a);
  }
  /**
   * By default, the Laravel adapter shares validation errors via Inertia::always(),
   * so responses always include errors, even when empty. Components like
   * InfiniteScroll and WhenVisible, as well as loading deferred props,
   * perform async requests that should practically never reset errors.
   */
  shouldPreserveErrors(t) {
    if (!this.requestParams.all().preserveErrors)
      return !1;
    const n = J.get().props.errors;
    if (!n || Object.keys(n).length === 0)
      return !1;
    const i = t.props.errors;
    return !(i && Object.keys(i).length > 0);
  }
  isObject(t) {
    return t && typeof t == "object" && !Array.isArray(t);
  }
  deepMergeObjects(t, n) {
    const i = { ...t };
    for (const a of Object.keys(n)) {
      const f = t[a], u = n[a];
      this.isObject(f) && this.isObject(u) ? i[a] = this.deepMergeObjects(f, u) : i[a] = u;
    }
    return i;
  }
  mergeOrMatchItems(t, n, i, a, f = !0) {
    const u = Array.isArray(t) ? t : [], v = a.find((y) => y.split(".").slice(0, -1).join(".") === i);
    if (!v)
      return f ? [...u, ...n] : [...n, ...u];
    const m = v.split(".").pop() || "", w = /* @__PURE__ */ new Map();
    return n.forEach((y) => {
      this.hasUniqueProperty(y, m) && w.set(y[m], y);
    }), f ? this.appendWithMatching(u, n, w, m) : this.prependWithMatching(u, n, w, m);
  }
  appendWithMatching(t, n, i, a) {
    const f = t.map((v) => this.hasUniqueProperty(v, a) && i.has(v[a]) ? i.get(v[a]) : v), u = n.filter((v) => this.hasUniqueProperty(v, a) ? !t.some(
      (m) => this.hasUniqueProperty(m, a) && m[a] === v[a]
    ) : !0);
    return [...f, ...u];
  }
  prependWithMatching(t, n, i, a) {
    const f = t.filter((u) => this.hasUniqueProperty(u, a) ? !i.has(u[a]) : !0);
    return [...n, ...f];
  }
  hasUniqueProperty(t, n) {
    return t && typeof t == "object" && n in t;
  }
  async setRememberedState(t) {
    const n = await ve.getState(ve.rememberedState, {});
    this.requestParams.all().preserveState && n && t.component === J.get().component && (t.rememberedState = n);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, Ji = class aa {
  constructor(t, n, { optimistic: i = !1 } = {}) {
    re(this, "page");
    re(this, "response");
    re(this, "cancelToken");
    re(this, "requestParams");
    re(this, "requestHasFinished", !1);
    re(this, "optimistic");
    this.page = n, this.requestParams = Jr.create(t), this.cancelToken = new AbortController(), this.optimistic = i;
  }
  static create(t, n, i) {
    return new aa(t, n, i);
  }
  isPrefetch() {
    return this.requestParams.isPrefetch();
  }
  getUrl() {
    return this.requestParams.all().url;
  }
  isOptimistic() {
    return this.optimistic;
  }
  isPendingOptimistic() {
    return this.isOptimistic() && (!this.response || !this.response.isProcessed());
  }
  async send() {
    this.requestParams.onCancelToken(() => {
      this.response || this.cancel({ cancelled: !0 });
    }), Wc(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), Xc(this.requestParams.all()));
    const t = this.requestParams.all().prefetch, n = {
      method: this.requestParams.all().method,
      url: un(this.requestParams.all().url).href,
      data: this.requestParams.data(),
      signal: this.cancelToken.signal,
      headers: this.getHeaders(),
      onUploadProgress: this.onProgress.bind(this)
    }, i = await sa.processRequest(this.requestParams.all(), n);
    return Nu.getClient().request(i).then((a) => (this.response = Qi.create(this.requestParams, a, this.page), this.response.handle())).catch((a) => a instanceof gs ? (this.response = Qi.create(this.requestParams, a.response, this.page), this.response.handle()) : Promise.reject(a)).catch((a) => {
      if (!(a instanceof vs) && this.requestParams.all().onNetworkError(a) !== !1 && jc(a))
        return t && this.requestParams.onPrefetchError(a), Promise.reject(a);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, Ic(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (Uc(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    const t = {
      ...this.requestParams.headers(),
      Accept: "text/html, application/xhtml+xml",
      "X-Requested-With": "XMLHttpRequest",
      "X-Inertia": !0
    }, n = J.get();
    n.version && (t["X-Inertia-Version"] = n.version);
    const i = Object.entries(n.onceProps || {}).filter(([, a]) => Se(n.props, a.prop) === void 0 ? !1 : !a.expiresAt || a.expiresAt > Date.now()).map(([a]) => a);
    return i.length > 0 && (t["X-Inertia-Except-Once-Props"] = i.join(",")), t;
  }
}, Yi = class {
  constructor({ maxConcurrent: e, interruptible: t }) {
    re(this, "requests", []);
    re(this, "maxConcurrent");
    re(this, "interruptible");
    this.maxConcurrent = e, this.interruptible = t;
  }
  send(e) {
    this.requests.push(e), e.send().finally(() => {
      this.requests = this.requests.filter((t) => t !== e);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: !0 }, !1);
  }
  cancelInFlight(e = {}) {
    const t = typeof e == "function" ? e : (n) => {
      const { prefetch: i = !0, optimistic: a = !0 } = e;
      return (i || !n.isPrefetch()) && (a || !n.isOptimistic());
    };
    this.requests.filter(t).forEach((n) => n.cancel({ cancelled: !0 }));
  }
  cancel({ cancelled: e = !1, interrupted: t = !1 } = {}, n = !1) {
    if (!n && !this.shouldCancel())
      return;
    const i = this.requests.shift();
    i == null || i.cancel({ cancelled: e, interrupted: t });
  }
  shouldCancel() {
    return this.interruptible && this.requests.length >= this.maxConcurrent;
  }
  hasPendingOptimistic() {
    return this.requests.some((e) => e.isPendingOptimistic());
  }
}, Xe = () => {
}, qu = class {
  constructor() {
    re(this, "syncRequestStream", new Yi({
      maxConcurrent: 1,
      interruptible: !0
    }));
    re(this, "asyncRequestStream", new Yi({
      maxConcurrent: 1 / 0,
      interruptible: !1
    }));
    re(this, "clientVisitQueue", new Pn());
    re(this, "pendingOptimisticCallback");
  }
  init({
    initialPage: e,
    resolveComponent: t,
    swapComponent: n,
    onFlash: i
  }) {
    J.init({
      initialPage: e,
      resolveComponent: t,
      swapComponent: n,
      onFlash: i
    }), wu.handle(), wt.init(), wt.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), wt.on("loadDeferredProps", (a) => {
      this.loadDeferredProps(a);
    }), wt.on("historyQuotaExceeded", (a) => {
      window.location.href = a;
    });
  }
  optimistic(e) {
    return this.pendingOptimisticCallback = e, this;
  }
  get(e, t = {}, n = {}) {
    return this.visit(e, { ...n, method: "get", data: t });
  }
  post(e, t = {}, n = {}) {
    return this.visit(e, { preserveState: !0, ...n, method: "post", data: t });
  }
  put(e, t = {}, n = {}) {
    return this.visit(e, { preserveState: !0, ...n, method: "put", data: t });
  }
  patch(e, t = {}, n = {}) {
    return this.visit(e, { preserveState: !0, ...n, method: "patch", data: t });
  }
  delete(e, t = {}) {
    return this.visit(e, { preserveState: !0, ...t, method: "delete" });
  }
  reload(e = {}) {
    return this.doReload(e);
  }
  doReload(e = {}) {
    if (!(typeof window > "u"))
      return this.visit(window.location.href, {
        ...e,
        preserveScroll: !0,
        preserveState: !0,
        async: !0,
        headers: {
          ...e.headers || {},
          "Cache-Control": "no-cache"
        }
      });
  }
  remember(e, t = "default") {
    ve.remember(e, t);
  }
  restore(e = "default") {
    return ve.restore(e);
  }
  on(e, t) {
    return typeof window > "u" ? () => {
    } : wt.onGlobalEvent(e, t);
  }
  once(e, t) {
    if (typeof window > "u")
      return () => {
      };
    const n = this.on(e, (i) => (n(), t(i)));
    return n;
  }
  hasPendingOptimistic() {
    return this.asyncRequestStream.hasPendingOptimistic();
  }
  get activePolls() {
    return Xi.count;
  }
  cancelAll({ async: e = !0, prefetch: t = !0, sync: n = !0 } = {}) {
    e && this.asyncRequestStream.cancelInFlight({ prefetch: t }), n && this.syncRequestStream.cancelInFlight();
  }
  poll(e, t = {}, n = {}) {
    return Xi.add(
      e,
      ({ onStart: i, onFinish: a }) => {
        const f = typeof t == "function" ? t() : t;
        this.doReload({
          poll: !0,
          preserveErrors: !0,
          ...f,
          onCancelToken: (u) => {
            var v;
            i(u.cancel), (v = f.onCancelToken) == null || v.call(f, u);
          },
          onFinish: (u) => {
            var v;
            a(), (v = f.onFinish) == null || v.call(f, u);
          }
        });
      },
      {
        autoStart: n.autoStart ?? !0,
        keepAlive: n.keepAlive ?? !1,
        mode: n.mode
      }
    );
  }
  visit(e, t = {}) {
    t.optimistic = t.optimistic ?? this.pendingOptimisticCallback, this.pendingOptimisticCallback = void 0, t.optimistic && (t.async = t.async ?? !0);
    const n = this.getPendingVisit(e, {
      ...t,
      showProgress: t.showProgress ?? (!t.async || !!t.optimistic)
    }), i = this.getVisitEvents(t);
    if (i.onBefore(n) === !1 || !Ii(n))
      return;
    const a = it(J.get().url);
    (n.only.length > 0 || n.except.length > 0 || n.reset.length > 0 ? ps(n.url, a) : fn(n.url, a)) || this.asyncRequestStream.cancelInFlight(
      (w) => !w.isPrefetch() && !w.isOptimistic() && ps(w.getUrl(), a)
    ), n.async || this.syncRequestStream.interruptInFlight(), t.optimistic && this.applyOptimisticUpdate(t.optimistic, i), !J.isCleared() && !n.preserveUrl && Ge.save();
    const v = {
      ...n,
      ...i
    }, m = () => {
      const w = bt.get(v);
      w ? (Qn.reveal(w.inFlight), bt.use(w, v)) : (Qn.reveal(!0), (n.async ? this.asyncRequestStream : this.syncRequestStream).send(Ji.create(v, J.get(), { optimistic: !!t.optimistic })));
    };
    Array.isArray(n.component) && (console.error(
      `The "component" prop received an array of components (${n.component.join(", ")}), but only a single component string is supported for instant visits. Pass an explicit component name instead.`
    ), n.component = null), n.component ? ve.processQueue().then(() => {
      this.performInstantSwap(n).then(() => {
        v.preserveScroll = !0, v.preserveState = !0, v.replace = !0, v.viewTransition = !1, m();
      });
    }) : m();
  }
  getCached(e, t = {}) {
    return bt.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    bt.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    bt.removeAll();
  }
  flushByCacheTags(e) {
    bt.removeByTags(Array.isArray(e) ? e : [e]);
  }
  getPrefetching(e, t = {}) {
    return bt.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, n = {}) {
    if ((t.method ?? (ut(e) ? e.method : "get")) !== "get")
      throw new Error("Prefetch requests must use the GET method");
    const a = this.getPendingVisit(e, {
      ...t,
      async: !0,
      showProgress: !1,
      prefetch: !0,
      viewTransition: !1
    }), f = a.url.origin + a.url.pathname + a.url.search, u = window.location.origin + window.location.pathname + window.location.search;
    if (f === u)
      return;
    const v = this.getVisitEvents(t);
    if (v.onBefore(a) === !1 || !Ii(a))
      return;
    Qn.hide(), this.asyncRequestStream.interruptInFlight();
    const m = {
      ...a,
      ...v
    };
    new Promise((y) => {
      const x = () => {
        J.get() ? y() : setTimeout(x, 50);
      };
      x();
    }).then(() => {
      bt.add(
        m,
        (y) => {
          this.asyncRequestStream.send(Ji.create(y, J.get()));
        },
        {
          cacheFor: Wt.get("prefetch.cacheFor"),
          cacheTags: [],
          ...n
        }
      );
    });
  }
  clearHistory() {
    ve.clear();
  }
  decryptHistory() {
    return ve.decrypt();
  }
  resolveComponent(e, t) {
    return J.resolve(e, t);
  }
  replace(e) {
    this.clientVisit(e, { replace: !0 });
  }
  replaceProp(e, t, n) {
    this.replace({
      preserveScroll: !0,
      preserveState: !0,
      props(i) {
        const a = typeof t == "function" ? t(Se(i, e), i) : t;
        return nu(i, e, a);
      },
      ...n || {}
    });
  }
  appendToProp(e, t, n) {
    this.replaceProp(
      e,
      (i, a) => {
        const f = typeof t == "function" ? t(i, a) : t;
        return Array.isArray(i) || (i = i !== void 0 ? [i] : []), [...i, f];
      },
      n
    );
  }
  prependToProp(e, t, n) {
    this.replaceProp(
      e,
      (i, a) => {
        const f = typeof t == "function" ? t(i, a) : t;
        return Array.isArray(i) || (i = i !== void 0 ? [i] : []), [f, ...i];
      },
      n
    );
  }
  push(e) {
    this.clientVisit(e);
  }
  flash(e, t) {
    const n = J.get().flash;
    let i;
    if (typeof e == "function")
      i = e(n);
    else if (typeof e == "string")
      i = { ...n, [e]: t };
    else if (e && Object.keys(e).length)
      i = { ...n, ...e };
    else
      return;
    J.setFlash(i), Object.keys(i).length && cn(i);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    this.clientVisitQueue.add(() => this.performClientVisit(e, { replace: t }));
  }
  performClientVisit(e, { replace: t = !1 } = {}) {
    const n = J.get(), i = typeof e.props == "function" ? Object.fromEntries(
      Object.values(n.onceProps ?? {}).map((X) => [
        X.prop,
        Se(n.props, X.prop)
      ])
    ) : {}, a = typeof e.props == "function" ? e.props(n.props, i) : e.props ?? n.props, f = typeof e.flash == "function" ? e.flash(n.flash) : e.flash, { viewTransition: u, onError: v, onFinish: m, onFlash: w, onSuccess: y, ...x } = e, A = {
      ...n,
      ...x,
      flash: f ?? {},
      props: a
    }, N = Jr.resolvePreserveOption(e.preserveScroll ?? !1, A), F = Jr.resolvePreserveOption(e.preserveState ?? !1, A), _ = this.createVisitId();
    return J.set(A, {
      replace: t,
      preserveScroll: N,
      preserveState: F,
      viewTransition: u,
      visitId: _
    }).then(() => {
      $c(J.get(), { replace: t, visitId: _ });
      const X = J.get().flash;
      Object.keys(X).length > 0 && (cn(X), w == null || w(X));
      const k = J.get().props.errors || {};
      if (Object.keys(k).length === 0) {
        y == null || y(J.get());
        return;
      }
      const q = e.errorBag ? k[e.errorBag || ""] || {} : k;
      v == null || v(q);
    }).finally(() => m == null ? void 0 : m(e));
  }
  performInstantSwap(e) {
    const t = J.get(), n = Object.fromEntries(
      (t.sharedProps ?? []).filter((v) => v in t.props).map((v) => [v, t.props[v]])
    ), i = typeof e.pageProps == "function" ? e.pageProps(Ae(t.props), Ae(n)) : e.pageProps, a = i !== null ? { ...i } : { ...n }, f = this.preserveOncePropsOnInstantVisit(t, a), u = {
      component: e.component,
      url: e.url.pathname + e.url.search + e.url.hash,
      version: t.version,
      props: {
        ...a,
        errors: {}
      },
      flash: {},
      rescuedProps: [],
      clearHistory: !1,
      encryptHistory: t.encryptHistory,
      sharedProps: t.sharedProps,
      onceProps: f,
      rememberedState: {}
    };
    return J.set(u, {
      replace: e.replace,
      preserveScroll: Jr.resolvePreserveOption(e.preserveScroll, u),
      preserveState: !1,
      viewTransition: e.viewTransition,
      visitId: e.id
    });
  }
  /**
   * Once props are remembered client-side, so the placeholder page must preserve their values
   * and registry. Otherwise the swap discards the value, and an in-flight prefetch that already
   * claimed the prop resolves with nothing to restore it from.
   */
  preserveOncePropsOnInstantVisit(e, t) {
    const n = {};
    return Object.entries(e.onceProps ?? {}).forEach(([i, a]) => {
      if (Se(t, a.prop) !== void 0)
        return;
      const f = Se(e.props, a.prop);
      f !== void 0 && (Je(t, a.prop, f), n[i] = a);
    }), n;
  }
  getPrefetchParams(e, t) {
    return {
      ...this.getPendingVisit(e, {
        ...t,
        async: !0,
        showProgress: !1,
        prefetch: !0,
        viewTransition: !1
      }),
      ...this.getVisitEvents(t)
    };
  }
  createVisitId() {
    return Qr();
  }
  getPendingVisit(e, t) {
    if (ut(e)) {
      const m = e;
      e = m.url, t.method = t.method ?? m.method;
    }
    const n = Wt.get("visitOptions"), i = n ? n(e.toString(), Ae(t)) || {} : {}, a = {
      method: "get",
      data: {},
      replace: !1,
      preserveScroll: !1,
      preserveState: !1,
      only: [],
      except: [],
      headers: {},
      errorBag: "",
      forceFormData: !1,
      queryStringArrayFormat: "brackets",
      async: !1,
      showProgress: !0,
      fresh: !1,
      reset: [],
      preserveUrl: !1,
      preserveErrors: !1,
      prefetch: !1,
      invalidateCacheTags: [],
      viewTransition: !1,
      component: null,
      pageProps: null,
      cached: !1,
      ...$i(t),
      ...$i(i)
    }, [f, u] = pu(
      e,
      a.data,
      a.method,
      a.forceFormData,
      a.queryStringArrayFormat
    ), v = {
      id: this.createVisitId(),
      cancelled: !1,
      completed: !1,
      interrupted: !1,
      ...a,
      url: f,
      data: u
    };
    return v.prefetch && (v.headers.Purpose = "prefetch"), v;
  }
  getVisitEvents(e) {
    return {
      onCancelToken: e.onCancelToken || Xe,
      onBefore: e.onBefore || Xe,
      onBeforeUpdate: e.onBeforeUpdate || Xe,
      onStart: e.onStart || Xe,
      onProgress: e.onProgress || Xe,
      onFinish: e.onFinish || Xe,
      onCancel: e.onCancel || Xe,
      onSuccess: e.onSuccess || Xe,
      onError: e.onError || Xe,
      onHttpException: e.onHttpException || Xe,
      onNetworkError: e.onNetworkError || Xe,
      onFlash: e.onFlash || Xe,
      onPrefetched: e.onPrefetched || Xe,
      onPrefetching: e.onPrefetching || Xe
    };
  }
  applyOptimisticUpdate(e, t) {
    const n = J.get().props, i = e(Ae(n));
    if (!i)
      return;
    const a = [];
    for (const y of Object.keys(i))
      ft(n[y], i[y]) || a.push(y);
    if (a.length === 0)
      return;
    const f = J.nextOptimisticId(), u = J.get().component;
    for (const y of a)
      J.setBaseline(y, Ae(n[y]));
    J.registerOptimistic(f, e), J.setPropsQuietly({ ...n, ...i });
    let v = !0;
    const m = t.onSuccess;
    t.onSuccess = (y) => (v = !1, m(y));
    const w = t.onFinish;
    t.onFinish = (y) => {
      if (J.unregisterOptimistic(f), v && J.get().component === u) {
        const x = J.replayOptimistics();
        Object.keys(x).length > 0 && J.setPropsQuietly({ ...J.get().props, ...x });
      }
      return J.pendingOptimisticCount() === 0 && J.clearOptimisticState(), w(y);
    };
  }
  loadDeferredProps(e) {
    e && Object.values(e).forEach((t) => {
      this.doReload({ only: t, deferredProps: !0, preserveErrors: !0 });
    });
  }
}, dn = class {
  /**
   * Creates a callback that returns a UrlMethodPair.
   *
   * createWayfinderCallback(urlMethodPair)
   * createWayfinderCallback(method, url)
   * createWayfinderCallback(() => urlMethodPair)
   * createWayfinderCallback(() => method, () => url)
   */
  static createWayfinderCallback(...e) {
    return () => e.length === 1 ? ut(e[0]) ? e[0] : e[0]() : {
      method: typeof e[0] == "function" ? e[0]() : e[0],
      url: typeof e[1] == "function" ? e[1]() : e[1]
    };
  }
  /**
   * Parses all useForm() arguments into { rememberKey, data, precognitionEndpoint }.
   *
   * useForm()
   * useForm(data)
   * useForm(rememberKey, data)
   * useForm(method, url, data)
   * useForm(urlMethodPair, data)
   *
   */
  static parseUseFormArguments(...e) {
    return e.length === 0 ? {
      rememberKey: null,
      data: {},
      precognitionEndpoint: null
    } : e.length === 1 ? {
      rememberKey: null,
      data: e[0],
      precognitionEndpoint: null
    } : e.length === 2 ? typeof e[0] == "string" ? {
      rememberKey: e[0],
      data: e[1],
      precognitionEndpoint: null
    } : {
      rememberKey: null,
      data: e[1],
      precognitionEndpoint: this.createWayfinderCallback(e[0])
    } : {
      rememberKey: null,
      data: e[2],
      precognitionEndpoint: this.createWayfinderCallback(e[0], e[1])
    };
  }
  /**
   * Parses all submission arguments into { method, url, options }.
   * It uses the Precognition endpoint if no explicit method/url are provided.
   *
   * form.submit(method, url)
   * form.submit(method, url, options)
   * form.submit(urlMethodPair)
   * form.submit(urlMethodPair, options)
   * form.submit()
   * form.submit(options)
   */
  static parseSubmitArguments(e, t) {
    return e.length === 3 || e.length === 2 && typeof e[0] == "string" ? { method: e[0], url: e[1], options: e[2] ?? {} } : ut(e[0]) ? { ...e[0], options: e[1] ?? {} } : { ...t(), options: e[0] ?? {} };
  }
  /**
   * Merges headers into the Precognition validate() arguments.
   */
  static mergeHeadersForValidation(e, t, n) {
    const i = (a) => (a.headers = {
      ...n ?? {},
      ...a.headers ?? {}
    }, a);
    return e && typeof e == "object" && !("target" in e) ? e = i(e) : t && typeof t == "object" ? t = i(t) : typeof e == "string" ? t = i(t ?? {}) : e = i(e ?? {}), [e, t];
  }
};
function Fu(e) {
  if (!e.includes("."))
    return e;
  const t = (n) => n.startsWith("[") && n.endsWith("]") ? n : n.split(".").reduce((i, a, f) => f === 0 ? a : `${i}[${a}]`);
  return e.replace(/\\\./g, "__ESCAPED_DOT__").split(/(\[[^\]]*\])/).filter(Boolean).map(t).join("").replace(/__ESCAPED_DOT__/g, ".");
}
function Bu(e) {
  const t = [], n = /([^\[\]]+)|\[(\d*)\]/g;
  let i;
  for (; (i = n.exec(e)) !== null; )
    i[1] !== void 0 ? t.push(i[1]) : i[2] !== void 0 && t.push(i[2] === "" ? "" : Number(i[2]));
  return t;
}
function ju(e, t, n) {
  let i = e;
  for (let a = 0; a < t.length - 1; a++)
    t[a] in i || (i[t[a]] = {}), i = i[t[a]];
  i[t[t.length - 1]] = n;
}
function Iu(e) {
  const t = Object.keys(e), n = t.filter((i) => /^\d+$/.test(i)).map(Number).sort((i, a) => i - a);
  return t.length === n.length && n.length > 0 && n[0] === 0 && n.every((i, a) => i === a);
}
function Zr(e) {
  if (Array.isArray(e))
    return e.map(Zr);
  if (typeof e != "object" || e === null || Ns(e))
    return e;
  if (Iu(e)) {
    const n = [];
    for (let i = 0; i < Object.keys(e).length; i++)
      n[i] = Zr(e[i]);
    return n;
  }
  const t = {};
  for (const n in e)
    t[n] = Zr(e[n]);
  return t;
}
function Zi(e) {
  const t = {};
  for (const [n, i] of e.entries()) {
    if (i instanceof File && i.size === 0 && i.name === "")
      continue;
    const a = Bu(Fu(n));
    if (a[a.length - 1] === "") {
      const f = a.slice(0, -1), u = Se(t, f);
      if (Array.isArray(u))
        u.push(i);
      else if (u && typeof u == "object" && !Ns(u)) {
        const v = Object.keys(u).filter((m) => /^\d+$/.test(m)).map(Number).sort((m, w) => m - w);
        Je(t, f, v.length > 0 ? [...v.map((m) => u[m]), i] : [i]);
      } else
        Je(t, f, [i]);
      continue;
    }
    ju(t, a.map(String), i);
  }
  return Zr(t);
}
var br = "server";
function Mu(e, t) {
  return e.match(/\sdata-inertia(=|\s|>)/) ? e : e.replace(/^<([a-zA-Z][^\s/>]*)/, `<$1 data-inertia="server-head-${t}"`);
}
function eo(e, t) {
  if (!t)
    return [];
  const n = typeof t == "function" ? t(e) : e.props[t === !0 ? "head" : t];
  return Array.isArray(n) ? n.map((i) => typeof i == "string" ? i.trim() : i).filter((i) => typeof i == "string" && i.length > 0).map(Mu) : [];
}
var $u = {
  buildDOMElement(e) {
    const t = document.createElement("template");
    t.innerHTML = e;
    const n = t.content.firstChild;
    if (!e.startsWith("<script "))
      return n;
    const i = document.createElement("script");
    return i.innerHTML = n.innerHTML, n.getAttributeNames().forEach((a) => {
      i.setAttribute(a, n.getAttribute(a) || "");
    }), i;
  },
  isInertiaManagedElement(e) {
    return e.nodeType === Node.ELEMENT_NODE && e.getAttribute("data-inertia") !== null;
  },
  findMatchingElementIndex(e, t) {
    const n = e.getAttribute("data-inertia");
    return n !== null ? t.findIndex((i) => i.getAttribute("data-inertia") === n) : -1;
  },
  update: Er(function(e) {
    const t = e.map((i) => this.buildDOMElement(i)), n = Array.from(document.head.childNodes).filter(
      (i) => this.isInertiaManagedElement(i)
    );
    t.some((i) => i instanceof HTMLTitleElement) && document.head.querySelectorAll("title:not([data-inertia])").forEach((i) => i.remove()), n.forEach((i) => {
      const a = this.findMatchingElementIndex(i, t);
      if (a === -1) {
        i.remove();
        return;
      }
      const f = t.splice(a, 1)[0];
      f && !i.isEqualNode(f) && i.replaceWith(f);
    }), t.forEach((i) => {
      document.head.appendChild(i);
    });
  }, 1)
};
function Uu(e, t, n, i = []) {
  const a = i.length ? { [br]: i } : {};
  let f = 0;
  function u() {
    const N = f += 1;
    return a[N] = [], N.toString();
  }
  function v(N) {
    N === null || Object.keys(a).indexOf(N) === -1 || (delete a[N], A());
  }
  function m(N) {
    Object.keys(a).indexOf(N) === -1 && (a[N] = []);
  }
  function w(N, F = []) {
    N !== null && Object.keys(a).indexOf(N) > -1 && (a[N] = F), A();
  }
  function y(N = []) {
    N.length ? a[br] = N : delete a[br], A();
  }
  function x() {
    const N = t(""), F = a[br] || [], _ = Object.keys(a).filter((q) => q !== br).flatMap((q) => a[q]), X = {
      ...N ? { title: `<title data-inertia="">${N}</title>` } : {}
    }, k = F.concat(_).reduce((q, j) => {
      if (j.indexOf("<") === -1)
        return q;
      if (j.indexOf("<title ") === 0) {
        const Z = j.match(/(<title [^>]+>)(.*?)(<\/title>)/s);
        return q.title = Z ? `${Z[1]}${t(Z[2])}${Z[3]}` : j, q;
      }
      const I = j.match(/ data-inertia=(["'])[^"']+\1/);
      return I ? q[I[0]] = j : q[Object.keys(q).length] = j, q;
    }, X);
    return Object.values(k);
  }
  function A() {
    e ? n(x()) : $u.update(x());
  }
  return A(), {
    forceUpdate: A,
    updateServerHead: y,
    createProvider: function() {
      const N = u();
      return {
        reconnect: () => m(N),
        update: (F) => w(N, F),
        disconnect: () => v(N)
      };
    }
  };
}
var Wu = "X-Inertia-Infinite-Scroll-Merge-Intent", Vu = (e) => {
  const t = () => {
    var q;
    const k = (q = J.get().scrollProps) == null ? void 0 : q[e.getPropName()];
    if (k)
      return k;
    throw new Error(`The page object does not contain a scroll prop named "${e.getPropName()}".`);
  }, n = {
    component: null,
    loading: !1,
    previousPage: null,
    nextPage: null,
    lastLoadedPage: null,
    requestCount: 0
  }, i = () => {
    const k = t();
    n.component = J.get().component, n.loading = !1, n.previousPage = k.previousPage, n.nextPage = k.nextPage, n.lastLoadedPage = k.currentPage, n.requestCount = 0;
  }, a = () => `inertia:infinite-scroll-data:${e.getPropName()}`;
  if (typeof window < "u") {
    i();
    const k = be.restore(a());
    k && typeof k == "object" && k.lastLoadedPage === t().currentPage && (n.previousPage = k.previousPage, n.nextPage = k.nextPage, n.lastLoadedPage = k.lastLoadedPage, n.requestCount = k.requestCount || 0);
  }
  const f = be.on("success", (k) => {
    var q;
    n.component === k.detail.page.component && t().reset && (i(), (q = e.onReset) == null || q.call(e));
  }), u = (k) => k === "next" ? "nextPage" : "previousPage", v = (k) => {
    const q = u(k);
    return n[q];
  }, m = (k) => {
    const q = t(), j = u(k);
    n.lastLoadedPage = q.currentPage, n[j] = q[j], n.requestCount += 1, be.remember(
      {
        previousPage: n.previousPage,
        nextPage: n.nextPage,
        lastLoadedPage: n.lastLoadedPage,
        requestCount: n.requestCount
      },
      a()
    );
  }, w = () => t().pageName, y = () => n.requestCount, x = (k, q = {}) => {
    const j = v(k);
    n.loading || j === null || (n.loading = !0, be.reload({
      preserveErrors: !0,
      ...q,
      data: { ...q.data || {}, [w()]: j },
      only: [...q.only || [], e.getPropName()],
      preserveUrl: !0,
      // we handle URL updates manually via useInfiniteScrollQueryString()
      headers: {
        [Wu]: k === "previous" ? "prepend" : "append",
        ...q.headers
      },
      onBefore: (I) => {
        var Z;
        k === "next" ? e.onBeforeNextRequest() : e.onBeforePreviousRequest(), (Z = q.onBefore) == null || Z.call(q, I);
      },
      onBeforeUpdate: (I) => {
        var Z;
        e.onBeforeUpdate(), (Z = q.onBeforeUpdate) == null || Z.call(q, I);
      },
      onSuccess: (I) => {
        var Z;
        m(k), (Z = q.onSuccess) == null || Z.call(q, I);
      },
      onFinish: (I) => {
        var U;
        n.loading = !1;
        const Z = I.completed, l = Z ? n.lastLoadedPage : null;
        k === "next" ? e.onCompleteNextRequest(l, { page: l, completed: Z }) : e.onCompletePreviousRequest(l, { page: l, completed: Z }), (U = q.onFinish) == null || U.call(q, I);
      }
    }));
  };
  return {
    getLastLoadedPage: () => n.lastLoadedPage,
    getPageName: w,
    getRequestCount: y,
    hasPrevious: () => !!n.previousPage,
    hasNext: () => !!n.nextPage,
    fetchNext: (k) => x("next", k),
    fetchPrevious: (k) => x("previous", k),
    removeEventListener: f
  };
}, Ku = () => {
  const e = [];
  return {
    new: (i, a = {}) => {
      const f = new IntersectionObserver((u) => {
        for (const v of u)
          v.isIntersecting && i(v);
      }, a);
      return e.push(f), f;
    },
    flushAll: () => {
      e.forEach((i) => i.disconnect()), e.length = 0;
    }
  };
}, en = "infiniteScrollPage", Gn = "infiniteScrollIgnore", la = (e) => e.dataset[en], Xu = (e) => {
  const t = Ku();
  let n, i, a, f, u = !1;
  const v = () => {
    f = new MutationObserver((U) => {
      U.forEach((ne) => {
        ne.addedNodes.forEach((K) => {
          K.nodeType === Node.ELEMENT_NODE && A.add(K);
        });
      }), I();
    }), f.observe(e.getItemsElement(), { childList: !0 }), n = t.new(
      (U) => e.onItemIntersected(U.target)
    );
    const l = {
      root: e.getScrollableParent(),
      rootMargin: `${Math.max(1, e.getTriggerMargin())}px`
    };
    i = t.new(e.onPreviousTriggered, l), a = t.new(e.onNextTriggered, l);
  }, m = () => {
    u && w();
    const l = e.getStartElement(), U = e.getEndElement();
    l && e.shouldFetchPrevious() && i.observe(l), U && e.shouldFetchNext() && a.observe(U), u = !0;
  }, w = () => {
    u && (i.disconnect(), a.disconnect(), u = !1);
  }, y = () => {
    u && m();
  }, x = () => {
    w(), t.flushAll(), f == null || f.disconnect();
  }, A = /* @__PURE__ */ new Set(), N = (l) => !(en in l.dataset) && !(Gn in l.dataset), F = () => {
    Array.from(A).forEach((l) => {
      N(l) && (l.dataset[Gn] = "true"), n.observe(l);
    }), A.clear();
  }, _ = (l) => Array.from(
    l.querySelectorAll(
      ":scope > *:not([data-infinite-scroll-page]):not([data-infinite-scroll-ignore])"
    )
  );
  let X = !1;
  const k = (l) => {
    !X && (X = !0, Z()) || (_(e.getItemsElement()).forEach((U) => {
      N(U) && (U.dataset[en] = (l == null ? void 0 : l.toString()) || "1"), n.observe(U);
    }), j());
  }, q = () => `inertia:infinite-scroll-elements:${e.getPropName()}`, j = () => {
    const l = {}, U = e.getItemsElement().childNodes;
    for (let ne = 0; ne < U.length; ne++) {
      const K = U[ne];
      if (K.nodeType !== Node.ELEMENT_NODE)
        continue;
      const V = la(K);
      typeof V > "u" || (V in l ? l[V].to = ne : l[V] = { from: ne, to: ne });
    }
    be.remember(l, q());
  }, I = Er(j, 250), Z = () => {
    const l = be.restore(q());
    if (!l || typeof l != "object")
      return !1;
    const U = e.getItemsElement().childNodes;
    for (let ne = 0; ne < U.length; ne++) {
      const K = U[ne];
      if (K.nodeType !== Node.ELEMENT_NODE)
        continue;
      const V = K;
      let te;
      for (const [S, p] of Object.entries(l))
        if (ne >= p.from && ne <= p.to) {
          te = S;
          break;
        }
      if (te)
        V.dataset[en] = te;
      else if (N(V))
        V.dataset[Gn] = "true";
      else
        continue;
      n.observe(V);
    }
    return !0;
  };
  return {
    setupObservers: v,
    enableTriggers: m,
    disableTriggers: w,
    refreshTriggers: y,
    flushAll: x,
    processManuallyAddedElements: F,
    processServerLoadedElements: k
  };
}, zu = new Pn(), nr, Dt, Wr = null, Gu = (e) => {
  let t = !0;
  const n = (a) => {
    zu.add(() => new Promise((f) => {
      if (!t)
        return nr = Dt = null, f();
      if (!nr || !Dt) {
        const m = J.get().url;
        nr = it(m), Dt = it(m), Wr = ta(m);
      }
      const u = e.getPageName(), v = Dt.searchParams;
      a === "1" ? v.delete(u) : v.set(u, a), setTimeout(() => f());
    })).finally(() => {
      t && nr && Dt && nr.href !== Dt.href && Wr !== null && be.replace({
        url: gu(Dt, Wr),
        preserveScroll: !0,
        preserveState: !0
      }), nr = Dt = Wr = null;
    });
  };
  return {
    onItemIntersected: Er((a) => {
      var y;
      const f = e.getItemsElement();
      if (!t || e.shouldPreserveUrl() || !a || !f)
        return;
      const u = /* @__PURE__ */ new Map(), v = [...f.children];
      Qo(v, a).forEach((x) => {
        const A = la(x) ?? "1";
        u.has(A) ? u.set(A, u.get(A) + 1) : u.set(A, 1);
      });
      const w = (y = Array.from(u.entries()).sort((x, A) => A[1] - x[1])[0]) == null ? void 0 : y[0];
      w !== void 0 && n(w);
    }, 250),
    cancel: () => t = !1
  };
}, Qu = (e) => ({
  createCallbacks: () => {
    let n, i = null, a = 0;
    return {
      captureScrollPosition: () => {
        const v = e.getScrollableParent(), m = e.getItemsElement();
        n = (v == null ? void 0 : v.scrollTop) || window.scrollY;
        const w = Qo([...m.children]);
        if (w.length > 0) {
          i = w[0];
          const y = (v == null ? void 0 : v.getBoundingClientRect()) || { top: 0 }, x = v ? y.top : 0;
          a = i.getBoundingClientRect().top - x;
        }
      },
      restoreScrollPosition: () => {
        if (!i)
          return;
        let v = 0, m = !1;
        const w = () => {
          if (v++, m || v > 10)
            return !1;
          const y = e.getScrollableParent(), x = (y == null ? void 0 : y.getBoundingClientRect()) || { top: 0 }, A = y ? x.top : 0, _ = i.getBoundingClientRect().top - A - a;
          if (_ === 0) {
            window.requestAnimationFrame(w);
            return;
          }
          y ? y.scrollTo({ top: n + _ }) : window.scrollTo(0, window.scrollY + _), m = !0;
        };
        window.requestAnimationFrame(w);
      }
    };
  }
});
function Ju(e) {
  const t = Gu({ ...e, getPageName: () => a.getPageName() }), n = Qu(e), i = Xu({
    ...e,
    // As items enter viewport, update URL to reflect the most visible page
    onItemIntersected: t.onItemIntersected,
    onPreviousTriggered: () => a.fetchPrevious(),
    onNextTriggered: () => a.fetchNext()
  }), a = Vu({
    ...e,
    // Before updating page data, tag any manually added DOM elements
    // so they don't get confused with server-loaded content
    onBeforeUpdate: i.processManuallyAddedElements,
    // After successful request, tag new server content
    onCompletePreviousRequest: (w, y) => {
      e.onCompletePreviousRequest(y), y.completed && Cr(() => i.processServerLoadedElements(y.page), 2);
    },
    onCompleteNextRequest: (w, y) => {
      e.onCompleteNextRequest(y), y.completed && Cr(() => i.processServerLoadedElements(y.page), 2);
    },
    onReset: e.onDataReset
  }), f = (w) => {
    const { captureScrollPosition: y, restoreScrollPosition: x } = n.createCallbacks(), A = w.onBeforeUpdate || (() => {
    }), N = w.onSuccess || (() => {
    });
    return w.onBeforeUpdate = (F) => {
      A(F), y();
    }, w.onSuccess = (F) => {
      N(F), x();
    }, w;
  }, u = a.fetchNext;
  a.fetchNext = (w = {}) => {
    var y;
    w = { ...(y = e.getReloadOptions) == null ? void 0 : y.call(e), ...w }, e.inReverseMode() && (w = f(w)), u(w);
  };
  const v = a.fetchPrevious;
  a.fetchPrevious = (w = {}) => {
    var y;
    w = { ...(y = e.getReloadOptions) == null ? void 0 : y.call(e), ...w }, e.inReverseMode() || (w = f(w)), v(w);
  };
  const m = be.on("success", () => Cr(i.refreshTriggers, 2));
  return {
    dataManager: a,
    elementManager: i,
    flush: () => {
      m(), a.removeEventListener(), i.flushAll(), t.cancel();
    }
  };
}
function Yu() {
  let e = {}, t = {}, n = { shared: e, named: t };
  const i = /* @__PURE__ */ new Set();
  let a = !1;
  const f = () => {
    n = { shared: e, named: t };
  }, u = () => {
    a || (a = !0, queueMicrotask(() => {
      a = !1, i.forEach((v) => v());
    }));
  };
  return {
    set(v) {
      const m = { ...e, ...v };
      ft(e, m) || (e = m, f(), u());
    },
    setFor(v, m) {
      const w = t[v] || {}, y = { ...w, ...m };
      ft(w, y) || (t = { ...t, [v]: y }, f(), u());
    },
    reset() {
      e = {}, t = {}, f(), u();
    },
    subscribe(v) {
      return i.add(v), () => i.delete(v);
    },
    get: () => n
  };
}
function kr(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Rs(e) {
  return kr(e) && "component" in e;
}
function Ls(e, t) {
  return "component" in e && t(e.component);
}
function ca(e, t) {
  return !kr(e) || t(e) || Ls(e, t) ? !1 : Object.values(e).every(
    (n) => t(n) || Array.isArray(n) && t(n[0]) || Rs(n) && t(n.component)
  );
}
function ua(e, t) {
  return kr(e) && !t(e) && !Ls(e, t) && !ca(e, t);
}
function Zu(e, t) {
  if (ua(e, t))
    return !0;
  if (!kr(e) || t(e) || Ls(e, t))
    return !1;
  const n = Object.values(e);
  return n.length > 0 && n.every((i) => typeof i == "function");
}
function ef(e, t) {
  return Array.isArray(e) && e.length === 2 && t(e[0]) && kr(e[1]) && !t(e[1]);
}
function to(e, t) {
  if (Array.isArray(e) && t(e[0]))
    return { component: e[0], props: e[1] ?? {} };
  if (Rs(e) && t(e.component))
    return { component: e.component, props: e.props ?? {} };
  if (t(e))
    return { component: e, props: {} };
  throw new Error(`Invalid layout definition: received ${typeof e}`);
}
function tf(e, t, n) {
  return !e || n && n(e) ? [] : ca(e, t) ? Object.entries(e).map(([i, a]) => ({ ...to(a, t), name: i })) : ef(e, t) ? [{ component: e[0], props: e[1] ?? {} }] : Array.isArray(e) ? e.map((i) => to(i, t)) : Rs(e) && t(e.component) ? [{ component: e.component, props: e.props ?? {} }] : t(e) ? [{ component: e, props: {} }] : [];
}
function fa(e) {
  return e.target instanceof HTMLElement && e.target.isContentEditable || e.defaultPrevented;
}
function Vr(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "a", n = t ? e.currentTarget.target : "";
  return !(fa(e) || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && n !== "" && n !== "_self" || t && "button" in e && e.button !== 0);
}
function ro(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "button";
  return !fa(e) && (e.key === "Enter" || t && e.key === " ");
}
var De = "nprogress", Vt, xe, Me = {
  minimum: 0.08,
  easing: "linear",
  speed: 200,
  trickle: !0,
  trickleSpeed: 200,
  showSpinner: !0,
  barSelector: '.bar, [role="bar"]',
  spinnerSelector: '.spinner, [role="spinner"]',
  parent: "body",
  color: "#29d",
  includeCSS: !0,
  popover: null,
  template: [
    '<div class="bar">',
    '<div class="peg"></div>',
    "</div>",
    '<div class="spinner">',
    '<div class="spinner-icon"></div>',
    "</div>"
  ].join("")
}, _t = null, hn = !1, rf = (e) => {
  Object.assign(Me, e), Vt = Me.popover ?? "popover" in HTMLElement.prototype, Me.includeCSS && lf(Me.color), xe = document.createElement("div"), xe.id = De, xe.setAttribute("aria-hidden", "true"), xe.innerHTML = Me.template, Vt && (xe.popover = "manual");
}, xn = (e) => {
  const t = da();
  e = ma(e, Me.minimum, 1), _t = e === 1 ? null : e;
  const n = sf(!t), i = n.querySelector(Me.barSelector), a = Me.speed, f = Me.easing;
  n.offsetWidth, af((u) => {
    const v = {
      transition: `all ${a}ms ${f}`,
      transform: `translate3d(${ya(e)}%,0,0)`
    };
    for (const m in v)
      i.style[m] = v[m];
    if (e !== 1)
      return setTimeout(u, a);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${a}ms linear`, n.style.opacity = "0", setTimeout(() => {
        va(), n.style.transition = "", n.style.opacity = "", u();
      }, a);
    }, a);
  });
}, da = () => typeof _t == "number", ha = () => {
  _t || xn(0);
  const e = function() {
    setTimeout(function() {
      _t && (pa(), e());
    }, Me.trickleSpeed);
  };
  Me.trickle && e();
}, nf = (e) => {
  !e && !_t || (pa(0.3 + 0.5 * Math.random()), xn(1));
}, pa = (e) => {
  const t = _t;
  if (t === null)
    return ha();
  if (!(t > 1))
    return e = typeof e == "number" ? e : (() => {
      const n = {
        0.1: [0, 0.2],
        0.04: [0.2, 0.5],
        0.02: [0.5, 0.8],
        5e-3: [0.8, 0.99]
      };
      for (const i in n)
        if (t >= n[i][0] && t < n[i][1])
          return parseFloat(i);
      return 0;
    })(), xn(ma(t + e, 0, 0.994));
}, sf = (e) => {
  var i;
  if (of())
    return document.getElementById(De);
  document.documentElement.classList.add(`${De}-busy`);
  const t = xe.querySelector(Me.barSelector), n = e ? "-100" : ya(_t || 0);
  if (t.style.transition = "all 0 linear", t.style.transform = `translate3d(${n}%,0,0)`, Me.showSpinner || (i = xe.querySelector(Me.spinnerSelector)) == null || i.remove(), Vt)
    document.body.appendChild(xe), hn || xe.showPopover();
  else {
    const a = ga();
    a !== document.body && a.classList.add(`${De}-custom-parent`), a.appendChild(xe), hn && (xe.style.display = "none");
  }
  return xe;
}, ga = () => document.querySelector(Me.parent), va = () => {
  if (document.documentElement.classList.remove(`${De}-busy`), Vt && (xe != null && xe.isConnected))
    try {
      xe.hidePopover();
    } catch {
    }
  Vt || ga().classList.remove(`${De}-custom-parent`), xe == null || xe.remove();
}, of = () => document.getElementById(De) !== null;
function ma(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var ya = (e) => (-1 + e) * 100, af = /* @__PURE__ */ (() => {
  const e = [], t = () => {
    const n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), lf = (e) => {
  const t = document.createElement("style"), n = Wt.get("nonce");
  n && (t.nonce = n), t.textContent = `
    #${De} {
      pointer-events: none;
      background: none;
      border: none;
      margin: 0;
      padding: 0;
      overflow: visible;
      inset: unset;
      width: 100%;
      height: 0;
      position: fixed;
      top: 0;
      left: 0;
    }

    #${De}::backdrop {
      display: none;
    }

    #${De} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${De} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${De} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${De} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${De}-spinner 400ms linear infinite;
    }

    .${De}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${De}-custom-parent #${De} .spinner,
    .${De}-custom-parent #${De} .bar {
      position: absolute;
    }

    @keyframes ${De}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
}, cf = () => {
  if (hn = !1, !!(xe != null && xe.isConnected))
    if (Vt)
      try {
        xe.showPopover();
      } catch {
      }
    else
      xe.style.display = "";
}, uf = () => {
  if (hn = !0, !!(xe != null && xe.isConnected))
    if (Vt)
      try {
        xe.hidePopover();
      } catch {
      }
    else
      xe.style.display = "none";
}, vt = {
  configure: rf,
  isStarted: da,
  done: nf,
  set: xn,
  remove: va,
  start: ha,
  status: _t,
  show: cf,
  hide: uf
}, ff = class {
  constructor() {
    re(this, "hideCount", 0);
  }
  start() {
    vt.start();
  }
  reveal(e = !1) {
    this.hideCount = Math.max(0, this.hideCount - 1), (e || this.hideCount === 0) && vt.show();
  }
  hide() {
    this.hideCount++, vt.hide();
  }
  set(e) {
    vt.set(Math.max(0, Math.min(1, e)));
  }
  finish() {
    vt.done();
  }
  reset() {
    vt.set(0);
  }
  remove() {
    vt.done(), vt.remove();
  }
  isStarted() {
    return vt.isStarted();
  }
  getStatus() {
    return vt.status;
  }
}, Qn = new ff(), ba = /* @__PURE__ */ Symbol("FormComponentReset");
function ms(e) {
  return e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function df(e, t) {
  const n = e.value, i = e.checked;
  switch (e.type.toLowerCase()) {
    case "checkbox":
      e.checked = t.includes(e.value);
      break;
    case "radio":
      e.checked = t[0] === e.value;
      break;
    case "file":
      e.value = "";
      break;
    case "button":
    case "submit":
    case "reset":
    case "image":
      break;
    default:
      e.value = t[0] !== null && t[0] !== void 0 ? String(t[0]) : "";
  }
  return e.value !== n || e.checked !== i;
}
function hf(e, t) {
  const n = e.value, i = Array.from(e.selectedOptions).map((u) => u.value);
  if (e.multiple) {
    const u = t.map((v) => String(v));
    Array.from(e.options).forEach((v) => {
      v.selected = u.includes(v.value);
    });
  } else
    e.value = t[0] !== void 0 ? String(t[0]) : "";
  const a = Array.from(e.selectedOptions).map((u) => u.value);
  return e.multiple ? JSON.stringify(i.sort()) !== JSON.stringify(a.sort()) : e.value !== n;
}
function Jn(e, t) {
  if (e.disabled) {
    if (e instanceof HTMLInputElement) {
      const n = e.value, i = e.checked;
      switch (e.type.toLowerCase()) {
        case "checkbox":
        case "radio":
          return e.checked = e.defaultChecked, e.checked !== i;
        case "file":
          return e.value = "", n !== "";
        case "button":
        case "submit":
        case "reset":
        case "image":
          return !1;
        default:
          return e.value = e.defaultValue, e.value !== n;
      }
    } else if (e instanceof HTMLSelectElement) {
      const n = Array.from(e.selectedOptions).map((a) => a.value);
      Array.from(e.options).forEach((a) => {
        a.selected = a.defaultSelected;
      });
      const i = Array.from(e.selectedOptions).map((a) => a.value);
      return JSON.stringify(n.sort()) !== JSON.stringify(i.sort());
    } else if (e instanceof HTMLTextAreaElement) {
      const n = e.value;
      return e.value = e.defaultValue, e.value !== n;
    }
    return !1;
  }
  if (e instanceof HTMLInputElement)
    return df(e, t);
  if (e instanceof HTMLSelectElement)
    return hf(e, t);
  if (e instanceof HTMLTextAreaElement) {
    const n = e.value;
    return e.value = t[0] !== void 0 ? String(t[0]) : "", e.value !== n;
  }
  return !1;
}
function pf(e, t) {
  let n = !1;
  return e instanceof RadioNodeList || e instanceof HTMLCollection ? Array.from(e).forEach((i, a) => {
    if (i instanceof Element && ms(i))
      if (i instanceof HTMLInputElement && ["checkbox", "radio"].includes(i.type.toLowerCase()))
        Jn(i, t) && (n = !0);
      else {
        const f = t[a] !== void 0 ? [t[a]] : [t[0] ?? null].filter(Boolean);
        Jn(i, f) && (n = !0);
      }
  }) : ms(e) && (n = Jn(e, t)), n;
}
function gf(e, t, n) {
  if (!e)
    return;
  const i = !n || n.length === 0;
  if (i) {
    const f = new FormData(e), u = Array.from(e.elements).map((v) => ms(v) ? v.name : "").filter(Boolean);
    n = [.../* @__PURE__ */ new Set([...t.keys(), ...f.keys(), ...u])];
  }
  let a = !1;
  n.forEach((f) => {
    const u = e.elements.namedItem(f);
    u && pf(u, t.getAll(f)) && (a = !0);
  }), a && i && e.dispatchEvent(
    new CustomEvent("reset", { bubbles: !0, cancelable: !0, detail: { [ba]: !0 } })
  );
}
var be = new qu();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
var Ar = Yu(), Hs = Pe(Ar.get());
Ar.subscribe(() => {
  Hs.value = Ar.get();
});
function vf() {
  Ar.reset(), Hs.value = Ar.get();
}
function mf(e) {
  const { data: t, rememberKey: n } = e;
  let { precognitionEndpoint: i } = e;
  const a = typeof t == "function", f = () => a ? t() : t, u = n ? be.restore(n) : null, v = (u == null ? void 0 : u.data) ?? Ae(f());
  let m = Ae(v), w = (q) => q, y = null, x = null;
  const A = () => x ?? pn.get("form.withAllErrors");
  let N, F = !1, _ = [];
  const k = lo({
    ...Ae(m),
    isDirty: !1,
    errors: {},
    hasErrors: !1,
    processing: !1,
    progress: null,
    wasSuccessful: !1,
    recentlySuccessful: !1,
    withPrecognition(...q) {
      i = dn.createWayfinderCallback(...q);
      const j = this, I = Lc(
        (l) => {
          const { method: U, url: ne } = i(), K = Ae(w(this.data()));
          return l[U](ne, K);
        },
        Ae(m)
      );
      y = I, I.on("validatingChanged", () => {
        j.validating = I.validating();
      }).on("validatedChanged", () => {
        j.__valid = I.valid();
      }).on("touchedChanged", () => {
        j.__touched = I.touched();
      }).on("errorsChanged", () => {
        const l = A() ? I.errors() : Hc(I.errors());
        this.errors = {}, this.setError(l), j.__valid = I.valid();
      });
      const Z = (l, U) => (U(l), l);
      return Object.assign(j, {
        __touched: [],
        __valid: [],
        validating: !1,
        validator: () => I,
        withAllErrors: () => Z(j, () => x = !0),
        valid: (l) => j.__valid.includes(l),
        invalid: (l) => l in this.errors,
        setValidationTimeout: (l) => Z(j, () => I.setTimeout(l)),
        validateFiles: () => Z(j, () => I.validateFiles()),
        withoutFileValidation: () => Z(j, () => I.withoutFileValidation()),
        touch: (l, ...U) => (Array.isArray(l) ? I.touch(l) : typeof l == "string" ? I.touch([l, ...U]) : I.touch(l), j),
        touched: (l) => typeof l == "string" ? j.__touched.includes(l) : j.__touched.length > 0,
        validate: (l, U) => {
          if (typeof l == "object" && !("target" in l) && (U = l, l = void 0), l === void 0)
            I.validate(U);
          else {
            const ne = Sr(l), K = w(this.data());
            I.validate(ne, Se(K, ne), U);
          }
          return j;
        },
        setErrors: (l) => Z(j, () => this.setError(l)),
        forgetError: (l) => Z(
          j,
          () => this.clearErrors(Sr(l))
        )
      }), j;
    },
    data() {
      return Object.keys(m).reduce((q, j) => Je(q, j, Se(this, j)), {});
    },
    transform(q) {
      return w = q, this;
    },
    defaults(q, j) {
      if (a)
        throw new Error("You cannot call `defaults()` when using a function to define your form data.");
      return F = !0, typeof q > "u" ? (m = Ae(this.data()), this.isDirty = !1) : m = typeof q == "string" ? Je(Ae(m), q, j) : Object.assign({}, Ae(m), q), y == null || y.defaults(m), this;
    },
    reset(...q) {
      const j = a ? Ae(f()) : m, I = Ae(j);
      return q.length === 0 ? (a && (m = I), Object.assign(this, I)) : q.filter((Z) => Bo(I, Z)).forEach((Z) => {
        a && Je(m, Z, Se(I, Z)), Je(this, Z, Se(I, Z));
      }), y == null || y.reset(...q), this;
    },
    setError(q, j) {
      const I = typeof q == "string" ? { [q]: j } : q;
      return Object.assign(this.errors, I), this.hasErrors = Object.keys(this.errors).length > 0, y == null || y.setErrors(I), this;
    },
    clearErrors(...q) {
      return this.errors = Object.keys(this.errors).reduce(
        (j, I) => ({
          ...j,
          ...q.length > 0 && !q.includes(I) ? { [I]: this.errors[I] } : {}
        }),
        {}
      ), this.hasErrors = Object.keys(this.errors).length > 0, y && (q.length === 0 ? y.setErrors({}) : q.forEach(y.forgetError)), this;
    },
    resetAndClearErrors(...q) {
      return this.reset(...q), this.clearErrors(...q), this;
    },
    __rememberable: n === null,
    __remember() {
      const q = this.data();
      if (_.length > 0) {
        const j = { ...q };
        return _.forEach((I) => delete j[I]), { data: j, errors: this.errors };
      }
      return { data: q, errors: this.errors };
    },
    __restore(q) {
      Object.assign(this, q.data), this.setError(q.errors);
    }
  });
  return u != null && u.errors && k.setError(u.errors), Ut(
    k,
    () => {
      k.isDirty = !ft(k.data(), m);
    },
    { immediate: !0, deep: !0 }
  ), Ut(
    k,
    (q) => {
      if (!n)
        return;
      const j = be.restore(n), I = Ae(q.__remember());
      ft(j, I) || be.remember(I, n);
    },
    { immediate: !0, deep: !0 }
  ), i && k.withPrecognition(i), {
    form: k,
    setDefaults: (q) => {
      m = q;
    },
    getTransform: () => w,
    getPrecognitionEndpoint: () => i ?? null,
    markAsSuccessful: () => {
      k.clearErrors(), k.wasSuccessful = !0, k.recentlySuccessful = !0, N = setTimeout(
        () => k.recentlySuccessful = !1,
        pn.get("form.recentlySuccessfulDuration")
      );
    },
    wasDefaultsCalledInOnSuccess: () => F,
    resetDefaultsCalledInOnSuccess: () => {
      F = !1;
    },
    setRememberExcludeKeys: (q) => {
      _ = q;
    },
    resetBeforeSubmit: () => {
      k.wasSuccessful = !1, k.recentlySuccessful = !1, clearTimeout(N);
    },
    finishProcessing: () => {
      k.processing = !1, k.progress = null;
    },
    withAllErrors: {
      enabled: A,
      enable: () => {
        x = !0;
      }
    }
  };
}
var Yn = null, Zn = !1;
function yf(e) {
  if (Zn)
    return;
  Yn === null && (Zn = !0, Yn = new Set(Object.keys(wa({}))), Zn = !1);
  const t = Object.keys(e).filter((n) => Yn.has(n));
  t.length > 0 && console.error(
    `[Inertia] useForm() data contains field(s) that conflict with form properties: ${t.map((n) => `"${n}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`
  );
}
function wa(...e) {
  const { rememberKey: t, data: n, precognitionEndpoint: i } = dn.parseUseFormArguments(...e), a = Ae(typeof n == "function" ? n() : n);
  yf(a);
  let f = null, u = null;
  const {
    form: v,
    setDefaults: m,
    getTransform: w,
    getPrecognitionEndpoint: y,
    markAsSuccessful: x,
    wasDefaultsCalledInOnSuccess: A,
    resetDefaultsCalledInOnSuccess: N,
    setRememberExcludeKeys: F,
    resetBeforeSubmit: _,
    finishProcessing: X
  } = mf({
    data: n,
    rememberKey: t,
    precognitionEndpoint: i
  }), k = v, q = (j) => (I, Z = {}) => {
    k.submit(j, I, Z);
  };
  return Object.assign(k, {
    submit(...j) {
      const { method: I, url: Z, options: l } = dn.parseSubmitArguments(j, y());
      N();
      const U = {
        ...l,
        onCancelToken: (K) => {
          var V;
          return f = K, (V = l.onCancelToken) == null ? void 0 : V.call(l, K);
        },
        onBefore: (K) => {
          var V;
          return _(), (V = l.onBefore) == null ? void 0 : V.call(l, K);
        },
        onStart: (K) => {
          var V;
          return k.processing = !0, (V = l.onStart) == null ? void 0 : V.call(l, K);
        },
        onProgress: (K) => {
          var V;
          return k.progress = K ?? null, (V = l.onProgress) == null ? void 0 : V.call(l, K);
        },
        onSuccess: async (K) => {
          x();
          const V = l.onSuccess ? await l.onSuccess(K) : null;
          return A() || (m(Ae(k.data())), k.isDirty = !1), V;
        },
        onError: (K) => {
          var V;
          return k.clearErrors().setError(K), (V = l.onError) == null ? void 0 : V.call(l, K);
        },
        onCancel: () => {
          var K;
          return (K = l.onCancel) == null ? void 0 : K.call(l);
        },
        onFinish: (K) => {
          var V;
          return X(), f = null, (V = l.onFinish) == null ? void 0 : V.call(l, K);
        }
      };
      U.optimistic = U.optimistic ?? u ?? void 0, u = null;
      const ne = w()(k.data());
      I === "delete" ? be.delete(Z, { ...U, data: ne }) : be[I](Z, ne, U);
    },
    get: q("get"),
    post: q("post"),
    put: q("put"),
    patch: q("patch"),
    delete: q("delete"),
    cancel() {
      f && f.cancel();
    },
    dontRemember(...j) {
      return F(j), k;
    },
    optimistic(j) {
      return u = j, k;
    }
  }), y(), k;
}
function es(e) {
  if (!e)
    return !1;
  if (typeof e == "function")
    return !0;
  if (typeof e == "object") {
    const t = e;
    return typeof t.render == "function" || typeof t.setup == "function" || typeof t.template == "string" || "__file" in t || "__name" in t;
  }
  return !1;
}
function no(e) {
  if (typeof e != "function")
    return !1;
  const t = e;
  return t.length === 2 && typeof t.prototype > "u";
}
var st = Pe(void 0), we = Pe(), ts = null, rs = Fl(null), Kr = Pe(void 0), ys;
Lt({
  name: "Inertia",
  props: {
    initialPage: {
      type: Object,
      required: !0
    },
    initialComponent: {
      type: Object,
      required: !1
    },
    resolveComponent: {
      type: Function,
      required: !1
    },
    titleCallback: {
      type: Function,
      required: !1,
      default: (e) => e
    },
    onHeadUpdate: {
      type: Function,
      required: !1,
      default: () => () => {
      }
    },
    defaultLayout: {
      type: Function,
      required: !1
    },
    serverHead: {
      type: [Boolean, String, Function],
      required: !1
    }
  },
  setup({
    initialPage: e,
    initialComponent: t,
    resolveComponent: n,
    titleCallback: i,
    onHeadUpdate: a,
    defaultLayout: f,
    serverHead: u
  }) {
    st.value = t ? Di(t) : void 0, we.value = { ...e, flash: e.flash ?? {} }, Kr.value = void 0;
    const v = typeof window > "u";
    if (ys = Uu(
      v,
      (m) => i ? i(m, we.value) : m,
      a || (() => {
      }),
      eo(e, u)
    ), !v) {
      be.init({
        initialPage: e,
        resolveComponent: n,
        swapComponent: async (w) => {
          w.preserveState || vf(), st.value = Di(w.component), we.value = w.page, Kr.value = w.preserveState ? Kr.value : Date.now();
        },
        onFlash: (w) => {
          we.value = { ...we.value, flash: w };
        }
      });
      const m = (w) => {
        ys.updateServerHead(eo(w.detail.page, u));
      };
      be.on("navigate", m), be.on("clientVisit", m);
    }
    return () => {
      if (st.value) {
        st.value.inheritAttrs = !!st.value.inheritAttrs;
        const m = Qe(st.value, {
          ...we.value.props,
          key: Kr.value
        });
        if (rs.value && (st.value.layout = rs.value, rs.value = null), st.value.layout && no(st.value.layout))
          return st.value.layout(Qe, m);
        let w, y = null;
        const x = st.value.layout;
        if (typeof x == "function" && x.length <= 1 && typeof x.prototype > "u") {
          const A = x(we.value.props);
          Zu(A, es) ? (w = f == null ? void 0 : f(we.value.component, we.value), y = A) : w = A;
        } else ua(x, es) ? (w = f == null ? void 0 : f(we.value.component, we.value), y = x) : w = x ?? (f == null ? void 0 : f(we.value.component, we.value));
        if (w) {
          let A = tf(
            w,
            es,
            st.value.layout && !y ? no : void 0
          );
          if (y && (A = A.map((N) => ({ ...N, props: { ...N.props, ...y } }))), A.length > 0) {
            const N = v ? { shared: {}, named: {} } : Hs.value;
            return A.reduceRight((F, _) => {
              const X = _.component;
              return X.inheritAttrs = !!X.inheritAttrs, Qe(
                X,
                {
                  ...we.value.props,
                  ..._.props,
                  ...N.shared,
                  ..._.name ? N.named[_.name] || {} : {}
                },
                () => F
              );
            }, m);
          }
        }
        return m;
      }
    };
  }
});
function qs() {
  return ts || (ts = lo({
    props: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.props;
    }),
    url: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.url;
    }),
    component: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.component;
    }),
    version: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.version;
    }),
    clearHistory: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.clearHistory;
    }),
    deferredProps: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.deferredProps;
    }),
    rescuedProps: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.rescuedProps;
    }),
    mergeProps: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.mergeProps;
    }),
    prependProps: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.prependProps;
    }),
    deepMergeProps: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.deepMergeProps;
    }),
    matchPropsOn: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.matchPropsOn;
    }),
    rememberedState: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.rememberedState;
    }),
    encryptHistory: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.encryptHistory;
    }),
    scrollProps: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.scrollProps;
    }),
    flash: pe(() => {
      var e;
      return (e = we.value) == null ? void 0 : e.flash;
    })
  })), ts;
}
Lt({
  name: "Deferred",
  props: {
    data: {
      type: [String, Array],
      required: !0
    }
  },
  slots: Object,
  setup(e, { slots: t }) {
    const n = Pe(!1), i = /* @__PURE__ */ new Set(), a = qs(), f = pe(() => Array.isArray(e.data) ? e.data : [e.data]), u = pe(() => new Set(a.rescuedProps));
    let v = null, m = null;
    return lr(() => {
      v = be.on("start", (w) => {
        const y = w.detail.visit;
        y.preserveState === !0 && ps(y.url, window.location) && Lu(y, f.value) && (i.add(y), n.value = !0);
      }), m = be.on("finish", (w) => {
        const y = w.detail.visit;
        i.has(y) && (i.delete(y), n.value = i.size > 0);
      });
    }), vn(() => {
      v == null || v(), m == null || m(), i.clear();
    }), () => {
      var A;
      if (!t.fallback)
        throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
      const w = f.value.every((N) => Se(a.props, N) !== void 0), y = f.value.some((N) => u.value.has(N)), x = { reloading: n.value };
      return w && !y ? Qe(or, { key: "default" }, ((A = t.default) == null ? void 0 : A.call(t, x)) ?? []) : y && t.rescue ? Qe(or, { key: "rescue" }, t.rescue(x)) : Qe(or, { key: "fallback" }, t.fallback({}));
    };
  }
});
var Et = () => {
}, bf = /* @__PURE__ */ Symbol("InertiaFormContext");
Lt({
  name: "Form",
  slots: Object,
  props: {
    action: {
      type: [String, Object],
      default: ""
    },
    method: {
      type: String,
      default: "get"
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    queryStringArrayFormat: {
      type: String,
      default: "brackets"
    },
    errorBag: {
      type: [String, null],
      default: null
    },
    showProgress: {
      type: Boolean,
      default: !0
    },
    transform: {
      type: Function,
      default: (e) => e
    },
    options: {
      type: Object,
      default: () => ({})
    },
    resetOnError: {
      type: [Boolean, Array],
      default: !1
    },
    resetOnSuccess: {
      type: [Boolean, Array],
      default: !1
    },
    setDefaultsOnSuccess: {
      type: Boolean,
      default: !1
    },
    onCancelToken: {
      type: Function,
      default: Et
    },
    onBefore: {
      type: Function,
      default: Et
    },
    onStart: {
      type: Function,
      default: Et
    },
    onProgress: {
      type: Function,
      default: Et
    },
    onFinish: {
      type: Function,
      default: Et
    },
    onCancel: {
      type: Function,
      default: Et
    },
    onSuccess: {
      type: Function,
      default: Et
    },
    onError: {
      type: Function,
      default: Et
    },
    onSubmitComplete: {
      type: Function,
      default: Et
    },
    disableWhileProcessing: {
      type: Boolean,
      default: !1
    },
    cancelOnUnmount: {
      type: Boolean,
      default: !1
    },
    invalidateCacheTags: {
      type: [String, Array],
      default: () => []
    },
    validateFiles: {
      type: Boolean,
      default: !1
    },
    validationTimeout: {
      type: Number,
      default: 1500
    },
    optimistic: {
      type: Function,
      default: void 0
    },
    withAllErrors: {
      type: Boolean,
      default: null
    },
    component: {
      type: String,
      default: null
    },
    instant: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { slots: t, attrs: n, expose: i }) {
    const a = () => {
      const [l, U] = _();
      return e.transform(U);
    }, f = wa({}).withPrecognition(
      () => v.value,
      () => _()[0]
    ).transform(a).setValidationTimeout(e.validationTimeout);
    e.validateFiles && f.validateFiles(), (e.withAllErrors ?? Wt.get("form.withAllErrors")) && f.withAllErrors();
    const u = Pe(), v = pe(
      () => ut(e.action) ? e.action.method : e.method.toLowerCase()
    ), m = pe(() => e.component ? e.component : e.instant && ut(e.action) ? ea(e.action) : null), w = Pe(!1), y = Pe(new FormData()), x = (l) => {
      var U;
      l.type === "reset" && ((U = l.detail) != null && U[ba]) && l.preventDefault(), w.value = l.type === "reset" ? !1 : !ft(F(), Zi(y.value));
    }, A = ["input", "change", "reset"];
    lr(() => {
      y.value = N(), f.defaults(F()), A.forEach((l) => u.value.addEventListener(l, x));
    }), Ut(
      () => e.validateFiles,
      (l) => l ? f.validateFiles() : f.withoutFileValidation()
    ), Ut(
      () => e.validationTimeout,
      (l) => f.setValidationTimeout(l)
    ), mn(() => {
      A.forEach((l) => {
        var U;
        return (U = u.value) == null ? void 0 : U.removeEventListener(l, x);
      }), e.cancelOnUnmount && f.cancel();
    });
    const N = (l) => new FormData(u.value, l), F = (l) => Zi(N(l)), _ = (l) => wn(
      v.value,
      ut(e.action) ? e.action.url : e.action,
      F(l),
      e.queryStringArrayFormat
    ), X = (l) => {
      const [U, ne] = _(l);
      if ((l == null ? void 0 : l.getAttribute("formtarget")) === "_blank" && v.value === "get") {
        window.open(U, "_blank");
        return;
      }
      const V = (S) => {
        S && (S === !0 ? k() : S.length > 0 && k(...S));
      }, te = {
        headers: e.headers,
        queryStringArrayFormat: e.queryStringArrayFormat,
        errorBag: e.errorBag,
        showProgress: e.showProgress,
        invalidateCacheTags: e.invalidateCacheTags,
        component: m.value,
        optimistic: e.optimistic ? (S) => e.optimistic(S, ne) : void 0,
        onCancelToken: e.onCancelToken,
        onBefore: e.onBefore,
        onStart: e.onStart,
        onProgress: e.onProgress,
        onFinish: e.onFinish,
        onCancel: e.onCancel,
        onSuccess: async (...S) => {
          var g, P;
          const p = await ((g = e.onSuccess) == null ? void 0 : g.call(e, ...S));
          return (P = e.onSubmitComplete) == null || P.call(e, Z), V(e.resetOnSuccess), e.setDefaultsOnSuccess === !0 && I(), p;
        },
        onError: (...S) => {
          var p;
          (p = e.onError) == null || p.call(e, ...S), V(e.resetOnError);
        },
        ...e.options
      };
      f.transform(() => e.transform(ne)).submit(v.value, U, te), f.transform(a);
    }, k = (...l) => {
      gf(u.value, y.value, l), f.reset(...l);
    }, q = (...l) => {
      f.clearErrors(...l);
    }, j = (...l) => {
      q(...l), k(...l);
    }, I = () => {
      y.value = N(), w.value = !1;
    }, Z = {
      get errors() {
        return f.errors;
      },
      get hasErrors() {
        return f.hasErrors;
      },
      get processing() {
        return f.processing;
      },
      get progress() {
        return f.progress;
      },
      get wasSuccessful() {
        return f.wasSuccessful;
      },
      get recentlySuccessful() {
        return f.recentlySuccessful;
      },
      get validating() {
        return f.validating;
      },
      clearErrors: q,
      resetAndClearErrors: j,
      setError: (l, U) => f.setError(typeof l == "string" ? { [l]: U } : l),
      get isDirty() {
        return w.value;
      },
      reset: k,
      submit: X,
      cancel: () => f.cancel(),
      defaults: I,
      getData: F,
      getFormData: N,
      // Precognition
      touch: f.touch,
      valid: f.valid,
      invalid: f.invalid,
      touched: f.touched,
      validate: (l, U) => f.validate(...dn.mergeHeadersForValidation(l, U, e.headers)),
      validator: () => f.validator()
    };
    return i(Z), Bl(bf, Z), () => Qe(
      "form",
      {
        ...n,
        ref: u,
        action: ut(e.action) ? e.action.url : e.action,
        method: v.value,
        onSubmit: (l) => {
          l.preventDefault(), X(l.submitter);
        },
        inert: e.disableWhileProcessing && f.processing
      },
      t.default ? t.default(Z) : []
    );
  }
});
function wf(e) {
  return typeof e.type == "string" && [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ].indexOf(e.type) > -1;
}
function Pf(e) {
  e.props = e.props || {}, e.props["data-inertia"] = e.props["head-key"] !== void 0 ? e.props["head-key"] : "";
  const t = Object.keys(e.props).reduce((n, i) => {
    const a = String(e.props[i]);
    return ["key", "head-key"].includes(i) ? n : a === "" ? n + ` ${i}` : n + ` ${i}="${jo(a)}"`;
  }, "");
  return `<${String(e.type)}${t}>`;
}
function xf(e) {
  const { children: t } = e;
  return typeof t == "string" ? t : Array.isArray(t) ? t.reduce((n, i) => n + Ca(i), "") : "";
}
function Sf(e) {
  return typeof e.type == "function";
}
function Cf(e) {
  return typeof e.type == "object";
}
function Pa(e) {
  return /(comment|cmt)/i.test(e.type.toString());
}
function xa(e) {
  return /(fragment|fgt|symbol\(\))/i.test(e.type.toString());
}
function Sa(e) {
  return /(text|txt)/i.test(e.type.toString());
}
function Ca(e) {
  if (Sa(e))
    return String(e.children);
  if (xa(e))
    return "";
  if (Pa(e))
    return "";
  let t = Pf(e);
  return e.children && (t += xf(e)), wf(e) || (t += `</${String(e.type)}>`), t;
}
function Tf(e, t) {
  return t && !e.find((n) => n.startsWith("<title")) && e.push(`<title data-inertia="">${jo(t)}</title>`), e;
}
function Ef(e, t) {
  const n = e.flatMap((i) => bs(i)).map((i) => Ca(i)).filter((i) => i);
  return Tf(n, t);
}
function bs(e) {
  return Sf(e) ? bs(e.type()) : Cf(e) ? (console.warn("Using components in the <Head> component is not supported."), []) : Sa(e) && e.children ? e : xa(e) && e.children ? e.children.flatMap((t) => bs(t)) : Pa(e) ? [] : e;
}
Lt({
  props: {
    title: {
      type: String,
      required: !1
    }
  },
  setup(e, { slots: t }) {
    const n = ys.createProvider();
    return mn(() => {
      n.disconnect();
    }), () => {
      n.update(Ef(t.default ? t.default() : [], e.title));
    };
  }
});
var ns = (e, t) => e ? typeof e == "string" ? document.querySelector(e) : typeof e == "function" ? e() || null : t : t;
Lt({
  name: "InfiniteScroll",
  slots: Object,
  props: {
    data: {
      type: String,
      required: !0
    },
    buffer: {
      type: Number,
      default: 0
    },
    onlyNext: {
      type: Boolean,
      default: !1
    },
    onlyPrevious: {
      type: Boolean,
      default: !1
    },
    as: {
      type: String,
      default: "div"
    },
    manual: {
      type: Boolean,
      default: !1
    },
    manualAfter: {
      type: Number,
      default: 0
    },
    preserveUrl: {
      type: Boolean,
      default: !1
    },
    reverse: {
      type: Boolean,
      default: !1
    },
    autoScroll: {
      type: Boolean,
      default: void 0
    },
    itemsElement: {
      type: [String, Function, Object],
      default: null
    },
    startElement: {
      type: [String, Function, Object],
      default: null
    },
    endElement: {
      type: [String, Function, Object],
      default: null
    },
    params: {
      type: Object,
      default: () => ({})
    }
  },
  inheritAttrs: !1,
  setup(e, { slots: t, attrs: n, expose: i }) {
    var U;
    const a = Pe(null), f = Pe(null), u = Pe(null), v = pe(
      () => ns(e.itemsElement, a.value)
    ), m = pe(() => ou(v.value)), w = pe(
      () => ns(e.startElement, f.value)
    ), y = pe(() => ns(e.endElement, u.value)), x = Pe(!1), A = Pe(!1), N = Pe(0), F = Pe(!1), _ = Pe(!1), X = () => {
      N.value = k.getRequestCount(), F.value = k.hasPrevious(), _.value = k.hasNext();
    }, {
      dataManager: k,
      elementManager: q,
      flush: j
    } = Ju({
      // Data
      getPropName: () => e.data,
      inReverseMode: () => e.reverse,
      shouldFetchNext: () => !e.onlyPrevious,
      shouldFetchPrevious: () => !e.onlyNext,
      shouldPreserveUrl: () => e.preserveUrl,
      getReloadOptions: () => e.params,
      // Elements
      getTriggerMargin: () => e.buffer,
      getStartElement: () => w.value,
      getEndElement: () => y.value,
      getItemsElement: () => v.value,
      getScrollableParent: () => m.value,
      // Request callbacks
      onBeforePreviousRequest: () => x.value = !0,
      onBeforeNextRequest: () => A.value = !0,
      onCompletePreviousRequest: ({ completed: ne }) => {
        x.value = !1, ne && X();
      },
      onCompleteNextRequest: ({ completed: ne }) => {
        A.value = !1, ne && X();
      },
      onDataReset: X
    });
    if (X(), typeof window > "u") {
      const ne = (U = qs().scrollProps) == null ? void 0 : U[e.data];
      ne && (F.value = !!ne.previousPage, _.value = !!ne.nextPage);
    }
    const I = pe(() => !Z.value), Z = pe(
      () => e.manual || e.manualAfter > 0 && N.value >= e.manualAfter
    ), l = () => {
      m.value ? m.value.scrollTo({
        top: m.value.scrollHeight,
        behavior: "instant"
      }) : window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "instant"
      });
    };
    return lr(() => {
      q.setupObservers(), q.processServerLoadedElements(k.getLastLoadedPage()), (e.autoScroll !== void 0 ? e.autoScroll : e.reverse) && l(), I.value && q.enableTriggers();
    }), vn(j), Ut(
      () => [I.value, e.onlyNext, e.onlyPrevious],
      ([ne]) => {
        ne ? q.enableTriggers() : q.disableTriggers();
      }
    ), i({
      fetchNext: k.fetchNext,
      fetchPrevious: k.fetchPrevious,
      hasPrevious: k.hasPrevious,
      hasNext: k.hasNext
    }), () => {
      var V, te, S;
      const ne = [], K = {
        loadingPrevious: x.value,
        loadingNext: A.value,
        hasPrevious: F.value,
        hasNext: _.value
      };
      if (!e.startElement) {
        const p = I.value && !e.onlyNext, g = {
          loading: x.value,
          fetch: k.fetchPrevious,
          autoMode: p,
          manualMode: !p,
          hasMore: F.value,
          ...K
        };
        ne.push(
          Qe(
            "div",
            { ref: f },
            t.previous ? t.previous(g) : x.value ? (V = t.loading) == null ? void 0 : V.call(t, g) : void 0
          )
        );
      }
      if (ne.push(
        Qe(
          e.as,
          { ...n, ref: a },
          (te = t.default) == null ? void 0 : te.call(t, {
            loading: x.value || A.value,
            loadingPrevious: x.value,
            loadingNext: A.value
          })
        )
      ), !e.endElement) {
        const p = I.value && !e.onlyPrevious, g = {
          loading: A.value,
          fetch: k.fetchNext,
          autoMode: p,
          manualMode: !p,
          hasMore: _.value,
          ...K
        };
        ne.push(
          Qe(
            "div",
            { ref: u },
            t.next ? t.next(g) : A.value ? (S = t.loading) == null ? void 0 : S.call(t, g) : void 0
          )
        );
      }
      return Qe(or, {}, e.reverse ? [...ne].reverse() : ne);
    };
  }
});
var mt = () => {
};
Lt({
  name: "Link",
  props: {
    as: {
      type: [String, Object],
      default: "a"
    },
    data: {
      type: Object,
      default: () => ({})
    },
    href: {
      type: [String, Object],
      default: ""
    },
    method: {
      type: String,
      default: "get"
    },
    replace: {
      type: Boolean,
      default: !1
    },
    preserveScroll: {
      type: [Boolean, String, Function],
      default: !1
    },
    preserveState: {
      type: [Boolean, String, Function],
      default: null
    },
    preserveUrl: {
      type: Boolean,
      default: !1
    },
    only: {
      type: Array,
      default: () => []
    },
    except: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    queryStringArrayFormat: {
      type: String,
      default: "brackets"
    },
    async: {
      type: Boolean,
      default: !1
    },
    prefetch: {
      type: [Boolean, String, Array],
      default: !1
    },
    cacheFor: {
      type: [Number, String, Array],
      default: 0
    },
    onStart: {
      type: Function,
      default: mt
    },
    onProgress: {
      type: Function,
      default: mt
    },
    onFinish: {
      type: Function,
      default: mt
    },
    onBefore: {
      type: Function,
      default: mt
    },
    onCancel: {
      type: Function,
      default: mt
    },
    onSuccess: {
      type: Function,
      default: mt
    },
    onError: {
      type: Function,
      default: mt
    },
    onCancelToken: {
      type: Function,
      default: mt
    },
    onPrefetching: {
      type: Function,
      default: mt
    },
    onPrefetched: {
      type: Function,
      default: mt
    },
    cacheTags: {
      type: [String, Array],
      default: () => []
    },
    viewTransition: {
      type: [Boolean, Object],
      default: !1
    },
    component: {
      type: String,
      default: null
    },
    instant: {
      type: Boolean,
      default: !1
    },
    pageProps: {
      type: [Object, Function],
      default: null
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const i = Pe(0), a = Pe(), f = pe(() => e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch]), u = pe(() => e.cacheFor !== 0 ? e.cacheFor : f.value.length === 1 && f.value[0] === "click" ? 0 : pn.get("prefetch.cacheFor"));
    lr(() => {
      f.value.includes("mount") && X();
    }), vn(() => {
      clearTimeout(a.value);
    });
    const v = pe(
      () => ut(e.href) ? e.href.method : (e.method ?? "get").toLowerCase()
    ), m = pe(() => typeof e.as != "string" || e.as.toLowerCase() !== "a" ? e.as : v.value !== "get" ? "button" : e.as.toLowerCase()), w = pe(
      () => wn(
        v.value,
        ut(e.href) ? e.href.url : e.href,
        e.data || {},
        e.queryStringArrayFormat
      )
    ), y = pe(() => w.value[0]), x = pe(() => w.value[1]), A = pe(() => e.component ? e.component : e.instant && ut(e.href) ? ea(e.href) : null), N = pe(() => m.value === "button" ? { type: "button" } : m.value === "a" || typeof m.value != "string" ? { href: y.value } : {}), F = pe(() => ({
      data: x.value,
      method: v.value,
      replace: e.replace,
      preserveScroll: e.preserveScroll,
      preserveState: e.preserveState ?? v.value !== "get",
      preserveUrl: e.preserveUrl,
      only: e.only,
      except: e.except,
      headers: e.headers,
      async: e.async,
      component: A.value,
      pageProps: e.pageProps
    })), _ = pe(() => ({
      ...F.value,
      viewTransition: e.viewTransition,
      onCancelToken: e.onCancelToken,
      onBefore: e.onBefore,
      onStart: (I) => {
        var Z;
        i.value++, (Z = e.onStart) == null || Z.call(e, I);
      },
      onProgress: e.onProgress,
      onFinish: (I) => {
        var Z;
        i.value--, (Z = e.onFinish) == null || Z.call(e, I);
      },
      onCancel: e.onCancel,
      onSuccess: e.onSuccess,
      onError: e.onError
    })), X = () => {
      be.prefetch(
        y.value,
        {
          ...F.value,
          onPrefetching: e.onPrefetching,
          onPrefetched: e.onPrefetched
        },
        {
          cacheFor: u.value,
          cacheTags: e.cacheTags
        }
      );
    }, k = {
      onClick: (I) => {
        Vr(I) && (I.preventDefault(), be.visit(y.value, _.value));
      }
    }, q = {
      onMouseenter: () => {
        a.value = setTimeout(() => {
          X();
        }, pn.get("prefetch.hoverDelay"));
      },
      onMouseleave: () => {
        clearTimeout(a.value);
      },
      onClick: k.onClick
    }, j = {
      onMousedown: (I) => {
        Vr(I) && (I.preventDefault(), X());
      },
      onKeydown: (I) => {
        ro(I) && (I.preventDefault(), X());
      },
      onMouseup: (I) => {
        Vr(I) && (I.preventDefault(), be.visit(y.value, _.value));
      },
      onKeyup: (I) => {
        ro(I) && (I.preventDefault(), be.visit(y.value, _.value));
      },
      onClick: (I) => {
        Vr(I) && I.preventDefault();
      }
    };
    return () => Qe(
      m.value,
      {
        ...n,
        ...N.value,
        "data-loading": i.value > 0 ? "" : void 0,
        ...f.value.includes("hover") ? q : f.value.includes("click") ? j : k
      },
      t
    );
  }
});
Lt({
  name: "WhenVisible",
  slots: Object,
  props: {
    data: {
      type: [String, Array]
    },
    params: {
      type: Object
    },
    buffer: {
      type: Number,
      default: 0
    },
    as: {
      type: String,
      default: "div"
    },
    always: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { slots: t }) {
    const n = Pe(!1), i = Pe(!1), a = Pe(null), f = Pe(null), u = qs(), v = pe(() => e.data ? Array.isArray(e.data) ? e.data : [e.data] : []);
    function m() {
      const y = { preserveErrors: !0, ...e.params };
      return e.data && (y.only = Array.isArray(e.data) ? e.data : [e.data]), y;
    }
    function w() {
      var y;
      typeof window > "u" || ((y = a.value) == null || y.disconnect(), a.value = new IntersectionObserver(
        (x) => {
          if (!x[0].isIntersecting || i.value || !e.always && n.value)
            return;
          i.value = !0;
          const A = m();
          be.reload({
            ...A,
            onStart: (N) => {
              var F;
              i.value = !0, (F = A.onStart) == null || F.call(A, N);
            },
            onFinish: (N) => {
              var F, _;
              n.value = !0, i.value = !1, (F = A.onFinish) == null || F.call(A, N), e.always || (_ = a.value) == null || _.disconnect();
            }
          });
        },
        {
          rootMargin: `${e.buffer}px`
        }
      ), f.value && a.value.observe(f.value));
    }
    return Ut(
      () => v.value.map((y) => Se(u.props, y)),
      () => {
        const y = v.value.length > 0 && v.value.every((x) => Se(u.props, x) !== void 0);
        n.value = y, !(y && !e.always) && (!a.value || !y) && jl(w);
      },
      { immediate: !0 }
    ), vn(() => {
      var y;
      (y = a.value) == null || y.disconnect();
    }), () => {
      const y = [];
      return (e.always || !n.value) && y.push(Qe(e.as, { ref: f })), n.value ? t.default && y.push(t.default({ fetching: i.value })) : y.push(t.fallback ? t.fallback({}) : null), y;
    };
  }
});
var pn = Wt.extend({});
const Af = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, Of = {
  props: {
    options: {
      type: Object,
      required: !0
    }
  }
}, kf = { class: "datatable-batch-dropdown input-group input-group-sm" }, Df = {
  name: "batch",
  class: "form-control"
}, Nf = ["value", "data-method", "data-url"];
function _f(e, t, n, i, a, f) {
  return Nt(), Mt("div", kf, [
    ct("select", Df, [
      t[0] || (t[0] = ct("option", { value: "" }, "عملیات جمعی", -1)),
      (Nt(!0), Mt(or, null, co(n.options, (u) => (Nt(), Mt("option", {
        value: u.value,
        "data-method": u.method,
        "data-url": u.url
      }, uo(u.title), 9, Nf))), 256))
    ]),
    t[1] || (t[1] = ct("button", {
      type: "button",
      class: "btn btn-secondary batch-btn"
    }, "اجرا", -1))
  ]);
}
const Rf = /* @__PURE__ */ Af(Of, [["render", _f]]), so = [
  "childRow",
  "column-sizing",
  "column-visibility",
  "destroy",
  "draw",
  "error",
  "init",
  "length",
  "order",
  "page",
  "preDraw",
  "preInit",
  "preXhr",
  "processing",
  "requestChild",
  "search",
  "stateLoadParams",
  "stateLoaded",
  "stateSaveParams",
  "xhr",
  "autoFill",
  "preAutoFill",
  "buttons-action",
  "buttons-processing",
  "column-reorder",
  "key",
  "key-blur",
  "key-focus",
  "key-refocus",
  "key-return-submit",
  "responsive-display",
  "responsive-resize",
  "rowgroup-datasrc",
  "pre-row-reorder",
  "row-reorder",
  "row-reordered",
  "dtsb-inserted",
  "deselect",
  "select",
  "select-blur",
  "selectItems",
  "selectStyle",
  "user-select",
  "stateRestore-change"
];
let ws;
const Lf = {
  name: "Datatables.netVue",
  inheritAttrs: !1,
  use(e) {
    ws = e;
  }
}, Hf = /* @__PURE__ */ Lt({
  ...Lf,
  props: {
    ajax: null,
    columns: null,
    data: null,
    options: null
  },
  emits: so,
  setup(e, { expose: t }) {
    const n = e, i = Pe(null), a = {}, f = Pe(), u = Pe([]);
    Ut(
      () => n.data,
      (x) => {
        let A = f.value;
        A && (y(A), A.clear(), A.rows.add(x).draw(!1));
      },
      {
        deep: !0
      }
    ), lr(() => {
      var x;
      const A = fo();
      let N = Object.assign({}, n.options) || {};
      if (n.data && (N.data = n.data, v(N.data)), n.columns && (N.columns = n.columns), N.columns && w(N.columns, A), n.ajax && (N.ajax = n.ajax), N.columnDefs || (N.columnDefs = []), A) {
        let F = Object.keys(A.slots);
        for (let _ = 0; _ < F.length; _++) {
          let X = F[_];
          if (X.match(/^column\-/)) {
            let k = X.replace("column-", "");
            N.columnDefs.push({
              target: k.match(/^\d+$/) ? parseInt(k) : k + ":name",
              render: "#" + X
            });
          }
        }
        w(N.columnDefs, A);
      }
      if (!ws)
        throw new Error(
          "DataTables library not set. See https://datatables.net/tn/19 for details."
        );
      f.value = new ws(ho(i), N), (x = f.value) == null || x.on("preXhr", function() {
        y(f.value);
      });
      for (let F of so)
        f.value && A && f.value.on(F, function() {
          var _ = Array.from(arguments), X = _.shift();
          _.unshift({ event: X, dt: f }), _.unshift(F), A.emit.apply(A, _);
        });
    }), mn(() => {
      var x;
      y(f.value), (x = f.value) == null || x.destroy(!0);
    });
    function v(x) {
      u.value = x.value ? x.value.slice() : x.slice();
    }
    function m(x) {
      return function(A, N, F, _) {
        let X = (_.settings.sTableId || _.settings.tableId) + "," + _.row + "," + _.col;
        if (!a[X]) {
          let k = Qe("div", x({
            cellData: A,
            colIndex: _.col,
            rowData: F,
            rowIndex: _.row,
            type: N
          }));
          a[X] = document.createElement("div"), $l(k, a[X]);
        }
        return a[X];
      };
    }
    function w(x, A) {
      if (A)
        for (let F = 0; F < x.length; F++) {
          let _ = x[F];
          if (typeof _.render == "string" && _.render.charAt(0) === "#") {
            var N = _.render.replace("#", "");
            A.slots[N] && (_.render = m(A.slots[N]));
          } else if (typeof _.render == "object" && typeof _.render.display == "string" && _.render.display.charAt(0) === "#") {
            var N = _.render.display.replace("#", "");
            A.slots[N] && (_.render.display = m(A.slots[N]));
          }
        }
    }
    function y(x) {
      let A = Object.keys(a), N = x.table().node().id;
      for (var F = 0; F < A.length; F++)
        A[F].indexOf(N + ",") === 0 && delete a[A[F]];
    }
    return t({
      dt: f
    }), (x, A) => A[0] || (Ni(-1), A[0] = ct("div", { class: "datatable" }, [
      ct("table", Il({
        ref_key: "table",
        ref: i
      }, x.$attrs, { style: { width: "100%" } }), [
        Ml(x.$slots, "default")
      ], 16)
    ]), Ni(1), A[0]);
  }
}), io = /* @__PURE__ */ (() => {
  const e = Hf;
  return e.install = (t) => {
    t.component("Datatables.netVue", e);
  }, e;
})();
/*!
 * jQuery JavaScript Library v4.0.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.com/license/
 *
 * Date: 2026-01-18T00:20Z
 */
function qf(e, t) {
  if (typeof e > "u" || !e.document)
    throw new Error("jQuery requires a window with a document");
  var n = [], i = Object.getPrototypeOf, a = n.slice, f = n.flat ? function(r) {
    return n.flat.call(r);
  } : function(r) {
    return n.concat.apply([], r);
  }, u = n.push, v = n.indexOf, m = {}, w = m.toString, y = m.hasOwnProperty, x = y.toString, A = x.call(Object), N = {};
  function F(r) {
    return r == null ? r + "" : typeof r == "object" ? m[w.call(r)] || "object" : typeof r;
  }
  function _(r) {
    return r != null && r === r.window;
  }
  function X(r) {
    var s = !!r && r.length, o = F(r);
    return typeof r == "function" || _(r) ? !1 : o === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r;
  }
  var k = e.document, q = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };
  function j(r, s, o) {
    o = o || k;
    var c, d = o.createElement("script");
    d.text = r;
    for (c in q)
      s && s[c] && (d[c] = s[c]);
    o.head.appendChild(d).parentNode && d.parentNode.removeChild(d);
  }
  var I = "4.0.0", Z = /HTML$/i, l = function(r, s) {
    return new l.fn.init(r, s);
  };
  l.fn = l.prototype = {
    // The current version of jQuery being used
    jquery: I,
    constructor: l,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function() {
      return a.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function(r) {
      return r == null ? a.call(this) : r < 0 ? this[r + this.length] : this[r];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function(r) {
      var s = l.merge(this.constructor(), r);
      return s.prevObject = this, s;
    },
    // Execute a callback for every element in the matched set.
    each: function(r) {
      return l.each(this, r);
    },
    map: function(r) {
      return this.pushStack(l.map(this, function(s, o) {
        return r.call(s, o, s);
      }));
    },
    slice: function() {
      return this.pushStack(a.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    even: function() {
      return this.pushStack(l.grep(this, function(r, s) {
        return (s + 1) % 2;
      }));
    },
    odd: function() {
      return this.pushStack(l.grep(this, function(r, s) {
        return s % 2;
      }));
    },
    eq: function(r) {
      var s = this.length, o = +r + (r < 0 ? s : 0);
      return this.pushStack(o >= 0 && o < s ? [this[o]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    }
  }, l.extend = l.fn.extend = function() {
    var r, s, o, c, d, h, b = arguments[0] || {}, T = 1, C = arguments.length, D = !1;
    for (typeof b == "boolean" && (D = b, b = arguments[T] || {}, T++), typeof b != "object" && typeof b != "function" && (b = {}), T === C && (b = this, T--); T < C; T++)
      if ((r = arguments[T]) != null)
        for (s in r)
          c = r[s], !(s === "__proto__" || b === c) && (D && c && (l.isPlainObject(c) || (d = Array.isArray(c))) ? (o = b[s], d && !Array.isArray(o) ? h = [] : !d && !l.isPlainObject(o) ? h = {} : h = o, d = !1, b[s] = l.extend(D, h, c)) : c !== void 0 && (b[s] = c));
    return b;
  }, l.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (I + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: !0,
    error: function(r) {
      throw new Error(r);
    },
    noop: function() {
    },
    isPlainObject: function(r) {
      var s, o;
      return !r || w.call(r) !== "[object Object]" ? !1 : (s = i(r), s ? (o = y.call(s, "constructor") && s.constructor, typeof o == "function" && x.call(o) === A) : !0);
    },
    isEmptyObject: function(r) {
      var s;
      for (s in r)
        return !1;
      return !0;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function(r, s, o) {
      j(r, { nonce: s && s.nonce }, o);
    },
    each: function(r, s) {
      var o, c = 0;
      if (X(r))
        for (o = r.length; c < o && s.call(r[c], c, r[c]) !== !1; c++)
          ;
      else
        for (c in r)
          if (s.call(r[c], c, r[c]) === !1)
            break;
      return r;
    },
    // Retrieve the text value of an array of DOM nodes
    text: function(r) {
      var s, o = "", c = 0, d = r.nodeType;
      if (!d)
        for (; s = r[c++]; )
          o += l.text(s);
      return d === 1 || d === 11 ? r.textContent : d === 9 ? r.documentElement.textContent : d === 3 || d === 4 ? r.nodeValue : o;
    },
    // results is for internal usage only
    makeArray: function(r, s) {
      var o = s || [];
      return r != null && (X(Object(r)) ? l.merge(
        o,
        typeof r == "string" ? [r] : r
      ) : u.call(o, r)), o;
    },
    inArray: function(r, s, o) {
      return s == null ? -1 : v.call(s, r, o);
    },
    isXMLDoc: function(r) {
      var s = r && r.namespaceURI, o = r && (r.ownerDocument || r).documentElement;
      return !Z.test(s || o && o.nodeName || "HTML");
    },
    // Note: an element does not contain itself
    contains: function(r, s) {
      var o = s && s.parentNode;
      return r === o || !!(o && o.nodeType === 1 && // Support: IE 9 - 11+
      // IE doesn't have `contains` on SVG.
      (r.contains ? r.contains(o) : r.compareDocumentPosition && r.compareDocumentPosition(o) & 16));
    },
    merge: function(r, s) {
      for (var o = +s.length, c = 0, d = r.length; c < o; c++)
        r[d++] = s[c];
      return r.length = d, r;
    },
    grep: function(r, s, o) {
      for (var c, d = [], h = 0, b = r.length, T = !o; h < b; h++)
        c = !s(r[h], h), c !== T && d.push(r[h]);
      return d;
    },
    // arg is for internal usage only
    map: function(r, s, o) {
      var c, d, h = 0, b = [];
      if (X(r))
        for (c = r.length; h < c; h++)
          d = s(r[h], h, o), d != null && b.push(d);
      else
        for (h in r)
          d = s(r[h], h, o), d != null && b.push(d);
      return f(b);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: N
  }), typeof Symbol == "function" && (l.fn[Symbol.iterator] = n[Symbol.iterator]), l.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(r, s) {
      m["[object " + s + "]"] = s.toLowerCase();
    }
  );
  function U(r, s) {
    return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase();
  }
  var ne = n.pop, K = "[\\x20\\t\\r\\n\\f]", V = k.documentMode, te = V && new RegExp(
    // Support: IE 9 - 11+
    // IE's :disabled selector does not pick up the children of disabled fieldsets
    ":enabled|:disabled|\\[" + K + "*name" + K + "*=" + K + `*(?:''|"")`
  ), S = new RegExp(
    "^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$",
    "g"
  ), p = "(?:\\\\[\\da-fA-F]{1,6}" + K + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", g = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), P = new RegExp(K + "|>"), E = /[+~]/, O = k.documentElement, H = O.matches || O.msMatchesSelector;
  function B() {
    var r = [];
    function s(o, c) {
      return r.push(o + " ") > l.expr.cacheLength && delete s[r.shift()], s[o + " "] = c;
    }
    return s;
  }
  function Y(r) {
    return r && typeof r.getElementsByTagName < "u" && r;
  }
  var z = "\\[" + K + "*(" + p + ")(?:" + K + // Operator (capture 2)
  "*([*^$|!~]?=)" + K + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
  `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + p + "))|)" + K + "*\\]", G = ":(" + p + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + z + ")*)|.*)\\)|)", ee = {
    ID: new RegExp("^#(" + p + ")"),
    CLASS: new RegExp("^\\.(" + p + ")"),
    TAG: new RegExp("^(" + p + "|[*])"),
    ATTR: new RegExp("^" + z),
    PSEUDO: new RegExp("^" + G),
    CHILD: new RegExp(
      "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)",
      "i"
    )
  }, oe = new RegExp(G), he = new RegExp("\\\\[\\da-fA-F]{1,6}" + K + "?|\\\\([^\\r\\n\\f])", "g"), fe = function(r, s) {
    var o = "0x" + r.slice(1) - 65536;
    return s || (o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, o & 1023 | 56320));
  };
  function ce(r) {
    return r.replace(he, fe);
  }
  function ge(r) {
    l.error("Syntax error, unrecognized expression: " + r);
  }
  var _e = new RegExp("^" + K + "*," + K + "*"), Oe = B();
  function Le(r, s) {
    var o, c, d, h, b, T, C, D = Oe[r + " "];
    if (D)
      return s ? 0 : D.slice(0);
    for (b = r, T = [], C = l.expr.preFilter; b; ) {
      (!o || (c = _e.exec(b))) && (c && (b = b.slice(c[0].length) || b), T.push(d = [])), o = !1, (c = g.exec(b)) && (o = c.shift(), d.push({
        value: o,
        // Cast descendant combinators to space
        type: c[0].replace(S, " ")
      }), b = b.slice(o.length));
      for (h in ee)
        (c = l.expr.match[h].exec(b)) && (!C[h] || (c = C[h](c))) && (o = c.shift(), d.push({
          value: o,
          type: h,
          matches: c
        }), b = b.slice(o.length));
      if (!o)
        break;
    }
    return s ? b.length : b ? ge(r) : (
      // Cache the tokens
      Oe(r, T).slice(0)
    );
  }
  var rt = {
    ATTR: function(r) {
      return r[1] = ce(r[1]), r[3] = ce(r[3] || r[4] || r[5] || ""), r[2] === "~=" && (r[3] = " " + r[3] + " "), r.slice(0, 4);
    },
    CHILD: function(r) {
      return r[1] = r[1].toLowerCase(), r[1].slice(0, 3) === "nth" ? (r[3] || ge(r[0]), r[4] = +(r[4] ? r[5] + (r[6] || 1) : 2 * (r[3] === "even" || r[3] === "odd")), r[5] = +(r[7] + r[8] || r[3] === "odd")) : r[3] && ge(r[0]), r;
    },
    PSEUDO: function(r) {
      var s, o = !r[6] && r[2];
      return ee.CHILD.test(r[0]) ? null : (r[3] ? r[2] = r[4] || r[5] || "" : o && oe.test(o) && // Get excess from tokenize (recursively)
      (s = Le(o, !0)) && // advance to the next closing parenthesis
      (s = o.indexOf(")", o.length - s) - o.length) && (r[0] = r[0].slice(0, s), r[2] = o.slice(0, s)), r.slice(0, 3));
    }
  };
  function Ue(r) {
    for (var s = 0, o = r.length, c = ""; s < o; s++)
      c += r[s].value;
    return c;
  }
  function Re(r, s, o, c, d, h, b) {
    var T = 0, C = r.length, D = o == null;
    if (F(o) === "object") {
      d = !0;
      for (T in o)
        Re(r, s, T, o[T], !0, h, b);
    } else if (c !== void 0 && (d = !0, typeof c != "function" && (b = !0), D && (b ? (s.call(r, c), s = null) : (D = s, s = function(L, $, R) {
      return D.call(l(L), R);
    })), s))
      for (; T < C; T++)
        s(
          r[T],
          o,
          b ? c : c.call(r[T], T, s(r[T], o))
        );
    return d ? r : D ? s.call(r) : C ? s(r[0], o) : h;
  }
  var Ce = /[^\x20\t\r\n\f]+/g;
  l.fn.extend({
    attr: function(r, s) {
      return Re(this, l.attr, r, s, arguments.length > 1);
    },
    removeAttr: function(r) {
      return this.each(function() {
        l.removeAttr(this, r);
      });
    }
  }), l.extend({
    attr: function(r, s, o) {
      var c, d, h = r.nodeType;
      if (!(h === 3 || h === 8 || h === 2)) {
        if (typeof r.getAttribute > "u")
          return l.prop(r, s, o);
        if ((h !== 1 || !l.isXMLDoc(r)) && (d = l.attrHooks[s.toLowerCase()]), o !== void 0) {
          if (o === null || // For compat with previous handling of boolean attributes,
          // remove when `false` passed. For ARIA attributes -
          // many of which recognize a `"false"` value - continue to
          // set the `"false"` value as jQuery <4 did.
          o === !1 && s.toLowerCase().indexOf("aria-") !== 0) {
            l.removeAttr(r, s);
            return;
          }
          return d && "set" in d && (c = d.set(r, o, s)) !== void 0 ? c : (r.setAttribute(s, o), o);
        }
        return d && "get" in d && (c = d.get(r, s)) !== null ? c : (c = r.getAttribute(s), c ?? void 0);
      }
    },
    attrHooks: {},
    removeAttr: function(r, s) {
      var o, c = 0, d = s && s.match(Ce);
      if (d && r.nodeType === 1)
        for (; o = d[c++]; )
          r.removeAttribute(o);
    }
  }), V && (l.attrHooks.type = {
    set: function(r, s) {
      if (s === "radio" && U(r, "input")) {
        var o = r.value;
        return r.setAttribute("type", s), o && (r.value = o), s;
      }
    }
  });
  var dt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function Ht(r, s) {
    return s ? r === "\0" ? "�" : r.slice(0, -1) + "\\" + r.charCodeAt(r.length - 1).toString(16) + " " : "\\" + r;
  }
  l.escapeSelector = function(r) {
    return (r + "").replace(dt, Ht);
  };
  var xt = n.sort, qt = n.splice, Fe;
  function ht(r, s) {
    if (r === s)
      return Fe = !0, 0;
    var o = !r.compareDocumentPosition - !s.compareDocumentPosition;
    return o || (o = (r.ownerDocument || r) == (s.ownerDocument || s) ? r.compareDocumentPosition(s) : (
      // Otherwise we know they are disconnected
      1
    ), o & 1 ? r == k || r.ownerDocument == k && l.contains(k, r) ? -1 : s == k || s.ownerDocument == k && l.contains(k, s) ? 1 : 0 : o & 4 ? -1 : 1);
  }
  l.uniqueSort = function(r) {
    var s, o = [], c = 0, d = 0;
    if (Fe = !1, xt.call(r, ht), Fe) {
      for (; s = r[d++]; )
        s === r[d] && (c = o.push(d));
      for (; c--; )
        qt.call(r, o[c], 1);
    }
    return r;
  }, l.fn.uniqueSort = function() {
    return this.pushStack(l.uniqueSort(a.apply(this)));
  };
  var Be, et, He, Fs, St, Ct = 0, Na = 0, Bs = B(), js = B(), Dr = B(), _a = new RegExp(K + "+", "g"), Ra = new RegExp("^" + p + "$"), Is = l.extend({
    // For use in libraries implementing .is()
    // We use this for POS matching in `select`
    needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
  }, ee), La = /^(?:input|select|textarea|button)$/i, Ha = /^h\d$/i, qa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Fa = function() {
    Kt();
  }, Ba = Nr(
    function(r) {
      return r.disabled === !0 && U(r, "fieldset");
    },
    { dir: "parentNode", next: "legend" }
  );
  function ot(r, s, o, c) {
    var d, h, b, T, C, D, L, $ = s && s.ownerDocument, R = s ? s.nodeType : 9;
    if (o = o || [], typeof r != "string" || !r || R !== 1 && R !== 9 && R !== 11)
      return o;
    if (!c && (Kt(s), s = s || He, St)) {
      if (R !== 11 && (C = qa.exec(r)))
        if (d = C[1]) {
          if (R === 9)
            return (b = s.getElementById(d)) && u.call(o, b), o;
          if ($ && (b = $.getElementById(d)) && l.contains(s, b))
            return u.call(o, b), o;
        } else {
          if (C[2])
            return u.apply(o, s.getElementsByTagName(r)), o;
          if ((d = C[3]) && s.getElementsByClassName)
            return u.apply(o, s.getElementsByClassName(d)), o;
        }
      if (!Dr[r + " "] && (!te || !te.test(r))) {
        if (L = r, $ = s, R === 1 && (P.test(r) || g.test(r))) {
          for ($ = E.test(r) && Y(s.parentNode) || s, ($ != s || V) && ((T = s.getAttribute("id")) ? T = l.escapeSelector(T) : s.setAttribute("id", T = l.expando)), D = Le(r), h = D.length; h--; )
            D[h] = (T ? "#" + T : ":scope") + " " + Ue(D[h]);
          L = D.join(",");
        }
        try {
          return u.apply(
            o,
            $.querySelectorAll(L)
          ), o;
        } catch {
          Dr(r, !0);
        } finally {
          T === l.expando && s.removeAttribute("id");
        }
      }
    }
    return Us(r.replace(S, "$1"), s, o, c);
  }
  function pt(r) {
    return r[l.expando] = !0, r;
  }
  function ja(r) {
    return function(s) {
      return U(s, "input") && s.type === r;
    };
  }
  function Ia(r) {
    return function(s) {
      return (U(s, "input") || U(s, "button")) && s.type === r;
    };
  }
  function Ms(r) {
    return function(s) {
      return "form" in s ? s.parentNode && s.disabled === !1 ? "label" in s ? "label" in s.parentNode ? s.parentNode.disabled === r : s.disabled === r : s.isDisabled === r || // Where there is no isDisabled, check manually
      s.isDisabled !== !r && Ba(s) === r : s.disabled === r : "label" in s ? s.disabled === r : !1;
    };
  }
  function Ft(r) {
    return pt(function(s) {
      return s = +s, pt(function(o, c) {
        for (var d, h = r([], o.length, s), b = h.length; b--; )
          o[d = h[b]] && (o[d] = !(c[d] = o[d]));
      });
    });
  }
  function Kt(r) {
    var s, o = r ? r.ownerDocument || r : k;
    o == He || o.nodeType !== 9 || (He = o, Fs = He.documentElement, St = !l.isXMLDoc(He), V && k != He && (s = He.defaultView) && s.top !== s && s.addEventListener("unload", Fa));
  }
  ot.matches = function(r, s) {
    return ot(r, null, null, s);
  }, ot.matchesSelector = function(r, s) {
    if (Kt(r), St && !Dr[s + " "] && (!te || !te.test(s)))
      try {
        return H.call(r, s);
      } catch {
        Dr(s, !0);
      }
    return ot(s, He, null, [r]).length > 0;
  }, l.expr = {
    // Can be adjusted by the user
    cacheLength: 50,
    createPseudo: pt,
    match: Is,
    find: {
      ID: function(r, s) {
        if (typeof s.getElementById < "u" && St) {
          var o = s.getElementById(r);
          return o ? [o] : [];
        }
      },
      TAG: function(r, s) {
        return typeof s.getElementsByTagName < "u" ? s.getElementsByTagName(r) : s.querySelectorAll(r);
      },
      CLASS: function(r, s) {
        if (typeof s.getElementsByClassName < "u" && St)
          return s.getElementsByClassName(r);
      }
    },
    relative: {
      ">": { dir: "parentNode", first: !0 },
      " ": { dir: "parentNode" },
      "+": { dir: "previousSibling", first: !0 },
      "~": { dir: "previousSibling" }
    },
    preFilter: rt,
    filter: {
      ID: function(r) {
        var s = ce(r);
        return function(o) {
          return o.getAttribute("id") === s;
        };
      },
      TAG: function(r) {
        var s = ce(r).toLowerCase();
        return r === "*" ? function() {
          return !0;
        } : function(o) {
          return U(o, s);
        };
      },
      CLASS: function(r) {
        var s = Bs[r + " "];
        return s || (s = new RegExp("(^|" + K + ")" + r + "(" + K + "|$)")) && Bs(r, function(o) {
          return s.test(
            typeof o.className == "string" && o.className || typeof o.getAttribute < "u" && o.getAttribute("class") || ""
          );
        });
      },
      ATTR: function(r, s, o) {
        return function(c) {
          var d = l.attr(c, r);
          return d == null ? s === "!=" : s ? (d += "", s === "=" ? d === o : s === "!=" ? d !== o : s === "^=" ? o && d.indexOf(o) === 0 : s === "*=" ? o && d.indexOf(o) > -1 : s === "$=" ? o && d.slice(-o.length) === o : s === "~=" ? (" " + d.replace(_a, " ") + " ").indexOf(o) > -1 : s === "|=" ? d === o || d.slice(0, o.length + 1) === o + "-" : !1) : !0;
        };
      },
      CHILD: function(r, s, o, c, d) {
        var h = r.slice(0, 3) !== "nth", b = r.slice(-4) !== "last", T = s === "of-type";
        return c === 1 && d === 0 ? (
          // Shortcut for :nth-*(n)
          function(C) {
            return !!C.parentNode;
          }
        ) : function(C, D, L) {
          var $, R, M, se, ue, le = h !== b ? "nextSibling" : "previousSibling", Ee = C.parentNode, Te = T && C.nodeName.toLowerCase(), Ke = !L && !T, qe = !1;
          if (Ee) {
            if (h) {
              for (; le; ) {
                for (M = C; M = M[le]; )
                  if (T ? U(M, Te) : M.nodeType === 1)
                    return !1;
                ue = le = r === "only" && !ue && "nextSibling";
              }
              return !0;
            }
            if (ue = [b ? Ee.firstChild : Ee.lastChild], b && Ke) {
              for (R = Ee[l.expando] || (Ee[l.expando] = {}), $ = R[r] || [], se = $[0] === Ct && $[1], qe = se && $[2], M = se && Ee.childNodes[se]; M = ++se && M && M[le] || // Fallback to seeking `elem` from the start
              (qe = se = 0) || ue.pop(); )
                if (M.nodeType === 1 && ++qe && M === C) {
                  R[r] = [Ct, se, qe];
                  break;
                }
            } else if (Ke && (R = C[l.expando] || (C[l.expando] = {}), $ = R[r] || [], se = $[0] === Ct && $[1], qe = se), qe === !1)
              for (; (M = ++se && M && M[le] || (qe = se = 0) || ue.pop()) && !((T ? U(M, Te) : M.nodeType === 1) && ++qe && (Ke && (R = M[l.expando] || (M[l.expando] = {}), R[r] = [Ct, qe]), M === C)); )
                ;
            return qe -= d, qe === c || qe % c === 0 && qe / c >= 0;
          }
        };
      },
      PSEUDO: function(r, s) {
        var o = l.expr.pseudos[r] || l.expr.setFilters[r.toLowerCase()] || ge("unsupported pseudo: " + r);
        return o[l.expando] ? o(s) : o;
      }
    },
    pseudos: {
      // Potentially complex pseudos
      not: pt(function(r) {
        var s = [], o = [], c = En(r.replace(S, "$1"));
        return c[l.expando] ? pt(function(d, h, b, T) {
          for (var C, D = c(d, null, T, []), L = d.length; L--; )
            (C = D[L]) && (d[L] = !(h[L] = C));
        }) : function(d, h, b) {
          return s[0] = d, c(s, null, b, o), s[0] = null, !o.pop();
        };
      }),
      has: pt(function(r) {
        return function(s) {
          return ot(r, s).length > 0;
        };
      }),
      contains: pt(function(r) {
        return r = ce(r), function(s) {
          return (s.textContent || l.text(s)).indexOf(r) > -1;
        };
      }),
      // "Whether an element is represented by a :lang() selector
      // is based solely on the element's language value
      // being equal to the identifier C,
      // or beginning with the identifier C immediately followed by "-".
      // The matching of C against the element's language value is performed case-insensitively.
      // The identifier C does not have to be a valid language name."
      // https://www.w3.org/TR/selectors/#lang-pseudo
      lang: pt(function(r) {
        return Ra.test(r || "") || ge("unsupported lang: " + r), r = ce(r).toLowerCase(), function(s) {
          var o;
          do
            if (o = St ? s.lang : s.getAttribute("xml:lang") || s.getAttribute("lang"))
              return o = o.toLowerCase(), o === r || o.indexOf(r + "-") === 0;
          while ((s = s.parentNode) && s.nodeType === 1);
          return !1;
        };
      }),
      // Miscellaneous
      target: function(r) {
        var s = e.location && e.location.hash;
        return s && s.slice(1) === r.id;
      },
      root: function(r) {
        return r === Fs;
      },
      focus: function(r) {
        return r === He.activeElement && He.hasFocus() && !!(r.type || r.href || ~r.tabIndex);
      },
      // Boolean properties
      enabled: Ms(!1),
      disabled: Ms(!0),
      checked: function(r) {
        return U(r, "input") && !!r.checked || U(r, "option") && !!r.selected;
      },
      selected: function(r) {
        return V && r.parentNode && r.parentNode.selectedIndex, r.selected === !0;
      },
      // Contents
      empty: function(r) {
        for (r = r.firstChild; r; r = r.nextSibling)
          if (r.nodeType < 6)
            return !1;
        return !0;
      },
      parent: function(r) {
        return !l.expr.pseudos.empty(r);
      },
      // Element/input types
      header: function(r) {
        return Ha.test(r.nodeName);
      },
      input: function(r) {
        return La.test(r.nodeName);
      },
      button: function(r) {
        return U(r, "input") && r.type === "button" || U(r, "button");
      },
      text: function(r) {
        return U(r, "input") && r.type === "text";
      },
      // Position-in-collection
      first: Ft(function() {
        return [0];
      }),
      last: Ft(function(r, s) {
        return [s - 1];
      }),
      eq: Ft(function(r, s, o) {
        return [o < 0 ? o + s : o];
      }),
      even: Ft(function(r, s) {
        for (var o = 0; o < s; o += 2)
          r.push(o);
        return r;
      }),
      odd: Ft(function(r, s) {
        for (var o = 1; o < s; o += 2)
          r.push(o);
        return r;
      }),
      lt: Ft(function(r, s, o) {
        var c;
        for (o < 0 ? c = o + s : o > s ? c = s : c = o; --c >= 0; )
          r.push(c);
        return r;
      }),
      gt: Ft(function(r, s, o) {
        for (var c = o < 0 ? o + s : o; ++c < s; )
          r.push(c);
        return r;
      })
    }
  }, l.expr.pseudos.nth = l.expr.pseudos.eq;
  for (Be in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
    l.expr.pseudos[Be] = ja(Be);
  for (Be in { submit: !0, reset: !0 })
    l.expr.pseudos[Be] = Ia(Be);
  function $s() {
  }
  $s.prototype = l.expr.pseudos, l.expr.setFilters = new $s();
  function Nr(r, s, o) {
    var c = s.dir, d = s.next, h = d || c, b = o && h === "parentNode", T = Na++;
    return s.first ? (
      // Check against closest ancestor/preceding element
      function(C, D, L) {
        for (; C = C[c]; )
          if (C.nodeType === 1 || b)
            return r(C, D, L);
        return !1;
      }
    ) : (
      // Check against all ancestor/preceding elements
      function(C, D, L) {
        var $, R, M = [Ct, T];
        if (L) {
          for (; C = C[c]; )
            if ((C.nodeType === 1 || b) && r(C, D, L))
              return !0;
        } else
          for (; C = C[c]; )
            if (C.nodeType === 1 || b)
              if (R = C[l.expando] || (C[l.expando] = {}), d && U(C, d))
                C = C[c] || C;
              else {
                if (($ = R[h]) && $[0] === Ct && $[1] === T)
                  return M[2] = $[2];
                if (R[h] = M, M[2] = r(C, D, L))
                  return !0;
              }
        return !1;
      }
    );
  }
  function Sn(r) {
    return r.length > 1 ? function(s, o, c) {
      for (var d = r.length; d--; )
        if (!r[d](s, o, c))
          return !1;
      return !0;
    } : r[0];
  }
  function Ma(r, s, o) {
    for (var c = 0, d = s.length; c < d; c++)
      ot(r, s[c], o);
    return o;
  }
  function _r(r, s, o, c, d) {
    for (var h, b = [], T = 0, C = r.length, D = s != null; T < C; T++)
      (h = r[T]) && (!o || o(h, c, d)) && (b.push(h), D && s.push(T));
    return b;
  }
  function Cn(r, s, o, c, d, h) {
    return c && !c[l.expando] && (c = Cn(c)), d && !d[l.expando] && (d = Cn(d, h)), pt(function(b, T, C, D) {
      var L, $, R, M, se = [], ue = [], le = T.length, Ee = b || Ma(
        s || "*",
        C.nodeType ? [C] : C,
        []
      ), Te = r && (b || !s) ? _r(Ee, se, r, C, D) : Ee;
      if (o ? (M = d || (b ? r : le || c) ? (
        // ...intermediate processing is necessary
        []
      ) : (
        // ...otherwise use results directly
        T
      ), o(Te, M, C, D)) : M = Te, c)
        for (L = _r(M, ue), c(L, [], C, D), $ = L.length; $--; )
          (R = L[$]) && (M[ue[$]] = !(Te[ue[$]] = R));
      if (b) {
        if (d || r) {
          if (d) {
            for (L = [], $ = M.length; $--; )
              (R = M[$]) && L.push(Te[$] = R);
            d(null, M = [], L, D);
          }
          for ($ = M.length; $--; )
            (R = M[$]) && (L = d ? v.call(b, R) : se[$]) > -1 && (b[L] = !(T[L] = R));
        }
      } else
        M = _r(
          M === T ? M.splice(le, M.length) : M
        ), d ? d(null, T, M, D) : u.apply(T, M);
    });
  }
  function Tn(r) {
    for (var s, o, c, d = r.length, h = l.expr.relative[r[0].type], b = h || l.expr.relative[" "], T = h ? 1 : 0, C = Nr(function($) {
      return $ === s;
    }, b, !0), D = Nr(function($) {
      return v.call(s, $) > -1;
    }, b, !0), L = [function($, R, M) {
      var se = !h && (M || R != et) || ((s = R).nodeType ? C($, R, M) : D($, R, M));
      return s = null, se;
    }]; T < d; T++)
      if (o = l.expr.relative[r[T].type])
        L = [Nr(Sn(L), o)];
      else {
        if (o = l.expr.filter[r[T].type].apply(null, r[T].matches), o[l.expando]) {
          for (c = ++T; c < d && !l.expr.relative[r[c].type]; c++)
            ;
          return Cn(
            T > 1 && Sn(L),
            T > 1 && Ue(
              // If the preceding token was a descendant combinator, insert an implicit any-element `*`
              r.slice(0, T - 1).concat({ value: r[T - 2].type === " " ? "*" : "" })
            ).replace(S, "$1"),
            o,
            T < c && Tn(r.slice(T, c)),
            c < d && Tn(r = r.slice(c)),
            c < d && Ue(r)
          );
        }
        L.push(o);
      }
    return Sn(L);
  }
  function $a(r, s) {
    var o = s.length > 0, c = r.length > 0, d = function(h, b, T, C, D) {
      var L, $, R, M = 0, se = "0", ue = h && [], le = [], Ee = et, Te = h || c && l.expr.find.TAG("*", D), Ke = Ct += Ee == null ? 1 : Math.random() || 0.1;
      for (D && (et = b == He || b || D); (L = Te[se]) != null; se++) {
        if (c && L) {
          for ($ = 0, !b && L.ownerDocument != He && (Kt(L), T = !St); R = r[$++]; )
            if (R(L, b || He, T)) {
              u.call(C, L);
              break;
            }
          D && (Ct = Ke);
        }
        o && ((L = !R && L) && M--, h && ue.push(L));
      }
      if (M += se, o && se !== M) {
        for ($ = 0; R = s[$++]; )
          R(ue, le, b, T);
        if (h) {
          if (M > 0)
            for (; se--; )
              ue[se] || le[se] || (le[se] = ne.call(C));
          le = _r(le);
        }
        u.apply(C, le), D && !h && le.length > 0 && M + s.length > 1 && l.uniqueSort(C);
      }
      return D && (Ct = Ke, et = Ee), ue;
    };
    return o ? pt(d) : d;
  }
  function En(r, s) {
    var o, c = [], d = [], h = js[r + " "];
    if (!h) {
      for (s || (s = Le(r)), o = s.length; o--; )
        h = Tn(s[o]), h[l.expando] ? c.push(h) : d.push(h);
      h = js(
        r,
        $a(d, c)
      ), h.selector = r;
    }
    return h;
  }
  function Us(r, s, o, c) {
    var d, h, b, T, C, D = typeof r == "function" && r, L = !c && Le(r = D.selector || r);
    if (o = o || [], L.length === 1) {
      if (h = L[0] = L[0].slice(0), h.length > 2 && (b = h[0]).type === "ID" && s.nodeType === 9 && St && l.expr.relative[h[1].type]) {
        if (s = (l.expr.find.ID(
          ce(b.matches[0]),
          s
        ) || [])[0], s)
          D && (s = s.parentNode);
        else return o;
        r = r.slice(h.shift().value.length);
      }
      for (d = Is.needsContext.test(r) ? 0 : h.length; d-- && (b = h[d], !l.expr.relative[T = b.type]); )
        if ((C = l.expr.find[T]) && (c = C(
          ce(b.matches[0]),
          E.test(h[0].type) && Y(s.parentNode) || s
        ))) {
          if (h.splice(d, 1), r = c.length && Ue(h), !r)
            return u.apply(o, c), o;
          break;
        }
    }
    return (D || En(r, L))(
      c,
      s,
      !St,
      o,
      !s || E.test(r) && Y(s.parentNode) || s
    ), o;
  }
  Kt(), l.find = ot, ot.compile = En, ot.select = Us, ot.setDocument = Kt, ot.tokenize = Le;
  function Xt(r, s, o) {
    for (var c = [], d = o !== void 0; (r = r[s]) && r.nodeType !== 9; )
      if (r.nodeType === 1) {
        if (d && l(r).is(o))
          break;
        c.push(r);
      }
    return c;
  }
  function Ws(r, s) {
    for (var o = []; r; r = r.nextSibling)
      r.nodeType === 1 && r !== s && o.push(r);
    return o;
  }
  var Vs = l.expr.match.needsContext, Ks = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function Xs(r) {
    return r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3;
  }
  function An(r, s, o) {
    return typeof s == "function" ? l.grep(r, function(c, d) {
      return !!s.call(c, d, c) !== o;
    }) : s.nodeType ? l.grep(r, function(c) {
      return c === s !== o;
    }) : typeof s != "string" ? l.grep(r, function(c) {
      return v.call(s, c) > -1 !== o;
    }) : l.filter(s, r, o);
  }
  l.filter = function(r, s, o) {
    var c = s[0];
    return o && (r = ":not(" + r + ")"), s.length === 1 && c.nodeType === 1 ? l.find.matchesSelector(c, r) ? [c] : [] : l.find.matches(r, l.grep(s, function(d) {
      return d.nodeType === 1;
    }));
  }, l.fn.extend({
    find: function(r) {
      var s, o, c = this.length, d = this;
      if (typeof r != "string")
        return this.pushStack(l(r).filter(function() {
          for (s = 0; s < c; s++)
            if (l.contains(d[s], this))
              return !0;
        }));
      for (o = this.pushStack([]), s = 0; s < c; s++)
        l.find(r, d[s], o);
      return c > 1 ? l.uniqueSort(o) : o;
    },
    filter: function(r) {
      return this.pushStack(An(this, r || [], !1));
    },
    not: function(r) {
      return this.pushStack(An(this, r || [], !0));
    },
    is: function(r) {
      return !!An(
        this,
        // If this is a positional/relative selector, check membership in the returned set
        // so $("p:first").is("p:last") won't return true for a doc with two "p".
        typeof r == "string" && Vs.test(r) ? l(r) : r || [],
        !1
      ).length;
    }
  });
  var Rr, Ua = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Wa = l.fn.init = function(r, s) {
    var o, c;
    if (!r)
      return this;
    if (r.nodeType)
      return this[0] = r, this.length = 1, this;
    if (typeof r == "function")
      return Rr.ready !== void 0 ? Rr.ready(r) : (
        // Execute immediately if ready is not present
        r(l)
      );
    if (o = r + "", Xs(o))
      o = [null, r, null];
    else if (typeof r == "string")
      o = Ua.exec(r);
    else
      return l.makeArray(r, this);
    if (o && (o[1] || !s))
      if (o[1]) {
        if (s = s instanceof l ? s[0] : s, l.merge(this, l.parseHTML(
          o[1],
          s && s.nodeType ? s.ownerDocument || s : k,
          !0
        )), Ks.test(o[1]) && l.isPlainObject(s))
          for (o in s)
            typeof this[o] == "function" ? this[o](s[o]) : this.attr(o, s[o]);
        return this;
      } else
        return c = k.getElementById(o[2]), c && (this[0] = c, this.length = 1), this;
    else return !s || s.jquery ? (s || Rr).find(r) : this.constructor(s).find(r);
  };
  Wa.prototype = l.fn, Rr = l(k);
  var Va = /^(?:parents|prev(?:Until|All))/, Ka = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  l.fn.extend({
    has: function(r) {
      var s = l(r, this), o = s.length;
      return this.filter(function() {
        for (var c = 0; c < o; c++)
          if (l.contains(this, s[c]))
            return !0;
      });
    },
    closest: function(r, s) {
      var o, c = 0, d = this.length, h = [], b = typeof r != "string" && l(r);
      if (!Vs.test(r)) {
        for (; c < d; c++)
          for (o = this[c]; o && o !== s; o = o.parentNode)
            if (o.nodeType < 11 && (b ? b.index(o) > -1 : (
              // Don't pass non-elements to jQuery#find
              o.nodeType === 1 && l.find.matchesSelector(o, r)
            ))) {
              h.push(o);
              break;
            }
      }
      return this.pushStack(h.length > 1 ? l.uniqueSort(h) : h);
    },
    // Determine the position of an element within the set
    index: function(r) {
      return r ? typeof r == "string" ? v.call(l(r), this[0]) : v.call(
        this,
        // If it receives a jQuery object, the first element is used
        r.jquery ? r[0] : r
      ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function(r, s) {
      return this.pushStack(
        l.uniqueSort(
          l.merge(this.get(), l(r, s))
        )
      );
    },
    addBack: function(r) {
      return this.add(
        r == null ? this.prevObject : this.prevObject.filter(r)
      );
    }
  });
  function zs(r, s) {
    for (; (r = r[s]) && r.nodeType !== 1; )
      ;
    return r;
  }
  l.each({
    parent: function(r) {
      var s = r.parentNode;
      return s && s.nodeType !== 11 ? s : null;
    },
    parents: function(r) {
      return Xt(r, "parentNode");
    },
    parentsUntil: function(r, s, o) {
      return Xt(r, "parentNode", o);
    },
    next: function(r) {
      return zs(r, "nextSibling");
    },
    prev: function(r) {
      return zs(r, "previousSibling");
    },
    nextAll: function(r) {
      return Xt(r, "nextSibling");
    },
    prevAll: function(r) {
      return Xt(r, "previousSibling");
    },
    nextUntil: function(r, s, o) {
      return Xt(r, "nextSibling", o);
    },
    prevUntil: function(r, s, o) {
      return Xt(r, "previousSibling", o);
    },
    siblings: function(r) {
      return Ws((r.parentNode || {}).firstChild, r);
    },
    children: function(r) {
      return Ws(r.firstChild);
    },
    contents: function(r) {
      return r.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      i(r.contentDocument) ? r.contentDocument : (U(r, "template") && (r = r.content || r), l.merge([], r.childNodes));
    }
  }, function(r, s) {
    l.fn[r] = function(o, c) {
      var d = l.map(this, s, o);
      return r.slice(-5) !== "Until" && (c = o), c && typeof c == "string" && (d = l.filter(c, d)), this.length > 1 && (Ka[r] || l.uniqueSort(d), Va.test(r) && d.reverse()), this.pushStack(d);
    };
  });
  function Xa(r) {
    var s = {};
    return l.each(r.match(Ce) || [], function(o, c) {
      s[c] = !0;
    }), s;
  }
  l.Callbacks = function(r) {
    r = typeof r == "string" ? Xa(r) : l.extend({}, r);
    var s, o, c, d, h = [], b = [], T = -1, C = function() {
      for (d = d || r.once, c = s = !0; b.length; T = -1)
        for (o = b.shift(); ++T < h.length; )
          h[T].apply(o[0], o[1]) === !1 && r.stopOnFalse && (T = h.length, o = !1);
      r.memory || (o = !1), s = !1, d && (o ? h = [] : h = "");
    }, D = {
      // Add a callback or a collection of callbacks to the list
      add: function() {
        return h && (o && !s && (T = h.length - 1, b.push(o)), function L($) {
          l.each($, function(R, M) {
            typeof M == "function" ? (!r.unique || !D.has(M)) && h.push(M) : M && M.length && F(M) !== "string" && L(M);
          });
        }(arguments), o && !s && C()), this;
      },
      // Remove a callback from the list
      remove: function() {
        return l.each(arguments, function(L, $) {
          for (var R; (R = l.inArray($, h, R)) > -1; )
            h.splice(R, 1), R <= T && T--;
        }), this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function(L) {
        return L ? l.inArray(L, h) > -1 : h.length > 0;
      },
      // Remove all callbacks from the list
      empty: function() {
        return h && (h = []), this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function() {
        return d = b = [], h = o = "", this;
      },
      disabled: function() {
        return !h;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function() {
        return d = b = [], !o && !s && (h = o = ""), this;
      },
      locked: function() {
        return !!d;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function(L, $) {
        return d || ($ = $ || [], $ = [L, $.slice ? $.slice() : $], b.push($), s || C()), this;
      },
      // Call all the callbacks with the given arguments
      fire: function() {
        return D.fireWith(this, arguments), this;
      },
      // To know if the callbacks have already been called at least once
      fired: function() {
        return !!c;
      }
    };
    return D;
  };
  function zt(r) {
    return r;
  }
  function Lr(r) {
    throw r;
  }
  function Gs(r, s, o, c) {
    var d;
    try {
      r && typeof (d = r.promise) == "function" ? d.call(r).done(s).fail(o) : r && typeof (d = r.then) == "function" ? d.call(r, s, o) : s.apply(void 0, [r].slice(c));
    } catch (h) {
      o(h);
    }
  }
  l.extend({
    Deferred: function(r) {
      var s = [
        // action, add listener, callbacks,
        // ... .then handlers, argument index, [final state]
        [
          "notify",
          "progress",
          l.Callbacks("memory"),
          l.Callbacks("memory"),
          2
        ],
        [
          "resolve",
          "done",
          l.Callbacks("once memory"),
          l.Callbacks("once memory"),
          0,
          "resolved"
        ],
        [
          "reject",
          "fail",
          l.Callbacks("once memory"),
          l.Callbacks("once memory"),
          1,
          "rejected"
        ]
      ], o = "pending", c = {
        state: function() {
          return o;
        },
        always: function() {
          return d.done(arguments).fail(arguments), this;
        },
        catch: function(h) {
          return c.then(null, h);
        },
        // Keep pipe for back-compat
        pipe: function() {
          var h = arguments;
          return l.Deferred(function(b) {
            l.each(s, function(T, C) {
              var D = typeof h[C[4]] == "function" && h[C[4]];
              d[C[1]](function() {
                var L = D && D.apply(this, arguments);
                L && typeof L.promise == "function" ? L.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[C[0] + "With"](
                  this,
                  D ? [L] : arguments
                );
              });
            }), h = null;
          }).promise();
        },
        then: function(h, b, T) {
          var C = 0;
          function D(L, $, R, M) {
            return function() {
              var se = this, ue = arguments, le = function() {
                var Te, Ke;
                if (!(L < C)) {
                  if (Te = R.apply(se, ue), Te === $.promise())
                    throw new TypeError("Thenable self-resolution");
                  Ke = Te && // Support: Promises/A+ section 2.3.4
                  // https://promisesaplus.com/#point-64
                  // Only check objects and functions for thenability
                  (typeof Te == "object" || typeof Te == "function") && Te.then, typeof Ke == "function" ? M ? Ke.call(
                    Te,
                    D(C, $, zt, M),
                    D(C, $, Lr, M)
                  ) : (C++, Ke.call(
                    Te,
                    D(C, $, zt, M),
                    D(C, $, Lr, M),
                    D(
                      C,
                      $,
                      zt,
                      $.notifyWith
                    )
                  )) : (R !== zt && (se = void 0, ue = [Te]), (M || $.resolveWith)(se, ue));
                }
              }, Ee = M ? le : function() {
                try {
                  le();
                } catch (Te) {
                  l.Deferred.exceptionHook && l.Deferred.exceptionHook(
                    Te,
                    Ee.error
                  ), L + 1 >= C && (R !== Lr && (se = void 0, ue = [Te]), $.rejectWith(se, ue));
                }
              };
              L ? Ee() : (l.Deferred.getErrorHook && (Ee.error = l.Deferred.getErrorHook()), e.setTimeout(Ee));
            };
          }
          return l.Deferred(function(L) {
            s[0][3].add(
              D(
                0,
                L,
                typeof T == "function" ? T : zt,
                L.notifyWith
              )
            ), s[1][3].add(
              D(
                0,
                L,
                typeof h == "function" ? h : zt
              )
            ), s[2][3].add(
              D(
                0,
                L,
                typeof b == "function" ? b : Lr
              )
            );
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function(h) {
          return h != null ? l.extend(h, c) : c;
        }
      }, d = {};
      return l.each(s, function(h, b) {
        var T = b[2], C = b[5];
        c[b[1]] = T.add, C && T.add(
          function() {
            o = C;
          },
          // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          s[3 - h][2].disable,
          // rejected_handlers.disable
          // fulfilled_handlers.disable
          s[3 - h][3].disable,
          // progress_callbacks.lock
          s[0][2].lock,
          // progress_handlers.lock
          s[0][3].lock
        ), T.add(b[3].fire), d[b[0]] = function() {
          return d[b[0] + "With"](this === d ? void 0 : this, arguments), this;
        }, d[b[0] + "With"] = T.fireWith;
      }), c.promise(d), r && r.call(d, d), d;
    },
    // Deferred helper
    when: function(r) {
      var s = arguments.length, o = s, c = Array(o), d = a.call(arguments), h = l.Deferred(), b = function(T) {
        return function(C) {
          c[T] = this, d[T] = arguments.length > 1 ? a.call(arguments) : C, --s || h.resolveWith(c, d);
        };
      };
      if (s <= 1 && (Gs(
        r,
        h.done(b(o)).resolve,
        h.reject,
        !s
      ), h.state() === "pending" || typeof (d[o] && d[o].then) == "function"))
        return h.then();
      for (; o--; )
        Gs(d[o], b(o), h.reject);
      return h.promise();
    }
  });
  var za = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  l.Deferred.exceptionHook = function(r, s) {
    r && za.test(r.name) && e.console.warn(
      "jQuery.Deferred exception",
      r,
      s
    );
  }, l.readyException = function(r) {
    e.setTimeout(function() {
      throw r;
    });
  };
  var On = l.Deferred();
  l.fn.ready = function(r) {
    return On.then(r).catch(function(s) {
      l.readyException(s);
    }), this;
  }, l.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: !1,
    // A counter to track how many items to wait for before
    // the ready event fires. See trac-6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function(r) {
      (r === !0 ? --l.readyWait : l.isReady) || (l.isReady = !0, !(r !== !0 && --l.readyWait > 0) && On.resolveWith(k, [l]));
    }
  }), l.ready.then = On.then;
  function Hr() {
    k.removeEventListener("DOMContentLoaded", Hr), e.removeEventListener("load", Hr), l.ready();
  }
  k.readyState !== "loading" ? e.setTimeout(l.ready) : (k.addEventListener("DOMContentLoaded", Hr), e.addEventListener("load", Hr));
  var Ga = /-([a-z])/g;
  function Qa(r, s) {
    return s.toUpperCase();
  }
  function Bt(r) {
    return r.replace(Ga, Qa);
  }
  function ur(r) {
    return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType;
  }
  function fr() {
    this.expando = l.expando + fr.uid++;
  }
  fr.uid = 1, fr.prototype = {
    cache: function(r) {
      var s = r[this.expando];
      return s || (s = /* @__PURE__ */ Object.create(null), ur(r) && (r.nodeType ? r[this.expando] = s : Object.defineProperty(r, this.expando, {
        value: s,
        configurable: !0
      }))), s;
    },
    set: function(r, s, o) {
      var c, d = this.cache(r);
      if (typeof s == "string")
        d[Bt(s)] = o;
      else
        for (c in s)
          d[Bt(c)] = s[c];
      return o;
    },
    get: function(r, s) {
      return s === void 0 ? this.cache(r) : (
        // Always use camelCase key (gh-2257)
        r[this.expando] && r[this.expando][Bt(s)]
      );
    },
    access: function(r, s, o) {
      return s === void 0 || s && typeof s == "string" && o === void 0 ? this.get(r, s) : (this.set(r, s, o), o !== void 0 ? o : s);
    },
    remove: function(r, s) {
      var o, c = r[this.expando];
      if (c !== void 0) {
        if (s !== void 0)
          for (Array.isArray(s) ? s = s.map(Bt) : (s = Bt(s), s = s in c ? [s] : s.match(Ce) || []), o = s.length; o--; )
            delete c[s[o]];
        (s === void 0 || l.isEmptyObject(c)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando]);
      }
    },
    hasData: function(r) {
      var s = r[this.expando];
      return s !== void 0 && !l.isEmptyObject(s);
    }
  };
  var de = new fr(), We = new fr(), Ja = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ya = /[A-Z]/g;
  function Za(r) {
    return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : Ja.test(r) ? JSON.parse(r) : r;
  }
  function Qs(r, s, o) {
    var c;
    if (o === void 0 && r.nodeType === 1)
      if (c = "data-" + s.replace(Ya, "-$&").toLowerCase(), o = r.getAttribute(c), typeof o == "string") {
        try {
          o = Za(o);
        } catch {
        }
        We.set(r, s, o);
      } else
        o = void 0;
    return o;
  }
  l.extend({
    hasData: function(r) {
      return We.hasData(r) || de.hasData(r);
    },
    data: function(r, s, o) {
      return We.access(r, s, o);
    },
    removeData: function(r, s) {
      We.remove(r, s);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function(r, s, o) {
      return de.access(r, s, o);
    },
    _removeData: function(r, s) {
      de.remove(r, s);
    }
  }), l.fn.extend({
    data: function(r, s) {
      var o, c, d, h = this[0], b = h && h.attributes;
      if (r === void 0) {
        if (this.length && (d = We.get(h), h.nodeType === 1 && !de.get(h, "hasDataAttrs"))) {
          for (o = b.length; o--; )
            b[o] && (c = b[o].name, c.indexOf("data-") === 0 && (c = Bt(c.slice(5)), Qs(h, c, d[c])));
          de.set(h, "hasDataAttrs", !0);
        }
        return d;
      }
      return typeof r == "object" ? this.each(function() {
        We.set(this, r);
      }) : Re(this, function(T) {
        var C;
        if (h && T === void 0)
          return C = We.get(h, r), C !== void 0 || (C = Qs(h, r), C !== void 0) ? C : void 0;
        this.each(function() {
          We.set(this, r, T);
        });
      }, null, s, arguments.length > 1, null, !0);
    },
    removeData: function(r) {
      return this.each(function() {
        We.remove(this, r);
      });
    }
  }), l.extend({
    queue: function(r, s, o) {
      var c;
      if (r)
        return s = (s || "fx") + "queue", c = de.get(r, s), o && (!c || Array.isArray(o) ? c = de.set(r, s, l.makeArray(o)) : c.push(o)), c || [];
    },
    dequeue: function(r, s) {
      s = s || "fx";
      var o = l.queue(r, s), c = o.length, d = o.shift(), h = l._queueHooks(r, s), b = function() {
        l.dequeue(r, s);
      };
      d === "inprogress" && (d = o.shift(), c--), d && (s === "fx" && o.unshift("inprogress"), delete h.stop, d.call(r, b, h)), !c && h && h.empty.fire();
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function(r, s) {
      var o = s + "queueHooks";
      return de.get(r, o) || de.set(r, o, {
        empty: l.Callbacks("once memory").add(function() {
          de.remove(r, [s + "queue", o]);
        })
      });
    }
  }), l.fn.extend({
    queue: function(r, s) {
      var o = 2;
      return typeof r != "string" && (s = r, r = "fx", o--), arguments.length < o ? l.queue(this[0], r) : s === void 0 ? this : this.each(function() {
        var c = l.queue(this, r, s);
        l._queueHooks(this, r), r === "fx" && c[0] !== "inprogress" && l.dequeue(this, r);
      });
    },
    dequeue: function(r) {
      return this.each(function() {
        l.dequeue(this, r);
      });
    },
    clearQueue: function(r) {
      return this.queue(r || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function(r, s) {
      var o, c = 1, d = l.Deferred(), h = this, b = this.length, T = function() {
        --c || d.resolveWith(h, [h]);
      };
      for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; b--; )
        o = de.get(h[b], r + "queueHooks"), o && o.empty && (c++, o.empty.add(T));
      return T(), d.promise(s);
    }
  });
  var Js = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, dr = new RegExp("^(?:([+-])=|)(" + Js + ")([a-z%]*)$", "i"), At = ["Top", "Right", "Bottom", "Left"];
  function qr(r, s) {
    return r = s || r, r.style.display === "none" || r.style.display === "" && l.css(r, "display") === "none";
  }
  var el = /^[a-z]/, tl = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  function Fr(r) {
    return el.test(r) && tl.test(r[0].toUpperCase() + r.slice(1));
  }
  function Ys(r, s, o, c) {
    var d, h, b = 20, T = c ? function() {
      return c.cur();
    } : function() {
      return l.css(r, s, "");
    }, C = T(), D = o && o[3] || (Fr(s) ? "px" : ""), L = r.nodeType && (!Fr(s) || D !== "px" && +C) && dr.exec(l.css(r, s));
    if (L && L[3] !== D) {
      for (C = C / 2, D = D || L[3], L = +C || 1; b--; )
        l.style(r, s, L + D), (1 - h) * (1 - (h = T() / C || 0.5)) <= 0 && (b = 0), L = L / h;
      L = L * 2, l.style(r, s, L + D), o = o || [];
    }
    return o && (L = +L || +C || 0, d = o[1] ? L + (o[1] + 1) * o[2] : +o[2], c && (c.unit = D, c.start = L, c.end = d)), d;
  }
  var rl = /^-ms-/;
  function kn(r) {
    return Bt(r.replace(rl, "ms-"));
  }
  var Zs = {};
  function nl(r) {
    var s, o = r.ownerDocument, c = r.nodeName, d = Zs[c];
    return d || (s = o.body.appendChild(o.createElement(c)), d = l.css(s, "display"), s.parentNode.removeChild(s), d === "none" && (d = "block"), Zs[c] = d, d);
  }
  function Gt(r, s) {
    for (var o, c, d = [], h = 0, b = r.length; h < b; h++)
      c = r[h], c.style && (o = c.style.display, s ? (o === "none" && (d[h] = de.get(c, "display") || null, d[h] || (c.style.display = "")), c.style.display === "" && qr(c) && (d[h] = nl(c))) : o !== "none" && (d[h] = "none", de.set(c, "display", o)));
    for (h = 0; h < b; h++)
      d[h] != null && (r[h].style.display = d[h]);
    return r;
  }
  l.fn.extend({
    show: function() {
      return Gt(this, !0);
    },
    hide: function() {
      return Gt(this);
    },
    toggle: function(r) {
      return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function() {
        qr(this) ? l(this).show() : l(this).hide();
      });
    }
  });
  var hr = function(r) {
    return l.contains(r.ownerDocument, r) || r.getRootNode(sl) === r.ownerDocument;
  }, sl = { composed: !0 };
  O.getRootNode || (hr = function(r) {
    return l.contains(r.ownerDocument, r);
  });
  var ei = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Tt = {
    // Table parts need to be wrapped with `<table>` or they're
    // stripped to their contents when put in a div.
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do, so we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: ["table"],
    col: ["colgroup", "table"],
    tr: ["tbody", "table"],
    td: ["tr", "tbody", "table"]
  };
  Tt.tbody = Tt.tfoot = Tt.colgroup = Tt.caption = Tt.thead, Tt.th = Tt.td;
  function Ve(r, s) {
    var o;
    return typeof r.getElementsByTagName < "u" ? o = n.slice.call(r.getElementsByTagName(s || "*")) : typeof r.querySelectorAll < "u" ? o = r.querySelectorAll(s || "*") : o = [], s === void 0 || s && U(r, s) ? l.merge([r], o) : o;
  }
  var ti = /^$|^module$|\/(?:java|ecma)script/i;
  function Dn(r, s) {
    for (var o = 0, c = r.length; o < c; o++)
      de.set(
        r[o],
        "globalEval",
        !s || de.get(s[o], "globalEval")
      );
  }
  var il = /<|&#?\w+;/;
  function ri(r, s, o, c, d) {
    for (var h, b, T, C, D, L, $ = s.createDocumentFragment(), R = [], M = 0, se = r.length; M < se; M++)
      if (h = r[M], h || h === 0)
        if (F(h) === "object" && (h.nodeType || X(h)))
          l.merge(R, h.nodeType ? [h] : h);
        else if (!il.test(h))
          R.push(s.createTextNode(h));
        else {
          for (b = b || $.appendChild(s.createElement("div")), T = (ei.exec(h) || ["", ""])[1].toLowerCase(), C = Tt[T] || n, L = C.length; --L > -1; )
            b = b.appendChild(s.createElement(C[L]));
          b.innerHTML = l.htmlPrefilter(h), l.merge(R, b.childNodes), b = $.firstChild, b.textContent = "";
        }
    for ($.textContent = "", M = 0; h = R[M++]; ) {
      if (c && l.inArray(h, c) > -1) {
        d && d.push(h);
        continue;
      }
      if (D = hr(h), b = Ve($.appendChild(h), "script"), D && Dn(b), o)
        for (L = 0; h = b[L++]; )
          ti.test(h.type || "") && o.push(h);
    }
    return $;
  }
  function ol(r) {
    return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r;
  }
  function al(r) {
    return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r;
  }
  function Qt(r, s, o, c) {
    s = f(s);
    var d, h, b, T, C, D, L = 0, $ = r.length, R = $ - 1, M = s[0], se = typeof M == "function";
    if (se)
      return r.each(function(ue) {
        var le = r.eq(ue);
        s[0] = M.call(this, ue, le.html()), Qt(le, s, o, c);
      });
    if ($ && (d = ri(s, r[0].ownerDocument, !1, r, c), h = d.firstChild, d.childNodes.length === 1 && (d = h), h || c)) {
      for (b = l.map(Ve(d, "script"), ol), T = b.length; L < $; L++)
        C = d, L !== R && (C = l.clone(C, !0, !0), T && l.merge(b, Ve(C, "script"))), o.call(r[L], C, L);
      if (T)
        for (D = b[b.length - 1].ownerDocument, l.map(b, al), L = 0; L < T; L++)
          C = b[L], ti.test(C.type || "") && !de.get(C, "globalEval") && l.contains(D, C) && (C.src && (C.type || "").toLowerCase() !== "module" ? l._evalUrl && !C.noModule && l._evalUrl(C.src, {
            nonce: C.nonce,
            crossOrigin: C.crossOrigin
          }, D) : j(C.textContent, C, D));
    }
    return r;
  }
  var Br = /^(?:checkbox|radio)$/i, ni = /^([^.]*)(?:\.(.+)|)/;
  function Jt() {
    return !0;
  }
  function Yt() {
    return !1;
  }
  function Nn(r, s, o, c, d, h) {
    var b, T;
    if (typeof s == "object") {
      typeof o != "string" && (c = c || o, o = void 0);
      for (T in s)
        Nn(r, T, o, c, s[T], h);
      return r;
    }
    if (c == null && d == null ? (d = o, c = o = void 0) : d == null && (typeof o == "string" ? (d = c, c = void 0) : (d = c, c = o, o = void 0)), d === !1)
      d = Yt;
    else if (!d)
      return r;
    return h === 1 && (b = d, d = function(C) {
      return l().off(C), b.apply(this, arguments);
    }, d.guid = b.guid || (b.guid = l.guid++)), r.each(function() {
      l.event.add(this, s, d, c, o);
    });
  }
  l.event = {
    add: function(r, s, o, c, d) {
      var h, b, T, C, D, L, $, R, M, se, ue, le = de.get(r);
      if (ur(r))
        for (o.handler && (h = o, o = h.handler, d = h.selector), d && l.find.matchesSelector(O, d), o.guid || (o.guid = l.guid++), (C = le.events) || (C = le.events = /* @__PURE__ */ Object.create(null)), (b = le.handle) || (b = le.handle = function(Ee) {
          return typeof l < "u" && l.event.triggered !== Ee.type ? l.event.dispatch.apply(r, arguments) : void 0;
        }), s = (s || "").match(Ce) || [""], D = s.length; D--; )
          T = ni.exec(s[D]) || [], M = ue = T[1], se = (T[2] || "").split(".").sort(), M && ($ = l.event.special[M] || {}, M = (d ? $.delegateType : $.bindType) || M, $ = l.event.special[M] || {}, L = l.extend({
            type: M,
            origType: ue,
            data: c,
            handler: o,
            guid: o.guid,
            selector: d,
            needsContext: d && l.expr.match.needsContext.test(d),
            namespace: se.join(".")
          }, h), (R = C[M]) || (R = C[M] = [], R.delegateCount = 0, (!$.setup || $.setup.call(r, c, se, b) === !1) && r.addEventListener && r.addEventListener(M, b)), $.add && ($.add.call(r, L), L.handler.guid || (L.handler.guid = o.guid)), d ? R.splice(R.delegateCount++, 0, L) : R.push(L));
    },
    // Detach an event or set of events from an element
    remove: function(r, s, o, c, d) {
      var h, b, T, C, D, L, $, R, M, se, ue, le = de.hasData(r) && de.get(r);
      if (!(!le || !(C = le.events))) {
        for (s = (s || "").match(Ce) || [""], D = s.length; D--; ) {
          if (T = ni.exec(s[D]) || [], M = ue = T[1], se = (T[2] || "").split(".").sort(), !M) {
            for (M in C)
              l.event.remove(r, M + s[D], o, c, !0);
            continue;
          }
          for ($ = l.event.special[M] || {}, M = (c ? $.delegateType : $.bindType) || M, R = C[M] || [], T = T[2] && new RegExp("(^|\\.)" + se.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = h = R.length; h--; )
            L = R[h], (d || ue === L.origType) && (!o || o.guid === L.guid) && (!T || T.test(L.namespace)) && (!c || c === L.selector || c === "**" && L.selector) && (R.splice(h, 1), L.selector && R.delegateCount--, $.remove && $.remove.call(r, L));
          b && !R.length && ((!$.teardown || $.teardown.call(r, se, le.handle) === !1) && l.removeEvent(r, M, le.handle), delete C[M]);
        }
        l.isEmptyObject(C) && de.remove(r, "handle events");
      }
    },
    dispatch: function(r) {
      var s, o, c, d, h, b, T = new Array(arguments.length), C = l.event.fix(r), D = (de.get(this, "events") || /* @__PURE__ */ Object.create(null))[C.type] || [], L = l.event.special[C.type] || {};
      for (T[0] = C, s = 1; s < arguments.length; s++)
        T[s] = arguments[s];
      if (C.delegateTarget = this, !(L.preDispatch && L.preDispatch.call(this, C) === !1)) {
        for (b = l.event.handlers.call(this, C, D), s = 0; (d = b[s++]) && !C.isPropagationStopped(); )
          for (C.currentTarget = d.elem, o = 0; (h = d.handlers[o++]) && !C.isImmediatePropagationStopped(); )
            (!C.rnamespace || h.namespace === !1 || C.rnamespace.test(h.namespace)) && (C.handleObj = h, C.data = h.data, c = ((l.event.special[h.origType] || {}).handle || h.handler).apply(d.elem, T), c !== void 0 && (C.result = c) === !1 && (C.preventDefault(), C.stopPropagation()));
        return L.postDispatch && L.postDispatch.call(this, C), C.result;
      }
    },
    handlers: function(r, s) {
      var o, c, d, h, b, T = [], C = s.delegateCount, D = r.target;
      if (C && // Support: Firefox <=42 - 66+
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11+
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(r.type === "click" && r.button >= 1)) {
        for (; D !== this; D = D.parentNode || this)
          if (D.nodeType === 1 && !(r.type === "click" && D.disabled === !0)) {
            for (h = [], b = {}, o = 0; o < C; o++)
              c = s[o], d = c.selector + " ", b[d] === void 0 && (b[d] = c.needsContext ? l(d, this).index(D) > -1 : l.find(d, this, null, [D]).length), b[d] && h.push(c);
            h.length && T.push({ elem: D, handlers: h });
          }
      }
      return D = this, C < s.length && T.push({ elem: D, handlers: s.slice(C) }), T;
    },
    addProp: function(r, s) {
      Object.defineProperty(l.Event.prototype, r, {
        enumerable: !0,
        configurable: !0,
        get: typeof s == "function" ? function() {
          if (this.originalEvent)
            return s(this.originalEvent);
        } : function() {
          if (this.originalEvent)
            return this.originalEvent[r];
        },
        set: function(o) {
          Object.defineProperty(this, r, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
          });
        }
      });
    },
    fix: function(r) {
      return r[l.expando] ? r : new l.Event(r);
    },
    special: l.extend(/* @__PURE__ */ Object.create(null), {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: !0
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function(r) {
          var s = this || r;
          return Br.test(s.type) && s.click && U(s, "input") && jr(s, "click", !0), !1;
        },
        trigger: function(r) {
          var s = this || r;
          return Br.test(s.type) && s.click && U(s, "input") && jr(s, "click"), !0;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function(r) {
          var s = r.target;
          return Br.test(s.type) && s.click && U(s, "input") && de.get(s, "click") || U(s, "a");
        }
      },
      beforeunload: {
        postDispatch: function(r) {
          r.result !== void 0 && r.preventDefault();
        }
      }
    })
  };
  function jr(r, s, o) {
    if (!o) {
      de.get(r, s) === void 0 && l.event.add(r, s, Jt);
      return;
    }
    de.set(r, s, !1), l.event.add(r, s, {
      namespace: !1,
      handler: function(c) {
        var d, h = de.get(this, s);
        if (c.isTrigger & 1 && this[s]) {
          if (h.length)
            (l.event.special[s] || {}).delegateType && c.stopPropagation();
          else if (h = a.call(arguments), de.set(this, s, h), this[s](), d = de.get(this, s), de.set(this, s, !1), h !== d)
            return c.stopImmediatePropagation(), c.preventDefault(), d && d.value;
        } else h.length && (de.set(this, s, {
          value: l.event.trigger(
            h[0],
            h.slice(1),
            this
          )
        }), c.stopPropagation(), c.isImmediatePropagationStopped = Jt);
      }
    });
  }
  l.removeEvent = function(r, s, o) {
    r.removeEventListener && r.removeEventListener(s, o);
  }, l.Event = function(r, s) {
    if (!(this instanceof l.Event))
      return new l.Event(r, s);
    r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented ? Jt : Yt, this.target = r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, s && l.extend(this, s), this.timeStamp = r && r.timeStamp || Date.now(), this[l.expando] = !0;
  }, l.Event.prototype = {
    constructor: l.Event,
    isDefaultPrevented: Yt,
    isPropagationStopped: Yt,
    isImmediatePropagationStopped: Yt,
    isSimulated: !1,
    preventDefault: function() {
      var r = this.originalEvent;
      this.isDefaultPrevented = Jt, r && !this.isSimulated && r.preventDefault();
    },
    stopPropagation: function() {
      var r = this.originalEvent;
      this.isPropagationStopped = Jt, r && !this.isSimulated && r.stopPropagation();
    },
    stopImmediatePropagation: function() {
      var r = this.originalEvent;
      this.isImmediatePropagationStopped = Jt, r && !this.isSimulated && r.stopImmediatePropagation(), this.stopPropagation();
    }
  }, l.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, l.event.addProp), l.each({ focus: "focusin", blur: "focusout" }, function(r, s) {
    function o(c) {
      var d = l.event.fix(c);
      d.type = c.type === "focusin" ? "focus" : "blur", d.isSimulated = !0, d.target === d.currentTarget && de.get(this, "handle")(d);
    }
    l.event.special[r] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function() {
        if (jr(this, r, !0), V)
          this.addEventListener(s, o);
        else
          return !1;
      },
      trigger: function() {
        return jr(this, r), !0;
      },
      teardown: function() {
        if (V)
          this.removeEventListener(s, o);
        else
          return !1;
      },
      // Suppress native focus or blur if we're currently inside
      // a leveraged native-event stack
      _default: function(c) {
        return de.get(c.target, r);
      },
      delegateType: s
    };
  }), l.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(r, s) {
    l.event.special[r] = {
      delegateType: s,
      bindType: s,
      handle: function(o) {
        var c, d = this, h = o.relatedTarget, b = o.handleObj;
        return (!h || h !== d && !l.contains(d, h)) && (o.type = b.origType, c = b.handler.apply(this, arguments), o.type = s), c;
      }
    };
  }), l.fn.extend({
    on: function(r, s, o, c) {
      return Nn(this, r, s, o, c);
    },
    one: function(r, s, o, c) {
      return Nn(this, r, s, o, c, 1);
    },
    off: function(r, s, o) {
      var c, d;
      if (r && r.preventDefault && r.handleObj)
        return c = r.handleObj, l(r.delegateTarget).off(
          c.namespace ? c.origType + "." + c.namespace : c.origType,
          c.selector,
          c.handler
        ), this;
      if (typeof r == "object") {
        for (d in r)
          this.off(d, s, r[d]);
        return this;
      }
      return (s === !1 || typeof s == "function") && (o = s, s = void 0), o === !1 && (o = Yt), this.each(function() {
        l.event.remove(this, r, o, s);
      });
    }
  });
  var ll = /<script|<style|<link/i;
  function si(r, s) {
    return U(r, "table") && U(s.nodeType !== 11 ? s : s.firstChild, "tr") && l(r).children("tbody")[0] || r;
  }
  function ii(r, s) {
    var o, c, d, h = de.get(r, "events");
    if (s.nodeType === 1) {
      if (h) {
        de.remove(s, "handle events");
        for (o in h)
          for (c = 0, d = h[o].length; c < d; c++)
            l.event.add(s, o, h[o][c]);
      }
      We.hasData(r) && We.set(s, l.extend({}, We.get(r)));
    }
  }
  function oi(r, s, o) {
    for (var c, d = s ? l.filter(s, r) : r, h = 0; (c = d[h]) != null; h++)
      !o && c.nodeType === 1 && l.cleanData(Ve(c)), c.parentNode && (o && hr(c) && Dn(Ve(c, "script")), c.parentNode.removeChild(c));
    return r;
  }
  l.extend({
    htmlPrefilter: function(r) {
      return r;
    },
    clone: function(r, s, o) {
      var c, d, h, b, T = r.cloneNode(!0), C = hr(r);
      if (V && (r.nodeType === 1 || r.nodeType === 11) && !l.isXMLDoc(r))
        for (b = Ve(T), h = Ve(r), c = 0, d = h.length; c < d; c++)
          U(b[c], "textarea") && (b[c].defaultValue = h[c].defaultValue);
      if (s)
        if (o)
          for (h = h || Ve(r), b = b || Ve(T), c = 0, d = h.length; c < d; c++)
            ii(h[c], b[c]);
        else
          ii(r, T);
      return b = Ve(T, "script"), b.length > 0 && Dn(b, !C && Ve(r, "script")), T;
    },
    cleanData: function(r) {
      for (var s, o, c, d = l.event.special, h = 0; (o = r[h]) !== void 0; h++)
        if (ur(o)) {
          if (s = o[de.expando]) {
            if (s.events)
              for (c in s.events)
                d[c] ? l.event.remove(o, c) : l.removeEvent(o, c, s.handle);
            o[de.expando] = void 0;
          }
          o[We.expando] && (o[We.expando] = void 0);
        }
    }
  }), l.fn.extend({
    detach: function(r) {
      return oi(this, r, !0);
    },
    remove: function(r) {
      return oi(this, r);
    },
    text: function(r) {
      return Re(this, function(s) {
        return s === void 0 ? l.text(this) : this.empty().each(function() {
          (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = s);
        });
      }, null, r, arguments.length);
    },
    append: function() {
      return Qt(this, arguments, function(r) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var s = si(this, r);
          s.appendChild(r);
        }
      });
    },
    prepend: function() {
      return Qt(this, arguments, function(r) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var s = si(this, r);
          s.insertBefore(r, s.firstChild);
        }
      });
    },
    before: function() {
      return Qt(this, arguments, function(r) {
        this.parentNode && this.parentNode.insertBefore(r, this);
      });
    },
    after: function() {
      return Qt(this, arguments, function(r) {
        this.parentNode && this.parentNode.insertBefore(r, this.nextSibling);
      });
    },
    empty: function() {
      for (var r, s = 0; (r = this[s]) != null; s++)
        r.nodeType === 1 && (l.cleanData(Ve(r, !1)), r.textContent = "");
      return this;
    },
    clone: function(r, s) {
      return r = r ?? !1, s = s ?? r, this.map(function() {
        return l.clone(this, r, s);
      });
    },
    html: function(r) {
      return Re(this, function(s) {
        var o = this[0] || {}, c = 0, d = this.length;
        if (s === void 0 && o.nodeType === 1)
          return o.innerHTML;
        if (typeof s == "string" && !ll.test(s) && !Tt[(ei.exec(s) || ["", ""])[1].toLowerCase()]) {
          s = l.htmlPrefilter(s);
          try {
            for (; c < d; c++)
              o = this[c] || {}, o.nodeType === 1 && (l.cleanData(Ve(o, !1)), o.innerHTML = s);
            o = 0;
          } catch {
          }
        }
        o && this.empty().append(s);
      }, null, r, arguments.length);
    },
    replaceWith: function() {
      var r = [];
      return Qt(this, arguments, function(s) {
        var o = this.parentNode;
        l.inArray(this, r) < 0 && (l.cleanData(Ve(this)), o && o.replaceChild(s, this));
      }, r);
    }
  }), l.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(r, s) {
    l.fn[r] = function(o) {
      for (var c, d = [], h = l(o), b = h.length - 1, T = 0; T <= b; T++)
        c = T === b ? this : this.clone(!0), l(h[T])[s](c), u.apply(d, c);
      return this.pushStack(d);
    };
  });
  var cl = new RegExp("^(" + Js + ")(?!px)[a-z%]+$", "i"), _n = /^--/;
  function Ir(r) {
    var s = r.ownerDocument.defaultView;
    return s || (s = e), s.getComputedStyle(r);
  }
  function ul(r, s, o) {
    var c, d, h = {};
    for (d in s)
      h[d] = r.style[d], r.style[d] = s[d];
    c = o.call(r);
    for (d in s)
      r.style[d] = h[d];
    return c;
  }
  function ai(r, s, o) {
    var c, d = _n.test(s);
    return o = o || Ir(r), o && (c = o.getPropertyValue(s) || o[s], d && c && (c = c.replace(S, "$1") || void 0), c === "" && !hr(r) && (c = l.style(r, s))), c !== void 0 ? (
      // Support: IE <=9 - 11+
      // IE returns zIndex value as an integer.
      c + ""
    ) : c;
  }
  var li = ["Webkit", "Moz", "ms"], ci = k.createElement("div").style;
  function fl(r) {
    for (var s = r[0].toUpperCase() + r.slice(1), o = li.length; o--; )
      if (r = li[o] + s, r in ci)
        return r;
  }
  function Rn(r) {
    return r in ci ? r : fl(r) || r;
  }
  var ui, fi, Ot = k.createElement("table");
  function di() {
    if (
      // This is a singleton, we need to execute it only once
      !(!Ot || // Finish early in limited (non-browser) environments
      !Ot.style)
    ) {
      var r, s = k.createElement("col"), o = k.createElement("tr"), c = k.createElement("td");
      if (Ot.style.cssText = "position:absolute;left:-11111px;border-collapse:separate;border-spacing:0", o.style.cssText = "box-sizing:content-box;border:1px solid;height:1px", c.style.cssText = "height:9px;width:9px;padding:0", s.span = 2, O.appendChild(Ot).appendChild(s).parentNode.appendChild(o).appendChild(c).parentNode.appendChild(c.cloneNode(!0)), Ot.offsetWidth === 0) {
        O.removeChild(Ot);
        return;
      }
      r = e.getComputedStyle(o), fi = V || Math.round(
        parseFloat(
          e.getComputedStyle(s).width
        )
      ) === 18, ui = Math.round(parseFloat(r.height) + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth)) === o.offsetHeight, O.removeChild(Ot), Ot = null;
    }
  }
  l.extend(N, {
    reliableTrDimensions: function() {
      return di(), ui;
    },
    reliableColDimensions: function() {
      return di(), fi;
    }
  });
  var dl = { position: "absolute", visibility: "hidden", display: "block" }, hi = {
    letterSpacing: "0",
    fontWeight: "400"
  };
  function pi(r, s, o) {
    var c = dr.exec(s);
    return c ? (
      // Guard against undefined "subtract", e.g., when used as in cssHooks
      Math.max(0, c[2] - (o || 0)) + (c[3] || "px")
    ) : s;
  }
  function gi(r, s, o, c, d, h) {
    var b = s === "width" ? 1 : 0, T = 0, C = 0, D = 0;
    if (o === (c ? "border" : "content"))
      return 0;
    for (; b < 4; b += 2)
      o === "margin" && (D += l.css(r, o + At[b], !0, d)), c ? (o === "content" && (C -= l.css(r, "padding" + At[b], !0, d)), o !== "margin" && (C -= l.css(r, "border" + At[b] + "Width", !0, d))) : (C += l.css(r, "padding" + At[b], !0, d), o !== "padding" ? C += l.css(r, "border" + At[b] + "Width", !0, d) : T += l.css(r, "border" + At[b] + "Width", !0, d));
    return !c && h >= 0 && (C += Math.max(0, Math.ceil(
      r["offset" + s[0].toUpperCase() + s.slice(1)] - h - C - T - 0.5
      // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
    )) || 0), C + D;
  }
  function vi(r, s, o) {
    var c = Ir(r), d = V || o, h = d && l.css(r, "boxSizing", !1, c) === "border-box", b = h, T = ai(r, s, c), C = "offset" + s[0].toUpperCase() + s.slice(1);
    if (cl.test(T)) {
      if (!o)
        return T;
      T = "auto";
    }
    return (
      // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      (T === "auto" || // Support: IE 9 - 11+
      // Use offsetWidth/offsetHeight for when box sizing is unreliable.
      // In those cases, the computed value can be trusted to be border-box.
      V && h || !N.reliableColDimensions() && U(r, "col") || !N.reliableTrDimensions() && U(r, "tr")) && // Make sure the element is visible & connected
      r.getClientRects().length && (h = l.css(r, "boxSizing", !1, c) === "border-box", b = C in r, b && (T = r[C])), T = parseFloat(T) || 0, T + gi(
        r,
        s,
        o || (h ? "border" : "content"),
        b,
        c,
        // Provide the current computed size to request scroll gutter calculation (gh-3589)
        T
      ) + "px"
    );
  }
  l.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {},
    // Get and set the style property on a DOM Node
    style: function(r, s, o, c) {
      if (!(!r || r.nodeType === 3 || r.nodeType === 8 || !r.style)) {
        var d, h, b, T = kn(s), C = _n.test(s), D = r.style;
        if (C || (s = Rn(T)), b = l.cssHooks[s] || l.cssHooks[T], o !== void 0) {
          if (h = typeof o, h === "string" && (d = dr.exec(o)) && d[1] && (o = Ys(r, s, d), h = "number"), o == null || o !== o)
            return;
          h === "number" && (o += d && d[3] || (Fr(T) ? "px" : "")), V && o === "" && s.indexOf("background") === 0 && (D[s] = "inherit"), (!b || !("set" in b) || (o = b.set(r, o, c)) !== void 0) && (C ? D.setProperty(s, o) : D[s] = o);
        } else
          return b && "get" in b && (d = b.get(r, !1, c)) !== void 0 ? d : D[s];
      }
    },
    css: function(r, s, o, c) {
      var d, h, b, T = kn(s), C = _n.test(s);
      return C || (s = Rn(T)), b = l.cssHooks[s] || l.cssHooks[T], b && "get" in b && (d = b.get(r, !0, o)), d === void 0 && (d = ai(r, s, c)), d === "normal" && s in hi && (d = hi[s]), o === "" || o ? (h = parseFloat(d), o === !0 || isFinite(h) ? h || 0 : d) : d;
    }
  }), l.each(["height", "width"], function(r, s) {
    l.cssHooks[s] = {
      get: function(o, c, d) {
        if (c)
          return l.css(o, "display") === "none" ? ul(o, dl, function() {
            return vi(o, s, d);
          }) : vi(o, s, d);
      },
      set: function(o, c, d) {
        var h, b = Ir(o), T = d && l.css(o, "boxSizing", !1, b) === "border-box", C = d ? gi(
          o,
          s,
          d,
          T,
          b
        ) : 0;
        return C && (h = dr.exec(c)) && (h[3] || "px") !== "px" && (o.style[s] = c, c = l.css(o, s)), pi(o, c, C);
      }
    };
  }), l.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(r, s) {
    l.cssHooks[r + s] = {
      expand: function(o) {
        for (var c = 0, d = {}, h = typeof o == "string" ? o.split(" ") : [o]; c < 4; c++)
          d[r + At[c] + s] = h[c] || h[c - 2] || h[0];
        return d;
      }
    }, r !== "margin" && (l.cssHooks[r + s].set = pi);
  }), l.fn.extend({
    css: function(r, s) {
      return Re(this, function(o, c, d) {
        var h, b, T = {}, C = 0;
        if (Array.isArray(c)) {
          for (h = Ir(o), b = c.length; C < b; C++)
            T[c[C]] = l.css(o, c[C], !1, h);
          return T;
        }
        return d !== void 0 ? l.style(o, c, d) : l.css(o, c);
      }, r, s, arguments.length > 1);
    }
  });
  function nt(r, s, o, c, d) {
    return new nt.prototype.init(r, s, o, c, d);
  }
  l.Tween = nt, nt.prototype = {
    constructor: nt,
    init: function(r, s, o, c, d, h) {
      this.elem = r, this.prop = o, this.easing = d || l.easing._default, this.options = s, this.start = this.now = this.cur(), this.end = c, this.unit = h || (Fr(o) ? "px" : "");
    },
    cur: function() {
      var r = nt.propHooks[this.prop];
      return r && r.get ? r.get(this) : nt.propHooks._default.get(this);
    },
    run: function(r) {
      var s, o = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = s = l.easing[this.easing](
        r,
        this.options.duration * r,
        0,
        1,
        this.options.duration
      ) : this.pos = s = r, this.now = (this.end - this.start) * s + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), o && o.set ? o.set(this) : nt.propHooks._default.set(this), this;
    }
  }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = {
    _default: {
      get: function(r) {
        var s;
        return r.elem.nodeType !== 1 || r.elem[r.prop] != null && r.elem.style[r.prop] == null ? r.elem[r.prop] : (s = l.css(r.elem, r.prop, ""), !s || s === "auto" ? 0 : s);
      },
      set: function(r) {
        l.fx.step[r.prop] ? l.fx.step[r.prop](r) : r.elem.nodeType === 1 && (l.cssHooks[r.prop] || r.elem.style[Rn(r.prop)] != null) ? l.style(r.elem, r.prop, r.now + r.unit) : r.elem[r.prop] = r.now;
      }
    }
  }, l.easing = {
    linear: function(r) {
      return r;
    },
    swing: function(r) {
      return 0.5 - Math.cos(r * Math.PI) / 2;
    },
    _default: "swing"
  }, l.fx = nt.prototype.init, l.fx.step = {};
  var Zt, Mr, hl = /^(?:toggle|show|hide)$/, pl = /queueHooks$/;
  function Ln() {
    Mr && (k.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Ln) : e.setTimeout(Ln, 13), l.fx.tick());
  }
  function mi() {
    return e.setTimeout(function() {
      Zt = void 0;
    }), Zt = Date.now();
  }
  function $r(r, s) {
    var o, c = 0, d = { height: r };
    for (s = s ? 1 : 0; c < 4; c += 2 - s)
      o = At[c], d["margin" + o] = d["padding" + o] = r;
    return s && (d.opacity = d.width = r), d;
  }
  function yi(r, s, o) {
    for (var c, d = (at.tweeners[s] || []).concat(at.tweeners["*"]), h = 0, b = d.length; h < b; h++)
      if (c = d[h].call(o, s, r))
        return c;
  }
  function gl(r, s, o) {
    var c, d, h, b, T, C, D, L, $ = "width" in s || "height" in s, R = this, M = {}, se = r.style, ue = r.nodeType && qr(r), le = de.get(r, "fxshow");
    o.queue || (b = l._queueHooks(r, "fx"), b.unqueued == null && (b.unqueued = 0, T = b.empty.fire, b.empty.fire = function() {
      b.unqueued || T();
    }), b.unqueued++, R.always(function() {
      R.always(function() {
        b.unqueued--, l.queue(r, "fx").length || b.empty.fire();
      });
    }));
    for (c in s)
      if (d = s[c], hl.test(d)) {
        if (delete s[c], h = h || d === "toggle", d === (ue ? "hide" : "show"))
          if (d === "show" && le && le[c] !== void 0)
            ue = !0;
          else
            continue;
        M[c] = le && le[c] || l.style(r, c);
      }
    if (C = !l.isEmptyObject(s), !(!C && l.isEmptyObject(M))) {
      $ && r.nodeType === 1 && (o.overflow = [se.overflow, se.overflowX, se.overflowY], D = le && le.display, D == null && (D = de.get(r, "display")), L = l.css(r, "display"), L === "none" && (D ? L = D : (Gt([r], !0), D = r.style.display || D, L = l.css(r, "display"), Gt([r]))), (L === "inline" || L === "inline-block" && D != null) && l.css(r, "float") === "none" && (C || (R.done(function() {
        se.display = D;
      }), D == null && (L = se.display, D = L === "none" ? "" : L)), se.display = "inline-block")), o.overflow && (se.overflow = "hidden", R.always(function() {
        se.overflow = o.overflow[0], se.overflowX = o.overflow[1], se.overflowY = o.overflow[2];
      })), C = !1;
      for (c in M)
        C || (le ? "hidden" in le && (ue = le.hidden) : le = de.set(r, "fxshow", { display: D }), h && (le.hidden = !ue), ue && Gt([r], !0), R.done(function() {
          ue || Gt([r]), de.remove(r, "fxshow");
          for (c in M)
            l.style(r, c, M[c]);
        })), C = yi(ue ? le[c] : 0, c, R), c in le || (le[c] = C.start, ue && (C.end = C.start, C.start = 0));
    }
  }
  function vl(r, s) {
    var o, c, d, h, b;
    for (o in r)
      if (c = kn(o), d = s[c], h = r[o], Array.isArray(h) && (d = h[1], h = r[o] = h[0]), o !== c && (r[c] = h, delete r[o]), b = l.cssHooks[c], b && "expand" in b) {
        h = b.expand(h), delete r[c];
        for (o in h)
          o in r || (r[o] = h[o], s[o] = d);
      } else
        s[c] = d;
  }
  function at(r, s, o) {
    var c, d, h = 0, b = at.prefilters.length, T = l.Deferred().always(function() {
      delete C.elem;
    }), C = function() {
      if (d)
        return !1;
      for (var $ = Zt || mi(), R = Math.max(0, D.startTime + D.duration - $), M = 1 - (R / D.duration || 0), se = 0, ue = D.tweens.length; se < ue; se++)
        D.tweens[se].run(M);
      return T.notifyWith(r, [D, M, R]), M < 1 && ue ? R : (ue || T.notifyWith(r, [D, 1, 0]), T.resolveWith(r, [D]), !1);
    }, D = T.promise({
      elem: r,
      props: l.extend({}, s),
      opts: l.extend(!0, {
        specialEasing: {},
        easing: l.easing._default
      }, o),
      originalProperties: s,
      originalOptions: o,
      startTime: Zt || mi(),
      duration: o.duration,
      tweens: [],
      createTween: function($, R) {
        var M = l.Tween(
          r,
          D.opts,
          $,
          R,
          D.opts.specialEasing[$] || D.opts.easing
        );
        return D.tweens.push(M), M;
      },
      stop: function($) {
        var R = 0, M = $ ? D.tweens.length : 0;
        if (d)
          return this;
        for (d = !0; R < M; R++)
          D.tweens[R].run(1);
        return $ ? (T.notifyWith(r, [D, 1, 0]), T.resolveWith(r, [D, $])) : T.rejectWith(r, [D, $]), this;
      }
    }), L = D.props;
    for (vl(L, D.opts.specialEasing); h < b; h++)
      if (c = at.prefilters[h].call(D, r, L, D.opts), c)
        return typeof c.stop == "function" && (l._queueHooks(D.elem, D.opts.queue).stop = c.stop.bind(c)), c;
    return l.map(L, yi, D), typeof D.opts.start == "function" && D.opts.start.call(r, D), D.progress(D.opts.progress).done(D.opts.done, D.opts.complete).fail(D.opts.fail).always(D.opts.always), l.fx.timer(
      l.extend(C, {
        elem: r,
        anim: D,
        queue: D.opts.queue
      })
    ), D;
  }
  l.Animation = l.extend(at, {
    tweeners: {
      "*": [function(r, s) {
        var o = this.createTween(r, s);
        return Ys(o.elem, r, dr.exec(s), o), o;
      }]
    },
    tweener: function(r, s) {
      typeof r == "function" ? (s = r, r = ["*"]) : r = r.match(Ce);
      for (var o, c = 0, d = r.length; c < d; c++)
        o = r[c], at.tweeners[o] = at.tweeners[o] || [], at.tweeners[o].unshift(s);
    },
    prefilters: [gl],
    prefilter: function(r, s) {
      s ? at.prefilters.unshift(r) : at.prefilters.push(r);
    }
  }), l.speed = function(r, s, o) {
    var c = r && typeof r == "object" ? l.extend({}, r) : {
      complete: o || s || typeof r == "function" && r,
      duration: r,
      easing: o && s || s && typeof s != "function" && s
    };
    return l.fx.off ? c.duration = 0 : typeof c.duration != "number" && (c.duration in l.fx.speeds ? c.duration = l.fx.speeds[c.duration] : c.duration = l.fx.speeds._default), (c.queue == null || c.queue === !0) && (c.queue = "fx"), c.old = c.complete, c.complete = function() {
      typeof c.old == "function" && c.old.call(this), c.queue && l.dequeue(this, c.queue);
    }, c;
  }, l.fn.extend({
    fadeTo: function(r, s, o, c) {
      return this.filter(qr).css("opacity", 0).show().end().animate({ opacity: s }, r, o, c);
    },
    animate: function(r, s, o, c) {
      var d = l.isEmptyObject(r), h = l.speed(s, o, c), b = function() {
        var T = at(this, l.extend({}, r), h);
        (d || de.get(this, "finish")) && T.stop(!0);
      };
      return b.finish = b, d || h.queue === !1 ? this.each(b) : this.queue(h.queue, b);
    },
    stop: function(r, s, o) {
      var c = function(d) {
        var h = d.stop;
        delete d.stop, h(o);
      };
      return typeof r != "string" && (o = s, s = r, r = void 0), s && this.queue(r || "fx", []), this.each(function() {
        var d = !0, h = r != null && r + "queueHooks", b = l.timers, T = de.get(this);
        if (h)
          T[h] && T[h].stop && c(T[h]);
        else
          for (h in T)
            T[h] && T[h].stop && pl.test(h) && c(T[h]);
        for (h = b.length; h--; )
          b[h].elem === this && (r == null || b[h].queue === r) && (b[h].anim.stop(o), d = !1, b.splice(h, 1));
        (d || !o) && l.dequeue(this, r);
      });
    },
    finish: function(r) {
      return r !== !1 && (r = r || "fx"), this.each(function() {
        var s, o = de.get(this), c = o[r + "queue"], d = o[r + "queueHooks"], h = l.timers, b = c ? c.length : 0;
        for (o.finish = !0, l.queue(this, r, []), d && d.stop && d.stop.call(this, !0), s = h.length; s--; )
          h[s].elem === this && h[s].queue === r && (h[s].anim.stop(!0), h.splice(s, 1));
        for (s = 0; s < b; s++)
          c[s] && c[s].finish && c[s].finish.call(this);
        delete o.finish;
      });
    }
  }), l.each(["toggle", "show", "hide"], function(r, s) {
    var o = l.fn[s];
    l.fn[s] = function(c, d, h) {
      return c == null || typeof c == "boolean" ? o.apply(this, arguments) : this.animate($r(s, !0), c, d, h);
    };
  }), l.each({
    slideDown: $r("show"),
    slideUp: $r("hide"),
    slideToggle: $r("toggle"),
    fadeIn: { opacity: "show" },
    fadeOut: { opacity: "hide" },
    fadeToggle: { opacity: "toggle" }
  }, function(r, s) {
    l.fn[r] = function(o, c, d) {
      return this.animate(s, o, c, d);
    };
  }), l.timers = [], l.fx.tick = function() {
    var r, s = 0, o = l.timers;
    for (Zt = Date.now(); s < o.length; s++)
      r = o[s], !r() && o[s] === r && o.splice(s--, 1);
    o.length || l.fx.stop(), Zt = void 0;
  }, l.fx.timer = function(r) {
    l.timers.push(r), l.fx.start();
  }, l.fx.start = function() {
    Mr || (Mr = !0, Ln());
  }, l.fx.stop = function() {
    Mr = null;
  }, l.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }, l.fn.delay = function(r, s) {
    return r = l.fx && l.fx.speeds[r] || r, s = s || "fx", this.queue(s, function(o, c) {
      var d = e.setTimeout(o, r);
      c.stop = function() {
        e.clearTimeout(d);
      };
    });
  };
  var ml = /^(?:input|select|textarea|button)$/i, yl = /^(?:a|area)$/i;
  l.fn.extend({
    prop: function(r, s) {
      return Re(this, l.prop, r, s, arguments.length > 1);
    },
    removeProp: function(r) {
      return this.each(function() {
        delete this[l.propFix[r] || r];
      });
    }
  }), l.extend({
    prop: function(r, s, o) {
      var c, d, h = r.nodeType;
      if (!(h === 3 || h === 8 || h === 2))
        return (h !== 1 || !l.isXMLDoc(r)) && (s = l.propFix[s] || s, d = l.propHooks[s]), o !== void 0 ? d && "set" in d && (c = d.set(r, o, s)) !== void 0 ? c : r[s] = o : d && "get" in d && (c = d.get(r, s)) !== null ? c : r[s];
    },
    propHooks: {
      tabIndex: {
        get: function(r) {
          var s = r.getAttribute("tabindex");
          return s ? parseInt(s, 10) : ml.test(r.nodeName) || // href-less anchor's `tabIndex` property value is `0` and
          // the `tabindex` attribute value: `null`. We want `-1`.
          yl.test(r.nodeName) && r.href ? 0 : -1;
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), V && (l.propHooks.selected = {
    get: function(r) {
      var s = r.parentNode;
      return s && s.parentNode && s.parentNode.selectedIndex, null;
    },
    set: function(r) {
      var s = r.parentNode;
      s && (s.selectedIndex, s.parentNode && s.parentNode.selectedIndex);
    }
  }), l.each([
    "tabIndex",
    "readOnly",
    "maxLength",
    "cellSpacing",
    "cellPadding",
    "rowSpan",
    "colSpan",
    "useMap",
    "frameBorder",
    "contentEditable"
  ], function() {
    l.propFix[this.toLowerCase()] = this;
  });
  function jt(r) {
    var s = r.match(Ce) || [];
    return s.join(" ");
  }
  function er(r) {
    return r.getAttribute && r.getAttribute("class") || "";
  }
  function Hn(r) {
    return Array.isArray(r) ? r : typeof r == "string" ? r.match(Ce) || [] : [];
  }
  l.fn.extend({
    addClass: function(r) {
      var s, o, c, d, h, b;
      return typeof r == "function" ? this.each(function(T) {
        l(this).addClass(r.call(this, T, er(this)));
      }) : (s = Hn(r), s.length ? this.each(function() {
        if (c = er(this), o = this.nodeType === 1 && " " + jt(c) + " ", o) {
          for (h = 0; h < s.length; h++)
            d = s[h], o.indexOf(" " + d + " ") < 0 && (o += d + " ");
          b = jt(o), c !== b && this.setAttribute("class", b);
        }
      }) : this);
    },
    removeClass: function(r) {
      var s, o, c, d, h, b;
      return typeof r == "function" ? this.each(function(T) {
        l(this).removeClass(r.call(this, T, er(this)));
      }) : arguments.length ? (s = Hn(r), s.length ? this.each(function() {
        if (c = er(this), o = this.nodeType === 1 && " " + jt(c) + " ", o) {
          for (h = 0; h < s.length; h++)
            for (d = s[h]; o.indexOf(" " + d + " ") > -1; )
              o = o.replace(" " + d + " ", " ");
          b = jt(o), c !== b && this.setAttribute("class", b);
        }
      }) : this) : this.attr("class", "");
    },
    toggleClass: function(r, s) {
      var o, c, d, h;
      return typeof r == "function" ? this.each(function(b) {
        l(this).toggleClass(
          r.call(this, b, er(this), s),
          s
        );
      }) : typeof s == "boolean" ? s ? this.addClass(r) : this.removeClass(r) : (o = Hn(r), o.length ? this.each(function() {
        for (h = l(this), d = 0; d < o.length; d++)
          c = o[d], h.hasClass(c) ? h.removeClass(c) : h.addClass(c);
      }) : this);
    },
    hasClass: function(r) {
      var s, o, c = 0;
      for (s = " " + r + " "; o = this[c++]; )
        if (o.nodeType === 1 && (" " + jt(er(o)) + " ").indexOf(s) > -1)
          return !0;
      return !1;
    }
  }), l.fn.extend({
    val: function(r) {
      var s, o, c, d = this[0];
      return arguments.length ? (c = typeof r == "function", this.each(function(h) {
        var b;
        this.nodeType === 1 && (c ? b = r.call(this, h, l(this).val()) : b = r, b == null ? b = "" : typeof b == "number" ? b += "" : Array.isArray(b) && (b = l.map(b, function(T) {
          return T == null ? "" : T + "";
        })), s = l.valHooks[this.type] || l.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, b, "value") === void 0) && (this.value = b));
      })) : d ? (s = l.valHooks[d.type] || l.valHooks[d.nodeName.toLowerCase()], s && "get" in s && (o = s.get(d, "value")) !== void 0 ? o : (o = d.value, o ?? "")) : void 0;
    }
  }), l.extend({
    valHooks: {
      select: {
        get: function(r) {
          var s, o, c, d = r.options, h = r.selectedIndex, b = r.type === "select-one", T = b ? null : [], C = b ? h + 1 : d.length;
          for (h < 0 ? c = C : c = b ? h : 0; c < C; c++)
            if (o = d[c], o.selected && // Don't return options that are disabled or in a disabled optgroup
            !o.disabled && (!o.parentNode.disabled || !U(o.parentNode, "optgroup"))) {
              if (s = l(o).val(), b)
                return s;
              T.push(s);
            }
          return T;
        },
        set: function(r, s) {
          for (var o, c, d = r.options, h = l.makeArray(s), b = d.length; b--; )
            c = d[b], (c.selected = l.inArray(l(c).val(), h) > -1) && (o = !0);
          return o || (r.selectedIndex = -1), h;
        }
      }
    }
  }), V && (l.valHooks.option = {
    get: function(r) {
      var s = r.getAttribute("value");
      return s ?? // Support: IE <=10 - 11+
      // option.text throws exceptions (trac-14686, trac-14858)
      // Strip and collapse whitespace
      // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
      jt(l.text(r));
    }
  }), l.each(["radio", "checkbox"], function() {
    l.valHooks[this] = {
      set: function(r, s) {
        if (Array.isArray(s))
          return r.checked = l.inArray(l(r).val(), s) > -1;
      }
    };
  });
  var bi = /^(?:focusinfocus|focusoutblur)$/, wi = function(r) {
    r.stopPropagation();
  };
  l.extend(l.event, {
    trigger: function(r, s, o, c) {
      var d, h, b, T, C, D, L, $, R = [o || k], M = y.call(r, "type") ? r.type : r, se = y.call(r, "namespace") ? r.namespace.split(".") : [];
      if (h = $ = b = o = o || k, !(o.nodeType === 3 || o.nodeType === 8) && !bi.test(M + l.event.triggered) && (M.indexOf(".") > -1 && (se = M.split("."), M = se.shift(), se.sort()), C = M.indexOf(":") < 0 && "on" + M, r = r[l.expando] ? r : new l.Event(M, typeof r == "object" && r), r.isTrigger = c ? 2 : 3, r.namespace = se.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + se.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = o), s = s == null ? [r] : l.makeArray(s, [r]), L = l.event.special[M] || {}, !(!c && L.trigger && L.trigger.apply(o, s) === !1))) {
        if (!c && !L.noBubble && !_(o)) {
          for (T = L.delegateType || M, bi.test(T + M) || (h = h.parentNode); h; h = h.parentNode)
            R.push(h), b = h;
          b === (o.ownerDocument || k) && R.push(b.defaultView || b.parentWindow || e);
        }
        for (d = 0; (h = R[d++]) && !r.isPropagationStopped(); )
          $ = h, r.type = d > 1 ? T : L.bindType || M, D = (de.get(h, "events") || /* @__PURE__ */ Object.create(null))[r.type] && de.get(h, "handle"), D && D.apply(h, s), D = C && h[C], D && D.apply && ur(h) && (r.result = D.apply(h, s), r.result === !1 && r.preventDefault());
        return r.type = M, !c && !r.isDefaultPrevented() && (!L._default || L._default.apply(R.pop(), s) === !1) && ur(o) && C && typeof o[M] == "function" && !_(o) && (b = o[C], b && (o[C] = null), l.event.triggered = M, r.isPropagationStopped() && $.addEventListener(M, wi), o[M](), r.isPropagationStopped() && $.removeEventListener(M, wi), l.event.triggered = void 0, b && (o[C] = b)), r.result;
      }
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function(r, s, o) {
      var c = l.extend(
        new l.Event(),
        o,
        {
          type: r,
          isSimulated: !0
        }
      );
      l.event.trigger(c, null, s);
    }
  }), l.fn.extend({
    trigger: function(r, s) {
      return this.each(function() {
        l.event.trigger(r, s, this);
      });
    },
    triggerHandler: function(r, s) {
      var o = this[0];
      if (o)
        return l.event.trigger(r, s, o, !0);
    }
  });
  var pr = e.location, Pi = { guid: Date.now() }, qn = /\?/;
  l.parseXML = function(r) {
    var s, o;
    if (!r || typeof r != "string")
      return null;
    try {
      s = new e.DOMParser().parseFromString(r, "text/xml");
    } catch {
    }
    return o = s && s.getElementsByTagName("parsererror")[0], (!s || o) && l.error("Invalid XML: " + (o ? l.map(o.childNodes, function(c) {
      return c.textContent;
    }).join(`
`) : r)), s;
  };
  var bl = /\[\]$/, xi = /\r?\n/g, wl = /^(?:submit|button|image|reset|file)$/i, Pl = /^(?:input|select|textarea|keygen)/i;
  function Fn(r, s, o, c) {
    var d;
    if (Array.isArray(s))
      l.each(s, function(h, b) {
        o || bl.test(r) ? c(r, b) : Fn(
          r + "[" + (typeof b == "object" && b != null ? h : "") + "]",
          b,
          o,
          c
        );
      });
    else if (!o && F(s) === "object")
      for (d in s)
        Fn(r + "[" + d + "]", s[d], o, c);
    else
      c(r, s);
  }
  l.param = function(r, s) {
    var o, c = [], d = function(h, b) {
      var T = typeof b == "function" ? b() : b;
      c[c.length] = encodeURIComponent(h) + "=" + encodeURIComponent(T ?? "");
    };
    if (r == null)
      return "";
    if (Array.isArray(r) || r.jquery && !l.isPlainObject(r))
      l.each(r, function() {
        d(this.name, this.value);
      });
    else
      for (o in r)
        Fn(o, r[o], s, d);
    return c.join("&");
  }, l.fn.extend({
    serialize: function() {
      return l.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var r = l.prop(this, "elements");
        return r ? l.makeArray(r) : this;
      }).filter(function() {
        var r = this.type;
        return this.name && !l(this).is(":disabled") && Pl.test(this.nodeName) && !wl.test(r) && (this.checked || !Br.test(r));
      }).map(function(r, s) {
        var o = l(this).val();
        return o == null ? null : Array.isArray(o) ? l.map(o, function(c) {
          return { name: s.name, value: c.replace(xi, `\r
`) };
        }) : { name: s.name, value: o.replace(xi, `\r
`) };
      }).get();
    }
  });
  var xl = /%20/g, Sl = /#.*$/, Cl = /([?&])_=[^&]*/, Tl = /^(.*?):[ \t]*([^\r\n]*)$/mg, El = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Al = /^(?:GET|HEAD)$/, Ol = /^\/\//, Si = {}, Bn = {}, Ci = "*/".concat("*"), jn = k.createElement("a");
  jn.href = pr.href;
  function Ti(r) {
    return function(s, o) {
      typeof s != "string" && (o = s, s = "*");
      var c, d = 0, h = s.toLowerCase().match(Ce) || [];
      if (typeof o == "function")
        for (; c = h[d++]; )
          c[0] === "+" ? (c = c.slice(1) || "*", (r[c] = r[c] || []).unshift(o)) : (r[c] = r[c] || []).push(o);
    };
  }
  function Ei(r, s, o, c) {
    var d = {}, h = r === Bn;
    function b(T) {
      var C;
      return d[T] = !0, l.each(r[T] || [], function(D, L) {
        var $ = L(s, o, c);
        if (typeof $ == "string" && !h && !d[$])
          return s.dataTypes.unshift($), b($), !1;
        if (h)
          return !(C = $);
      }), C;
    }
    return b(s.dataTypes[0]) || !d["*"] && b("*");
  }
  function In(r, s) {
    var o, c, d = l.ajaxSettings.flatOptions || {};
    for (o in s)
      s[o] !== void 0 && ((d[o] ? r : c || (c = {}))[o] = s[o]);
    return c && l.extend(!0, r, c), r;
  }
  function kl(r, s, o) {
    for (var c, d, h, b, T = r.contents, C = r.dataTypes; C[0] === "*"; )
      C.shift(), c === void 0 && (c = r.mimeType || s.getResponseHeader("Content-Type"));
    if (c) {
      for (d in T)
        if (T[d] && T[d].test(c)) {
          C.unshift(d);
          break;
        }
    }
    if (C[0] in o)
      h = C[0];
    else {
      for (d in o) {
        if (!C[0] || r.converters[d + " " + C[0]]) {
          h = d;
          break;
        }
        b || (b = d);
      }
      h = h || b;
    }
    if (h)
      return h !== C[0] && C.unshift(h), o[h];
  }
  function Dl(r, s, o, c) {
    var d, h, b, T, C, D = {}, L = r.dataTypes.slice();
    if (L[1])
      for (b in r.converters)
        D[b.toLowerCase()] = r.converters[b];
    for (h = L.shift(); h; )
      if (r.responseFields[h] && (o[r.responseFields[h]] = s), !C && c && r.dataFilter && (s = r.dataFilter(s, r.dataType)), C = h, h = L.shift(), h) {
        if (h === "*")
          h = C;
        else if (C !== "*" && C !== h) {
          if (b = D[C + " " + h] || D["* " + h], !b) {
            for (d in D)
              if (T = d.split(" "), T[1] === h && (b = D[C + " " + T[0]] || D["* " + T[0]], b)) {
                b === !0 ? b = D[d] : D[d] !== !0 && (h = T[0], L.unshift(T[1]));
                break;
              }
          }
          if (b !== !0)
            if (b && r.throws)
              s = b(s);
            else
              try {
                s = b(s);
              } catch ($) {
                return {
                  state: "parsererror",
                  error: b ? $ : "No conversion from " + C + " to " + h
                };
              }
        }
      }
    return { state: "success", data: s };
  }
  l.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: pr.href,
      type: "GET",
      isLocal: El.test(pr.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": Ci,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": !0,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": l.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function(r, s) {
      return s ? (
        // Building a settings object
        In(In(r, l.ajaxSettings), s)
      ) : (
        // Extending ajaxSettings
        In(l.ajaxSettings, r)
      );
    },
    ajaxPrefilter: Ti(Si),
    ajaxTransport: Ti(Bn),
    // Main method
    ajax: function(r, s) {
      typeof r == "object" && (s = r, r = void 0), s = s || {};
      var o, c, d, h, b, T, C, D, L, $, R = l.ajaxSetup({}, s), M = R.context || R, se = R.context && (M.nodeType || M.jquery) ? l(M) : l.event, ue = l.Deferred(), le = l.Callbacks("once memory"), Ee = R.statusCode || {}, Te = {}, Ke = {}, qe = "canceled", me = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function(ye) {
          var ke;
          if (C) {
            if (!h)
              for (h = {}; ke = Tl.exec(d); )
                h[ke[1].toLowerCase() + " "] = (h[ke[1].toLowerCase() + " "] || []).concat(ke[2]);
            ke = h[ye.toLowerCase() + " "];
          }
          return ke == null ? null : ke.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function() {
          return C ? d : null;
        },
        // Caches the header
        setRequestHeader: function(ye, ke) {
          return C == null && (ye = Ke[ye.toLowerCase()] = Ke[ye.toLowerCase()] || ye, Te[ye] = ke), this;
        },
        // Overrides response content-type header
        overrideMimeType: function(ye) {
          return C == null && (R.mimeType = ye), this;
        },
        // Status-dependent callbacks
        statusCode: function(ye) {
          var ke;
          if (ye)
            if (C)
              me.always(ye[me.status]);
            else
              for (ke in ye)
                Ee[ke] = [Ee[ke], ye[ke]];
          return this;
        },
        // Cancel the request
        abort: function(ye) {
          var ke = ye || qe;
          return o && o.abort(ke), Ur(0, ke), this;
        }
      };
      if (ue.promise(me), R.url = ((r || R.url || pr.href) + "").replace(Ol, pr.protocol + "//"), R.type = s.method || s.type || R.method || R.type, R.dataTypes = (R.dataType || "*").toLowerCase().match(Ce) || [""], R.crossDomain == null) {
        T = k.createElement("a");
        try {
          T.href = R.url, T.href = T.href, R.crossDomain = jn.protocol + "//" + jn.host != T.protocol + "//" + T.host;
        } catch {
          R.crossDomain = !0;
        }
      }
      if (Ei(Si, R, s, me), R.data && R.processData && typeof R.data != "string" && (R.data = l.param(R.data, R.traditional)), C)
        return me;
      D = l.event && R.global, D && l.active++ === 0 && l.event.trigger("ajaxStart"), R.type = R.type.toUpperCase(), R.hasContent = !Al.test(R.type), c = R.url.replace(Sl, ""), R.hasContent ? R.data && R.processData && (R.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (R.data = R.data.replace(xl, "+")) : ($ = R.url.slice(c.length), R.data && (R.processData || typeof R.data == "string") && (c += (qn.test(c) ? "&" : "?") + R.data, delete R.data), R.cache === !1 && (c = c.replace(Cl, "$1"), $ = (qn.test(c) ? "&" : "?") + "_=" + Pi.guid++ + $), R.url = c + $), R.ifModified && (l.lastModified[c] && me.setRequestHeader("If-Modified-Since", l.lastModified[c]), l.etag[c] && me.setRequestHeader("If-None-Match", l.etag[c])), (R.data && R.hasContent && R.contentType !== !1 || s.contentType) && me.setRequestHeader("Content-Type", R.contentType), me.setRequestHeader(
        "Accept",
        R.dataTypes[0] && R.accepts[R.dataTypes[0]] ? R.accepts[R.dataTypes[0]] + (R.dataTypes[0] !== "*" ? ", " + Ci + "; q=0.01" : "") : R.accepts["*"]
      );
      for (L in R.headers)
        me.setRequestHeader(L, R.headers[L]);
      if (R.beforeSend && (R.beforeSend.call(M, me, R) === !1 || C))
        return me.abort();
      if (qe = "abort", le.add(R.complete), me.done(R.success), me.fail(R.error), o = Ei(Bn, R, s, me), !o)
        Ur(-1, "No Transport");
      else {
        if (me.readyState = 1, D && se.trigger("ajaxSend", [me, R]), C)
          return me;
        R.async && R.timeout > 0 && (b = e.setTimeout(function() {
          me.abort("timeout");
        }, R.timeout));
        try {
          C = !1, o.send(Te, Ur);
        } catch (ye) {
          if (C)
            throw ye;
          Ur(-1, ye);
        }
      }
      function Ur(ye, ke, ki, Ll) {
        var kt, $n, gr, tr, rr, gt = ke;
        C || (C = !0, b && e.clearTimeout(b), o = void 0, d = Ll || "", me.readyState = ye > 0 ? 4 : 0, kt = ye >= 200 && ye < 300 || ye === 304, ki && (tr = kl(R, me, ki)), !kt && l.inArray("script", R.dataTypes) > -1 && l.inArray("json", R.dataTypes) < 0 && (R.converters["text script"] = function() {
        }), tr = Dl(R, tr, me, kt), kt ? (R.ifModified && (rr = me.getResponseHeader("Last-Modified"), rr && (l.lastModified[c] = rr), rr = me.getResponseHeader("etag"), rr && (l.etag[c] = rr)), ye === 204 || R.type === "HEAD" ? gt = "nocontent" : ye === 304 ? gt = "notmodified" : (gt = tr.state, $n = tr.data, gr = tr.error, kt = !gr)) : (gr = gt, (ye || !gt) && (gt = "error", ye < 0 && (ye = 0))), me.status = ye, me.statusText = (ke || gt) + "", kt ? ue.resolveWith(M, [$n, gt, me]) : ue.rejectWith(M, [me, gt, gr]), me.statusCode(Ee), Ee = void 0, D && se.trigger(
          kt ? "ajaxSuccess" : "ajaxError",
          [me, R, kt ? $n : gr]
        ), le.fireWith(M, [me, gt]), D && (se.trigger("ajaxComplete", [me, R]), --l.active || l.event.trigger("ajaxStop")));
      }
      return me;
    },
    getJSON: function(r, s, o) {
      return l.get(r, s, o, "json");
    },
    getScript: function(r, s) {
      return l.get(r, void 0, s, "script");
    }
  }), l.each(["get", "post"], function(r, s) {
    l[s] = function(o, c, d, h) {
      return (typeof c == "function" || c === null) && (h = h || d, d = c, c = void 0), l.ajax(l.extend({
        url: o,
        type: s,
        dataType: h,
        data: c,
        success: d
      }, l.isPlainObject(o) && o));
    };
  }), l.ajaxPrefilter(function(r) {
    var s;
    for (s in r.headers)
      s.toLowerCase() === "content-type" && (r.contentType = r.headers[s] || "");
  }), l._evalUrl = function(r, s, o) {
    return l.ajax({
      url: r,
      // Make this explicit, since user can override this through ajaxSetup (trac-11264)
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      scriptAttrs: s.crossOrigin ? { crossOrigin: s.crossOrigin } : void 0,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function() {
        }
      },
      dataFilter: function(c) {
        l.globalEval(c, s, o);
      }
    });
  }, l.fn.extend({
    wrapAll: function(r) {
      var s;
      return this[0] && (typeof r == "function" && (r = r.call(this[0])), s = l(r, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && s.insertBefore(this[0]), s.map(function() {
        for (var o = this; o.firstElementChild; )
          o = o.firstElementChild;
        return o;
      }).append(this)), this;
    },
    wrapInner: function(r) {
      return typeof r == "function" ? this.each(function(s) {
        l(this).wrapInner(r.call(this, s));
      }) : this.each(function() {
        var s = l(this), o = s.contents();
        o.length ? o.wrapAll(r) : s.append(r);
      });
    },
    wrap: function(r) {
      var s = typeof r == "function";
      return this.each(function(o) {
        l(this).wrapAll(s ? r.call(this, o) : r);
      });
    },
    unwrap: function(r) {
      return this.parent(r).not("body").each(function() {
        l(this).replaceWith(this.childNodes);
      }), this;
    }
  }), l.expr.pseudos.hidden = function(r) {
    return !l.expr.pseudos.visible(r);
  }, l.expr.pseudos.visible = function(r) {
    return !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length);
  }, l.ajaxSettings.xhr = function() {
    return new e.XMLHttpRequest();
  };
  var Nl = {
    // File protocol always yields status code 0, assume 200
    0: 200
  };
  l.ajaxTransport(function(r) {
    var s;
    return {
      send: function(o, c) {
        var d, h = r.xhr();
        if (h.open(
          r.type,
          r.url,
          r.async,
          r.username,
          r.password
        ), r.xhrFields)
          for (d in r.xhrFields)
            h[d] = r.xhrFields[d];
        r.mimeType && h.overrideMimeType && h.overrideMimeType(r.mimeType), !r.crossDomain && !o["X-Requested-With"] && (o["X-Requested-With"] = "XMLHttpRequest");
        for (d in o)
          h.setRequestHeader(d, o[d]);
        s = function(b) {
          return function() {
            s && (s = h.onload = h.onerror = h.onabort = h.ontimeout = null, b === "abort" ? h.abort() : b === "error" ? c(
              // File: protocol always yields status 0; see trac-8605, trac-14207
              h.status,
              h.statusText
            ) : c(
              Nl[h.status] || h.status,
              h.statusText,
              // For XHR2 non-text, let the caller handle it (gh-2498)
              (h.responseType || "text") === "text" ? { text: h.responseText } : { binary: h.response },
              h.getAllResponseHeaders()
            ));
          };
        }, h.onload = s(), h.onabort = h.onerror = h.ontimeout = s("error"), s = s("abort");
        try {
          h.send(r.hasContent && r.data || null);
        } catch (b) {
          if (s)
            throw b;
        }
      },
      abort: function() {
        s && s();
      }
    };
  });
  function Ai(r) {
    return r.scriptAttrs || !r.headers && (r.crossDomain || // When dealing with JSONP (`s.dataTypes` include "json" then)
    // don't use a script tag so that error responses still may have
    // `responseJSON` set. Continue using a script tag for JSONP requests that:
    //   * are cross-domain as AJAX requests won't work without a CORS setup
    //   * have `scriptAttrs` set as that's a script-only functionality
    // Note that this means JSONP requests violate strict CSP script-src settings.
    // A proper solution is to migrate from using JSONP to a CORS setup.
    r.async && l.inArray("json", r.dataTypes) < 0);
  }
  l.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    converters: {
      "text script": function(r) {
        return l.globalEval(r), r;
      }
    }
  }), l.ajaxPrefilter("script", function(r) {
    r.cache === void 0 && (r.cache = !1), Ai(r) && (r.type = "GET");
  }), l.ajaxTransport("script", function(r) {
    if (Ai(r)) {
      var s, o;
      return {
        send: function(c, d) {
          s = l("<script>").attr(r.scriptAttrs || {}).prop({ charset: r.scriptCharset, src: r.url }).on("load error", o = function(h) {
            s.remove(), o = null, h && d(h.type === "error" ? 404 : 200, h.type);
          }), k.head.appendChild(s[0]);
        },
        abort: function() {
          o && o();
        }
      };
    }
  });
  var Oi = [], Mn = /(=)\?(?=&|$)|\?\?/;
  l.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var r = Oi.pop() || l.expando + "_" + Pi.guid++;
      return this[r] = !0, r;
    }
  }), l.ajaxPrefilter("jsonp", function(r, s, o) {
    var c, d, h, b = r.jsonp !== !1 && (Mn.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Mn.test(r.data) && "data");
    return c = r.jsonpCallback = typeof r.jsonpCallback == "function" ? r.jsonpCallback() : r.jsonpCallback, b ? r[b] = r[b].replace(Mn, "$1" + c) : r.jsonp !== !1 && (r.url += (qn.test(r.url) ? "&" : "?") + r.jsonp + "=" + c), r.converters["script json"] = function() {
      return h || l.error(c + " was not called"), h[0];
    }, r.dataTypes[0] = "json", d = e[c], e[c] = function() {
      h = arguments;
    }, o.always(function() {
      d === void 0 ? l(e).removeProp(c) : e[c] = d, r[c] && (r.jsonpCallback = s.jsonpCallback, Oi.push(c)), h && typeof d == "function" && d(h[0]), h = d = void 0;
    }), "script";
  }), l.ajaxPrefilter(function(r, s) {
    typeof r.data != "string" && !l.isPlainObject(r.data) && !Array.isArray(r.data) && // Don't disable data processing if explicitly set by the user.
    !("processData" in s) && (r.processData = !1), r.data instanceof e.FormData && (r.contentType = !1);
  }), l.parseHTML = function(r, s, o) {
    if (typeof r != "string" && !Xs(r + ""))
      return [];
    typeof s == "boolean" && (o = s, s = !1);
    var c, d;
    return s || (s = new e.DOMParser().parseFromString("", "text/html")), c = Ks.exec(r), d = !o && [], c ? [s.createElement(c[1])] : (c = ri([r], s, d), d && d.length && l(d).remove(), l.merge([], c.childNodes));
  }, l.fn.load = function(r, s, o) {
    var c, d, h, b = this, T = r.indexOf(" ");
    return T > -1 && (c = jt(r.slice(T)), r = r.slice(0, T)), typeof s == "function" ? (o = s, s = void 0) : s && typeof s == "object" && (d = "POST"), b.length > 0 && l.ajax({
      url: r,
      // If "type" variable is undefined, then "GET" method will be used.
      // Make value of this field explicit since
      // user can override it through ajaxSetup method
      type: d || "GET",
      dataType: "html",
      data: s
    }).done(function(C) {
      h = arguments, b.html(c ? (
        // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        l("<div>").append(l.parseHTML(C)).find(c)
      ) : (
        // Otherwise use the full result
        C
      ));
    }).always(o && function(C, D) {
      b.each(function() {
        o.apply(this, h || [C.responseText, D, C]);
      });
    }), this;
  }, l.expr.pseudos.animated = function(r) {
    return l.grep(l.timers, function(s) {
      return r === s.elem;
    }).length;
  }, l.offset = {
    setOffset: function(r, s, o) {
      var c, d, h, b, T, C, D, L = l.css(r, "position"), $ = l(r), R = {};
      L === "static" && (r.style.position = "relative"), T = $.offset(), h = l.css(r, "top"), C = l.css(r, "left"), D = (L === "absolute" || L === "fixed") && (h + C).indexOf("auto") > -1, D ? (c = $.position(), b = c.top, d = c.left) : (b = parseFloat(h) || 0, d = parseFloat(C) || 0), typeof s == "function" && (s = s.call(r, o, l.extend({}, T))), s.top != null && (R.top = s.top - T.top + b), s.left != null && (R.left = s.left - T.left + d), "using" in s ? s.using.call(r, R) : $.css(R);
    }
  }, l.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function(r) {
      if (arguments.length)
        return r === void 0 ? this : this.each(function(d) {
          l.offset.setOffset(this, r, d);
        });
      var s, o, c = this[0];
      if (c)
        return c.getClientRects().length ? (s = c.getBoundingClientRect(), o = c.ownerDocument.defaultView, {
          top: s.top + o.pageYOffset,
          left: s.left + o.pageXOffset
        }) : { top: 0, left: 0 };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function() {
      if (this[0]) {
        var r, s, o, c = this[0], d = { top: 0, left: 0 };
        if (l.css(c, "position") === "fixed")
          s = c.getBoundingClientRect();
        else {
          for (s = this.offset(), o = c.ownerDocument, r = c.offsetParent || o.documentElement; r && r !== o.documentElement && l.css(r, "position") === "static"; )
            r = r.offsetParent || o.documentElement;
          r && r !== c && r.nodeType === 1 && l.css(r, "position") !== "static" && (d = l(r).offset(), d.top += l.css(r, "borderTopWidth", !0), d.left += l.css(r, "borderLeftWidth", !0));
        }
        return {
          top: s.top - d.top - l.css(c, "marginTop", !0),
          left: s.left - d.left - l.css(c, "marginLeft", !0)
        };
      }
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function() {
      return this.map(function() {
        for (var r = this.offsetParent; r && l.css(r, "position") === "static"; )
          r = r.offsetParent;
        return r || O;
      });
    }
  }), l.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(r, s) {
    var o = s === "pageYOffset";
    l.fn[r] = function(c) {
      return Re(this, function(d, h, b) {
        var T;
        if (_(d) ? T = d : d.nodeType === 9 && (T = d.defaultView), b === void 0)
          return T ? T[s] : d[h];
        T ? T.scrollTo(
          o ? T.pageXOffset : b,
          o ? b : T.pageYOffset
        ) : d[h] = b;
      }, r, c, arguments.length);
    };
  }), l.each({ Height: "height", Width: "width" }, function(r, s) {
    l.each({
      padding: "inner" + r,
      content: s,
      "": "outer" + r
    }, function(o, c) {
      l.fn[c] = function(d, h) {
        var b = arguments.length && (o || typeof d != "boolean"), T = o || (d === !0 || h === !0 ? "margin" : "border");
        return Re(this, function(C, D, L) {
          var $;
          return _(C) ? c.indexOf("outer") === 0 ? C["inner" + r] : C.document.documentElement["client" + r] : C.nodeType === 9 ? ($ = C.documentElement, Math.max(
            C.body["scroll" + r],
            $["scroll" + r],
            C.body["offset" + r],
            $["offset" + r],
            $["client" + r]
          )) : L === void 0 ? (
            // Get width or height on the element, requesting but not forcing parseFloat
            l.css(C, D, T)
          ) : (
            // Set width or height on the element
            l.style(C, D, L, T)
          );
        }, s, b ? d : void 0, b);
      };
    });
  }), l.each([
    "ajaxStart",
    "ajaxStop",
    "ajaxComplete",
    "ajaxError",
    "ajaxSuccess",
    "ajaxSend"
  ], function(r, s) {
    l.fn[s] = function(o) {
      return this.on(s, o);
    };
  }), l.fn.extend({
    bind: function(r, s, o) {
      return this.on(r, null, s, o);
    },
    unbind: function(r, s) {
      return this.off(r, null, s);
    },
    delegate: function(r, s, o, c) {
      return this.on(s, r, o, c);
    },
    undelegate: function(r, s, o) {
      return arguments.length === 1 ? this.off(r, "**") : this.off(s, r || "**", o);
    },
    hover: function(r, s) {
      return this.on("mouseenter", r).on("mouseleave", s || r);
    }
  }), l.each(
    "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
    function(r, s) {
      l.fn[s] = function(o, c) {
        return arguments.length > 0 ? this.on(s, null, o, c) : this.trigger(s);
      };
    }
  ), l.proxy = function(r, s) {
    var o, c, d;
    if (typeof s == "string" && (o = r[s], s = r, r = o), typeof r == "function")
      return c = a.call(arguments, 2), d = function() {
        return r.apply(s || this, c.concat(a.call(arguments)));
      }, d.guid = r.guid = r.guid || l.guid++, d;
  }, l.holdReady = function(r) {
    r ? l.readyWait++ : l.ready(!0);
  }, l.expr[":"] = l.expr.filters = l.expr.pseudos, typeof define == "function" && define.amd && define("jquery", [], function() {
    return l;
  });
  var _l = e.jQuery, Rl = e.$;
  return l.noConflict = function(r) {
    return e.$ === l && (e.$ = Rl), r && e.jQuery === l && (e.jQuery = _l), l;
  }, l;
}
var Pt = qf(window);
/*! DataTables Bootstrap 5 integration
 * © SpryMedia Ltd - datatables.net/license
 */
let Or = Pt;
Or.extend(!0, ie.defaults, {
  renderer: "bootstrap"
});
Or.extend(!0, ie.ext.classes, {
  container: "dt-container dt-bootstrap5",
  search: {
    input: "form-control form-control-sm"
  },
  length: {
    select: "form-select form-select-sm"
  },
  processing: {
    container: "dt-processing card"
  },
  layout: {
    row: "row mt-2 justify-content-between",
    cell: "d-md-flex justify-content-between align-items-center",
    tableCell: "col-12",
    start: "dt-layout-start col-md-auto me-auto",
    end: "dt-layout-end col-md-auto ms-auto",
    full: "dt-layout-full col-md"
  }
});
ie.ext.renderer.pagingButton.bootstrap = function(e, t, n, i, a) {
  var f = ["dt-paging-button", "page-item"];
  i && f.push("active"), a && f.push("disabled");
  var u = Or("<li>").addClass(f.join(" ")), v = Or("<button>", {
    class: "page-link",
    role: "link",
    type: "button"
  }).html(n).appendTo(u);
  return {
    display: u,
    clicker: v
  };
};
ie.ext.renderer.pagingContainer.bootstrap = function(e, t) {
  return Or("<ul/>").addClass("pagination").append(t);
};
const ie = ie;
/*! Buttons for DataTables 3.2.6
 * © SpryMedia Ltd - datatables.net/license
 */
let W = Pt;
var Ff = 0, Bf = 0, tt = ie.ext.buttons, Ps = null;
function Ta(e, t, n) {
  W.fn.animate ? e.stop().fadeIn(t, n) : e.css("display", "block");
}
function Ea(e, t, n) {
  W.fn.animate ? e.stop().fadeOut(t, n) : (e.css("display", "none"), n && n.call(e));
}
var Ne = function(e, t) {
  if (!ie.versionCheck("2"))
    throw "Warning: Buttons requires DataTables 2 or newer";
  if (!(this instanceof Ne))
    return function(n) {
      return new Ne(n, e).container();
    };
  typeof t > "u" && (t = {}), t === !0 && (t = {}), Array.isArray(t) && (t = { buttons: t }), this.c = W.extend(!0, {}, Ne.defaults, t), t.buttons && (this.c.buttons = t.buttons), this.s = {
    dt: new ie.Api(e),
    buttons: [],
    listenKeys: "",
    namespace: "dtb" + Ff++
  }, this.dom = {
    container: W("<" + this.c.dom.container.tag + "/>").addClass(
      this.c.dom.container.className
    )
  }, this._constructor();
};
W.extend(Ne.prototype, {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Public methods
   */
  /**
   * Get the action of a button
   * @param  {int|string} Button index
   * @return {function}
   */
  /**
  * Set the action of a button
  * @param  {node} node Button element
  * @param  {function} action Function to set
  * @return {Buttons} Self for chaining
  */
  action: function(e, t) {
    var n = this._nodeToButton(e);
    return t === void 0 ? n.conf.action : (n.conf.action = t, this);
  },
  /**
   * Add an active class to the button to make to look active or get current
   * active state.
   * @param  {node} node Button element
   * @param  {boolean} [flag] Enable / disable flag
   * @return {Buttons} Self for chaining or boolean for getter
   */
  active: function(e, t) {
    var n = this._nodeToButton(e), i = this.c.dom.button.active, a = W(n.node);
    return n.inCollection && this.c.dom.collection.button && this.c.dom.collection.button.active !== void 0 && (i = this.c.dom.collection.button.active), t === void 0 ? a.hasClass(i) : (a.toggleClass(i, t === void 0 ? !0 : t), this);
  },
  /**
   * Add a new button
   * @param {object} config Button configuration object, base string name or function
   * @param {int|string} [idx] Button index for where to insert the button
   * @param {boolean} [draw=true] Trigger a draw. Set a false when adding
   *   lots of buttons, until the last button.
   * @return {Buttons} Self for chaining
   */
  add: function(e, t, n) {
    var i = this.s.buttons;
    if (typeof t == "string") {
      for (var a = t.split("-"), f = this.s, u = 0, v = a.length - 1; u < v; u++)
        f = f.buttons[a[u] * 1];
      i = f.buttons, t = a[a.length - 1] * 1;
    }
    let m = this._expandButton(
      i,
      e,
      e !== void 0 ? e.split : void 0,
      (e === void 0 || e.split === void 0 || e.split.length === 0) && f !== void 0,
      !1,
      t
    );
    return (n === void 0 || n === !0) && this._draw(), m;
  },
  /**
   * Clear buttons from a collection and then insert new buttons
   */
  collectionRebuild: function(e, t) {
    var n = this._nodeToButton(e);
    if (t !== void 0) {
      var i;
      for (i = n.buttons.length - 1; i >= 0; i--)
        this.remove(n.buttons[i].node);
      for (n.conf.prefixButtons && t.unshift.apply(t, n.conf.prefixButtons), n.conf.postfixButtons && t.push.apply(t, n.conf.postfixButtons), i = 0; i < t.length; i++) {
        var a = t[i];
        this._expandButton(
          n.buttons,
          a,
          a !== void 0 && a.config !== void 0 && a.config.split !== void 0,
          !0,
          a.parentConf !== void 0 && a.parentConf.split !== void 0,
          null,
          a.parentConf
        );
      }
    }
    this._draw(n.collection, n.buttons);
  },
  /**
   * Get the container node for the buttons
   * @return {jQuery} Buttons node
   */
  container: function() {
    return this.dom.container;
  },
  /**
   * Disable a button
   * @param  {node} node Button node
   * @return {Buttons} Self for chaining
   */
  disable: function(e) {
    var t = this._nodeToButton(e);
    return t.isSplit ? W(t.node.childNodes[0]).addClass(this.c.dom.button.disabled).prop("disabled", !0) : W(t.node).addClass(this.c.dom.button.disabled).prop("disabled", !0), t.disabled = !0, this._checkSplitEnable(), this;
  },
  /**
   * Destroy the instance, cleaning up event handlers and removing DOM
   * elements
   * @return {Buttons} Self for chaining
   */
  destroy: function() {
    W("body").off("keyup." + this.s.namespace);
    var e = this.s.buttons.slice(), t, n;
    for (t = 0, n = e.length; t < n; t++)
      this.remove(e[t].node);
    this.dom.container.remove();
    var i = this.s.dt.settings()[0];
    for (t = 0, n = i.length; t < n; t++)
      if (i.inst === this) {
        i.splice(t, 1);
        break;
      }
    return this;
  },
  /**
   * Enable / disable a button
   * @param  {node} node Button node
   * @param  {boolean} [flag=true] Enable / disable flag
   * @return {Buttons} Self for chaining
   */
  enable: function(e, t) {
    if (t === !1)
      return this.disable(e);
    var n = this._nodeToButton(e);
    return n.isSplit ? W(n.node.childNodes[0]).removeClass(this.c.dom.button.disabled).prop("disabled", !1) : W(n.node).removeClass(this.c.dom.button.disabled).prop("disabled", !1), n.disabled = !1, this._checkSplitEnable(), this;
  },
  /**
   * Get a button's index
   *
   * This is internally recursive
   * @param {element} node Button to get the index of
   * @return {string} Button index
   */
  index: function(e, t, n) {
    t || (t = "", n = this.s.buttons);
    for (var i = 0, a = n.length; i < a; i++) {
      var f = n[i].buttons;
      if (n[i].node === e)
        return t + i;
      if (f && f.length) {
        var u = this.index(e, i + "-", f);
        if (u !== null)
          return u;
      }
    }
    return null;
  },
  /**
   * Get the instance name for the button set selector
   * @return {string} Instance name
   */
  name: function() {
    return this.c.name;
  },
  /**
   * Get a button's node of the buttons container if no button is given
   * @param  {node} [node] Button node
   * @return {jQuery} Button element, or container
   */
  node: function(e) {
    if (!e)
      return this.dom.container;
    var t = this._nodeToButton(e);
    return W(t.node);
  },
  /**
   * Set / get a processing class on the selected button
   * @param {element} node Triggering button node
   * @param  {boolean} flag true to add, false to remove, undefined to get
   * @return {boolean|Buttons} Getter value or this if a setter.
   */
  processing: function(e, t) {
    var n = this.s.dt, i = this._nodeToButton(e);
    return t === void 0 ? W(i.node).hasClass("processing") : (W(i.node).toggleClass("processing", t), W(n.table().node()).triggerHandler("buttons-processing.dt", [
      t,
      n.button(e),
      n,
      W(e),
      i.conf
    ]), this);
  },
  /**
   * Remove a button.
   * @param  {node} node Button node
   * @return {Buttons} Self for chaining
   */
  remove: function(e) {
    var t = this._nodeToButton(e), n = this._nodeToHost(e), i = this.s.dt;
    if (t.buttons.length)
      for (var a = t.buttons.length - 1; a >= 0; a--)
        this.remove(t.buttons[a].node);
    t.conf.destroying = !0, t.conf.destroy && t.conf.destroy.call(i.button(e), i, W(e), t.conf), this._removeKey(t.conf), W(t.node).remove(), t.inserter && W(t.inserter).remove();
    var f = W.inArray(t, n);
    return n.splice(f, 1), this;
  },
  /**
   * Get the text for a button
   * @param  {int|string} node Button index
   * @return {string} Button text
   */
  /**
  * Set the text for a button
  * @param  {int|string|function} node Button index
  * @param  {string} label Text
  * @return {Buttons} Self for chaining
  */
  text: function(e, t) {
    var n = this._nodeToButton(e), i = n.textNode, a = this.s.dt, f = W(n.node), u = function(v) {
      return typeof v == "function" ? v(a, f, n.conf) : v;
    };
    return t === void 0 ? u(n.conf.text) : (n.conf.text = t, i.html(u(t)), this);
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constructor
   */
  /**
   * Buttons constructor
   * @private
   */
  _constructor: function() {
    var e = this, t = this.s.dt, n = t.settings()[0], i = this.c.buttons;
    n._buttons || (n._buttons = []), n._buttons.push({
      inst: this,
      name: this.c.name
    });
    for (var a = 0, f = i.length; a < f; a++)
      this.add(i[a]);
    t.on("destroy", function(u, v) {
      v === n && e.destroy();
    }), W("body").on("keyup." + this.s.namespace, function(u) {
      if (!document.activeElement || document.activeElement === document.body) {
        var v = String.fromCharCode(u.keyCode).toLowerCase();
        e.s.listenKeys.toLowerCase().indexOf(v) !== -1 && e._keypress(v, u);
      }
    });
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Private methods
   */
  /**
   * Add a new button to the key press listener
   * @param {object} conf Resolved button configuration object
   * @private
   */
  _addKey: function(e) {
    e.key && (this.s.listenKeys += W.isPlainObject(e.key) ? e.key.key : e.key);
  },
  /**
   * Insert the buttons into the container. Call without parameters!
   * @param  {node} [container] Recursive only - Insert point
   * @param  {array} [buttons] Recursive only - Buttons array
   * @private
   */
  _draw: function(e, t) {
    e || (e = this.dom.container, t = this.s.buttons), e.children().detach();
    for (var n = 0, i = t.length; n < i; n++)
      e.append(t[n].inserter), e.append(" "), t[n].buttons && t[n].buttons.length && this._draw(t[n].collection, t[n].buttons);
  },
  /**
   * Create buttons from an array of buttons
   * @param  {array} attachTo Buttons array to attach to
   * @param  {object} button Button definition
   * @param  {boolean} inCollection true if the button is in a collection
   * @private
   */
  _expandButton: function(e, t, n, i, a, f, u) {
    var v = this.s.dt, m = !1, w = this.c.dom.collection, y = Array.isArray(t) ? t : [t], x;
    t === void 0 && (y = Array.isArray(n) ? n : [n]);
    for (var A = 0, N = y.length; A < N; A++) {
      var F = this._resolveExtends(y[A]);
      if (F) {
        if (m = !!(F.config && F.config.split), Array.isArray(F)) {
          this._expandButton(
            e,
            F,
            _ !== void 0 && _.conf !== void 0 ? _.conf.split : void 0,
            i,
            u !== void 0 && u.split !== void 0,
            f,
            u
          );
          continue;
        }
        var _ = this._buildButton(
          F,
          i,
          F.split !== void 0 || F.config !== void 0 && F.config.split !== void 0,
          a
        );
        if (_) {
          if (f != null ? (e.splice(f, 0, _), f++) : e.push(_), _.conf.dropIcon && !_.conf.split && W(_.node).addClass(this.c.dom.button.dropClass).append(this.c.dom.button.dropHtml), _.conf.buttons && (_.collection = W(
            "<" + w.container.content.tag + "/>"
          ), _.conf._collection = _.collection, this._expandButton(
            _.buttons,
            _.conf.buttons,
            _.conf.split,
            !m,
            m,
            f,
            _.conf
          )), _.conf.split) {
            _.collection = W("<" + w.container.tag + "/>"), _.conf._collection = _.collection;
            for (var X = 0; X < _.conf.split.length; X++) {
              var k = _.conf.split[X];
              typeof k == "object" && (k.parent = u, k.collectionLayout === void 0 && (k.collectionLayout = _.conf.collectionLayout), k.dropup === void 0 && (k.dropup = _.conf.dropup), k.fade === void 0 && (k.fade = _.conf.fade));
            }
            this._expandButton(
              _.buttons,
              _.conf.buttons,
              _.conf.split,
              !m,
              m,
              f,
              _.conf
            );
          }
          _.conf.parent = u, F.init && F.init.call(v.button(_.node), v, W(_.node), F), x = _.node;
        }
      }
    }
    return x;
  },
  /**
   * Create an individual button
   * @param  {object} config            Resolved button configuration
   * @param  {boolean} inCollection `true` if a collection button
   * @return {object} Completed button description object
   * @private
   */
  _buildButton: function(e, t, n, i) {
    var a = this, f = this.c.dom, u, v = this.s.dt, m = !1, w = function(S) {
      return typeof S == "function" ? S(v, A, e) : S;
    }, y = W.extend(!0, {}, f.button);
    if (t && n && f.collection.split ? W.extend(!0, y, f.collection.split.action) : i || t ? W.extend(!0, y, f.collection.button) : n && W.extend(!0, y, f.split.button), e.spacer) {
      var x = W("<" + y.spacer.tag + "/>").addClass(
        "dt-button-spacer " + e.style + " " + y.spacer.className
      ).html(w(e.text));
      return {
        conf: e,
        node: x,
        nodeChild: null,
        inserter: x,
        buttons: [],
        inCollection: t,
        isSplit: n,
        collection: null,
        textNode: x
      };
    }
    if (e.available && !e.available(v, e) && !e.html)
      return !1;
    var A;
    if (e.html)
      A = W(e.html);
    else {
      var N = function(S, p, g, P, E) {
        P.action.call(p.button(g), S, p, g, P, E), W(p.table().node()).triggerHandler("buttons-action.dt", [
          p.button(g),
          p,
          g,
          P
        ]);
      }, F = function(S, p, g, P) {
        P.async ? (a.processing(g[0], !0), setTimeout(function() {
          N(S, p, g, P, function() {
            a.processing(g[0], !1);
          });
        }, P.async)) : N(S, p, g, P, function() {
        });
      }, _ = e.tag || y.tag, X = e.clickBlurs === void 0 ? !0 : e.clickBlurs;
      if (A = W("<" + _ + "/>").addClass(y.className).attr("aria-controls", this.s.dt.table().node().id).on("click.dtb", function(S) {
        S.preventDefault(), !A.hasClass(y.disabled) && e.action && F(S, v, A, e), X && A.trigger("blur");
      }).on("keypress.dtb", function(S) {
        S.keyCode === 13 && (S.preventDefault(), !A.hasClass(y.disabled) && e.action && F(S, v, A, e));
      }), _.toLowerCase() === "a" && A.attr("href", "#"), _.toLowerCase() === "button" && A.attr("type", "button"), y.liner.tag) {
        var k = y.liner.tag.toLowerCase(), q = W("<" + k + "/>").html(w(e.text)).addClass(y.liner.className);
        k === "a" && q.attr("href", "#"), (k === "a" || k === "button") && (q.attr("tabindex", this.s.dt.settings()[0].iTabIndex), m = !0), A.append(q), u = q;
      } else
        A.html(w(e.text)), u = A;
      m || A.attr("tabindex", this.s.dt.settings()[0].iTabIndex), e.enabled === !1 && A.addClass(y.disabled), e.className && A.addClass(e.className), e.titleAttr && A.attr("title", w(e.titleAttr)), e.attr && A.attr(e.attr), e.namespace || (e.namespace = ".dt-button-" + Bf++), e.config !== void 0 && e.config.split && (e.split = e.config.split);
    }
    var j = this.c.dom.buttonContainer, I;
    j && j.tag ? I = W("<" + j.tag + "/>").addClass(j.className).append(A) : I = A, this._addKey(e), this.c.buttonCreated && (I = this.c.buttonCreated(e, I));
    var Z;
    if (n) {
      var l = t ? W.extend(!0, this.c.dom.split, this.c.dom.collection.split) : this.c.dom.split, U = l.wrapper;
      Z = W("<" + U.tag + "/>").addClass(U.className).append(A);
      var ne = W.extend(e, {
        autoClose: !0,
        align: l.dropdown.align,
        attr: {
          "aria-haspopup": "dialog",
          "aria-expanded": !1
        },
        className: l.dropdown.className,
        closeButton: !1,
        splitAlignClass: l.dropdown.splitAlignClass,
        text: l.dropdown.text
      });
      this._addKey(ne);
      var K = function(S, p, g, P) {
        tt.split.action.call(
          p.button(Z),
          S,
          p,
          g,
          P
        ), W(p.table().node()).triggerHandler("buttons-action.dt", [
          p.button(g),
          p,
          g,
          P
        ]), g.attr("aria-expanded", !0);
      }, V = W(
        '<button class="' + l.dropdown.className + ' dt-button"></button>'
      ).html(this.c.dom.button.dropHtml).addClass(this.c.dom.button.dropClass).on("click.dtb", function(S) {
        S.preventDefault(), S.stopPropagation(), V.hasClass(y.disabled) || K(S, v, V, ne), X && V.trigger("blur");
      }).on("keypress.dtb", function(S) {
        S.keyCode === 13 && (S.preventDefault(), V.hasClass(y.disabled) || K(S, v, V, ne));
      });
      e.split.length === 0 && V.addClass("dtb-hide-drop"), Z.append(V).attr(ne.attr);
    }
    var te = n ? Z.get(0) : A.get(0);
    return {
      conf: e,
      node: te,
      nodeChild: te && te.children && te.children.length ? te.children[0] : null,
      inserter: n ? Z : I,
      buttons: [],
      inCollection: t,
      isSplit: n,
      inSplit: i,
      collection: null,
      textNode: u
    };
  },
  /**
   * Spin over buttons checking if splits should be enabled or not.
   * @param {*} buttons Array of buttons to check
   */
  _checkSplitEnable: function(e) {
    e || (e = this.s.buttons);
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      if (n.isSplit) {
        var i = n.node.childNodes[1];
        this._checkAnyEnabled(n.buttons) ? W(i).removeClass(this.c.dom.button.disabled).prop("disabled", !1) : W(i).addClass(this.c.dom.button.disabled).prop("disabled", !1);
      } else n.isCollection && this._checkSplitEnable(n.buttons);
    }
  },
  /**
   * Check an array of buttons and see if any are enabled in it
   * @param {*} buttons Button array
   * @returns true if a button is enabled, false otherwise
   */
  _checkAnyEnabled: function(e) {
    for (var t = 0; t < e.length; t++)
      if (!e[t].disabled)
        return !0;
    return !1;
  },
  /**
   * Get the button object from a node (recursive)
   * @param  {node} node Button node
   * @param  {array} [buttons] Button array, uses base if not defined
   * @return {object} Button object
   * @private
   */
  _nodeToButton: function(e, t) {
    t || (t = this.s.buttons);
    for (var n = 0, i = t.length; n < i; n++) {
      if (t[n].node === e || t[n].nodeChild === e)
        return t[n];
      if (t[n].buttons.length) {
        var a = this._nodeToButton(e, t[n].buttons);
        if (a)
          return a;
      }
    }
  },
  /**
   * Get container array for a button from a button node (recursive)
   * @param  {node} node Button node
   * @param  {array} [buttons] Button array, uses base if not defined
   * @return {array} Button's host array
   * @private
   */
  _nodeToHost: function(e, t) {
    t || (t = this.s.buttons);
    for (var n = 0, i = t.length; n < i; n++) {
      if (t[n].node === e)
        return t;
      if (t[n].buttons.length) {
        var a = this._nodeToHost(e, t[n].buttons);
        if (a)
          return a;
      }
    }
  },
  /**
   * Handle a key press - determine if any button's key configured matches
   * what was typed and trigger the action if so.
   * @param  {string} character The character pressed
   * @param  {object} e Key event that triggered this call
   * @private
   */
  _keypress: function(e, t) {
    if (!t._buttonsHandled) {
      var n = function(a, f) {
        if (a.key) {
          if (a.key === e)
            t._buttonsHandled = !0, W(f).click();
          else if (W.isPlainObject(a.key)) {
            if (a.key.key !== e || a.key.shiftKey && !t.shiftKey || a.key.altKey && !t.altKey || a.key.ctrlKey && !t.ctrlKey || a.key.metaKey && !t.metaKey)
              return;
            t._buttonsHandled = !0, W(f).click();
          }
        }
      }, i = function(a) {
        for (var f = 0, u = a.length; f < u; f++)
          n(a[f].conf, a[f].node), a[f].buttons.length && i(a[f].buttons);
      };
      i(this.s.buttons);
    }
  },
  /**
   * Remove a key from the key listener for this instance (to be used when a
   * button is removed)
   * @param  {object} conf Button configuration
   * @private
   */
  _removeKey: function(e) {
    if (e.key) {
      var t = W.isPlainObject(e.key) ? e.key.key : e.key, n = this.s.listenKeys.split(""), i = W.inArray(t, n);
      n.splice(i, 1), this.s.listenKeys = n.join("");
    }
  },
  /**
   * Resolve a button configuration
   * @param  {string|function|object} conf Button config to resolve
   * @return {object} Button configuration
   * @private
   */
  _resolveExtends: function(e) {
    var t = this, n = this.s.dt, i, a, f = function(y) {
      for (var x = 0; !W.isPlainObject(y) && !Array.isArray(y); ) {
        if (y === void 0)
          return;
        if (typeof y == "function") {
          if (y = y.call(t, n, e), !y)
            return !1;
        } else if (typeof y == "string") {
          if (!tt[y])
            return { html: y };
          y = tt[y];
        }
        if (x++, x > 30)
          throw "Buttons: Too many iterations";
      }
      return Array.isArray(y) ? y : W.extend({}, y);
    };
    for (e = f(e); e && e.extend; ) {
      if (!tt[e.extend])
        throw "Cannot extend unknown button type: " + e.extend;
      var u = f(tt[e.extend]);
      if (Array.isArray(u))
        return u;
      if (!u)
        return !1;
      var v = u.className;
      e.config !== void 0 && u.config !== void 0 && (e.config = W.extend({}, u.config, e.config)), e = W.extend({}, u, e), v && e.className !== v && (e.className = v + " " + e.className), e.extend = u.extend;
    }
    var m = e.postfixButtons;
    if (m)
      for (e.buttons || (e.buttons = []), i = 0, a = m.length; i < a; i++)
        e.buttons.push(m[i]);
    var w = e.prefixButtons;
    if (w)
      for (e.buttons || (e.buttons = []), i = 0, a = w.length; i < a; i++)
        e.buttons.splice(i, 0, w[i]);
    return e;
  },
  /**
   * Display (and replace if there is an existing one) a popover attached to a button
   * @param {string|node} content Content to show
   * @param {DataTable.Api} hostButton DT API instance of the button
   * @param {object} inOpts Options (see object below for all options)
   */
  _popover: function(e, t, n) {
    var i = t, a = this.c, f = !1, u = W.extend(
      {
        align: "button-left",
        // button-right, dt-container, split-left, split-right
        autoClose: !1,
        background: !0,
        backgroundClassName: "dt-button-background",
        closeButton: !0,
        containerClassName: a.dom.collection.container.className,
        contentClassName: a.dom.collection.container.content.className,
        collectionLayout: "",
        collectionTitle: "",
        dropup: !1,
        fade: 400,
        popoverTitle: "",
        rightAlignClassName: "dt-button-right",
        tag: a.dom.collection.container.tag
      },
      n
    ), v = u.tag + "." + u.containerClassName.replace(/ /g, "."), m = t.node(), w = u.collectionLayout.includes("fixed") ? W("body") : t.node(), y = function() {
      f = !0, Ea(W(v), u.fade, function() {
        W(this).detach();
      }), W(
        i.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
      ).attr("aria-expanded", "false"), W("div.dt-button-background").off("click.dtb-collection"), Ne.background(
        !1,
        u.backgroundClassName,
        u.fade,
        w
      ), W(window).off("resize.resize.dtb-collection"), W("body").off(".dtb-collection"), i.off("buttons-action.b-internal"), i.off("destroy.dtb-popover"), W("body").trigger("buttons-popover-hide.dt");
    };
    if (e === !1) {
      y();
      return;
    }
    var x = W(
      i.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
    );
    if (x.length && (w.closest(v).length && (w = x.eq(0)), y()), u.sort) {
      var A = W("button", e).map(function(S, p) {
        return {
          text: W(p).text(),
          el: p
        };
      }).toArray();
      A.sort(function(S, p) {
        return S.text.localeCompare(p.text);
      }), W(e).append(A.map(function(S) {
        return S.el;
      }));
    }
    var N = W(".dt-button", e).length, F = "";
    N === 3 ? F = "dtb-b3" : N === 2 ? F = "dtb-b2" : N === 1 && (F = "dtb-b1");
    var _ = W("<" + u.tag + "/>").addClass(u.containerClassName).addClass(u.collectionLayout).addClass(u.splitAlignClass).addClass(F).css("display", "none").attr({
      "aria-modal": !0,
      role: "dialog"
    });
    e = W(e).addClass(u.contentClassName).attr("role", "menu").appendTo(_), m.attr("aria-expanded", "true"), w.parents("body")[0] !== document.body && (w = W(document.body).children("div, section, p").last()), u.popoverTitle ? _.prepend(
      '<div class="dt-button-collection-title">' + u.popoverTitle + "</div>"
    ) : u.collectionTitle && _.prepend(
      '<div class="dt-button-collection-title">' + u.collectionTitle + "</div>"
    ), u.closeButton && _.prepend('<div class="dtb-popover-close">&times;</div>').addClass("dtb-collection-closeable"), Ta(_.insertAfter(w), u.fade);
    var X = W(t.table().container()), k = _.css("position");
    if ((u.span === "container" || u.align === "dt-container") && (w = w.parent(), _.css("width", X.width())), k === "absolute") {
      var q = W(w[0].offsetParent), j = w.position(), I = w.offset(), Z = q.offset(), l = q.position(), U = window.getComputedStyle(q[0]);
      Z.height = q.outerHeight(), Z.width = q.width() + parseFloat(U.paddingLeft), Z.right = Z.left + Z.width, Z.bottom = Z.top + Z.height;
      var ne = j.top + w.outerHeight(), K = j.left;
      _.css({
        top: ne,
        left: K
      }), U = window.getComputedStyle(_[0]);
      var V = _.offset();
      V.height = _.outerHeight(), V.width = _.outerWidth(), V.right = V.left + V.width, V.bottom = V.top + V.height, V.marginTop = parseFloat(U.marginTop), V.marginBottom = parseFloat(U.marginBottom), u.dropup && (ne = j.top - V.height - V.marginTop - V.marginBottom), (u.align === "button-right" || _.hasClass(u.rightAlignClassName)) && (K = j.left - V.width + w.outerWidth()), (u.align === "dt-container" || u.align === "container") && K < j.left && (K = -j.left), l.left + K + V.width > W(window).width() && (K = W(window).width() - V.width - l.left), I.left + K < 0 && (K = -I.left), l.top + ne + V.height > W(window).height() + W(window).scrollTop() && (ne = j.top - V.height - V.marginTop - V.marginBottom), q.offset().top + ne < W(window).scrollTop() && (ne = j.top + w.outerHeight()), _.css({
        top: ne,
        left: K
      });
    } else {
      var te = function() {
        var S = W(window).height() / 2, p = _.height() / 2;
        p > S && (p = S), _.css("marginTop", p * -1);
      };
      te(), W(window).on("resize.dtb-collection", function() {
        te();
      });
    }
    u.background && Ne.background(
      !0,
      u.backgroundClassName,
      u.fade,
      u.backgroundHost || w
    ), W("div.dt-button-background").on(
      "click.dtb-collection",
      function() {
      }
    ), u.autoClose && setTimeout(function() {
      i.on("buttons-action.b-internal", function(S, p, g, P) {
        P[0] !== w[0] && y();
      });
    }, 0), W(_).trigger("buttons-popover.dt"), i.on("destroy.dtb-popover", y), setTimeout(function() {
      f = !1, W("body").on("click.dtb-collection", function(S) {
        if (!f) {
          var p = W.fn.addBack ? "addBack" : "andSelf", g = W(S.target).parent()[0];
          (!W(S.target).parents()[p]().filter(e).length && !W(g).hasClass("dt-buttons") || W(S.target).hasClass("dt-button-background")) && y();
        }
      }).on("keyup.dtb-collection", function(S) {
        S.keyCode === 27 && y();
      }).on("keydown.dtb-collection", function(S) {
        var p = W("a, button", e), g = document.activeElement;
        S.keyCode === 9 && (p.index(g) === -1 ? (p.first().focus(), S.preventDefault()) : S.shiftKey ? g === p[0] && (p.last().focus(), S.preventDefault()) : g === p.last()[0] && (p.first().focus(), S.preventDefault()));
      });
    }, 0);
  }
});
Ne.background = function(e, t, n, i) {
  n === void 0 && (n = 400), i || (i = document.body), e ? Ta(
    W("<div/>").addClass(t).css("display", "none").insertAfter(i),
    n
  ) : Ea(W("div." + t), n, function() {
    W(this).removeClass(t).remove();
  });
};
Ne.instanceSelector = function(e, t) {
  if (e == null)
    return W.map(t, function(f) {
      return f.inst;
    });
  var n = [], i = W.map(t, function(f) {
    return f.name;
  }), a = function(f) {
    if (Array.isArray(f)) {
      for (var u = 0, v = f.length; u < v; u++)
        a(f[u]);
      return;
    }
    if (typeof f == "string")
      if (f.indexOf(",") !== -1)
        a(f.split(","));
      else {
        var m = W.inArray(f.trim(), i);
        m !== -1 && n.push(t[m].inst);
      }
    else if (typeof f == "number")
      n.push(t[f].inst);
    else if (typeof f == "object" && f.nodeName)
      for (var w = 0; w < t.length; w++)
        t[w].inst.dom.container[0] === f && n.push(t[w].inst);
    else typeof f == "object" && n.push(f);
  };
  return a(e), n;
};
Ne.buttonSelector = function(e, t) {
  for (var n = [], i = function(m, w, y) {
    for (var x, A, N = 0, F = w.length; N < F; N++)
      x = w[N], x && (A = y !== void 0 ? y + N : N + "", m.push({
        node: x.node,
        name: x.conf.name,
        idx: A
      }), x.buttons && i(m, x.buttons, A + "-"));
  }, a = function(m, w) {
    var y, x, A = [];
    i(A, w.s.buttons);
    var N = W.map(A, function(q) {
      return q.node;
    });
    if (Array.isArray(m) || m instanceof W) {
      for (y = 0, x = m.length; y < x; y++)
        a(m[y], w);
      return;
    }
    if (m == null || m === "*")
      for (y = 0, x = A.length; y < x; y++)
        n.push({
          inst: w,
          node: A[y].node
        });
    else if (typeof m == "number")
      w.s.buttons[m] && n.push({
        inst: w,
        node: w.s.buttons[m].node
      });
    else if (typeof m == "string")
      if (m.indexOf(",") !== -1) {
        var F = m.split(",");
        for (y = 0, x = F.length; y < x; y++)
          a(F[y].trim(), w);
      } else if (m.match(/^\d+(\-\d+)*$/)) {
        var _ = W.map(A, function(q) {
          return q.idx;
        });
        n.push({
          inst: w,
          node: A[W.inArray(m, _)].node
        });
      } else if (m.indexOf(":name") !== -1) {
        var X = m.replace(":name", "");
        for (y = 0, x = A.length; y < x; y++)
          A[y].name === X && n.push({
            inst: w,
            node: A[y].node
          });
      } else
        W(N).filter(m).each(function() {
          n.push({
            inst: w,
            node: this
          });
        });
    else if (typeof m == "object" && m.nodeName) {
      var k = W.inArray(m, N);
      k !== -1 && n.push({
        inst: w,
        node: N[k]
      });
    }
  }, f = 0, u = e.length; f < u; f++) {
    var v = e[f];
    a(t, v);
  }
  return n;
};
Ne.stripData = function(e, t) {
  return e !== null && typeof e == "object" && e.nodeName && e.nodeType && (e = e.innerHTML), typeof e != "string" || (e = Ne.stripHtmlScript(e), e = Ne.stripHtmlComments(e), (!t || t.stripHtml) && (e = ie.util.stripHtml(e)), (!t || t.trim) && (e = e.trim()), (!t || t.stripNewlines) && (e = e.replace(/\n/g, " ")), (!t || t.decodeEntities) && (Ps ? e = Ps(e) : (oo.innerHTML = e, e = oo.value)), (!t || t.escapeExcelFormula) && e.match(/^[=@\t\r]/) && (e = "'" + e)), e;
};
Ne.entityDecoder = function(e) {
  Ps = e;
};
Ne.stripHtmlComments = function(e) {
  var t;
  do
    t = e, e = e.replace(/(<!--.*?--!?>)|(<!--[\S\s]+?--!?>)|(<!--[\S\s]*?$)/g, "");
  while (e !== t);
  return e;
};
Ne.stripHtmlScript = function(e) {
  var t;
  do
    t = e, e = e.replace(/<script\b[^<]*(?:(?!<\/script[^>]*>)<[^<]*)*<\/script[^>]*>/gi, "");
  while (e !== t);
  return e;
};
Ne.defaults = {
  buttons: ["copy", "excel", "csv", "pdf", "print"],
  name: "main",
  tabIndex: 0,
  dom: {
    container: {
      tag: "div",
      className: "dt-buttons"
    },
    collection: {
      container: {
        // The element used for the dropdown
        className: "dt-button-collection",
        content: {
          className: "",
          tag: "div"
        },
        tag: "div"
      }
      // optionally
      // , button: IButton - buttons inside the collection container
      // , split: ISplit - splits inside the collection container
    },
    button: {
      tag: "button",
      className: "dt-button",
      active: "dt-button-active",
      // class name
      disabled: "disabled",
      // class name
      spacer: {
        className: "dt-button-spacer",
        tag: "span"
      },
      liner: {
        tag: "span",
        className: ""
      },
      dropClass: "",
      dropHtml: '<span class="dt-button-down-arrow">&#x25BC;</span>'
    },
    split: {
      action: {
        // action button
        className: "dt-button-split-drop-button dt-button",
        tag: "button"
      },
      dropdown: {
        // button to trigger the dropdown
        align: "split-right",
        className: "dt-button-split-drop",
        splitAlignClass: "dt-button-split-left",
        tag: "button"
      },
      wrapper: {
        // wrap around both
        className: "dt-button-split",
        tag: "div"
      }
    }
  }
};
Ne.version = "3.2.6";
W.extend(tt, {
  collection: {
    text: function(e) {
      return e.i18n("buttons.collection", "Collection");
    },
    className: "buttons-collection",
    closeButton: !1,
    dropIcon: !0,
    init: function(e, t) {
      t.attr("aria-expanded", !1);
    },
    action: function(e, t, n, i) {
      i._collection.parents("body").length ? this.popover(!1, i) : this.popover(i._collection, i), e.type === "keypress" && W("a, button", i._collection).eq(0).focus();
    },
    attr: {
      "aria-haspopup": "dialog"
    }
    // Also the popover options, defined in Buttons.popover
  },
  split: {
    text: function(e) {
      return e.i18n("buttons.split", "Split");
    },
    className: "buttons-split",
    closeButton: !1,
    init: function(e, t) {
      return t.attr("aria-expanded", !1);
    },
    action: function(e, t, n, i) {
      this.popover(i._collection, i);
    },
    attr: {
      "aria-haspopup": "dialog"
    }
    // Also the popover options, defined in Buttons.popover
  },
  copy: function() {
    if (tt.copyHtml5)
      return "copyHtml5";
  },
  csv: function(e, t) {
    if (tt.csvHtml5 && tt.csvHtml5.available(e, t))
      return "csvHtml5";
  },
  excel: function(e, t) {
    if (tt.excelHtml5 && tt.excelHtml5.available(e, t))
      return "excelHtml5";
  },
  pdf: function(e, t) {
    if (tt.pdfHtml5 && tt.pdfHtml5.available(e, t))
      return "pdfHtml5";
  },
  pageLength: function(e) {
    var t = e.settings()[0].aLengthMenu, n = [], i = [], a = function(v) {
      return v.i18n(
        "buttons.pageLength",
        {
          "-1": "Show all rows",
          _: "Show %d rows"
        },
        v.page.len()
      );
    };
    if (Array.isArray(t[0]))
      n = t[0], i = t[1];
    else
      for (var f = 0; f < t.length; f++) {
        var u = t[f];
        W.isPlainObject(u) ? (n.push(u.value), i.push(u.label)) : (n.push(u), i.push(u));
      }
    return {
      extend: "collection",
      text: a,
      className: "buttons-page-length",
      autoClose: !0,
      buttons: W.map(n, function(v, m) {
        return {
          text: i[m],
          className: "button-page-length",
          action: function(w, y) {
            y.page.len(v).draw();
          },
          init: function(w, y, x) {
            var A = this, N = function() {
              A.active(w.page.len() === v);
            };
            w.on("length.dt" + x.namespace, N), N();
          },
          destroy: function(w, y, x) {
            w.off("length.dt" + x.namespace);
          }
        };
      }),
      init: function(v, m, w) {
        var y = this;
        v.on("length.dt" + w.namespace, function() {
          y.text(w.text);
        });
      },
      destroy: function(v, m, w) {
        v.off("length.dt" + w.namespace);
      }
    };
  },
  spacer: {
    style: "empty",
    spacer: !0,
    text: function(e) {
      return e.i18n("buttons.spacer", "");
    }
  }
});
var oo = W("<textarea/>")[0];
W.fn.dataTable.Buttons = Ne;
W.fn.DataTable.Buttons = Ne;
W(document).on("init.dt plugin-init.dt", function(e, t) {
  if (e.namespace === "dt") {
    var n = t.oInit.buttons || ie.defaults.buttons;
    n && !t._buttons && new Ne(t, n).container();
  }
});
/*! Bootstrap integration for DataTables' Buttons
 * © SpryMedia Ltd - datatables.net/license
 */
let ao = Pt;
ao.extend(!0, ie.Buttons.defaults, {
  dom: {
    container: {
      className: "dt-buttons btn-group flex-wrap"
    },
    button: {
      className: "btn btn-secondary",
      active: "active",
      dropHtml: "",
      dropClass: "dropdown-toggle"
    },
    collection: {
      container: {
        tag: "div",
        className: "dt-button-collection",
        content: {
          tag: "ul",
          className: "dropdown-menu show"
        }
      },
      closeButton: !1,
      button: {
        tag: "li",
        className: "dt-button",
        active: "dt-button-active-a",
        disabled: "disabled",
        liner: {
          tag: "a",
          className: "dropdown-item"
        },
        spacer: {
          className: "divider",
          tag: "li"
        }
      }
    },
    split: {
      action: {
        tag: "a",
        className: "btn btn-secondary dt-button-split-drop-button",
        closeButton: !1
      },
      dropdown: {
        tag: "button",
        className: "btn btn-secondary dt-button-split-drop dropdown-toggle-split",
        closeButton: !1,
        align: "split-left",
        splitAlignClass: "dt-button-split-left"
      },
      wrapper: {
        tag: "div",
        className: "dt-button-split btn-group",
        closeButton: !1
      }
    }
  },
  buttonCreated: function(e, t) {
    return e.buttons ? ao('<div class="btn-group"/>').append(t) : t;
  }
});
ie.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right";
/*!
 * Column visibility buttons for Buttons and DataTables.
 * © SpryMedia Ltd - datatables.net/license
 */
let jf = Pt;
jf.extend(ie.ext.buttons, {
  // A collection of column visibility buttons
  colvis: function(e, t) {
    var n = null, i = {
      extend: "collection",
      init: function(a, f) {
        n = f;
      },
      text: function(a) {
        return a.i18n("buttons.colvis", "Column visibility");
      },
      className: "buttons-colvis",
      closeButton: !1,
      buttons: [
        {
          extend: "columnsToggle",
          columns: t.columns,
          columnText: t.columnText
        }
      ]
    };
    return e.on("column-reorder.dt" + t.namespace, function() {
      e.button(null, e.button(null, n).node()).collectionRebuild([
        {
          extend: "columnsToggle",
          columns: t.columns,
          columnText: t.columnText
        }
      ]);
    }), i;
  },
  // Selected columns with individual buttons - toggle column visibility
  columnsToggle: function(e, t) {
    var n = e.columns(t.columns).indexes().map(function(i) {
      return {
        extend: "columnToggle",
        columns: i,
        columnText: t.columnText
      };
    }).toArray();
    return n;
  },
  // Single button to toggle column visibility
  columnToggle: function(e, t) {
    return {
      extend: "columnVisibility",
      columns: t.columns,
      columnText: t.columnText
    };
  },
  // Selected columns with individual buttons - set column visibility
  columnsVisibility: function(e, t) {
    var n = e.columns(t.columns).indexes().map(function(i) {
      return {
        extend: "columnVisibility",
        columns: i,
        visibility: t.visibility,
        columnText: t.columnText
      };
    }).toArray();
    return n;
  },
  // Single button to set column visibility
  columnVisibility: {
    columns: void 0,
    // column selector
    text: function(e, t, n) {
      return n._columnText(e, n);
    },
    className: "buttons-columnVisibility",
    action: function(e, t, n, i) {
      var a = t.columns(i.columns), f = a.visible();
      a.visible(
        i.visibility !== void 0 ? i.visibility : !(f.length && f[0])
      );
    },
    init: function(e, t, n) {
      var i = this, a = e.column(n.columns);
      t.attr("data-cv-idx", n.columns), e.on("column-visibility.dt" + n.namespace, function(f, u, v, m) {
        a.index() === v && !u.bDestroying && u.nTable == e.settings()[0].nTable && i.active(m);
      }).on("column-reorder.dt" + n.namespace, function() {
        n.destroying || e.columns(n.columns).count() === 1 && (a = e.column(n.columns), i.text(n._columnText(e, n)), i.active(a.visible()));
      }), this.active(a.visible());
    },
    destroy: function(e, t, n) {
      e.off("column-visibility.dt" + n.namespace).off(
        "column-reorder.dt" + n.namespace
      );
    },
    _columnText: function(e, t) {
      if (typeof t.text == "string")
        return t.text;
      var n = e.column(t.columns).title(), i = e.column(t.columns).index();
      return n = n.replace(/\n/g, " ").replace(/<br\s*\/?>/gi, " ").replace(/<select(.*?)<\/select\s*>/gi, ""), n = ie.Buttons.stripHtmlComments(n), n = ie.util.stripHtml(n).trim(), t.columnText ? t.columnText(e, i, n) : n;
    }
  },
  colvisRestore: {
    className: "buttons-colvisRestore",
    text: function(e) {
      return e.i18n("buttons.colvisRestore", "Restore visibility");
    },
    init: function(e, t, n) {
      e.columns().every(function() {
        var i = this.init();
        i.__visOriginal === void 0 && (i.__visOriginal = this.visible());
      });
    },
    action: function(e, t, n, i) {
      t.columns().every(function(a) {
        var f = this.init();
        this.visible(f.__visOriginal);
      });
    }
  },
  colvisGroup: {
    className: "buttons-colvisGroup",
    action: function(e, t, n, i) {
      t.columns(i.show).visible(!0, !1), t.columns(i.hide).visible(!1, !1), t.columns.adjust();
    },
    show: [],
    hide: []
  }
});
/*! FixedHeader 4.0.6
 * © SpryMedia Ltd - datatables.net/license
 */
let ae = Pt;
var If = 0, Rt = function(e, t) {
  if (!ie.versionCheck("2"))
    throw "Warning: FixedHeader requires DataTables 2 or newer";
  if (!(this instanceof Rt))
    throw "FixedHeader must be initialised with the 'new' keyword.";
  t === !0 && (t = {}), e = new ie.Api(e), this.c = ae.extend(!0, {}, Rt.defaults, t), this.s = {
    dt: e,
    position: {
      theadTop: 0,
      tbodyTop: 0,
      tfootTop: 0,
      tfootBottom: 0,
      width: 0,
      left: 0,
      tfootHeight: 0,
      theadHeight: 0,
      windowHeight: ae(window).height(),
      visible: !0
    },
    headerMode: null,
    footerMode: null,
    autoWidth: e.settings()[0].oFeatures.bAutoWidth,
    namespace: ".dtfc" + If++,
    scrollLeft: {
      header: -1,
      footer: -1
    },
    enable: !0,
    autoDisable: !1
  }, this.dom = {
    floatingHeader: null,
    thead: ae(e.table().header()),
    tbody: ae(e.table().body()),
    tfoot: ae(e.table().footer()),
    header: {
      host: null,
      scrollAdjust: null,
      floating: null,
      floatingParent: ae(
        '<div class="dtfh-floatingparent"><div class="dtfh-floating-limiter"><div></div></div></div>'
      ),
      limiter: null,
      placeholder: null
    },
    footer: {
      host: null,
      scrollAdjust: null,
      floating: null,
      floatingParent: ae(
        '<div class="dtfh-floatingparent"><div class="dtfh-floating-limiter"><div></div></div></div>'
      ),
      limiter: null,
      placeholder: null
    }
  };
  var n = this.dom;
  n.header.host = n.thead.parent(), n.header.limiter = n.header.floatingParent.children(), n.header.scrollAdjust = n.header.limiter.children(), n.footer.host = n.tfoot.parent(), n.footer.limiter = n.footer.floatingParent.children(), n.footer.scrollAdjust = n.footer.limiter.children();
  var i = e.settings()[0];
  if (i._fixedHeader)
    throw "FixedHeader already initialised on table " + i.nTable.id;
  i._fixedHeader = this, this._constructor();
};
ae.extend(Rt.prototype, {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * API methods
   */
  /**
   * Kill off FH and any events
   */
  destroy: function() {
    var e = this.dom;
    this.s.dt.off(".dtfc"), ae("body").off(".dtfc"), ae(window).off(this.s.namespace), e.header.rightBlocker && e.header.rightBlocker.remove(), e.header.leftBlocker && e.header.leftBlocker.remove(), e.footer.rightBlocker && e.footer.rightBlocker.remove(), e.footer.leftBlocker && e.footer.leftBlocker.remove(), this.c.header && this._modeChange("in-place", "header", !0), this.c.footer && e.tfoot.length && this._modeChange("in-place", "footer", !0);
  },
  /**
   * Enable / disable the fixed elements
   *
   * @param  {boolean} enable `true` to enable, `false` to disable
   */
  enable: function(e, t, n) {
    this.s.enable = e, this.s.enableType = n, (t || t === void 0) && (this._positions(), this._scroll(!0));
  },
  /**
   * Get enabled status
   */
  enabled: function() {
    return this.s.enable;
  },
  /**
   * Set header offset
   *
   * @param  {int} new value for headerOffset
   */
  headerOffset: function(e) {
    return e !== void 0 && (this.c.headerOffset = e, this.update()), this.c.headerOffset;
  },
  /**
   * Set footer offset
   *
   * @param  {int} new value for footerOffset
   */
  footerOffset: function(e) {
    return e !== void 0 && (this.c.footerOffset = e, this.update()), this.c.footerOffset;
  },
  /**
   * Recalculate the position of the fixed elements and force them into place
   */
  update: function(e) {
    var t = this.s.dt.table().node();
    !this.s.enable && !this.s.autoDisable || (ae(t).is(":visible") ? (this.s.autoDisable = !1, this.enable(!0, !1)) : (this.s.autoDisable = !0, this.enable(!1, !1)), ae(t).children("thead").length !== 0 && (this._positions(), this._scroll(e !== void 0 ? e : !0), this._widths(this.dom.header), this._widths(this.dom.footer)));
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constructor
   */
  /**
   * FixedHeader constructor - adding the required event listeners and
   * simple initialisation
   *
   * @private
   */
  _constructor: function() {
    var e = this, t = this.s.dt;
    ae(window).on("scroll" + this.s.namespace, function() {
      e._scroll();
    }).on(
      "resize" + this.s.namespace,
      ie.util.throttle(function() {
        e.s.position.windowHeight = ae(window).height(), e.update();
      }, 50)
    );
    var n = ae(".fh-fixedHeader");
    !this.c.headerOffset && n.length && (this.c.headerOffset = n.outerHeight());
    var i = ae(".fh-fixedFooter");
    !this.c.footerOffset && i.length && (this.c.footerOffset = i.outerHeight()), t.on(
      "column-reorder.dt.dtfc column-visibility.dt.dtfc column-sizing.dt.dtfc responsive-display.dt.dtfc",
      function(a, f) {
        e.update();
      }
    ), ae("body").on("draw.dt.dtfc", function(a, f) {
      e.update(f !== t.settings()[0]);
    }), t.on("destroy.dtfc", function() {
      e.destroy();
    }), this._positions(), this._scroll();
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Private methods
   */
  /**
   * Clone a fixed item to act as a place holder for the original element
   * which is moved into a clone of the table element, and moved around the
   * document to give the fixed effect.
   *
   * @param  {string}  item  'header' or 'footer'
   * @param  {boolean} force Force the clone to happen, or allow automatic
   *   decision (reuse existing if available)
   * @private
   */
  _clone: function(e, t) {
    var n = this, i = this.s.dt, a = this.dom[e], f = e === "header" ? this.dom.thead : this.dom.tfoot;
    if (!(e === "footer" && this._scrollEnabled()))
      if (!t && a.floating)
        a.floating.removeClass(
          "fixedHeader-floating fixedHeader-locked"
        );
      else {
        a.floating && (a.placeholder !== null && a.placeholder.detach(), a.floating.detach());
        var u = ae(i.table().node()), v = ae(u.parent()), m = this._scrollEnabled();
        a.floating = ae(i.table().node().cloneNode(!1)).attr("aria-hidden", "true").css({
          top: 0,
          left: 0
        }).removeAttr("id"), a.floatingParent.css({
          width: v[0].offsetWidth,
          position: "fixed",
          left: m ? u.offset().left + v.scrollLeft() : 0
        }).css(
          e === "header" ? {
            top: this.c.headerOffset,
            bottom: ""
          } : {
            top: "",
            bottom: this.c.footerOffset
          }
        ).addClass(
          e === "footer" ? "dtfh-floatingparent-foot" : "dtfh-floatingparent-head"
        ).appendTo("body").children().eq(0), a.limiter.css({
          width: "100%",
          overflow: "hidden",
          height: "fit-content"
        }), a.scrollAdjust.append(a.floating), this._stickyPosition(a.floating, "-");
        var w = function() {
          var x = v.scrollLeft();
          n.s.scrollLeft = { footer: x, header: x }, a.limiter.scrollLeft(n.s.scrollLeft.header);
        };
        w(), v.off("scroll.dtfh").on("scroll.dtfh", w), a.scrollAdjust.css({
          width: "fit-content",
          paddingRight: n.s.dt.settings()[0].oBrowser.barWidth
        });
        let y = ae(
          e === "footer" ? "div.dtfc-bottom-blocker" : "div.dtfc-top-blocker",
          i.table().container()
        );
        return y.length && y.clone().appendTo(a.floatingParent).css({
          position: "fixed",
          right: y.width()
        }), a.placeholder = f.clone(!1), a.placeholder.find("*[id]").removeAttr("id"), ae(a.placeholder).insertAfter(
          ae(e === "header" ? "colgroup" : "tbody", a.host)
        ), a.floating.append(f), this._widths(a), w;
      }
  },
  /**
   * This method sets the sticky position of the header elements to match fixed columns
   * @param {JQuery<HTMLElement>} el
   * @param {string} sign
   */
  _stickyPosition: function(e, t) {
    if (this._scrollEnabled()) {
      var n = this, i = ae(n.s.dt.table().node()).css("direction") === "rtl";
      e.find("th").each(function() {
        if (ae(this).css("position") === "sticky") {
          var a = ae(this).css("right"), f = ae(this).css("left"), u;
          a !== "auto" && !i ? (u = +a.replace(/px/g, ""), ae(this).css("right", u > 0 ? u : 0)) : f !== "auto" && i && (u = +f.replace(/px/g, ""), ae(this).css("left", u > 0 ? u : 0));
        }
      });
    }
  },
  /**
   * Reposition the floating elements to take account of horizontal page
   * scroll
   *
   * @param  {string} item       The `header` or `footer`
   * @param  {int}    scrollLeft Document scrollLeft
   * @private
   */
  _horizontal: function(e, t) {
    var n = this.dom[e], i = this.s.scrollLeft;
    if (n.floating && i[e] !== t) {
      if (this._scrollEnabled()) {
        var a = ae(
          ae(this.s.dt.table().node()).parent()
        ).scrollLeft();
        n.floating.scrollLeft(a), n.floatingParent.scrollLeft(a);
      }
      i[e] = t;
    }
  },
  /**
   * Change from one display mode to another. Each fixed item can be in one
   * of:
   *
   * * `in-place` - In the main DataTable
   * * `in` - Floating over the DataTable
   * * `below` - (Header only) Fixed to the bottom of the table body
   * * `above` - (Footer only) Fixed to the top of the table body
   *
   * @param  {string}  mode        Mode that the item should be shown in
   * @param  {string}  item        'header' or 'footer'
   * @param  {boolean} forceChange Force a redraw of the mode, even if already
   *     in that mode.
   * @private
   */
  _modeChange: function(e, t, n) {
    var i = this.s.dt, a = this.dom[t], f = this.s.position, u = this._scrollEnabled();
    if (!(t === "footer" && u)) {
      var v = function(I) {
        a.floating[0].style.setProperty("width", I + "px", "important"), u || a.floatingParent[0].style.setProperty("width", I + "px", "important");
      }, m = this.dom[t === "footer" ? "tfoot" : "thead"], w = ae.contains(m[0], document.activeElement) ? document.activeElement : null, y = ae(ae(this.s.dt.table().node()).parent());
      if (e === "in-place")
        a.placeholder && (a.placeholder.remove(), a.placeholder = null), ae.contains(a.host[0], m[0]) || (t === "header" ? m.insertAfter(ae("colgroup", a.host)) : a.host.append(m)), a.floating && (a.floating.remove(), a.floating = null, this._stickyPosition(a.host, "+")), a.floatingParent && (a.floatingParent.find("div.dtfc-top-blocker").remove(), a.floatingParent.remove()), ae(ae(a.host.parent()).parent()).scrollLeft(
          y.scrollLeft()
        );
      else if (e === "in") {
        let I = this._clone(t, n);
        var x = y.offset(), A = ae(document).scrollTop(), N = ae(window).height(), F = A + N, _ = u ? x.top : f.tbodyTop, X = u ? x.top + y.outerHeight() : f.tfootTop, k;
        t === "footer" ? k = _ > F ? f.tfootHeight : _ + f.tfootHeight - F : k = A + this.c.headerOffset + f.theadHeight - X;
        var q = t === "header" ? "top" : "bottom", j = this.c[t + "Offset"] - (k > 0 ? k : 0);
        a.floating.addClass("fixedHeader-floating"), a.floatingParent.css(q, j).css({
          left: f.left,
          "z-index": 3
        }), v(f.width), I && I(), t === "footer" && a.floating.css("top", "");
      } else e === "below" ? (this._clone(t, n), a.floating.addClass("fixedHeader-locked"), a.floatingParent.css({
        position: "absolute",
        top: f.tfootTop - f.theadHeight,
        left: f.left + "px"
      }), v(f.width)) : e === "above" && (this._clone(t, n), a.floating.addClass("fixedHeader-locked"), a.floatingParent.css({
        position: "absolute",
        top: f.tbodyTop,
        left: f.left + "px"
      }), v(f.width));
      w && w !== document.activeElement && setTimeout(function() {
        w.focus();
      }, 10), this.s.scrollLeft.header = -1, this.s.scrollLeft.footer = -1, this.s[t + "Mode"] = e, i.trigger("fixedheader-mode", [e, t]);
    }
  },
  /**
   * Cache the positional information that is required for the mode
   * calculations that FixedHeader performs.
   *
   * @private
   */
  _positions: function() {
    var e = this.s.dt, t = e.table(), n = this.s.position, i = this.dom, a = ae(t.node()), f = this._scrollEnabled(), u = ae(e.table().header()), v = ae(e.table().footer()), m = i.tbody, w = a.parent();
    n.visible = a.is(":visible"), n.width = a.outerWidth(), n.left = a.offset().left, n.theadTop = u.offset().top, n.tbodyTop = f ? w.offset().top : m.offset().top, n.tbodyHeight = f ? w.outerHeight() : m.outerHeight(), n.theadHeight = u.outerHeight(), n.theadBottom = n.theadTop + n.theadHeight, n.tfootTop = n.tbodyTop + n.tbodyHeight, v.length ? (n.tfootBottom = n.tfootTop + v.outerHeight(), n.tfootHeight = v.outerHeight()) : (n.tfootBottom = n.tfootTop, n.tfootHeight = 0);
  },
  /**
   * Mode calculation - determine what mode the fixed items should be placed
   * into.
   *
   * @param  {boolean} forceChange Force a redraw of the mode, even if already
   *     in that mode.
   * @private
   */
  _scroll: function(e) {
    if (!this.s.dt.settings()[0].bDestroying) {
      var t = this._scrollEnabled(), n = ae(this.s.dt.table().node()).parent(), i = n.offset(), a = n.outerHeight(), f = ae(document).scrollLeft(), u = ae(document).scrollTop(), v = ae(window).height(), m = v + u, w = this.s.position, y, x, A = t ? i.top : w.tbodyTop, N = t ? i.left : w.left, F = t ? i.top + a : w.tfootTop, _ = t ? n.outerWidth() : w.tbodyWidth;
      if (this.c.header) {
        if (!this.s.enable)
          y = "in-place";
        else if (!w.visible || u + this.c.headerOffset + w.theadHeight <= A)
          y = "in-place";
        else if (
          // The scrolling plus the header offset plus the height of the header is lower than the top of the body
          u + this.c.headerOffset + w.theadHeight > A && // And the scrolling at the top plus the header offset is above the bottom of the body
          u + this.c.headerOffset + w.theadHeight < F
        )
          if (y = "in", u + this.c.headerOffset + w.theadHeight > F || this.dom.header.floatingParent === void 0)
            e = !0;
          else {
            var X = this.dom.header.floatingParent.css({
              top: this.c.headerOffset,
              position: "fixed"
            }).children().eq(0);
            X.find(this.dom.header.floating).length === 0 && X.append(this.dom.header.floating);
          }
        else
          y = "below";
        (e || y !== this.s.headerMode) && this._modeChange(y, "header", e), this._horizontal("header", f);
      }
      var k = {
        offset: { top: 0 },
        height: 0
      }, q = {
        offset: { top: 0 },
        height: 0
      };
      if (this.c.footer && this.dom.tfoot.length && this.dom.tfoot.find("th, td").length) {
        this.s.enable ? !w.visible || w.tfootBottom + this.c.footerOffset <= m ? x = "in-place" : F + w.tfootHeight + this.c.footerOffset > m && A + this.c.footerOffset < m ? (x = "in", e = !0) : x = "above" : x = "in-place", (e || x !== this.s.footerMode) && this._modeChange(x, "footer", e), this._horizontal("footer", f);
        var j = function(U) {
          return {
            offset: U.offset(),
            height: U.outerHeight()
          };
        };
        if (k = this.dom.header.floating ? j(this.dom.header.floating) : j(this.dom.thead), q = this.dom.footer.floating ? j(this.dom.footer.floating) : j(this.dom.tfoot), t && q.offset.top > u) {
          var I = u - i.top, Z = m + // If the gap between the top of the scrollbody and the window is more than
          //  the height of the header then the top of the table is still visible so add that gap
          // Doing this has effectively calculated the height from the top of the table to the bottom of the current page
          (I > -k.height ? I : 0) - // Take from that
          // The top of the header plus
          (k.offset.top + // The header height if the standard header is present
          (I < -k.height ? k.height : 0) + // And the height of the footer
          q.height);
          Z < 0 && (Z = 0), n.outerHeight(Z), Math.round(n.outerHeight()) >= Math.round(Z) ? ae(this.dom.tfoot.parent()).addClass("fixedHeader-floating") : ae(this.dom.tfoot.parent()).removeClass(
            "fixedHeader-floating"
          );
        }
      }
      if (this.dom.header.floating && this.dom.header.floatingParent.css("left", N - f), this.dom.footer.floating && this.dom.footer.floatingParent.css("left", N - f), this.s.dt.settings()[0]._fixedColumns !== void 0) {
        var l = function(U, ne, K) {
          if (K === void 0) {
            var V = ae(
              "div.dtfc-" + U + "-" + ne + "-blocker"
            );
            K = V.length === 0 ? null : V.clone().css("z-index", 1);
          }
          return K !== null && (y === "in" || y === "below" ? K.appendTo("body").css({
            top: ne === "top" ? k.offset.top : q.offset.top,
            left: U === "right" ? N + _ - K.width() : N
          }) : K.detach()), K;
        };
        this.dom.header.rightBlocker = l(
          "right",
          "top",
          this.dom.header.rightBlocker
        ), this.dom.header.leftBlocker = l(
          "left",
          "top",
          this.dom.header.leftBlocker
        ), this.dom.footer.rightBlocker = l(
          "right",
          "bottom",
          this.dom.footer.rightBlocker
        ), this.dom.footer.leftBlocker = l(
          "left",
          "bottom",
          this.dom.footer.leftBlocker
        );
      }
    }
  },
  /**
   * Function to check if scrolling is enabled on the table or not
   * @returns Boolean value indicating if scrolling on the table is enabled or not
   */
  _scrollEnabled: function() {
    var e = this.s.dt.settings()[0].oScroll;
    return e.sY !== "" || e.sX !== "";
  },
  /**
   * Realign columns by using the colgroup tag and
   * checking column widths
   */
  _widths: function(e) {
    if (!(!e || !e.placeholder)) {
      var t = ae(this.s.dt.table().node()), n = ae(t.parent());
      e.floatingParent.css("width", n[0].offsetWidth), e.floating.css("width", t[0].offsetWidth), ae("colgroup", e.floating).remove();
      for (var i = e.placeholder.parent().find("colgroup").clone().appendTo(e.floating).find("col"), a = this.s.dt.columns(":visible").widths(), f = 0; f < a.length; f++)
        i.eq(f).css("width", a[f]);
    }
  }
});
Rt.version = "4.0.6";
Rt.defaults = {
  header: !0,
  footer: !1,
  headerOffset: 0,
  footerOffset: 0
};
ae.fn.dataTable.FixedHeader = Rt;
ae.fn.DataTable.FixedHeader = Rt;
ae(document).on("init.dt.dtfh", function(e, t, n) {
  if (e.namespace === "dt") {
    var i = t.oInit.fixedHeader, a = ie.defaults.fixedHeader;
    if ((i || a) && !t._fixedHeader) {
      var f = ae.extend({}, a, i);
      i !== !1 && new Rt(t, f);
    }
  }
});
ae.each(["header", "footer"], function(e, t) {
});
/*! Responsive 3.0.8
 * © SpryMedia Ltd - datatables.net/license
 */
let Q = Pt;
var Ye = function(e, t) {
  if (!ie.versionCheck || !ie.versionCheck("2"))
    throw "DataTables Responsive requires DataTables 2 or newer";
  this.s = {
    childNodeStore: {},
    columns: [],
    current: [],
    dt: new ie.Api(e)
  }, !this.s.dt.settings()[0].responsive && (t && typeof t.details == "string" ? t.details = { type: t.details } : t && t.details === !1 ? t.details = { type: !1 } : t && t.details === !0 && (t.details = { type: "inline" }), this.c = Q.extend(
    !0,
    {},
    Ye.defaults,
    ie.defaults.responsive,
    t
  ), e.responsive = this, this._constructor());
};
Q.extend(Ye.prototype, {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constructor
   */
  /**
   * Initialise the Responsive instance
   *
   * @private
   */
  _constructor: function() {
    var e = this, t = this.s.dt, n = Q(window).innerWidth();
    t.settings()[0]._responsive = this, Q(window).on(
      "orientationchange.dtr",
      ie.util.throttle(function() {
        var a = Q(window).innerWidth();
        a !== n && (e._resize(), n = a);
      })
    ), t.on("row-created.dtr", function(a, f, u, v) {
      Q.inArray(!1, e.s.current) !== -1 && Q(">td, >th", f).each(function(m) {
        var w = t.column.index("toData", m);
        e.s.current[w] === !1 && Q(this).css("display", "none").addClass("dtr-hidden");
      });
    }), t.on("destroy.dtr", function() {
      t.off(".dtr"), Q(t.table().body()).off(".dtr"), Q(window).off("resize.dtr orientationchange.dtr"), t.cells(".dtr-control").nodes().to$().removeClass("dtr-control"), Q(t.table().node()).removeClass("dtr-inline collapsed"), Q.each(e.s.current, function(a, f) {
        f === !1 && e._setColumnVis(a, !0);
      });
    }), this.c.breakpoints.sort(function(a, f) {
      return a.width < f.width ? 1 : a.width > f.width ? -1 : 0;
    }), this._classLogic();
    var i = this.c.details;
    i.type !== !1 && (e._detailsInit(), t.on("column-visibility.dtr", function() {
      e._timer && clearTimeout(e._timer), e._timer = setTimeout(function() {
        e._timer = null, e._classLogic(), e._resizeAuto(), e._resize(!0), e._redrawChildren();
      }, 100);
    }), t.on("draw.dtr", function() {
      e._redrawChildren();
    }), Q(t.table().node()).addClass("dtr-" + i.type)), t.on("column-calc.dt", function(a, f) {
      for (var u = e.s.current, v = 0; v < u.length; v++) {
        var m = f.visible.indexOf(v);
        u[v] === !1 && m >= 0 && f.visible.splice(m, 1);
      }
    }), t.on("preXhr.dtr", function() {
      var a = [];
      t.rows().every(function() {
        this.child.isShown() && a.push(this.id(!0));
      }), t.one("draw.dtr", function() {
        e._resizeAuto(), e._resize(), t.rows(a).every(function() {
          e._detailsDisplay(this, !1);
        });
      });
    }), t.on("draw.dtr", function() {
      t.page.info().serverSide && (e.s.childNodeStore = {}), e._controlClass();
    }).ready(function() {
      e._resizeAuto(), e._resize(), t.on("column-sizing.dtr", function() {
        e._resizeAuto(), e._resize();
      });
    }), t.on("column-reorder.dtr", function(a, f, u) {
      e._classLogic(), e._resizeAuto(), e._resize(!0);
    });
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Private methods
   */
  /**
   * Insert a `col` tag into the correct location in a `colgroup`.
   *
   * @param {jQuery} colGroup The `colgroup` tag
   * @param {jQuery} colEl The `col` tag
   */
  _colGroupAttach: function(e, t, n) {
    var i = null;
    if (t[n].get(0).parentNode !== e[0]) {
      for (var a = n + 1; a < t.length; a++)
        if (e[0] === t[a].get(0).parentNode) {
          i = a;
          break;
        }
      i !== null ? t[n].insertBefore(t[i][0]) : e.append(t[n]);
    }
  },
  /**
   * Get and store nodes from a cell - use for node moving renderers
   *
   * @param {*} dt DT instance
   * @param {*} row Row index
   * @param {*} col Column index
   */
  _childNodes: function(e, t, n) {
    var i = t + "-" + n;
    if (this.s.childNodeStore[i])
      return this.s.childNodeStore[i];
    for (var a = [], f = e.cell(t, n).node().childNodes, u = 0, v = f.length; u < v; u++)
      a.push(f[u]);
    return this.s.childNodeStore[i] = a, a;
  },
  /**
   * Restore nodes from the cache to a table cell
   *
   * @param {*} dt DT instance
   * @param {*} row Row index
   * @param {*} col Column index
   */
  _childNodesRestore: function(e, t, n) {
    var i = t + "-" + n;
    if (this.s.childNodeStore[i]) {
      var a = e.cell(t, n).node(), f = this.s.childNodeStore[i];
      if (f.length > 0) {
        for (var u = f[0].parentNode, v = u.childNodes, m = [], w = 0, y = v.length; w < y; w++)
          m.push(v[w]);
        for (var x = 0, A = m.length; x < A; x++)
          a.appendChild(m[x]);
      }
      this.s.childNodeStore[i] = void 0;
    }
  },
  /**
   * Calculate the visibility for the columns in a table for a given
   * breakpoint. The result is pre-determined based on the class logic if
   * class names are used to control all columns, but the width of the table
   * is also used if there are columns which are to be automatically shown
   * and hidden.
   *
   * @param  {string} breakpoint Breakpoint name to use for the calculation
   * @return {array} Array of boolean values initiating the visibility of each
   *   column.
   *  @private
   */
  _columnsVisibility: function(e) {
    var t = this.s.dt, n = this.s.columns, i, a, f = n.map(function(_, X) {
      return {
        columnIdx: X,
        priority: _.priority
      };
    }).sort(function(_, X) {
      return _.priority !== X.priority ? _.priority - X.priority : _.columnIdx - X.columnIdx;
    }), u = Q.map(n, function(_, X) {
      return t.column(X).visible() === !1 ? "not-visible" : _.auto && _.minWidth === null ? !1 : _.auto === !0 ? "-" : Q.inArray(e, _.includeIn) !== -1;
    }), v = 0;
    for (i = 0, a = u.length; i < a; i++)
      u[i] === !0 && (v += n[i].minWidth);
    var m = t.settings()[0].oScroll, w = m.sY || m.sX ? m.iBarWidth : 0, y = t.table().container().offsetWidth - w, x = y - v;
    for (i = 0, a = u.length; i < a; i++)
      n[i].control && (x -= n[i].minWidth);
    var A = !1;
    for (i = 0, a = f.length; i < a; i++) {
      var N = f[i].columnIdx;
      u[N] === "-" && !n[N].control && n[N].minWidth && (A || x - n[N].minWidth < 0 ? (A = !0, u[N] = !1) : u[N] = !0, x -= n[N].minWidth);
    }
    var F = !1;
    for (i = 0, a = n.length; i < a; i++)
      if (!n[i].control && !n[i].never && u[i] === !1) {
        F = !0;
        break;
      }
    for (i = 0, a = n.length; i < a; i++)
      n[i].control && (u[i] = F), u[i] === "not-visible" && (u[i] = !1);
    return Q.inArray(!0, u) === -1 && (u[0] = !0), u;
  },
  /**
   * Create the internal `columns` array with information about the columns
   * for the table. This includes determining which breakpoints the column
   * will appear in, based upon class names in the column, which makes up the
   * vast majority of this method.
   *
   * @private
   */
  _classLogic: function() {
    var e = this, t = this.c.breakpoints, n = this.s.dt, i = n.columns().eq(0).map(function(u) {
      var v = this.column(u), m = v.header().className, w = v.init().responsivePriority, y = v.header().getAttribute("data-priority");
      return w === void 0 && (w = y == null ? 1e4 : y * 1), {
        className: m,
        includeIn: [],
        auto: !1,
        control: !1,
        never: !!m.match(/\b(dtr\-)?never\b/),
        priority: w
      };
    }), a = function(u, v) {
      var m = i[u].includeIn;
      Q.inArray(v, m) === -1 && m.push(v);
    }, f = function(u, v, m, w) {
      var y, x, A;
      if (!m)
        i[u].includeIn.push(v);
      else if (m === "max-")
        for (y = e._find(v).width, x = 0, A = t.length; x < A; x++)
          t[x].width <= y && a(u, t[x].name);
      else if (m === "min-")
        for (y = e._find(v).width, x = 0, A = t.length; x < A; x++)
          t[x].width >= y && a(u, t[x].name);
      else if (m === "not-")
        for (x = 0, A = t.length; x < A; x++)
          t[x].name.indexOf(w) === -1 && a(u, t[x].name);
    };
    i.each(function(u, v) {
      for (var m = u.className.split(" "), w = !1, y = 0, x = m.length; y < x; y++) {
        var A = m[y].trim();
        if (A === "all" || A === "dtr-all") {
          w = !0, u.includeIn = Q.map(t, function(N) {
            return N.name;
          });
          return;
        } else if (A === "none" || A === "dtr-none" || u.never) {
          w = !0;
          return;
        } else if (A === "control" || A === "dtr-control") {
          w = !0, u.control = !0;
          return;
        }
        Q.each(t, function(N, F) {
          var _ = F.name.split("-"), X = new RegExp(
            "(min\\-|max\\-|not\\-)?(" + _[0] + ")(\\-[_a-zA-Z0-9])?"
          ), k = A.match(X);
          k && (w = !0, k[2] === _[0] && k[3] === "-" + _[1] ? f(
            v,
            F.name,
            k[1],
            k[2] + k[3]
          ) : k[2] === _[0] && !k[3] && f(v, F.name, k[1], k[2]));
        });
      }
      w || (u.auto = !0);
    }), this.s.columns = i;
  },
  /**
   * Update the cells to show the correct control class / button
   * @private
   */
  _controlClass: function() {
    if (this.c.details.type === "inline") {
      var e = this.s.dt, t = this.s.current, n = Q.inArray(!0, t);
      e.cells(
        null,
        function(i) {
          return i !== n;
        },
        { page: "current" }
      ).nodes().to$().filter(".dtr-control").removeClass("dtr-control"), n >= 0 && e.cells(null, n, { page: "current" }).nodes().to$().addClass("dtr-control");
    }
    this._tabIndexes();
  },
  /**
   * Show the details for the child row
   *
   * @param  {DataTables.Api} row    API instance for the row
   * @param  {boolean}        update Update flag
   * @private
   */
  _detailsDisplay: function(e, t) {
    var n = this, i = this.s.dt, a = this.c.details, f = function(m) {
      Q(e.node()).toggleClass("dtr-expanded", m !== !1), Q(i.table().node()).triggerHandler("responsive-display.dt", [
        i,
        e,
        m,
        t
      ]);
    };
    if (a && a.type !== !1) {
      var u = typeof a.renderer == "string" ? Ye.renderer[a.renderer]() : a.renderer, v = a.display(
        e,
        t,
        function() {
          return u.call(
            n,
            i,
            e[0][0],
            n._detailsObj(e[0])
          );
        },
        function() {
          f(!1);
        }
      );
      typeof v == "boolean" && f(v);
    }
  },
  /**
   * Initialisation for the details handler
   *
   * @private
   */
  _detailsInit: function() {
    var e = this, t = this.s.dt, n = this.c.details;
    n.type === "inline" && (n.target = "td.dtr-control, th.dtr-control"), Q(t.table().body()).on("keyup.dtr", "td, th", function(f) {
      let u = document.activeElement.nodeName.toLowerCase();
      f.keyCode === 13 && Q(this).data("dtr-keyboard") && (u === "td" || u === "th") && Q(this).click();
    });
    var i = n.target, a = typeof i == "string" ? i : "td, th";
    (i !== void 0 || i !== null) && Q(t.table().body()).on(
      "click.dtr mousedown.dtr mouseup.dtr",
      a,
      function(f) {
        if (Q(t.table().node()).hasClass("collapsed") && Q.inArray(
          Q(this).closest("tr").get(0),
          t.rows().nodes().toArray()
        ) !== -1) {
          if (typeof i == "number") {
            var u = i < 0 ? t.columns().eq(0).length + i : i;
            if (t.cell(this).index().column !== u)
              return;
          }
          var v = t.row(Q(this).closest("tr"));
          f.type === "click" ? e._detailsDisplay(v, !1) : f.type === "mousedown" ? Q(this).css("outline", "none") : f.type === "mouseup" && Q(this).trigger("blur").css("outline", "");
        }
      }
    );
  },
  /**
   * Get the details to pass to a renderer for a row
   * @param  {int} rowIdx Row index
   * @private
   */
  _detailsObj: function(e) {
    var t = this, n = this.s.dt, i = [];
    let a = n.settings()[0];
    return Q.map(this.s.columns, function(f, u) {
      if (!(f.never || f.control)) {
        var v = a.aoColumns[u];
        return i[u] || (i[u] = n.column(u)), {
          className: v.sClass,
          columnIndex: u,
          data: a.fastData(e, u, t.c.orthogonal),
          hidden: i[u].visible() && !t.s.current[u],
          rowIndex: e,
          title: i[u].title()
        };
      }
    });
  },
  /**
   * Find a breakpoint object from a name
   *
   * @param  {string} name Breakpoint name to find
   * @return {object}      Breakpoint description object
   * @private
   */
  _find: function(e) {
    for (var t = this.c.breakpoints, n = 0, i = t.length; n < i; n++)
      if (t[n].name === e)
        return t[n];
  },
  /**
   * Re-create the contents of the child rows as the display has changed in
   * some way.
   *
   * @private
   */
  _redrawChildren: function() {
    var e = this, t = this.s.dt;
    t.rows({ page: "current" }).iterator("row", function(n, i) {
      e._detailsDisplay(t.row(i), !0);
    });
  },
  /**
   * Alter the table display for a resized viewport. This involves first
   * determining what breakpoint the window currently is in, getting the
   * column visibilities to apply and then setting them.
   *
   * @param  {boolean} forceRedraw Force a redraw
   * @private
   */
  _resize: function(e) {
    var t = this, n = this.s.dt, i = Q(window).innerWidth(), a = this.c.breakpoints, f = a[0].name, u = this.s.columns, v, m, w = this.s.current.slice();
    for (v = a.length - 1; v >= 0; v--)
      if (i <= a[v].width) {
        f = a[v].name;
        break;
      }
    var y = this._columnsVisibility(f);
    this.s.current = y;
    var x = !1;
    for (v = 0, m = u.length; v < m; v++)
      if (y[v] === !1 && !u[v].never && !u[v].control && n.column(v).visible()) {
        x = !0;
        break;
      }
    Q(n.table().node()).toggleClass("collapsed", x);
    var A = !1, N = 0, F = n.settings()[0], _ = Q(n.table().node()).children("colgroup"), X = F.aoColumns.map(function(k) {
      return k.colEl;
    });
    n.columns().eq(0).each(function(k, q) {
      n.column(k).visible() && (y[q] === !0 && N++, (e || y[q] !== w[q]) && (A = !0, t._setColumnVis(k, y[q])), y[q] ? t._colGroupAttach(_, X, q) : X[q].detach());
    }), A && (n.columns.adjust(), this._redrawChildren(), Q(n.table().node()).trigger("responsive-resize.dt", [
      n,
      this._responsiveOnlyHidden()
    ]), n.page.info().recordsDisplay === 0 && Q("td", n.table().body()).eq(0).attr("colspan", N)), t._controlClass();
  },
  /**
   * Determine the width of each column in the table so the auto column hiding
   * has that information to work with. This method is never going to be 100%
   * perfect since column widths can change slightly per page, but without
   * seriously compromising performance this is quite effective.
   *
   * @private
   */
  _resizeAuto: function() {
    var e = this.s.dt, t = this.s.columns, n = this, i = e.columns().indexes().filter(function(x) {
      return e.column(x).visible();
    });
    if (this.c.auto && Q.inArray(
      !0,
      Q.map(t, function(x) {
        return x.auto;
      })
    ) !== -1) {
      var a = e.table().node().cloneNode(!1), f = Q(e.table().header().cloneNode(!1)).appendTo(
        a
      ), u = Q(e.table().footer().cloneNode(!1)).appendTo(
        a
      ), v = Q(e.table().body()).clone(!1, !1).empty().appendTo(a);
      a.style.width = "auto", e.table().header.structure(i).forEach((x) => {
        var A = x.filter(function(N) {
          return !!N;
        }).map(function(N) {
          return Q(N.cell).clone(!1).css("display", "table-cell").css("width", "auto").css("min-width", 0);
        });
        Q("<tr/>").append(A).appendTo(f);
      });
      for (var m = Q("<tr/>").appendTo(v), w = 0; w < i.count(); w++)
        m.append("<td/>");
      this.c.details.renderer._responsiveMovesNodes ? e.rows({ page: "current" }).every(function(x) {
        var A = this.node();
        if (A) {
          var N = A.cloneNode(!1);
          e.cells(x, i).every(function(F, _) {
            var X = n.s.childNodeStore[x + "-" + _];
            X ? Q(this.node().cloneNode(!1)).append(Q(X).clone()).appendTo(N) : Q(this.node()).clone(!1).appendTo(N);
          }), v.append(N);
        }
      }) : Q(v).append(Q(e.rows({ page: "current" }).nodes()).clone(!1)).find("th, td").css("display", ""), v.find("th, td").css("display", ""), e.table().footer.structure(i).forEach((x) => {
        var A = x.filter(function(N) {
          return !!N;
        }).map(function(N) {
          return Q(N.cell).clone(!1).css("display", "table-cell").css("width", "auto").css("min-width", 0);
        });
        Q("<tr/>").append(A).appendTo(u);
      }), this.c.details.type === "inline" && Q(a).addClass("dtr-inline collapsed"), Q(a).find("[name]").removeAttr("name"), Q(a).css("position", "relative");
      var y = Q("<div/>").css({
        width: 1,
        height: 1,
        overflow: "hidden",
        clear: "both"
      }).append(a);
      y.insertBefore(e.table().node()), m.children().each(function(x) {
        var A = e.column.index("fromVisible", x);
        t[A].minWidth = this.offsetWidth || 0;
      }), y.remove();
    }
  },
  /**
   * Get the state of the current hidden columns - controlled by Responsive only
   */
  _responsiveOnlyHidden: function() {
    var e = this.s.dt;
    return Q.map(this.s.current, function(t, n) {
      return e.column(n).visible() === !1 ? !0 : t;
    });
  },
  /**
   * Set a column's visibility.
   *
   * We don't use DataTables' column visibility controls in order to ensure
   * that column visibility can Responsive can no-exist. Since only IE8+ is
   * supported (and all evergreen browsers of course) the control of the
   * display attribute works well.
   *
   * @param {integer} col      Column index
   * @param {boolean} showHide Show or hide (true or false)
   * @private
   */
  _setColumnVis: function(e, t) {
    var n = this, i = this.s.dt, a = t ? "" : "none";
    this._setHeaderVis(e, t, i.table().header.structure()), this._setHeaderVis(e, t, i.table().footer.structure()), i.column(e).nodes().to$().css("display", a).toggleClass("dtr-hidden", !t), i.settings()[0].aoColumns[e].responsiveVisible = t, Q.isEmptyObject(this.s.childNodeStore) || i.cells(null, e).indexes().each(function(f) {
      n._childNodesRestore(i, f.row, f.column);
    });
  },
  /**
   * Set a column's visibility, taking into account multiple rows
   * in a header / footer and colspan attributes
   * @param {*} col
   * @param {*} showHide
   * @param {*} structure
   */
  _setHeaderVis: function(e, t, n) {
    var i = this, a = t ? "" : "none";
    n.forEach(function(f, u) {
      for (var v = 0; v < f.length; v++)
        if (f[v] && f[v].rowspan > 1)
          for (var m = f[v].rowspan, w = 1; w < m; w++)
            n[u + w][v] = {};
    }), n.forEach(function(f) {
      if (f[e] && f[e].cell)
        Q(f[e].cell).css("display", a).toggleClass("dtr-hidden", !t);
      else
        for (var u = e; u >= 0; ) {
          if (f[u] && f[u].cell) {
            f[u].cell.colSpan = i._colspan(f, u);
            break;
          }
          u--;
        }
    });
  },
  /**
   * How many columns should this cell span
   *
   * @param {*} row Header structure row
   * @param {*} idx The column index of the cell to span
   */
  _colspan: function(e, t) {
    for (var n = 1, i = t + 1; i < e.length; i++)
      if (e[i] === null && this.s.current[i])
        n++;
      else if (e[i])
        break;
    return n;
  },
  /**
   * Update the cell tab indexes for keyboard accessibility. This is called on
   * every table draw - that is potentially inefficient, but also the least
   * complex option given that column visibility can change on the fly. Its a
   * shame user-focus was removed from CSS 3 UI, as it would have solved this
   * issue with a single CSS statement.
   *
   * @private
   */
  _tabIndexes: function() {
    var e = this.s.dt, t = e.cells({ page: "current" }).nodes().to$(), n = e.settings()[0], i = this.c.details.target;
    if (t.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"), typeof i == "number")
      e.cells(null, i, { page: "current" }).nodes().to$().attr("tabIndex", n.iTabIndex).data("dtr-keyboard", 1);
    else {
      i === "td:first-child, th:first-child" && (i = ">td:first-child, >th:first-child");
      var a = e.rows({ page: "current" }).nodes(), f = i === "tr" ? Q(a) : Q(i, a);
      f.attr("tabIndex", n.iTabIndex).data("dtr-keyboard", 1);
    }
  }
});
Ye.breakpoints = [
  { name: "desktop", width: 1 / 0 },
  { name: "tablet-l", width: 1024 },
  { name: "tablet-p", width: 768 },
  { name: "mobile-l", width: 480 },
  { name: "mobile-p", width: 320 }
];
Ye.display = {
  childRow: function(e, t, n) {
    var i = Q(e.node());
    if (t) {
      if (i.hasClass("dtr-expanded"))
        return e.child(n(), "child").show(), !0;
    } else {
      if (i.hasClass("dtr-expanded"))
        return e.child(!1), !1;
      var a = n();
      return a === !1 ? !1 : (e.child(a, "child").show(), !0);
    }
  },
  childRowImmediate: function(e, t, n) {
    var i = Q(e.node());
    if (!t && i.hasClass("dtr-expanded") || !e.responsive.hasHidden())
      return e.child(!1), !1;
    var a = n();
    return a === !1 ? !1 : (e.child(a, "child").show(), !0);
  },
  // This is a wrapper so the modal options for Bootstrap and jQuery UI can
  // have options passed into them. This specific one doesn't need to be a
  // function but it is for consistency in the `modal` name
  modal: function(e) {
    return function(t, n, i, a) {
      var f, u = i();
      if (u === !1)
        return !1;
      if (n)
        if (f = Q("div.dtr-modal-content"), f.length && t.index() === f.data("dtr-row-idx"))
          f.empty().append(u);
        else
          return null;
      else {
        var v = function() {
          f.remove(), Q(document).off("keypress.dtr"), Q(t.node()).removeClass("dtr-expanded"), a();
        };
        f = Q('<div class="dtr-modal"/>').append(
          Q('<div class="dtr-modal-display"/>').append(
            Q('<div class="dtr-modal-content"/>').data("dtr-row-idx", t.index()).append(u)
          ).append(
            Q(
              '<div class="dtr-modal-close">&times;</div>'
            ).click(function() {
              v();
            })
          )
        ).append(
          Q('<div class="dtr-modal-background"/>').click(
            function() {
              v();
            }
          )
        ).appendTo("body"), Q(t.node()).addClass("dtr-expanded"), Q(document).on("keyup.dtr", function(m) {
          m.keyCode === 27 && (m.stopPropagation(), v());
        });
      }
      return e && e.header && Q("div.dtr-modal-content").prepend(
        "<h2>" + e.header(t) + "</h2>"
      ), !0;
    };
  }
};
Ye.renderer = {
  listHiddenNodes: function() {
    var e = function(t, n, i) {
      var a = this, f = Q(
        '<ul data-dtr-index="' + n + '" class="dtr-details"/>'
      ), u = !1;
      return Q.each(i, function(v, m) {
        if (m.hidden) {
          var w = m.className ? 'class="' + m.className + '"' : "";
          Q(
            "<li " + w + ' data-dtr-index="' + m.columnIndex + '" data-dt-row="' + m.rowIndex + '" data-dt-column="' + m.columnIndex + '"><span class="dtr-title">' + m.title + "</span> </li>"
          ).append(
            Q('<span class="dtr-data"/>').append(
              a._childNodes(
                t,
                m.rowIndex,
                m.columnIndex
              )
            )
          ).appendTo(f), u = !0;
        }
      }), u ? f : !1;
    };
    return e._responsiveMovesNodes = !0, e;
  },
  listHidden: function() {
    return function(e, t, n) {
      var i = Q.map(n, function(a) {
        var f = a.className ? 'class="' + a.className + '"' : "";
        return a.hidden ? "<li " + f + ' data-dtr-index="' + a.columnIndex + '" data-dt-row="' + a.rowIndex + '" data-dt-column="' + a.columnIndex + '"><span class="dtr-title">' + a.title + '</span> <span class="dtr-data">' + a.data + "</span></li>" : "";
      }).join("");
      return i ? Q(
        '<ul data-dtr-index="' + t + '" class="dtr-details"/>'
      ).append(i) : !1;
    };
  },
  tableAll: function(e) {
    return e = Q.extend(
      {
        tableClass: ""
      },
      e
    ), function(t, n, i) {
      var a = Q.map(i, function(f) {
        var u = f.className ? 'class="' + f.className + '"' : "";
        return "<tr " + u + ' data-dt-row="' + f.rowIndex + '" data-dt-column="' + f.columnIndex + '"><td>' + (f.title !== "" ? f.title + ":" : "") + "</td> <td>" + f.data + "</td></tr>";
      }).join("");
      return Q(
        '<table class="' + e.tableClass + ' dtr-details" width="100%"/>'
      ).append(a);
    };
  }
};
Ye.defaults = {
  /**
   * List of breakpoints for the instance. Note that this means that each
   * instance can have its own breakpoints. Additionally, the breakpoints
   * cannot be changed once an instance has been creased.
   *
   * @type {Array}
   * @default Takes the value of `Responsive.breakpoints`
   */
  breakpoints: Ye.breakpoints,
  /**
   * Enable / disable auto hiding calculations. It can help to increase
   * performance slightly if you disable this option, but all columns would
   * need to have breakpoint classes assigned to them
   *
   * @type {Boolean}
   * @default  `true`
   */
  auto: !0,
  /**
   * Details control. If given as a string value, the `type` property of the
   * default object is set to that value, and the defaults used for the rest
   * of the object - this is for ease of implementation.
   *
   * The object consists of the following properties:
   *
   * * `display` - A function that is used to show and hide the hidden details
   * * `renderer` - function that is called for display of the child row data.
   *   The default function will show the data from the hidden columns
   * * `target` - Used as the selector for what objects to attach the child
   *   open / close to
   * * `type` - `false` to disable the details display, `inline` or `column`
   *   for the two control types
   *
   * @type {Object|string}
   */
  details: {
    display: Ye.display.childRow,
    renderer: Ye.renderer.listHidden(),
    target: 0,
    type: "inline"
  },
  /**
   * Orthogonal data request option. This is used to define the data type
   * requested when Responsive gets the data to show in the child row.
   *
   * @type {String}
   */
  orthogonal: "display"
};
var cr = Q.fn.dataTable.Api;
cr.register("responsive()", function() {
  return this;
});
cr.register("responsive.index()", function(e) {
  return e = Q(e), {
    column: e.data("dtr-index"),
    row: e.parent().data("dtr-index")
  };
});
cr.register("responsive.rebuild()", function() {
  return this.iterator("table", function(e) {
    e._responsive && e._responsive._classLogic();
  });
});
cr.register("responsive.recalc()", function() {
  return this.iterator("table", function(e) {
    e._responsive && (e._responsive._resizeAuto(), e._responsive._resize());
  });
});
cr.register("responsive.hasHidden()", function() {
  var e = this.context[0];
  return e._responsive ? Q.inArray(!1, e._responsive._responsiveOnlyHidden()) !== -1 : !1;
});
cr.registerPlural(
  "columns().responsiveHidden()",
  "column().responsiveHidden()",
  function() {
    return this.iterator(
      "column",
      function(e, t) {
        return e._responsive ? e._responsive._responsiveOnlyHidden()[t] : !1;
      },
      1
    );
  }
);
Ye.version = "3.0.8";
Q.fn.dataTable.Responsive = Ye;
Q.fn.DataTable.Responsive = Ye;
Q(document).on("preInit.dt.dtr", function(e, t, n) {
  if (e.namespace === "dt" && (Q(t.nTable).hasClass("responsive") || Q(t.nTable).hasClass("dt-responsive") || t.oInit.responsive || ie.defaults.responsive)) {
    var i = t.oInit.responsive;
    i !== !1 && new Ye(t, Q.isPlainObject(i) ? i : {});
  }
});
/*! Bootstrap 5 integration for DataTables' Responsive
 * © SpryMedia Ltd - datatables.net/license
 */
let Aa = Pt;
var Oa = ie.Responsive.display, Mf = Oa.modal, It = Aa(
  '<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"/></div></div></div>'
), Xr, gn = window.bootstrap;
ie.Responsive.bootstrap = function(e) {
  gn = e;
};
function $f() {
  let e = ie.use("bootstrap");
  if (e)
    return e;
  if (gn)
    return gn;
  throw new Error("No Bootstrap library. Set it with `DataTable.use(bootstrap);`");
}
Oa.modal = function(e) {
  if (!Xr && gn.Modal) {
    let t = $f();
    Xr = new t.Modal(It[0]);
  }
  return function(t, n, i, a) {
    if (Xr) {
      var f = i();
      if (f === !1)
        return !1;
      if (n)
        if (Aa.contains(document, It[0]) && t.index() === It.data("dtr-row-idx"))
          It.find("div.modal-body").empty().append(f);
        else
          return null;
      else {
        if (e && e.header) {
          var u = It.find("div.modal-header"), v = u.find("button").detach();
          u.empty().append('<h4 class="modal-title">' + e.header(t) + "</h4>").append(v);
        }
        It.find("div.modal-body").empty().append(f), It.data("dtr-row-idx", t.index()).one("hidden.bs.modal", a).appendTo("body"), Xr.show();
      }
      return !0;
    } else
      return Mf(t, n, i, a);
  };
};
/*! SearchPanes 2.3.5
 * © SpryMedia Ltd - datatables.net/license
 */
let yt = Pt;
(function() {
  var e, t;
  function n(S) {
    e = S, t = S.fn.dataTable;
  }
  var i = (
    /** @class */
    function() {
      function S(p, g, P, E, O) {
        var H = this;
        if (O === void 0 && (O = null), !t || !t.versionCheck || !t.versionCheck("1.10.0"))
          throw new Error("SearchPane requires DataTables 1.10 or newer");
        if (!t.select)
          throw new Error("SearchPane requires Select");
        var B = new t.Api(p);
        this.classes = e.extend(!0, {}, S.classes), this.c = e.extend(!0, {}, S.defaults, g, O), g && g.hideCount && g.viewCount === void 0 && (this.c.viewCount = !this.c.hideCount);
        var Y = B.columns().eq(0).toArray().length;
        this.s = {
          colExists: P < Y,
          colOpts: void 0,
          customPaneSettings: O,
          displayed: !1,
          dt: B,
          dtPane: void 0,
          firstSet: !0,
          index: P,
          indexes: [],
          listSet: !1,
          name: void 0,
          rowData: {
            arrayFilter: [],
            arrayOriginal: [],
            bins: {},
            binsOriginal: {},
            filterMap: /* @__PURE__ */ new Map(),
            totalOptions: 0
          },
          scrollTop: 0,
          searchFunction: void 0,
          selections: [],
          serverSelect: [],
          serverSelecting: !1,
          tableLength: null,
          updating: !1
        }, this.s.colOpts = this.s.colExists ? this._getOptions() : this._getBonusOptions(), this.dom = {
          buttonGroup: e("<div/>").addClass(this.classes.buttonGroup),
          clear: e('<button type="button">&#215;</button>').attr("disabled", "true").addClass(this.classes.disabledButton).addClass(this.classes.paneButton).addClass(this.classes.clearButton).attr("aria-label", B.i18n("searchPanes.buttons.clearPane", this.c.i18n.aria.clearPane)).html(this.s.dt.i18n("searchPanes.clearPane", this.c.i18n.clearPane)),
          collapseButton: e('<button type="button"><span class="' + this.classes.caret + '">&#x5e;</span></button>').addClass(this.classes.paneButton).addClass(this.classes.collapseButton).attr("aria-label", B.i18n("searchPanes.buttons.collapse", this.c.i18n.aria.collapse)),
          container: e("<div/>").addClass(this.classes.container).addClass(this.s.colOpts.className).addClass(this.classes.layout + (parseInt(this.c.layout.split("-")[1], 10) < 10 ? this.c.layout : this.c.layout.split("-")[0] + "-9")).addClass(this.s.customPaneSettings && this.s.customPaneSettings.className ? this.s.customPaneSettings.className : ""),
          countButton: e('<button type="button"><span></span></button>').addClass(this.classes.paneButton).addClass(this.classes.countButton).attr("aria-label", B.i18n("searchPanes.buttons.orderByCount", this.c.i18n.aria.orderByCount)),
          dtP: e('<table width="100%"><thead><tr><th></th><th></th></tr></thead></table>'),
          lower: e("<div/>").addClass(this.classes.subRow2).addClass(this.classes.narrowButton),
          nameButton: e('<button type="button"><span></span></button>').addClass(this.classes.paneButton).addClass(this.classes.nameButton).attr("aria-label", B.i18n("searchPanes.buttons.orderByLabel", this.c.i18n.aria.orderByLabel)),
          panesContainer: e(E),
          searchBox: e("<input/>").addClass(this.classes.paneInputButton).addClass(this.classes.search),
          searchButton: e('<button type="button"><span></span></button>').addClass(this.classes.searchIcon).addClass(this.classes.paneButton).attr("aria-label", B.i18n("searchPanes.buttons.clearSearch", this.c.i18n.aria.clearSearch)),
          searchCont: e("<div/>").addClass(this.classes.searchCont),
          searchLabelCont: e("<div/>").addClass(this.classes.searchLabelCont),
          topRow: e("<div/>").addClass(this.classes.topRow),
          upper: e("<div/>").addClass(this.classes.subRow1).addClass(this.classes.narrowSearch)
        };
        var z = "";
        this.s.colExists ? (z = e(this.s.dt.column(this.s.index).header()).text(), this.dom.dtP.find("th").eq(0).text(z)) : (z = this.s.customPaneSettings.header || "Custom Pane", this.dom.dtP.find("th").eq(0).html(z)), this.s.colOpts.name ? this.s.name = this.s.colOpts.name : this.s.customPaneSettings && this.s.customPaneSettings.name ? this.s.name = this.s.customPaneSettings.name : this.s.name = z;
        var G = this.s.dt.table(0).node();
        return this.s.searchFunction = function(ee, oe, he) {
          if (H.s.selections.length === 0 || ee.nTable !== G)
            return !0;
          var fe = null;
          return H.s.colExists && (fe = oe[H.s.index], H.s.colOpts.orthogonal.filter !== "filter" && (fe = H.s.rowData.filterMap.get(he), fe instanceof e.fn.dataTable.Api && (fe = fe.toArray()))), H._search(fe, he);
        }, e.fn.dataTable.ext.search.push(this.s.searchFunction), this.c.clear && this.dom.clear.on("click.dtsp", function() {
          var ee = H.dom.container.find("." + H.classes.search.replace(/\s+/g, "."));
          ee.each(function() {
            e(this).val("").trigger("input");
          }), H.clearPane();
        }), this.s.dt.on("draw.dtsp", function() {
          return H.adjustTopRow();
        }), this.s.dt.on("buttons-action.dtsp", function() {
          return H.adjustTopRow();
        }), this.s.dt.on("column-reorder.dtsp", function(ee, oe, he) {
          H.s.index = he.mapping[H.s.index];
        }), this;
      }
      return S.prototype.addRow = function(p, g, P, E, O, H, B) {
        H || (H = this.s.rowData.bins[g] ? this.s.rowData.bins[g] : 0), B || (B = this._getShown(g));
        for (var Y, z = 0, G = this.s.indexes; z < G.length; z++) {
          var ee = G[z];
          ee.filter === g && (Y = ee.index);
        }
        return Y === void 0 && (Y = this.s.indexes.length, this.s.indexes.push({ filter: g, index: Y })), this.s.dtPane.row.add({
          className: O,
          display: p !== "" ? p : this.emptyMessage(),
          filter: g,
          index: Y,
          shown: B,
          sort: P,
          total: H,
          type: E
        });
      }, S.prototype.adjustTopRow = function() {
        var p = this.dom.container.find("." + this.classes.subRowsContainer.replace(/\s+/g, ".")), g = this.dom.container.find("." + this.classes.subRow1.replace(/\s+/g, ".")), P = this.dom.container.find("." + this.classes.subRow2.replace(/\s+/g, ".")), E = this.dom.container.find("." + this.classes.topRow.replace(/\s+/g, "."));
        (e(p[0]).width() < 252 || e(E[0]).width() < 252) && e(p[0]).width() !== 0 ? (e(p[0]).addClass(this.classes.narrow), e(g[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowSearch), e(P[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowButton)) : (e(p[0]).removeClass(this.classes.narrow), e(g[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowSearch), e(P[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowButton));
      }, S.prototype.clearData = function() {
        this.s.rowData = {
          arrayFilter: [],
          arrayOriginal: [],
          bins: {},
          binsOriginal: {},
          filterMap: /* @__PURE__ */ new Map(),
          totalOptions: 0
        };
      }, S.prototype.clearPane = function() {
        return this.s.dtPane.rows({ selected: !0 }).deselect(), this.updateTable(), this;
      }, S.prototype.collapse = function() {
        var p = this;
        !this.s.displayed || // If collapsing is disabled globally, and not enabled specifically for this column
        !this.c.collapse && this.s.colOpts.collapse !== !0 || // OR, collapsing could be enabled globally and this column specifically
        // is not to be collapsed.
        // We can't just take !this.s.colOpts.collapse here as if it is undefined
        // then the global should be used
        this.s.colOpts.collapse === !1 || (e(this.s.dtPane.table().container()).addClass(this.classes.hidden), this.dom.topRow.addClass(this.classes.bordered), this.dom.nameButton.addClass(this.classes.disabledButton), this.dom.countButton.addClass(this.classes.disabledButton), this.dom.searchButton.addClass(this.classes.disabledButton), this.dom.collapseButton.addClass(this.classes.rotated), this.dom.topRow.one("click.dtsp", function() {
          return p.show();
        }), this.dom.topRow.trigger("collapse.dtsps"));
      }, S.prototype.destroy = function() {
        this.s.dtPane && this.s.dtPane.off(".dtsp"), this.s.dt.off(".dtsp"), this.dom.clear.off(".dtsp"), this.dom.nameButton.off(".dtsp"), this.dom.countButton.off(".dtsp"), this.dom.searchButton.off(".dtsp"), this.dom.collapseButton.off(".dtsp"), e(this.s.dt.table().node()).off(".dtsp"), this.dom.container.detach();
        for (var p = e.fn.dataTable.ext.search.indexOf(this.s.searchFunction); p !== -1; )
          e.fn.dataTable.ext.search.splice(p, 1), p = e.fn.dataTable.ext.search.indexOf(this.s.searchFunction);
        this.s.dtPane && this.s.dtPane.destroy(), this.s.listSet = !1;
      }, S.prototype.emptyMessage = function() {
        var p = this.c.i18n.emptyMessage;
        return this.c.emptyMessage && (p = this.c.emptyMessage), this.s.colOpts.emptyMessage !== !1 && this.s.colOpts.emptyMessage !== null && (p = this.s.colOpts.emptyMessage), this.s.dt.i18n("searchPanes.emptyMessage", p);
      }, S.prototype.getPaneCount = function() {
        return this.s.dtPane ? this.s.dtPane.rows({ selected: !0 }).data().toArray().length : 0;
      }, S.prototype.rebuildPane = function(p, g) {
        p === void 0 && (p = null), g === void 0 && (g = !1), this.clearData();
        var P = [];
        this.s.serverSelect = [];
        var E = null;
        return this.s.dtPane && (g && (this.s.dt.page.info().serverSide ? this.s.serverSelect = this.s.dtPane.rows({ selected: !0 }).data().toArray() : P = this.s.dtPane.rows({ selected: !0 }).data().toArray()), this.s.dtPane.clear().destroy(), E = this.dom.container.prev(), this.destroy(), this.s.dtPane = void 0, e.fn.dataTable.ext.search.push(this.s.searchFunction)), this.dom.container.removeClass(this.classes.hidden), this.s.displayed = !1, this._buildPane(this.s.dt.page.info().serverSide ? this.s.serverSelect : P, p, E), this;
      }, S.prototype.resize = function(p) {
        this.c.layout = p, this.dom.container.removeClass().addClass(this.classes.show).addClass(this.classes.container).addClass(this.s.colOpts.className).addClass(this.classes.layout + (parseInt(p.split("-")[1], 10) < 10 ? p : p.split("-")[0] + "-9")).addClass(this.s.customPaneSettings !== null && this.s.customPaneSettings.className ? this.s.customPaneSettings.className : ""), this.adjustTopRow(), this.dom.dtP.css("table-layout", "fixed"), this.dom.dtP.css("width", "100%"), this.dom.dtP.find("colgroup col").css("width", "100%");
      }, S.prototype.setListeners = function() {
        var p = this;
        this.s.dtPane && (this.s.dtPane.off("select.dtsp").on("select.dtsp", function() {
          clearTimeout(p.s.deselectTimeout), p._updateSelection(!p.s.updating), p.dom.clear.removeClass(p.classes.disabledButton).removeAttr("disabled");
        }), this.s.dtPane.off("deselect.dtsp").on("deselect.dtsp", function() {
          p.s.deselectTimeout = setTimeout(function() {
            p._updateSelection(!0), p.s.dtPane.rows({ selected: !0 }).data().toArray().length === 0 && p.dom.clear.addClass(p.classes.disabledButton).attr("disabled", "true");
          }, 50);
        }), this.s.firstSet && (this.s.firstSet = !1, this.s.dt.on("stateSaveParams.dtsp", function(g, P, E) {
          if (e.isEmptyObject(E)) {
            p.s.dtPane.state.clear();
            return;
          }
          var O, H, B = [], Y, z, G;
          p.s.dtPane && (B = p.s.dtPane.rows({ selected: !0 }).data().map(function(oe) {
            return oe.filter !== null ? oe.filter.toString() : null;
          }).toArray(), z = p.dom.searchBox.val(), H = p.s.dtPane.order(), O = p.s.rowData.binsOriginal, G = p.s.rowData.arrayOriginal, Y = p.dom.collapseButton.hasClass(p.classes.rotated)), E.searchPanes === void 0 && (E.searchPanes = {}), E.searchPanes.panes === void 0 && (E.searchPanes.panes = []);
          for (var ee = 0; ee < E.searchPanes.panes.length; ee++)
            E.searchPanes.panes[ee].id === p.s.index && (E.searchPanes.panes.splice(ee, 1), ee--);
          E.searchPanes.panes.push({
            arrayFilter: G,
            bins: O,
            collapsed: Y,
            id: p.s.index,
            order: H,
            searchTerm: z,
            selected: B
          });
        })), this.s.dtPane.off("user-select.dtsp").on("user-select.dtsp", function(g, P, E, O, H) {
          H.stopPropagation();
        }), this.s.dtPane.off("draw.dtsp").on("draw.dtsp", function() {
          return p.adjustTopRow();
        }), this.dom.nameButton.off("click.dtsp").on("click.dtsp", function() {
          var g = p.s.dtPane.order()[0][1];
          p.s.dtPane.order([[0, g === "asc" ? "desc" : "asc"]]).draw(), p.s.dt.state.save();
        }), this.dom.countButton.off("click.dtsp").on("click.dtsp", function() {
          var g = p.s.dtPane.order()[0][1], P = g === "asc" ? "desc" : "asc";
          p.s.dtPane.order([[2, P], [1, P]]).draw(), p.s.dt.state.save();
        }), this.dom.collapseButton.off("click.dtsp").on("click.dtsp", function(g) {
          g.stopPropagation();
          var P = e(p.s.dtPane.table().container());
          P.toggleClass(p.classes.hidden), p.dom.topRow.toggleClass(p.classes.bordered), p.dom.nameButton.toggleClass(p.classes.disabledButton), p.dom.countButton.toggleClass(p.classes.disabledButton), p.dom.searchButton.toggleClass(p.classes.disabledButton), p.dom.collapseButton.toggleClass(p.classes.rotated), P.hasClass(p.classes.hidden) ? p.dom.topRow.on("click.dtsp", function() {
            return p.dom.collapseButton.click();
          }) : p.dom.topRow.off("click.dtsp"), p.s.dt.state.save(), p.dom.topRow.trigger("collapse.dtsps");
        }), this.dom.clear.off("click.dtsp").on("click.dtsp", function() {
          var g = p.dom.container.find("." + p.classes.search.replace(/ /g, "."));
          g.each(function() {
            e(this).val("").trigger("input");
          }), p.clearPane();
        }), this.dom.searchButton.off("click.dtsp").on("click.dtsp", function() {
          return p.dom.searchBox.focus();
        }), this.dom.searchBox.off("click.dtsp").on("input.dtsp", function() {
          var g = p.dom.searchBox.val();
          p.s.dtPane.search(g).draw(), typeof g == "string" && (g.length > 0 || g.length === 0 && p.s.dtPane.rows({ selected: !0 }).data().toArray().length > 0) ? p.dom.clear.removeClass(p.classes.disabledButton).removeAttr("disabled") : p.dom.clear.addClass(p.classes.disabledButton).attr("disabled", "true"), p.s.dt.state.save();
        }), this.s.dtPane.select.style(this.s.colOpts.dtOpts && this.s.colOpts.dtOpts.select && this.s.colOpts.dtOpts.select.style ? this.s.colOpts.dtOpts.select.style : this.c.dtOpts && this.c.dtOpts.select && this.c.dtOpts.select.style ? this.c.dtOpts.select.style : "os"));
      }, S.prototype._serverPopulate = function(p) {
        p.tableLength ? (this.s.tableLength = p.tableLength, this.s.rowData.totalOptions = this.s.tableLength) : (this.s.tableLength === null || this.s.dt.rows()[0].length > this.s.tableLength) && (this.s.tableLength = this.s.dt.rows()[0].length, this.s.rowData.totalOptions = this.s.tableLength);
        var g = this.s.dt.column(this.s.index).dataSrc();
        if (p.searchPanes.options[g])
          for (var P = 0, E = p.searchPanes.options[g]; P < E.length; P++) {
            var O = E[P];
            this.s.rowData.arrayFilter.push({
              display: O.label,
              filter: O.value,
              sort: O.label,
              type: O.label
            }), this.s.rowData.bins[O.value] = O.total;
          }
        var H = Object.keys(this.s.rowData.bins).length, B = this._uniqueRatio(H, this.s.tableLength);
        if (this.s.displayed === !1 && ((this.s.colOpts.show === void 0 && this.s.colOpts.threshold === null ? B > this.c.threshold : B > this.s.colOpts.threshold) || this.s.colOpts.show !== !0 && H <= 1)) {
          this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1;
          return;
        }
        this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter, this.s.rowData.binsOriginal = this.s.rowData.bins, this.s.displayed = !0;
      }, S.prototype.show = function() {
        this.s.displayed && (this.dom.topRow.removeClass(this.classes.bordered), this.dom.nameButton.removeClass(this.classes.disabledButton), this.dom.countButton.removeClass(this.classes.disabledButton), this.dom.searchButton.removeClass(this.classes.disabledButton), this.dom.collapseButton.removeClass(this.classes.rotated), e(this.s.dtPane.table().container()).removeClass(this.classes.hidden), this.dom.topRow.trigger("collapse.dtsps"));
      }, S.prototype._uniqueRatio = function(p, g) {
        return g > 0 && (this.s.rowData.totalOptions > 0 && !this.s.dt.page.info().serverSide || this.s.dt.page.info().serverSide && this.s.tableLength > 0) ? p / this.s.rowData.totalOptions : 1;
      }, S.prototype.updateTable = function() {
        var p = this.s.dtPane.rows({ selected: !0 }).data().toArray().map(function(g) {
          return g.filter;
        });
        this.s.selections = p, this._searchExtras();
      }, S.prototype._getComparisonRows = function() {
        var p = this.s.colOpts.options ? this.s.colOpts.options : this.s.customPaneSettings && this.s.customPaneSettings.options ? this.s.customPaneSettings.options : void 0;
        if (p !== void 0) {
          var g = this.s.dt.rows(), P = g.data().toArray(), E = [];
          this.s.dtPane.clear(), this.s.indexes = [];
          for (var O = 0, H = p; O < H.length; O++) {
            var B = H[O], Y = B.label !== "" ? B.label : this.emptyMessage(), z = {
              className: B.className,
              display: Y,
              filter: typeof B.value == "function" ? B.value : [],
              sort: B.order !== void 0 ? B.order : Y,
              total: 0,
              type: Y
            };
            if (typeof B.value == "function") {
              for (var G = 0; G < P.length; G++)
                B.value.call(this.s.dt, P[G], g[0][G]) && z.total++;
              typeof z.filter != "function" && z.filter.push(B.filter);
            }
            E.push(this.addRow(z.display, z.filter, z.sort, z.type, z.className, z.total));
          }
          return E;
        }
      }, S.prototype._getMessage = function(p) {
        return this.s.dt.i18n("searchPanes.count", this.c.i18n.count).replace(/{total}/g, p.total);
      }, S.prototype._getShown = function(p) {
      }, S.prototype._getPaneConfig = function() {
        var p = this, g = t.Scroller, P = this.s.dt.settings()[0].oLanguage;
        return P.url = null, P.sUrl = null, {
          columnDefs: [
            {
              className: "dtsp-nameColumn",
              data: "display",
              render: function(E, O, H) {
                if (O === "sort")
                  return H.sort;
                if (O === "type")
                  return H.type;
                var B = p._getMessage(H), Y = '<span class="' + p.classes.pill + '">' + B + "</span>";
                return (!p.c.viewCount || !p.s.colOpts.viewCount) && (Y = ""), O === "filter" ? typeof E == "string" && E.match(/<[^>]*>/) !== null ? E.replace(/<[^>]*>/g, "") : E : '<div class="' + p.classes.nameCont + '"><span title="' + (typeof E == "string" && E.match(/<[^>]*>/) !== null ? E.replace(/<[^>]*>/g, "") : E) + '" class="' + p.classes.name + '">' + E + "</span>" + Y + "</div>";
              },
              targets: 0,
              // Accessing the private datatables property to set type based on the original table.
              // This is null if not defined by the user, meaning that automatic type detection
              //  would take place
              type: this.s.dt.settings()[0].aoColumns[this.s.index] ? this.s.dt.settings()[0].aoColumns[this.s.index]._sManualType : null
            },
            {
              className: "dtsp-countColumn " + this.classes.badgePill,
              data: "total",
              searchable: !1,
              targets: 1,
              visible: !1
            },
            {
              data: "shown",
              searchable: !1,
              targets: 2,
              visible: !1,
              defaultContent: 0
            }
          ],
          deferRender: !0,
          info: !1,
          language: P,
          paging: !!g,
          scrollX: !1,
          scrollY: "200px",
          scroller: !!g,
          select: !0,
          stateSave: !!this.s.dt.settings()[0].oFeatures.bStateSave
        };
      }, S.prototype._makeSelection = function() {
        this.updateTable(), this.s.updating = !0, this.s.dt.draw(), this.s.updating = !1;
      }, S.prototype._populatePaneArray = function(p, g, P, E) {
        E === void 0 && (E = this.s.rowData.bins);
        var O = P.fastData ? P.fastData : function(Y, z, G) {
          return P.oApi._fnGetCellData(P, Y, z, G);
        };
        if (typeof this.s.colOpts.orthogonal == "string") {
          var H = O(p, this.s.index, this.s.colOpts.orthogonal);
          this.s.rowData.filterMap.set(p, H), this._addOption(H, H, H, H, g, E), this.s.rowData.totalOptions++;
        } else {
          var B = O(p, this.s.index, this.s.colOpts.orthogonal.search);
          B === null && (B = ""), typeof B == "string" && (B = B.replace(/<[^>]*>/g, "")), this.s.rowData.filterMap.set(p, B), E[B] ? (E[B]++, this.s.rowData.totalOptions++) : (this._addOption(B, O(p, this.s.index, this.s.colOpts.orthogonal.display), O(p, this.s.index, this.s.colOpts.orthogonal.sort), O(p, this.s.index, this.s.colOpts.orthogonal.type), g, E), this.s.rowData.totalOptions++);
        }
      }, S.prototype._reloadSelect = function(p) {
        if (p !== void 0) {
          for (var g, P = 0; P < p.searchPanes.panes.length; P++)
            if (p.searchPanes.panes[P].id === this.s.index) {
              g = P;
              break;
            }
          if (g)
            for (var E = this.s.dtPane, O = E.rows({ order: "index" }).data().map(function(G) {
              return G.filter !== null ? G.filter.toString() : null;
            }).toArray(), H = 0, B = p.searchPanes.panes[g].selected; H < B.length; H++) {
              var Y = B[H], z = -1;
              Y !== null && (z = O.indexOf(Y.toString())), z > -1 && (this.s.serverSelecting = !0, E.row(z).select(), this.s.serverSelecting = !1);
            }
        }
      }, S.prototype._updateSelection = function(p) {
        var g = this, P = function(O) {
          if (ie.versionCheck("2"))
            g.s.dt.processing(O);
          else {
            var H = g.s.dt.settings()[0], B = H.oApi;
            B._fnProcessingDisplay(H, !1);
          }
        }, E = function() {
          g.s.scrollTop = e(g.s.dtPane.table().node()).parent()[0].scrollTop, g.s.dt.page.info().serverSide && !g.s.updating ? g.s.serverSelecting || (g.s.serverSelect = g.s.dtPane.rows({ selected: !0 }).data().toArray(), g.s.dt.draw(!1)) : p && g._makeSelection(), P(!1);
        };
        P(!0), setTimeout(E, 1);
      }, S.prototype._addOption = function(p, g, P, E, O, H) {
        if (Array.isArray(p) || p instanceof t.Api) {
          if (p instanceof t.Api && (p = p.toArray(), g = g.toArray()), p.length === g.length) {
            for (var B = 0; B < p.length; B++)
              H[p[B]] ? H[p[B]]++ : (H[p[B]] = 1, O.push({
                display: g[B],
                filter: p[B],
                sort: P[B],
                type: E[B]
              })), this.s.rowData.totalOptions++;
            return;
          }
          throw new Error("display and filter not the same length");
        } else typeof this.s.colOpts.orthogonal == "string" ? H[p] ? (H[p]++, this.s.rowData.totalOptions++) : (H[p] = 1, O.push({
          display: g,
          filter: p,
          sort: P,
          type: E
        }), this.s.rowData.totalOptions++) : (H[p] = 1, O.push({
          display: g,
          filter: p,
          sort: P,
          type: E
        }));
      }, S.prototype._buildPane = function(p, g, P) {
        var E = this;
        p === void 0 && (p = []), g === void 0 && (g = null), P === void 0 && (P = null), this.s.selections = [];
        var O = this.s.dt.state.loaded(), H;
        if (this.s.listSet && (O = this.s.dt.state()), this.s.colExists) {
          var B = -1;
          if (O && O.searchPanes && O.searchPanes.panes) {
            for (var Y = 0; Y < O.searchPanes.panes.length; Y++)
              if (O.searchPanes.panes[Y].id === this.s.index) {
                B = Y;
                break;
              }
          }
          if ((this.s.colOpts.show === !1 || this.s.colOpts.show !== void 0 && this.s.colOpts.show !== !0) && B === -1)
            return this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1, !1;
          if ((this.s.colOpts.show === !0 || B !== -1) && (this.s.displayed = !0), !this.s.dt.page.info().serverSide && (!g || !g.searchPanes || !g.searchPanes.options)) {
            this.s.rowData.arrayFilter.length === 0 && (this.s.rowData.totalOptions = 0, this._populatePane(), this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter, this.s.rowData.binsOriginal = this.s.rowData.bins);
            var z = Object.keys(this.s.rowData.binsOriginal).length, G = this._uniqueRatio(z, this.s.dt.rows()[0].length);
            if (this.s.displayed === !1 && ((this.s.colOpts.show === void 0 && this.s.colOpts.threshold === null ? G > this.c.threshold : G > this.s.colOpts.threshold) || this.s.colOpts.show !== !0 && z <= 1)) {
              this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1;
              return;
            }
            this.dom.container.addClass(this.classes.show), this.s.displayed = !0;
          } else g && g.searchPanes && g.searchPanes.options && this._serverPopulate(g);
        } else
          this.s.displayed = !0;
        this._displayPane(), this.s.listSet || this.dom.dtP.on("stateLoadParams.dtsp", function(ht, Be, et) {
          e.isEmptyObject(E.s.dt.state.loaded()) && e.each(et, function(He) {
            delete et[He];
          });
        }), P !== null && this.dom.panesContainer.has(P).length > 0 ? this.dom.container.insertAfter(P) : this.dom.panesContainer.prepend(this.dom.container);
        var ee = e.fn.dataTable.ext.errMode;
        e.fn.dataTable.ext.errMode = "none", this.dom.dtP.on("init.dt", function(ht, Be) {
          var et = E.dom.dtP.DataTable(), He = et.select.style();
          et.select.style(He);
        });
        var oe;
        if (e.fn.dataTable.versionCheck("2")) {
          var he = e.extend(!0, {}, e.fn.dataTable.defaults.layout);
          e.each(he, function(ht, Be) {
            he[ht] = null;
          }), oe = { layout: he };
        } else
          oe = { dom: "t" };
        this.s.dtPane = this.dom.dtP.DataTable(e.extend(!0, this._getPaneConfig(), this.c.dtOpts, this.s.colOpts ? this.s.colOpts.dtOpts : {}, this.s.colOpts.options || !this.s.colExists ? {
          createdRow: function(ht, Be) {
            e(ht).addClass(Be.className);
          }
        } : void 0, this.s.customPaneSettings !== null && this.s.customPaneSettings.dtOpts ? this.s.customPaneSettings.dtOpts : {}, oe)), this.dom.dtP.addClass(this.classes.table);
        var fe = "Custom Pane";
        this.s.customPaneSettings && this.s.customPaneSettings.header ? fe = this.s.customPaneSettings.header : this.s.colOpts.header ? fe = this.s.colOpts.header : this.s.colExists && (fe = e.fn.dataTable.versionCheck("2") ? this.s.dt.column(this.s.index).title() : this.s.dt.settings()[0].aoColumns[this.s.index].sTitle), fe = this._escapeHTML(fe);
        var ce = this.s.dt.i18n("searchBuilder.searchTitle", this.c.i18n.searchTitle).replace("{name}", fe);
        if (this.dom.searchBox.attr("placeholder", fe).attr("title", ce), e.fn.dataTable.ext.errMode = ee, this.s.colExists)
          for (var ge = 0, _e = this.s.rowData.arrayFilter.length; ge < _e; ge++)
            if (this.s.dt.page.info().serverSide) {
              H = this.addRow(this.s.rowData.arrayFilter[ge].display, this.s.rowData.arrayFilter[ge].filter, this.s.rowData.arrayFilter[ge].sort, this.s.rowData.arrayFilter[ge].type);
              for (var Oe = 0, Le = this.s.serverSelect; Oe < Le.length; Oe++) {
                var rt = Le[Oe];
                rt.filter === this.s.rowData.arrayFilter[ge].filter && (this.s.serverSelecting = !0, H.select(), this.s.serverSelecting = !1);
              }
            } else !this.s.dt.page.info().serverSide && this.s.rowData.arrayFilter[ge] ? this.addRow(this.s.rowData.arrayFilter[ge].display, this.s.rowData.arrayFilter[ge].filter, this.s.rowData.arrayFilter[ge].sort, this.s.rowData.arrayFilter[ge].type) : this.s.dt.page.info().serverSide || this.addRow("", "", "", "");
        (this.s.colOpts.options || this.s.customPaneSettings && this.s.customPaneSettings.options) && this._getComparisonRows(), this.s.dtPane.draw(), this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop, this.adjustTopRow(), this.setListeners(), this.s.listSet = !0;
        for (var Ue = 0, Re = p; Ue < Re.length; Ue++) {
          var Ce = Re[Ue];
          if (Ce)
            for (var dt = 0, Ht = this.s.dtPane.rows().indexes().toArray(); dt < Ht.length; dt++)
              H = Ht[dt], this.s.dtPane.row(H).data() && Ce.filter === this.s.dtPane.row(H).data().filter && (this.s.dt.page.info().serverSide ? (this.s.serverSelecting = !0, this.s.dtPane.row(H).select(), this.s.serverSelecting = !1) : this.s.dtPane.row(H).select());
        }
        if (this.s.dt.page.info().serverSide && this.s.dtPane.search(this.dom.searchBox.val()).draw(), (this.c.initCollapsed && this.s.colOpts.initCollapsed !== !1 || this.s.colOpts.initCollapsed) && (this.c.collapse && this.s.colOpts.collapse !== !1 || this.s.colOpts.collapse) && (this.s.dtPane.settings()[0]._bInitComplete ? this.collapse() : this.s.dtPane.one("init", function() {
          return E.collapse();
        })), O && O.searchPanes && O.searchPanes.panes && (!g || g.draw === 1)) {
          this._reloadSelect(O);
          for (var xt = 0, qt = O.searchPanes.panes; xt < qt.length; xt++) {
            var Fe = qt[xt];
            Fe.id === this.s.index && (Fe.searchTerm && Fe.searchTerm.length > 0 && this.dom.searchBox.val(Fe.searchTerm).trigger("input"), Fe.order && this.s.dtPane.order(Fe.order).draw(), Fe.collapsed ? this.collapse() : this.show());
          }
        }
        return !0;
      }, S.prototype._displayPane = function() {
        this.dom.dtP.empty(), this.dom.topRow.empty().addClass(this.classes.topRow), parseInt(this.c.layout.split("-")[1], 10) > 3 && this.dom.container.addClass(this.classes.smallGap), this.dom.topRow.addClass(this.classes.subRowsContainer).append(this.dom.upper.append(this.dom.searchCont)).append(this.dom.lower.append(this.dom.buttonGroup)), (this.c.dtOpts.searching === !1 || this.s.colOpts.dtOpts && this.s.colOpts.dtOpts.searching === !1 || !this.c.controls || !this.s.colOpts.controls || this.s.customPaneSettings && this.s.customPaneSettings.dtOpts && this.s.customPaneSettings.dtOpts.searching !== void 0 && !this.s.customPaneSettings.dtOpts.searching) && this.dom.searchBox.removeClass(this.classes.paneInputButton).addClass(this.classes.disabledButton).attr("disabled", "true"), this.dom.searchBox.appendTo(this.dom.searchCont), this._searchContSetup(), this.c.clear && this.c.controls && this.s.colOpts.controls && this.dom.clear.appendTo(this.dom.buttonGroup), this.c.orderable && this.s.colOpts.orderable && this.c.controls && this.s.colOpts.controls && this.dom.nameButton.appendTo(this.dom.buttonGroup), this.c.viewCount && this.s.colOpts.viewCount && this.c.orderable && this.s.colOpts.orderable && this.c.controls && this.s.colOpts.controls && this.dom.countButton.appendTo(this.dom.buttonGroup), (this.c.collapse && this.s.colOpts.collapse !== !1 || this.s.colOpts.collapse) && this.c.controls && this.s.colOpts.controls && this.dom.collapseButton.appendTo(this.dom.buttonGroup), this.dom.container.prepend(this.dom.topRow).append(this.dom.dtP).show();
      }, S.prototype._escapeHTML = function(p) {
        return p.toString().replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
      }, S.prototype._getBonusOptions = function() {
        var p = {
          threshold: null
        };
        return e.extend(!0, {}, S.defaults, p, this.c ? this.c : {});
      }, S.prototype._getOptions = function() {
        var p = this.s.dt, g = {
          collapse: null,
          emptyMessage: !1,
          initCollapsed: null,
          threshold: null
        }, P = p.settings()[0].aoColumns[this.s.index].searchPanes, E = e.extend(!0, {}, S.defaults, g, P);
        return P && P.hideCount && P.viewCount === void 0 && (E.viewCount = !P.hideCount), E;
      }, S.prototype._populatePane = function() {
        this.s.rowData.arrayFilter = [], this.s.rowData.bins = {};
        var p = this.s.dt.context[0];
        if (!this.s.dt.page.info().serverSide)
          for (var g = 0, P = this.s.dt.rows().indexes().toArray(); g < P.length; g++) {
            var E = P[g];
            this._populatePaneArray(E, this.s.rowData.arrayFilter, p);
          }
      }, S.prototype._search = function(p, g) {
        for (var P = this.s.colOpts, E = this.s.dt, O = 0, H = this.s.selections; O < H.length; O++) {
          var B = H[O];
          if (typeof B == "string" && typeof p == "string" && (B = this._escapeHTML(B)), Array.isArray(p)) {
            if (P.combiner === "and") {
              if (!p.includes(B))
                return !1;
            } else if (p.includes(B))
              return !0;
          } else if (typeof B == "function") {
            if (B.call(E, E.row(g).data(), g)) {
              if (P.combiner === "or")
                return !0;
            } else if (P.combiner === "and")
              return !1;
          } else if (p === B || // Loose type checking incase number type in column comparing to a string
          // eslint-disable-next-line eqeqeq
          !(typeof p == "string" && p.length === 0) && p == B || B === null && typeof p == "string" && p === "")
            return !0;
        }
        return P.combiner === "and";
      }, S.prototype._searchContSetup = function() {
        this.c.controls && this.s.colOpts.controls && this.dom.searchButton.appendTo(this.dom.searchLabelCont), this.c.dtOpts.searching === !1 || this.s.colOpts.dtOpts.searching === !1 || this.s.customPaneSettings && this.s.customPaneSettings.dtOpts && this.s.customPaneSettings.dtOpts.searching !== void 0 && !this.s.customPaneSettings.dtOpts.searching || this.dom.searchLabelCont.appendTo(this.dom.searchCont);
      }, S.prototype._searchExtras = function() {
        var p = this.s.updating;
        this.s.updating = !0;
        var g = this.s.dtPane.rows({ selected: !0 }).data().pluck("filter").toArray(), P = g.indexOf(this.emptyMessage()), E = e(this.s.dtPane.table().container());
        P > -1 && (g[P] = ""), g.length > 0 ? E.addClass(this.classes.selected) : g.length === 0 && E.removeClass(this.classes.selected), this.s.updating = p;
      }, S.version = "2.1.2", S.classes = {
        bordered: "dtsp-bordered",
        buttonGroup: "dtsp-buttonGroup",
        buttonSub: "dtsp-buttonSub",
        caret: "dtsp-caret",
        clear: "dtsp-clear",
        clearAll: "dtsp-clearAll",
        clearButton: "clearButton",
        collapseAll: "dtsp-collapseAll",
        collapseButton: "dtsp-collapseButton",
        container: "dtsp-searchPane",
        countButton: "dtsp-countButton",
        disabledButton: "dtsp-disabledButton",
        hidden: "dtsp-hidden",
        hide: "dtsp-hide",
        layout: "dtsp-",
        name: "dtsp-name",
        nameButton: "dtsp-nameButton",
        nameCont: "dtsp-nameCont",
        narrow: "dtsp-narrow",
        paneButton: "dtsp-paneButton",
        paneInputButton: "dtsp-paneInputButton",
        pill: "dtsp-pill",
        rotated: "dtsp-rotated",
        search: "dtsp-search",
        searchCont: "dtsp-searchCont",
        searchIcon: "dtsp-searchIcon",
        searchLabelCont: "dtsp-searchButtonCont",
        selected: "dtsp-selected",
        smallGap: "dtsp-smallGap",
        subRow1: "dtsp-subRow1",
        subRow2: "dtsp-subRow2",
        subRowsContainer: "dtsp-subRowsContainer",
        title: "dtsp-title",
        topRow: "dtsp-topRow"
      }, S.defaults = {
        clear: !0,
        collapse: !0,
        combiner: "or",
        container: function(p) {
          return p.table().container();
        },
        controls: !0,
        dtOpts: {},
        emptyMessage: null,
        hideCount: !1,
        i18n: {
          aria: {
            clearPane: "Clear selection",
            clearSearch: "Clear search",
            collapse: "Collapse / show pane",
            orderByCount: "Order by count",
            orderByLabel: "Order by label"
          },
          clearPane: "&times;",
          count: "{total}",
          emptyMessage: "<em>Empty</em>",
          searchTitle: "Search: {name}"
        },
        initCollapsed: !1,
        layout: "auto",
        name: void 0,
        orderable: !0,
        orthogonal: {
          display: "display",
          filter: "filter",
          hideCount: !1,
          search: "filter",
          show: void 0,
          sort: "sort",
          threshold: 0.6,
          type: "type",
          viewCount: !0
        },
        preSelect: [],
        threshold: 0.6,
        viewCount: !0
      }, S;
    }()
  ), a = window && window.__extends || /* @__PURE__ */ function() {
    var S = function(p, g) {
      return S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(P, E) {
        P.__proto__ = E;
      } || function(P, E) {
        for (var O in E) E.hasOwnProperty(O) && (P[O] = E[O]);
      }, S(p, g);
    };
    return function(p, g) {
      S(p, g);
      function P() {
        this.constructor = p;
      }
      p.prototype = g === null ? Object.create(g) : (P.prototype = g.prototype, new P());
    };
  }(), f = (
    /** @class */
    function(S) {
      a(p, S);
      function p(g, P, E, O, H) {
        return S.call(this, g, P, E, O, H) || this;
      }
      return p.prototype._emptyPane = function() {
        var g = this.s.dtPane;
        if (ie.versionCheck("2")) {
          var P = g.select.last(), E;
          return P && g.row(P.row).any() && (E = g.row(P.row).data().index), g.rows().remove(), function() {
            if (E !== void 0) {
              var O = g.row(function(H, B) {
                return B.index === E;
              }).index();
              g.select.last({ row: O, column: 0 });
            }
          };
        }
        return g.rows().remove(), function() {
        };
      }, p.prototype._serverPopulate = function(g) {
        var P, E, O;
        this.s.rowData.binsShown = {}, this.s.rowData.arrayFilter = [], g.tableLength !== void 0 ? (this.s.tableLength = g.tableLength, this.s.rowData.totalOptions = this.s.tableLength) : (this.s.tableLength === null || this.s.dt.rows()[0].length > this.s.tableLength) && (this.s.tableLength = this.s.dt.rows()[0].length, this.s.rowData.totalOptions = this.s.tableLength);
        var H = this.s.dt.column(this.s.index).dataSrc();
        if (g.searchPanes.options[H] !== void 0)
          for (var B = 0, Y = g.searchPanes.options[H]; B < Y.length; B++) {
            var z = Y[B];
            this.s.rowData.arrayFilter.push({
              display: z.label,
              filter: z.value,
              shown: +z.count,
              sort: z.label,
              total: +z.total,
              type: z.label
            }), this.s.rowData.binsShown[z.value] = +z.count, this.s.rowData.bins[z.value] = +z.total;
          }
        var G = Object.keys(this.s.rowData.bins).length, ee = this._uniqueRatio(G, this.s.tableLength);
        if (!this.s.colOpts.show && this.s.displayed === !1 && ((this.s.colOpts.show === void 0 && this.s.colOpts.threshold === null ? ee > this.c.threshold : ee > this.s.colOpts.threshold) || this.s.colOpts.show !== !0 && G <= 1)) {
          this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1;
          return;
        }
        if (this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter, this.s.rowData.binsOriginal = this.s.rowData.bins, this.s.displayed = !0, this.s.dtPane) {
          for (var oe = this.s.serverSelect, he = this._emptyPane(), fe = 0, ce = this.s.rowData.arrayFilter; fe < ce.length; fe++)
            if (O = ce[fe], this._shouldAddRow(O)) {
              E = this.addRow(O.display, O.filter, O.sort, O.type);
              for (var ge = 0; ge < oe.length; ge++)
                if (P = oe[ge], P.filter === O.filter) {
                  this.s.serverSelecting = !0, E.select(), this.s.serverSelecting = !1, oe.splice(ge, 1), this.s.selections.push(O.filter);
                  break;
                }
            }
          for (var _e = 0, Oe = oe; _e < Oe.length; _e++) {
            P = Oe[_e];
            for (var Le = 0, rt = this.s.rowData.arrayOriginal; Le < rt.length; Le++)
              O = rt[Le], O.filter === P.filter && (E = this.addRow(O.display, O.filter, O.sort, O.type), this.s.serverSelecting = !0, E.select(), this.s.serverSelecting = !1, this.s.selections.push(O.filter));
          }
          this.s.serverSelect = this.s.dtPane.rows({ selected: !0 }).data().toArray(), this.s.dtPane.draw(), he();
        }
      }, p.prototype.updateRows = function() {
        if (!this.s.dt.page.info().serverSide) {
          this.s.rowData.binsShown = {};
          for (var g = 0, P = this.s.dt.rows({ search: "applied" }).indexes().toArray(); g < P.length; g++) {
            var E = P[g];
            this._updateShown(E, this.s.dt.settings()[0], this.s.rowData.binsShown);
          }
        }
        for (var O = function(G) {
          G.shown = typeof H.s.rowData.binsShown[G.filter] == "number" ? H.s.rowData.binsShown[G.filter] : 0, H.s.dtPane.row(function(ee, oe) {
            return oe && oe.index === G.index;
          }).data(G);
        }, H = this, B = 0, Y = this.s.dtPane.rows().data().toArray(); B < Y.length; B++) {
          var z = Y[B];
          O(z);
        }
        this.s.dtPane.draw(), this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop;
      }, p.prototype._makeSelection = function() {
      }, p.prototype._reloadSelect = function() {
      }, p.prototype._shouldAddRow = function(g) {
        return !0;
      }, p.prototype._updateSelection = function() {
        this.s.dt.page.info().serverSide && !this.s.updating && !this.s.serverSelecting && (this.s.serverSelect = this.s.dtPane.rows({ selected: !0 }).data().toArray());
      }, p.prototype._updateShown = function(g, P, E) {
        E === void 0 && (E = this.s.rowData.binsShown);
        var O = typeof this.s.colOpts.orthogonal == "string" ? this.s.colOpts.orthogonal : this.s.colOpts.orthogonal.search, H = P.fastData ? P.fastData : function(oe, he, fe) {
          return P.oApi._fnGetCellData(P, oe, he, fe);
        }, B = H(g, this.s.index, O), Y = function(oe) {
          E[oe] ? E[oe]++ : E[oe] = 1;
        };
        if (Array.isArray(B))
          for (var z = 0, G = B; z < G.length; z++) {
            var ee = G[z];
            Y(ee);
          }
        else
          Y(B);
      }, p;
    }(i)
  ), u = window && window.__extends || /* @__PURE__ */ function() {
    var S = function(p, g) {
      return S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(P, E) {
        P.__proto__ = E;
      } || function(P, E) {
        for (var O in E) E.hasOwnProperty(O) && (P[O] = E[O]);
      }, S(p, g);
    };
    return function(p, g) {
      S(p, g);
      function P() {
        this.constructor = p;
      }
      p.prototype = g === null ? Object.create(g) : (P.prototype = g.prototype, new P());
    };
  }(), v;
  function m(S) {
    v = S;
  }
  var w = (
    /** @class */
    function(S) {
      u(p, S);
      function p(g, P, E, O, H) {
        var B = this, Y = {
          i18n: {
            countFiltered: "{shown} ({total})"
          }
        };
        return B = S.call(this, g, v.extend(Y, P), E, O, H) || this, B;
      }
      return p.prototype._getMessage = function(g) {
        var P = this.s.dt.i18n("searchPanes.count", this.c.i18n.count), E = this.s.dt.i18n("searchPanes.countFiltered", this.c.i18n.countFiltered);
        return (this.s.filteringActive ? E : P).replace(/{total}/g, g.total).replace(/{shown}/g, g.shown);
      }, p.prototype._getShown = function(g) {
        return this.s.rowData.binsShown && this.s.rowData.binsShown[g] ? this.s.rowData.binsShown[g] : 0;
      }, p;
    }(f)
  ), y = window && window.__extends || /* @__PURE__ */ function() {
    var S = function(p, g) {
      return S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(P, E) {
        P.__proto__ = E;
      } || function(P, E) {
        for (var O in E) E.hasOwnProperty(O) && (P[O] = E[O]);
      }, S(p, g);
    };
    return function(p, g) {
      S(p, g);
      function P() {
        this.constructor = p;
      }
      p.prototype = g === null ? Object.create(g) : (P.prototype = g.prototype, new P());
    };
  }(), x;
  function A(S) {
    x = S;
  }
  var N = (
    /** @class */
    function(S) {
      y(p, S);
      function p(g, P, E, O, H) {
        var B = this, Y = {
          i18n: {
            count: "{shown}"
          }
        };
        return B = S.call(this, g, x.extend(Y, P), E, O, H) || this, B;
      }
      return p.prototype.updateRows = function() {
        var g = this.s.dtPane.rows({ selected: !0 }).data().toArray(), P;
        if (this.s.colOpts.options || this.s.customPaneSettings && this.s.customPaneSettings.options) {
          this._getComparisonRows();
          for (var E = this.s.dtPane.rows().toArray()[0], O = 0; O < E.length; O++) {
            var H = this.s.dtPane.row(E[O]), B = H.data();
            if (B !== void 0) {
              if (B.shown === 0) {
                H.remove(), E = this.s.dtPane.rows().toArray()[0], O--;
                continue;
              }
              for (var Y = 0, z = g; Y < z.length; Y++)
                if (P = z[Y], B.filter === P.filter) {
                  H.select(), g.splice(O, 1), this.s.selections.push(B.filter);
                  break;
                }
            }
          }
        } else {
          if (!this.s.dt.page.info().serverSide) {
            this._activePopulatePane(), this.s.rowData.binsShown = {};
            for (var G = 0, ee = this.s.dt.rows({ search: "applied" }).indexes().toArray(); G < ee.length; G++) {
              var oe = ee[G];
              this._updateShown(oe, this.s.dt.settings()[0], this.s.rowData.binsShown);
            }
          }
          this.s.dtPane.rows().remove();
          for (var he = 0, fe = this.s.rowData.arrayFilter; he < fe.length; he++) {
            var ce = fe[he];
            if (ce.shown !== 0)
              for (var ge = this.addRow(ce.display, ce.filter, ce.sort, ce.type, void 0), _e = 0; _e < g.length; _e++) {
                var Oe = g[_e];
                if (Oe.filter === ce.filter) {
                  ge.select(), g.splice(_e, 1), this.s.selections.push(ce.filter);
                  break;
                }
              }
          }
          for (var Le = 0, rt = g; Le < rt.length; Le++) {
            P = rt[Le];
            for (var Ue = 0, Re = this.s.rowData.arrayOriginal; Ue < Re.length; Ue++) {
              var Ce = Re[Ue];
              if (Ce.filter === P.filter) {
                var dt = this.addRow(Ce.display, Ce.filter, Ce.sort, Ce.type, void 0);
                dt.select(), this.s.selections.push(Ce.filter);
              }
            }
          }
        }
        this.s.dtPane.draw(), this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop, this.s.dt.page.info().serverSide || this.s.dt.draw(!1);
      }, p.prototype._activePopulatePane = function() {
        this.s.rowData.arrayFilter = [], this.s.rowData.bins = {};
        var g = this.s.dt.settings()[0];
        if (!this.s.dt.page.info().serverSide)
          for (var P = 0, E = this.s.dt.rows({ search: "applied" }).indexes().toArray(); P < E.length; P++) {
            var O = E[P];
            this._populatePaneArray(O, this.s.rowData.arrayFilter, g);
          }
      }, p.prototype._getComparisonRows = function() {
        var g = this.s.colOpts.options ? this.s.colOpts.options : this.s.customPaneSettings && this.s.customPaneSettings.options ? this.s.customPaneSettings.options : void 0;
        if (g !== void 0) {
          var P = this.s.dt.rows(), E = this.s.dt.rows({ search: "applied" }), O = P.data().toArray(), H = E.data().toArray(), B = [];
          this.s.dtPane.clear(), this.s.indexes = [];
          for (var Y = 0, z = g; Y < z.length; Y++) {
            var G = z[Y], ee = G.label !== "" ? G.label : this.emptyMessage(), oe = {
              className: G.className,
              display: ee,
              filter: typeof G.value == "function" ? G.value : [],
              shown: 0,
              sort: ee,
              total: 0,
              type: ee
            };
            if (typeof G.value == "function") {
              for (var he = 0; he < O.length; he++)
                G.value.call(this.s.dt, O[he], P[0][he]) && oe.total++;
              for (var fe = 0; fe < H.length; fe++)
                G.value.call(this.s.dt, H[fe], E[0][fe]) && oe.shown++;
              typeof oe.filter != "function" && oe.filter.push(G.filter);
            }
            B.push(this.addRow(oe.display, oe.filter, oe.sort, oe.type, oe.className, oe.total, oe.shown));
          }
          return B;
        }
      }, p.prototype._getMessage = function(g) {
        return this.s.dt.i18n("searchPanes.count", this.c.i18n.count).replace(/{total}/g, g.total).replace(/{shown}/g, g.shown);
      }, p.prototype._getShown = function(g) {
        return this.s.rowData.binsShown && this.s.rowData.binsShown[g] ? this.s.rowData.binsShown[g] : 0;
      }, p.prototype._shouldAddRow = function(g) {
        return g.shown > 0;
      }, p;
    }(f)
  ), F = window && window.__extends || /* @__PURE__ */ function() {
    var S = function(p, g) {
      return S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(P, E) {
        P.__proto__ = E;
      } || function(P, E) {
        for (var O in E) E.hasOwnProperty(O) && (P[O] = E[O]);
      }, S(p, g);
    };
    return function(p, g) {
      S(p, g);
      function P() {
        this.constructor = p;
      }
      p.prototype = g === null ? Object.create(g) : (P.prototype = g.prototype, new P());
    };
  }(), _;
  function X(S) {
    _ = S;
  }
  var k = (
    /** @class */
    function(S) {
      F(p, S);
      function p(g, P, E, O, H) {
        var B = this, Y = {
          i18n: {
            count: "{total}",
            countFiltered: "{shown} ({total})"
          }
        };
        return B = S.call(this, g, _.extend(Y, P), E, O, H) || this, B;
      }
      return p.prototype._activePopulatePane = function() {
        this.s.rowData.arrayFilter = [], this.s.rowData.binsShown = {};
        var g = this.s.dt.settings()[0];
        if (!this.s.dt.page.info().serverSide)
          for (var P = 0, E = this.s.dt.rows({ search: "applied" }).indexes().toArray(); P < E.length; P++) {
            var O = E[P];
            this._populatePaneArray(O, this.s.rowData.arrayFilter, g, this.s.rowData.binsShown);
          }
      }, p.prototype._getMessage = function(g) {
        var P = this.s.dt.i18n("searchPanes.count", this.c.i18n.count), E = this.s.dt.i18n("searchPanes.countFiltered", this.c.i18n.countFiltered);
        return (this.s.filteringActive ? E : P).replace(/{total}/g, g.total).replace(/{shown}/g, g.shown);
      }, p;
    }(N)
  ), q, j;
  function I(S) {
    q = S, j = S.fn.dataTable;
  }
  var Z = (
    /** @class */
    function() {
      function S(p, g, P, E) {
        var O = this;
        if (P === void 0 && (P = !1), E === void 0 && (E = i), !j || !j.versionCheck || !j.versionCheck("1.10.0"))
          throw new Error("SearchPane requires DataTables 1.10 or newer");
        if (!j.select)
          throw new Error("SearchPane requires Select");
        var H = new j.Api(p);
        if (this.classes = q.extend(!0, {}, S.classes), this.c = q.extend(!0, {}, S.defaults, g), this.dom = {
          clearAll: q('<button type="button"/>').addClass(this.classes.clearAll).html(H.i18n("searchPanes.clearMessage", this.c.i18n.clearMessage)),
          collapseAll: q('<button type="button"/>').addClass(this.classes.collapseAll).html(H.i18n("searchPanes.collapseMessage", this.c.i18n.collapseMessage)),
          container: q("<div/>").addClass(this.classes.panes).html(H.i18n("searchPanes.loadMessage", this.c.i18n.loadMessage)),
          emptyMessage: q("<div/>").addClass(this.classes.emptyMessage),
          panes: q("<div/>").addClass(this.classes.container),
          showAll: q('<button type="button"/>').addClass(this.classes.showAll).addClass(this.classes.disabledButton).attr("disabled", "true").html(H.i18n("searchPanes.showMessage", this.c.i18n.showMessage)),
          title: q("<div/>").addClass(this.classes.title),
          titleRow: q("<div/>").addClass(this.classes.titleRow)
        }, this.s = {
          colOpts: [],
          dt: H,
          filterCount: 0,
          minPaneWidth: 260,
          page: 0,
          paging: !1,
          pagingST: !1,
          paneClass: E,
          panes: [],
          selectionList: [],
          serverData: {},
          stateRead: !1,
          updating: !1
        }, !H.settings()[0]._searchPanes) {
          if (q(document).on("draw.dt", function(Y) {
            O.dom.container.find(Y.target).length && O._updateFilterCount();
          }), this._getState(), this.s.dt.page.info().serverSide) {
            var B = this.s.dt.settings()[0];
            this.s.dt.on("preXhr.dtsps", function(Y, z, G) {
              if (B === z) {
                G.searchPanes === void 0 && (G.searchPanes = {}), G.searchPanes_null === void 0 && (G.searchPanes_null = {});
                for (var ee, oe = 0, he = O.s.selectionList; oe < he.length; oe++) {
                  var fe = he[oe];
                  ee = O.s.dt.column(fe.column).dataSrc(), G.searchPanes[ee] === void 0 && (G.searchPanes[ee] = {}), G.searchPanes_null[ee] === void 0 && (G.searchPanes_null[ee] = {});
                  for (var ce = 0; ce < fe.rows.length; ce++)
                    G.searchPanes[ee][ce] = fe.rows[ce], G.searchPanes[ee][ce] === null ? G.searchPanes_null[ee][ce] = !0 : G.searchPanes_null[ee][ce] = !1;
                }
                O.s.selectionList.length > 0 && (G.searchPanesLast = ee), G.searchPanes_options = {
                  cascade: O.c.cascadePanes,
                  viewCount: O.c.viewCount,
                  viewTotal: O.c.viewTotal
                };
              }
            });
          }
          return this._setXHR(), H.settings()[0]._searchPanes = this, this.s.dt.settings()[0]._bInitComplete || P ? this._paneDeclare(H, p, g) : H.one("preInit.dtsps", function() {
            O._paneDeclare(H, p, g);
          }), this;
        }
      }
      return S.prototype.clearSelections = function() {
        for (var p, g = 0, P = this.s.panes; g < P.length; g++)
          p = P[g], p.s.dtPane && (p.s.scrollTop = p.s.dtPane.table().node().parentNode.scrollTop);
        var E = this.dom.container.find("." + this.classes.search.replace(/\s+/g, "."));
        E.each(function() {
          q(this).val("").trigger("input");
        }), this.s.selectionList = [];
        for (var O = [], H = 0, B = this.s.panes; H < B.length; H++)
          p = B[H], p.s.dtPane && O.push(p.clearPane());
        return O;
      }, S.prototype.getNode = function() {
        return this.dom.container;
      }, S.prototype.rebuild = function(p, g) {
        p === void 0 && (p = !1), g === void 0 && (g = !1), this.dom.emptyMessage.detach(), p === !1 && this.dom.panes.empty();
        for (var P = [], E = 0, O = this.s.panes; E < O.length; E++) {
          var H = O[E];
          (p === !1 || H.s.index === p) && (H.clearData(), H.rebuildPane(this.s.dt.page.info().serverSide ? this.s.serverData : void 0, g), this.dom.panes.append(H.dom.container), P.push(H));
        }
        return this._updateSelection(), this._updateFilterCount(), this._attachPaneContainer(), this._initSelectionListeners(!1), this.s.dt.draw(!g), this.resizePanes(), P.length === 1 ? P[0] : P;
      }, S.prototype.resizePanes = function() {
        var p;
        if (this.c.layout === "auto") {
          for (var g = q(this.s.dt.searchPanes.container()).width(), P = Math.floor(g / this.s.minPaneWidth), E = 1, O = 0, H = [], B = 0, Y = this.s.panes; B < Y.length; B++)
            p = Y[B], p.s.displayed && H.push(p.s.index);
          var z = H.length;
          if (P === z)
            E = P;
          else
            for (var G = P; G > 1; G--) {
              var ee = z % G;
              if (ee === 0) {
                E = G, O = 0;
                break;
              } else ee > O && (E = G, O = ee);
            }
          var oe = O !== 0 ? H.slice(H.length - O, H.length) : [];
          this.s.panes.forEach(function(ce) {
            ce.s.displayed && ce.resize("columns-" + (oe.includes(ce.s.index) ? O : E));
          });
        } else
          for (var he = 0, fe = this.s.panes; he < fe.length; he++)
            p = fe[he], p.adjustTopRow();
        return this;
      }, S.prototype._initSelectionListeners = function(p) {
      }, S.prototype._serverTotals = function() {
      }, S.prototype._setXHR = function() {
        var p = this, g = this.s.dt.settings()[0], P = function(E) {
          E && E.searchPanes && E.searchPanes.options && (p.s.serverData = E, p.s.serverData.tableLength = E.recordsTotal, p._serverTotals());
        };
        this.s.dt.on("xhr.dtsps", function(E, O, H) {
          g === O && P(H);
        }), P(this.s.dt.ajax.json());
      }, S.prototype._stateLoadListener = function() {
        var p = this, g = this.s.dt.settings()[0];
        this.s.dt.on("stateLoadParams.dtsps", function(P, E, O) {
          if (!(O.searchPanes === void 0 || E !== g)) {
            if (p.clearSelections(), p.s.selectionList = O.searchPanes.selectionList ? O.searchPanes.selectionList : [], O.searchPanes.panes)
              for (var H = 0, B = O.searchPanes.panes; H < B.length; H++)
                for (var Y = B[H], z = 0, G = p.s.panes; z < G.length; z++) {
                  var ee = G[z];
                  Y.id === ee.s.index && ee.s.dtPane && (ee.dom.searchBox.val(Y.searchTerm), ee.s.dtPane.order(Y.order));
                }
            p._makeSelections(p.s.selectionList);
          }
        });
      }, S.prototype._updateSelection = function() {
        this.s.selectionList = [];
        for (var p = 0, g = this.s.panes; p < g.length; p++) {
          var P = g[p];
          if (P.s.dtPane) {
            var E = P.s.dtPane.rows({ selected: !0 }).data().toArray().map(function(O) {
              return O.filter;
            });
            E.length && this.s.selectionList.push({
              column: P.s.index,
              rows: E
            });
          }
        }
      }, S.prototype._attach = function() {
        var p = this;
        this.dom.titleRow.removeClass(this.classes.hide).detach().append(this.dom.title), this.c.clear && this.dom.clearAll.appendTo(this.dom.titleRow).off("click.dtsps").on("click.dtsps", function() {
          return p.clearSelections();
        }), this.c.collapse && (this.dom.showAll.appendTo(this.dom.titleRow), this.dom.collapseAll.appendTo(this.dom.titleRow), this._setCollapseListener());
        for (var g = 0, P = this.s.panes; g < P.length; g++) {
          var E = P[g];
          this.dom.panes.append(E.dom.container);
        }
        this.dom.container[0].childNodes.forEach(function(O) {
          return O.remove();
        }), this.dom.container.removeClass(this.classes.hide).append(this.dom.titleRow).append(this.dom.panes), this.s.panes.forEach(function(O) {
          return O.setListeners();
        }), q("div." + this.classes.container).length === 0 && this.dom.container.prependTo(this.s.dt);
      }, S.prototype._attachMessage = function() {
        var p;
        try {
          p = this.s.dt.i18n("searchPanes.emptyPanes", this.c.i18n.emptyPanes);
        } catch {
          p = null;
        }
        if (p === null) {
          this.dom.container.addClass(this.classes.hide), this.dom.titleRow.removeClass(this.classes.hide);
          return;
        }
        this.dom.container.removeClass(this.classes.hide), this.dom.titleRow.addClass(this.classes.hide), this.dom.emptyMessage.html(p).appendTo(this.dom.container);
      }, S.prototype._attachPaneContainer = function() {
        for (var p = 0, g = this.s.panes; p < g.length; p++) {
          var P = g[p];
          if (P.s.displayed === !0) {
            this._attach();
            return;
          }
        }
        this._attachMessage();
      }, S.prototype._checkCollapse = function() {
        for (var p = !0, g = !0, P = 0, E = this.s.panes; P < E.length; P++) {
          var O = E[P];
          O.s.displayed && (O.dom.collapseButton.hasClass(O.classes.rotated) ? (this.dom.showAll.removeClass(this.classes.disabledButton).removeAttr("disabled"), g = !1) : (this.dom.collapseAll.removeClass(this.classes.disabledButton).removeAttr("disabled"), p = !1));
        }
        p && this.dom.collapseAll.addClass(this.classes.disabledButton).attr("disabled", "true"), g && this.dom.showAll.addClass(this.classes.disabledButton).attr("disabled", "true");
      }, S.prototype._checkMessage = function() {
        for (var p = 0, g = this.s.panes; p < g.length; p++) {
          var P = g[p];
          if (P.s.displayed === !0) {
            this.dom.emptyMessage.detach(), this.dom.titleRow.removeClass(this.classes.hide);
            return;
          }
        }
        this._attachMessage();
      }, S.prototype._collapseAll = function() {
        for (var p = 0, g = this.s.panes; p < g.length; p++) {
          var P = g[p];
          P.collapse();
        }
      }, S.prototype._findPane = function(p) {
        for (var g = 0, P = this.s.panes; g < P.length; g++) {
          var E = P[g];
          if (p === E.s.name)
            return E;
        }
      }, S.prototype._getState = function() {
        var p = this.s.dt.state.loaded();
        p && p.searchPanes && p.searchPanes.selectionList && (this.s.selectionList = p.searchPanes.selectionList);
      }, S.prototype._makeSelections = function(p) {
        for (var g = 0, P = p; g < P.length; g++) {
          for (var E = P[g], O = void 0, H = 0, B = this.s.panes; H < B.length; H++) {
            var Y = B[H];
            if (Y.s.index === E.column) {
              O = Y;
              break;
            }
          }
          if (O && O.s.dtPane) {
            for (var z = 0; z < O.s.dtPane.rows().data().toArray().length; z++)
              E.rows.includes(typeof O.s.dtPane.row(z).data().filter == "function" ? O.s.dtPane.cell(z, 0).data() : O.s.dtPane.row(z).data().filter) && O.s.dtPane.row(z).select();
            O.updateTable();
          }
        }
      }, S.prototype._paneDeclare = function(p, g, P) {
        var E = this;
        p.columns(this.c.columns.length > 0 ? this.c.columns : void 0).eq(0).each(function(Y) {
          E.s.panes.push(new E.s.paneClass(g, P, Y, E.dom.panes));
        });
        for (var O = p.columns().eq(0).toArray().length, H = 0; H < this.c.panes.length; H++) {
          var B = O + H;
          this.s.panes.push(new this.s.paneClass(g, P, B, this.dom.panes, this.c.panes[H]));
        }
        this.c.order.length > 0 && (this.s.panes = this.c.order.map(function(Y) {
          return E._findPane(Y);
        })), this.s.dt.settings()[0]._bInitComplete ? this._startup(p) : j.versionCheck("2") ? this.s.dt.settings()[0].aoInitComplete.push(function() {
          return E._startup(p);
        }) : this.s.dt.settings()[0].aoInitComplete.push({
          fn: function() {
            return E._startup(p);
          }
        });
      }, S.prototype._setCollapseListener = function() {
        var p = this;
        this.dom.collapseAll.off("click.dtsps").on("click.dtsps", function() {
          p._collapseAll(), p.dom.collapseAll.addClass(p.classes.disabledButton).attr("disabled", "true"), p.dom.showAll.removeClass(p.classes.disabledButton).removeAttr("disabled"), p.s.dt.state.save();
        }), this.dom.showAll.off("click.dtsps").on("click.dtsps", function() {
          p._showAll(), p.dom.showAll.addClass(p.classes.disabledButton).attr("disabled", "true"), p.dom.collapseAll.removeClass(p.classes.disabledButton).removeAttr("disabled"), p.s.dt.state.save();
        });
        for (var g = 0, P = this.s.panes; g < P.length; g++) {
          var E = P[g];
          E.dom.topRow.off("collapse.dtsps").on("collapse.dtsps", function() {
            return p._checkCollapse();
          });
        }
        this._checkCollapse();
      }, S.prototype._showAll = function() {
        for (var p = 0, g = this.s.panes; p < g.length; p++) {
          var P = g[p];
          P.show();
        }
      }, S.prototype._startup = function(p) {
        var g = this;
        this._attach(), this.dom.panes.empty();
        for (var P = this.s.dt.settings()[0], E = 0, O = this.s.panes; E < O.length; E++) {
          var H = O[E];
          H.rebuildPane(Object.keys(this.s.serverData).length > 0 ? this.s.serverData : void 0), this.dom.panes.append(H.dom.container);
        }
        this.c.layout === "auto" && this.resizePanes();
        var B = this.s.dt.state.loaded();
        !this.s.stateRead && B && this.s.dt.page(B.start / this.s.dt.page.len()).draw("page"), this.s.stateRead = !0, this._checkMessage(), p.on("preDraw.dtsps", function() {
          !g.s.updating && !g.s.paging && (g._updateFilterCount(), g._updateSelection()), g.s.paging = !1;
        }), q(window).on("resize.dtsps", j.util.throttle(function() {
          return g.resizePanes();
        })), this.s.dt.on("stateSaveParams.dtsps", function(z, G, ee) {
          G === P && (ee.searchPanes === void 0 && (ee.searchPanes = {}), ee.searchPanes.selectionList = g.s.selectionList);
        }), this._stateLoadListener(), p.off("page.dtsps page-nc.dtsps").on("page.dtsps page-nc.dtsps", function(z, G) {
          g.s.paging = !0, g.s.pagingST = !0, g.s.page = g.s.dt.page();
        }), this.s.dt.page.info().serverSide ? p.off("preXhr.dtsps").on("preXhr.dtsps", function(z, G, ee) {
          if (G === P) {
            ee.searchPanes || (ee.searchPanes = {}), ee.searchPanes_null || (ee.searchPanes_null = {});
            for (var oe = 0, he = 0, fe = g.s.panes; he < fe.length; he++) {
              var ce = fe[he], ge = g.s.dt.column(ce.s.index).dataSrc();
              if (ee.searchPanes[ge] || (ee.searchPanes[ge] = {}), ee.searchPanes_null[ge] || (ee.searchPanes_null[ge] = {}), ce.s.dtPane)
                for (var _e = ce.s.dtPane.rows({ selected: !0 }).data().toArray(), Oe = 0; Oe < _e.length; Oe++)
                  ee.searchPanes[ge][Oe] = _e[Oe].filter, ee.searchPanes[ge][Oe] ? ee.searchPanes_null[ge][Oe] = !1 : ee.searchPanes_null[ge][Oe] = !0, oe++;
            }
            oe > 0 && (oe !== g.s.filterCount && (ee.start = 0, g.s.page = 0, g.s.dt.page(g.s.page)), g.s.filterCount = oe), g.s.selectionList.length > 0 && (ee.searchPanesLast = g.s.dt.column(g.s.selectionList[g.s.selectionList.length - 1].column).dataSrc()), ee.searchPanes_options = {
              cascade: g.c.cascadePanes,
              viewCount: g.c.viewCount,
              viewTotal: g.c.viewTotal
            };
          }
        }) : p.on("preXhr.dtsps", function() {
          return g.s.panes.forEach(function(z) {
            return z.clearData();
          });
        }), this.s.dt.on("xhr.dtsps", function(z, G) {
          if (G.nTable === g.s.dt.table().node() && !g.s.dt.page.info().serverSide) {
            var ee = !1;
            g.s.dt.one("preDraw.dtsps", function() {
              if (!ee) {
                var oe = g.s.dt.page();
                ee = !0, g.s.updating = !0, g.dom.panes.empty();
                for (var he = 0, fe = g.s.panes; he < fe.length; he++) {
                  var ce = fe[he];
                  ce.clearData(), ce.rebuildPane(void 0, !0), g.dom.panes.append(ce.dom.container);
                }
                g.s.dt.page.info().serverSide || g.s.dt.draw(), g.s.updating = !1, g._updateSelection(), g._checkMessage(), g.s.dt.one("draw.dtsps", function() {
                  g.s.updating = !0, g.s.dt.page(oe).draw(!1), g.s.updating = !1;
                });
              }
            });
          }
        });
        var Y = this.c.preSelect;
        B && B.searchPanes && B.searchPanes.selectionList && (Y = B.searchPanes.selectionList), this._makeSelections(Y), this._updateFilterCount(), p.on("destroy.dtsps", function(z, G) {
          if (G === P) {
            for (var ee = 0, oe = g.s.panes; ee < oe.length; ee++) {
              var he = oe[ee];
              he.destroy();
            }
            p.off(".dtsps"), g.dom.showAll.off(".dtsps"), g.dom.clearAll.off(".dtsps"), g.dom.collapseAll.off(".dtsps"), q(p.table().node()).off(".dtsps"), g.dom.container.detach(), g.clearSelections();
          }
        }), this.c.collapse && this._setCollapseListener(), this.c.clear && this.dom.clearAll.off("click.dtsps").on("click.dtsps", function() {
          return g.clearSelections();
        }), P._searchPanes = this, this.s.dt.state.save();
      }, S.prototype._updateFilterCount = function() {
        for (var p = 0, g = 0, P = 0, E = this.s.panes; P < E.length; P++) {
          var O = E[P];
          O.s.dtPane && (p += O.getPaneCount(), O.s.dtPane.search() && g++);
        }
        this.dom.title.html(this.s.dt.i18n("searchPanes.title", this.c.i18n.title, p)), this.c.filterChanged && typeof this.c.filterChanged == "function" && this.c.filterChanged.call(this.s.dt, p), p === 0 && g === 0 ? this.dom.clearAll.addClass(this.classes.disabledButton).attr("disabled", "true") : this.dom.clearAll.removeClass(this.classes.disabledButton).removeAttr("disabled");
      }, S.version = "2.3.5", S.classes = {
        clear: "dtsp-clear",
        clearAll: "dtsp-clearAll",
        collapseAll: "dtsp-collapseAll",
        container: "dtsp-searchPanes",
        disabledButton: "dtsp-disabledButton",
        emptyMessage: "dtsp-emptyMessage",
        hide: "dtsp-hidden",
        panes: "dtsp-panesContainer",
        search: "dtsp-search",
        showAll: "dtsp-showAll",
        title: "dtsp-title",
        titleRow: "dtsp-titleRow"
      }, S.defaults = {
        cascadePanes: !1,
        clear: !0,
        collapse: !0,
        columns: [],
        container: function(p) {
          return p.table().container();
        },
        filterChanged: void 0,
        i18n: {
          clearMessage: "Clear All",
          clearPane: "&times;",
          collapse: {
            0: "SearchPanes",
            _: "SearchPanes (%d)"
          },
          collapseMessage: "Collapse All",
          count: "{total}",
          emptyMessage: "<em>Empty</em>",
          emptyPanes: "No SearchPanes",
          loadMessage: "Loading Search Panes...",
          showMessage: "Show All",
          title: "Filters Active - %d"
        },
        layout: "auto",
        order: [],
        panes: [],
        preSelect: [],
        viewCount: !0,
        viewTotal: !1
      }, S;
    }()
  ), l = window && window.__extends || /* @__PURE__ */ function() {
    var S = function(p, g) {
      return S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(P, E) {
        P.__proto__ = E;
      } || function(P, E) {
        for (var O in E) E.hasOwnProperty(O) && (P[O] = E[O]);
      }, S(p, g);
    };
    return function(p, g) {
      S(p, g);
      function P() {
        this.constructor = p;
      }
      p.prototype = g === null ? Object.create(g) : (P.prototype = g.prototype, new P());
    };
  }(), U = (
    /** @class */
    function(S) {
      l(p, S);
      function p(g, P, E) {
        E === void 0 && (E = !1);
        var O = this, H;
        P.cascadePanes && P.viewTotal ? H = k : P.cascadePanes ? H = N : P.viewTotal && (H = w), O = S.call(this, g, P, E, H) || this;
        var B = O.s.dt, Y = B.state.loaded(), z = function() {
          return O._initSelectionListeners(!0, Y && Y.searchPanes && Y.searchPanes.selectionList ? Y.searchPanes.selectionList : O.c.preSelect);
        };
        return B.settings()[0]._bInitComplete ? z() : B.off("init.dtsps").on("init.dtsps", z), O;
      }
      return p.prototype._initSelectionListeners = function(g, P) {
        g === void 0 && (g = !0), P === void 0 && (P = []), g && (this.s.selectionList = P);
        for (var E = 0, O = this.s.panes; E < O.length; E++) {
          var H = O[E];
          H.s.displayed && H.s.dtPane.off("select.dtsp").on("select.dtsp", this._update(H)).off("deselect.dtsp").on("deselect.dtsp", this._updateTimeout(H));
        }
        this.s.dt.off("draw.dtsps").on("draw.dtsps", this._update()), this._updateSelectionList();
      }, p.prototype._serverTotals = function() {
        for (var g = 0, P = this.s.panes; g < P.length; g++) {
          var E = P[g];
          if (E.s.colOpts.show) {
            var O = this.s.dt.column(E.s.index).dataSrc(), H = !0;
            if (this.s.serverData.searchPanes.options[O])
              for (var B = 0, Y = this.s.serverData.searchPanes.options[O]; B < Y.length; B++) {
                var z = Y[B];
                if (z.total !== z.count) {
                  H = !1;
                  break;
                }
              }
            E.s.filteringActive = !H, E._serverPopulate(this.s.serverData);
          }
        }
      }, p.prototype._stateLoadListener = function() {
        var g = this, P = function(E, O, H) {
          if (H.searchPanes !== void 0) {
            if (g.s.selectionList = H.searchPanes.selectionList ? H.searchPanes.selectionList : [], H.searchPanes.panes)
              for (var B = 0, Y = H.searchPanes.panes; B < Y.length; B++)
                for (var z = Y[B], G = 0, ee = g.s.panes; G < ee.length; G++) {
                  var oe = ee[G];
                  z.id === oe.s.index && oe.s.dtPane && (oe.dom.searchBox.val(z.searchTerm), oe.s.dtPane.order(z.order));
                }
            g._updateSelectionList();
          }
        };
        this.s.dt.off("stateLoadParams.dtsps", P).on("stateLoadParams.dtsps", P);
      }, p.prototype._updateSelection = function() {
      }, p.prototype._update = function(g) {
        var P = this;
        return g === void 0 && (g = void 0), function() {
          g && clearTimeout(g.s.deselectTimeout), P._updateSelectionList(g);
        };
      }, p.prototype._updateTimeout = function(g) {
        var P = this;
        return g === void 0 && (g = void 0), function() {
          return g ? g.s.deselectTimeout = setTimeout(function() {
            return P._updateSelectionList(g);
          }, 50) : P._updateSelectionList();
        };
      }, p.prototype._updateSelectionList = function(g) {
        if (g === void 0 && (g = void 0), this.s.pagingST) {
          this.s.pagingST = !1;
          return;
        } else if (this.s.updating || g && g.s.serverSelecting)
          return;
        if (g !== void 0) {
          this.s.dt.page.info().serverSide && g._updateSelection();
          var P = g.s.dtPane.rows({ selected: !0 }).data().toArray().map(function(E) {
            return E.filter;
          });
          this.s.selectionList = this.s.selectionList.filter(function(E) {
            return E.column !== g.s.index;
          }), P.length > 0 ? (this.s.selectionList.push({
            column: g.s.index,
            rows: P
          }), g.dom.clear.removeClass(this.classes.disabledButton).removeAttr("disabled")) : g.dom.clear.addClass(this.classes.disabledButton).attr("disabled", "true"), this.s.dt.page.info().serverSide && this.s.dt.draw(!1);
        }
        this._remakeSelections(), this._updateFilterCount();
      }, p.prototype._remakeSelections = function() {
        var g, P;
        if (this.s.updating = !0, this.s.dt.page.info().serverSide) {
          this.s.selectionList.length > 0 && (P = this.s.panes[this.s.selectionList[this.s.selectionList.length - 1].column]);
          for (var Be = 0, et = this.s.panes; Be < et.length; Be++)
            g = et[Be], g.s.displayed && (!P || g.s.index !== P.s.index) && g.updateRows();
        } else {
          var E = this.s.selectionList, O = !1;
          this.clearSelections(), this.s.dt.draw(!1), this.s.dt.rows().toArray()[0].length > this.s.dt.rows({ search: "applied" }).toArray()[0].length && (O = !0), this.s.selectionList = E;
          for (var H = 0, B = this.s.panes; H < B.length; H++)
            P = B[H], P.s.displayed && (P.s.filteringActive = O, P.updateRows());
          for (var Y = 0, z = this.s.selectionList; Y < z.length; Y++) {
            var G = z[Y];
            P = null;
            for (var ee = 0, oe = this.s.panes; ee < oe.length; ee++) {
              var he = oe[ee];
              if (he.s.index === G.column) {
                P = he;
                break;
              }
            }
            if (P.s.dtPane) {
              for (var fe = P.s.dtPane.rows().indexes().toArray(), ce = 0; ce < G.rows.length; ce++) {
                for (var ge = !1, _e = 0, Oe = fe; _e < Oe.length; _e++) {
                  var Le = Oe[_e], rt = P.s.dtPane.row(Le), Ue = rt.data();
                  G.rows[ce] === Ue.filter && (rt.select(), ge = !0);
                }
                ge || (G.rows.splice(ce, 1), ce--);
              }
              if (P.s.selections = G.rows, G.rows.length !== 0) {
                this.s.dt.draw();
                for (var Re = !1, Ce = 0, dt = 0, Ht = 0, xt = 0, qt = this.s.panes; xt < qt.length; xt++)
                  g = qt[xt], g.s.dtPane && (Ce += g.getPaneCount(), Ce > dt && (Ht++, dt = Ce));
                Re = Ce > 0;
                for (var Fe = 0, ht = this.s.panes; Fe < ht.length; Fe++)
                  g = ht[Fe], g.s.displayed && (O || P.s.index !== g.s.index || !Re ? g.s.filteringActive = Re || O : Ht === 1 && (g.s.filteringActive = !1), g.s.index !== P.s.index && g.updateRows());
              }
            }
          }
          this.s.dt.draw(!1);
        }
        this.s.updating = !1;
      }, p;
    }(Z)
  );
  /*! SearchPanes 2.3.5
   * © SpryMedia Ltd - datatables.net/license
   */
  n(yt), I(yt), m(yt), A(yt), X(yt);
  var ne = yt.fn.dataTable;
  ne.SearchPanes = Z, ie.SearchPanes = Z, ne.SearchPanesST = U, ie.SearchPanesST = U, ne.SearchPane = i, ie.SearchPane = i, ne.SearchPaneViewTotal = w, ie.SearchPaneViewTotal = w, ne.SearchPaneCascade = N, ie.SearchPaneCascade = N, ne.SearchPaneCascadeViewTotal = k, ie.SearchPaneCascadeViewTotal = k;
  var K = yt.fn.dataTable.Api.register;
  K("searchPanes()", function() {
    return this;
  }), K("searchPanes.clearSelections()", function() {
    return this.iterator("table", function(S) {
      S._searchPanes && S._searchPanes.clearSelections();
    });
  }), K("searchPanes.rebuildPane()", function(S, p) {
    return this.iterator("table", function(g) {
      g._searchPanes && g._searchPanes.rebuild(S, p);
    });
  }), K("searchPanes.resizePanes()", function() {
    var S = this.context[0];
    return S._searchPanes ? S._searchPanes.resizePanes() : null;
  }), K("searchPanes.container()", function() {
    var S = this.context[0];
    return S._searchPanes ? S._searchPanes.getNode() : null;
  }), ie.ext.buttons.searchPanesClear = {
    action: function(S, p) {
      p.searchPanes.clearSelections();
    },
    text: "Clear Panes"
  }, ie.ext.buttons.searchPanes = {
    action: function(S, p, g, P) {
      var E = this, O = this;
      P._panes ? (this.popover(P._panes.getNode(), {
        align: "container",
        span: "container"
      }), P._panes.rebuild(void 0, !0)) : (this.processing(!0), setTimeout(function() {
        V(p, g, P), E.popover(P._panes.getNode(), {
          align: "container",
          span: "container"
        }), P._panes.rebuild(void 0, !0), yt("table.dataTable", P._panes.getNode()).DataTable().columns.adjust(), O.processing(!1);
      }, 10));
    },
    init: function(S, p, g) {
      S.button(p).text(g.text || S.i18n("searchPanes.collapse", "SearchPanes", 0)), (S.init().stateSave || g.delayInit === !1) && V(S, p, g);
    },
    config: {},
    text: "",
    delayInit: !0
  };
  function V(S, p, g) {
    var P = yt.extend({
      filterChanged: function(O) {
        S.button(p).text(S.i18n("searchPanes.collapse", S.context[0].oLanguage.searchPanes !== void 0 ? S.context[0].oLanguage.searchPanes.collapse : S.context[0]._searchPanes.c.i18n.collapse, O));
      }
    }, g.config), E = P && (P.cascadePanes || P.viewTotal) ? new ie.SearchPanesST(S, P) : new ie.SearchPanes(S, P);
    S.button(p).text(g.text || S.i18n("searchPanes.collapse", E.c.i18n.collapse, 0)), g._panes = E;
  }
  function te(S, p, g) {
    p === void 0 && (p = null), g === void 0 && (g = !1);
    var P = new ne.Api(S), E = p || P.init().searchPanes || ne.defaults.searchPanes, O = E && (E.cascadePanes || E.viewTotal) ? new U(P, E, g) : new Z(P, E, g), H = O.getNode();
    return H;
  }
  yt(document).on("preInit.dt.dtsp", function(S, p) {
    S.namespace === "dt" && (p.oInit.searchPanes || ie.defaults.searchPanes) && (p._searchPanes || te(p, null, !0));
  });
})();
/*! Bootstrap 5 integration for DataTables' SearchPanes
 * © SpryMedia Ltd - datatables.net/license
 */
let ka = Pt;
ka.extend(!0, ie.SearchPane.classes, {
  buttonGroup: "btn-group",
  disabledButton: "disabled",
  narrow: "col",
  pane: {
    container: "table"
  },
  paneButton: "btn btn-subtle",
  pill: "badge rounded-pill bg-secondary",
  search: "form-control search",
  table: "table table-sm table-borderless",
  topRow: "dtsp-topRow"
});
ka.extend(!0, ie.SearchPanes.classes, {
  clearAll: "dtsp-clearAll btn btn-subtle",
  collapseAll: "dtsp-collapseAll btn btn-subtle",
  container: "dtsp-searchPanes",
  disabledButton: "disabled",
  panes: "dtsp-panes dtsp-panesContainer",
  search: ie.SearchPane.classes.search,
  showAll: "dtsp-showAll btn btn-subtle",
  title: "dtsp-title",
  titleRow: "dtsp-titleRow"
});
/*! Select for DataTables 2.1.0
 * © SpryMedia Ltd - datatables.net/license/mit
 */
let Ze = Pt;
ie.select = {};
ie.select.classes = {
  checkbox: "dt-select-checkbox"
};
ie.select.version = "2.1.0";
ie.select.init = function(e) {
  var t = e.settings()[0];
  if (!ie.versionCheck("2"))
    throw "Warning: Select requires DataTables 2 or newer";
  if (!t._select) {
    var n = e.state.loaded(), i = function(k, q, j) {
      if (!(j === null || j.select === void 0)) {
        if (e.rows({ selected: !0 }).any() && e.rows().deselect(), j.select.rows !== void 0 && e.rows(j.select.rows).select(), e.columns({ selected: !0 }).any() && e.columns().deselect(), j.select.columns !== void 0 && e.columns(j.select.columns).select(), e.cells({ selected: !0 }).any() && e.cells().deselect(), j.select.cells !== void 0)
          for (var I = 0; I < j.select.cells.length; I++)
            e.cell(j.select.cells[I].row, j.select.cells[I].column).select();
        e.state.save();
      }
    };
    e.on("stateSaveParams", function(k, q, j) {
      j.select = {}, j.select.rows = e.rows({ selected: !0 }).ids(!0).toArray(), j.select.columns = e.columns({ selected: !0 })[0], j.select.cells = e.cells({ selected: !0 })[0].map(function(I) {
        return { row: e.row(I.row).id(!0), column: I.column };
      });
    }).on("stateLoadParams", i).one("init", function() {
      i(void 0, void 0, n);
    });
    var a = t.oInit.select, f = ie.defaults.select, u = a === void 0 ? f : a, v = "row", m = "api", w = !1, y = !0, x = null, A = !0, N = "td, th", F = "selected", _ = !0, X = !1;
    t._select = {
      infoEls: []
    }, u === !0 ? (m = "os", X = !0) : typeof u == "string" ? (m = u, X = !0) : Ze.isPlainObject(u) && (u.blurable !== void 0 && (w = u.blurable), u.toggleable !== void 0 && (y = u.toggleable), u.info !== void 0 && (A = u.info), u.items !== void 0 && (v = u.items), u.style !== void 0 ? (m = u.style, X = !0) : (m = "os", X = !0), u.selector !== void 0 && (N = u.selector), u.className !== void 0 && (F = u.className), u.headerCheckbox !== void 0 && (_ = u.headerCheckbox), u.selectable !== void 0 && (x = u.selectable)), e.select.selector(N), e.select.items(v), e.select.style(m), e.select.blurable(w), e.select.toggleable(y), e.select.info(A), e.select.selectable(x), t._select.className = F, !X && Ze(e.table().node()).hasClass("selectable") && e.select.style("os"), (_ || _ === "select-page" || _ === "select-all") && e.ready(function() {
      Wf(e, _);
    });
  }
};
function Da(e) {
  var t = ie.select.classes.checkbox;
  return e ? t.replace(/ /g, ".") : t;
}
function Uf(e) {
  return e.mRender && e.mRender._name === "selectCheckbox";
}
function Wf(e, t) {
  var n = e.settings()[0], i = n.aoColumns;
  e.columns().iterator("column", function(a, f) {
    var u = i[f];
    if (Uf(u)) {
      var v = e.column(f).header();
      if (!Ze("input", v).length) {
        var m = Ze("<input>").attr({
          class: Da(!0),
          type: "checkbox",
          "aria-label": e.i18n("select.aria.headerCheckbox") || "Select all rows"
        }).appendTo(v).on("change", function() {
          this.checked ? t == "select-page" ? e.rows({ page: "current" }).select() : e.rows({ search: "applied" }).select() : t == "select-page" ? e.rows({ page: "current", selected: !0 }).deselect() : e.rows({ selected: !0 }).deselect();
        }).on("click", function(w) {
          w.stopPropagation();
        });
        e.on("draw select deselect", function(w, y, x) {
          if (x === "row" || !x) {
            var A = Vf(e, t);
            A.search && A.search <= A.count && A.search === A.available ? m.prop("checked", !0).prop("indeterminate", !1) : A.search === 0 && A.count === 0 ? m.prop("checked", !1).prop("indeterminate", !1) : m.prop("checked", !1).prop("indeterminate", !0);
          }
        });
      }
    }
  });
}
function Vf(e, t) {
  var n = e.settings()[0], i = n._select.selectable, a = 0, f = t == "select-page" ? e.rows({ page: "current", selected: !0 }).count() : e.rows({ selected: !0 }).count(), u = t == "select-page" ? e.rows({ page: "current", selected: !0 }).count() : e.rows({ search: "applied", selected: !0 }).count();
  if (!i)
    a = t == "select-page" ? e.rows({ page: "current" }).count() : e.rows({ search: "applied" }).count();
  else
    for (var v = t == "select-page" ? e.rows({ page: "current" }).indexes() : e.rows({ search: "applied" }).indexes(), m = 0; m < v.length; m++) {
      var w = n.aoData[v[m]], y = i(w._aData, w.nTr, v[m]);
      y && a++;
    }
  return {
    available: a,
    count: f,
    search: u
  };
}
function Kf(e, t) {
  {
    var n = new ie.Api(e);
    n.rows({ selected: !0 }).deselect(), n.columns({ selected: !0 }).deselect(), n.cells({ selected: !0 }).deselect();
  }
}
Ze.each(
  [
    { type: "row", prop: "aoData" },
    { type: "column", prop: "aoColumns" }
  ],
  function(e, t) {
    ie.ext.selector[t.type].push(function(n, i, a) {
      var f = i.selected, u, v = [];
      if (f !== !0 && f !== !1)
        return a;
      for (var m = 0, w = a.length; m < w; m++)
        u = n[t.prop][a[m]], u && (f === !0 && u._select_selected === !0 || f === !1 && !u._select_selected) && v.push(a[m]);
      return v;
    });
  }
);
function ir(e, t) {
  return function(n) {
    return n.i18n("buttons." + e, t);
  };
}
function ss(e) {
  var t = e._eventNamespace;
  return "draw.dt.DT" + t + " select.dt.DT" + t + " deselect.dt.DT" + t;
}
function Xf(e, t) {
  return !!(t.limitTo.indexOf("rows") !== -1 && e.rows({ selected: !0 }).any() || t.limitTo.indexOf("columns") !== -1 && e.columns({ selected: !0 }).any() || t.limitTo.indexOf("cells") !== -1 && e.cells({ selected: !0 }).any());
}
var is = 0;
Ze.extend(ie.ext.buttons, {
  selected: {
    text: ir("selected", "Selected"),
    className: "buttons-selected",
    limitTo: ["rows", "columns", "cells"],
    init: function(e, t, n) {
      var i = this;
      n._eventNamespace = ".select" + is++, e.on(ss(n), function() {
        i.enable(Xf(e, n));
      }), this.disable();
    },
    destroy: function(e, t, n) {
      e.off(n._eventNamespace);
    }
  },
  selectedSingle: {
    text: ir("selectedSingle", "Selected single"),
    className: "buttons-selected-single",
    init: function(e, t, n) {
      var i = this;
      n._eventNamespace = ".select" + is++, e.on(ss(n), function() {
        var a = e.rows({ selected: !0 }).flatten().length + e.columns({ selected: !0 }).flatten().length + e.cells({ selected: !0 }).flatten().length;
        i.enable(a === 1);
      }), this.disable();
    },
    destroy: function(e, t, n) {
      e.off(n._eventNamespace);
    }
  },
  selectAll: {
    text: ir("selectAll", "Select all"),
    className: "buttons-select-all",
    action: function(e, t, n, i) {
      var a = this.select.items(), f = i.selectorModifier;
      f ? (typeof f == "function" && (f = f.call(t, e, t, n, i)), this[a + "s"](f).select()) : this[a + "s"]().select();
    }
    // selectorModifier can be specified
  },
  selectNone: {
    text: ir("selectNone", "Deselect all"),
    className: "buttons-select-none",
    action: function() {
      Kf(this.settings()[0]);
    },
    init: function(e, t, n) {
      var i = this;
      n._eventNamespace = ".select" + is++, e.on(ss(n), function() {
        var a = e.rows({ selected: !0 }).flatten().length + e.columns({ selected: !0 }).flatten().length + e.cells({ selected: !0 }).flatten().length;
        i.enable(a > 0);
      }), this.disable();
    },
    destroy: function(e, t, n) {
      e.off(n._eventNamespace);
    }
  },
  showSelected: {
    text: ir("showSelected", "Show only selected"),
    className: "buttons-show-selected",
    action: function(e, t) {
      if (t.search.fixed("dt-select"))
        t.search.fixed("dt-select", null), this.active(!1);
      else {
        var n = t.settings()[0].aoData;
        t.search.fixed("dt-select", function(i, a, f) {
          return n[f]._select_selected;
        }), this.active(!0);
      }
      t.draw();
    }
  }
});
Ze.each(["Row", "Column", "Cell"], function(e, t) {
  var n = t.toLowerCase();
  ie.ext.buttons["select" + t + "s"] = {
    text: ir("select" + t + "s", "Select " + n + "s"),
    className: "buttons-select-" + n + "s",
    action: function() {
      this.select.items(n);
    },
    init: function(i) {
      var a = this;
      this.active(i.select.items() === n), i.on("selectItems.dt.DT", function(f, u, v) {
        a.active(v === n);
      });
    }
  };
});
Ze.extend(!0, ie.defaults.oLanguage, {
  select: {
    aria: {
      rowCheckbox: "Select row"
    }
  }
});
ie.render.select = function(e, t) {
  var n = e ? ie.util.get(e) : null, i = t ? ie.util.get(t) : null, a = function(f, u, v, m) {
    var w = m.settings.aoData[m.row], y = w._select_selected, x = m.settings.oLanguage.select.aria.rowCheckbox, A = m.settings._select.selectable;
    if (u === "display") {
      if (A) {
        var N = A(v, w.nTr, m.row);
        if (N === !1)
          return "";
      }
      return Ze("<input>").attr({
        "aria-label": x,
        class: Da(),
        name: i ? i(v) : null,
        type: "checkbox",
        value: n ? n(v) : null,
        checked: y
      }).on("input", function(F) {
        F.preventDefault(), this.checked = Ze(this).closest("tr").hasClass("selected");
      })[0];
    } else {
      if (u === "type")
        return "select-checkbox";
      if (u === "filter")
        return "";
    }
    return y ? "X" : "";
  };
  return a._name = "selectCheckbox", a;
};
ie.ext.order["select-checkbox"] = function(e, t) {
  return this.api().column(t, { order: "index" }).nodes().map(function(n) {
    return e._select.items === "row" ? Ze(n).parent().hasClass(e._select.className).toString() : e._select.items === "cell" ? Ze(n).hasClass(e._select.className).toString() : !1;
  });
};
Ze.fn.DataTable.select = ie.select;
Ze(document).on("i18n.dt.dtSelect preInit.dt.dtSelect", function(e, t) {
  e.namespace;
});
/*! Bootstrap 5 styling wrapper for Select
 * © SpryMedia Ltd - datatables.net/license
 */
ie.select.classes.checkbox = "form-check-input";
const zf = { class: "datatable-wrapper" }, Gf = { class: "card card-datatable shadow-sm" }, Qf = {
  key: 0,
  class: "card-header shadow-sm bg-body"
}, Jf = { class: "nav nav-pills card-header-tabs" }, Yf = { class: "nav-item" }, Zf = ["aria-current"], ed = ["onClick"], td = { class: "card-body fanum" }, ad = {
  __name: "DataTable",
  props: {
    options: { type: Object, required: !1, default: () => ({}) },
    batches: { type: Array, default: () => [] },
    tabs: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] }
  },
  emits: ["add", "batch", "delete", "clickRow", "ready"],
  setup(e, { expose: t, emit: n }) {
    io.use(ie);
    const i = e, a = n, { proxy: f } = fo(), u = Pe(null), v = Pe(null), m = Pe(null);
    let w = null;
    const y = Pe({
      language: {},
      rowGroup: !1,
      responsive: !0,
      ...i.options,
      buttons: [
        ...i.options.buttons || [],
        {
          text: '<i class="fa-light fa-arrows-rotate lh-sm"></i>',
          className: "rounded-5 ms-1 datatable-btn-reload",
          action: (j, I) => I.ajax.reload()
        }
      ]
    }), x = pe(() => new ie(ie.tables()[0]));
    function A() {
      m.value && m.value.onDeselect && m.value.onDeselect(x.value), m.value = null, x.value.state.clear(), x.value.columns().search("").draw();
    }
    function N(j = null) {
      m.value && m.value.onDeselect && m.value.onDeselect(x.value), m.value = j, j.onSelect && j.onSelect(x.value), j.query && j.query.forEach((I) => {
        F(I.column, I.value);
      });
    }
    function F(j, I = null) {
      isNaN(j) ? y.value.columns.forEach((Z, l) => {
        Z.name === j && x.value.column(l + 1).search(I).draw();
      }) : x.value.column(j).search(I).draw();
    }
    function _(j) {
      j.preventDefault();
      const I = x.value.rows({ selected: !0 })[0].map((K) => {
        const V = x.value.row(K);
        return V.data().id || V.id();
      });
      if (!I) return !1;
      const l = document.querySelector(".datatable-wrapper .batch").querySelector("select");
      if (!l.selectedIndex) return !1;
      const U = i.batches[l.selectedIndex - 1];
      if (!U) return !1;
      if (confirm("آیا از انجام عملیات دسته جمعی روی موارد انتخاب شده مطمئن هستید؟ پس از انجام امکان بازگردانی وجود نخواهد داشت.") && U.url) {
        const K = new URL(U.url);
        I.forEach((V) => {
          K.searchParams.append("id[]", V);
        }), be.visit(K, {
          method: U.method || "GET",
          data: {
            id: I
          }
        });
      }
      l.value = "";
    }
    function X() {
      x.value.ajax.reload();
    }
    function k(j) {
      j.stopPropagation(), j.target.checked ? x.value.rows().select() : x.value.rows().deselect();
    }
    function q(j) {
      j.preventDefault(), confirm("این عملیات غیر قابل بازیابی خواهد بود. آیا از انجام این عملیات اطمینان دارید؟") && be.get(j.target.getAttribute("href"));
    }
    return Ul(() => {
      y.value.searchPanes && y.value.buttons && !y.value.buttons.filter((j) => j.extend === "searchPanes").length && y.value.buttons.push({
        text: "فیلتر ها",
        className: "rounded-4 ms-2",
        action: function() {
          document.querySelector(".datatable-search-panes-collapse").classList.toggle("show");
        }
      });
    }), lr(() => {
      if (u.value) {
        const I = document.querySelector(".batch");
        I.innerHTML = u.value.$el.outerHTML, u.value.$el.remove(), I.querySelector(".batch-btn").addEventListener("click", _);
      }
      x.value.on("draw", () => {
        document.querySelectorAll('.datatable a[data-click="confirm"]').forEach((I) => {
          I.addEventListener("click", q);
        });
      }), x.value.on("destroy", () => {
        document.querySelectorAll('.datatable a[data-click="confirm"]').forEach((I) => {
          I.removeEventListener("click", q);
        });
      }), x.value.on("draw", (I) => {
        w && (w.checked = !1), a("ready", I);
      });
      const j = document.querySelector(
        "table.dataTable.datatable-selectable.datatable-selectable-multi thead tr th:first-child"
      );
      j && (w = document.createElement("input"), w.name = "selectAllCheckbox", w.type = "checkbox", w.value = "yes", j.prepend(w), w.addEventListener("click", k)), document.addEventListener("inertia:finish", X);
    }), mn(() => {
      var j;
      document.removeEventListener("inertia:finish", X), (j = document.querySelector(".batch .batch-btn")) == null || j.removeEventListener("click", _), w == null || w.removeEventListener("click", k);
    }), t({
      table: x,
      resetTabFilter: A,
      tabFilter: N,
      setColumnFilter: F
    }), (j, I) => {
      var Z, l, U, ne, K;
      return Nt(), Mt("div", zf, [
        e.batches && e.batches.length ? (Nt(), Wl(Rf, {
          key: 0,
          options: e.batches,
          ref_key: "dropdown",
          ref: u
        }, null, 8, ["options"])) : _i("", !0),
        ct("div", Gf, [
          e.tabs && e.tabs.length ? (Nt(), Mt("div", Qf, [
            ct("ul", Jf, [
              ct("li", Yf, [
                ct("button", {
                  type: "button",
                  onClick: A,
                  class: Un(["nav-link", { active: !m.value }]),
                  "aria-current": !m.value
                }, "همه موارد ", 10, Zf)
              ]),
              (Nt(!0), Mt(or, null, co(e.tabs, (V) => (Nt(), Mt("li", {
                class: "nav-item",
                key: V.name
              }, [
                ct("button", {
                  type: "button",
                  onClick: (te) => N(V),
                  class: Un(["nav-link", { active: m.value && m.value.name === V.name }])
                }, uo(V.title), 11, ed)
              ]))), 128))
            ])
          ])) : _i("", !0),
          ct("div", td, [
            Vl(ho(io), {
              ref_key: "datatable",
              ref: v,
              id: "datatable-table",
              options: y.value,
              extentions: ["buttons"],
              class: Un([[
                {
                  "datatable-selectable": !!((Z = e.options) != null && Z.select)
                },
                "table-hover",
                (U = (l = e.options) == null ? void 0 : l.select) != null && U.style ? "datatable-selectable-" + ((K = (ne = e.options) == null ? void 0 : ne.select) == null ? void 0 : K.style) : ""
              ], "table table-rounded table-borderless table-striped"])
            }, null, 8, ["options", "class"])
          ])
        ])
      ]);
    };
  }
};
export {
  ad as DataTable
};
