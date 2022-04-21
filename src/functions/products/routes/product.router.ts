import { isAuthenticated } from "@src/shared/middlewares/isAuthenticated";
import { Router } from "express";
import ProductController from "../controllers/product.controller";

class ProductRouter {
  public router: Router;
  private readonly productController: ProductController;

  constructor() {
    this.router = Router();
    this.productController = new ProductController();
    this.config();
  }

  private config(): void {
    this.router.get(
      "/",
      [isAuthenticated],
      this.productController.getListProduct
    );

    this.router.get(
      "/:productId",
      [isAuthenticated],
      this.productController.viewProductDetail
    );

    this.router.post(
      "/",
      [isAuthenticated],
      this.productController.createProduct
    );

    this.router.put(
      "/:productId",
      [isAuthenticated],
      this.productController.updateProduct
    );

    this.router.delete(
      "/:productId",
      [isAuthenticated],
      this.productController.deleteProduct
    );
  }
}

export default new ProductRouter().router;
