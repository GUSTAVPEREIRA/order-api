import { Prisma, Product } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProductService {

    constructor(private prisma: PrismaService) { }

    async create(product: Prisma.ProductCreateInput): Promise<Product> {
        return this.prisma.product.create({
            data: product
        });
    }

    async update(params: { where: Prisma.ProductWhereUniqueInput, data: Prisma.ProductUpdateInput }): Promise<Product> {

        const { data, where } = params;
        
        return this.prisma.product.update({
            data,
            where
        })
    }

    async products(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ProductWhereUniqueInput;
        where?: Prisma.ProductWhereInput;
        orderBy?: Prisma.ProductOrderByWithRelationInput;
    }): Promise<Product[]> {
        const { skip, take, cursor, where, orderBy } = params;

        return this.prisma.product.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async product(userWhereUniqueInput: Prisma.ProductWhereUniqueInput): Promise<Product | null> {
        return this.prisma.product.findUnique({
            where: userWhereUniqueInput,
        });
    }
}