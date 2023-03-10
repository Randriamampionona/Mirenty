import Image from "next/image";
import { Fragment } from "react";
import { MetaHead, NewsLetterForm, SectionTitle } from "./../components";
import IntroImg1 from "../public/assets/Sary/mirenty.com_mirenty (2).jpg";
import IntroImg2 from "../public/assets/Sary/mirenty.com_mirenty (3).jpg";
import IntroImg3 from "../public/assets/Sary/mirenty.com_mirenty (39).jpg";
import IntroImg4 from "../public/assets/Sary/mirenty.com_mirenty (37).jpg";
import { FaMouse } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import NewsEvents from "../public/assets/Sary/mirenty.com_mirenty (32).jpg";
import NewsEventsImg from "../public/assets/Sary/mirenty.com_mirenty (38).jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import g1 from "../public/assets/Sary/mirenty.com_mirenty (1).jpg";
import g2 from "../public/assets/Sary/mirenty.com_mirenty (4).jpg";
import g3 from "../public/assets/Sary/mirenty.com_mirenty (5).jpg";
import g4 from "../public/assets/Sary/mirenty.com_mirenty (8).jpg";
import g5 from "../public/assets/Sary/mirenty.com_mirenty (16).jpg";
import g6 from "../public/assets/Sary/mirenty.com_mirenty (22).jpg";
import g7 from "../public/assets/Sary/mirenty.com_mirenty (23).jpg";
import g8 from "../public/assets/Sary/mirenty.com_mirenty (24).jpg";
import { useFormik } from "formik";
import * as yup from "yup";
import aboutImg1 from "../public/assets/Sary/mirenty.com_mirenty (1).jpg";
import aboutImg2 from "../public/assets/Sary/mirenty.com_mirenty (5).jpg";
import aboutImg3 from "../public/assets/Sary/mirenty.com_mirenty (27).jpg";
import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";
import { fadeInView, grow } from "../utils/variants";

const HomePage = () => {
	return (
		<Fragment>
			<MetaHead />
			<IntroSection />
			<AboutSection />
			<NewsEventsSection />
			<GallerySection />
			<ContactForm />
		</Fragment>
	);
};

