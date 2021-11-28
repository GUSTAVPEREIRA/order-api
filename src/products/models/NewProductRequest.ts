import { Decimal } from "@prisma/client/runtime"

export class NewProductRequest {
    name: string;
    price: Decimal;
}