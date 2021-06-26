import type { Config } from '@jest/types';

export default async function JestConfig(): Promise<Config.InitialOptions> {
  return {
    testPathIgnorePatterns: [
      '<rootDir>/.next/',
      '<rootDir>/node_modules/',
      '<rootDir>/tests/setup.ts',
    ],
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
      // '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    moduleDirectories: ['node_modules', '.'],
  };
}
