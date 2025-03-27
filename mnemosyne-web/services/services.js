
const API_URL = 'http://localhost:3000/memorias';

export const getMemorias = async () => {
    const response = await fetch(API_URL);
    return response.json();
}

export const createMemoria = async (memoria) => {
    const response = await fetch(API_URL,  {
        method: 'Post',
        heraders: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(memoria),
            
        })
        return response.json();
}