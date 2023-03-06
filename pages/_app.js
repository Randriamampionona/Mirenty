import "../styles/globals.css";
import { Layout } from "../components";
import { GlobalProvider } from "../store/contexts/GlobalContext";

const MyApp = ({ Component, pageProps }) => {
	return (
		<GlobalProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</GlobalProvider>
	);
};

export default MyApp;
