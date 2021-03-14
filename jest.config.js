module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/src/__tests__/test-utils.tsx'],
    collectCoverageFrom: [
        "src/pages/**/*.tsx",
        "src/components/**/*.tsx"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
        "\\.(css|less|scss|sass)$": "jest-css-modules-transform"
    },
};
