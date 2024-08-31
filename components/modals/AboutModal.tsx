import useAboutModal from "@/hooks/useAboutModal";
import { useCallback, useState } from "react";
import Modal from "../Modal";
import { BsGithub } from "react-icons/bs";

const AboutModal = () => {
	const aboutModal = useAboutModal();

	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = useCallback(async () => {
		aboutModal.onClose();
	}, [aboutModal]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<h4 className="text-2xl text-sky-500 font-bold">
				Demo user credentials:
			</h4>
			<p>
				Username: <code>demo@maildrop.cc</code>
			</p>
			<p>
				Password: <code>demo</code>
			</p>
			<p></p>
			<p>Or free to create your own user as well!</p>
		</div>
	);

	const footerContent = (
		<div className="flex justify-center items-center pt-4 gap-4">
			<a
				href="https://github.com/dom1153/ynot-twclone"
				className="text-sky-500"
			>
				View the source on Github
			</a>
			<BsGithub size={28} color="white" />
		</div>
	);

	return (
		<>
			<Modal
				disabled={isLoading}
				isOpen={aboutModal.isOpen}
				title="About"
				actionLabel="OK"
				onClose={aboutModal.onClose}
				onSubmit={onSubmit}
				body={bodyContent}
				footer={footerContent}
			/>
		</>
	);
};

export default AboutModal;
