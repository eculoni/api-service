// parser.js

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { console } = require('console');

class Parser {
  constructor(configPath) {
    this.configPath = configPath;
    this.config = this.loadConfig();
  }

  loadConfig() {
    try {
      return yaml.safeLoad(fs.readFileSync(this.configPath, 'utf8'));
    } catch (error) {
      console.error(`Error loading config file: ${error}`);
      process.exit(1);
    }
  }

  getConfig() {
    return this.config;
  }
}

module.exports = Parser;