# Serverless Nodejs Rest API with TypeScript And DynamoDB

This is simple REST API example for AWS Lambda By Serverless framework with TypeScript, Express and DynamoDB.

## Use Cases

- Serverless Framework - Lambda

- CRUD

- Store data in DynamoDB

- Unit Test Jest.


### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `configs` - containing configs for the project like Table name, default values, etc.
- `funtions` - containing code base of each modules like models, controllers, routers, etc.
- `middlewares` - containing code base of middleware functions
- `utils` - containing code base of utility functions

```
.
├── src
│   ├── functions                           # Code base of each modules
│   │   ├── products
│   │   │   ├── dtos                        # DTOs
│   │   │   │   └── product.dto.ts
│   │   │   ├── requests                    # Requests model
│   │   │   │   └── product.request.ts
│   │   │   ├── models                      # Models
│   │   │   │   └── product.model.ts
│   │   │   ├── controllers                 # `products` lambda controller source code
│   │   │   │   └── product.controller.ts
│   │   │   ├── routes                      # `products` lambda route configuration
│   │   │   │   └── product.router.ts
│   │   │   ├── services                    # `products` lambda service source code
│   │   │   │   └── product.service.ts
│   │   │   └── productHandler.ts           # Export function for `products` lambda
│   │   │
│   │   └── index.ts                        # Import/export of all lambda configurations
│   │
│   └── shared                              # Contains all shared datas
│       ├── middlewares                     # Middleware code base
│       ├── utils                           # Utility code base
│       └── configs                         # Configs, constants, etc.
│
├── test                                    # Unit test code base (Jest)
├── package.json
├── serverless.yml                          # Serverless configure file
├── jest.config.yml                         # Jest configure file
└── tsconfig.json                           # Typescript compiler configuration
```

## Deploy

```
npm run deploy

```

### To Test It Locally

- Run `npm install` to install all the necessary dependencies.
- Run `npm run local` use serverless offline to test locally.

### Deploy on AWS, simply run:

```
$ npm run deploy

```

## List enpoint

```
  POST - https://t6llu7jed0.execute-api.us-east-1.amazonaws.com/v1/products
  PUT - https://t6llu7jed0.execute-api.us-east-1.amazonaws.com/v1/products/{id}
  GET - https://t6llu7jed0.execute-api.us-east-1.amazonaws.com/v1/products
  GET - https://t6llu7jed0.execute-api.us-east-1.amazonaws.com/v1/products/{id}
  DELETE - https://t6llu7jed0.execute-api.us-east-1.amazonaws.com/v1/products/{id}
```

## Invocation

After successful deployment, you can create a new product by calling the corresponding endpoint:

```bash
curl --request POST 'https://t6llu7jed0.execute-api.us-east-1.amazonaws.com/v1/products' --header 'Content-Type: application/json' --data-raw '{"name": "Product name", "description": "Product description"}'
```

Which should result in the following response:

```bash
{ "productId": "xxxxx", "name": "Product name", "description": "Product description" }
```

You can later retrieve the product by `productId` by calling the following endpoint:

```bash
curl https://t6llu7jed0.execute-api.us-east-1.amazonaws.com/v1/products/someProductId
```

Which should result in the following response:

```bash
{ "productId": "someProductId", "name": "xxx", "description": "xxxxx" }
```
