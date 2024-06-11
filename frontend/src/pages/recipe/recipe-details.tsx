import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import Container from "@/components/common/Container";
import { Donut } from "lucide-react";
import { ProductProps } from "@/types/products-types";
import BlankProduct from "@/assets/blank_product.webp";
import IngredientsList from "@/components/ingredients-list";
import Separator from "@/components/common/separator";

export const RecipeDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(`/api/recipe/${id}`, fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <p>Error: {error.message}</p>;
  const { name, description, rating, tags, image_url, ingredients, recipe } =
    data as ProductProps;
  return (
    <Container>
      <div className="flex flex-col md:flex-row">
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
          <img src={image_url ?? BlankProduct} alt="" />
        </div>
      </div>
      {ingredients.length > 0 ? (
        <IngredientsList name={name} ingredients={ingredients} />
      ) : null}

      <div className="my-5">
        <Separator>Description</Separator>
        <p>{recipe}</p>
      </div>
      <div>Revievs</div>
    </Container>
  );
};

export default RecipeDetails;
