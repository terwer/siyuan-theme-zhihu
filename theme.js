"use strict"
var Ie = Object.defineProperty
var Pe = (n, t, i) => (t in n ? Ie(n, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (n[t] = i))
var E = (n, t, i) => (Pe(n, typeof t != "symbol" ? t + "" : t, i), i)
var X = Object.defineProperty,
  J = (n, t, i) => (t in n ? X(n, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (n[t] = i)),
  s = (n, t, i) => (J(n, typeof t != "symbol" ? t + "" : t, i), i),
  Q = Object.defineProperty,
  ee = (n, t, i) => (t in n ? Q(n, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (n[t] = i)),
  _ = (n, t, i) => (ee(n, typeof t != "symbol" ? t + "" : t, i), i),
  K =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  P = {},
  te = {
    get exports() {
      return P
    },
    set exports(n) {
      P = n
    },
  }
;(function (n) {
  ;(function (t, i) {
    n.exports ? (n.exports = i()) : (t.log = i())
  })(K, function () {
    var t = function () {},
      i = "undefined",
      r = typeof window !== i && typeof window.navigator !== i && /Trident\/|MSIE /.test(window.navigator.userAgent),
      o = ["trace", "debug", "info", "warn", "error"]
    function a(g, v) {
      var L = g[v]
      if (typeof L.bind == "function") return L.bind(g)
      try {
        return Function.prototype.bind.call(L, g)
      } catch {
        return function () {
          return Function.prototype.apply.apply(L, [g, arguments])
        }
      }
    }
    function l() {
      console.log &&
        (console.log.apply
          ? console.log.apply(console, arguments)
          : Function.prototype.apply.apply(console.log, [console, arguments])),
        console.trace && console.trace()
    }
    function c(g) {
      return (
        g === "debug" && (g = "log"),
        typeof console === i
          ? !1
          : g === "trace" && r
          ? l
          : console[g] !== void 0
          ? a(console, g)
          : console.log !== void 0
          ? a(console, "log")
          : t
      )
    }
    function u(g, v) {
      for (var L = 0; L < o.length; L++) {
        var p = o[L]
        this[p] = L < g ? t : this.methodFactory(p, g, v)
      }
      this.log = this.debug
    }
    function y(g, v, L) {
      return function () {
        typeof console !== i && (u.call(this, v, L), this[g].apply(this, arguments))
      }
    }
    function h(g, v, L) {
      return c(g) || y.apply(this, arguments)
    }
    function f(g, v, L) {
      var p = this,
        z
      v = v ?? "WARN"
      var w = "loglevel"
      typeof g == "string" ? (w += ":" + g) : typeof g == "symbol" && (w = void 0)
      function C(m) {
        var O = (o[m] || "silent").toUpperCase()
        if (!(typeof window === i || !w)) {
          try {
            window.localStorage[w] = O
            return
          } catch {}
          try {
            window.document.cookie = encodeURIComponent(w) + "=" + O + ";"
          } catch {}
        }
      }
      function j() {
        var m
        if (!(typeof window === i || !w)) {
          try {
            m = window.localStorage[w]
          } catch {}
          if (typeof m === i)
            try {
              var O = window.document.cookie,
                k = O.indexOf(encodeURIComponent(w) + "=")
              k !== -1 && (m = /^([^;]+)/.exec(O.slice(k))[1])
            } catch {}
          return p.levels[m] === void 0 && (m = void 0), m
        }
      }
      function we() {
        if (!(typeof window === i || !w)) {
          try {
            window.localStorage.removeItem(w)
            return
          } catch {}
          try {
            window.document.cookie = encodeURIComponent(w) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
          } catch {}
        }
      }
      ;(p.name = g),
        (p.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }),
        (p.methodFactory = L || h),
        (p.getLevel = function () {
          return z
        }),
        (p.setLevel = function (m, O) {
          if (
            (typeof m == "string" && p.levels[m.toUpperCase()] !== void 0 && (m = p.levels[m.toUpperCase()]),
            typeof m == "number" && m >= 0 && m <= p.levels.SILENT)
          ) {
            if (((z = m), O !== !1 && C(m), u.call(p, m, g), typeof console === i && m < p.levels.SILENT))
              return "No console available for logging"
          } else throw "log.setLevel() called with invalid level: " + m
        }),
        (p.setDefaultLevel = function (m) {
          ;(v = m), j() || p.setLevel(m, !1)
        }),
        (p.resetLevel = function () {
          p.setLevel(v, !1), we()
        }),
        (p.enableAll = function (m) {
          p.setLevel(p.levels.TRACE, m)
        }),
        (p.disableAll = function (m) {
          p.setLevel(p.levels.SILENT, m)
        })
      var U = j()
      U == null && (U = v), p.setLevel(U, !1)
    }
    var d = new f(),
      S = {}
    d.getLogger = function (g) {
      if ((typeof g != "symbol" && typeof g != "string") || g === "")
        throw new TypeError("You must supply a name when creating a logger.")
      var v = S[g]
      return v || (v = S[g] = new f(g, d.getLevel(), d.methodFactory)), v
    }
    var x = typeof window !== i ? window.log : void 0
    return (
      (d.noConflict = function () {
        return typeof window !== i && window.log === d && (window.log = x), d
      }),
      (d.getLoggers = function () {
        return S
      }),
      (d.default = d),
      d
    )
  })
})(te)
var A = {},
  ne = {
    get exports() {
      return A
    },
    set exports(n) {
      A = n
    },
  }
;(function (n) {
  ;(function (t, i) {
    n.exports ? (n.exports = i()) : (t.prefix = i(t))
  })(K, function (t) {
    var i = function (h) {
        for (var f = 1, d = arguments.length, S; f < d; f++)
          for (S in arguments[f]) Object.prototype.hasOwnProperty.call(arguments[f], S) && (h[S] = arguments[f][S])
        return h
      },
      r = {
        template: "[%t] %l:",
        levelFormatter: function (h) {
          return h.toUpperCase()
        },
        nameFormatter: function (h) {
          return h || "root"
        },
        timestampFormatter: function (h) {
          return h.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
        },
        format: void 0,
      },
      o,
      a = {},
      l = function (h) {
        if (!h || !h.getLogger) throw new TypeError("Argument is not a root logger")
        o = h
      },
      c = function (h, f) {
        if (!h || !h.setLevel) throw new TypeError("Argument is not a logger")
        var d = h.methodFactory,
          S = h.name || "",
          x = a[S] || a[""] || r
        function g(v, L, p) {
          var z = d(v, L, p),
            w = a[p] || a[""],
            C = w.template.indexOf("%t") !== -1,
            j = w.template.indexOf("%l") !== -1,
            we = w.template.indexOf("%n") !== -1
          return function () {
            for (var U = "", m = arguments.length, O = Array(m), k = 0; k < m; k++) O[k] = arguments[k]
            if (S || !a[p]) {
              var Se = w.timestampFormatter(new Date()),
                Le = w.levelFormatter(v),
                be = w.nameFormatter(p)
              w.format
                ? (U += w.format(Le, be, Se))
                : ((U += w.template),
                  C && (U = U.replace(/%t/, Se)),
                  j && (U = U.replace(/%l/, Le)),
                  we && (U = U.replace(/%n/, be))),
                O.length && typeof O[0] == "string" ? (O[0] = U + " " + O[0]) : O.unshift(U)
            }
            z.apply(void 0, O)
          }
        }
        return (
          a[S] || (h.methodFactory = g),
          (f = f || {}),
          f.template && (f.format = void 0),
          (a[S] = i({}, x, f)),
          h.setLevel(h.getLevel()),
          o ||
            h.warn(
              "It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"
            ),
          h
        )
      },
      u = { reg: l, apply: c },
      y
    return (
      t &&
        ((y = t.prefix),
        (u.noConflict = function () {
          return t.prefix === u && (t.prefix = y), u
        })),
      u
    )
  })
})(ne)
class R {}
_(R, "LOG_LEVEL_KEY", "VITE_LOG_LEVEL"), _(R, "LOG_PREFIX_KEY", "VITE_LOG_PREFIX")
var T = ((n) => (
  (n.LOG_LEVEL_DEBUG = "DEBUG"),
  (n.LOG_LEVEL_INFO = "INFO"),
  (n.LOG_LEVEL_WARN = "WARN"),
  (n.LOG_LEVEL_ERROR = "ERROR"),
  n
))(T || {})
function re() {
  const n = Error.prepareStackTrace
  Error.prepareStackTrace = (i, r) => r
  const t = new Error().stack.slice(1)
  return (Error.prepareStackTrace = n), t
}
class N {
  static stringToEnumValue(t, i) {
    return t[Object.keys(t).filter((r) => t[r].toString() === i)[0]]
  }
  static getEnvLevel(t) {
    if (!t) return
    const i = t.getEnvOrDefault(R.LOG_LEVEL_KEY, T.LOG_LEVEL_INFO),
      r = N.stringToEnumValue(T, i.toUpperCase())
    return (
      r ||
        console.warn(
          "[zhi-log] LOG_LEVEL is invalid in you .env file.Must be either debug, info, warn or error, fallback to default info level"
        ),
      r
    )
  }
  static getEnvLogger(t) {
    if (t) return t.getEnv(R.LOG_PREFIX_KEY)
  }
}
class ie {
  constructor(t, i, r) {
    _(this, "consoleLogger", "console"),
      _(this, "stackSize", 1),
      _(this, "getLogger", (l) => {
        let c
        if (l) c = l
        else {
          const u = re(),
            y = []
          for (let h = 0; h < u.length; h++) {
            const f = u[h],
              d = f.getFileName() ?? "none"
            if (
              !d.includes(".ts") &&
              !d.includes(".js") &&
              !d.includes(".cjs") &&
              !d.includes(".mjs") &&
              !d.includes(".vue") &&
              !d.includes(".tsx")
            )
              continue
            if (h > this.stackSize - 1) break
            const S = d + "-" + f.getLineNumber() + ":" + f.getColumnNumber()
            y.push(S)
          }
          u.length > 0 && (c = y.join(" -> "))
        }
        return (!c || c.trim().length === 0) && (c = this.consoleLogger), P.getLogger(c)
      }),
      (this.stackSize = 1)
    let o
    t ? (o = t) : (o = N.getEnvLevel(r)), (o = o ?? T.LOG_LEVEL_INFO), P.setLevel(o)
    const a = {
      gray: (l) => l.toString(),
      green: (l) => l.toString(),
      yellow: (l) => l.toString(),
      red: (l) => l.toString(),
    }
    A.reg(P),
      A.apply(P, {
        format(l, c, u) {
          const y = ["[" + (i ?? N.getEnvLogger(r) ?? "zhi") + "]"]
          switch ((y.push(a.gray("[") + a.green(u).toString() + a.gray("]")), l)) {
            case T.LOG_LEVEL_DEBUG:
              y.push(a.gray(l.toUpperCase().toString()))
              break
            case T.LOG_LEVEL_INFO:
              y.push(a.green(l.toUpperCase().toString()))
              break
            case T.LOG_LEVEL_WARN:
              y.push(a.yellow(l.toUpperCase().toString()))
              break
            case T.LOG_LEVEL_ERROR:
              y.push(a.red(l.toUpperCase().toString()))
              break
          }
          return y.push(a.green(c).toString()), y.push(a.gray(":")), y.join(" ")
        },
      })
  }
  setStackSize(t) {
    this.stackSize = t ?? 1
  }
}
class oe {
  constructor(t, i, r) {
    _(this, "logger"), (this.logger = new ie(t, i, r))
  }
  getLogger(t, i) {
    return this.logger.setStackSize(i), this.logger.getLogger(t)
  }
}
class q extends oe {
  constructor(t, i, r) {
    super(t, i, r)
  }
  getLogger(t, i) {
    return super.getLogger(t, i)
  }
}
class W {
  static defaultLogger(t, i) {
    return W.customLogFactory(void 0, void 0, t).getLogger(void 0, i)
  }
  static customLogFactory(t, i, r) {
    return new q(t, i, r)
  }
  static customSignLogFactory(t, i) {
    return new q(void 0, t, i)
  }
}
class Y {}
s(Y, "LOG_STACK_SIZE", 1)
const H = "1.0.10"
class se {
  constructor() {
    s(this, "VERSION"), (this.VERSION = H)
  }
}
class ae {
  constructor() {
    s(this, "VERSION"), (this.VERSION = H)
  }
}
const b = class {
  constructor() {
    s(this, "getQueryString", (n) => {
      if (!b.isInBrowser) return ""
      const t = window.location.search.substring(1).split("&")
      for (let i = 0; i < t.length; i++) {
        const r = t[i].split("=")
        if (r[0] === n) return r[1]
      }
      return ""
    })
  }
  static isInChromeExtension() {
    return b.isInBrowser ? window.location.href.indexOf("chrome-extension://") > -1 : !1
  }
}
let I = b
s(I, "isInBrowser", typeof window < "u"),
  s(I, "isElectron", () =>
    !b.isInBrowser || !window.navigator || !window.navigator.userAgent
      ? !1
      : /Electron/.test(window.navigator.userAgent)
  ),
  s(I, "replaceUrlParam", (n, t, i) => {
    i == null && (i = "")
    const r = new RegExp("\\b(" + t + "=).*?(&|#|$)")
    return n.search(r) >= 0
      ? n.replace(r, "$1" + i + "$2")
      : ((n = n.replace(/[?#]$/, "")), n + (n.indexOf("?") > 0 ? "&" : "?") + t + "=" + i)
  }),
  s(I, "setUrlParameter", (n, t, i) =>
    b.isInBrowser
      ? n.includes(t)
        ? b.replaceUrlParam(n, t, i)
        : ((n += (n.match(/[?]/g) != null ? "&" : "?") + t + "=" + i), n)
      : ""
  ),
  s(I, "reloadTabPage", (n) => {
    setTimeout(function () {
      if (b.isInBrowser) {
        const t = window.location.href
        window.location.href = b.setUrlParameter(t, "tab", n)
      }
    }, 200)
  }),
  s(I, "reloadPage", () => {
    setTimeout(function () {
      b.isInBrowser && window.location.reload()
    }, 200)
  }),
  s(I, "reloadPageWithMessageCallback", (n, t) => {
    t && t(),
      setTimeout(function () {
        b.isInBrowser && window.location.reload()
      }, 200)
  })
class G {
  constructor() {
    s(this, "isInSiyuanWidget", () =>
      typeof window > "u"
        ? !1
        : window.frameElement != null &&
          window.frameElement.parentElement != null &&
          window.frameElement.parentElement.parentElement != null &&
          window.frameElement.parentElement.parentElement.getAttribute("data-node-id") !== ""
    ),
      s(this, "isInSiyuanNewWin", () => (typeof window > "u" ? !1 : typeof window.terwer < "u")),
      s(this, "isInSiyuanOrSiyuanNewWin", () => I.isElectron)
  }
  siyuanWindow() {
    let t
    return (
      this.isInSiyuanWidget()
        ? (t = parent.window)
        : this.isInSiyuanNewWin() || typeof window < "u"
        ? (t = window)
        : (t = void 0),
      t
    )
  }
}
class le {
  constructor() {
    s(this, "serverApi"),
      s(this, "clientApi"),
      s(this, "siyuanUtil"),
      (this.serverApi = new se()),
      (this.clientApi = new ae()),
      (this.siyuanUtil = new G())
  }
}
class ce {
  constructor() {
    s(this, "VERSION"), (this.VERSION = "1.0.0")
  }
}
class ue {
  f(t, ...i) {
    let r = t
    for (let o = 0; o < i.length; o++) {
      const a = i[o]
      typeof a == "string" ? (r = r.replace(`{${o}}`, a)) : (r = r.replace(`{${o}}`, a.toString()))
    }
    return r
  }
}
class pe {
  constructor() {
    s(this, "TIME_SPLIT", " "),
      s(this, "formatIsoToZhDate", (t, i, r) => {
        if (!t) return ""
        let o = t
        const a = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.\d{3})Z$/gm,
          l = o.match(a)
        if (l == null) return t
        for (let c = 0; c < l.length; c++) {
          const u = l[c]
          let y = u
          i && (y = this.addHoursToDate(new Date(u), 8).toISOString())
          const h = y.split("T"),
            f = h[0],
            d = h[1].split(".")[0]
          let S = f + this.TIME_SPLIT + d
          r && (S = f), (o = o.replace(u, S))
        }
        return o
      })
  }
  addHoursToDate(t, i) {
    return t.setTime(t.getTime() + i * 60 * 60 * 1e3), t
  }
  nowZh() {
    return this.formatIsoToZhDate(new Date().toISOString())
  }
  nowDateZh() {
    return this.formatIsoToZhDate(new Date().toISOString(), !0, !0)
  }
  nowTimeZh() {
    return this.formatIsoToZhDate(new Date().toISOString(), !0).split(this.TIME_SPLIT)[1]
  }
}
const V = (n, t) => {
    const i = Z(n),
      r = Z(t),
      o = i.pop(),
      a = r.pop(),
      l = $(i, r)
    return l !== 0 ? l : o && a ? $(o.split("."), a.split(".")) : o || a ? (o ? -1 : 1) : 0
  },
  he =
    /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
  Z = (n) => {
    if (typeof n != "string") throw new TypeError("Invalid argument expected string")
    const t = n.match(he)
    if (!t) throw new Error(`Invalid argument not valid semver ('${n}' received)`)
    return t.shift(), t
  },
  B = (n) => n === "*" || n === "x" || n === "X",
  M = (n) => {
    const t = parseInt(n, 10)
    return isNaN(t) ? n : t
  },
  ge = (n, t) => (typeof n != typeof t ? [String(n), String(t)] : [n, t]),
  fe = (n, t) => {
    if (B(n) || B(t)) return 0
    const [i, r] = ge(M(n), M(t))
    return i > r ? 1 : i < r ? -1 : 0
  },
  $ = (n, t) => {
    for (let i = 0; i < Math.max(n.length, t.length); i++) {
      const r = fe(n[i] || "0", t[i] || "0")
      if (r !== 0) return r
    }
    return 0
  }
class de {
  greater(t, i) {
    return V(t, i) > 0
  }
  equal(t, i) {
    return V(t, i) === 0
  }
  lesser(t, i) {
    return V(t, i) < 0
  }
}
class ye {
  static getDevice() {
    const t = new G()
    return t.isInSiyuanWidget()
      ? "Siyuan_Widget"
      : t.isInSiyuanOrSiyuanNewWin()
      ? "Siyuan_NewWin"
      : I.isInChromeExtension()
      ? "Chrome_Extension"
      : "Chrome_Browser"
  }
}
class me {
  constructor() {
    s(this, "siyuanUtil"),
      s(this, "requireLib", (t) => {
        const i = this.siyuanUtil.siyuanWindow()
        return i ? i.require(t) : require(t)
      }),
      s(this, "getCrossPlatformAppDataFolder", () => {
        var t, i, r, o, a, l
        const c = this.requireLib("path")
        let u
        return (
          ((t = this.syProcess()) == null ? void 0 : t.platform) === "darwin"
            ? (u = c.join((i = this.syProcess()) == null ? void 0 : i.env.HOME, "/Library/Application Support"))
            : ((r = this.syProcess()) == null ? void 0 : r.platform) === "win32"
            ? (u = (o = this.syProcess()) == null ? void 0 : o.env.APPDATA)
            : ((a = this.syProcess()) == null ? void 0 : a.platform) === "linux" &&
              (u = (l = this.syProcess()) == null ? void 0 : l.env.HOME),
          u
        )
      }),
      (this.siyuanUtil = new G())
  }
  copyFolderSync(t, i) {
    const r = this,
      o = this.requireLib("fs"),
      a = this.requireLib("path")
    o.existsSync(i) || o.mkdirSync(i),
      o.lstatSync(t).isDirectory() &&
        o.readdirSync(t).forEach(function (l) {
          const c = a.join(t, l)
          o.lstatSync(c).isDirectory() ? r.copyFolderSync(c, a.join(i, l)) : o.copyFileSync(c, a.join(i, l))
        })
  }
  rmFolder(t) {
    const i = this.requireLib("fs")
    i.existsSync(t) && i.rmdirSync(t, { recursive: !0 })
  }
  joinPath(...t) {
    return this.requireLib("path").join(...t)
  }
  dirname(t) {
    return this.requireLib("path").dirname(t)
  }
  absPath(t) {
    const i = this.requireLib("path"),
      r = this.dirname(t)
    return i.resolve(i.dirname(r), t)
  }
  syProcess() {
    return I.isInBrowser ? window.process : process
  }
  siyuanConfPath() {
    const t = this.siyuanUtil.siyuanWindow()
    if (!t) throw new Error("Not in siyuan env")
    return t == null ? void 0 : t.siyuan.config.system.confDir
  }
  siyuanDataPath() {
    const t = this.siyuanUtil.siyuanWindow()
    if (!t) throw new Error("Not in siyuan env")
    return t.siyuan.config.system.dataDir
  }
  siyuanAppearancePath() {
    return this.requireLib("path").join(this.siyuanConfPath(), "appearance")
  }
  siyuanThemePath() {
    return this.requireLib("path").join(this.siyuanAppearancePath(), "themes")
  }
  zhiThemePath() {
    return this.requireLib("path").join(this.siyuanThemePath(), "zhi")
  }
  zhiThemeDistPath() {
    return this.requireLib("path").join(this.zhiThemePath(), "apps", "theme", "dist")
  }
  zhiBlogDistPath() {
    return this.requireLib("path").join(this.siyuanThemePath(), "apps", "blog", "dist")
  }
  zhiMiniPath() {
    return this.requireLib("path").join(this.siyuanThemePath(), "zhi-mini")
  }
}
class ve {
  constructor() {
    s(this, "strUtil"),
      s(this, "dateUtil"),
      s(this, "electronUtil"),
      s(this, "browserUtil"),
      s(this, "versionUtil"),
      s(this, "deviceUtil"),
      (this.strUtil = new ue()),
      (this.dateUtil = new pe()),
      (this.electronUtil = new me()),
      (this.browserUtil = I),
      (this.versionUtil = new de()),
      (this.deviceUtil = ye)
  }
}
class Ee {
  constructor(t) {
    s(this, "env"),
      s(this, "logger"),
      s(this, "siyuanApi"),
      s(this, "blogApi"),
      s(this, "common"),
      (this.env = t),
      (this.logger = W.defaultLogger(this.env, Y.LOG_STACK_SIZE)),
      (this.siyuanApi = new le()),
      (this.blogApi = new ce()),
      (this.common = new ve())
  }
  getEnv() {
    if (!this.env) throw new Error("env is not initiated, please use new ZhiSdk(env) create ZhiSdk object!")
    return this.env
  }
  getLogger() {
    return this.logger
  }
}
function getDefaultExportFromCjs(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var lib = {}
;(function (n) {
  var t = Object.defineProperty,
    i = (l, c, u) => (c in l ? t(l, c, { enumerable: !0, configurable: !0, writable: !0, value: u }) : (l[c] = u)),
    r = (l, c, u) => (i(l, typeof c != "symbol" ? c + "" : c, u), u)
  Object.defineProperties(n, { __esModule: { value: !0 }, [Symbol.toStringTag]: { value: "Module" } })
  class o {}
  r(o, "NODE_ENV_KEY", "NODE_ENV"), r(o, "VITE_DEBUG_MODE_KEY", "VITE_DEBUG_MODE")
  class a {
    constructor(c) {
      r(this, "envMeta"), (this.envMeta = c)
    }
    isNodeDev() {
      return this.getEnv(o.NODE_ENV_KEY) === "development"
    }
    isDev() {
      return this.isNodeDev() || this.getBooleanEnv(o.VITE_DEBUG_MODE_KEY)
    }
    getEnv(c) {
      let u
      try {
        this.envMeta[c] && (u = this.envMeta[c])
      } catch (y) {
        console.error(y)
      }
      return u
    }
    getStringEnv(c) {
      return this.getEnv(c) ?? ""
    }
    getBooleanEnv(c) {
      let u = !1
      return this.getEnv(c) && (u = this.getStringEnv(c).toLowerCase() === "true"), u
    }
    getEnvOrDefault(c, u) {
      const y = this.getStringEnv(c)
      return y.trim().length == 0 ? u : y
    }
  }
  ;(n.EnvConstants = o), (n.default = a)
})(lib)
const Env = getDefaultExportFromCjs(lib),
  D = class {
    static zhiSdk() {
      if (!D.zhiSdkObj) {
        const t = new Env({
          VITE_LOG_LEVEL: "INFO",
          VITE_DEBUG_MODE: "true",
          BASE_URL: "/",
          MODE: "production",
          DEV: !1,
          PROD: !0,
          SSR: !1,
        })
        D.zhiSdkObj = new Ee(t)
      }
      return D.zhiSdkObj
    }
  }
let ZhiUtil = D
E(ZhiUtil, "zhiSdkObj")
const version = "0.0.1"
var ThemeFromEnum = ((n) => ((n.ThemeFrom_mini_Siyuan = "zhi-mini-siyuan"), n))(ThemeFromEnum || {})
class HackPluginSystem {
  constructor() {
    E(this, "logger")
    E(this, "common")
    E(this, "siyuanApi")
    E(this, "getPluginSystem", () => this.siyuanApi.siyuanUtil.siyuanWindow().pluginSystem)
    E(this, "getPluginSystemVersion", () => this.siyuanApi.siyuanUtil.siyuanWindow().pluginSystemVersion)
    const n = ZhiUtil.zhiSdk()
    ;(this.logger = n.getLogger()), (this.common = n.common), (this.siyuanApi = n.siyuanApi)
  }
  async initPluginSystem() {
    const pluginSystem = this.getPluginSystem()
    if (pluginSystem) {
      this.logger.warn("Plugin system already loaded by snapshots, ignore initiation."),
        this.logger.warn("Loaded plugin system version is ", this.getPluginSystemVersion())
      return
    }
    try {
      this.logger.info("Undetected plugin system，initiating plugin system...")
      const fs = this.common.electronUtil.requireLib("fs"),
        path = this.common.electronUtil.requireLib("path"),
        data = fs.readFileSync(
          path.join(this.common.electronUtil.getCrossPlatformAppDataFolder(), ".siyuan", "plugin.js")
        ),
        script = data.toString("utf8")
      this.logger.info("Local plugin system found, loading..."), eval(script)
    } catch (e) {
      this.logger.info("Local plugin system not found, load online"), this.logger.debug("Plugin system Load error", e)
      const res = await fetch("https://gitee.com/zuoez02/siyuan-plugin-system/raw/main/main.js", { cache: "no-cache" }),
        sc = await res.text()
      ;(this.siyuanApi.siyuanUtil.siyuanWindow().siyuanPluginScript = sc), eval(sc)
    }
    const sys = this.getPluginSystem(),
      sysv = this.getPluginSystemVersion() ?? "unknown"
    return this.logger.info(this.common.strUtil.f("Plugin system inited, version => {0}.", sysv)), Promise.resolve(sys)
  }
}
class PluginSystemHook {
  constructor() {
    E(this, "logger")
    E(this, "common")
    E(this, "siyuanApi")
    E(this, "hack")
    const t = ZhiUtil.zhiSdk()
    ;(this.logger = t.getLogger()),
      (this.common = t.common),
      (this.siyuanApi = t.siyuanApi),
      (this.hack = new HackPluginSystem())
  }
  async syncZhiPlugins(t) {
    console.log("syncZhiPlugins")
  }
  async init() {
    const t = await this.hack.initPluginSystem()
    if (!t) {
      this.logger.error("Plugin system init error, some feature may not work!")
      return
    }
    await this.syncZhiPlugins(t), this.logger.info("PluginSystem inited.")
  }
}
class PluginSystem {
  async initPluginSystem() {
    return await new PluginSystemHook().init(), Promise.resolve([])
  }
}
const pluginSystem = new PluginSystem()
class Lifecycle {
  constructor() {
    E(this, "_dynamicImports", [])
  }
  get dynamicImports() {
    return this._dynamicImports
  }
  async load() {
    const t = [],
      i = await this.loadPluginSystem(),
      r = await this.loadWidgets(),
      o = await this.loadVendors()
    this._dynamicImports = t.concat(i).concat(r).concat(o)
  }
  async loadPluginSystem() {
    return await pluginSystem.initPluginSystem()
  }
  async loadWidgets() {
    return Promise.resolve([])
  }
  async loadVendors() {
    return Promise.resolve([])
  }
}
const F = class {
  static async start() {
    return await F.lifecycle.load(), Promise.resolve(F.lifecycle.dynamicImports)
  }
}
let Bootstrap = F
E(Bootstrap, "lifecycle"),
  (() => {
    F.lifecycle = new Lifecycle()
  })()
class Zhi {
  constructor() {
    E(this, "logger")
    E(this, "common")
    const t = ZhiUtil.zhiSdk()
    ;(this.logger = t.getLogger()), (this.common = t.common)
  }
  async main(t) {
    return (
      this.logger.debug(this.common.strUtil.f("Parsing args <{0}> ...", t)),
      this.hello(ThemeFromEnum.ThemeFrom_mini_Siyuan),
      await Bootstrap.start()
    )
  }
  hello(t) {
    this.logger.info(this.common.strUtil.f("Hello, {0} {1} v{2}! You are from {3}", "zhi", "mini", version, t))
  }
}
class Theme {
  constructor() {
    E(this, "logger")
    E(this, "common")
    E(this, "siyuanApi")
    E(this, "zhiTheme")
    const t = ZhiUtil.zhiSdk()
    ;(this.logger = t.getLogger()),
      (this.common = t.common),
      (this.siyuanApi = t.siyuanApi),
      (this.zhiTheme = new Zhi())
  }
  async init(t) {
    try {
      const i = await this.zhiTheme.main([])
      for (const r of i) {
        const o = r.libpath
        if (r.format !== "cjs" && r.format !== "js") {
          this.logger.warn("Only cjs supported, skip this lib!", o)
          continue
        }
        if (t && t !== r.runAs) {
          this.logger.warn(this.common.strUtil.f("This lib can only run at {0}, skip!Lib is=>{1}", r.runAs, r.libpath))
          continue
        }
        this.logger.info("Loading dependency=>", o)
        let a
        if (this.common.browserUtil.isInBrowser) {
          const l = this.common.electronUtil.joinPath(this.common.electronUtil.zhiMiniPath(), o)
          a = this.common.electronUtil.requireLib(l)
        }
        a && a.init && (await a.init())
      }
      this.logger.info("Theme inited.")
    } catch (i) {
      this.logger.error("Theme load error=>", i)
    }
  }
}
function callsites() {
  const n = Error.prepareStackTrace
  Error.prepareStackTrace = (i, r) => r
  const t = new Error().stack.slice(1)
  return (Error.prepareStackTrace = n), t
}
;(async () => {
  const n = ZhiUtil.zhiSdk(),
    t = n.getLogger(),
    i = n.getEnv(),
    r = async () => {
      t.debug("Theme is loading..."), await new Theme().init("electron"), t.debug("Theme loaded.")
    }
  if (i.isDev()) {
    const o = callsites(),
      a = "theme.js"
    ;(o.length > 0 ? o[0].getFileName() ?? a : a).includes(a)
      ? await import("http://localhost:5173/theme.ts")
      : await r()
  } else await r()
})()
