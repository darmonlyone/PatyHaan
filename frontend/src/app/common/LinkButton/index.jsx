import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const LinkButton = ({
	history,
	to,
	onClick,
	className,
	children,
	disabled,
}) => {
	return (
		<button
			disabled={disabled}
			className={className}
			onClick={(event) => {
				onClick && onClick(event);
				history.push(to);
			}}
		>
			{children}
		</button>
	);
};

LinkButton.propTypes = {
	children: PropTypes.node.isRequired,
};

export default withRouter(LinkButton);
