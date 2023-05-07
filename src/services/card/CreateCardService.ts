import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface CardRequest {
  name: string;
  number: string;
  verification_code: string;
  expiration_date: string;
}

class CreateCardService {
  async execute({
    name,
    number,
    verification_code,
    expiration_date,
  }: CardRequest) {
    if (!number) {
      throw new Error("Número do cartão não foi enviado!");
    }
    const CardAlreadyExists = await prismaClient.cartao.findFirst({
      where: {
        number: number,
      },
    });
    if (CardAlreadyExists) {
      throw new Error("Cartão já cadastrado!");
    }

    const verificationCodeHash = await hash(verification_code, 8);

    const card = await prismaClient.cartao.create({
      data: {
        name: name,
        number: number,
        verification_code: verificationCodeHash,
        expiration_date: expiration_date,
      },
      select: {
        id: true,
        name: true,
        number: true,
      },
    });
    return card;
  }
}

export { CreateCardService };
