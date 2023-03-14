"use strict"
var __defProp = Object.defineProperty
var __defNormalProp = (obj, key, value) =>
  key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : (obj[key] = value)
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value)
  return value
}
const siyuan = require("siyuan")
var __getOwnPropNames = Object.getOwnPropertyNames
var __require = /* @__PURE__ */ ((x) =>
  typeof require !== "undefined"
    ? require
    : typeof Proxy !== "undefined"
    ? new Proxy(x, {
        get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2],
      })
    : x)(function (x) {
  if (typeof require !== "undefined") return require.apply(this, arguments)
  throw new Error('Dynamic require of "' + x + '" is not supported')
})
var __commonJS = (cb, mod) =>
  function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports
  }
var X = Object.defineProperty
var J = (n, e, t) => (e in n ? X(n, e, { enumerable: true, configurable: true, writable: true, value: t }) : (n[e] = t))
var s = (n, e, t) => (J(n, typeof e != "symbol" ? e + "" : e, t), t)
var Q = Object.defineProperty
var ee = (n, e, t) =>
  e in n ? Q(n, e, { enumerable: true, configurable: true, writable: true, value: t }) : (n[e] = t)
var _ = (n, e, t) => (ee(n, typeof e != "symbol" ? e + "" : e, t), t)
var K =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {}
var P = {}
var te = {
  get exports() {
    return P
  },
  set exports(n) {
    P = n
  },
}
;(function (n) {
  ;(function (e, t) {
    n.exports ? (n.exports = t()) : (e.log = t())
  })(K, function () {
    var e = function () {},
      t = "undefined",
      r = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
      i = ["trace", "debug", "info", "warn", "error"]
    function o(l, m) {
      var L = l[m]
      if (typeof L.bind == "function") return L.bind(l)
      try {
        return Function.prototype.bind.call(L, l)
      } catch {
        return function () {
          return Function.prototype.apply.apply(L, [l, arguments])
        }
      }
    }
    function c() {
      console.log &&
        (console.log.apply
          ? console.log.apply(console, arguments)
          : Function.prototype.apply.apply(console.log, [console, arguments])),
        console.trace && console.trace()
    }
    function f(l) {
      return (
        l === "debug" && (l = "log"),
        typeof console === t
          ? false
          : l === "trace" && r
          ? c
          : console[l] !== void 0
          ? o(console, l)
          : console.log !== void 0
          ? o(console, "log")
          : e
      )
    }
    function h(l, m) {
      for (var L = 0; L < i.length; L++) {
        var p = i[L]
        this[p] = L < l ? e : this.methodFactory(p, l, m)
      }
      this.log = this.debug
    }
    function y(l, m, L) {
      return function () {
        typeof console !== t && (h.call(this, m, L), this[l].apply(this, arguments))
      }
    }
    function a(l, m, L) {
      return f(l) || y.apply(this, arguments)
    }
    function d(l, m, L) {
      var p = this,
        x
      m = m ?? "WARN"
      var w = "loglevel"
      typeof l == "string" ? (w += ":" + l) : typeof l == "symbol" && (w = void 0)
      function D(u) {
        var E = (i[u] || "silent").toUpperCase()
        if (!(typeof window === t || !w)) {
          try {
            window.localStorage[w] = E
            return
          } catch {}
          try {
            window.document.cookie = encodeURIComponent(w) + "=" + E + ";"
          } catch {}
        }
      }
      function U() {
        var u
        if (!(typeof window === t || !w)) {
          try {
            u = window.localStorage[w]
          } catch {}
          if (typeof u === t)
            try {
              var E = window.document.cookie,
                O = E.indexOf(encodeURIComponent(w) + "=")
              O !== -1 && (u = /^([^;]+)/.exec(E.slice(O))[1])
            } catch {}
          return p.levels[u] === void 0 && (u = void 0), u
        }
      }
      function F() {
        if (!(typeof window === t || !w)) {
          try {
            window.localStorage.removeItem(w)
            return
          } catch {}
          try {
            window.document.cookie = encodeURIComponent(w) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
          } catch {}
        }
      }
      ;(p.name = l),
        (p.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5,
        }),
        (p.methodFactory = L || a),
        (p.getLevel = function () {
          return x
        }),
        (p.setLevel = function (u, E) {
          if (
            (typeof u == "string" && p.levels[u.toUpperCase()] !== void 0 && (u = p.levels[u.toUpperCase()]),
            typeof u == "number" && u >= 0 && u <= p.levels.SILENT)
          ) {
            if (((x = u), E !== false && D(u), h.call(p, u, l), typeof console === t && u < p.levels.SILENT))
              return "No console available for logging"
          } else throw "log.setLevel() called with invalid level: " + u
        }),
        (p.setDefaultLevel = function (u) {
          ;(m = u), U() || p.setLevel(u, false)
        }),
        (p.resetLevel = function () {
          p.setLevel(m, false), F()
        }),
        (p.enableAll = function (u) {
          p.setLevel(p.levels.TRACE, u)
        }),
        (p.disableAll = function (u) {
          p.setLevel(p.levels.SILENT, u)
        })
      var S = U()
      S == null && (S = m), p.setLevel(S, false)
    }
    var g = new d(),
      v = {}
    g.getLogger = function (l) {
      if ((typeof l != "symbol" && typeof l != "string") || l === "")
        throw new TypeError("You must supply a name when creating a logger.")
      var m = v[l]
      return m || (m = v[l] = new d(l, g.getLevel(), g.methodFactory)), m
    }
    var C = typeof window !== t ? window.log : void 0
    return (
      (g.noConflict = function () {
        return typeof window !== t && window.log === g && (window.log = C), g
      }),
      (g.getLoggers = function () {
        return v
      }),
      (g.default = g),
      g
    )
  })
})(te)
var A = {}
var ne = {
  get exports() {
    return A
  },
  set exports(n) {
    A = n
  },
}
;(function (n) {
  ;(function (e, t) {
    n.exports ? (n.exports = t()) : (e.prefix = t(e))
  })(K, function (e) {
    var t = function (a) {
        for (var d = 1, g = arguments.length, v; d < g; d++)
          for (v in arguments[d]) Object.prototype.hasOwnProperty.call(arguments[d], v) && (a[v] = arguments[d][v])
        return a
      },
      r = {
        template: "[%t] %l:",
        levelFormatter: function (a) {
          return a.toUpperCase()
        },
        nameFormatter: function (a) {
          return a || "root"
        },
        timestampFormatter: function (a) {
          return a.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
        },
        format: void 0,
      },
      i,
      o = {},
      c = function (a) {
        if (!a || !a.getLogger) throw new TypeError("Argument is not a root logger")
        i = a
      },
      f = function (a, d) {
        if (!a || !a.setLevel) throw new TypeError("Argument is not a logger")
        var g = a.methodFactory,
          v = a.name || "",
          C = o[v] || o[""] || r
        function l(m, L, p) {
          var x = g(m, L, p),
            w = o[p] || o[""],
            D = w.template.indexOf("%t") !== -1,
            U = w.template.indexOf("%l") !== -1,
            F = w.template.indexOf("%n") !== -1
          return function () {
            for (var S = "", u = arguments.length, E = Array(u), O = 0; O < u; O++) E[O] = arguments[O]
            if (v || !o[p]) {
              var k = w.timestampFormatter(new Date()),
                j = w.levelFormatter(m),
                z = w.nameFormatter(p)
              w.format
                ? (S += w.format(j, z, k))
                : ((S += w.template),
                  D && (S = S.replace(/%t/, k)),
                  U && (S = S.replace(/%l/, j)),
                  F && (S = S.replace(/%n/, z))),
                E.length && typeof E[0] == "string" ? (E[0] = S + " " + E[0]) : E.unshift(S)
            }
            x.apply(void 0, E)
          }
        }
        return (
          o[v] || (a.methodFactory = l),
          (d = d || {}),
          d.template && (d.format = void 0),
          (o[v] = t({}, C, d)),
          a.setLevel(a.getLevel()),
          i ||
            a.warn(
              "It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"
            ),
          a
        )
      },
      h = {
        reg: c,
        apply: f,
      },
      y
    return (
      e &&
        ((y = e.prefix),
        (h.noConflict = function () {
          return e.prefix === h && (e.prefix = y), h
        })),
      h
    )
  })
})(ne)
var R = class {}
_(R, "LOG_LEVEL_KEY", "VITE_LOG_LEVEL"), _(R, "LOG_PREFIX_KEY", "VITE_LOG_PREFIX")
var T = /* @__PURE__ */ ((n) => (
  (n.LOG_LEVEL_DEBUG = "DEBUG"),
  (n.LOG_LEVEL_INFO = "INFO"),
  (n.LOG_LEVEL_WARN = "WARN"),
  (n.LOG_LEVEL_ERROR = "ERROR"),
  n
))(T || {})
function re() {
  const n = Error.prepareStackTrace
  Error.prepareStackTrace = (t, r) => r
  const e = new Error().stack.slice(1)
  return (Error.prepareStackTrace = n), e
}
var N = class {
  /**
   * 解析日志级别为枚举
   *
   * @param enumObj 枚举对象
   * @param value 配置的值
   */
  static stringToEnumValue(e, t) {
    return e[Object.keys(e).filter((r) => e[r].toString() === t)[0]]
  }
  /**
   * 获取配置的日志级别
   */
  static getEnvLevel(e) {
    if (!e) return
    const t = e.getEnvOrDefault(R.LOG_LEVEL_KEY, T.LOG_LEVEL_INFO),
      r = N.stringToEnumValue(T, t.toUpperCase())
    return (
      r ||
        console.warn(
          "[zhi-log] LOG_LEVEL is invalid in you .env file.Must be either debug, info, warn or error, fallback to default info level"
        ),
      r
    )
  }
  /**
   * 获取默认日志
   */
  static getEnvLogger(e) {
    if (e) return e.getEnv(R.LOG_PREFIX_KEY)
  }
}
var ie = class {
  constructor(e, t, r) {
    _(this, "consoleLogger", "console"),
      _(this, "stackSize", 1),
      _(this, "getLogger", (c) => {
        let f
        if (c) f = c
        else {
          const h = re(),
            y = []
          for (let a = 0; a < h.length; a++) {
            const d = h[a],
              g = d.getFileName() ?? "none"
            if (
              !g.includes(".ts") &&
              !g.includes(".js") &&
              !g.includes(".cjs") &&
              !g.includes(".mjs") &&
              !g.includes(".vue") &&
              !g.includes(".tsx")
            )
              continue
            if (a > this.stackSize - 1) break
            const v = g + "-" + d.getLineNumber() + ":" + d.getColumnNumber()
            y.push(v)
          }
          h.length > 0 && (f = y.join(" -> "))
        }
        return (!f || f.trim().length === 0) && (f = this.consoleLogger), P.getLogger(f)
      }),
      (this.stackSize = 1)
    let i
    e ? (i = e) : (i = N.getEnvLevel(r)), (i = i ?? T.LOG_LEVEL_INFO), P.setLevel(i)
    const o = {
      gray: (c) => c.toString(),
      green: (c) => c.toString(),
      yellow: (c) => c.toString(),
      red: (c) => c.toString(),
    }
    A.reg(P),
      A.apply(P, {
        format(c, f, h) {
          const y = ["[" + (t ?? N.getEnvLogger(r) ?? "zhi") + "]"]
          switch ((y.push(o.gray("[") + o.green(h).toString() + o.gray("]")), c)) {
            case T.LOG_LEVEL_DEBUG:
              y.push(o.gray(c.toUpperCase().toString()))
              break
            case T.LOG_LEVEL_INFO:
              y.push(o.green(c.toUpperCase().toString()))
              break
            case T.LOG_LEVEL_WARN:
              y.push(o.yellow(c.toUpperCase().toString()))
              break
            case T.LOG_LEVEL_ERROR:
              y.push(o.red(c.toUpperCase().toString()))
              break
          }
          return y.push(o.green(f).toString()), y.push(o.gray(":")), y.join(" ")
        },
      })
  }
  /**
   * 设置输出栈的深度，默认1
   *
   * @param stackSize 栈的深度
   */
  setStackSize(e) {
    this.stackSize = e ?? 1
  }
}
var oe = class {
  /**
   * 默认日志级别
   *
   * @param level - 可选，未设置默认INFO
   * @param sign - 可选前缀，默认zhi
   * @param env - 可选环境变量实例
   */
  constructor(e, t, r) {
    _(this, "logger"), (this.logger = new ie(e, t, r))
  }
  /**
   * 获取日志记录器
   *
   * @param loggerName - 日志记录器名称
   * @param stackSize - 打印栈的深度
   * @protected
   */
  getLogger(e, t) {
    return this.logger.setStackSize(t), this.logger.getLogger(e)
  }
}
var q = class extends oe {
  constructor(e, t, r) {
    super(e, t, r)
  }
  /**
   * 获取默认的日志记录器
   *
   * @param loggerName - 日志记录器名称
   * @param stackSize - 打印栈的深度
   */
  getLogger(e, t) {
    return super.getLogger(e, t)
  }
}
var W = class {
  /**
   * 默认日志记录器
   *
   * @param stackSize 栈的深度
   * @param env - 环境变量实例
   */
  static defaultLogger(e, t) {
    return W.customLogFactory(void 0, void 0, e).getLogger(void 0, t)
  }
  /**
   * 自定义日志工厂
   */
  static customLogFactory(e, t, r) {
    return new q(e, t, r)
  }
  /**
   * 自定义日志工厂，自定义前缀
   */
  static customSignLogFactory(e, t) {
    return new q(void 0, e, t)
  }
}
var Y = class {}
s(Y, "LOG_STACK_SIZE", 1)
var H = "1.0.10"
var se = class {
  constructor() {
    s(this, "VERSION")
    this.VERSION = H
  }
}
var ae = class {
  constructor() {
    s(this, "VERSION")
    this.VERSION = H
  }
}
var b = class {
  constructor() {
    s(this, "getQueryString", (e) => {
      if (!b.isInBrowser) return ""
      const r = window.location.search.substring(1).split("&")
      for (let i = 0; i < r.length; i++) {
        const o = r[i].split("=")
        if (o[0] === e) return o[1]
      }
      return ""
    })
  }
  /**
   * 检测是否运行在Chrome插件中
   */
  static isInChromeExtension() {
    return b.isInBrowser ? window.location.href.indexOf("chrome-extension://") > -1 : false
  }
}
var I = b
s(I, "isInBrowser", typeof window < "u"),
  s(I, "isElectron", () =>
    !b.isInBrowser || !window.navigator || !window.navigator.userAgent
      ? false
      : /Electron/.test(window.navigator.userAgent)
  ),
  s(I, "replaceUrlParam", (e, t, r) => {
    r == null && (r = "")
    const i = new RegExp("\\b(" + t + "=).*?(&|#|$)")
    return e.search(i) >= 0
      ? e.replace(i, "$1" + r + "$2")
      : ((e = e.replace(/[?#]$/, "")), e + (e.indexOf("?") > 0 ? "&" : "?") + t + "=" + r)
  }),
  s(I, "setUrlParameter", (e, t, r) =>
    b.isInBrowser
      ? e.includes(t)
        ? b.replaceUrlParam(e, t, r)
        : ((e += (e.match(/[?]/g) != null ? "&" : "?") + t + "=" + r), e)
      : ""
  ),
  s(I, "reloadTabPage", (e) => {
    setTimeout(function () {
      if (b.isInBrowser) {
        const t = window.location.href
        window.location.href = b.setUrlParameter(t, "tab", e)
      }
    }, 200)
  }),
  s(I, "reloadPage", () => {
    setTimeout(function () {
      b.isInBrowser && window.location.reload()
    }, 200)
  }),
  s(I, "reloadPageWithMessageCallback", (e, t) => {
    t && t(),
      setTimeout(function () {
        b.isInBrowser && window.location.reload()
      }, 200)
  })
var G = class {
  constructor() {
    s(this, "isInSiyuanWidget", () =>
      typeof window > "u"
        ? false
        : window.frameElement != null &&
          window.frameElement.parentElement != null &&
          window.frameElement.parentElement.parentElement != null &&
          window.frameElement.parentElement.parentElement.getAttribute("data-node-id") !== ""
    )
    s(this, "isInSiyuanNewWin", () => (typeof window > "u" ? false : typeof window.terwer < "u"))
    s(this, "isInSiyuanOrSiyuanNewWin", () => I.isElectron)
  }
  /**
   * 思源笔记 window 对象
   */
  siyuanWindow() {
    let e
    return (
      this.isInSiyuanWidget()
        ? (e = parent.window)
        : this.isInSiyuanNewWin() || typeof window < "u"
        ? (e = window)
        : (e = void 0),
      e
    )
  }
}
var le = class {
  constructor() {
    s(this, "serverApi")
    s(this, "clientApi")
    s(this, "siyuanUtil")
    ;(this.serverApi = new se()), (this.clientApi = new ae()), (this.siyuanUtil = new G())
  }
}
var ce = class {
  constructor() {
    s(this, "VERSION")
    this.VERSION = "1.0.0"
  }
}
var ue = class {
  /**
   * 格式化字符串
   *
   * @param str - 字符串，可用占位符，例如：test\{0\}str
   * @param args - 按占位符顺序排列的参数
   * @author terwer
   * @since 0.0.1
   */
  f(e, ...t) {
    let r = e
    for (let i = 0; i < t.length; i++) {
      const o = t[i]
      typeof o == "string" ? (r = r.replace(`{${i}}`, o)) : (r = r.replace(`{${i}}`, o.toString()))
    }
    return r
  }
}
var pe = class {
  constructor() {
    s(this, "TIME_SPLIT", " ")
    s(this, "formatIsoToZhDate", (e, t, r) => {
      if (!e) return ""
      let i = e
      const o = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.\d{3})Z$/gm,
        c = i.match(o)
      if (c == null) return e
      for (let f = 0; f < c.length; f++) {
        const h = c[f]
        let y = h
        t && (y = this.addHoursToDate(new Date(h), 8).toISOString())
        const a = y.split("T"),
          d = a[0],
          g = a[1].split(".")[0]
        let v = d + this.TIME_SPLIT + g
        r && (v = d), (i = i.replace(h, v))
      }
      return i
    })
  }
  /**
   * 给日期添加小时
   *
   * @param date - Date
   * @param numOfHours - 数字
   * @author terwer
   * @since 1.0.0
   */
  addHoursToDate(e, t) {
    return e.setTime(e.getTime() + t * 60 * 60 * 1e3), e
  }
  /**
   * 当前日期时间完整格式，格式：2023-03-10 02:03:43
   */
  nowZh() {
    return this.formatIsoToZhDate(new Date().toISOString())
  }
  /**
   * 当前日期，格式：2023-03-10
   */
  nowDateZh() {
    return this.formatIsoToZhDate(new Date().toISOString(), true, true)
  }
  /**
   * 当前时间，格式：02:03:43
   */
  nowTimeZh() {
    return this.formatIsoToZhDate(new Date().toISOString(), true).split(this.TIME_SPLIT)[1]
  }
}
var V = (n, e) => {
  const t = Z(n),
    r = Z(e),
    i = t.pop(),
    o = r.pop(),
    c = $(t, r)
  return c !== 0 ? c : i && o ? $(i.split("."), o.split(".")) : i || o ? (i ? -1 : 1) : 0
}
var he =
  /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i
var Z = (n) => {
  if (typeof n != "string") throw new TypeError("Invalid argument expected string")
  const e = n.match(he)
  if (!e) throw new Error(`Invalid argument not valid semver ('${n}' received)`)
  return e.shift(), e
}
var B = (n) => n === "*" || n === "x" || n === "X"
var M = (n) => {
  const e = parseInt(n, 10)
  return isNaN(e) ? n : e
}
var ge = (n, e) => (typeof n != typeof e ? [String(n), String(e)] : [n, e])
var fe = (n, e) => {
  if (B(n) || B(e)) return 0
  const [t, r] = ge(M(n), M(e))
  return t > r ? 1 : t < r ? -1 : 0
}
var $ = (n, e) => {
  for (let t = 0; t < Math.max(n.length, e.length); t++) {
    const r = fe(n[t] || "0", e[t] || "0")
    if (r !== 0) return r
  }
  return 0
}
var de = class {
  /**
   * Compare [semver](https://semver.org/) version strings
   * This library supports the full semver specification, including comparing versions with different number of digits like `1.0.0`, `1.0`, `1`, and pre-release versions like `1.0.0-alpha`.
   *
   * @param v1 - First version to compare
   * @param v2 - Second version to compare
   * @returns boolean true if v1 is higher than v2
   */
  greater(e, t) {
    return V(e, t) > 0
  }
  /**
   * Compare [semver](https://semver.org/) version strings
   * This library supports the full semver specification, including comparing versions with different number of digits like `1.0.0`, `1.0`, `1`, and pre-release versions like `1.0.0-alpha`.
   *
   * @param v1 - First version to compare
   * @param v2 - Second version to compare
   * @returns boolean true if v1 is equal to v2
   */
  equal(e, t) {
    return V(e, t) === 0
  }
  /**
   * Compare [semver](https://semver.org/) version strings
   * This library supports the full semver specification, including comparing versions with different number of digits like `1.0.0`, `1.0`, `1`, and pre-release versions like `1.0.0-alpha`.
   *
   * @param v1 - First version to compare
   * @param v2 - Second version to compare
   * @returns boolean true if v1 is lesser than v2
   */
  lesser(e, t) {
    return V(e, t) < 0
  }
}
var ye = class {
  /**
   * 获取当前设备
   */
  static getDevice() {
    const e = new G()
    return e.isInSiyuanWidget()
      ? "Siyuan_Widget"
      : e.isInSiyuanOrSiyuanNewWin()
      ? "Siyuan_NewWin"
      : I.isInChromeExtension()
      ? "Chrome_Extension"
      : "Chrome_Browser"
  }
}
var me = class {
  constructor() {
    s(this, "siyuanUtil")
    s(this, "requireLib", (e) => {
      const t = this.siyuanUtil.siyuanWindow()
      return t ? t.require(e) : __require(e)
    })
    s(this, "getCrossPlatformAppDataFolder", () => {
      var r, i, o, c, f, h
      const e = this.requireLib("path")
      let t
      return (
        ((r = this.syProcess()) == null ? void 0 : r.platform) === "darwin"
          ? (t = e.join((i = this.syProcess()) == null ? void 0 : i.env.HOME, "/Library/Application Support"))
          : ((o = this.syProcess()) == null ? void 0 : o.platform) === "win32"
          ? (t = (c = this.syProcess()) == null ? void 0 : c.env.APPDATA)
          : ((f = this.syProcess()) == null ? void 0 : f.platform) === "linux" &&
            (t = (h = this.syProcess()) == null ? void 0 : h.env.HOME),
        t
      )
    })
    this.siyuanUtil = new G()
  }
  // ------------------------------------------------------------------------------------------------------
  /**
   *
   * 可以使用Node.js内置的fs模块中的`copyFileSync`或者`copyFile`方法来复制文件夹。不过需要注意，这两个方法只能复制单个文件，如果想要复制整个文件夹，需要自己编写递归函数实现。
   * 本方法用于复制一个文件夹以及其中所有子文件和子文件夹
   *
   * @param source - 源文件
   * @param target - 目标文件
   * @author terwer
   * @since 1.0.0
   */
  copyFolderSync(e, t) {
    const r = this,
      i = this.requireLib("fs"),
      o = this.requireLib("path")
    i.existsSync(t) || i.mkdirSync(t),
      i.lstatSync(e).isDirectory() &&
        i.readdirSync(e).forEach(function (f) {
          const h = o.join(e, f)
          i.lstatSync(h).isDirectory() ? r.copyFolderSync(h, o.join(t, f)) : i.copyFileSync(h, o.join(t, f))
        })
  }
  /**
   * 删除文件夹
   *
   * @param folder - 文件夹
   */
  rmFolder(e) {
    const t = this.requireLib("fs")
    t.existsSync(e) && t.rmdirSync(e, { recursive: true })
  }
  /**
   * 路径拼接
   *
   * @param paths - 路径数组
   */
  joinPath(...e) {
    return this.requireLib("path").join(...e)
  }
  /**
   * 获取相对路径
   *
   * @param pathname - 路径名称
   */
  dirname(e) {
    return this.requireLib("path").dirname(e)
  }
  /**
   * 获取绝对路径
   *
   * @param pathname - 路径名称
   */
  absPath(e) {
    const t = this.requireLib("path"),
      r = this.dirname(e)
    return t.resolve(t.dirname(r), e)
  }
  // -----------------------------------------------------------------------------------------------
  /**
   * 思源笔记 process 对象
   */
  syProcess() {
    return I.isInBrowser ? window.process : process
  }
  /**
   * 思源笔记 conf 目录
   */
  siyuanConfPath() {
    const e = this.siyuanUtil.siyuanWindow()
    if (!e) throw new Error("Not in siyuan env")
    return e == null ? void 0 : e.siyuan.config.system.confDir
  }
  /**
   * 思源笔记 data 目录
   */
  siyuanDataPath() {
    const e = this.siyuanUtil.siyuanWindow()
    if (!e) throw new Error("Not in siyuan env")
    return e.siyuan.config.system.dataDir
  }
  /**
   * 思源笔记 appearance 目录
   */
  siyuanAppearancePath() {
    return this.requireLib("path").join(this.siyuanConfPath(), "appearance")
  }
  /**
   * 思源笔记 themes 目录
   */
  siyuanThemePath() {
    return this.requireLib("path").join(this.siyuanAppearancePath(), "themes")
  }
  /**
   * zhi 主题目录
   */
  zhiThemePath() {
    return this.requireLib("path").join(this.siyuanThemePath(), "zhi")
  }
  /**
   * zhi 主题构建目录
   */
  zhiThemeDistPath() {
    return this.requireLib("path").join(this.zhiThemePath(), "apps", "theme", "dist")
  }
  /**
   * zhi 博客构建目录
   */
  zhiBlogDistPath() {
    return this.requireLib("path").join(this.siyuanThemePath(), "apps", "blog", "dist")
  }
  /**
   * zhi-mini 目录
   */
  zhiMiniPath() {
    return this.requireLib("path").join(this.siyuanThemePath(), "zhi-mini")
  }
}
var ve = class {
  constructor() {
    s(this, "strUtil")
    s(this, "dateUtil")
    s(this, "electronUtil")
    s(this, "browserUtil")
    s(this, "versionUtil")
    s(this, "deviceUtil")
    ;(this.strUtil = new ue()),
      (this.dateUtil = new pe()),
      (this.electronUtil = new me()),
      (this.browserUtil = I),
      (this.versionUtil = new de()),
      (this.deviceUtil = ye)
  }
}
var Ee = class {
  /**
   * 构造 zhi-sdk 对象
   * @param env - 可选，环境变量对象
   */
  constructor(e) {
    s(this, "env")
    s(this, "logger")
    s(this, "siyuanApi")
    s(this, "blogApi")
    s(this, "common")
    ;(this.env = e),
      (this.logger = W.defaultLogger(this.env, Y.LOG_STACK_SIZE)),
      (this.siyuanApi = new le()),
      (this.blogApi = new ce()),
      (this.common = new ve())
  }
  /**
   * 获取配置环境变量
   */
  getEnv() {
    if (!this.env) throw new Error("env is not initiated, please use new ZhiSdk(env) create ZhiSdk object!")
    return this.env
  }
  /**
   * 获取日志操作对象
   */
  getLogger() {
    return this.logger
  }
}
var require_lib = __commonJS({
  "node_modules/.pnpm/zhi-env@1.8.2/node_modules/zhi-env/lib/index.js"(exports2) {
    var i = Object.defineProperty
    var v = (n, e, t) =>
      e in n ? i(n, e, { enumerable: true, configurable: true, writable: true, value: t }) : (n[e] = t)
    var s2 = (n, e, t) => (v(n, typeof e != "symbol" ? e + "" : e, t), t)
    Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } })
    var r = class {}
    s2(r, "NODE_ENV_KEY", "NODE_ENV"), s2(r, "VITE_DEBUG_MODE_KEY", "VITE_DEBUG_MODE")
    var o = class {
      constructor(e) {
        s2(this, "envMeta")
        this.envMeta = e
      }
      isNodeDev() {
        return this.getEnv(r.NODE_ENV_KEY) === "development"
      }
      isDev() {
        return this.isNodeDev() || this.getBooleanEnv(r.VITE_DEBUG_MODE_KEY)
      }
      getEnv(e) {
        let t
        try {
          this.envMeta[e] && (t = this.envMeta[e])
        } catch (E) {
          console.error(E)
        }
        return t
      }
      getStringEnv(e) {
        return this.getEnv(e) ?? ""
      }
      getBooleanEnv(e) {
        let t = false
        return this.getEnv(e) && (t = this.getStringEnv(e).toLowerCase() === "true"), t
      }
      getEnvOrDefault(e, t) {
        const E = this.getStringEnv(e)
        return E.trim().length == 0 ? t : E
      }
    }
    exports2.EnvConstants = r
    exports2.default = o
  },
})
const __vite__cjsImport1_zhiEnv = require_lib()
const Env = __vite__cjsImport1_zhiEnv.__esModule ? __vite__cjsImport1_zhiEnv.default : __vite__cjsImport1_zhiEnv
const _ZhiUtil = class {
  /**
   * 获取 zhi-sdk 实例
   */
  static zhiSdk() {
    if (!_ZhiUtil.zhiSdkObj) {
      const env = new Env({
        VITE_LOG_LEVEL: "INFO",
        VITE_DEBUG_MODE: "true",
        BASE_URL: "/",
        MODE: "production",
        DEV: false,
        PROD: true,
        SSR: false,
      })
      _ZhiUtil.zhiSdkObj = new Ee(env)
    }
    return _ZhiUtil.zhiSdkObj
  }
}
let ZhiUtil = _ZhiUtil
__publicField(ZhiUtil, "zhiSdkObj")
class Translucify {
  init() {
    const DEFAULT_TOLERANCE_VALUE = 0.05
    let _toleranceValue = DEFAULT_TOLERANCE_VALUE
    function isImageLoaded(image) {
      if (image.nodeType === 1 && image.tagName.toLowerCase() === "img" && image.src !== null && image.src !== "") {
        return image.complete || image.readyState === 4 || image.naturalWidth + image.naturalHeight > 0
      } else {
        return false
      }
    }
    function getCanvasAndCORSImage(image) {
      const imageCORS = new Image()
      imageCORS.crossOrigin = "use-credentials"
      const canvas = document.createElement("canvas")
      const w = image.naturalWidth
      const h = image.naturalHeight
      canvas.width = w
      canvas.height = h
      return {
        canvas,
        imageCORS,
      }
    }
    function modifyImagePixels(image) {
      const created = getCanvasAndCORSImage(image)
      created.imageCORS.onload = function () {
        applyFloodFill(image, created.imageCORS, created.canvas)
      }
      created.imageCORS.src = image.src
      if (isImageLoaded(created.imageCORS)) {
        applyFloodFill(image, created.imageCORS, created.canvas)
      }
    }
    function floodFill(x, y, context, tolerance) {
      const pixelStack = [[x, y]]
      const width = context.canvas.width
      const height = context.canvas.height
      let pixelPos = (y * width + x) * 4
      const imageData = context.getImageData(0, 0, width, height)
      const rMax = imageData.data[pixelPos] * (1 + tolerance)
      const gMax = imageData.data[pixelPos + 1] * (1 + tolerance)
      const bMax = imageData.data[pixelPos + 2] * (1 + tolerance)
      const rMin = imageData.data[pixelPos] * (1 - tolerance)
      const gMin = imageData.data[pixelPos + 1] * (1 - tolerance)
      const bMin = imageData.data[pixelPos + 2] * (1 - tolerance)
      function matchTolerance(pixelIndex) {
        const r = imageData.data[pixelIndex]
        const g = imageData.data[pixelIndex + 1]
        const b2 = imageData.data[pixelIndex + 2]
        return r >= rMin && r <= rMax && g >= gMin && g <= gMax && b2 >= bMin && b2 <= bMax
      }
      while (pixelStack.length) {
        const newPos = pixelStack.pop()
        x = newPos[0]
        y = newPos[1]
        pixelPos = (y * width + x) * 4
        while (y-- >= 0 && matchTolerance(pixelPos)) {
          pixelPos -= width * 4
        }
        pixelPos += width * 4
        ++y
        let reachLeft = false
        let reachRight = false
        while (y++ < height - 1 && matchTolerance(pixelPos)) {
          imageData.data[pixelPos] = 0
          imageData.data[pixelPos + 1] = 0
          imageData.data[pixelPos + 2] = 0
          imageData.data[pixelPos + 3] = 0
          if (x > 0) {
            if (matchTolerance(pixelPos - 4)) {
              if (!reachLeft) {
                pixelStack.push([x - 1, y])
                reachLeft = true
              }
            } else if (reachLeft) {
              reachLeft = false
            }
          }
          if (x < width - 1) {
            if (matchTolerance(pixelPos + 4)) {
              if (!reachRight) {
                pixelStack.push([x + 1, y])
                reachRight = true
              }
            } else if (matchTolerance(pixelPos + 4 - width * 4)) {
              if (!reachLeft) {
                pixelStack.push([x + 1, y - 1])
                reachLeft = true
              }
            } else if (reachRight) {
              reachRight = false
            }
          }
          pixelPos += width * 4
        }
      }
      context.putImageData(imageData, 0, 0)
    }
    function applyFloodFill(originalImage, imageCORS, canvas) {
      const ctx = canvas.getContext("2d")
      ctx.drawImage(imageCORS, 0, 0)
      floodFill(0, 0, ctx, _toleranceValue)
      if (originalImage.parentNode) {
        originalImage.parentNode.insertBefore(canvas, originalImage)
        originalImage.parentNode.removeChild(originalImage)
      }
    }
    function translucifyOneFloodFill(image) {
      if (isImageLoaded(image)) {
        modifyImagePixels(image)
      } else {
        image.onload = function () {
          modifyImagePixels(image)
        }
      }
    }
    function translucifyAll(queryResult, tolerance) {
      if (typeof tolerance !== "undefined") {
        _toleranceValue = tolerance
      } else {
        _toleranceValue = DEFAULT_TOLERANCE_VALUE
      }
      if (queryResult instanceof HTMLImageElement) {
        translucifyOneFloodFill(queryResult)
      } else if (queryResult instanceof NodeList) {
        Array.prototype.slice.call(queryResult).forEach(translucifyOneFloodFill)
      } else {
        if (queryResult && queryResult.toArray) {
          queryResult.toArray().forEach(translucifyOneFloodFill)
        }
      }
    }
    return translucifyAll
  }
}
class ZhiPicturePlugin extends siyuan.Plugin {
  constructor() {
    super()
    __publicField(this, "logger")
    __publicField(this, "translucify")
    const zhiSdk = ZhiUtil.zhiSdk()
    this.logger = zhiSdk.getLogger()
    this.translucify = new Translucify().init()
    this.logger.info("ZhiPicturePlugin created")
  }
  onload() {
    const zhiDemoButton = document.createElement("button")
    zhiDemoButton.classList.add("toolbar__item")
    zhiDemoButton.insertAdjacentHTML("beforeend", '<svg><use xlink:href="#iconLight"></use></svg>')
    zhiDemoButton.addEventListener("click", (event) => {
      this.translucify(document.querySelectorAll("img"), 0.05)
      this.logger.info("Picture is transplanted.")
      event.stopPropagation()
    })
    siyuan.clientApi.addToolbarRight(zhiDemoButton)
    this.logger.info("ZhiPicturePlugin loaded")
  }
  onunload() {
    this.logger.info("ZhiPicturePlugin unloaded")
  }
}
module.exports = ZhiPicturePlugin
