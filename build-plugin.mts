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

// https://github.com/vitejs/vite/discussions/1736#discussioncomment-3229793

import { build, InlineConfig } from "vite"
import path from "path"
import fs from "fs-extra"
import pluginJson from "./plugin.json" assert { type: "json" }
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

/**
 * zhi 主题构建
 *
 * @author terwer
 * @since 1.0.0
 */
class ZhiBuild {
  // libraries
  //  {
  //    "entry": "./src/zhi-plugins/zhi-blog/main.ts",
  //    "name": "ZhiBlog",
  //    "fileName": "zhi-blog"
  //  },
  private readonly libraries = pluginJson

  /**
   * 拷贝文件到构建输出目录
   */
  private copyPluginFile(entryPath: string, entryFolder: string, pluginBasePath: string, filename: string) {
    const fromAbsPath = path.join(entryPath, filename)
    const toAbsPath = path.join(pluginBasePath, entryFolder, filename)
    // console.log(fromAbsPath)
    // console.log(toAbsPath)
    if (fs.pathExistsSync(fromAbsPath)) {
      fs.copySync(fromAbsPath, toAbsPath)
      console.log("[" + entryFolder + "] -> " + filename + " copied.")
    }
  }

  // 插件处理
  private handlePluginName(chunkInfo: any) {
    const facadeModuleId = chunkInfo.facadeModuleId
    const entryPath = path.dirname(facadeModuleId ?? ".")
    const entryFolder = entryPath.split("/").pop() ?? ""
    const pluginBasePath = path.join("lib", "zhi-plugins")

    // 复制 manifest.json
    this.copyPluginFile(entryPath, entryFolder, pluginBasePath, "manifest.json")
    // 复制 README.md
    this.copyPluginFile(entryPath, entryFolder, pluginBasePath, "README.md")

    // 返回主文件绝对路径
    const mainToPath = path.join(pluginBasePath, entryFolder)
    const mainJsName = "main.js"
    console.log("[" + entryFolder + "] -> process " + mainJsName)
    return path.join(mainToPath, mainJsName)
  }

  public async processBuild() {
    const that = this
    for (const libItem of this.libraries) {
      const viteConfig: InlineConfig = {
        configFile: false,
        resolve: {
          alias: [
            {
              find: "~",
              replacement: path.resolve(path.dirname("."), ""),
            },
          ],
        },
        plugins: [cssInjectedByJsPlugin({ styleId: "zhi-custom-style" })],
        build: {
          outDir: ".",
          lib: {
            entry: libItem.entry,
            name: libItem.name,
            fileName: libItem.fileName,
            formats: ["cjs"],
          },
          emptyOutDir: false,
          copyPublicDir: true,
          commonjsOptions: {
            defaultIsModuleExports: true,
            include: [],
          },
          rollupOptions: {
            plugins: [],
            output: {
              assetFileNames: "[name].[ext]",
              entryFileNames: (chunkInfo) => {
                return that.handlePluginName(chunkInfo)
              },
              esModule: "if-default-prop",
              manualChunks: undefined,
            },
            external: ["path", "fs", "siyuan"],
          },
          // 构建后是否生成 source map 文件
          sourcemap: false,
          // 是否压缩
          minify: false,
        },
        optimizeDeps: {
          disabled: false,
        },
      }
      await build(viteConfig)
    }
  }
}

;(async function () {
  console.log("Zhi plugins is building...")
  const zhiBuild = new ZhiBuild()
  await zhiBuild.processBuild()
  console.log("Zhi plugins build finished.")
})()
