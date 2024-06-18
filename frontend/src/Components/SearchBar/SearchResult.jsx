import { useNavigate } from "react-router-dom";
import "../../../../css/SearchResults.css";

export const SearchResult = ({ SURNAME, FORENAME, userid }) => {
    const navigate = useNavigate ();

    const handleClick = () => {
        navigate(`/profile/${userid}`);
        window.location.reload();
    };
    
    return (
        <div
            className="search-result"
            onClick={handleClick}
        >
        {FORENAME +' ' + SURNAME}
        </div>
    );
};

