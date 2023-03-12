import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import MetaHead from "./../common/metaHead/MetaHead";

const Layout = ({ children }) => {
	return (
		<Fragment>
			<MetaHead />
			<Toaster position="top-center" />
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
