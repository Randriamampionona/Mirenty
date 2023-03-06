import Image from "next/image";
import { Fragment } from "react";
import { MetaHead } from "./../components";
import IntroImg from "../public/assets/Sary/mirenty.com_mirenty (2).jpg";
import { FaFacebook, FaInstagram, FaMouse, FaTwitter } from "react-icons/fa";

const HomePage = () => {
	return (
		<Fragment>
			<MetaHead />
			<Intro />
			<Text />
		</Fragment>
	);
};

const Intro = () => {
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
					Bienvenue chez MIRENTY
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

const Text = () => {
	return (
		<p className="my-12 px-10 text-justify">
			Bienvenue chez MIRENTY, votre wedding planner dédiée à la création
			de cérémonies de mariage originales et sur mesure. Chez MIRENTY,
			nous savons que votre mariage est une journée très importante et
			spéciale, c&apos;est pourquoi nous nous engageons à faire en sorte
			que tout soit parfait. Notre équipe de planners professionnels est
			là pour vous aider à créer l&apos;ambiance parfaite pour votre
			mariage, en prenant en compte tous les aspects qui vous tiennent à
			cœur. Nous sommes là pour vous aider à affirmer votre image et à
			créer un événement qui vous ressemble, tout en prenant en compte les
			besoins de vos convives. Nous sommes conscients que la planification
			d&apos;un mariage peut être stressante et que des imprévus peuvent
			survenir à tout moment. C&apos;est pourquoi nous sommes là pour vous
			aider à traverser toutes les étapes des préparatifs de votre
			mariage, de la sélection des prestataires, au choix du traiteur, à
			la pièce montée, en passant par l&apos;organisation de votre
			cocktail et de votre journée de mariage. Chez MIRENTY, nous sommes à
			l&apos;écoute de vos besoins et de vos souhaits. Nous travaillons
			avec vous pour comprendre votre vision et créer un événement qui
			reflète votre personnalité. Nous sommes également attentifs à votre
			budget, afin de vous aider à planifier votre mariage de manière
			efficace et sans stress. Nous comprenons que le jour J est très
			important pour vous et que vous voulez profiter de chaque instant
			sans avoir à vous soucier des détails. C&apos;est pourquoi notre
			équipe est là pour s&apos;assurer que tout se déroule sans accroc et
			que vous puissiez profiter pleinement de votre journée de mariage.
			Chez MIRENTY, nous croyons que chaque mariage est unique et mérite
			une attention particulière. Nous sommes là pour vous aider à créer
			des cérémonies de mariage originales et personnalisées qui
			laisseront un souvenir inoubliable à tous les participants. Faites
			confiance à notre expérience et notre expertise pour faire de votre
			mariage un moment magique et inoubliable.
		</p>
	);
};

export default HomePage;
