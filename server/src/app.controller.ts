import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Define o controlador raiz (sem prefixo de rota)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // Rota GET: http://localhost:3000/
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('status') // Rota GET: http://localhost:3000/status
  getStatus(): { status: string } {
    return this.appService.getStatus();
  }
}
