export default {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.scss$': 'jest-css-modules-transform',
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
}
