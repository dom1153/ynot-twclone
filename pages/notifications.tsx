import Header from "@/components/Header";
import NotificationsFeed from "@/components/NotificationsFeed";
import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

// reject (redirect) user from accessing this page if not logged in
export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {
			session,
		},
	};
}

const Notifications = () => {
	return (
		<>
			<Header showBackArrow label="Notifications" />
			<NotificationsFeed />
		</>
	);
};

export default Notifications;
