import { Body, Controller, Inject, Post, Put, Req } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { IProductRepository } from "./IProductRepository";
import { NewProductRequest } from "./models/NewProductRequest";
import { ProductResponse } from "./models/ProductResponse";

@ApiTags('products')
@Controller('product')
export class ProductController {

    constructor(@Inject('IProductRepository') private readonly productRepository: IProductRepository) { }

    @Post('')
    @ApiOperation({ summary: 'Create product' })
    @ApiResponse({ status: 500, description: 'Internal server Error' })
    @ApiResponse({ status: 201, type: ProductResponse })
    async create(@Req() @Body() newProduct: NewProductRequest): Promise<ProductResponse> {

        const result = await this.productRepository.create(newProduct);
        return result;
    }
}