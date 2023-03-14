import ZhiUtil from "~/src/utils/ZhiUtil"
import HackPluginSystem from "~/src/plugin-system/hack-plugin-system"

/**
 * 插件系统入口
 *
 * @author terwer
 * @since 1.0.0
 */
class PluginSystemHook {
  private readonly logger
  private readonly common
  private readonly siyuanApi

  private readonly fs
  private readonly path

  private readonly hack

  constructor() {
    const zhiSdk = ZhiUtil.zhiSdk()

    this.logger = zhiSdk.getLogger()
    this.common = zhiSdk.common
    this.siyuanApi = zhiSdk.siyuanApi

    this.hack = new HackPluginSystem()
  }

  /**
   * 同步插件到插件目录
   *
   * @param p - 插件对象
   */
  async syncZhiPlugins(p: any) {
    console.log("syncZhiPlugins")
  }

  /**
   * 插件系统初始化
   */
  public async init() {
    const sys = await this.hack.initPluginSystem()
    if (!sys) {
      this.logger.error("Plugin system init error, some feature may not work!")
      return
    }

    await this.syncZhiPlugins(sys)
    this.logger.info("PluginSystem inited.")
  }
}

export default PluginSystemHook
