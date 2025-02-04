const Categories = () => {
  return (
    <div className="w-[90%] m-auto h-[313px] mt-12 text-[#DB4444] font-bold ">
      Categories
      <div className="h-[108px]">
        <h1 className="text-[28px] font-bold text-black flex items-center">
          Browse By Category
        </h1>
      </div>
      <div className="flex flex-row gap-5">
        <img
          src="/images/phone.svg"
          alt="img"
          className="h-[160px] rounded-[4px] grid gap-2"
        />
        <img
          src="/images/computers.svg"
          alt="img"
          className="h-[160px] rounded-[4px] grid gap-2"
        />
        <img
          src="/images/watch.svg"
          alt="img"
          className="h-[160px] rounded-[4px] grid gap-2"
        />
        <img
          src="/images/camera.svg"
          alt="img"
          className="h-[160px] rounded-[4px] grid gap-2"
        />
        <img
          src="/images/headphone.svg"
          alt="img"
          className="h-[160px] rounded-[4px] grid gap-2"
        />
        <img
          src="/images/gaming.svg"
          alt="img"
          className="h-[160px] rounded-[4px] grid gap-2"
        />
      </div>
    </div>
  );
};

export default Categories;
