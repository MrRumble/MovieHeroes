const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const signup = async (formData) => {
    const requestOptions = {
    method: "POST",
    body: formData, // FormData automatically sets the correct headers
    };

    let response = await fetch(`${BACKEND_URL}/users`, requestOptions);

    // Check if the response is successful
    if (response.status === 201) {
        return;
    } else {
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