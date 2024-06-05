import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

export const RecipeDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(`/api/recipe/${id}`, fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <p>Error: {error.message}</p>;
  const { name, description, tags, type } = data.recipe;
  return (
    <div>
      name:{name}
      description:{description}
      type:{type}
      name:{tags}
    </div>
  );
};

export default RecipeDetails;
