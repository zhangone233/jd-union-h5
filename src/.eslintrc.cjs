module.exports = {
  extends: ['../.eslintrc.cjs'],
  plugins: ['import'],

  // parserOptions: {
  //   ecmaVersion: 2020,
  //   ecmaFeatures: {
  //     //设置支持的语言选项，比如支持ES6 JSX语法等等
  //     blockBindings: true,
  //     forOf: true,
  //     jsx: true,
  //   },
  // },
  rules: {
    // Ensure imports are correctly sorted and grouped
    // 'import/order': [
    //   'error',
    //   {
    //     'newlines-between': 'always',
    //     groups: [
    //       ['builtin', 'external'],
    //       ['internal', 'parent', 'sibling', 'index'],
    //     ],
    //     alphabetize: {
    //       order: 'asc',
    //       caseInsensitive: true,
    //     },
    //   },
    // ],

    'import/order': 0,

    // Enforce a newline after import statements
    'import/newline-after-import': 'error',

    // Disallow anonymous default exports
    'import/no-anonymous-default-export': 'error',

    // Enforce the use of named exports alongside default export
    'import/no-named-default': 'error',

    // Ensure all imports are declared at the top of the module
    'import/first': 'error',

    // Enforce a blank line after the last import statement
    'import/newline-after-last-import': 'error',

    // Disallow importing the same module multiple times
    'import/no-duplicates': 'error',

    // Allow only absolute imports
    'import/no-relative-parent-imports': 'error',

    // Enforce a specific file extension for imports
    'import/extensions': 0,

    // off
    'import/newline-after-last-import': 0,
  },
};