const IntroSection = () => {
	const slideData = [IntroImg1, IntroImg2, IntroImg3];
	return (
		<section className="relative flex items-center justify-center w-full h-screen">
			{/* <Image
				src={IntroImg1}
				alt="intro"
				layout="fill"
				objectFit="cover"
				priority={true}
				className="brightness-50 pointer-events-none"
			/> */}

			<div className="w-full h-screen">
				<Swiper
					effect="fade"
					centeredSlides={true}
					loop={true}
					slidesPerView={1}
					modules={[Pagination, EffectFade, Autoplay]}
					autoplay={{
						delay: 6000,
					}}
					className="!relative !w-full !h-full">
					{slideData.map((s) => (
						<SwiperSlide
							key={s}
							className="!relative !w-full !h-full">
							<Image
								src={s}
								alt="intro"
								layout="fill"
								objectFit="cover"
								priority={true}
								className="brightness-50 pointer-events-none"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
				<motion.h1
					variants={fadeInView("up", 0.8)}
					initial="initial"
					whileInView="animate"
					viewport={{ once: false, amount: 0.7 }}
					className="flex text-4xl text-center text-white font-bold mb-4 md:text-5xl">
					{/* Bienvenue chez MIRENTY */}
					<span>Bienvenue chez&nbsp;</span>
					<span>
						<TypeWriter
							options={{
								autoStart: true,
								loop: true,
								strings: ["MIRENTY"],
							}}
						/>
					</span>
				</motion.h1>

				<motion.p
					variants={fadeInView("up", 0.6)}
					initial="initial"
					whileInView="animate"
					viewport={{ once: false, amount: 0.7 }}
					className="text-center max-w-[85%] w-full text-gray-200 mb-8 md:max-w-2xl lg:max-w-[35rem]">
					votre wedding planner d??di??e ?? la cr??ation de c??r??monies de
					mariage originales et sur mesure.
				</motion.p>

				<motion.div
					variants={fadeInView("up", 0.4)}
					initial="initial"
					whileInView="animate"
					viewport={{ once: false, amount: 0.7 }}
					className="w-[25%]">
					<NewsLetterForm btnText={"Get News"} />
				</motion.div>
			</div>

			<motion.p
				variants={fadeInView("down", 0.6)}
				initial="initial"
				whileInView="animate"
				viewport={{ once: false, amount: 0.7 }}
				className="z-10 absolute bottom-6 left-1/2 translate-x-1/2 cursor-pointer animate-bounce text-white text-lg">
				<FaMouse />
			</motion.p>
		</section>
	);
};

const AboutSection = () => {
	const slideData = [aboutImg1, aboutImg2, aboutImg3];

	return (
		<section className="w-full py-20 bg-sectionBgColor">
			<div className="flex flex-col items-center justify-center gap-x-10 max-w-[90%] w-full mx-auto md:flex-row md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
				<motion.div
					variants={fadeInView("right")}
					initial="initial"
					whileInView="animate"
					className="flex-1">
					{/* swiper */}
					<Swiper
						effect="coverflow"
						grabCursor={true}
						centeredSlides={true}
						loop={true}
						slidesPerView={"auto"}
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
							depth: 100,
							modifier: 2.5,
						}}
						modules={[Pagination, EffectCoverflow, Autoplay]}
						autoplay={{
							delay: 6000,
						}}
						pagination={{
							el: ".swiper_pagination",
							clickable: true,
						}}
						className="relative h-auto !p-8">
						{slideData?.map((s) => (
							<SwiperSlide
								key={s}
								className="flex !rounded-lg !shadow-aboutUsShadow !overflow-hidden">
								<Image
									src={s}
									alt={s}
									objectFit="cover"
									placeholder="blur"
									blurDataURL={s}
									loading="lazy"
									className="w-72 h-96"
								/>
							</SwiperSlide>
						))}

						{/* pagination */}
						<div className="!flex !items-center !justify-center swiper_pagination mt-6" />
					</Swiper>
				</motion.div>

				<motion.div
					variants={fadeInView("left")}
					initial="initial"
					whileInView="animate"
					className="flex-1">
					<div className="w-full mb-4">
						<div>
							<h1 className="text-xl md:text-2xl font-dancingScript font-medium uppercase">
								About Us
							</h1>
							<motion.div
								variants={grow()}
								initial="initial"
								whileInView="animate"
								className="mt-[7px] w-14 h-[3px] bg-primaryColor"
							/>
						</div>
					</div>

					<p className="mb-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Voluptatem voluptatibus similique doloribus
						corrupti optio facilis pariatur vel asperiores
						inventore, expedita alias suscipit,
					</p>

					<p className="mb-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Quisquam velit consequatur omnis, unde eaque
						perspiciatis sequi veritatis ratione rerum quibusdam
						sapiente iusto asperiores cumque! Facilis distinctio
						quam dolorum deserunt illum, laboriosam eum veritatis
						placeat quas enim eos libero reprehenderit eveniet
						fugiat
					</p>

					<button className="primaryBtn mr-auto">
						<span>Read more</span>
					</button>
				</motion.div>
			</div>
		</section>
	);
};

const NewsEventsSection = () => {
	return (
		<section className="w-full py-20">
			<SectionTitle
				title={"News & Events"}
				desc={
					"Chez MIRENTY, nous savons que votre mariage est une journ??e tr??s importante et sp??ciale, c'est pourquoi nous nous engageons ?? faire en sorte que tout soit parfait."
				}
			/>

			<div className="relative w-full py-8 h-auto md:h-[35rem] md:py-0 overflow-x-hidden">
				<Image
					src={NewsEvents}
					alt="news & events"
					layout="fill"
					objectFit="cover"
				/>
				<motion.div
					variants={fadeInView("left")}
					initial="initial"
					whileInView="animate"
					className="z-10 relative -bottom-28 shadow-newsEventsShadow bg-white !m-4 p-4 flex items-center justify-center flex-col-reverse gap-y-12 md:absolute md:!m-0 md:right-0 md:bottom-8 md:flex-row md:shadow-none md:w-[64%] lg:w-[42%]">
					<div className="w-full text-center md:text-left md:w-[70%]">
						<h1 className="text-xl md:text-2xl mb-6">
							Lorem ipsum dolor sit.
						</h1>
						<p>
							Notre ??quipe de planners professionnels est l?? pour
							vous aider ?? cr??er l&apos;ambiance parfaite pour
							votre mariage, en prenant en compte tous les aspects
							qui vous tiennent ?? c??ur. Nous sommes l?? pour vous
							aider ?? affirmer votre image et ?? cr??er un ??v??nement
							qui vous ressemble, tout en prenant en compte les
							besoins de vos convives.
						</p>

						<button className="primaryBtn mt-12 mx-auto md:mx-0 w-full md:w-auto">
							<span>More News</span>
						</button>
					</div>

					<div className="flex-grow flex items-center justify-center font-medium">
						<Image
							src={NewsEventsImg}
							alt=""
							width={"150px"}
							height={"150px"}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

const GallerySection = () => {
	const images = [g1, g2, g3, g4, g5, g6, g7, g8];

	return (
		<section className="w-full py-20">
			<SectionTitle title={"Our Gallery"} />

			<div className="max-w-[90%] w-full mx-auto md:max-w-2xl lg:max-w-3xl">
				<motion.div
					variants={fadeInView("up")}
					initial="initial"
					whileInView="animate">
					<ResponsiveMasonry
						columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
						<Masonry gutter="12px">
							{images.map((image, i) => (
								<Image
									key={i}
									src={image}
									alt={image}
									className="block w-full transition-all duration-75 ease-in hover:brightness-90 hover:scale-105 hover:shadow-md hover:shadow-gray-900/20"
								/>
							))}
						</Masonry>
					</ResponsiveMasonry>
				</motion.div>

				<motion.button
					variants={fadeInView("up")}
					initial="initial"
					whileInView="animate"
					className="primaryBtn mx-auto mt-10">
					<span>Show more</span>
				</motion.button>
			</div>
		</section>
	);
};

const ContactForm = () => {
	return (
		<div className="w-full py-20 bg-sectionBgColor">
			<SectionTitle title={"Contact Us"} />

			<motion.div
				variants={fadeInView("up")}
				initial="initial"
				whileInView="animate"
				className="mx-auto w-96">
				<FormInputs />
			</motion.div>
		</div>
	);
};

const FormInputs = () => {
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				name: "",
				email: "",
				message: "",
			},

			validationSchema: yup.object().shape({
				name: yup.string(),
				email: yup
					.string()
					.email("Please enter a valid email")
					.required("Please fill out this field"),
				message: yup.string().required("Please fill out this field"),
			}),

			onSubmit: async (_v, a) => {
				a.resetForm();
			},
		});

	return (
		<form
			className="flex flex-col w-full"
			autoComplete="off"
			onSubmit={handleSubmit}>
			{/* name */}
			<div className="flex flex-col mb-3">
				<div
					className={`flex items-center justify-between px-3 h-11 rounded-sm bg-whiteColor border border-gray-300 focus-within:border focus-within:border-primaryColor ${
						touched.name &&
						errors.name &&
						"!border-red-500 focus-within:!border-red-500 text-red-500"
					}`}>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="flex-grow w-full border-0 outline-0 px-2 h-full bg-transparent text-darkColor"
						value={values.name}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
				{touched.name && errors.name && <ErrorMsg msg={errors.name} />}
			</div>

			{/* email */}
			<div className="flex flex-col mb-3">
				<div
					className={`flex items-center justify-between px-3 h-11 rounded-sm bg-whiteColor border border-gray-300 focus-within:border focus-within:border-primaryColor ${
						touched.email &&
						errors.email &&
						"!border-red-500 focus-within:!border-red-500 text-red-500"
					}`}>
					<input
						type="email"
						name="email"
						placeholder="Email address"
						className="flex-grow w-full border-0 outline-0 px-2 h-full bg-transparent text-darkColor"
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
				{touched.email && errors.email && (
					<ErrorMsg msg={errors.email} />
				)}
			</div>

			{/* message */}
			<div className="flex flex-col mb-3">
				<div
					className={`flex items-center justify-between px-3 h-auto rounded-sm bg-whiteColor border border-gray-300 focus-within:border focus-within:border-primaryColor ${
						touched.message &&
						errors.message &&
						"!border-red-500 focus-within:!border-red-500 text-red-500"
					}`}>
					<textarea
						name="message"
						placeholder="Your message"
						cols="30"
						rows="10"
						value={values.message}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
				{touched.message && errors.message && (
					<ErrorMsg msg={errors.message} />
				)}
			</div>

			{/* submit btn */}
			<button className="primaryBtn w-full">
				<span>Submit</span>
			</button>
		</form>
	);
};

const ErrorMsg = ({ msg }) => {
	return <span className="text-xs text-red-500">{msg}</span>;
};

export default HomePage;
