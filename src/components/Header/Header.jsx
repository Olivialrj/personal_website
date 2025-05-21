import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const titles = ["Software Engineer", "Frontend Enthusiast", "AI Explorer"];

function Header() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        const updatedText = currentTitle.substring(0, charIndex + 1);
        setDisplayText(updatedText);
        setCharIndex((prev) => prev + 1);

        if (updatedText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1000); // Wait 1s before deleting
        }
      } else {
        // Deleting backward
        const updatedText = currentTitle.substring(0, charIndex - 1);
        setDisplayText(updatedText);
        setCharIndex((prev) => prev - 1);

        if (updatedText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTitleIndex]);

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
                I'm Olivia, I'm originally from Singapore and now a{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
                based in Los Angeles.
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
