import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Product } from '.prisma/client';
import { ProductService } from 'src/product/product.service';
import { Decimal } from '@prisma/client/runtime';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ProductFiltersRequest } from './models/productFiltersRequest.dto';

@Controller('product')
@ApiTags('products')
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

    @Post('GetProducts')
    async getProducts(@Body() productFiltersRequest: ProductFiltersRequest): Promise<Product[]> {

        return await this.productService.products({
            orderBy: {
                name: productFiltersRequest.typeOrderBy == 'asc' ? 'asc' : 'desc'
            },
            take: productFiltersRequest.take,
            skip: productFiltersRequest.page * productFiltersRequest.take,
        })
    }

    @Delete(':id')
    async deleteProduct(@Param("id", ParseIntPipe) id: number): Promise<void> {

        await this.deleteProduct(id);
    }
}