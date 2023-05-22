module.exports = {
  roots: ['<rootDir>/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  // setupFilesAfterEnv: ['<rootDir>/__tests__/setupTest.ts'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  // moduleNameMapper: {
  //   '\\.(css|less)$': 'identity-obj-proxy',
  // },
};