import "./NavBarLogin.css";
import MovieHero from "../../assets/MovieHero.png"

const NavBarLogin = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-title">
                    <img src={MovieHero} className="navbar-logo" alt="Movie Heroe logo"></img>
                    <h1>MovieHeroes</h1>
                </div>
            </div>
        </nav>
    );
}


export default NavBarLogin;