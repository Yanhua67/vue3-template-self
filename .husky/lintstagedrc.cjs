module.exports = {
  // 根据每一类文件分别进行校验
  '*.{js, jsx, ts, tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'prettier --write--parser json'
  ],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
  '*.{scss, less, styl, html}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write']
}
