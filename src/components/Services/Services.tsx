import Container from "../../features/Container/Container";
import Title from "../../features/Title/Title";
import img from "../../assets/icons/services/Mobile-App-Placeholder-1(1).svg";
import type { TServices } from "../../data/data";
import Figures from "../../features/Figures/Figures";

const Services: React.FC<TServices> = ({ services }) => {
  return (
    <section className="relative block py-20 ">
      <div className="absolute top-0 -left-[700px] bg-purple-900 w-[1200px] h-[1000px] rounded-[40%] -rotate-220 " />
      <Container maxWidth="xl2">
        <div className="flex relative z-40 justify-between items-center">
          <div className="relative z-30">
            <Figures />
            <img src={img} alt="" />
          </div>
          <div className="block pl-[160px]">
            <Title
              subtitle="Services"
              description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
              isDark={false}
              position={"text-left"}
              title="Personalized services"
            />
            <ul className="grid grid-cols-2 place-content-center gap-[48px] pt-[48px]">
              {services?.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-start items-start gap-4 flex-col max-w-[326px] max-h-[210px]"
                >
                  <img src={item.icon} alt="" />
                  <h3 className="text-2xl leading-[110%] font-bold">
                    {item.title}
                  </h3>
                  <p className="text-[18px] leading-[160%]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
