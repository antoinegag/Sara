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
  /**
   * Get the version string and size of the database on disk
   * @return {Promise<JSON>}
   */
  getInfo: function() {
    return db.one('SELECT pg_size_pretty(pg_database_size(\'sara\')) AS size, version();')
        .then((data) => {
          return {
            online: true,
            version: data.version,
            size: data.size,
          };
        })
        .catch((error) => {
          return {
            online: false,
            version: 'unknown',
            size: 'unknown',
          };
        });
  }
};
