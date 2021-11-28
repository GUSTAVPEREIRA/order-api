import { Body, Controller, Inject, Post, Put } from "@nestjs/common";
import { IProductRepository } from "./IProductRepository";
import { NewProductRequest } from "./models/NewProductRequest";

@Controller('product')
export class ProductController {

    constructor(@Inject('IProductRepository') private readonly productRepository: IProductRepository) { }


    @Post('')
    async create(@Body() newProduct : NewProductRequest) {
        return await this.productRepository.create(newProduct);
    }
}