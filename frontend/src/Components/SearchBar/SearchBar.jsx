import { FaSearch } from "react-icons/fa";
import {searchMovies} from '../../services/searchMovies'
import "./SearchBar.css"
import { useNavigate } from "react-router-dom";

const SearchBar = ({input, setInput, setFoundMovies}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const searchedMovies = await searchMovies(token, input);
            setInput("");
            setFoundMovies(searchedMovies)
            localStorage.setItem("searchedMovies", JSON.stringify(searchedMovies)); // Store as JSON string
            navigate("/movie_results")
        } catch (error) {
            console.error("Failed to update avatar:", error);
        }
    };

    return (
        <div className="searchBar-wrapper">
            <form onSubmit={handleSubmit} className="searchBar-form">
                <input
                    id="searchBar-searchinput"  
                    type="text" 
                    placeholder="Search movies..." 
                    value={input}  
                    onChange={(e) => setInput(e.target.value)}
                />
                <button id="searchBar-submit" type="submit" value="Save Avatar">
                    <FaSearch id="search-icon" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar
