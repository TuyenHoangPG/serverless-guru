import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export default class CreateProductRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}
