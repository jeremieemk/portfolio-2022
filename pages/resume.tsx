import type { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { DownloadSimple } from "phosphor-react";

const Resume: NextPage = () => {
	return (
		<>
			<Head>
				<title>JeremieCodes CV</title>
				<meta name="JeremieCodes" content="JeremieCodes CV" />
			</Head>
			<motion.div
				className="w-screen h-screen  bg-white md:p-10 "
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3 }}
				initial={{ opacity: 0 }}
			>
				<div className=" w-full h-full relative ">
					<Image
						src="/jeremie-resume.png"
						alt="Jeremie Resume"
						layout="fill"
						objectFit="contain"
					/>
					<div className=" w-full flex justify-center absolute bottom-0 md:-bottom-5 right-0 ">
						<a href="https://drive.google.com/uc?export=download&id=1zaH1CDdikJpW1IEpNkDzyqJuXJwBTzud" target="_blank"rel="noreferrer" >
						<motion.button
							whileHover={{
								y: 1,
								transition: { duration: 0.2, ease: "easeInOut" },
							}}
							className=" text-sm md:text-l  text-white px-4 py-1 rounded-lg bg-darkGrey2 mb-6 w-fit flex gap-2 whitespace-nowrap items-center"
						>
							<DownloadSimple size={15} color="#FFCD9A" />
							Download CV
						</motion.button>
						</a>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Resume;
