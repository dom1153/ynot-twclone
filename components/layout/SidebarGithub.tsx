import useAboutModal from "@/hooks/useAboutModal";
import { useCallback } from "react";
import { BsGithub } from "react-icons/bs";

function SidebarInfoIcon() {
	const aboutModal = useAboutModal();

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<a href="https://github.com/dom1153/ynot-twclone">
			<div className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg:blue-300 hover:bg-opacity-10 cursor-pointer transition">
				<BsGithub size={28} color="white" />
			</div>
		</a>
	);
}

export default SidebarInfoIcon;
