import Container from "../../features/Container/Container";
import arrow from "../../assets/icons/arrow-right.svg";
import Button from "../../features/Button/Button";
import hero from "../../assets/images/hero.png";
import heroImg from "../../assets/icons/Mask masked.svg";
import Elipse from "../../assets/icons/Ellipse 2.svg";
import user from "../../assets/images/User Thumb.png";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative block ">
      <Container maxWidth="xl2" padding={true}>
        <div className="flex justify-between items-center">
          <div className="flex mt-[140px] justify-start items-center flex-col max-w-[800px] h-auto text-left">
            <div>
              <h1 className="text-h1 font-bold text-blueGray-900 leading-[110%]">
                Get the Sun to <br></br>Power Your Home
              </h1>
              <p className="font-normal text-2xl leading-[160%] py-6">
                Viverra viverra nibh enim et aliquam, enim. Tempor, sit{" "}
                <br></br> mus viverra orci dui consequat turpis scelerisque.
              </p>
              <Button type="button" typeBtn="secondary" img={arrow}>
                Request a Quote
              </Button>
            </div>
            <div className="mt-[130px] flex mt-[140px] justify-start items-center flex-col max-w-[600px] h-auto text-left">
              <p className="text-[18px] leading-[160%] py-1.5">
                “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
                viverra orci dui consequat turpis scelerisque faucibus.”
              </p>
              <div className="w-full pt-4 flex justify-start items-center gap-4">
                <img
                  className="block rounded-full"
                  width={64}
                  height={64}
                  src={user}
                  alt=""
                />
                <div className="text-[18px] leading-[160%]">
                  <p className="font-semibold">Rwanda Melflor</p>
                  <p className="opacity-70">zerowaste.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute block w-auto h-auto -top-[25%] -right-[3%]">
            <div className="absolute z-50 top-[350px] right-[800px] w-[150px] h-[150px] rounded-full bg-amber-500" />
            <div className="absolute z-50 top-[450px] right-[80px] w-[75px] h-[75px] rounded-full bg-purple-500" />
            <div className="absolute z-50 top-[950px] right-[350px] w-[70px] h-[70px] rounded-full bg-blueLight-200"></div>
            {/* Синий контейнер — даём ему z-10, чтобы Elipse точно был поверх */}
            <div className="absolute z-10 top-[100%] -right-[4%] rotate-5 w-[880px] h-[990px] bg-blueLight-200 rounded-full overflow-hidden">
              <img
                className="w-full h-full absolute bottom-[-190px] object-contain"
                src={hero}
                alt="Овальное изображение"
              />
            </div>

            {/* Elipse с очень высоким z-index */}
            <img
              className="absolute z-[100] top-[0px] right-[80px]"
              src={Elipse}
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
