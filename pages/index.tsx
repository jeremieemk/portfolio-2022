import type { NextPage } from "next";
import Head from "next/head";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>JérémieCodes</title>
				<meta name="JérémieCodes" content="JérémieCodes portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <div className=" flex w-full justify-center">
      <div className="main-container">
		  <About />
          <ProjectList />
		  <Footer />
        </div>
      </div>
		
		</div>
	);
};

export default Home;
