
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/component/Header";
import Body from "../src/component/Body";
import About from "../src/component/About";
import Contact from "../src/component/Contact"
// import Addcart from "../component/Addcart";
import Error from "../src/component/Error"
import Restaurentmenu from "../src/component/Restaurentmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";



const Applayout = () => {
  return (
    <Provider store={appStore}>

      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:resId",
        element: <Restaurentmenu />
      }, {
        path: "/cart",
        element: <Cart />
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Applayout />);
root.render(<RouterProvider router={approuter} />);