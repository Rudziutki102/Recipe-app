import Separator from "./common/separator";

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
      <div className="flex flex-col md:grid md:grid-cols-12 md:gap-4">
        {data.map((item) => (
          <div className="md:col-span-3">{item.name}</div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
