import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import  "../index.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from  "./components/Header.js";
import Body from  "./components/Body.js";
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom"; 
// import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import RestrarantMenu from "./components/RestrarantMenu.js";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Body /> */}
    </div>
  );
};

const About = React.lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> ,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <Suspense fallback={<div>Loading...</div>}><About /></Suspense>},
      { path: "/contact", element: <ContactUs /> },
      { path: "/menu/:resId", element: <RestrarantMenu /> }

    ],
    errorElement: <Error />
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);