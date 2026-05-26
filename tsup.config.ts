import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  outDir: "lib",
  splitting: false,
  target: "es2020",
  cjsInterop: true,
});
