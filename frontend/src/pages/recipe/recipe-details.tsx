import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import Container from "@/components/common/Container";
import FoodExample from "@/assets/food_example.jpg";
import { Donut } from "lucide-react";

export const RecipeDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(`/api/recipe/${id}`, fetcher);
  const { name, description, rating, tags } = data.recipe;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Container>
      <div className="flex">
        <div className="flex flex-1 flex-col justify-center items-center">
          <h1 className="block text-6xl uppercase bold">{name}</h1>
          <p className="py-10 text-xl">{description}</p>
          <div className="flex mb-5">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <span className="px-1">
                  <Donut
                    key={index}
                    color={index + 1 <= rating ? "yellow" : "#333"}
                  />
                </span>
              ))}
          </div>
          <div>
            <p>{tags}</p>
          </div>
        </div>
        <div className="flex-1">
          <img src={FoodExample} alt="" />
        </div>
      </div>
      <div>Recipe</div>
      <div>Ingredients</div>
      <div>Revievs</div>
    </Container>
  );
};

export default RecipeDetails;
