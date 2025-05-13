import About from "../About/About";
import Header from "../Header/Header";

function Main() {
  return (
    <div className="flex-auto mt-20">
      <div className="sm-px-8 mt-9">
        {" "}
        <Header />
      </div>
      <div className="mt-16 sm:mt-20 w-full min-h-[200px] relative mx-auto">
        <img
          className="absolute top-30 left-20 sm:left:10 max-w-[250px] dark:hidden"
          src="/Untitled design.png"
          alt="Cartoon Olivia"
        />
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-90 h-90 -top-[20%] left-[70%]"
        >
          <path
            fill="#BAE6FF"
            d="M45.3,-69.6C53,-56.7,49.7,-35.9,45.2,-21.4C40.6,-6.9,34.8,1.3,35.5,15.4C36.2,29.4,43.3,49.4,38.5,64.1C33.6,78.7,16.8,88,5,81.1C-6.9,74.3,-13.8,51.4,-22.1,37.9C-30.3,24.4,-39.9,20.2,-50.8,10.8C-61.7,1.4,-74.1,-13.4,-67.6,-18.5C-61.2,-23.7,-36.1,-19.4,-21.7,-30.1C-7.3,-40.8,-3.7,-66.4,7.6,-76.8C18.8,-87.3,37.6,-82.4,45.3,-69.6Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-90 h-90 top-[40%] left-[60%]"
        >
          <path
            fill="#F1C21B"
            d="M37.4,-15.4C48.8,-1.8,58.6,18.8,52.1,27C45.6,35.2,22.8,30.9,4.7,28.2C-13.5,25.5,-27,24.4,-39,13.1C-51,1.7,-61.5,-19.9,-54.8,-30.8C-48,-41.7,-24,-41.8,-5.5,-38.6C13,-35.5,26,-29,37.4,-15.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="flex justify-center pt-35 sm:mt-25">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 animate-bounce"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
      <div className="sm:px-8 mt-24 md:mt-28">
        {" "}
        <About />
      </div>
    </div>
  );
}

export default Main;
