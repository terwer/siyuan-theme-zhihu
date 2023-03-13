import Theme from "~/src"
import zhiUtil from "~/src/utils/ZhiUtil"

/**
 * @packageDocumentation
 * 🛍️ 一款自带插件和博客的思源笔记主题
 */
;(async () => {
  const zhiSdk = zhiUtil.zhiSdk()
  const logger = zhiSdk.getLogger()
  const env = zhiSdk.getEnv()
  logger.debug("loglevel=>", env.getStringEnv("VITE_LOG_LEVEL"))
  logger.debug("isNodeDev=>", env.isNodeDev())
  logger.info("isDev=>", env.isDev())

  const loadTheme = async () => {
    logger.info("Theme is loading...")
    const theme = new Theme()
    await theme.init("electron")
  }

  if (env.isDev()) {
    const devEntry = "http://localhost:5173/theme.ts"
    await import(devEntry)
    await loadTheme()
  } else {
    await loadTheme()
  }
})()
