import { Request, Response } from "express";
import { DetailCardService } from "../../services/card/DetailCardService";

class DetailCardController {
  async handle(req: Request, res: Response) {
    const detailCardService = new DetailCardService();
    const card = await detailCardService.execute();

    return res.json(card);
  }
}

export { DetailCardController };
