import Container from "../../features/Container/Container";
import Title from "../../features/Title/Title";
import pickSun from "../../assets/images/Desktop.svg";

interface PickSunProps {}

const PickSun: React.FC<PickSunProps> = () => {
  return (
    <section className="relative block py-20">
      {Array.from({ length: 2 }).map((_, index) => (
        <span
          className={`rounded-full absolute ${index == 0 ? "w-[720px] h-[720px] bg-amber-500 top-[300px] -left-[360px] after:absolute after:w-[130px] after:h-[130px] after:bg-amber-400 after:rounded-full after:top-[150px] after:right-[80px] after:z-10" : "w-[600px] h-[600px] bg-purple-700 -right-[150px] top-[400px] after:absolute after:w-[150px] after:h-[150px] after:bg-purple-400 after:rounded-full after:top-[50px] after:left-1/4 after:z-10"}`}
        />
      ))}
      <Container maxWidth="xl2">
        <div className="flex justify-center items-center flex-col">
          <Title
            className="max-w-[900px]"
            description="Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
            title="Pick the Sun"
            isDark={false}
            subtitle="No more waste"
            position="text-center"
          />
          <div className="block relative z-30 rounded-2xl drop-shadow-2xl after:absolute after:block after:w-[90px] after:h-[45px] after:bg-purple-700 after:bottom-1/3 after:-left-[25px] after:rounded-b-full after:z-40 before:absolute before:block before:w-[150px] before:h-[150px] before:bg-amber-400 before:rounded-full before:z-40 before:bottom-[100px] before:-right-[25px]">
            <img
              className="mt-20 relative z-30 rounded-2xl drop-shadow-2xl"
              src={pickSun}
              width={1100}
              height={695}
              alt="pickSun"
            />
            {Array.from({ length: 2 }).map((_, index) => (
              <span />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PickSun;
