import {
  errorMiddleware,
  notFoundMiddleware,
} from "@src/shared/middlewares/exceptions";
import initExpress from "@src/shared/utils/init-express";
import ServerlessHttp from "serverless-http";
import productRouter from "./routes/product.router";

const app = initExpress();

// Products
app.use("/v1/products", productRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default ServerlessHttp(app);
