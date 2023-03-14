import ZhiUtil from "~/src/utils/ZhiUtil"

/**
 * hack插件系统的某些功能
 *
 * @author terwer
 * @since 1.0.0
 */
class HackPluginSystem {
  private readonly logger
  private readonly common
  private readonly siyuanApi

  constructor() {
    const zhiSdk = ZhiUtil.zhiSdk()

    this.logger = zhiSdk.getLogger()
    this.common = zhiSdk.common
    this.siyuanApi = zhiSdk.siyuanApi
  }

  /**
   * 获取插件系统对象
   */
  public getPluginSystem = () => {
    return this.siyuanApi.siyuanUtil.siyuanWindow().pluginSystem
  }

  /**
   * 获取插件系统版本
   */
  public getPluginSystemVersion = () => {
    return this.siyuanApi.siyuanUtil.siyuanWindow().pluginSystemVersion
  }

  public async initPluginSystem() {
    // 初始化过了，直接返回，防止插件系统重复加载
    const pluginSystem = this.getPluginSystem()
    if (pluginSystem) {
      this.logger.warn("Plugin system already loaded by snapshots, ignore initiation.")
      this.logger.warn("Loaded plugin system version is ", this.getPluginSystemVersion())
      return
    }

    try {
      this.logger.info("Undetected plugin system，initiating plugin system...")
    } catch (e) {
      this.logger.info("Local plugin system not found, load online", e)
    }

    const sys = this.getPluginSystem()
    const sysv = this.getPluginSystemVersion() ?? "unknown"
    this.logger.info(this.common.strUtil.f("Plugin system inited, version => {0}.", sysv))
    return Promise.resolve(sys)
  }
}

export default HackPluginSystem
