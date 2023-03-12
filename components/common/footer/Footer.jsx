import Link from "next/link";
import { RiMailFill, RiMapFill, RiPhoneFill } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useFormik } from "formik";
import * as yup from "yup";

const Footer = ({ navLinks }) => {
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: { email: "" },
			validationSchema: yup.object().shape({
				email: yup
					.string()
					.email("Please enter a valid email")
					.required("Please fill out this field"),
			}),
			onSubmit: async (_v, a) => {
				a.resetForm();
			},
		});

	return (
		<footer className="flex flex-col justify-center w-full h-auto bg-primaryColor text-white">
			<section className="grid grid-cols-1 items-start my-20 mx-4 gap-8 md:grid-cols-3 md:mx-40 lg:mx-48 xl:mx-56">
				<div className="flex-grow">
					<h1 className="text-xl md:text-xl font-greateVibes font-medium uppercase mb-6">
						Personal Infos
					</h1>

					<ul className="space-y-4">
						<li className="flex items-center space-x-6">
							<RiMapFill />
							<p>Lot GV 39 Bis</p>
						</li>
						<li className="flex items-center space-x-6">
							<RiPhoneFill />
							<p>+261 34 69 899 51</p>
						</li>
						<li className="flex items-center space-x-6">
							<RiMailFill />
							<p>tojorandria474@gmail.com</p>
						</li>
					</ul>
				</div>

				<div className="flex-grow">
					<h1 className="text-xl md:text-xl font-greateVibes font-medium uppercase mb-6">
						Quick Links
					</h1>

					<ul className="space-y-2">
						{navLinks.map((l) => (
							<li key={l.slug}>
								<Link href={l.slug}>
									<a>{l.text}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="flex-grow">
					<h1 className="text-xl md:text-xl font-greateVibes font-medium uppercase mb-6">
						News Letter
					</h1>

					<p className="mb-4">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Nobis est at totam!
					</p>

					{touched.email && errors.email && (
						<ErrorMsg msg={errors.email} />
					)}
					<form
						className="flex items-center justify-between w-full mb-4 rounded overflow-hidden h-[2.4rem] bg-white"
						onSubmit={handleSubmit}>
						<div className="flex flex-grow flex-col h-full">
							<div className="flex items-center justify-between h-full rounded-sm bg-whiteColor border border-gray-300 focus-within:border">
								<input
									type="email"
									name="email"
									placeholder="Email address"
									className="flex-grow w-full border-0 outline-0 px-2 h-full bg-transparent text-gray-900"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>
						</div>
						<button className="primaryBtn bg-gray-900 hover:bg-gray-800 h-full rounded-none">
							<span>Send</span>
						</button>
					</form>

					<div className="flex items-center gap-x-3">
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
			</section>

			<p className="text-center text-sm my-4">
				&copy; {new Date().getFullYear()}{" "}
				<Link href={"/"}>
					<a className="hover:underline">mirentymg.com</a>
				</Link>
			</p>
		</footer>
	);
};

const ErrorMsg = ({ msg }) => {
	return <span className="text-xs text-red-500">{msg}</span>;
};

Footer.defaultProps = {
	navLinks: [
		{
			slug: "/",
			key: "/",
			text: "Home",
		},
		{
			slug: "/about",
			key: "/about",
			text: "About us",
		},
		{
			slug: "/blog",
			key: "/blog",
			text: "Blog",
		},
		{
			slug: "/gallery",
			key: "/gallery",
			text: "Gallery",
		},
	],
};

export default Footer;
