import headerDesktopImg from "../assets/images/bg-header-desktop.png";
import headerMobileImg from "../assets/images/bg-header-mobile.png";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="relative flex items-center justify-center pt-24">
      <img
        className="w-full absolute top-0 hidden md:block"
        src={headerDesktopImg}
        alt=""
      />
      <img
        className="min-w-full absolute top-0 left-0 md:hidden"
        src={headerMobileImg}
        alt=""
      />
      <div className="flex flex-col justify-center items-center max-w-[590px] w-[95%] gap-6">
        <img className="h-28 " src={logo} alt="" />
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <p className="font-baiJamjuree text-3xl font-semibold text-gray-700 text-center">
              A history of everything you copy
            </p>
            <p className="font-baiJamjuree text-center text-gray-400">
              Clipboard allows you to track and organize everything you copy.
              Instantly access your clipboard on all your devices.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 flex-col sm:flex-row w-full">
            <button className="text-white bg-strongCyan px-4 py-2 rounded-full drop-shadow-cyan-md-hsl w-[70%] sm:w-fit">
              Download for iOS
            </button>
            <button className="text-white bg-lightBlue px-4 py-2 rounded-full drop-shadow-blue-md-hsl  w-[70%] sm:w-fit">
              Download for MAC
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
