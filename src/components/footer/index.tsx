import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="bg-[#000] w-screen h-[440px]">
      <div className="w-[90%] m-auto mt-[100px]">
        <div className="flex justify-between">
          <div className="text-white text-2xl mt-[40px]" />
        </div>

        <div className="flex mt-[16px] justify-between">
          <div className="h-[361px] relative text-white">
            <h3 className="text-[28px] ">Exclusive</h3>
            <h3 className="mt-8">Subscribe</h3>
            <p className="mt-[16px] text-sm">Get 10% off your first order</p>
            <Button
              variant={"destructive"}
              className="mt-6 text-[#fff] bg-[gray] border-solid-[#fff]"
            >
              Enter your email
            </Button>
          </div>

          <div className="h-[361px] relative text-white text-base mb-[24px]">
            <div className="text-white text-base space-y-[24px]">
              <h3 className="text-xl">Support</h3>
              <h3>
                111 Bijoy sarani, Dhaka, <br />
                DH 1515, Bangladesh.
              </h3>
              <h3>exclusive@gmail.com</h3>
              <h3>+88015-88888-9999</h3>
            </div>
          </div>

          <div className="h-[361px] relative text-white text-base mb-[24px]">
            <div className="flex flex-col mb-[8px] space-y-[24px]">
              <h3 className="text-xl">Account</h3>
              <div className="flex items-center">
                <span className="ml-[8px]">My Account</span>
              </div>
              <div className="flex items-center">
                <span className="ml-[8px]">Login / Register</span>
              </div>
              <div className="flex items-center">
                <span className="ml-[8px]">Cart</span>
              </div>
              <div className="flex items-center">
                <span className="ml-[8px]">Wishlist</span>
              </div>
              <div className="flex items-center">
                <span className="ml-[8px]">Shop</span>
              </div>
            </div>
          </div>

          <div className="h-[361px] relative text-white text-base mb-[24px]">
            <div className="flex flex-col mb-[8px] space-y-[23px]">
              <h3 className="text-xl">Quick Link</h3>
              <div className="flex items-center">
                <span className="ml-[8px]">Privacy Policy</span>
              </div>
              <div className="flex items-center">
                <span className="ml-[8px]">Terms Of Use</span>
              </div>
              <div className="flex items-center">
                <span className="ml-[8px]">FAQ</span>
              </div>
              <div className="flex items-center">
                <span className="ml-[8px]">Contact</span>
              </div>
            </div>
          </div>

          <div className="h-[361px] relative text-white text-base mb-[24px]">
            <div className="flex flex-col mb-[8px] space-y-[23px]">
              <h3 className="text-xl">Download App</h3>
              <div className="flex items-center">
                <p className="text-[12px] font-medium">
                  Save $3 with App New User Only
                </p>
              </div>
              <div className="flex space-x-[16px] mt-[8px]">
                <img src="/images/qr_code.svg" alt="qr_code" />
              </div>
              {/* <div className="flex flex-col space-x-[24px] mt-[16px]">
                <img
                  src="/images/google_play.svg"
                  alt="google_play"
                  className="mb-12"
                />
              </div> */}
              <div className="flex flex-row items-center space-x-[16px]">
                <img src="/icons/facebook.svg" alt="facebook" />
                <img src="/icons/twitter.svg" alt="twitter" />
                <img src="/icons/instagram.svg" alt="instagram" />
                <img src="/icons/linkedin.svg" alt="linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
