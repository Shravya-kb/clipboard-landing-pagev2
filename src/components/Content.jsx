import imageComputer from "../assets/images/image-computer.png";
import imageComputerdevices from "../assets/images/image-devices.png";
import ICONCreateBlacklist from "../assets/images/icon-blacklist.svg";
import ICONtext from "../assets/images/icon-text.svg";
import ICONpreview from "../assets/images/icon-preview.svg";
import LogoGoogle from "../assets/images/logo-google.png";
import LogoIBM from "../assets/images/logo-ibm.png";
import LogoMicrosoft from "../assets/images/logo-microsoft.png";
import LogoHP from "../assets/images/logo-hp.png";
import LogoVectorGraph from "../assets/images/logo-vector-graphics.png";




const features = [
  {
    title: "Quick Search",
    description:
      "Easily search your snippets by content, category, web address, application, and more.",
  },
  {
    title: "iCloud Sync",
    description: "Instantly saves and syncs snippets across all your devices.",
  },
  {
    title: "Complete History",
    description:
      "Retrieve any snippets from the first moment you started using the app.",
  },
];

const tools = [
  {
    img: ICONCreateBlacklist,
    title:"Create blacklists",
    description:
    "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
    
  },
  {
    img:ICONtext,
    title:"Plain text snippets",
    description:
    "Remove unwanted formatting from copied text for a consistent look.",
  },
  {
    img:ICONpreview,
    title:"Sneak preview",
    description:
    "Quick preview of all snippets on your clip for easy access.",
  },
];
const companies = [
  {
    id:1,
    img:LogoGoogle,
    
  },
  {
    id:2,
    img:LogoIBM,
    
  },
  {
    id:3,
    img:LogoMicrosoft,
    
  },
  {
    id:4,
    img:LogoHP,
  },
  {
    id:5,
    img:LogoVectorGraph,
  },
];

const Content = () => {
  return (
       
      <div className="w-full"  >
      <section className="max-w-[590px] w-[95%] mx-auto text-center pt-20 flex flex-col gap-4">
        <h2 className="font-semibold text-2xl text-gray-700">
          Keep track of your snippets
        </h2>
        <p className="text-gray-400">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </section>
      <section className="pt-10 flex flex-col lg:flex-row">
        <div>
          <img
            className="max-w-full w-[90%] mx-auto"
            src={imageComputer}
            alt=""
          />
        </div>
        <div className="max-w-[400px] pt-20 w-[90%]  pl-10  flex  flex-col gap-16 ">
          {features.map((feature) => (
            <div className="flex flex-col gap-4" key={feature.title}>
              <h3 className="text-xl font-semibold text-gray-700 text-center sm:text-left">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center sm:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[590px] w-[95%] mx-auto text-center pt-20 flex flex-col gap-4">
      <h2 className="font-semibold text-2xl text-gray-700">
          Keep track of your snippets
        </h2>
        <p className="text-gray-400">
          Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
        </p>
        <section className="pt-10 flex flex-col lg:flex-row">
        <div>
          <img
            className="max-w-full w-[90%] mx-auto"
            src={imageComputerdevices}
            alt=""
          />
        </div>
        </section>

        
      <section className="max-w-[590px] w-[95%] mx-auto text-center pt-20 flex flex-col gap-4">
      <h2 className="font-semibold text-2xl text-gray-700">
          Supercharge your workflow
        </h2>
        <p className="text-gray-400">
         We've got the tools to boost your productivity.
        </p>
      </section>
      <section className="max-w-[900px] w-[90%] mx-auto text-center pt-20 flex  flex-col gap-4 ">
        <div className="max-w-[900px] pt-20 w-[80%]  flex  flex-col sm: flex-row gap-16 ">
        
          {tools.map((tool) => (
            <div className="flex flex-col  items-center gap-4 w-[90%] mx-auto" key={tool.title}>
              <img src={tool.img}  />
              <h3 className="text-xl font-semibold text-gray-700 text-center sm:text-left">
                {tool.title}
              </h3>
              <p className="text-gray-400 text-center sm:text-center min-w-[200px] ">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

          <div className="max-w-[400px] pt-20 w-[80%]  flex justify-around flex-row sm: flex-col gap-16 ">
          
            {companies.map((company) => (
              <div className="flex  flex-col items-center gap-4 w-[90%] mx-auto" key={company.id}>
                <img src={company.img} className="min-w-[100px]" />
                
              </div>
            ))}
            </div>
        </section>  
            
      </section>
      <div className="flex flex-col justify-center items-center max-w-[590px] w-[95%] pt-20 mx-auto gap-6">
        
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

export default Content;
