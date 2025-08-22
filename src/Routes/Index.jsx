import { Children } from "react";
import About from "../About/About";
import Contact from "../Contactus/Contact";

import Gallery from "../Gallery/Gallery";

import Layout from "../Layout/Layout";
import Home from "../pages/Home";

export const routes = [
  {
    id: 1,
    element: <Home />,
    path: "/",
    Layout: false,
  },
  {
    id: 2,
    element: <About />,
    path: "/about",
    Layout: true,
  },
  {
    id: 3,
    element: <Contact />,
    path: "/contact",
    Layout: true,
  },
  {
    id: 4,
    element: <Gallery />,
    path: "/gallery",
    Layout: true,
  },
];
