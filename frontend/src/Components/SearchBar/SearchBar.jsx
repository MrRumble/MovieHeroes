import { FaSearch } from "react-icons/fa";
import { useState} from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        console.log(BACKEND_URL)
        fetch(`${BACKEND_URL}/searchMovies`) 
        .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
        .then((json) => {
            console.log(json)
                const results = json.filter((movie) => {
                    console.log(movie)
                return (
                    value &&
                    movie &&
                    (movie.title.toLowerCase().includes(value))
                );
            });
            setResults(results);

            console.log(results)
        });
};
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };



    
// const handleSearch = async(event) =>{
//     event.preventDefault();
//     const response = await searchForMovie()
//     const results = response.users.filter((user) => {
//                     console.log(user)
//                 return (
//                     value &&
//                     user &&
//                     (user.forename.toLowerCase().includes(value)||
//                     user.surname.toLowerCase().includes(value))
//                 );
//             });
//             setResults(results);

//             console.log(results)
//         });
// };
//     const handleChange = (value) => {
//         setInput(value);
//         fetchData(value);

//     };

    return (
        <div className="input-wrapper">
            <input
                id="searchinput" autoComplete="off" type="text" placeholder="Search movies..." 
                value={input}  onChange={(e) => handleChange(e.target.value)}/>
            <FaSearch id="search-icon" />
        </div>
    )
}

export default SearchBar