import { Controller, Get, Param } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('stocks')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get(':ticker')
  getStockPrice(@Param('ticker') ticker: string) {
    return this.stockService.getPrice(ticker);
  }
}
