const pg = require('../../../pg');

const testDAO = {

  all: function() {
    return pg.any("SELECT * from test");
  }
}

module.exports = testDAO;