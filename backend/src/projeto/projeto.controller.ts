/* eslint-disable prettier/prettier */

import { Controller, Get, Param } from '@nestjs/common';
import { ProjetoProvider } from './projeto.provider';
import { Projeto } from '@core';

@Controller('projeto')
export class ProjetoController {
    constructor(private readonly repo: ProjetoProvider){}

    @Get()
    async obterProjetos(): Promise<Projeto[]>{
        return this.repo.obterTodas();
    }

    @Get(":id")
    async obterProjetoId(@Param("id")id :string): Promise<Projeto | null>{
        return this.repo.obeterId(Number(id));
    }
}
