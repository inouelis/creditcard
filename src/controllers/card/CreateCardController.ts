import { Request, response, Response } from "express";
import { CreateCardService } from "../../services/card/CreateCardService";

class CreateCardController {
  async handle(req: Request, res: Response) {
    const { name, number, verification_code, expiration_date } = req.body;

    const createCardService = new CreateCardService();
    const card = await createCardService.execute({
      name,
      number,
      verification_code,
      expiration_date,
    });

    return res.json(card);
  }
}

export { CreateCardController };
