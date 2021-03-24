import React from "react";

import PartyBox from "app/components/PartyBox";
import useFetchParties from "app/hooks/useFetchParties";

const PartyContainer = ({ history }) => {
	const { parties } = useFetchParties(history);

	return (
		<div className="min-h-screen h-full bg-gray-50 pt-12 lg:pt-16">
			<div className="px-0.5 sm:px-2 lg:px-4 py-2  flex flex-wrap items-center justify-center sm:items-start sm:justify-start">
				{parties.map((party, index) => (
					<PartyBox
						id={party._id}
						key={index}
						imageUrl={party.imageUrl}
						title={party.name}
						amount={party.amount}
						joined={party.userIdList.length}
						status={party.status}
					/>
				))}
			</div>
		</div>
	);
};

export default PartyContainer;
