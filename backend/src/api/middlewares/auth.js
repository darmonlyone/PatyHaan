import { ErrorWithStatus } from "../../utils/Error";
import * as UserService from "../services/users"

const extractToken = (req) => {
	const auth = req.headers.authorization;
	if (!auth)
		throw new ErrorWithStatus(
			417,
			"Authorization field in request-header is required"
		);
	const [type, token] = auth.split(" ");
	if (type === "Token" || type === "Bearer") return token;
};

export const validateToken = async (req, _, next) => {
	const token = extractToken(req);
	const authToken = await UserService.getByToken(token);
	if (!authToken) throw new ErrorWithStatus(401, `Unauthorized token`);
	req.token = token;
	req.user = authToken;
	next();
};
