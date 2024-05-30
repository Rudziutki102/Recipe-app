import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home-page";
import NotFound from "@/pages/not-found";
import App from "@/App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
