
export const getApiData = async ( route ) => {
        // Query the API Gateway
        const url = `https://c4deo4qsw5.execute-api.us-east-1.amazonaws.com/Production/${ route }`;
        const data     = await fetch(url);
        const jsonData = await data.json();

        return jsonData;   
};