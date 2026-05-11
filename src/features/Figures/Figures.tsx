interface FiguresProps {}

interface FigureItemProps {
  figure1: string;
  figure2: string;
}

const Figures: React.FC<FiguresProps> = () => {
  return (
    <ul className="flex justify-center items-center gap-5">
      {Array.from({ length: 3 }).map((_, index) => (
        index==0 ? <li className={`block overflow-hidden rounded-md border-blue-500`}>
          <span className="bg-"></span>
          <span></span>
        </li> : index==1 ? <li></li> : <li></li>
      ))}
    </ul>
  );
};

export default Figures;

export const FigureItem: React.FC<FigureItemProps> = ({}) => {
  return <div>asd</div>;
};
