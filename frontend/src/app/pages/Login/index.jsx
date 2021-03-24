import React from "react";
import { withRouter } from "react-router";

import PartyHaanImage from "app/asset/partyhaan.png";
import LinkButton from "app/common/LinkButton";
import InputField from "app/common/InputField";

import useLoginHandle from "app/hooks/useLoginHandle";

const Login = ({ history }) => {
	const {
		email,
		password,
		onEmailChange,
		onPasswordChange,
		submitLogin,
	} = useLoginHandle(history);

	return (
		<div className="flex justify-center items-center w-screen heightScreen">
			<div className="w-full px-10 flex flex-col sm:px-5 sm:w-96 sm:py-4">
				<img
					className="w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-10"
					src={PartyHaanImage}
					alt="partyhaan logo"
				/>
				<InputField title="อีเมล" value={email} onChange={onEmailChange} />
				<InputField
					title="รหัสผ่าน"
					type="password"
					value={password}
					onChange={onPasswordChange}
				/>
				<div className="flex flex-col sm:flex-row mt-2 sm:mt-4">
					<LinkButton
						onClick={submitLogin}
						className="w-full my-2 mr-0 sm:my-0 sm:mr-2"
					>
						เข้าสู่ระบบ
					</LinkButton>
					<LinkButton
						to="/register"
						className="w-full my-2 ml-0 sm:my-0 sm:ml-2 bg-blue-400 hover:bg-blue-500"
					>
						สร้างบัญชีผู้ใช้
					</LinkButton>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Login);
