const Card = () => {
  return (
    <div className="w-[270px] h-[350px] mt-4">
      <div className="relative">
        <img
          src="https://s.yimg.com/uu/api/res/1.2/6tptIDiKpIIxEsSAHTrwJw--~B/aD0xMTAyO3c9MTk2MDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/da422d6fcb5de1bb7721c4bd56e8367d"
          alt="img"
          className="h-[250px] rounded-[4px] grid gap-2"
        />
        <div className="absolute w-10 h-10 flex items-center justify-center top-4 right-4 cursor-pointer">
          <img src="/icons/like.svg" alt="like" />
        </div>
        <div className="absolute w-10 h-10 flex items-center justify-center top-14  right-4 cursor-pointer">
          <img src="/icons/eye.svg" alt="eye" />
        </div>
      </div>

      <div>
        <h3 className="mt-2 font-normal">HAVIT HV-G92 Gamepad</h3>
        <p className="text-[#DB4444]">
          $120 <span className="text-[#000] line-through">$160</span>
        </p>
        <div className="flex flex-row">
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
          <span className="ml-2 text-sm">(88)</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
