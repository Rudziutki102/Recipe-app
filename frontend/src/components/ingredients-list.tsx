import { IngredientsProps } from "@/types/products-types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import Separator from "./common/separator";
import { Button } from "./ui/button";

const IngredientsList = ({
  ingredients,
  name,
}: {
  ingredients: IngredientsProps[];
  name: string;
}) => {
  return (
    <>
      <Separator className="border-none">Ingredients for {name}</Separator>
      <Table>
        <TableCaption>
          <Button>Click me for fixed list!</Button>
        </TableCaption>
        <TableBody>
          {ingredients.map(({ ingredient, quantity, measurments }, index) => (
            <TableRow key={index}>
              <TableCell className="text-xl">
                <span>{ingredient}</span>
                <span className="font-bold ml-4 mr-1">{quantity}</span>
                <span>{measurments}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default IngredientsList;
