import Separator from "./common/separator";

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
      <div className="flex flex-col md:grid md:grid-cols-12">
        {data.map((item) => (
          <div className="md:first:row-[span_3_/_auto] md:first:col-[_1_/_span_8] md:col-[_9_/_span_4]">
            <div>{item.date}</div>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
