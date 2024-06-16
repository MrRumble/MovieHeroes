const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const get_user = async (token) => {
    const requestOptions = {
    method: "GET",
    headers: {
    Authorization: `Bearer ${token}`,
    },
};

const response = await fetch(`${BACKEND_URL}/myprofile`, requestOptions);

if (response.status !== 200) {
    throw new Error("Unable to fetch users");
}

const data = await response.json();
console.log(data)
return data;
};