import { Request, Response } from "express";
import { AuthCardService } from "../../services/card/AuthCardSevice";

class AuthCardController {
  async handle(req: Request, res: Response) {
    const { number, verification_code, expiration_date } = req.body;

    const authCardService = new AuthCardService();

    const auth = await authCardService.execute({
      number,
      verification_code,
      expiration_date,
    });

    return res.json(auth);
  }
}

export { AuthCardController };
