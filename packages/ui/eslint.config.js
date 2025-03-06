import baseConfig from "@byteblitz/eslint-config/base";
import reactConfig from "@byteblitz/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
