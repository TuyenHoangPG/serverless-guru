import { IsNotEmpty, IsUUID } from "class-validator";

export default class DeleteProductRequest {
  @IsUUID("4")
  @IsNotEmpty()
  productId: string;
}
