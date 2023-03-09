import React from "react";

const SectionTitle = ({ title, desc }) => {
	return (
		<div className="w-full my-10">
			<div className="mx-auto">
				<h1 className="text-xl md:text-2xl text-center font-greateVibes font-medium uppercase">
					{title}
				</h1>
				<div className="mt-[7px] mx-auto w-14 h-[3px] bg-primaryColor" />
			</div>

			{desc && (
				<p className="text-center max-w-md mx-auto my-6 text-gray-700">
					{desc}
				</p>
			)}
		</div>
	);
};

SectionTitle.defaultProps = {
	title: "Title here",
	desc: null,
};

export default SectionTitle;
