module.exports = {
    testPathIgnorePatterns: ['<rootDir>/scripts/', '<rootDir>/node_modules/', '<rootDir>/packages/(.*)/dist'],
    coverageDirectory: '<rootDir>/coverage/',
    coverageReporters: ['html', 'cobertura', 'lcov'],
    collectCoverage: true,
    collectCoverageFrom: [
      '**/src/**/*.{js,jsx}',
      '!**/*mock*.*',
    ],
    setupFiles: ['./setupTests.js'],
    moduleNameMapper: {
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/styleMock.js",
      '\\.(css|scss)$': '<rootDir>/styleMock.js',
      '\\.svg$': '<rootDir>/svgMock.js',
    },
    testURL: 'http://example.test',
    modulePaths: [
      "<rootDir>"
    ],
  };