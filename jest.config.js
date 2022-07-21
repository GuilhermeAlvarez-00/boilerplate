module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	testPathIgnorePatterns: ['/node_modules', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts(x)'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
