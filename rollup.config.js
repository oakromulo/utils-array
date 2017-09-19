import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

import pkg from "./package.json";

const plugins = {
  babel: babel({
    exclude: "node_modules/**",
    runtimeHelpers: true
  }),
  commonjs: commonjs(),
  resolve: resolve()
};

export default [
  {
    input: "src/index.js",
    output: {
      file: pkg.browser,
      format: "umd"
    },
    name: "UtilsArray",
    plugins: [plugins.babel, plugins.resolve, plugins.commonjs]
  },
  {
    input: "src/index.js",
    targets: [
      {dest: pkg.main, format: "cjs"},
      {dest: pkg.module, format: "es"}
    ],
    plugins: [plugins.babel],
    external: ["babel-runtime"]
  }
];
