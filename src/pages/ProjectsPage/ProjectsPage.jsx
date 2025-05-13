import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectsHeader from "../../components/ProjectsHeader/ProjectsHeader";

function ProjectsPage() {
  return (
    <div className="sm:px-8 mt-6 sm:mt-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <ProjectsHeader />
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectsPage;
