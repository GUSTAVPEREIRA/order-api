import { Decimal } from "@prisma/client/runtime";

export class ProductResponse {
    id: number;
    name: string;
    price: Decimal;
}