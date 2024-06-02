import Separator from "./common/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FoodExample from "../assets/food_example.jpg";
const ProductsList = ({
  titleName,
  data,
}: {
  titleName: string;
  data: Record<string, string | number>[];
}) => {
  return (
    <>
      <Separator>{titleName}</Separator>
      <div className="flex flex-col md:grid md:grid-cols-12 md:gap-5">
        {data.map((item, index) => (
          <div className="md:col-span-3" key={index}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <img src={FoodExample} alt="elo" />
                </CardTitle>
                <CardDescription>{item.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
              <CardFooter>
                <p>{item.tags}</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
