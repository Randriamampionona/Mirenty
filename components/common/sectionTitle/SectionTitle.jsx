import { motion } from "framer-motion";
import { fadeInView, grow } from "../../../utils/variants";

const SectionTitle = ({ title, desc }) => {
	return (
		<div className="w-full my-10">
			<div className="mx-auto">
				<h1 className="text-xl md:text-2xl text-center font-dancingScript font-medium uppercase">
					{title}
				</h1>
				<motion.div
					variants={grow()}
					initial="initial"
					whileInView="animate"
					className="mt-[7px] mx-auto w-14 h-[3px] bg-primaryColor"
				/>
			</div>

			{desc && (
				<motion.p
					variants={fadeInView("up", 0.5)}
					initial="initial"
					whileInView="animate"
					className="text-center max-w-md mx-auto my-6 text-gray-700">
					{desc}
				</motion.p>
			)}
		</div>
	);
};

SectionTitle.defaultProps = {
	title: "Title here",
	desc: null,
};

export default SectionTitle;
