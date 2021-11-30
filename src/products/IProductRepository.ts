import { NewProductRequest } from "./models/NewProductRequest"
import { ProductResponse } from "./models/ProductResponse"
import { UpdateProductRequest } from "./models/UpdateProductRequest"

export interface IProductRepository {
    create(product: NewProductRequest): Promise<ProductResponse>;
    update(product: UpdateProductRequest): Promise<ProductResponse>;
    getProductById(id: number): Promise<ProductResponse>;
    getProducts(): Promise<ProductResponse[]>;
}