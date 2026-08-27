import naverpay from '@naverpay/eslint-config'
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'

export default [
    {ignores: ['node_modules/**', 'dist/**']},
    ...naverpay.configs.node,
    ...naverpay.configs.typescript,
    ...naverpay.configs.react,
    {
        files: ['scripts/**/*.js'],
        rules: {'@typescript-eslint/no-require-imports': 'off'},
    },
    {
        files: ['**/example.{js,ts}'],
        rules: {'no-console': 'off'},
    },
    ...storybook.configs['flat/recommended'],
]
