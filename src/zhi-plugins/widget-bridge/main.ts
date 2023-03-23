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

import siyuan from "siyuan"
import { IPluginCommand } from "siyuan/types"

const Plugin = siyuan.Plugin

class WidgetBridge extends Plugin {
  private logger
  private readonly clientApi = siyuan.clientApi
  private el!: HTMLElement

  constructor() {
    super()
    this.logger = this.clientApi.createLogger(WidgetBridge.name)
  }

  onload() {
    this.logger.info("WidgetBridge load")
  }

  onunload() {
    this.logger.info("WidgetBridge unload")
  }

  registerCommand(command: IPluginCommand) {
    this.logger.info("WidgetBridge registerCommand", command)
  }
}

export default WidgetBridge
