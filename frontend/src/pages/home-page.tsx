import Container from "@/components/common/Container";
import BlogList from "@/components/blog-list";
import ProductsList from "@/components/products-list";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
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
  const { data, error, isLoading } = useSWR("/api/recipes", fetcher);
  console.log(data, error, isLoading);
  return (
    <Container>
      <BlogList titleName="Blog list" data={mockup} />
      {isLoading ? (
        <div>...loading</div>
      ) : (
        <ProductsList titleName="Popular" data={data} />
      )}
    </Container>
  );
};

export default HomePage;
