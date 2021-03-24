import React from "react";

import usePartyButtonHandle from "app/hooks/usePartyButtonHandle";

const partyStatus = {
	JOINED: "joined",
	OWNED: "owned",
	FULL: "full",
};

const StatusButton = ({ id, status }) => {
	const {
		onJoinHandle,
		onOffPartyHandle,
		onDeleteHandle,
	} = usePartyButtonHandle(id);

	switch (status) {
		case partyStatus.JOINED:
			return (
				<button
					onClick={onOffPartyHandle}
					className="w-3/5 text-sm py-1 bg-blue-400"
				>
					ออกปาร์ตี้
				</button>
			);
		case partyStatus.OWNED:
			return (
				<button
					onClick={onDeleteHandle}
					className="w-3/5 text-sm py-1 bg-red-400"
				>
					ลบปาร์ตี้
				</button>
			);
		case partyStatus.FULL:
			return (
				<button className="w-3/5 text-sm py-1 bg-gray-400" disabled>
					เต็ม
				</button>
			);
		default:
			return (
				<button onClick={onJoinHandle} className="w-3/5 text-sm py-1">
					เข้าร่วม
				</button>
			);
	}
};

export default StatusButton;
