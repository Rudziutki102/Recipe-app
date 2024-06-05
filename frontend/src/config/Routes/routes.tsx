import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home-page";
import NotFound from "@/pages/not-found";
import App from "@/App";
import RecipeDetails from "@/pages/recipe/recipe-details";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "recipe/:id",
        element: <RecipeDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
