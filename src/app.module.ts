import { ProductModule } from './infrastructure/product/product.module';
import { ProductService } from './application/product/product.service';
import { ProductController } from './web/product/product.controller';
import { PrismaService } from './application/prisma.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ProductModule,],
  controllers: [
    ProductController,],
  providers: [
    ProductService,
    PrismaService,
  ],
})
export class AppModule { }
