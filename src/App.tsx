import Navbar from "./components/navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "./components/footer";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
