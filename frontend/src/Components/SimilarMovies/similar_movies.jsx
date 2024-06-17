// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const SimilarMovie = () => {
//     const { id } = useParams();
//     const [similarMovie, setSimilarMovie] = useState(null);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         fetch(`http://localhost:5001/movie_page/${id}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => setSimilarMovie(data))
//             .catch(error => setError(error.toString()));
//     }, [id]);
//     if (error) {
//         return <div>Error: {error}</div>;
//     }
// return (
//     <div className="home">

//         {/* <p>{allMovies}</p> */}

//         <ul>
//             {similarMovie.map((movie, index) => (
//                 <li key={index}>
//                     <p>{movie.title}</p>
//                     <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//                 {/* <a href= $"{}" > 
//                 </a> */}
//                 </li>
                
//             ))}
//         </ul>
//     </div>
// );
// };

// export default SimilarMovie;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const SimilarMovie = () => {
//     const { id } = useParams();
//     const [similarMovies, setSimilarMovies] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch(`http://localhost:5001/movie_page/${id}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setSimilarMovies(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error.toString());
//                 setLoading(false);
//             });
//     }, [id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="home">
//             <ul>
//                 {similarMovies.map((movie) => (
//                     <li key={movie.id}>
//                         <p>{movie.title}</p>
//                         <img 
//                             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
//                             alt={movie.title} 
//                         />
//                         <a href={`/movie/${movie.id}`}>View Details</a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SimilarMovie;