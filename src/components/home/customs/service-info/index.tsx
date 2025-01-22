const ServiceInfo = () => {
  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-4 px-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-4">
              <img src="/icons/car.svg" alt="car" />
            </div>
            <h3 className="font-bold text-lg mb-2">FREE AND FAST DELIVERY</h3>
            <p className="text-sm text-black">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-4">
              <img src="/icons/earphone.svg" alt="car" />
            </div>
            <h3 className="font-bold text-lg mb-2">24/7 CUSTOMER SERVICE</h3>
            <p className="text-sm text-black">Friendly 24/7 customer support</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-4">
              <img src="/icons/correct.svg" alt="car" />
            </div>
            <h3 className="font-bold text-lg mb-2">MONEY BACK GUARANTEE</h3>
            <p className="text-sm text-black">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
