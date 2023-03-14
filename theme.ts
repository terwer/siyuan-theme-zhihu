import Theme from "~/src"
import zhiUtil from "~/src/utils/ZhiUtil"
import callsites from "callsites"

/**
 * @packageDocumentation
 * 🛍️ 一款自带插件和博客的思源笔记主题
 */
;(async () => {
  const zhiSdk = zhiUtil.zhiSdk()
  const logger = zhiSdk.getLogger()
  const env = zhiSdk.getEnv()

  const loadTheme = async () => {
    logger.debug("Theme is loading...")
    const theme = new Theme()
    await theme.init("electron")
    logger.debug("Theme loaded.")
  }

  if (env.isDev()) {
    const cs = callsites()
    const FROM_THEME_JS = "theme.js"
    const firstCall = cs.length > 0 ? cs[0].getFileName() ?? FROM_THEME_JS : FROM_THEME_JS
    if (firstCall.includes(FROM_THEME_JS)) {
      const devEntry = "http://localhost:5173/theme.ts"
      await import(devEntry)
      // logger.debug("First load, load devEntry only")
    } else {
      await loadTheme()
    }
  } else {
    await loadTheme()
  }
})()
