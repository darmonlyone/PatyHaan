import React from "react";

const InputField = ({ testid, title, type, className, name, onChange, value }) => {
	return (
		<div className="my-2 w-full">
			<span className="mb-2 text-sm">{title}</span>
			<input
				data-testid={testid}
				value={value}
				name={name}
				onChange={onChange}
				className={className || "text-md w-full"}
				type={type || "text"}
				required
			/>
		</div>
	);
};

export default InputField;
