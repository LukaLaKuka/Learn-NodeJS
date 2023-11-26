import axios from "axios";

const httpAxiosClient: {get: Function} = {
    get: async (url: string): Promise<any> => {
        try {
            let data = await axios.get(url);
            return data;
        } catch (e) {
            throw `Error fetching ${url}`;
        }
    }
}

export {
    httpAxiosClient
}