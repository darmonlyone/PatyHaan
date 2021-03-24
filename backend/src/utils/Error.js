export class ErrorWithStatus extends Error {
	constructor(status, msg) {
		super(msg);
		this.status = status;
	}
}
