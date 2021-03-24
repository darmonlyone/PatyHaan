import React from "react";
import { mdiArrowLeft } from "@mdi/js";

import InputField from "app/common/InputField";
import LinkButton from "app/common/LinkButton";

import useCreatePartyHandle from "app/hooks/useCreatePartyHandle"

const CreatePartyModal = ({ onCloseHandle }) => {
	const {
		partyName,
		amount,
		imageUrl,
		onPartyNameChange,
		onAmountChange,
		onImageUrlChange,
		onCreatePartySubmit,
	} = useCreatePartyHandle(onCloseHandle)

	return (
		<div className="fixed z-50 flex justify-center items-center h-screen w-full bg-gray-200 bg-opacity-60">
			<div className="bg-white h-full sm:h-auto w-full sm:w-auto sm:rounded-lg">
				<div className="w-full bg-white h-12 shadow-md sm:shadow-none flex items-center relative sm:rounded-t-md sm:mt-2">
					<svg
						className="h-10 w-10 sm:h-8 sm:w-8 absolute left-1 top-1"
						viewBox="0 0 24 24"
						onClick={onCloseHandle}
					>
						<path d={mdiArrowLeft} />
					</svg>
					<span className="text-lg font-bold text-center w-full">
						สร้างปาร์ตี้
					</span>
				</div>
				<div className="w-full h-full flex flex-col justify-center items-center px-10 mb-8">
					<InputField
						testid="partyname"
						title="ชื่อปาร์ตี้"
						value={partyName}
						onChange={onPartyNameChange}
					/>
					<InputField
						testid="amount"
						title="จำนวนคนที่ขาด"
						type="number"
						value={amount}
						onChange={onAmountChange}
					/>
					<InputField
						testid="imageurl"
						title="ลิงค์รุปภาพ (กรณีมีรูปภาพ)"
						value={imageUrl}
						onChange={onImageUrlChange}
					/>
					<LinkButton
						testid="submitbutton"
						onClick={onCreatePartySubmit}
						className="w-full bg-blue-400 hover:bg-blue-500 mt-4"
					>
						สร้างปาร์ตี้
					</LinkButton>
				</div>
			</div>
		</div>
	);
};

export default CreatePartyModal;
