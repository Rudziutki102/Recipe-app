import Separator from "./common/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductProps } from "@/types/products-types";
import { Link } from "react-router-dom";
import BlankProduct from "@/assets/blank_product.webp";

const ProductsList = ({
  titleName,
  data,
}: {
  titleName: string;
  data: ProductProps[];
}) => {
  return (
    <>
      <Separator>{titleName}</Separator>
      <div className="flex flex-col md:grid md:grid-cols-12 md:gap-5">
        {data.map(({ _id, name, image_url, description, tags }, index) => (
          <div className="md:col-span-3" key={index}>
            <Link to={`/recipe/${_id}`}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <img src={image_url ?? BlankProduct} alt={name} />
                  </CardTitle>
                  <CardTitle>
                    <span className="text-normal">{name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{description}</p>
                </CardContent>
                <CardFooter>
                  <p>{tags}</p>
                </CardFooter>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
