import Container from "@/components/common/Container";
import { dishes } from "@/data/data";
import BlogList from "@/components/blog-list";
import ProductsList from "@/components/products-list";
const mockup = [
  {
    date: "2024-05-31",
    title: "Najnowsze odkrycia w nauce",
    description: "Przegląd najświeższych odkryć naukowych z różnych dziedzin.",
  },
  {
    date: "2024-05-28",
    title: "Sztuka gotowania: Nowe przepisy",
    description: "Nowe i kreatywne przepisy kulinarnych mistrzów.",
  },
  {
    date: "2024-05-25",
    title: "Podróże przez kontynenty",
    description: "Niezwykłe opowieści z podróży do różnych zakątków świata.",
  },
];

const HomePage = () => {
  return (
    <Container>
      <BlogList titleName="Blog list" data={mockup} />
      <ProductsList titleName="Popular" data={dishes} />
    </Container>
  );
};

export default HomePage;
