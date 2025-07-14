module.exports = {
  extends: ["eslint:recommended", "expo"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // TypeScript ESLint recommended rules
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: { attributes: false },
      },
    ],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
  },
  ignorePatterns: [
    "babel.config.js",
    ".eslintrc.js",
    "node_modules/**",
    "dist/**",
    "build/**",
    ".expo/**",
    "ios/**",
    "android/**",
  ],
};
