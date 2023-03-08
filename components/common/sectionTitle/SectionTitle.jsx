import React from "react";

const SectionTitle = ({ title }) => {
	return (
		<div className="w-full my-10">
			<h1 className="text-xl md:text-2xl text-center font-medium uppercase">
				{title}
			</h1>
			<div className="mt-[7px] mx-auto w-14 h-[3px] bg-primaryColor" />
		</div>
	);
};

SectionTitle.defaultProps = {
	title: "Title here",
};

export default SectionTitle;
