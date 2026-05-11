import Container from "../../features/Container/Container";
import Title from "../../features/Title/Title";
import type { TPowerfullList } from "../../data/data";
import img from "../../assets/images/imgFeatures.svg";

const PowerfulFeatures: React.FC<TPowerfullList> = ({ powerfull }) => {
  return (
    <section className="block py-[80px] relative">
      <div className="absolute w-[1000px] h-[1300px] bg-amber-400 rotate-60 rounded-[45%] -top-[240px] -right-[450px]" />
      <Container maxWidth="xl2">
        <div className="flex justify-center items-start gap-40 relative z-50">
          <div className="block w-[700px] max-w-[700px]">
            <Title
              description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
              title="Powerful features"
              subtitle="System features"
              isDark={false}
              position="text-left"
            />
            <ul className="grid grid-cols-2 gap-12 mt-12">
              {powerfull?.map((item) => (
                <li key={item.id} className="block max-w-81.5">
                  <img src={item.icon} alt="" />
                  <h6 className="text-h6 leading-[110%] font-semibold my-4">
                    {item.title}
                  </h6>
                  <p className="text-[18px] leading-[160%] font-medium">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="block bg-cover bg-no-repeat bg-center w-[420px] h-[900px]"
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      </Container>
    </section>
  );
};

export default PowerfulFeatures;
