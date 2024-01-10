import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../Login/login";
import { Register } from "../Login/Register";
import Home from "../Home/Home";
import CreatePost from "../Posts/CreatePost";

const routes = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Login,
        path: "/login",
      },
      {
        Component: Register,
        path: "/register",
      },
      {
        Component: Home,
        path: "/home",
      },
      {
        Component: CreatePost,
        path: "/posts",
      },
      //   {
      //     Component: <>Users</>,
      //     path: "/users",
      //   },
      //   {
      //     Component: <>Home</>,
      //     path: "/home",
      //   },
    ],
  },
]);

export { routes };
