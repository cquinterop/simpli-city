export default {
  extends: ['@commitlint/config-conventional'],
  ignores: [(message) => message.includes('chore(release)')],
  rules: {
    'body-max-line-length': [2, 'always', 100],
  }
};
