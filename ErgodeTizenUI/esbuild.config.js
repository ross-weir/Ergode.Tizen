const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  format: "iife",
  outfile: "dist/app.bundle.js",
});
