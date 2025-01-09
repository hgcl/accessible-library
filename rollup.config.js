import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import analyze from "rollup-plugin-analyzer";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

// Shared common options for the two bundles
const outputOptions = {
  exports: "named", // setting the exports option to "named", because we're exporting everything as named exports
  preserveModules: true, // create separate chunks for all modules, using the original module names as file names
  banner: `/*
  * Accessible UI Library
  * @copyright Clara Le
  */`,
};

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return (id) => pattern.test(id);
};

const babelRuntimeVersion = pkg.dependencies["@babel/runtime"].replace(
  /^[^0-9]*/,
  ""
);

const config = {
  input: "src/index.js", // root level
  output: [
    {
      dir: "dist/esm",
      format: "esm",
      ...outputOptions,
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      ...outputOptions,
    },
  ],
  // ensures that Rollup doesn't bundle those external dependencies into our final bundle
  external: makeExternalPredicate([
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]),
  // order of plugins is very important
  plugins: [
    alias({
      entries: {
        src: fileURLToPath(new URL("src", import.meta.url)), // enables absolute import paths for src
      },
    }),
    nodeResolve({ extensions: [".js", ".jsx"] }), // to resolve external modules
    commonjs({ include: ["node_modules/**"] }), // converts 3rd-party CommonJS modules into ES6 code
    babel({
      babelHelpers: "runtime",
      exclude: /node_modules/,
      plugins: [
        ["@babel/plugin-transform-runtime", { version: babelRuntimeVersion }],
      ],
      presets: [
        ["@babel/preset-env", { targets: "defaults" }],
        ["@babel/preset-react", { runtime: "automatic" }],
      ],
    }), // Babel for code transpilation
    terser(), // minify the code
    analyze({
      hideDeps: true,
      limit: 0,
      summaryOnly: true,
    }), // print useful info upon successful build
  ],
};

export default config;
