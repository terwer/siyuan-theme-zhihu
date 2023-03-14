/*
 Copyright (c) 2023 Terwer. All rights reserved.

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import Theme from "~/src/index"
import zhiUtil from "~/src/utils/ZhiUtil"
import callsites from "callsites"

/**
 * @packageDocumentation
 * zhi-mini 一款简洁、强大的思源笔记主题
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
      await import(/* @vite-ignore */ devEntry)
      // logger.debug("First load, load devEntry only")
    } else {
      await loadTheme()
    }
  } else {
    await loadTheme()
  }
})()
