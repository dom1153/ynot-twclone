import { create } from "zustand";

interface EditModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useEditModal = create<EditModalStore>((set) => ({
	// debug by toggling isOpen here
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useEditModal;
