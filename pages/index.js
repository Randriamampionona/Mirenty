import Image from "next/image";
import { Fragment } from "react";
import { MetaHead, SectionTitle } from "./../components";
import IntroImg from "../public/assets/Sary/mirenty.com_mirenty (2).jpg";
import { FaFacebook, FaInstagram, FaMouse, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import S1 from "../public/assets/Sary/mirenty.com_mirenty (38).jpg";
import S2 from "../public/assets/Sary/mirenty.com_mirenty (37).jpg";
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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import aboutImg1 from "../public/assets/Sary/mirenty.com_mirenty (1).jpg";
import aboutImg2 from "../public/assets/Sary/mirenty.com_mirenty (5).jpg";
import aboutImg3 from "../public/assets/Sary/mirenty.com_mirenty (12).jpg";
import aboutImg4 from "../public/assets/Sary/mirenty.com_mirenty (35).jpg";

const HomePage = () => {
	return (
		<Fragment>
			<MetaHead />
			<IntroSection />
			<AboutSection />
			{/* <CoupleSection /> */}
			<NewsEventsSection />
			<GallerySection />
			<ContactForm />
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

const AboutSection = () => {
	const slideData = [aboutImg1, aboutImg2, aboutImg3, aboutImg4];
	return (
		<section className="w-full py-20 bg-sectionBgColor">
			<div className="flex items-center justify-center gap-x-10 max-w-[90%] w-full mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
				<div className="relative w-[30%]">
					{/* swiper */}
					<Swiper
						slidesPerView={1}
						modules={[Autoplay]}
						spaceBetween={0}
						// pagination={{ clickable: true }}
						loop={true}
						draggable={true}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}>
						{slideData?.map((s) => (
							<SwiperSlide key={s} className="w-auto h-auto">
								<figure className="relative w-72 h-96 p-2 bg-white border border-gray-900/40">
									<Image
										src={s}
										alt={s}
										objectFit="cover"
										layout="fill"
									/>
								</figure>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="flex-grow">
					<div className="w-full mb-4">
						<div>
							<h1 className="text-xl md:text-2xl font-medium uppercase">
								About Us
							</h1>
							<div className="mt-[7px] w-14 h-[3px] bg-primaryColor" />
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
				</div>
			</div>
		</section>
	);
};

const CoupleSection = () => {
	const slideData = [
		{
			id: 1,
			date: new Date().toISOString(),
			mr: {
				profile: S1,
				name: "John Doe",
				age: 28,
			},
			mrs: {
				profile: S2,
				name: "Marie",
				age: 25,
			},
		},
	];

	return (
		<section className="w-full py-20">
			<SectionTitle title={"Lovely Couple"} />

			{/* swiper */}
			<Swiper
				slidesPerView={1}
				modules={[Autoplay]}
				pagination={{ clickable: true }}
				loop={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}>
				{[...slideData, ...slideData, ...slideData]?.map((s) => (
					<SwiperSlide key={s.id}>
						<div className="flex items-center justify-center gap-x-12 w-full mx-auto">
							<figure className="relative rounded-lg w-56 h-60 overflow-hidden">
								<Image
									src={s.mr.profile}
									alt={s.mr.name}
									objectFit="cover"
									layout="fill"
								/>
							</figure>

							<figure className="relative rounded-md w-56 h-60 overflow-hidden">
								<Image
									src={s.mrs.profile}
									alt={s.mrs.name}
									objectFit="cover"
									layout="fill"
								/>
							</figure>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

const NewsEventsSection = () => {
	return (
		<section className="w-full py-20">
			<SectionTitle
				title={"News & Events"}
				desc={
					"Chez MIRENTY, nous savons que votre mariage est une journée très importante et spéciale, c'est pourquoi nous nous engageons à faire en sorte que tout soit parfait."
				}
			/>

			<div className="relative w-full py-8 h-auto md:h-[35rem] md:py-0">
				<Image
					src={NewsEvents}
					alt="news & events"
					layout="fill"
					objectFit="cover"
				/>
				<div className="z-10 relative -bottom-28 shadow-newsEventsShadow bg-white !m-4 p-4 flex items-center justify-center flex-col-reverse gap-y-12 md:absolute md:!m-0 md:right-0 md:bottom-8 md:flex-row md:shadow-none md:w-[64%] lg:w-[42%]">
					<div className="w-full text-center md:text-left md:w-[70%]">
						<h1 className="text-xl md:text-2xl mb-6">
							Lorem ipsum dolor sit.
						</h1>
						<p>
							Notre équipe de planners professionnels est là pour
							vous aider à créer l&apos;ambiance parfaite pour
							votre mariage, en prenant en compte tous les aspects
							qui vous tiennent à cœur. Nous sommes là pour vous
							aider à affirmer votre image et à créer un événement
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
				</div>
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

				<button className="primaryBtn mx-auto mt-10">
					<span>Show more</span>
				</button>
			</div>
		</section>
	);
};

const ContactForm = () => {
	return (
		<div className="max-w-md mx-auto">
			<SectionTitle title={"Contact Us"} />

			<div className="mx-auto w-64">
				<Formik
					initialValues={{ name: "", email: "", message: "" }}
					validationSchema={Yup.object({
						name: Yup.string().required("Name is required"),
						email: Yup.string()
							.email("Invalid email address")
							.required("Email is required"),
						message: Yup.string().required("Message is required"),
					})}
					onSubmit={(values, { setSubmitting }) => {
						console.log(values);
						setSubmitting(false);
					}}>
					{({ isSubmitting }) => (
						<Form>
							<div className="mb-4">
								<label
									htmlFor="name"
									className="block text-gray-700 font-bold mb-2">
									Name
								</label>
								<Field
									type="text"
									name="name"
									id="name"
									placeholder="Enter your name"
									className="border border-gray-300 px-4 py-2 w-full rounded-md"
								/>
								<ErrorMessage
									name="name"
									component="p"
									className="text-red-500 mt-2"
								/>
							</div>

							<div className="mb-4">
								<label
									htmlFor="email"
									className="block text-gray-700 font-bold mb-2">
									Email
								</label>
								<Field
									type="email"
									name="email"
									id="email"
									placeholder="Enter your email address"
									className="border border-gray-300 px-4 py-2 w-full rounded-md"
								/>
								<ErrorMessage
									name="email"
									component="p"
									className="text-red-500 mt-2"
								/>
							</div>

							<div className="mb-4">
								<label
									htmlFor="message"
									className="block text-gray-700 font-bold mb-2">
									Message
								</label>
								<Field
									as="textarea"
									name="message"
									id="message"
									placeholder="Enter your message"
									className="border border-gray-300 px-4 py-2 w-full rounded-md"
								/>
								<ErrorMessage
									name="message"
									component="p"
									className="text-red-500 mt-2"
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="primaryBtn">
								<span>Submit</span>
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default HomePage;
