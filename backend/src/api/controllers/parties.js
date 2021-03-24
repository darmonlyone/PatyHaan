import * as Service from "../services/parties";
import { ErrorWithStatus } from "../../utils/Error";
import PartyStatus from "../../models/enums/PartyStatus";

export const getAllWithStatus = async (request, response) => {
	const userId = request.user._id;
	const parties = await Service.getAll();

	/**
	 * map parties status of user relate to
	 */
	const mapPartiesStatus = parties.map((party) => {
		let status = PartyStatus.NONE;
		// user are own this party
		if (party.ownerId.toString() === userId.toString()) {
			status = PartyStatus.OWNED;
			// user are already join this party
		} else if (party.userIdList.includes(userId)) {
			status = PartyStatus.JOINED;
			// the party is full for this user
		} else if (party.userIdList.length >= party.amount) {
			status = PartyStatus.FULL;
		}

		//cannot use ...party instead
		return {
			_id: party._id,
			name: party.name,
			amount: party.amount,
			userIdList: party.userIdList,
			imageUrl: party.imageUrl,
			createAt: party.createAt,
			ownerId: party.ownerId,
			status,
		};
	});

	response.json(mapPartiesStatus);
};

export const getByOwnerId = async (request, response) => {
	const userId = request.user._id;
	const parties = await Service.getByOwnerId(userId);

	response.json(parties);
};

export const create = async (request, response) => {
	const userId = request.user._id;
	const { name, amount, imageUrl } = request.body;

	if (amount > 100 || amount <= 0)
		throw new ErrorWithStatus(400, "Amount should less than or equal 100");

	const party = await Service.create(userId, name, amount, imageUrl);

	response.status(201).json(party);
};

export const joinParty = async (request, response) => {
	const userId = request.user._id;
	const { id } = request.params;

	const party = await Service.getById(id);

	//relate to mongoose: return null when object was unfound
	if (party === null || !party)
		throw new ErrorWithStatus(404, "Party not found");

	if (party.ownerId.toString() === userId.toString())
		throw new ErrorWithStatus(
			400,
			"Owner party shouldn't join their own party"
		);

	if (party.userIdList.includes(userId))
		throw new ErrorWithStatus(400, "User have joined this party");

	if (party.userIdList.length >= party.amount)
		throw new ErrorWithStatus(400, "The party was full");

	await Service.joinParty(id, userId);

	response.sendStatus(200);
};

export const unJoinParty = async (request, response) => {
	const userId = request.user._id;
	const { id } = request.params;

	const party = await Service.getById(id);

	if (!party.userIdList.includes(userId))
		throw new ErrorWithStatus(400, "User are no in this party");

	await Service.unJoinParty(id, userId);

	response.sendStatus(200);
};

export const edit = async (request, response) => {
	const userId = request.user._id;
	const { id } = request.params;
	const { name, amount } = request.body;

	const party = await Service.getById(id);

	if (party.ownerId.toString() !== userId.toString())
		throw new ErrorWithStatus(400, "User are not own this party");

	await Service.edit(id, name, amount);

	response.sendStatus(200);
};

export const deletes = async (request, response) => {
	const userId = request.user._id;
	const { id } = request.params;

	const party = await Service.getById(id);

	if (party.ownerId.toString() !== userId.toString())
		throw new ErrorWithStatus(400, "User are not own this party");

	await Service.deletes(id);

	response.sendStatus(200);
};
