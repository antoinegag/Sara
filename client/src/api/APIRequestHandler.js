class APIRequestHandler {
  /**
   * Query the given url and return a promise with the data in json format
   * @param {string} url the url to query
   * @returns {Promise} Promise with the json object from the response
   */
  static query(url) {
    return fetch(url).then(res => res.json());
  }

  /**
   * Post JSON data to a given URL
   * @param {string} url the url to post to
   * @param {json} body Json objet to post
   * @returns {Promise} Promise with the json object from the response
   */
  static post(url, body) {
    return fetch(url, { method: "POST", body: JSON.stringify(body) }).then(res => res.json());
  }
}

export default APIRequestHandler;