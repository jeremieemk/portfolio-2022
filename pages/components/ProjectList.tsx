import { projectData } from "../../data/projectData";
import Project from "./Project";

const ProjectList = () => {
	return (
		<div>
			{projectData && projectData.map((project) => {
				return <Project key={project.title} project={project} />;
			})}
		</div>
	);
};

export default ProjectList;
