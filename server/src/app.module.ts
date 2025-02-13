import { Module } from '@nestjs/common';
import { StockModule } from './stocks/stock.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
