import Button from "../../features/Button/Button";
import Container from "../../features/Container/Container";
import Title from "../../features/Title/Title";

const Awesome = () => {
  return (
    <section className="py-[80px] block relative bg-purple-900">
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          className={`absolute block rounded-full ${i == 0 ? "top-4 right-4 w-[220px] h-[220px] bg-purple-800" : "w-[255px] h-[368px] bg-blueLight-400 rotate-350 bottom-[180px] -right-[200px]"}`}
        />
      ))}
      <Container maxWidth="xl2">
        <div className="flex justify-between items-center relative z-40">
          <div className="block max-w-[815px]">
            <Title
              isDark={true}
              position="text-left"
              title="Make something awesome"
              subtitle="Join other Sun harvesters"
              description="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
            />
          </div>
          <Button type="button" typeBtn="secondary">
            Request a Quote
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Awesome;
