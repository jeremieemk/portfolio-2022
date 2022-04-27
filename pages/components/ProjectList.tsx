import { projectData } from "../data/projectData";
import Project from "./Project";

const ProjectList = () => {
	return (
		<>
			{projectData.map((project) => {
				return <Project key={project.title} project={project} />;
			})}
		</>
	);
};

export default ProjectList;
