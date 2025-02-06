import "./App.css";
import { Home } from "./Components/Home/Home";
import { Menu } from "./Components/Menu/Menu";
import { Sobre } from "./Components/Sobre/Sobre";

export function App() {
  return (
    <main>
      <Menu />
      <Home />
      <Sobre />
    </main>
  );
}
