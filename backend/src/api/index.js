import Router from "express-promise-router";
import User from "./routes/users";
import Party from "./routes/parties";
import Auth from "./routes/auth";
import * as authMiddlewares from "./middlewares/auth";

const router = Router();

router.use("/parties", authMiddlewares.validateToken, Party);
router.use("/users", User);
router.use("/auth", Auth);

export default router;
