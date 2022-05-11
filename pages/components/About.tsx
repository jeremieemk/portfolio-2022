import { motion } from "framer-motion";
import Image from "next/image";
 
const About = () => {
	return (
		<div className="flex flex-col gap-6 md:gap-10  ">
			<p className="">
				Hello 👋, {`I'm`}{" "}
				<span className=" text-white underline font-bold relative cursor-pointer dev-name ">
					Jérémie <img src="/avatar.png" alt="avatar" className=" avatar"  />{" "}
				</span>
				. A Front-end engineer with a passion for creating fascinating things
				that live in the digital world.
			</p>
			<p>
				Always learning new tools & technologies, I am committed to the
				philosophy of life-long learning. I have experience with{" "}
				<span className=" text-white font-bold  transition-all duration-300 ease-in-out hover:text-pink">
					React{" "}
				</span>
				,
				<span className=" text-white font-bold transition duration-300 ease-in-out hover:text-yellow ">
					{" "}
					TypeScript
				</span>
				,
				<span className=" text-white font-bold transition duration-300 ease-in-out hover:text-blue ">
					{" "}
					Next.js
				</span>
				,
				<span className=" text-white font-bold transition duration-300 ease-in-out hover:text-grey ">
					{" "}
					Framer Motion{" "}
				</span>
				&
				<span className=" text-white font-bold transition duration-300 ease-in-out hover:text-green ">
					{" "}
					Tailwind
				</span>
				.
			</p>
			<p>
				When I’m not coding, I like to spend my time{" "}
				<motion.a
					whileHover={{
						y: 0.5,
						transition: { duration: 0.2, ease: "easeInOut" },
					}}
					href="https://www.izem.me/work"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					<span className="inline-block text-white font-bold transform transition duration-300 ease-in-out hover:translate-y-0.5">
						writing music
					</span>
				</motion.a>
				, exploring the world and learning (human) languages. I am currently
				based in Europe.
			</p>
		</div>
	);
};

export default About;
