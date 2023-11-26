const httpClient: { get: Function } = {
    get: async (url: string): Promise<any> => {
        try {
            let response = await fetch(url);
            return await response.json();
        } catch (e) {
            throw `Error fetching ${url}`;
        }
    }
}

export {
    httpClient,
}