import esbuild from "rollup-plugin-esbuild";

// Could be useful
// import preserveDirectives from "rollup-plugin-preserve-directives";

import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import postcss from "rollup-plugin-postcss";
import tailwindConfig from "./tailwind.config.js";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";

const config = defineConfig({
  input: ["src/index.js", "styles/index.css"],

  output: {
    dir: "dist",
    preserveModules: true,
    banner(chunkInfo) {
      if (path.basename(chunkInfo.fileName).startsWith("index")) {
        return;
      } else {
        return '"use client"';
      }
    },
  },
  plugins: [
    nodeResolve(),
    postcss({
      extensions: [".css"],
      plugins: [autoprefixer(), tailwindcss(tailwindConfig)],
      config: false,
      extract: "styles/index.css",
    }),

    esbuild({
      jsx: "automatic",
      jsxImportSource: "@emotion/react",
      loaders: {
        ".js": "jsx",
      },
    }),
    // preserveDirectives(),
  ],
  external: ["@emotion/react/jsx-runtime"],
  onwarn(warning, warn) {
    if (
      warning.code === "MODULE_LEVEL_DIRECTIVE" ||
      // TODO: This is temporary skip the warning,
      // find a way to fix this.
      warning.code.includes("SOURCEMAP_ERROR")
    ) {
      return;
    }
    warn(warning);
  },
});

export default config;
