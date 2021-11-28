import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/PrismaService';
import { ProductController } from './ProductController';
import { ProductRepository } from './ProductRepository';

@Module({
    imports: [PrismaService],
    controllers: [ProductController],
    providers: [
        PrismaService,
        { provide: 'IProductRepository', useClass: ProductRepository },
    ],
})
export class ProductModule { }
