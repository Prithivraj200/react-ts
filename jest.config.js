module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/index.tsx'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
  },
};
