import Flayer from "./components/flayer";
import Navbar from "./components/navbar";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Flayer />
    </div>
  );
}

export default App;
