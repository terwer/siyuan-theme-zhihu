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

import DependencyItem from "~/src/models/DependencyItem"
import PluginSystemHook from "~/src/plugin-system/plugin-system-hook"

/**
 * 插件系统
 *
 * @author terwer
 * @since 1.0.0
 */
class PluginSystem {
  /**
   * 插件系统注册
   *
   * @author terwer
   * @since 1.0.0
   */
  public async initPluginSystem(): Promise<DependencyItem[]> {
    const pluginSystemHook = new PluginSystemHook()
    await pluginSystemHook.init()
    return Promise.resolve([])
  }
}

const pluginSystem = new PluginSystem()
export default pluginSystem
