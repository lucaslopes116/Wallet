import { Injectable } from '@nestjs/common';

@Injectable() // Marca a classe como injetável
export class AppService {
  getHello(): string {
    return 'Olá Lucas, sua API está funcionando!! 🚀';
  }

  getStatus(): { status: string } {
    return { status: 'online' };
  }
}
