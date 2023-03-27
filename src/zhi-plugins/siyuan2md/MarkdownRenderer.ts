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

import { Common, SiyuanUtil } from "zhi-sdk"
import siyuan from "siyuan"
import Siyuan2md from "~/src/zhi-plugins/siyuan2md/main"

/**
 * Markdown渲染器
 *
 * @author terwer
 * @since 1.0.0
 */
class MarkdownRenderer {
  private readonly logger
  private readonly serverApi
  private readonly clientApi = siyuan.clientApi
  private readonly common
  private readonly siyuanUtil
  private readonly notebook
  private readonly outputFolder

  constructor() {
    this.logger = this.clientApi.createLogger(Siyuan2md.name)

    this.serverApi = siyuan.serverApi
    this.common = new Common()
    this.siyuanUtil = new SiyuanUtil()

    this.notebook = "20220718062546-2nbmy21"
    this.outputFolder = "/Users/terwer/Downloads/siyuan2md/default"
    // const appDataFolder = this.common.electronUtil.getCrossPlatformAppDataFolder()
    // this.outputFolder = this.common.electronUtil.joinPath(appDataFolder, "siyuan2md", "default")
  }

  /**
   * 渲染 Markdown 的入口
   */
  public async renderMd() {
    const fs = this.common.electronUtil.requireLib("fs")
    if (!fs.existsSync(this.outputFolder)) {
      fs.mkdirSync(this.outputFolder, { recursive: true })
    }

    // const res = await this.listDocsByPath("20220718062546-2nbmy21")
    // const res = await this.listDocsByPath("20220718062546-2nbmy21", "/20230327153408-q8r0m7q.sy")
    // if (res.code != 0) {
    //   throw new Error("Unable to fetch docs")
    // }
    // const docs = res.data
    // const files = docs.files
    const ret: any[] = []
    await this.getAllFileList(this.notebook, "", ret)
    this.logger.info(this.common.strUtil.f("Found {0} files.", ret.length))

    for (let i = 0; i < ret.length; i++) {
      const file = ret[i]
      const pageId = file.id
      // const path = file.path
      const name = file.name.replace(".sy", ".md")

      const mdRes = await this.serverApi.exportMdContent(pageId)
      const md = mdRes.content
      const toPath = this.common.electronUtil.joinPath(this.outputFolder, name)

      // this.logger.info("toPath=", { toPath: toPath })
      // this.logger.info("md=>", { md: md })
      const fsPromise = this.common.electronUtil.requireLib("fs").promises
      await fsPromise.writeFile(toPath, md, { encoding: "utf8" })
    }
  }

  /**
   * 递归获取该笔记本下面的所有文件
   *
   * @param notebook 笔记本
   * @param path 路径，根路径传空
   * @param ret 文件列表
   * @private
   */
  private async getAllFileList(notebook: string, path: string, ret: any[]) {
    const res = await this.listDocsByPath(notebook, path)
    if (res.code != 0) {
      throw new Error("Unable to fetch docs")
    }
    const docs = res.data
    const files = docs.files as []

    // 有子文件就递归获取
    if (files.length > 0) {
      // ret.concat(files)
      ret.push(...files)

      for (let i = 0; i < files.length; i++) {
        const file = files[i] as any
        await this.getAllFileList(notebook, file.path, ret)
      }
    }
  }

  /**
   * 获取路径下文档列表
   *
   * @param notebook - 笔记本
   * @param path - 路径
   */
  private async listDocsByPath(notebook: string, path?: string) {
    const data = { notebook: notebook, path: path ?? "", sort: 4 }
    const url = "/api/filetree/listDocsByPath"
    return this.serverApi.request(url, data)
    //文档hepath与Markdown 内容
  }
}

export default MarkdownRenderer
