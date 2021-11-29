import { ApiProperty } from "@nestjs/swagger";
import { Decimal } from "@prisma/client/runtime";

export class ProductResponse {

    @ApiProperty({ example: '1' })
    id: number;

    @ApiProperty({ example: 'Clean Architecture' })
    name: string;

    @ApiProperty({ example: '59.90' })
    price: Decimal;
}