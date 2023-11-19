const axios = require('axios');

const httpAxiosClient: {get: Function} = {
    get: async (url: string): Promise<any> => {
        try {
            if (!url) throw new Error("No url given");
            let data = await axios.get(url);
            return data;
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = {
    httpAxiosClient
}