import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./layout/Root";
import "./index.css";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      { index: true, element: <Home></Home> },
      // { path: "/about", element: <About></About> },
      // { path: "/shop", element: <ShopNow></ShopNow> },
      // { path: "/shop/:id", element: <SingleProductPage></SingleProductPage> },
      // { path: "/blog", element: <Blog></Blog> },
      // { path: "/blog/:id", element: <BlogDetails></BlogDetails> },
      // { path: "/contact", element: <Contact></Contact> },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
