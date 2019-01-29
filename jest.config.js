module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/tests/*', '!src/App.jsx'],
  testRegex: 'tests/.*\\.test\\.js$',
  setupFiles: ['raf/polyfill', '<rootDir>/src/tests/setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/__mocks__/fileMock.js',
    '\\.(scss|css)$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
}
