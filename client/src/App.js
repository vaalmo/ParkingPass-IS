import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import Reload from "./pages/Reload";
import Account from "./pages/Account";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
          path: "/",
          element: <Home />,
      },
      {
        path: "/addcard",
        element: <AddCard />,
      },
      {
        path: "/reload",
        element: <Reload />,
      },

    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/addcard/:id",
    element: <AddCard/>,
  },
  {
    path: "/reload",
    element: <Reload/>,
  },
  {
    path: "/account",
    element: <Account/>,
  },
]);

function App() {
  return (
    <div className = 'app'>
      <div className = 'container'>
            <RouterProvider router={router}/>
      </div>

    </div>
  );
}



export default App;
