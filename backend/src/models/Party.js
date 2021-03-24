import { Schema, model } from "mongoose";

let partySchema = new Schema({
	ownerId: { type: Schema.Types.ObjectId, required: true },
	name: { type: String, required: true },
	amount: { type: Number, required: true },
	userIdList: { type: [Schema.Types.ObjectId], default: [] },
	imageUrl: String,
	createAt: { type: Date, default: Date.now },
});

export default model("Party", partySchema);
