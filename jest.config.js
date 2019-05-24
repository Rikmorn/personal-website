module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.prod.json",
    },
  },
  testRegex: "\\.(spec)\\.ts$",
  moduleFileExtensions: ["ts", "js", "json"],
  collectCoverageFrom: ["**/*.ts", "!**/types.ts", "!**/node_modules/**"],
};
