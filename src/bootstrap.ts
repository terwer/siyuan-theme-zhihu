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

import Lifecycle from "~/src/Lifecycle"
import DependencyItem from "~/src/models/DependencyItem"

/**
 * zhi主题唯一激活入口
 *
 * @author terwer
 * @since 1.0.0
 */
class Bootstrap {
  private static lifecycle: Lifecycle

  static {
    Bootstrap.lifecycle = new Lifecycle()
  }

  /**
   * 主题激活
   */
  public static async start(): Promise<DependencyItem[]> {
    Bootstrap.lifecycle.load()
    return Promise.resolve(Bootstrap.lifecycle.dynamicImports)
  }
}

export default Bootstrap
