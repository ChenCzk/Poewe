import { fileURLToPath, URL } from 'node:url'
import { resolve } from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {pluginsConfig,resolveConfig} from "./scripts/preview";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "tsconfig.prod.json",
      outDir: ["build/lib","build/es"],
    }),

    ...pluginsConfig,
  ],
  resolve: resolveConfig,
  build: {
    outDir: "build",
    target: "esnext",
    cssCodeSplit: true,
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          exports: "named",
          //让打包目录和我们目录对应
          preserveModules: true,
          name: "BqDesign",
          dir: "./build/dist",
        },
        {
          format: "es",
          entryFileNames: "[name].js",
          exports: "named",
          preserveModules: true,
          preserveModulesRoot: "packages",
          dir: "./build/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          exports: "named",
          preserveModules: true,
          preserveModulesRoot: "packages",
          dir: "./build/lib",
        },
      ],
    },
    lib: {
      entry: resolve(__dirname, "./packages/index.ts"),
      name: "BqDesign",
      fileName: (format) => `bq-design.${format}.js`,
      formats: ["es", "cjs"]
    },
  },
  server:{
    port:2222
  }
})
