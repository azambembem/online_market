import Flayer from "./components/flayer";
import Navbar from "./components/navbar";
import { Toaster } from "@/components/ui/sonner";
import ShopSection from "./components/shops-section";
import Categories from "./components/categories";
import Products from "./components/products";
import Explore from "./components/explore";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Flayer />
      <ShopSection />
      <Categories />
      <Products />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
