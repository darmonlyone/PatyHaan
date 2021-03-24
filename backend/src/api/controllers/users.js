import * as Service from "../services/users";
import Hasher from "../../utils/Hasher"

export const getAll = async (_, response) => {
	const user = await Service.getAll();

	response.json(user);
};

export const create = async (request, response) => {
	const { email, password } = request.body;
	
	const hashedPassword = Hasher.hashPassword(password)
	const user = await Service.create(email, hashedPassword);

	response.status(201).json(user);
};
