const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const updateAvatar = async (token=null, avatar) => {
    const payload = {
        token: token,
        avatar:avatar
    
    };
    console.log("this is PAYLOAD", payload);
    
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
    };

    let response = await fetch(`${BACKEND_URL}/userProfile`, requestOptions);
    

    const data = await response.json()

    console.log("this is the avatar response", data.update_user.avatar)
    
    if (response.status !== 200) {
    throw new Error("Unable to add friend");
    } else {
    return data.update_user.avatar; //we may need to update this to access a specific item
    }
};