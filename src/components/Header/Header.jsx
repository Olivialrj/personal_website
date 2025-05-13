import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div className="sm:px-8 mt-9">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-black mb-4 text-start dark:text-white ">
                Hello
              </h1>
              <p className="text-base text-zinc-600 mb-6 text-start max-w-2xl dark:text-white">
                I'm Olivia, I'm originally from Singapore and now a software
                engineer based in Los Angeles.{" "}
              </p>
              <div className="flex space-x-4 mt-6 gap-6">
                <a
                  href="https://github.com/olivialrj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-300 transition-colors duration-300"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/olivialrj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-300 transition-colors duration-300"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
