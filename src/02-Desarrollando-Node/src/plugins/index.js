const { getAge } = require('./get-age.plugin');
const { generateUUID } = require('./uuid.plugin');
const { httpClient } = require('./http-client.plugin');
const { httpAxiosClient } = require('./axios.plugin');
const { buildLogger } = require('./logger.plugin')

module.exports = {
    getAge,
    generateUUID,
    httpAxiosClient,
    httpClient,
    buildLogger
}