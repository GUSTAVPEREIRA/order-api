import { ApiProperty } from "@nestjs/swagger";
import { Decimal } from "@prisma/client/runtime"

export class NewProductRequest {
    @ApiProperty({ example: 'Book Clean Architecture' })
    name: string;
    @ApiProperty({ example: '55.70' })
    price: Decimal;
}