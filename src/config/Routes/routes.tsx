import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home-page";
import NotFound from "@/pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
