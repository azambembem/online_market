import { useState } from "react";
import { Heart, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TTodays } from "@/types/home";
import { useReduxDispatch } from "@/hooks/useRedux";
import { addToCart } from "@/redux/slice/cart";
import { toast } from "sonner";

const Card = ({
  name,
  price,
  main_image,
  star,
  discount,
  ...rest
}: TTodays) => {
  const dispatch = useReduxDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ name, price, main_image, star, discount, ...rest }));
    toast("Added to cart successfully!");
  };

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("gray");

  const images = [{ main_image }];

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="w-[90%] mx-auto p-4 mb-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <span>Account</span>
        <span>/</span>
        <span>Gaming</span>
        <span>/</span>
        <span className="text-gray-900">{name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section - Images */}
        <div className="flex gap-4 w-full md:w-1/2">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {images.map((img, index) => (
              <Button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-full h-[125px] rounded-lg border ${
                  selectedImage === index
                    ? "border-blue-500"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </Button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={images[selectedImage]}
              alt="PS5 Controller Main"
              className="w-full rounded-lg h-full"
              onClick={handleAddToCart}
            />
          </div>
        </div>

        {/* Right Section - Product Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">{star}</div>
            <span className="text-gray-600">(150 Reviews)</span>
            <span className="text-green-500 ml-2">In Stock</span>
          </div>

          <div className="text-2xl font-bold mb-6">${price}</div>

          <p className="text-gray-600 mb-6">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal. Pressure
            sensitive.
          </p>

          <div className="mb-6">
            <div className="font-medium mb-2">Colours:</div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedColor("gray")}
                className={`w-6 h-6 rounded-full bg-gray-800 border ${
                  selectedColor === "gray" ? "ring-2 ring-blue-500" : ""
                }`}
              />
              <button
                onClick={() => setSelectedColor("red")}
                className={`w-6 h-6 rounded-full bg-red-500 border ${
                  selectedColor === "red" ? "ring-2 ring-blue-500" : ""
                }`}
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="font-medium mb-2">Size:</div>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded ${
                    selectedSize === size
                      ? "bg-red-500 text-white"
                      : "border border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 border-r hover:bg-gray-50"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border-l hover:bg-gray-50"
              >
                +
              </button>
            </div>
            <button className="bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600">
              Buy Now
            </button>
            <button className="border rounded-md p-2 hover:bg-gray-50">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4 border-t pt-4">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              <span>Free 30 Days Delivery Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
