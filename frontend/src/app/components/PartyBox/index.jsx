import React from "react";

import StatusButton from "app/components/StatusButton";
import NoImage from "app/asset/noimage.png";

const PartyBox = ({ id, imageUrl, title, joined, amount, status }) => {
	return (
		<div className="flex flex-col justify-center w-44 lg:w-52 m-1 sm:m-2 lg:m-3 shadow-md border border-gray-100 rounded-md bg-white">
			<img
				data-testid="image"
				className="w-auto h-44 lg:h-52 rounded-t-md"
				src={imageUrl || NoImage}
				alt={imageUrl || "No Image"}
			/>
			<span className="p-2 text-md lg:text-lg max2line h-14 lg:h-16">
				{title}
			</span>
			<div className="border-t border-gray-300 flex flex-row p-2">
				<span className="flex w-2/5 text-sm justify-start items-center">{`${joined}/${amount}`}</span>
				<StatusButton id={id} status={status} />
			</div>
		</div>
	);
};

export default PartyBox;
