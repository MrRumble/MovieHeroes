//template for post requests after loggin
export const post = async (email, password) => {
    const payload = {
    email: email,
    password: password,
    };

    const requestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
    };

    const response = await fetch(`${BACKEND_URL}/login`, requestOptions);

    const data = await response.json();

    if (response.status === 201) {
        return data;
    }else if(response.message === "User not found") {
        return data.message;
    } else {
        return data.message;
    }
};

// exapmle on how to get data in your frontend Profile.jsx , after login 
export const Profile = () => {
    const userId = localStorage.getItem("userId");
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [data, setData] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            get_user(token)
                .then((data) => {
                    setData(data.post);
                    localStorage.setItem("token", data.token);
                    setToken(data.token);
                })
                .catch((err) => {
                    console.error("Error fetching user data:", err);
                    // Handle error if token is invalid or expired
                });
        } else {
            console.error("No token found, user not logged in.");
            navigate("/login")
            // Redirect to login or show appropriate message
        }
    }, []);
    // return()
}