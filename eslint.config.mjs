import naverpay from '@naverpay/eslint-config'

export default [
    {ignores: ['node_modules/**', 'dist/**']},
    ...naverpay.configs.node,
    ...naverpay.configs.typescript,
    {
        files: ['scripts/**/*.js'],
        rules: {'@typescript-eslint/no-require-imports': 'off'},
    },
    {
        files: ['**/example.{js,ts}'],
        rules: {'no-console': 'off'},
    },
]
