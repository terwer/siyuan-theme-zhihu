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

import ZhiSdk from "zhi-sdk"
import Env from "zhi-env"

/**
 * 工具类统一入口
 *
 * @public
 * @author terwer
 * @since 1.0.0
 */
class ZhiUtil {
  private static zhiSdkObj: ZhiSdk

  /**
   * 获取 zhi-sdk 实例
   */
  public static zhiSdk() {
    if (!ZhiUtil.zhiSdkObj) {
      const env = new Env(import.meta.env)
      ZhiUtil.zhiSdkObj = new ZhiSdk(env)
      // const logger = ZhiUtil.zhiSdkObj.getLogger()
      // const common = ZhiUtil.zhiSdkObj.common
      // logger.debug(common.strUtil.f("ZhiSdk inited, components are available now,like logger, env and so on."))
    }
    return ZhiUtil.zhiSdkObj
  }
}

export default ZhiUtil
