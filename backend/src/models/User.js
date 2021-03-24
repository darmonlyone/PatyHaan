import { Schema, model } from "mongoose";

let userSchema = new Schema({
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	token: {
		type: String,
		default: "",
	},
	createAt: { type: Date, default: Date.now },
});

export default model("User", userSchema);
