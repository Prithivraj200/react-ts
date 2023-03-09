module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'style', 'test', 'setup'],
    ],
    'header-max-length': [2, 'always', 72],
  },
  'scope-empty': [2, 'never'],
};
