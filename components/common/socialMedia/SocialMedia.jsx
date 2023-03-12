import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/variants";
import Link from "next/link";

const SocialMedia = () => {
	return (
		<div className="z-50 fixed left-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-y-3">
			<motion.span
				variants={fadeIn(0.3)}
				initial="initial"
				animate="animate"
				className="group rounded rounded-tl-none rounded-bl-none text-center text-primaryColor border border-l-0 bg-white hover:bg-primaryColor hover:text-white cursor-pointer transition-all shadow-btnShadow">
				<Link href={"/"}>
					<a className="flex items-center p-2">
						<FaFacebook />
					</a>
				</Link>
			</motion.span>
			<motion.span
				variants={fadeIn(0.5)}
				initial="initial"
				animate="animate"
				className="group rounded rounded-tl-none rounded-bl-none text-center text-primaryColor border border-l-0 bg-white hover:bg-primaryColor hover:text-white cursor-pointer transition-all shadow-btnShadow">
				<Link href={"/"}>
					<a className="flex items-center p-2">
						<FaInstagram />
					</a>
				</Link>
			</motion.span>
			<motion.span
				variants={fadeIn(0.7)}
				initial="initial"
				animate="animate"
				className="group rounded rounded-tl-none rounded-bl-none text-center text-primaryColor border border-l-0 bg-white hover:bg-primaryColor hover:text-white cursor-pointer transition-all shadow-btnShadow">
				<Link href={"/"}>
					<a className="flex items-center p-2">
						<FaTwitter />
					</a>
				</Link>
			</motion.span>
		</div>
	);
};

export default SocialMedia;
