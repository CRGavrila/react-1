module.exports = {
  coverageDirectory: './coverage/',
  coverageReporters: ['json', 'lcov'],
  testRegex: '/test/.*-test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  setupFilesAfterEnv: [`${__dirname}/setup.common.ts`],
  moduleNameMapper: {
    'docs/(.*)$': `${__dirname}/../../../docs/$1`,
    'src/(.*)$': `${__dirname}/../src/$1`,
    'test/(.*)$': `${__dirname}/../test/$1`,
  },
}
