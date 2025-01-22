import Categories from "./customs/categories";
import Enhance from "./customs/enhance";
import Explore from "./customs/explore";
import Flayer from "./customs/flayer";
import NewArrival from "./customs/new-arrival";
import Products from "./customs/products";
import ServiceInfo from "./customs/service-info";
import ShopSection from "./customs/shops-section";

const Home = () => {
  return (
    <div>
      <Flayer />
      <ShopSection />
      <Categories />
      <Products />
      <Enhance />
      <Explore />
      <NewArrival />
      <ServiceInfo />
    </div>
  );
};

export default Home;
