import { useState, useEffect } from "react";
import { get_user } from "../../services/profile";


export const Profile = () => {
    const userId = localStorage.getItem("userId") 
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [data, setData] = useState("")
    
    useEffect(() => {
        if (token) {
            get_user(token)
                .then((data) => {
                    setData(data.post);
                    localStorage.setItem("token", data.token);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        }, []);

    return (
        <>
        {data}
        </>
    )
};

export default Profile;