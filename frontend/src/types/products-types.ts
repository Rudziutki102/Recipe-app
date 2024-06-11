export interface ProductProps {
  _id: {
    $oid: string;
  };
  name: string;
  cuisine: string;
  price: number;
  description: string;
  tags: string;
  type: string;
  time: string;
  rating: number;
  recipe: string;
  image_url: string | null;
  ingredients: IngredientsProps[];
}
export interface IngredientsProps {
  ingredient: string;
  quantity: number;
  measurments: string;
}
