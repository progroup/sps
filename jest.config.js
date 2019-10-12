module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/client/components/**/*.vue',
    '<rootDir>/client/layouts/**/*.vue',
    '<rootDir>/client/pages/**/*.vue',
  ],
  moduleFileExtensions: ['js', 'vue', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/client/$1',
    '^~/(.*)$': '<rootDir>/client/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  modulePathIgnorePatterns: [
    'site',
    'resources',
  ],
  // notify: false,
  notifyMode: 'always',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  verbose: true,
  testEnvironment: 'node',
}
