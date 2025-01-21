import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[28px] font-bold text-black">
          Best Selling Products
        </h1>
        <Button variant={"destructive"} className="w-36 mr-10">
          View All
        </Button>
      </div>
    </div>
  );
};

export default Header;
