import type { THeaderItem } from "../../data/data";
import headPhone from "../../assets/icons/Vector.svg";
import Container from "../../features/Container/Container";
import Button from "../../features/Button/Button";
import arrow from "../../assets/icons/arrow-right.svg";

interface HeaderProps {
  header: THeaderItem[];
}

const Header: React.FC<HeaderProps> = ({ header }) => {
  return (
    <header className="absolute top-0 left-0 z-50 w-full h-auto py-6 block">
      <Container maxWidth="xl2" padding={true}>
        <div className="flex justify-between items-center ">
          <div className="flex">
            <a href="/" className="text-32px leading-[110%] font-bold pr-10">
              soller
            </a>
            <ul className="flex justify-center items-center gap-4">
              {header.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.path}`}
                  className="py-3 px-2 text-center leading-6 text-16px font-medium tracking-wide "
                >
                  <li className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:transition-all after:duration-300 after:ease-in-out after:bg-black after:scale-x-0 hover:after:scale-x-100">
                    {item.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <ul className="flex justify-center items-center gap-4">
            {Array.from({ length: 2 }).map((_, index) =>
              index === 0 ? (
                <div className="flex py-3 px-2 justify-center items-center gap-4">
                  <img src={headPhone} alt="" />
                  <p className="text-blueLight-800 leading-6 text-16px font-medium">
                    555 818 282
                  </p>
                </div>
              ) : (
                <Button type="button" typeBtn="primary" img={arrow}>
                  Request a Quote
                </Button>
              ),
            )}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
