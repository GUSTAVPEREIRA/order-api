import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Put, Req } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { IProductRepository } from "./IProductRepository";
import { NewProductRequest } from "./models/NewProductRequest";
import { ProductResponse } from "./models/ProductResponse";
import { UpdateProductRequest } from "./models/UpdateProductRequest";

@ApiTags('products')
@Controller('product')
export class ProductController {

    constructor(@Inject('IProductRepository') private readonly productRepository: IProductRepository) { }

    @Post('')
    @ApiOperation({ summary: 'Create product' })
    @ApiResponse({ status: 500, description: 'Internal server Error' })
    @ApiResponse({ status: 201, type: ProductResponse })
    async create(@Req() @Body() newProduct: NewProductRequest): Promise<ProductResponse> {

        return await this.productRepository.create(newProduct);
    }

    @Put('')
    @ApiOperation({ summary: 'Update product' })
    @ApiResponse({ status: 500, description: 'Internal server Error' })
    @ApiResponse({ status: 404, description: 'Not Found' })
    @ApiResponse({ status: 200, type: ProductResponse })
    async update(@Req() @Body() updateProduct: UpdateProductRequest): Promise<ProductResponse> {
        return await this.productRepository.update(updateProduct);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get product by id' })
    @ApiResponse({ status: 500, description: 'Internal server Error' })
    @ApiResponse({ status: 404, description: 'Not Found' })
    @ApiResponse({ status: 200, type: ProductResponse })
    async get(@Req() @Param('id', ParseIntPipe) id: number): Promise<ProductResponse> {
        return await this.productRepository.getProductById(id);
    }

    @Get('')
    @ApiOperation({ summary: 'Get Products' })
    @ApiResponse({ status: 500, description: 'Internal server Error' })
    @ApiResponse({ status: 200, type: ProductResponse, isArray: true })
    async getProducts(): Promise<ProductResponse[]> {
        return await this.productRepository.getProducts();
    }
}