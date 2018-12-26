const fs = require('fs');

module.exports = {
  checkConfig: function() {
    if (!fs.existsSync(`${process.cwd()}/backend/config.json`)) {
      fs.copyFileSync(`${process.cwd()}/backend/config.template.json`, `${process.cwd()}/backend/config.json`);
      console.log('Created config file from template, restart the program');
      process.exit(0);
    } else {
      console.log('Found config file');
    }
  },
};
