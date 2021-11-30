import { ApiProperty } from "@nestjs/swagger";
import { NewProductRequest } from "./NewProductRequest";

export class UpdateProductRequest extends NewProductRequest {
    @ApiProperty({ example: '1' })
    id: number
}