import { FaSearch } from "react-icons/fa";
import {searchMovies} from '../../services/searchMovies'
import "./SearchBar.css"

const SearchBar = ({input, setInput, setFoundMovies}) => {

    const token = localStorage.getItem('token');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const searchedMovies = await searchMovies(token, input);
            setInput("");
            // console.log("!!!!!!!!",searchedMovies)
            setFoundMovies(searchedMovies)
        } catch (error) {
            console.error("Failed to update avatar:", error);
        }
    };

    return (
        <div className="input-wrapper">
            <form onSubmit={handleSubmit} className="searchBar-form">
                <input
                    id="searchinput"  
                    type="text" 
                    placeholder="Search movies..." 
                    value={input}  
                    onChange={(e) => setInput(e.target.value)}
                />
                <button id="submit" type="submit" value="Save Avatar">
                    <FaSearch id="search-icon" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar