import api from "app/api";

const usePartyButtonHandle = (id) => {
	const reloadPage = () => {
		window.location.reload();
	};

	const onJoinHandle = () => {
		api.party
			.join(id)
			.then((res) => {
				if (res.status === 200) {
					alert("เข้าร่วมปาร์ตี้สำเร็จ");
				}
			})
			.catch((err) => {
				alert(
					`เกิดข้อผิดพลาดในระบบ ${err.response.status}: ${err.response.data.error.message}`
				);
			})
			.finally(() => reloadPage());
	};

	const onOffPartyHandle = () => {
		api.party
			.unjoin(id)
			.then((res) => {
				if (res.status === 200) {
					alert("ออกจากปาร์ตี้สำเร็จ");
				}
			})
			.catch((err) => {
				alert(
					`เกิดข้อผิดพลาดในระบบ ${err.response.status}: ${err.response.data.error.message}`
				);
			})
			.finally(() => reloadPage());
	};

	const onDeleteHandle = () => {
		api.party
			.delete(id)
			.then((res) => {
				if (res.status === 200) {
					alert("ลบปาร์ตี้สำเร็จ");
				}
			})
			.catch((err) => {
				alert(
					`เกิดข้อผิดพลาดในระบบ ${err.response.status}: ${err.response.data.error.message}`
				);
			})
			.finally(() => reloadPage());
	};

	return { onJoinHandle, onOffPartyHandle, onDeleteHandle };
};

export default usePartyButtonHandle;
