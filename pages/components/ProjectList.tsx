import { projectData } from "../../data/projectData";
import Project from "./Project";
import Title from "./Title";

const ProjectList = () => {
	return (
		<section className="w-full">
			<Title label={"SELECTED PROJECTS"} />
			<div className=" w-full grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16  ">
				{projectData && projectData.map((project) => {
					return <Project key={project.title} project={project} />;
				})}
			</div>

		</section>
	);
};

export default ProjectList;
