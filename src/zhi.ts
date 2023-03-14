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

import { version } from "~/package.json"
import ThemeFromEnum from "~/src/enums/themeFromEnum"
import ZhiUtil from "~/src/utils/ZhiUtil"
import DependencyItem from "~/src/models/DependencyItem"
import Bootstrap from "~/src/bootstrap"

/**
 * 主题入口
 *
 * @author terwer
 * @since 1.0.0
 */
class Zhi {
  private readonly logger
  private readonly common

  constructor() {
    const zhiSdk = ZhiUtil.zhiSdk()

    this.logger = zhiSdk.getLogger()
    this.common = zhiSdk.common
  }

  public async main(args: string[]): Promise<DependencyItem[]> {
    this.logger.debug(this.common.strUtil.f("Parsing args <{0}> ...", args))
    this.hello(ThemeFromEnum.ThemeFrom_mini_Siyuan)
    return await Bootstrap.start()
  }

  public hello(from: string): void {
    this.logger.info(this.common.strUtil.f("Hello, {0} {1} v{2}! You are from {3}", "zhi", "mini", version, from))
  }
}

// 默认支持esm
export default Zhi
