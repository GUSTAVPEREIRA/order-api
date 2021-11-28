import { NewProductRequest } from "./models/NewProductRequest"
import { ProductResponse } from "./models/ProductResponse"

export interface IProductRepository {
    create(products: NewProductRequest): Promise<ProductResponse>;
}
