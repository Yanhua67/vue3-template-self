module.exports = {
  globals: {
    ht: true
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true
  },
  extends: [
    // 检测通过AutoImports自动引入的Eslint配置
    "./.eslintrc-auto-import.json",
    "airbnb-base",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 2022,
    experimentalDisableTemplateSupport: false
  },
  plugins: ["vue"],
  rules: {
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [0, { "packageDir ": "./src/" }],
    "import/prefer-default-export": 0,
    "no-console": 0,
    "no-param-reassign": 0,
    "no-shadow": 1,
    "no-unused-vars": 1,
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": 0,
    "vue/no-ref-as-operand": 2,
    "no-use-before-define": 0,
    "no-debugger": 1,
    "vue/one-component-per-file": 0,
    "no-plusplus": 0,
    "no-unused-expressions": 0,
    "class-methods-use-this": 0,
    "no-restricted-syntax": 0,
    "no-nested-ternary": 0,
    "no-empty": 0,
    "consistent-return": 0,
    "prefer-promise-reject-errors": 0,
    "import/no-cycle": 0
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", "svg"],
        moduleDirectory: ["node_modules", "src/"]
      },
      alias: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", "svg"],
        map: [["@", "./src"]]
      }
    }
  }
}
