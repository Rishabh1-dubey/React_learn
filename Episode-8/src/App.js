import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../component/Header";
import Body from "../component/Body";
import About from "../component/About";
import Contact from "../component/Contact";
// import Addcart from "../component/Addcart";
import Error from "../component/Error";
import Restaurentmenu from "../component/Restaurentmenu";
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom";


const Applayout = () => {
  return (
    <div className="app">
{/* //children routes concept
if path = /  then
<body/>

if path = /about then
<About/>

if path =/contact then 
<Contact/> 
*/}

<Header />
      <Outlet/>
      {/* <Body /> */}

      {/* <ResturentCard/> */}
    </div>
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
        path:"/restaurent/:resId",
        element:<Restaurentmenu/>
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Applayout />);
root.render(<RouterProvider router={approuter} />);