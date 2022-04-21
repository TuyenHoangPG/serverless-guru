module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
  moduleFileExtensions: ["js", "ts"],
  moduleDirectories: ["node_modules", "lib"],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
  },
  setupFiles: ["<rootDir>/test/utils/config-env.ts"],
};
