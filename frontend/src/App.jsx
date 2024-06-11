import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";


// docs: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {}
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
