import Image from "next/image";
import blancLogo from "../../../public/assets/logo_mirety_full_blanc.png";
import magentaLogo from "../../../public/assets/logo_mirety_full_magenta.png";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../store/contexts/GlobalContext";

const Header = ({ navLinks }) => {
	const { headerStyle } = GlobalContext();
	const { pathname, push } = useRouter();

	return (
		<header
			className={`z-50 fixed left-0 flex items-center justify-between w-full h-16 px-4  md:px-6 lg:px-14 transition-all duration-75 ease-in-out ${
				headerStyle === "transparent"
					? "bg-transparent text-white"
					: "bg-white text-gray-900 border-b border-[#787ed70a] shadow shadow-gray-900"
			}`}>
			<figure className="relative w-24 h-full md:w-28">
				<Image
					src={
						headerStyle === "transparent" ? blancLogo : magentaLogo
					}
					alt="Mirenty"
					layout="fill"
					objectFit="contain"
					title="Mirenty"
					className="cursor-pointer"
					onClick={(_) => push("/")}
				/>
			</figure>

			<nav className="flex items-center justify-end gap-x-12">
				{/* nav links */}
				<ul className="items-center gap-x-10 hidden md:flex">
					{navLinks.map((link) => (
						<li
							key={link.slug}
							className={`text-center font-medium text-white hover:text-primaryColor/75 ${
								pathname === link.key &&
								"text-primaryColor/75 hover:text-primaryColor"
							}`}>
							<Link href={link.slug}>
								<a>{link.text}</a>
							</Link>
						</li>
					))}
				</ul>

				{/* cta btn */}
				<button className="primaryBtn h-10 rounded-full hidden md:flex">
					<span>Contact us</span>
					<span>
						<FaPhone />
					</span>
				</button>

				{/* burger btn */}
				<button className="bg-transparent cursor-pointer text-white text-2xl md:hidden">
					<span>
						<RiMenu3Line />
					</span>
				</button>
			</nav>
		</header>
	);
};

Header.defaultProps = {
	navLinks: [
		{
			slug: "/",
			key: "/",
			text: "Home",
		},
		{
			slug: "/story",
			key: "/story",
			text: "Story",
		},
		{
			slug: "/about",
			key: "/about",
			text: "About us",
		},
		{
			slug: "/gallery",
			key: "/gallery",
			text: "Gallery",
		},
	],
};

export default Header;
