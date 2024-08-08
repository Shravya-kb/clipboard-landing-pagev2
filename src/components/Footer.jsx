// import headerDesktopImg from "../assets/images/bg-header-desktop.png";
// import headerMobileImg from "../assets/images/bg-header-mobile.png";
import logo from "../assets/images/logo.svg";
import FaceBookIcon from "../assets/images/icon-facebook.svg";
import TwitterIcon from "../assets/images/icon-twitter.svg";
import InstagramIcon from "../assets/images/icon-instagram.svg";

let footerTexts = [
  {
    title: "FAQs",
    description: "Contact Us",
  },
  {
    title: "Privacy Policy",
    description: "Press Kit",
  },
  {
    title: "Install Guide",
  },
];

let footerIcons = [
  {
    id: "1",
    img: FaceBookIcon,
  },
  {
    id: "2",
    img: TwitterIcon,
  },
  {
    id: "3",
    img: InstagramIcon,
  },
];

// const Footer = () => {
//   return (
//     <div className=" flex items-center justify-center gap-24 mt-20  bg-slate-100">
//       {/* <img
//         className="w-full absolute top-0 hidden md:block"
//         src={headerDesktopImg}
//         alt=""
//       />
//       <img
//         className="w-full absolute top-0  md:hidden"
//         src={headerMobileImg}
//         alt=""
//       /> */}
//       <div className="flex  justify-center items-center max-w-[590px] w-[95%] pt-4 gap-20">
//         <img className="h-10 " src={logo} alt="" />
//         <section className="flex flex-col gap-8">

//             {/* <p className="font-baiJamjuree text-3xl font-semibold text-gray-700 text-center">
//               A history of everything you copy
//             </p>
//             <p className="font-baiJamjuree text-center text-gray-400">
//               Clipboard allows you to track and organize everything you copy.
//               Instantly access your clipboard on all your devices.
//             </p> */}
//             <div className="max-w-[200px]  w-[80%]  flex jusify-center items-center gap-16 ">

//               {footerTexts.map((footerText) => (
//                 <div className="flex flex-col  items-center gap-4 w-[90%] mx-auto" key={footerText.title}>

//                   <p className="text-gray-400 text-center sm:text-center min-w-[200px] ">
//                     {footerText.title}
//                   </p>
//                   <p className="text-gray-400 text-center sm:text-center min-w-[200px] ">
//                     {footerText.description}
//                   </p>
//                 </div>
//               ))}
//             </div>

//         </section>

//       </div>
//       <section className="flex items-center justify-center gap-1 sm:flex-row   ">

//             {footerIcons.map((footerIcon) => (
//               <div className="flex  flex-col items-center gap-2 w-[90%] mx-auto" key={footerIcon.id}>
//                 <img src={footerIcon.img} className="min-w-[5px]" />

//               </div>
//             ))}

//       </section>
//     </div>
//   );
// };

// export default Footer;
const Footer = () => {
  return (
    <div className=" flex items-center justify-center gap-20 mt-20 bg-slate-100 py-10 w-full flex-col sm:flex-row ">
      <div className="flex justify-around items-center max-w-[690px] w-[95%] flex-col sm:flex-row gap-6">
        <div>
          <img className="h-12" src={logo} alt="Logo" />
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          {footerTexts.map((footerText, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-6"
            >
              <p className="text-gray-400">{footerText.title}</p>
              {footerText.description && (
                <p className="text-gray-400">{footerText.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex mr-2 sm:flex-row gap-4">
        {footerIcons.map((footerIcon) => (
          <img
            key={footerIcon.id}
            src={footerIcon.img}
            className="h-6 w-6"
            alt={`Icon ${footerIcon.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
