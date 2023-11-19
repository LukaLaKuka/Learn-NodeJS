const httpClient: { get: Function, post: Function } = {
    get: async (url: string): Promise<any> => {
        try {
            let response = await fetch(url);
            return await response.json();
        } catch (e) {
            if (typeof e === 'string') {
                throw new Error(e);
            } else {
                // Handle the case where e is undefined or another type
            }
        }
    },

    post: async (url: string, data: Object): Promise<any> => {
        try {
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Error with http request");
            }

            let finalResponse = await response.json();
            return finalResponse;
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = {
    httpClient,
}