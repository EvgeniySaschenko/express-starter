module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "prettier",
  ],

  "globals": {
    "ROOT_PATH": true
  },


  parser: "babel-eslint",

  parserOptions: {},

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prefer-const": "off",
    "no-unused-vars": "warn",
    "unicorn/error-message": "off",
    "@typescript-eslint/no-var-requires": "off",
    eqeqeq: "warn",
    "no-var": "error",
  },
};