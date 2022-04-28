import { projectData } from "../../data/projectData";
import Project from "./Project";

const ProjectList = () => {
	return (
		<div className=" grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16  ">
			{projectData && projectData.map((project) => {
				return <Project key={project.title} project={project} />;
			})}
		</div>
	);
};

export default ProjectList;
