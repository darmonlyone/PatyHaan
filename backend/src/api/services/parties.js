import { Schema } from "mongoose";
import Party from "../../models/Party";

export const getAll = async () => {
	return Party.find({}).exec();
};

export const getById = async (id) => {
	return Party.findOne({ _id: id });
};

export const getByOwnerId = async (ownerId) => {
	return Party.find({ ownerId }).exec();
};

export const create = async (ownerId, name, amount, imageUrl) => {
	return Party.create({
		ownerId,
		name,
		amount,
		imageUrl,
	});
};

export const joinParty = async (id, joinerId) => {
	return Party.updateOne({ _id: id }, { $push: { userIdList: joinerId } });
};

export const unJoinParty = async (id, joinerId) => {
	return Party.updateOne({ _id: id }, { $pull: { userIdList: joinerId } });
};

export const edit = async (id, name, amount) => {
	return Party.updateOne({ _id: id }, { $set: { name, amount } });
};

export const deletes = async (id) => {
	return Party.deleteOne({ _id: id });
};
