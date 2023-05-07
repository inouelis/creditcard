import { Router } from "express";
import { CreateCardController } from "./controllers/card/CreateCardController";
import { AuthCardController } from "./controllers/card/AuthCardController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailCardController } from "./controllers/card/DetailCardController";
const router = Router();

//ROUTES PARA CARTÃO
router.post("/cartao", new CreateCardController().handle);

router.post("/sessao", new AuthCardController().handle);

router.get("/cardinfo", isAuthenticated, new DetailCardController().handle);

export { router };
