import type { Config } from '@jest/types';
const config: Config.InitialOptions = {
  bail: 1,
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  forceCoverageMatch: ['**/*.spec.ts'],
};
export default config;
