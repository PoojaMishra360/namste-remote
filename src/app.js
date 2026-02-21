import React, { lazy, Suspense, use, useEffect } from "react";
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
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
const AppLayout = () => {
  const [user, setUser] = React.useState({});

  useEffect(() => {
    // Simulating an API call to fetch user data
const  data = {
      name: "mona",
      email: "hhh"
}
      setUser(data);
  }
  , [])
  return (
    // modified the context and access to all the compentents
    <Provider store={appStore}>
    <UserContext.Provider value={{  user: user , setUser }}>
      
    <div className="app">
      <Header />
      <Outlet />
      {/* <Body /> */}
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const About = React.lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> ,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <Suspense fallback={<div>Loading...</div>}><About /></Suspense>},
      { path: "/contact", element: <ContactUs /> },
      { path: "/menu/:resId", element: <RestrarantMenu /> },
      { path: "/cart", element: <Cart /> }

    ],
    errorElement: <Error />
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);