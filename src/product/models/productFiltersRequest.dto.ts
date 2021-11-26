import { ApiProperty } from "@nestjs/swagger";

export class ProductFiltersRequest {
    @ApiProperty({ description: 'Order Type asc or desc', default: 'asc', example: 'desc' })
    typeOrderBy: string;

    @ApiProperty({ description: 'Selected page number', minimum: 0, default: 0 })
    page: number;

    @ApiProperty({ description: 'Elements quantity', minimum: 10, default: 10 })
    take: number;
}