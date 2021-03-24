import { useState } from "react";

import api from "app/api";
import * as Validator from "app/utils/Validator";

const useRegister = (history) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [requiredChecked, setRequiredChecked] = useState(false);

	const onRequiedCheck = (event) => {
		setRequiredChecked(event.target.checked);
	};

	const onEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const onPasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const onRepeatPasswordChange = (event) => {
		setRepeatPassword(event.target.value);
	};

	const onSubmitRegister = () => {
		if (!Validator.validateEmail(email)) return alert("อีเมลไม่ถูกต้อง");
		if (!Validator.validatePassword(password))
			return alert("รหัสผ่านต้องมากว่า 6 ตัวอักษร");
		if (password !== repeatPassword) return alert("รหัสผ่านไม่ตรงกัน");

		api.user
			.create({ email: email.trim().toLowerCase(), password })
			.then((res) => {
				if (res.status === 201) {
					alert("สร้างบัญชีผู้ใช้ใหม่สำเร็จ");
					history.push("/login");
				}
			})
			.catch((err) => {
				alert(
					`เกิดข้อผิดพลาดในระบบ ${err.response.status}: ${err.response.data.error.message}`
				);
			});
	};

	return {
		email,
		password,
		repeatPassword,
		requiredChecked,
		onRequiedCheck,
		onEmailChange,
		onPasswordChange,
		onRepeatPasswordChange,
		onSubmitRegister,
	};
};

export default useRegister;
