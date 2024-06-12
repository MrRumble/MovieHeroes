import TrendingMovies from "../../Components/TmdbTrendingPage/TrendingMovies";
import Navbar from "../../Components/Navbar";
const TmdbTrendingPage = () => {
    return (
        <>
        <Navbar/>
        <h1>MOVIE HEROES</h1>
        <h2>TMDBs Current Trending films</h2>
        <TrendingMovies/>
        </>
    )
};

export default TmdbTrendingPage