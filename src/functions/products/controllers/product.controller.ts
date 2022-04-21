import HttpResponseModel from "@src/shared/utils/response-util";
import { validateModel } from "@src/shared/utils/validation";
import { NextFunction, Request, Response } from "express";
import httpStatusCodes from "http-status-codes";
import {
  CreateProductRequest,
  DeleteProductRequest,
  UpdateProductRequest,
  ViewProductListRequest,
  ViewProductRequest,
} from "../requests";
import ProductService from "../services/product.service";
export default class ProductController {
  private _productService: ProductService;
  constructor() {
    this._productService = new ProductService();
  }
  getListProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { limit, next } = req.query;
      const productListReq = new ViewProductListRequest();
      Object.assign(productListReq, { limit, next });
      await validateModel(productListReq);

      const result = await this._productService.getListProduct(productListReq);
      res
        .status(httpStatusCodes.OK)
        .send(new HttpResponseModel(httpStatusCodes.OK, result));
    } catch (error) {
      res
        .status(httpStatusCodes.BAD_REQUEST)
        .send(
          new HttpResponseModel(
            httpStatusCodes.BAD_REQUEST,
            null,
            error.message ? error.message : error
          )
        );
    }
  };

  createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const productRequest = new CreateProductRequest();
      Object.assign(productRequest, req.body);
      await validateModel(productRequest);

      const result = await this._productService.createProduct(productRequest);
      res
        .status(httpStatusCodes.OK)
        .send(new HttpResponseModel(httpStatusCodes.OK, result));
    } catch (error) {
      res
        .status(httpStatusCodes.BAD_REQUEST)
        .send(
          new HttpResponseModel(
            httpStatusCodes.BAD_REQUEST,
            null,
            error.message ? error.message : error
          )
        );
    }
  };

  updateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const productRequest = new UpdateProductRequest();
      const { productId } = req.params;
      Object.assign(productRequest, req.body, {
        productId,
      });
      await validateModel(productRequest);

      const result = await this._productService.updateProduct(productRequest);
      res
        .status(httpStatusCodes.OK)
        .send(new HttpResponseModel(httpStatusCodes.OK, result));
    } catch (error) {
      res
        .status(httpStatusCodes.BAD_REQUEST)
        .send(
          new HttpResponseModel(
            httpStatusCodes.BAD_REQUEST,
            null,
            error.message ? error.message : error
          )
        );
    }
  };

  deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const productRequest = new DeleteProductRequest();
      const { productId } = req.params;
      Object.assign(productRequest, {
        productId,
      });
      await validateModel(productRequest);

      const result = await this._productService.deleteProduct(productRequest);
      res
        .status(httpStatusCodes.OK)
        .send(new HttpResponseModel(httpStatusCodes.OK, { isDeleted: result }));
    } catch (error) {
      res
        .status(httpStatusCodes.BAD_REQUEST)
        .send(
          new HttpResponseModel(
            httpStatusCodes.BAD_REQUEST,
            null,
            error.message ? error.message : error
          )
        );
    }
  };

  viewProductDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const productRequest = new ViewProductRequest();
      const { productId } = req.params;
      Object.assign(productRequest, {
        productId,
      });
      await validateModel(productRequest);

      const result = await this._productService.viewProductDetail(
        productRequest
      );
      res
        .status(httpStatusCodes.OK)
        .send(new HttpResponseModel(httpStatusCodes.OK, result));
    } catch (error) {
      res
        .status(httpStatusCodes.BAD_REQUEST)
        .send(
          new HttpResponseModel(
            httpStatusCodes.BAD_REQUEST,
            null,
            error.message ? error.message : error
          )
        );
    }
  };
}
