import { ProductModule } from './product/product.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
