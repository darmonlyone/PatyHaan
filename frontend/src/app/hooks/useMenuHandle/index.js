import { useState } from "react";

import * as Cookie from "app/utils/Cookie";
import api from "app/api";

const useMenuHandle = (history) => {
	const [showMenu, setShowMenu] = useState(false);
	const onMenuClick = () => setShowMenu(!showMenu);

	const onLogoutClick = () => {
		api.auth
			.logout()
			.then((res) => {
				if (res.status === 200) {
					alert("ออกจากระบบสำเร็จ");
					Cookie.setCookie("token", "");
				}
			})
			.catch((err) => {
				alert(
					`เกิดข้อผิดพลาดในระบบ ${err.response.status}: ${err.response.data.error.message}`
				);
			})
			.finally(() => {
				history.push("/login");
			});
	};

	return { showMenu, onMenuClick, onLogoutClick };
};

export default useMenuHandle;
