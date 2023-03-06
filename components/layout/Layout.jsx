import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import MetaHead from "./../common/metaHead/MetaHead";

const Layout = ({ children }) => {
	return (
		<Fragment>
			<MetaHead />
			<Toaster position="top-center" />
			{children}
		</Fragment>
	);
};

export default Layout;
