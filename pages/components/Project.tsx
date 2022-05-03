import { motion } from "framer-motion";

type ProjectProps = {
	project: {
		title: string;
		url: string;
		description: string;
		poster: string;
		videoMp4: string;
		tech: string[];
	};
};

const Project = ({ project }: ProjectProps) => {
	return (
		project && (
			<motion.div
				whileHover={{
					y: 2,
					transition: { duration: 0.2, ease: "easeInOut" },
				}}
				className="bg-darkGrey w-full  rounded-lg border-4 border-darkGrey2 flex flex-col"
			>
				<div className=" h-8 w-full bg-darkGrey2 flex items-center p-6">
					<div className=" text-3xl text-white ">⌘</div>
				</div>
				<a href={project.url} target="_blank" rel="noreferrer">
					<video autoPlay loop muted poster={project.poster}>
						<source src={project.videoMp4} type="video/mp4" />
					</video>
				</a>
				<div>
					<div className=" flex flex-col gap-2 p-6 md:p-8">
						<a
							href={project.url}
							target="_blank"
							rel="noreferrer"
							className=" text-white text-3xl md:text-6xl font-bold transition duration-200 ease-in-out hover:underline hover:text-midGrey"
						>
							{project.title}
						</a>
						<div
							className="  hidden
						md:flex gap-4 text-sm "
						>
							{project.tech.map((stack) => (
								<span
									className=" flex px-1 py-3 rounded-lg items-center justify-center transition font-semibold duration-300 ease-in-out text-white bg-darkGrey2 w-fit"
									key={stack}
								>
									{stack}
								</span>
							))}
						</div>
						<p className=" text-base md:text-xl ">{project.description}</p>
					</div>
				</div>
			</motion.div>
		)
	);
};

export default Project;
