import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from './pages/LandingPage'
import SignupPage from "./pages/SignupPage/SignupPage";
import Aboutpage from "./pages/AboutPage/Aboutpage";

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
    path: "/about",
    element: <Aboutpage/>
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
