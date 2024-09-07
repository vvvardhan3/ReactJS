import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },{
    path: "/contactus",
    element: <ContactUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("text"));
root.render(<RouterProvider router = {appRouter} />);
