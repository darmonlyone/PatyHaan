import { HttpRequest } from "app/utils/HttpRequest";

const party = {
	create: (data) => {
		return HttpRequest.post("/api/parties", data);
	},
	getAll: () => {
		return HttpRequest.get("/api/parties");
	},
	getMe: () => {
		return HttpRequest.get("/api/parties/own");
	},
	join: (id) => {
		return HttpRequest.put(`/api/parties/join/${id}`);
	},
	unjoin: (id) => {
		return HttpRequest.put(`/api/parties/unjoin/${id}`);
	},
	delete: (id) => {
		return HttpRequest.delete(`/api/parties/${id}`);
	},
	update: (id, data) => {
		return HttpRequest.put(`/api/parties/${id}`, data);
	},
};

export default party;
