/**
 * @packageDocumentation
 * zhi-mini 一款简洁、强大的思源笔记主题
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
        if (item.format !== "cjs" || !libpath.includes(".cjs")) {
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
          const importPath = path.join(this.siyuanApi.siyuanUtil.ZHI_THEME_DIST_PATH(), libpath)
          lib = this.siyuanApi.siyuanUtil.requireLib(importPath)
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
