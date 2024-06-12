import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from './pages/LandingPage'

// docs: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
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
