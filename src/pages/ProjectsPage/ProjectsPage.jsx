import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectsHeader from "../../components/ProjectsHeader/ProjectsHeader";

function ProjectsPage() {
  return (
    <div className="sm:px-8 mt-6 sm:mt-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            {/* <ProjectsHeader />
            <ProjectCard /> */}
            <div className="mt-20 flex justify-center items-center">
              <p className="text-2xl font-semibold text-zinc-600 dark:text-zinc-300 animate-pulse">
                🚧 Projects Coming Soon 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectsPage;
