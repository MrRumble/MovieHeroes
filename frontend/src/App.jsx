import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from './pages/LandingPage'
import SignupPage from "./pages/SignupPage/SignupPage";
import MoviePage from "./pages/MoviePage/MoviePage";


// docs: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/movie_page",
    element: <MoviePage/>,
  },

]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
