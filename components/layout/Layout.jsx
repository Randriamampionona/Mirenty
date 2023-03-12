import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SocialMedia from "../common/socialMedia/SocialMedia";
import MetaHead from "./../common/metaHead/MetaHead";

const Layout = ({ children }) => {
	return (
		<Fragment>
			<MetaHead />
			<Toaster position="top-center" />
			<SocialMedia />
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
