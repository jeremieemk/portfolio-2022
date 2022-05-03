import type { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>JérémieCodes</title>
				<meta name="JérémieCodes" content="JérémieCodes portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<motion.div
				className="main-container"
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3 }}
				initial={{ opacity: 0 }}
			>
				<About />
				<ProjectList />
				<Footer />
			</motion.div>
		</>
	);
};

export default Home;
