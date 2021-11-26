import { Product } from ".prisma/client";
import { ApiProperty } from '@nestjs/swagger';

export class ProductEntity implements Product {
    @ApiProperty()
    name;

    @ApiProperty()
    price;

    id;
}