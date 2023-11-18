import esbuild from "rollup-plugin-esbuild";
import preserveDirectives from "rollup-plugin-preserve-directives";
import { defineConfig } from "rollup";

const config = defineConfig({
  input: "index.js",
  output: {
    dir: "dist",
    preserveModules: true,
  },
  plugins: [
    esbuild({
      jsx: "automatic",
      jsxImportSource: "@emotion/react",
      loaders: {
        ".js": "jsx",
      },
    }),
    preserveDirectives(),
  ],
  external: ["@emotion/react/jsx-runtime"],
  onwarn(warning, warn) {
    if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
      return;
    }
    warn(warning);
  },
});

export default config;
