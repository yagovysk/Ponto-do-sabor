import "./App.css";
import { Home } from "./Components/Home/Home";
import { Menu } from "./Components/Menu/Menu";
import { ScrollToTopButton } from "./Components/ScrollToTop/ScrollButton";
import { Sobre } from "./Components/Sobre/Sobre";

export function App() {
  return (
    <main>
      <Menu />
      <ScrollToTopButton />
      <Home />
      <Sobre />
    </main>
  );
}
