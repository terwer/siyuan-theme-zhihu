/*
 * Copyright (c) 2023, Terwer . All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Terwer designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Terwer in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Terwer, Shenzhen, Guangdong, China, youweics@163.com
 * or visit www.terwer.space if you need additional information or have any
 * questions.
 */

import siyuan from "siyuan"
import ZhiUtil from "~/src/utils/ZhiUtil"

import "./main.styl"

class ZhiCodeBlockPlugin extends siyuan.Plugin {
  private readonly logger

  constructor() {
    super()
    const zhiSdk = ZhiUtil.zhiSdk()
    this.logger = zhiSdk.getLogger()
  }

  onload() {
    // 使用 css 适配了，下面的不再需要
    // setTimeout(() => {
    //   // 获取自定义属性值
    //   const themeLight = document.querySelector("html")?.getAttribute("data-light-theme")
    //   this.logger.info("Found theme=>", themeLight)
    //
    //   // 适配 Rem Craft
    //   if (themeLight === "Rem Craft") {
    //     // 获取具有 .my-class 类的所有元素
    //     const elements = document.querySelectorAll(
    //       ".b3-typography .code-block .protyle-action .protyle-action__language,.protyle-wysiwyg .code-block .protyle-action .protyle-action__language"
    //     )
    //     // 迭代每个元素并设置样式
    //     elements.forEach((element: any) => {
    //       element.style.right = "5rem"
    //     })
    //   }
    // }, 3000)
    this.logger.info("ZhiCodeBlockPlugin loaded")
  }

  onunload() {
    this.logger.info("ZhiCodeBlockPlugin unloaded")
  }
}

export default ZhiCodeBlockPlugin
