const About = () => {
	return (
		<>
			<div className="   ">
				Hello 👋, {`I'm`} <span className=" text-white underline font-bold ">Jérémie</span>. A Javascript Engineer with a
				passion for creating fascinating things that live in the digital world.
			</div>
			<div>
				I mainly work within the <span className=" text-white font-bold  transition duration-300 ease-in-out hover:text-pink"  >React </span>  ecosystem, but {`I'm`} always learning new
				tools & technologies. On the Frontend I have experience with 
                <span className=" text-white font-bold transition duration-300 ease-in-out hover:text-yellow " > TypeScript</span>,
                <span className=" text-white font-bold transition duration-300 ease-in-out hover:text-blue " > Next.js</span>,
                <span className=" text-white font-bold transition duration-300 ease-in-out hover:text-grey " > Framer Motion </span>&
                <span className=" text-white font-bold transition duration-300 ease-in-out hover:text-green " > Tailwind</span>.
			</div>
			<div>
				When I’m not coding I like to spend my time <a href="https://www.izem.me/work" target="_blank" rel="noreferrer" > <span className="text-white font-bold transform transition duration-300 ease-in-out hover:translate-y-0.5">writing music</span></a>, exploring the world and learning (human) languages.
			</div>
		</>
	);
};

export default About;
