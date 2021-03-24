import React from "react";
import { withRouter } from "react-router";

import Nav from "app/components/Nav";
import PartyPlusButton from "app/components/PartyPlusButton";
import PartyContainer from "app/components/PartyContainer";
import CreatePartyModal from "app/components/CreatePartyModal";

import useCreatePartyModalHandle from "app/hooks/useCreatePartyModalHandle";

const Home = ({ history }) => {
	const {
		createPartyModalOpen,
		onCloseCreatepartyModal,
		onOpenCretePartyModal,
	} = useCreatePartyModalHandle();

	return (
		<div>
			{createPartyModalOpen && (
				<CreatePartyModal onCloseHandle={onCloseCreatepartyModal} />
			)}
			<Nav history={history} />
			<PartyContainer history={history} />
			<PartyPlusButton onClick={onOpenCretePartyModal} />
		</div>
	);
};

export default withRouter(Home);
