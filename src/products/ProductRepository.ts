import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/PrismaService";
import { IProductRepository } from "./IProductRepository";
import { NewProductRequest } from "./models/NewProductRequest";
import { ProductResponse } from "./models/ProductResponse";
import { UpdateProductRequest } from "./models/UpdateProductRequest";


@Injectable()
export class ProductRepository implements IProductRepository {

    constructor(private readonly prisma: PrismaService) { }

    async update(product: UpdateProductRequest): Promise<ProductResponse> {

        const updateProduct: ProductResponse = await this.prisma.product.update({
            data: product,
            where: {
                id: product.id
            }
        })

        return updateProduct;
    }

    async create(product: NewProductRequest): Promise<ProductResponse> {
        const { name, price } = product;


        const newProduct: ProductResponse = await this.prisma.product.create({
            data: {
                name: name,
                price: price
            }
        });

        return newProduct;
    }

    async getProductById(id: number): Promise<ProductResponse> {
        const product: ProductResponse = await this.prisma.product.findFirst({
            where: {
                id: id
            }
        })

        return product;
    }

    async getProducts(): Promise<ProductResponse[]> {
        const products: ProductResponse[] = await this.prisma.product.findMany();

        return products;
    }
}