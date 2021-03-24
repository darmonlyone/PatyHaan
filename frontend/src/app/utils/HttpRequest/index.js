import axios from "axios";
import { getCookie } from "app/utils/Cookie";

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	timeout: 10000,
});

export class HttpRequest {
	static post(endpoint, params, options) {
		return instance.post(
			endpoint,
			params,
			options || {
				headers: { Authorization: `Bearer ${getCookie("token")}` },
			}
		);
	}

	static get(endpoint, options) {
		return instance.get(
			endpoint,
			options || {
				headers: { Authorization: `Bearer ${getCookie("token")}` },
			}
		);
	}

	static put(endpoint, params, options) {
		return instance.put(
			endpoint,
			params,
			options || {
				headers: { Authorization: `Bearer ${getCookie("token")}` },
			}
		);
	}

	static delete(endpoint, options) {
		return instance.delete(
			endpoint,
			options || {
				headers: { Authorization: `Bearer ${getCookie("token")}` },
			}
		);
	}
}
