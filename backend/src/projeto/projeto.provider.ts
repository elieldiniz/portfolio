/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Projeto } from "@core"
import { Injectable } from "@nestjs/common"
import { PrismaProvider } from "src/db/prisma.provider"

@Injectable()
export class ProjetoProvider {
    constructor(private readonly prisma: PrismaProvider) {}

    // eslint-disable-next-line @typescript-eslint/require-await
    async obterTodas(): Promise<Projeto[]> {
        return this.prisma.projeto.findMany() as any
    }

    // eslint-disable-next-line @typescript-eslint/require-await
    async obeterId(id: number): Promise<Projeto | null> {
        return this.prisma.projeto.findUnique({
            where: { id },
            include: { tecnologias: true },
        }) as any
    }
}
