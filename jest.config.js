module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'lib/**/*.js',
    '!lib/**/plugin.js',
    '!lib/**/templates/*.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
