module.exports = {
  // 继承某些已有的规则
  extends: [
    // 配置 stylelint 拓展插件
    "stylelint-config-standard",
    // 配置 vue 中 scss 样式格式化
    "stylelint-config-recommended-vue",
    // 配置 stylelint scss 插件
    "stylelint-config-standard-scss",
    // 配置 stylelint css 属性书写顺序插件
    "stylelint-config-recess-order"
  ],
  overrides: [
    // 扫描 .vue/html 文件中的 <style> 标签内的样式
    {
      files: ["**/*.{vue,html}"],
      customSyntax: "postcss-html"
    }
  ],
  rules: {
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "v-deep", "deep"]
      }
    ]
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"]
}
