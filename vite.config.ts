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
      entry: [path.resolve(__dirname, "src/index.ts")],
      formats: ["es", "cjs"],
      name: "index",
    },
    rollupOptions: {
      output: {
        exports: "named",
      },
    },
  },
})
