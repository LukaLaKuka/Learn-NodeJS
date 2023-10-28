const httpClient = {
    get: async (url) => {
        try {
            let response = await fetch(url);
            return data = await response.json();
        } catch (e) {
            throw new Error(e);
        }
    },

    post: async (url, data) => {
        try {
            let response = fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });
            return res = await response.json()
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = {
    httpClient,
}