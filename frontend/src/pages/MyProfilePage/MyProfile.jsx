import Navbar from "../../Components/Navbar";

const Myprofilepage = () => {
    // Retrieve user's name from localStorage
    const fullName = localStorage.getItem("full_name");
    const email = localStorage.getItem("email");

    console.log(localStorage.getItem('full_name'))
    // console.log("Login Response:", loginResponse);
    return (
        <>
            <Navbar userName={fullName} /> {/* Pass userName as a prop to Navbar */}
            <h1>MY PROFILE</h1>
            <div>
                <p>User Name: {fullName}</p>
                <p>Email: {email}</p>
                <p>My Favourite Films:</p>
            </div>
        </>
    );
};

export default Myprofilepage;
