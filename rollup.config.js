import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

const deps = Object.keys(
  Object.assign({}, pkg.peerDependencies, pkg.dependencies)
);

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  external: (id) => deps.some((dep) => id === dep || id.startsWith(`${dep}/`)),
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      typescript: require("typescript"),
    }),
  ],
};
