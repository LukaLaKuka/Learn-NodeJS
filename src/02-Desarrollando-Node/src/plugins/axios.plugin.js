const axios = require('axios');

const httpAxiosClient = {
    get: async (url) => {
        try {
            if (!url) throw new Error("No url given");
            return data = await axios.get(url);
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = {
    httpAxiosClient
}