import Head from "next/head";

const MetaHead = ({ subTitle }) => {
	return (
		<Head>
			<title>{subTitle ? `Merenty | ${subTitle}` : "Merenty"}</title>
			<link rel="icon" href="/assets/logo_transparent.png" />
		</Head>
	);
};

export default MetaHead;
