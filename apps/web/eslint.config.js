import baseConfig, { restrictEnvAccess } from "@byteblitz/eslint-config/base";
import nextjsConfig from "@byteblitz/eslint-config/nextjs";
import reactConfig from "@byteblitz/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
