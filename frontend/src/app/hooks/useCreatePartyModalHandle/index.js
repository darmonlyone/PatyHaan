import { useState } from "react";

const useCreatePartyModal = () => {
	const [createPartyModalOpen, setCreatePartyModalOpen] = useState(false);

	const onCloseCreatepartyModal = () => {
		setCreatePartyModalOpen(false);
	};

	const onOpenCretePartyModal = () => {
		setCreatePartyModalOpen(true);
	};

	return {
		createPartyModalOpen,
		onCloseCreatepartyModal,
		onOpenCretePartyModal,
	};
};

export default useCreatePartyModal;
