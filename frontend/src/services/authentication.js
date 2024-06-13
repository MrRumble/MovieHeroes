const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const signup = async (fullName, email, password) => {
    const payload = {
    full_name: fullName,
    email: email,
    password: password,
    };

    const requestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    };

    let response = await fetch(`${BACKEND_URL}/signup`, requestOptions);

    const data = await response.json()
    console.log("this is the response",data );

    // docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
    if (response.status === 201) {
    return;
    } else if (response.status === 500){
    return data.email_exist
    }else{
    throw new Error(
        `Received status ${response.status} when signing up. Expected 201`
    );
    }
};

export const login = async (email, password) => {
    const payload = {
    email: email,
    password: password,
    };

    const requestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    };

    const response = await fetch(`${BACKEND_URL}/tokens`, requestOptions);

    if (response.status === 200) {
    let data = await response.json();
    return data;
    } else {
    throw new Error(
        `Received status ${response.status} when logging in. Expected 200`
    );
    }
};