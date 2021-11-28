import { Module } from '@nestjs/common';
import { ProductModule } from './products/Product.module';

@Module({
  imports: [ProductModule],
  controllers: [
  ],
  providers: [],
})
export class AppModule { }
