import { projectData } from "../../data/projectData";
import Project from "./Project";

const ProjectList = () => {
	return (
		<section className="w-full">
			<h1 className=" text-2xl md:text-5xl font-bold text-white px-4 py-1 rounded-lg bg-darkGrey2 w-fit mb-6"  >SELECTED PROJECTS</h1>
			<div className=" w-full grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16  ">
				{projectData && projectData.map((project) => {
					return <Project key={project.title} project={project} />;
				})}
			</div>

		</section>
	);
};

export default ProjectList;
