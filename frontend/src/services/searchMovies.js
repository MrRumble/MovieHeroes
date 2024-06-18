// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// export async function searchForMovie(token) { 
//     const requestOptions = {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${token}`, 
//         },
//     };

//     let response = await fetch(`${BACKEND_URL}/searchMovies`, requestOptions);
    
//     if (response.status !== 200) {
//         throw new Error("Failed to fetch avatar");
//     }

//     const data = await response.json();
//     return data.updated_user.avatar;
// }