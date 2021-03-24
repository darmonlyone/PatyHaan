import { ErrorWithStatus } from "../../utils/Error";
import Hasher from "../../utils/Hasher";
import * as UserService from "../services/users";

export const login = async (req, res, next) => {
	const { email, password } = req.body;

	const user = await UserService.getByEmail(email);
	
	if (user === null || !user) throw new ErrorWithStatus(404, "User not found");

	const isPasswordCorrect = Hasher.isHashCorrect(password, user.password);
	if (!isPasswordCorrect)
		throw new ErrorWithStatus(401, "Incorrect password");

	await UserService.clearToken(email);
	const result = await UserService.generateToken(email);
	return res.json(result);
};

export const logout = async (req, res) => {
	await UserService.clearToken(req.token);
	return res.end();
};
