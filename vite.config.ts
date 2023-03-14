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

import path from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import eslint from "vite-plugin-eslint"

export default defineConfig({
  plugins: [dts(), eslint()],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, ""),
      },
    ],
  },
  build: {
    outDir: "lib",
    lib: {
      entry: [path.resolve(__dirname, "theme.ts")],
      formats: ["cjs"],
      name: "theme",
    },
    rollupOptions: {
      output: {
        esModule: "if-default-prop",
        exports: "named",
      },
      external: ["siyuan"],
    },
  },
})
