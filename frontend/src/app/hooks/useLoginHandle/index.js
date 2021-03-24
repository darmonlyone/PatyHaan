import { useState } from "react";

import * as Validator from "app/utils/Validator";
import * as Cookie from "app/utils/Cookie";
import api from "app/api";

const useLogin = (history) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const onPasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const submitLogin = () => {
		if (!Validator.validateEmail(email)) return alert("อีเมลไม่ถูกต้อง");

		api.auth
			.login({ email: email.trim().toLowerCase(), password })
			.then((res) => {
				if (res.status === 200) {
					alert("เข้าสู่ระบบสำเร็จ");
					Cookie.setCookie("token", res.data.token);
					history.push("/");
				}
			})
			.catch((err) => {
				if (err.response.status === 404) alert("ไม่ค้นพบอีเมลนี้");
				else if (err.response.status === 401) alert("รหัสผ่านไม่ถูกต้อง");
				else
					alert(
						`เกิดข้อผิดพลาดในระบบ ${err.response.status}: ${err.response.data.error.message}`
					);
			});
	};

	return { email, password, onEmailChange, onPasswordChange, submitLogin };
};

export default useLogin;
