import type { FC } from "react";
import Header from "./customs/header";
import Body from "./customs/header/body";
import { Button } from "@/components/ui/button";

const ShopSection: FC = () => {
  return (
    <div className="w-full mt-[100px]">
      <div className="w-[90%] m-auto">
        <Header />
        <Body />
      </div>
      <div className="flex justify-center mt-4">
        <Button variant={"destructive"} className="w-[200px]">
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default ShopSection;
