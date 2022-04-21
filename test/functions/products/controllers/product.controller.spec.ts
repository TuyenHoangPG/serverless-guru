import ProductController from "../../../../src/functions/products/controllers/product.controller";
import { Request, Response } from "express";
import {
  createProductBody,
  updateProductBody,
} from "../../../mocks/product.mock";

jest.mock(
  "../../../../src/functions/products/services/product.service",
  () => ({
    __esModule: true,
    default: jest.fn(),
    getListProduct: jest.fn(),
    createProduct: jest.fn(),
    updateProduct: jest.fn(),
    deleteProduct: jest.fn(),
    viewProductDetail: jest.fn(),
  })
);

describe("get all product controller", () => {
  it("should return the list of products", () => {
    const req = {} as Request;
    const res = {} as Response;
    const productController = new ProductController();
    const result = productController.getListProduct(req, res, null);
    expect(result).toBeDefined();
  });

  it("should throw error", () => {
    const req = {} as Request;
    const res = {} as Response;
    const productController = new ProductController();
    productController.getListProduct(req, res, null).catch((error) => {
      expect(error).toBeDefined();
    });
  });
});

describe("get product controller", () => {
  it("should return the product", () => {
    const req = {} as Request;
    const res = {} as Response;
    const productController = new ProductController();
    const result = productController.viewProductDetail(req, res, null);
    expect(result).toBeDefined();
  });

  it("should throw error", () => {
    const req = {} as Request;
    const res = {} as Response;
    const productController = new ProductController();
    productController.viewProductDetail(req, res, null).catch((error) => {
      expect(error).toBeDefined();
    });
  });
});

describe("create post controller", () => {
  createProductBody.forEach((caseValue) => {
    it(caseValue.title, () => {
      const req = {} as Request;
      const res = {} as Response;
      const productController = new ProductController();
      const result = productController.createProduct(req, res, null);
      expect(result).toBeDefined();
    });
  });

  it("should throw error", () => {
    const req = {} as Request;
    const res = {} as Response;
    const productController = new ProductController();
    productController.createProduct(req, res, null).catch((error) => {
      expect(error).toBeDefined();
    });
  });
});

describe("update product controller", () => {
  updateProductBody.forEach((caseValue) => {
    it(caseValue.title, () => {
      const req = {} as Request;
      const res = {} as Response;
      const productController = new ProductController();
      const result = productController.updateProduct(req, res, null);
      expect(result).toBeDefined();
    });
  });

  it("should throw error", () => {
    const req = {} as Request;
    const res = {} as Response;
    const productController = new ProductController();
    productController.updateProduct(req, res, null).catch((error) => {
      expect(error).toBeDefined();
    });
  });
});

describe("delete product controller", () => {
  it("should return delete product", () => {
    const req = {} as Request;
    const res = {} as Response;
    const productController = new ProductController();
    const result = productController.deleteProduct(req, res, null);
    expect(result).toBeDefined();
  });

  it("should throw error", () => {
    const req = {} as Request;
    const res = {} as Response;
    const productController = new ProductController();
    productController.deleteProduct(req, res, null).catch((error) => {
      expect(error).toBeDefined();
    });
  });
});
