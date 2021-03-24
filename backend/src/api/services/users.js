import User from "../../models/User";
import { uid } from "rand-token";

export const getAll = async () => {
	return User.find({}).exec();
};

export const create = async (email, password) => {
	return User.create({ email, password });
};

export const getByEmail = async (email) => {
	return User.findOne({ email });
};

export const generateToken = async (email) => {
	const token = uid(16);
	await User.updateOne({ email }, { $set: { token } });
	return { token, email };
};

export const clearToken = async (token) => {
	return User.updateOne({ token }, { $set: { token: "" } });
};

export const getByToken = async (token) => {
	return User.findOne({ token });
};
