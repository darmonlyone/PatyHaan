import React from "react";
import { withRouter } from "react-router";

import LinkButton from "app/common/LinkButton";
import InputField from "app/common/InputField";

import useRegisterHandle from "app/hooks/useRegisterHandle";

const Register = ({ history }) => {
	const {
		email,
		password,
		repeatPassword,
		requiredChecked,
		onRequiedCheck,
		onEmailChange,
		onPasswordChange,
		onRepeatPasswordChange,
		onSubmitRegister,
	} = useRegisterHandle(history);

	return (
		<div>
			<div className="flex justify-center items-center w-full heightScreen">
				<div className="w-full px-10 flex flex-col sm:px-5 sm:w-96 sm:py-4">
					<h1 className="text-center mb-4 text-yellow-500">
						สร้างบัญชีผู้ใช้ใหม่
					</h1>
					<InputField title="อีเมล" value={email} onChange={onEmailChange} />
					<InputField
						title="รหัสผ่าน"
						type="password"
						value={password}
						onChange={onPasswordChange}
					/>
					<InputField
						title="ยืนยันรหัสผ่าน"
						type="password"
						value={repeatPassword}
						onChange={onRepeatPasswordChange}
					/>
					<div className="my-4 flex flex-row">
						<input
							name="required"
							id="required"
							className="my-auto mr-4 border-none w-auto"
							type="checkbox"
							checked={requiredChecked}
							onChange={onRequiedCheck}
						/>
						<label htmlFor="required" className="text-sm cursor-pointer">
							ฉันยอมรับเงื่อนไขและข้อตกลงเกี่ยวกับการใช้งาน
						</label>
					</div>
					<div className="flex flex-col sm:flex-row mt-2 sm:mt-4">
						<LinkButton
							disabled={!requiredChecked}
							onClick={onSubmitRegister}
							className="w-full my-2 mr-0 sm:my-0 sm:mr-2 sm:w-2/3"
						>
							ยืนยัน
						</LinkButton>
						<LinkButton
							to="/login"
							className="w-full my-2 ml-0 sm:my-0 sm:w-1/3 sm:ml-2 bg-red-400 hover:bg-red-500"
						>
							ยกเลิก
						</LinkButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Register);
