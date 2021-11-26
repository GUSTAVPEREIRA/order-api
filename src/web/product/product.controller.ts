import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Product } from '.prisma/client';
import { ProductService } from 'src/application/product/product.service';
import { Decimal } from '@prisma/client/runtime';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Post('')
    async create(@Body() postData: { name: string; price: Decimal; }): Promise<Product> {

        const { name, price } = postData;

        return await this.productService.create({
            name: name,
            price: price
        });
    }

    @Put('')
    async update(@Body() putData: { id: number; name: string; price: Decimal; }): Promise<Product> {
        const { id, name, price } = putData;

        return await this.productService.update({
            data: {
                name: name,
                price: price
            },
            where: {
                id: id
            }
        })
    }

    @Get(':id')
    async getProduct(@Param('id', ParseIntPipe) id: number): Promise<Product> {
        return await this.productService.product({
            id: id
        })
    }

    @Get('')
    async getProducts(@Body() filters: { name: string, id: number, price: Decimal, typeOrderBy: string, page: number, take: number}): Promise<Product[]> {

        const { name, id, price, typeOrderBy, page, take } = filters;
        const count = take == 0 ? 40 : take;


        return await this.productService.products({
            orderBy: {
                name: typeOrderBy == 'desc' ? 'desc' : 'asc'
            },
            where: {

                OR: {
                    name: name,
                    id: id,
                    price: price
                }
            },
            take: count,
            skip: page * count
        })
    }
}