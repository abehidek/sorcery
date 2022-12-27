import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.ts"],
  entry: ["src/**/*.tsx", "!**/*.stories.tsx", "src/index.ts"],
  injectStyle: true,
  treeshake: true,
  minify: true,
  sourcemap: true,
  clean: true,
  dts: true,
  splitting: true,
  bundle: true,
  format: ["esm", "cjs"],
  external: ["react", "react-dom"],
});
