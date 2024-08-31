import useAboutModal from "@/hooks/useAboutModal";
import { useCallback } from "react";
import { BsInfoCircle } from "react-icons/bs";

function SidebarInfoIcon() {
	const aboutModal = useAboutModal();

	const handleClick = useCallback(() => {
		aboutModal.onOpen();
	}, [aboutModal]);

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={handleClick}
			className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg:blue-300 hover:bg-opacity-10 cursor-pointer transition"
		>
			<BsInfoCircle size={28} color="white" />
		</div>
	);
}

export default SidebarInfoIcon;
