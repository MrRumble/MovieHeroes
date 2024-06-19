import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from './pages/LandingPage'
import SignupPage from "./pages/SignupPage/SignupPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import Aboutpage from "./pages/AboutPage/Aboutpage";
import TmdbTrendingPage from "./pages/TmdbTrendingPage/TmdbTrendingPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import InitialRatings from "./Components/InitialRatings/InitialRatings";
import MovieSearchResultsPage from "./pages/MovieSearchResultsPage/MoviesSearchResult";

import Myprofilepage from "./pages/MyProfilePage/MyProfile";
import YourPickPage from "./pages/YourPickPage/YourPickPage";
import InititalRatingsPage from "./pages/InititalRatingPage/InitialRatingPage";

// docs: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/movie_page/:id",
    element: <MoviePage/>,
  },
  {
    path: "/about",
    element: <Aboutpage/>
  },
  {
    path: "/tmdb-trending",
    element: <TmdbTrendingPage/>
  },
  {
    path: "/myprofile",
    element: <Myprofilepage/>
  },
  {
    path: "/yourpicks",
    element: <YourPickPage/>
  },
  {
    path: "/initial_ratings",
    element: <InititalRatingsPage/>
  },
    path: "/movie_results",
    element: <MovieSearchResultsPage/>
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
