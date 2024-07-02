


const config = {
  clearMocks: true,
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  
  collectCoverage: true,

 coverageDirectory: "coverage",


  coverageProvider: "v8",

  testEnvironment: "jsdom",


};

module.exports = config;
