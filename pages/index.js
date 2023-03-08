import Image from "next/image";
import { Fragment } from "react";
import { MetaHead } from "./../components";
import IntroImg from "../public/assets/Sary/mirenty.com_mirenty (2).jpg";
import { FaFacebook, FaInstagram, FaMouse, FaTwitter } from "react-icons/fa";

const HomePage = () => {
	return (
		<Fragment>
			<MetaHead />
			<IntroSection />
		</Fragment>
	);
};

const IntroSection = () => {
	return (
		<section className="relative flex items-center justify-center w-full h-screen">
			<Image
				src={IntroImg}
				alt="intro"
				layout="fill"
				objectFit="cover"
				className="brightness-50 pointer-events-none"
			/>
			<div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
				<h1 className="text-4xl text-center text-white font-bold mb-4">
					Bienvenue chez <span className="font-satisfy">MIRENTY</span>
				</h1>
				<p className="text-center max-w-[85%] w-full text-gray-200 mb-8 md:max-w-2xl lg:max-w-xl">
					votre wedding planner dédiée à la création de cérémonies de
					mariage originales et sur mesure.
				</p>

				<div className="flex items-center justify-center gap-x-3">
					<span className="p-2 rounded text-center text-white border border-white hover:bg-white hover:text-primaryColor cursor-pointer">
						<FaFacebook />
					</span>
					<span className="p-2 rounded text-center text-white border border-white hover:bg-white hover:text-primaryColor cursor-pointer">
						<FaInstagram />
					</span>
					<span className="p-2 rounded text-center text-white border border-white hover:bg-white hover:text-primaryColor cursor-pointer">
						<FaTwitter />
					</span>
				</div>
			</div>

			<p className="absolute bottom-6 left-1/2 translate-x-1/2 cursor-pointer animate-bounce text-white text-lg">
				<FaMouse />
			</p>
		</section>
	);
};

export default HomePage;
