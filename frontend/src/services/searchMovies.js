const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const searchMovies = async (token, value) => {
    const payload = {
        value: value
    };
    
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
    };

    let response = await fetch(`${BACKEND_URL}/searchMovies`, requestOptions);
    

    const data = await response.json()

    // console.log("this is the searchMovies response", data)
    
    if (response.status !== 200) {
    throw new Error("Unable to an avatar");
    } else {
    return data
    }
};