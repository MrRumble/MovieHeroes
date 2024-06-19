// import React, { useState, useEffect } from "react";
// import "../MovieDetails/Ratings.css";



// const Ratings = () => {
//   const [userId, setUserId] = useState("");
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(null);
//   const totalStars = 5;

//   useEffect(() => {
//     const storedUserId = localStorage.getItem("userId");
//     if (storedUserId) {
//       setUserId(storedUserId);
//     }
//   }, []);
  
//   return (
//     <div>
//       {[...Array(totalStars)].map((star, index) => {
//         const currentRating = index + 1;
//         return (
//           <label key={index}>
//             <input
//               type="radio"
//               name="rating"
//               value={currentRating}
//               onChange={() => setRating(currentRating)}
//               style={{ display: "none" }}
//             />
//             <span
//               className="star"
//               style={{
//                 color: currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
//                 cursor: "pointer",
//                 fontSize: "24px"
//               }}
//               onMouseEnter={() => setHover(currentRating)}
//               onMouseLeave={() => setHover(null)}
//               onClick={() => setRating(currentRating)} 
//               >
//               &#9733;
//             </span>
//           </label>
//         );
//       })}
//     </div>
//   );
// };

// export default Ratings;