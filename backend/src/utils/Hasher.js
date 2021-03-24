import * as bcrypt from "bcryptjs";

export default class Hasher {
	static hashPassword(password) {
		return bcrypt.hashSync(password);
	}

	static isHashCorrect(data, encrypted) {
		return bcrypt.compareSync(data, encrypted);
	}
}
