import { useState } from "react";

import * as Validator from "app/utils/Validator";
import api from "app/api";

const useCreatePartyHandle = (onCloseHandle) => {
	const [partyName, setPartyName] = useState("");
	const [amount, setAmount] = useState(1);
	const [imageUrl, setImageUrl] = useState("");

	const onPartyNameChange = (event) => {
		setPartyName(event.target.value);
	};

	const onAmountChange = (event) => {
		setAmount(event.target.value);
	};

	const onImageUrlChange = (event) => {
		setImageUrl(event.target.value);
	};

	const onCreatePartySubmit = () => {
		if (!partyName) return alert("กรุณากรอกชื่อให้ถูกต้อง");
		if (!Validator.validateNumber(amount))
			return alert("กรุณากรอกจำนวนคนที่ขาดให้ถูกต้อง");

		const amountNumber = parseInt(amount);

		if (amountNumber <= 0 || amountNumber > 100)
			return alert("กรุณากรอกจำนวนคนที่ขาดให้อยู่ในระหว่างจำนวน 1 ถึง 100 คน");

		api.party
			.create({ name: partyName, amount: amountNumber, imageUrl })
			.then((res) => {
				if (res.status === 201) {
					alert("สร้างปาร์ตี้สำเร็จ");
					onCloseHandle && onCloseHandle();
				}
			})
			.catch((err) => {
				alert(
					`เกิดข้อผิดพลาดในระบบ ${err.response.status}: ${err.response.data.error.message}`
				);
			})
			.finally(() => {
				//reload page to avoid many callback
				window.location.reload();
			});
	};

	return {
		partyName,
		amount,
		imageUrl,
		onPartyNameChange,
		onAmountChange,
		onImageUrlChange,
		onCreatePartySubmit,
	};
};

export default useCreatePartyHandle;
