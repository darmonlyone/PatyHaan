import { HttpRequest } from "app/utils/HttpRequest";

const auth = {
	login: (data) => {
		return HttpRequest.post("/api/auth/login", data);
	},
    logout: () => {
		return HttpRequest.post("/api/auth/logout");
	},
};

export default auth;
