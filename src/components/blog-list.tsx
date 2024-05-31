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
const BlogList = ({
  titleName,
  data,
}: {
  titleName: string;
  data: Record<string, string>[];
}) => {
  return (
    <>
      <Separator>{titleName}</Separator>
      <div className="flex flex-col md:grid md:grid-cols-12 md:gap-5">
        {data.map((item) => (
          <div className="md:first:row-[span_3_/_auto] md:first:col-[_1_/_span_8] md:col-[_9_/_span_4]">
            <Card>
              <CardHeader>
                <CardTitle>
                  <img src={FoodExample} alt="elo" />
                </CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.title}</p>
              </CardContent>
              <CardFooter>
                <p>{item.description}</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
