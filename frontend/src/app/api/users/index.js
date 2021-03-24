import { HttpRequest } from "app/utils/HttpRequest";

const user = {
	create: (data) => {
		return HttpRequest.post("/api/users", data);
	},
};

export default user;
