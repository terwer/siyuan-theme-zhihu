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
import siyuan from "siyuan"
import PublisherHook from "~/src/zhi-plugins/zhi-publisher-plugin/publisher-hook"

/**
 * zhi publisher plugin
 *
 * @author terwer
 * @since 1.0.0
 */
class ZhiPublisherPlugin extends siyuan.Plugin {
  private readonly logger
  private readonly publisherHook

  constructor() {
    super()
    const zhiSdk = ZhiUtil.zhiSdk()
    this.logger = zhiSdk.getLogger()

    this.publisherHook = new PublisherHook()
  }

  onload() {
    this.publisherHook.init()
    this.logger.info("ZhiPublisherPlugin loaded")
  }

  onunload() {
    this.logger.info("ZhiPublisherPlugin unloaded")
  }
}

export default ZhiPublisherPlugin
