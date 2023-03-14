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

import ZhiUtil from "~/src/utils/ZhiUtil"
import Zhi from "~/src/zhi"

/**
 * 主题通用类（由theme.js动态调用，除了单元测试之外请勿主动调用）
 *
 * @public
 * @author terwer
 * @since 1.0.0
 */
class Theme {
  private readonly logger
  private readonly common
  private readonly siyuanApi
  private readonly zhiTheme

  constructor() {
    const zhiSdk = ZhiUtil.zhiSdk()

    this.logger = zhiSdk.getLogger()
    this.common = zhiSdk.common
    this.siyuanApi = zhiSdk.siyuanApi
    this.zhiTheme = new Zhi()
  }

  /**
   * 主流程加载
   *
   * @param runAs 运行模式
   */
  public async init(runAs?: string): Promise<void> {
    try {
      // 初始化第三方依赖
      const dynamicImports = await this.zhiTheme.main([])
      for (const item of dynamicImports) {
        const libpath = item.libpath
        // 类型校验
        if (item.format !== "cjs" && item.format !== "js") {
          this.logger.warn("Only cjs supported, skip this lib!", libpath)
          continue
        }

        // 运行环境校验
        if (runAs) {
          if (runAs !== item.runAs) {
            this.logger.warn(
              this.common.strUtil.f("This lib can only run at {0}, skip!Lib is=>{1}", item.runAs, item.libpath)
            )
            continue
          }
        }

        this.logger.info("Loading dependency=>", libpath)

        let lib
        if (this.common.browserUtil.isInBrowser) {
          const importPath = this.common.electronUtil.joinPath(this.common.electronUtil.zhiMiniPath(), libpath)
          lib = this.common.electronUtil.requireLib(importPath)
        }

        // 如果有初始化方法，进行初始化
        if (lib && lib.init) {
          await lib.init()
        }
      }
      this.logger.info("Theme inited.")
    } catch (e) {
      this.logger.error("Theme load error=>", e)
    }
  }
}

export default Theme
