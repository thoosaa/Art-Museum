export default {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.scss$': 'jest-css-modules-transform', // Add this line
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/mocks/fileMock.js',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
};
