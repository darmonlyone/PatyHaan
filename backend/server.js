import app from "./src/app";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;

/**
 * Connect to mogodb
 */
const server = process.env.MONGO_DB_URL;
const database = process.env.MONGO_DB_SERVER;

mongoose
	.connect(`mongodb://${server}/${database}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.catch((err) => {
		console.error("Database connection error");
	});

app.listen(port, () => {
	console.log(`listening on port http://localhost:${port}`);
});
