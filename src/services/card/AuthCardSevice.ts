import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  number: string;
  verification_code: string;
  expiration_date: string;
}

class AuthCardService {
  async execute({ number, verification_code, expiration_date }: AuthRequest) {
    //verifica se o numero do cartao ja foi cadastrado
    const card = await prismaClient.cartao.findFirst({
      where: {
        number: number,
      },
    });

    if (!card) {
      throw new Error("Número do cartão ou CVV incorretos!");
    }

    //verificar se o CVV está correto
    const verificationCodeMatch = await compare(
      verification_code,
      card.verification_code
    );
    if (!verificationCodeMatch) {
      throw new Error("Número do cartão ou CVV incorretos!");
    }

    //gerar um token JWT para o usuário
    const token = sign(
      {
        name: card.name,
        number: card.number,
      },
      process.env.JWT_SECRET,
      {
        subject: card.id,
        expiresIn: "10d",
      }
    );

    return {
      id: card.id,
      name: card.name,
      number: card.number,
      token: token,
    };
  }
}

export { AuthCardService };
