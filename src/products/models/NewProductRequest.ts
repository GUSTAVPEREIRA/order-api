import { ApiProperty } from "@nestjs/swagger";
import { Decimal } from "@prisma/client/runtime"

export class NewProductRequest {
    @ApiProperty({description: 'Product name', example: 'Book Clean Architecture'})    
    name: string;
    @ApiProperty({description: 'Product price', example: '55.70'})
    price: Decimal;
}