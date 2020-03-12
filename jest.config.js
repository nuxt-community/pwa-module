module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['lib/**/*.js', '!lib/**/plugin.js', '!lib/**/templates/*.js'],
  testEnvironment: 'node'
}
