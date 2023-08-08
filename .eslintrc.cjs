module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 0, // 未使用的变量报错，关闭
    'indent': [1, 2], // 内部缩进2个空格，属性间隔开1个空格，自动对其属性缩进
    'no-multi-spaces': 2, // 禁止多余的空格
    'key-spacing': 2, // 对象键值对前后的空格
    'block-spacing': 2,
    'arrow-spacing': 2,// 箭头函数的空格
    'space-infix-ops': 2, // 操作符左右的空格
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }], // 一元操作符的空格
    'spaced-comment': [2, 'always'], // 注释语句前的空格
    'template-tag-spacing': [2, 'always'], // 模板标记和它们的字面量之间有空格
    'object-curly-spacing': [2, 'always'], // 强制在花括号中使用一致的空格
    'no-whitespace-before-property': 2, // 禁止属性前有空白
    'quotes': [1, 'single'], // 使用单引号
    'semi': [2, 'always'] // 结尾分号
  },
}
