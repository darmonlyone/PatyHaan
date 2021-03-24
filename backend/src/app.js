import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import api from "./api";

/**
 * Config env
 */
dotenv.config();

/**
 * Setup app
 */
const app = express();

/**
 * Middlewares
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Router setup
 */
app.use("/api", api);

/**
 * Error handling
 */
app.use((err, _0, res, _1) => {
	if (err.status) {
		res.status(err.status);
	} else if (err.name === "EntityNotFound") {
		res.status(404);
	} else {
		res.status(500);
	}
	res.json({ error: { name: err.name, message: err.message } });
});

app.on('uncaughtException', function (err) {
    console.log(err);
}); 

/**
 * Exposes REST API application
 */
export default app;
