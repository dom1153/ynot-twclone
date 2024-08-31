import Layout from "@/components/Layout";
// import Modal from "@/components/Modal";
import LoginModal from "@/components/modals/LoginModal";
import RegistarModal from "@/components/modals/RegisterModal";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import EditModal from "@/components/modals/EditModal";
import AboutModal from "@/components/modals/AboutModal";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<SessionProvider session={pageProps.session}>
				<Toaster />
				<EditModal />
				<RegistarModal />
				<AboutModal />
				<LoginModal />
				{/* <Modal isOpen title="Test Modal" actionLabel="Submit" /> */}
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</>
	);
}
