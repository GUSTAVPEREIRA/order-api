import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/PrismaService";
import { IProductRepository } from "./IProductRepository";
import { NewProductRequest } from "./models/NewProductRequest";
import { ProductResponse } from "./models/ProductResponse";


@Injectable()
export class ProductRepository implements IProductRepository {

    constructor(private readonly prisma: PrismaService) { }

    async create(products: NewProductRequest): Promise<ProductResponse> {
        const {name, price} = products;
        
        
        const newProduct: ProductResponse = await this.prisma.product.create({
            data: {
                name: name,
                price: price
            }
        });

        return newProduct;
    }

}