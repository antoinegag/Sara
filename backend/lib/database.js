const db = require('../pg');


module.exports = {
/**
 * @return {Promise<JSON>} Status and version of the database
 */
  getStatus: function() {
    return db.proc('version')
        .then((data) => {
          return {
            online: true,
            version: data.version,
          };
        })
        .catch((error) => {
          return {
            online: false,
            version: 'unknown',
          };
        });
  },
};
