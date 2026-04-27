import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero,";
import PickSun from "./components/Pick The Sun/PickSun";
import { header } from "./data/data";

function App() {
  return (
    <>
      <Header header={header} />
      <main className="relative">
        <Hero />
        <PickSun />
      </main>
    </>
  );
}

export default App;
