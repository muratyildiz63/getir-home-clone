import Header from "components/Header";
import Slider from "components/Slider";
import Categories from "components/Categories";
import Campaigns from "components/Campaigns";
import Favorites from "components/Favorites";
import MobileApp from "components/MobileApp";
import Cards from "components/Cards";
import Footer from "components/Footer";
import { useWindowWidth } from "@react-hook/window-size";

function App() {
  const onlyWidth = useWindowWidth();
  return (
    <>
      <Header />
      {onlyWidth <=768 && <Campaigns />}
      <Slider />
      <Categories />
      {onlyWidth>768 && <Campaigns />}
      <Favorites />
      <MobileApp />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
