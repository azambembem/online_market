import { TExplore } from "@/types/home";

const Card = ({ name, price, discount, main_image, star }: TExplore) => {
  return (
    <div className="w-[270px] h-[350px] mt-4">
      <div className="relative">
        <img
          src={main_image}
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
        <h3 className="mt-2 font-normal">{name}</h3>
        <p className="text-[#DB4444]">
          ${price} <span className="text-[#000] line-through">${discount}</span>
        </p>
        <div className="flex flex-row">
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
          <span className="ml-2 text-sm">({star})</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
