import mongoose from "mongoose";

const basicSetup = () => {
	before((done) => {
		const server = process.env.MONGO_DB_URL;

		mongoose
			.connect(`mongodb://${server}/test`, {
				useNewUrlParser: true,
				useCreateIndex: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			})
			.then(() => done())
			.catch((err) => done(err));
	});

	beforeEach((done) => {
		mongoose.connection.db
			.dropDatabase()
			.then(() => done())
			.catch((err) => done(err));
	});

	after((done) => {
		mongoose
			.disconnect()
			.then(() => done())
			.catch((err) => done(err));
	});
};

export default basicSetup;
