// deno-lint-ignore-file

// https://esm.sh/stable/preact@10.13.2/deno/preact.mjs
var w;
var d;
var j;
var ne;
var b;
var R;
var z;
var F;
var G;
var N = {};
var q = [];
var re = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function k(e, t) {
  for (var _ in t)
    e[_] = t[_];
  return e;
}
function J(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function oe(e, t, _) {
  var o, l, r, s = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? l = t[r] : s[r] = t[r];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? w.call(arguments, 2) : _), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      s[r] === void 0 && (s[r] = e.defaultProps[r]);
  return P(e, s, o, l, null);
}
function P(e, t, _, o, l) {
  var r = { type: e, props: t, key: _, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l ?? ++j };
  return l == null && d.vnode != null && d.vnode(r), r;
}
function W(e) {
  return e.children;
}
function T(e, t) {
  this.props = e, this.context = t;
}
function S(e, t) {
  if (t == null)
    return e.__ ? S(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var _; t < e.__k.length; t++)
    if ((_ = e.__k[t]) != null && _.__e != null)
      return _.__e;
  return typeof e.type == "function" ? S(e) : null;
}
function K(e) {
  var t, _;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((_ = e.__k[t]) != null && _.__e != null) {
        e.__e = e.__c.base = _.__e;
        break;
      }
    return K(e);
  }
}
function H(e) {
  (!e.__d && (e.__d = true) && b.push(e) && !L.__r++ || R !== d.debounceRendering) && ((R = d.debounceRendering) || z)(L);
}
function L() {
  var e, t, _, o, l, r, s, f;
  for (b.sort(F); e = b.shift(); )
    e.__d && (t = b.length, o = void 0, l = void 0, s = (r = (_ = e).__v).__e, (f = _.__P) && (o = [], (l = k({}, r)).__v = r.__v + 1, I(f, r, l, _.__n, f.ownerSVGElement !== void 0, r.__h != null ? [s] : null, o, s ?? S(r), r.__h), ee(o, r), r.__e != s && K(r)), b.length > t && b.sort(F));
  L.__r = 0;
}
function Q(e, t, _, o, l, r, s, f, p, a) {
  var n, h, u, i, c, x, v, y = o && o.__k || q, g = y.length;
  for (_.__k = [], n = 0; n < t.length; n++)
    if ((i = _.__k[n] = (i = t[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" ? P(null, i, null, null, i) : Array.isArray(i) ? P(W, { children: i }, null, null, null) : i.__b > 0 ? P(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null) {
      if (i.__ = _, i.__b = _.__b + 1, (u = y[n]) === null || u && i.key == u.key && i.type === u.type)
        y[n] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = y[h]) && i.key == u.key && i.type === u.type) {
            y[h] = void 0;
            break;
          }
          u = null;
        }
      I(e, i, u = u || N, l, r, s, f, p, a), c = i.__e, (h = i.ref) && u.ref != h && (v || (v = []), u.ref && v.push(u.ref, null, i), v.push(h, i.__c || c, i)), c != null ? (x == null && (x = c), typeof i.type == "function" && i.__k === u.__k ? i.__d = p = X(i, p, e) : p = Y(e, i, u, y, c, p), typeof _.type == "function" && (_.__d = p)) : p && u.__e == p && p.parentNode != e && (p = S(u));
    }
  for (_.__e = x, n = g; n--; )
    y[n] != null && (typeof _.type == "function" && y[n].__e != null && y[n].__e == _.__d && (_.__d = Z(o).nextSibling), _e(y[n], y[n]));
  if (v)
    for (n = 0; n < v.length; n++)
      te(v[n], v[++n], v[++n]);
}
function X(e, t, _) {
  for (var o, l = e.__k, r = 0; l && r < l.length; r++)
    (o = l[r]) && (o.__ = e, t = typeof o.type == "function" ? X(o, t, _) : Y(_, o, o, l, o.__e, t));
  return t;
}
function Y(e, t, _, o, l, r) {
  var s, f, p;
  if (t.__d !== void 0)
    s = t.__d, t.__d = void 0;
  else if (_ == null || l != r || l.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(l), s = null;
      else {
        for (f = r, p = 0; (f = f.nextSibling) && p < o.length; p += 1)
          if (f == l)
            break e;
        e.insertBefore(l, r), s = r;
      }
  return s !== void 0 ? s : l.nextSibling;
}
function Z(e) {
  var t, _, o;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((_ = e.__k[t]) && (o = Z(_)))
        return o;
  }
  return null;
}
function ie(e, t, _, o, l) {
  var r;
  for (r in _)
    r === "children" || r === "key" || r in t || M(e, r, null, _[r], o);
  for (r in t)
    l && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || _[r] === t[r] || M(e, r, t[r], _[r], o);
}
function $(e, t, _) {
  t[0] === "-" ? e.setProperty(t, _ ?? "") : e[t] = _ == null ? "" : typeof _ != "number" || re.test(t) ? _ : _ + "px";
}
function M(e, t, _, o, l) {
  var r;
  e:
    if (t === "style")
      if (typeof _ == "string")
        e.style.cssText = _;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            _ && t in _ || $(e.style, t, "");
        if (_)
          for (t in _)
            o && _[t] === o[t] || $(e.style, t, _[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = _, _ ? o || e.addEventListener(t, r ? V : B, r) : e.removeEventListener(t, r ? V : B, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (l)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = _ ?? "";
          break e;
        } catch {
        }
      typeof _ == "function" || (_ == null || _ === false && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, _));
    }
}
function B(e) {
  return this.l[e.type + false](d.event ? d.event(e) : e);
}
function V(e) {
  return this.l[e.type + true](d.event ? d.event(e) : e);
}
function I(e, t, _, o, l, r, s, f, p) {
  var a, n, h, u, i, c, x, v, y, g, E, C, O, A, U, m = t.type;
  if (t.constructor !== void 0)
    return null;
  _.__h != null && (p = _.__h, f = t.__e = _.__e, t.__h = null, r = [f]), (a = d.__b) && a(t);
  try {
    e:
      if (typeof m == "function") {
        if (v = t.props, y = (a = m.contextType) && o[a.__c], g = a ? y ? y.props.value : a.__ : o, _.__c ? x = (n = t.__c = _.__c).__ = n.__E : ("prototype" in m && m.prototype.render ? t.__c = n = new m(v, g) : (t.__c = n = new T(v, g), n.constructor = m, n.render = ue), y && y.sub(n), n.props = v, n.state || (n.state = {}), n.context = g, n.__n = o, h = n.__d = true, n.__h = [], n._sb = []), n.__s == null && (n.__s = n.state), m.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = k({}, n.__s)), k(n.__s, m.getDerivedStateFromProps(v, n.__s))), u = n.props, i = n.state, n.__v = t, h)
          m.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), n.componentDidMount != null && n.__h.push(n.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && v !== u && n.componentWillReceiveProps != null && n.componentWillReceiveProps(v, g), !n.__e && n.shouldComponentUpdate != null && n.shouldComponentUpdate(v, n.__s, g) === false || t.__v === _.__v) {
            for (t.__v !== _.__v && (n.props = v, n.state = n.__s, n.__d = false), n.__e = false, t.__e = _.__e, t.__k = _.__k, t.__k.forEach(function(D) {
              D && (D.__ = t);
            }), E = 0; E < n._sb.length; E++)
              n.__h.push(n._sb[E]);
            n._sb = [], n.__h.length && s.push(n);
            break e;
          }
          n.componentWillUpdate != null && n.componentWillUpdate(v, n.__s, g), n.componentDidUpdate != null && n.__h.push(function() {
            n.componentDidUpdate(u, i, c);
          });
        }
        if (n.context = g, n.props = v, n.__P = e, C = d.__r, O = 0, "prototype" in m && m.prototype.render) {
          for (n.state = n.__s, n.__d = false, C && C(t), a = n.render(n.props, n.state, n.context), A = 0; A < n._sb.length; A++)
            n.__h.push(n._sb[A]);
          n._sb = [];
        } else
          do
            n.__d = false, C && C(t), a = n.render(n.props, n.state, n.context), n.state = n.__s;
          while (n.__d && ++O < 25);
        n.state = n.__s, n.getChildContext != null && (o = k(k({}, o), n.getChildContext())), h || n.getSnapshotBeforeUpdate == null || (c = n.getSnapshotBeforeUpdate(u, i)), U = a != null && a.type === W && a.key == null ? a.props.children : a, Q(e, Array.isArray(U) ? U : [U], t, _, o, l, r, s, f, p), n.base = t.__e, t.__h = null, n.__h.length && s.push(n), x && (n.__E = n.__ = null), n.__e = false;
      } else
        r == null && t.__v === _.__v ? (t.__k = _.__k, t.__e = _.__e) : t.__e = se(_.__e, t, _, o, l, r, s, p);
    (a = d.diffed) && a(t);
  } catch (D) {
    t.__v = null, (p || r != null) && (t.__e = f, t.__h = !!p, r[r.indexOf(f)] = null), d.__e(D, t, _);
  }
}
function ee(e, t) {
  d.__c && d.__c(t, e), e.some(function(_) {
    try {
      e = _.__h, _.__h = [], e.some(function(o) {
        o.call(_);
      });
    } catch (o) {
      d.__e(o, _.__v);
    }
  });
}
function se(e, t, _, o, l, r, s, f) {
  var p, a, n, h = _.props, u = t.props, i = t.type, c = 0;
  if (i === "svg" && (l = true), r != null) {
    for (; c < r.length; c++)
      if ((p = r[c]) && "setAttribute" in p == !!i && (i ? p.localName === i : p.nodeType === 3)) {
        e = p, r[c] = null;
        break;
      }
  }
  if (e == null) {
    if (i === null)
      return document.createTextNode(u);
    e = l ? document.createElementNS("http://www.w3.org/2000/svg", i) : document.createElement(i, u.is && u), r = null, f = false;
  }
  if (i === null)
    h === u || f && e.data === u || (e.data = u);
  else {
    if (r = r && w.call(e.childNodes), a = (h = _.props || N).dangerouslySetInnerHTML, n = u.dangerouslySetInnerHTML, !f) {
      if (r != null)
        for (h = {}, c = 0; c < e.attributes.length; c++)
          h[e.attributes[c].name] = e.attributes[c].value;
      (n || a) && (n && (a && n.__html == a.__html || n.__html === e.innerHTML) || (e.innerHTML = n && n.__html || ""));
    }
    if (ie(e, u, h, l, f), n)
      t.__k = [];
    else if (c = t.props.children, Q(e, Array.isArray(c) ? c : [c], t, _, o, l && i !== "foreignObject", r, s, r ? r[0] : _.__k && S(_, 0), f), r != null)
      for (c = r.length; c--; )
        r[c] != null && J(r[c]);
    f || ("value" in u && (c = u.value) !== void 0 && (c !== e.value || i === "progress" && !c || i === "option" && c !== h.value) && M(e, "value", c, h.value, false), "checked" in u && (c = u.checked) !== void 0 && c !== e.checked && M(e, "checked", c, h.checked, false));
  }
  return e;
}
function te(e, t, _) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    d.__e(o, _);
  }
}
function _e(e, t, _) {
  var o, l;
  if (d.unmount && d.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || te(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        d.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (l = 0; l < o.length; l++)
      o[l] && _e(o[l], t, _ || typeof e.type != "function");
  _ || e.__e == null || J(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ue(e, t, _) {
  return this.constructor(e, _);
}
function ce(e, t, _) {
  var o, l, r;
  d.__ && d.__(e, t), l = (o = typeof _ == "function") ? null : _ && _.__k || t.__k, r = [], I(t, e = (!o && _ || t).__k = oe(W, null, [e]), l || N, N, t.ownerSVGElement !== void 0, !o && _ ? [_] : l ? null : t.firstChild ? w.call(t.childNodes) : null, r, !o && _ ? _ : l ? l.__e : t.firstChild, o), ee(r, e);
}
w = q.slice, d = { __e: function(e, t, _, o) {
  for (var l, r, s; t = t.__; )
    if ((l = t.__c) && !l.__)
      try {
        if ((r = l.constructor) && r.getDerivedStateFromError != null && (l.setState(r.getDerivedStateFromError(e)), s = l.__d), l.componentDidCatch != null && (l.componentDidCatch(e, o || {}), s = l.__d), s)
          return l.__E = l;
      } catch (f) {
        e = f;
      }
  throw e;
} }, j = 0, ne = function(e) {
  return e != null && e.constructor === void 0;
}, T.prototype.setState = function(e, t) {
  var _;
  _ = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e == "function" && (e = e(k({}, _), this.props)), e && k(_, e), e != null && this.__v && (t && this._sb.push(t), H(this));
}, T.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = true, e && this.__h.push(e), H(this));
}, T.prototype.render = W, b = [], z = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, F = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, L.__r = 0, G = 0;

// src/main.tsx
var app = /* @__PURE__ */ oe("h1", null, "Hello World!");
ce(app, document.body);
var cnt = 1;
var logger = document.getElementById("logger");
var btn = document.getElementById("btn");
btn.onclick = () => {
  log(`Click count = ${cnt++}  `);
};
var log = (what, whatElse = null, and = null) => {
  let text = `${what.padEnd(30, "-")} `;
  if (whatElse)
    text += `${whatElse} `;
  if (and)
    text += `${and}`;
  text += (/* @__PURE__ */ new Date()).toLocaleTimeString();
  logger.textContent = `${text}${"\n"}` + logger.textContent;
};
export {
  log
};
