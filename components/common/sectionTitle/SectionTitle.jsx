import React from "react";

const SectionTitle = ({ title, desc }) => {
	return (
		<div className="w-full my-10">
			<div className="mx-auto">
				<h1 className="text-xl md:text-2xl text-center font-medium uppercase">
					{title}
				</h1>
				<div className="mt-[7px] mx-auto w-14 h-[3px] bg-primaryColor" />
			</div>

			<p className="text-center max-w-md my-6 text-gray-700">{desc}</p>
		</div>
	);
};

SectionTitle.defaultProps = {
	title: "Title here",
	desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis optio cumque beatae ipsa voluptate! Exercitationem, soluta nobis aliquid eligendi ullam laboriosam illum praesentium blanditiis suscipit, error impedit aut qui laborum!",
};

export default SectionTitle;
