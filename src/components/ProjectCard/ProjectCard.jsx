import projects from "../../projects.json";

function ProjectCard() {
  return (
    <div className="mt-16 sm:mt-20">
      <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.projects.map((project, index) => (
          <li key={index} className="group relative flex flex-col items-start">
            <div className="relative flex flex-col p-2 bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 w-full hover:shadow-lg transition-shadow h-[420px]">
              <h2 className="my-3 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <a
                  href={`${project.githubLink}`}
                  className="relative z-10"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <span className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-60 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/5" />
                  <span className="relative">{project.name}</span>
                </a>
              </h2>
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="w-full h-40 object-cover rounded-md"
              />

              <p className="relative mt-2 text-sm text-zinc-600 dark:text-zinc-400 overflow-y-auto">
                {project.description}
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.skills?.split(",").map((skill, index) => (
                    <div
                      key={index}
                      className="bg-green-500 text-white px-2 py-1 rounded text-sm"
                    >
                      {skill.trim()}
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="relative flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
                  aria-label={`View ${project.name} source code on GitHub`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                  <span className="ml-2 ">{project.link}</span>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
