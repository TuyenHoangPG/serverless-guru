import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
  IsOptional,
  IsString,
} from "class-validator";

export default class ViewProductRequest {
  @IsUUID("4")
  @IsNotEmpty()
  productId: string;
}

export class ViewProductListRequest {
  @IsNumber()
  @IsOptional()
  limit: number;

  @IsString()
  @IsOptional()
  next: string;
}
