import "./App.css";
import Awesome from "./components/Awesome/Awesome";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PickSun from "./components/Pick The Sun/PickSun";
import PowerfulFeatures from "./components/Powerful features/Powerful";
import Services from "./components/Services/Services";
import { header } from "./data/data";
import { servicesData } from "./data/data";
import { powerfulData } from "./data/data";

function App() {
  return (
    <>
      <Header header={header} />
      <main className="relative">
        <Hero />
        <PickSun />
        <Services services={servicesData} />
        <PowerfulFeatures powerfull={powerfulData} />
        <Awesome />
      </main>
    </>
  );
}

export default App;
