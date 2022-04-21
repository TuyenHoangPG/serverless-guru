import { TABLE_NAME } from "@src/shared/configs/config";
import DbHelper from "@src/shared/utils/db-helper";
import { ProductDto } from "../dtos";
import { ProductModel } from "../models";
import {
  CreateProductRequest,
  DeleteProductRequest,
  UpdateProductRequest,
  ViewProductListRequest,
  ViewProductRequest,
} from "../requests";

export default class ProductService {
  private readonly db: DbHelper;

  constructor() {
    this.db = new DbHelper();
  }

  public async getListProduct(productListReq: ViewProductListRequest): Promise<{
    nextToken: string;
    items: ProductDto[];
  }> {
    const { db } = this;
    const { nextToken, items: listProduct } = await db.list<ProductModel>(
      TABLE_NAME.PRODUCTS,
      productListReq.limit,
      "productId",
      productListReq.next
    );
    const listProductDto: ProductModel[] = listProduct.map(
      (item) => new ProductDto(item.productId, item.name, item.description)
    );

    return {
      nextToken,
      items: listProductDto,
    };
  }

  public async createProduct(
    product: CreateProductRequest
  ): Promise<ProductDto> {
    const { db } = this;
    const productModel = new ProductModel(product.name, product.description);
    const data = await db.insertOrReplace(TABLE_NAME.PRODUCTS, productModel);

    return new ProductDto(
      productModel.productId,
      productModel.name,
      productModel.description
    );
  }

  public async updateProduct(
    product: UpdateProductRequest
  ): Promise<ProductDto> {
    const { db } = this;
    const dataUpdate = { ...product };
    delete dataUpdate.productId;

    await db.updateById(
      TABLE_NAME.PRODUCTS,
      { productId: product.productId },
      dataUpdate
    );

    return new ProductDto(product.productId, product.name, product.description);
  }

  public async deleteProduct(product: DeleteProductRequest): Promise<boolean> {
    const { db } = this;

    await db.deleteById(TABLE_NAME.PRODUCTS, {
      productId: product.productId,
    });

    return true;
  }

  public async viewProductDetail(
    product: ViewProductRequest
  ): Promise<ProductDto | null> {
    const { db } = this;

    const data = await db.findById<ProductModel>(TABLE_NAME.PRODUCTS, {
      productId: product.productId,
    });

    return data
      ? new ProductDto(data.productId, data.name, data.description)
      : null;
  }
}
