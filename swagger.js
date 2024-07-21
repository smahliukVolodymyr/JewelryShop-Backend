import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Jewelry Shop API",
    version: "1.0.0",
    description:
      "API endpoints for jewelry shop automation service documented on Swagger",
    contact: {
      name: "Volodymyr Smahliuk",
      email: "smaglukvolodia54@gmail.com",
      url: "https://github.com/smahliukVolodymyr/Homework-Backend",
    },
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "string",
            example: "668d3771d76460cedb0eaac3",
            description: "Unique identifier for the user",
          },
          username: {
            type: "string",
            example: "admin",
            description: "Username",
          },
          password: {
            type: "string",
            example: "admin",
            description: "Password",
          },
          roles: {
            type: "array",
            items: {
              type: "string",
              description: "Role of the user",
              enum: ["ADMIN", "USER"],
            },
            description: "List of roles assigned to the user",
          },
        },
      },
      Material: {
        type: "object",
        required: ["name", "pricePerGram"],
        properties: {
          _id: {
            type: "string",
            example: "668fe2ea233716e147f9049f",
            description: "Unique identifier for the material",
          },
          name: {
            type: "string",
            example: "Silver",
            description: "Name of the material",
          },
          pricePerGram: {
            type: "number",
            example: "10",
            description: "Price per gram of material",
          },
        },
      },
      Product: {
        type: "object",
        required: ["_id", "name", "type", "materials", "price", "weight"],
        properties: {
          _id: {
            type: "string",
            example: "669117cf159bcbc1bdbe85b5",
            description: "Id of material",
          },
          name: {
            type: "string",
            example: "Silver Bracelet",
            description: "Name of material",
          },
          type: {
            type: "string",
            example: "Bracelets",
            enum: [
              "Earrings",
              "Bracelets",
              "Rings",
              "Chains",
              "Necklaces",
              "Brooches",
              "Pendants",
            ],
            description: "Type of material",
          },
          materials: {
            type: "array",
            items: {
              type: "string",
              example: "668fe2ea233716e147f9049f",
            },
            description: "Product materials",
          },
          weight: {
            type: "number",
            example: "10",
            description: "Weight of product",
          },
          price: {
            type: "number",
            example: "100",
            description: "Price of product",
          },
        },
      },
      SalesItem: {
        type: "object",
        required: [
          "_id",
          "product",
          "finalPrice",
          "buyerLastName",
          "buyerFirstName",
          "buyerMiddleName",
        ],
        properties: {
          _id: {
            type: "string",
            example: "669266368c08c8272534b08b",
            description: "Id of sales item",
          },
          product: {
            type: "string",
            description: "Id of product used in sales item",
            example: "669117cf159bcbc1bdbe85b5",
          },
          finalPrice: {
            type: "number",
            example: "140",
            description: "Price of product",
          },
          buyerLastName: {
            type: "string",
            example: "Smith",
            description: "Last name of buyer",
          },
          buyerFirstName: {
            type: "string",
            example: "John",
            description: "First name of buyer",
          },
          buyerMiddleName: {
            type: "string",
            example: "Anderson",
            description: "Middle name of buyer",
          },
        },
      },
      ProductAdvanced: {
        type: "object",
        required: ["_id", "name", "type", "materials", "price", "weight"],
        properties: {
          _id: {
            type: "string",
            example: "",
            description: "Id of the material",
          },
          name: {
            type: "string",
            example: "Silver earrings",
            description: "Name of the material",
          },
          type: {
            type: "string",
            example: "Earrings",
            enum: [
              "Earrings",
              "Bracelets",
              "Rings",
              "Chains",
              "Necklaces",
              "Brooches",
              "Pendants",
            ],
            description: "Type of the material",
          },
          materials: {
            type: "array",
            items: {
              type: "object",
              required: ["_id", "name"],
              properties: {
                _id: {
                  type: "string",
                  example: "668fe2ea233716e147f9049f",
                  description: "Unique identifier for the material",
                },
                name: {
                  type: "string",
                  example: "Silver",
                  description: "Name of the material",
                },
              },
            },
          },
          weight: {
            type: "number",
            example: "10",
            description: "Weight of product",
          },
          price: {
            type: "number",
            example: "100",
            description: "Price of product",
          },
        },
      },
      SalesItemAdvanced: {
        type: "object",
        required: [
          "_id",
          "product",
          "finalPrice",
          "buyerLastName",
          "buyerFirstName",
          "buyerMiddleName",
          "saleDate",
        ],
        properties: {
          _id: {
            type: "string",
            example: "669266368c08c8272534b08b",
            description: "Id of sales item",
          },
          product: {
            type: "array",
            items: {
              type: "object",
              required: ["_id", "name"],
              properties: {
                _id: {
                  type: "string",
                  example: "669117cf159bcbc1bdbe85b5",
                  description: "Unique identifier for the product",
                },
                name: {
                  type: "string",
                  example: "Silver Bracelete",
                  description: "Name of product used in sale item",
                },
              },
            },
          },
          finalPrice: {
            type: "number",
            example: "140",
            description: "Price of product",
          },
          buyerLastName: {
            type: "string",
            example: "Smith",
            description: "Last name of buyer",
          },
          buyerFirstName: {
            type: "string",
            example: "John",
            description: "First name of buyer",
          },
          buyerMiddleName: {
            type: "string",
            example: "Anderson",
            description: "Middle name of buyer",
          },
          saleDate: {
            type: "string",
            example: "2024-07-13T11:34:14.148Z",
            description: "Date when item was sold",
          },
        },
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  tags: [
    {
      name: "Auth",
      description: "Authentication and authorization related endpoints",
    },
  ],
  paths: {
    "/auth/login": {
      post: {
        tags: ["Auth"],
        summary: "Authorization of user",
        description: "Authenticates user and returns token",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["username", "password"],
                properties: {
                  username: {
                    type: "string",
                    example: "admin",
                    description: "Username of the user",
                  },
                  password: {
                    type: "string",
                    example: "admin",
                    description: "Password of the user",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "User was logged in",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    token: {
                      type: "string",
                      example:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGQzNzcxZDc2NDYwY2VkYjBlYWFjMyIsInJvbGVzIjpbIkFETUlOIl0sImlhdCI6MTcyMTQ4NjYxMywiZXhwIjoxNzIxNTE1NDEzfQ.4rTOm9ERtSbxOZWovJNXb9PrachNQl_9pfmpo5T251Y",
                      description: "JWT token",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Invalid credentials",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Incorrect password",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Login Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Login Error",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/auth/registration": {
      post: {
        tags: ["Auth"],
        summary: " Registration of user",
        description: "Creates new user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["username", "password"],
                properties: {
                  username: {
                    type: "string",
                    example: "admin",
                    description: "Username of the user",
                  },
                  password: {
                    type: "string",
                    example: "admin",
                    description: "Password of the user",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: " New user was created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "New user was created",
                      description: "Result message",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Registration error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User already exists",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Registration error from server",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Registration error",
                      description: "Registration error",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/auth/users": {
      get: {
        tags: ["Auth"],
        summary: "Get list of users",
        description:
          "Request returns list of all users and is allowed only for Admins",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: "Successful response with users data",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
          403: {
            description: "Access denied",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User authorization is required",
                      description: "Access denied",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Error getting users",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error getting users",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/materials/get": {
      get: {
        tags: ["Materials"],
        summary: "Get list of materials",
        description: "Request returns list of all materials",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: "Successful response with materials data",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Material",
                  },
                },
              },
            },
          },
          403: {
            description: "Access denied",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User authorization is required",
                      description: "Access denied",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Error getting materials",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error getting materials",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/materials/add": {
      post: {
        tags: ["Materials"],
        summary: " Add new material",
        description: "Adds new material",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name", "pricePerGram"],
                properties: {
                  name: {
                    type: "string",
                    example: "Silver",
                    description: "Name of the material",
                  },
                  pricePerGram: {
                    type: "number",
                    example: "10",
                    description: "Price per gram of material",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "New material was created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Material was created",
                      description: "Result message",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Adding error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Material with name: ... already exists",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
          403: {
            description: "Access denied",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User authorization is required",
                      description: "Access denied",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Adding error from server",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error adding material",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/materials/edit": {
      put: {
        tags: ["Materials"],
        summary: " Edit material",
        description: "Edits material and returns new copy",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Material",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Material was changed",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Material",
                },
              },
            },
          },
          400: {
            description: "Editing error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Material not found",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
          403: {
            description: "Access denied",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User authorization is required",
                      description: "Access denied",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Editing error from server",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error editing material",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/materials/delete/{id}": {
      delete: {
        tags: ["Materials"],
        summary: "Delete material by ID",
        description: "Deletes material and returns it",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the material to delete",
            schema: {
              type: "string",
              example: "669beeb3a604cdbc5d82feb0",
            },
          },
        ],
        responses: {
          200: {
            description:
              "Successful response with the deleted material details",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Material",
                },
              },
            },
          },
          400: {
            description: "Error to delete material",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Material not found",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
          403: {
            description: "Access denied",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User authorization is required",
                      description: "Access denied",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Error to delete material from server",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error deleting material",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/products/get": {
      get: {
        tags: ["Products"],
        summary: "Get list of products",
        description: "Request returns list of all products",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: "Successful response with products data",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/ProductAdvanced",
                  },
                },
              },
            },
          },
          403: {
            description: "Access denied",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User authorization is required",
                      description: "Access denied",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Error getting products",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error getting products",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/products/add": {
      post: {
        tags: ["Products"],
        summary: " Add new product",
        description: "Adds new product",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name", "type", "materials", "price", "weight"],
                properties: {
                  name: {
                    type: "string",
                    example: "Silver Bracelet",
                    description: "Name of material",
                  },
                  type: {
                    type: "string",
                    example: "Bracelets",
                    enum: [
                      "Earrings",
                      "Bracelets",
                      "Rings",
                      "Chains",
                      "Necklaces",
                      "Brooches",
                      "Pendants",
                    ],
                    description: "Type of material",
                  },
                  materials: {
                    type: "array",
                    items: {
                      type: "string",
                      example: "668fe2ea233716e147f9049f",
                    },
                    description: "Product materials",
                  },
                  weight: {
                    type: "number",
                    example: "10",
                    description: "Weight of product",
                  },
                  price: {
                    type: "number",
                    example: "100",
                    description: "Price of product",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "New product was created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Product was created",
                      description: "Result message",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Adding error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Product ... of type ... already exists",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
          403: {
            description: "Access denied",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User authorization is required",
                      description: "Access denied",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Adding error from server",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error creating product",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/products/edit": {
      put: {
        tags: ["Products"],
        summary: " Edit product",
        description: "Edits product and returns new copy",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Product was changed",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product",
                },
              },
            },
          },
          400: {
            description: "Editing error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Product not found",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
          403: {
            description: "Access denied",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User authorization is required",
                      description: "Access denied",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Editing error from server",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error editing product",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/products/delete/{id}": {
      delete: {
        tags: ["Products"],
        summary: "Delete product by ID",
        description: "Deletes product and returns it",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the product to delete",
            schema: {
              type: "string",
              example: "669117cf159bcbc1bdbe85b5",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful response with the deleted product data",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product",
                },
              },
            },
          },
          400: {
            description: "Error to delete product with id",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Cannot delete product. It is used in sales.",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
          403: {
            description: "Access denied",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User authorization is required",
                      description: "Access denied",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Error to delete product from server",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error deleting product",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/sales/get": {
      get: {
        tags: ["Sales"],
        summary: "Get list of sales",
        description: "Request returns list of all sales",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: "Successful response with sales data",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/SalesItemAdvanced",
                  },
                },
              },
            },
          },
          403: {
            description: "Access denied",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User authorization is required",
                      description: "Access denied",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Error getting sales data",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error getting sales data",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/sales/add": {
      post: {
        tags: ["Sales"],
        summary: " Add new sale item",
        description: "Adds new sale item",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: [
                  "product",
                  "buyerLastName",
                  "buyerFirstName",
                  "buyerMiddleName",
                ],
                properties: {
                  product: {
                    type: "string",
                    description: "Id of product used in sales item",
                    example: "669117cf159bcbc1bdbe85b5",
                  },
                  buyerLastName: {
                    type: "string",
                    example: "Smith",
                    description: "Last name of buyer",
                  },
                  buyerFirstName: {
                    type: "string",
                    example: "John",
                    description: "First name of buyer",
                  },
                  buyerMiddleName: {
                    type: "string",
                    example: "Anderson",
                    description: "Middle name of buyer",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "New sales item was created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Sales item was created",
                      description: "Result message",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Adding sales item error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Sales item with this product already exists",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
          403: {
            description: "Access denied",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User authorization is required",
                      description: "Access denied",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Adding sales item error from server",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error creating sale item",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/sales/edit": {
      put: {
        tags: ["Sales"],
        summary: " Edit sales",
        description: "Edits sales item and returns new copy",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SalesItem",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Sales item was changed",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SalesItem",
                },
              },
            },
          },
          400: {
            description: "Editing error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Sales item not found",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
          403: {
            description: "Access denied",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User authorization is required",
                      description: "Access denied",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Editing error from server",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error editing sales item",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/sales/delete/{id}": {
      delete: {
        tags: ["Sales"],
        summary: "Delete sales item by ID",
        description: "Deletes sales item and returns it",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the product to delete",
            schema: {
              type: "string",
              example: "669117cf159bcbc1bdbe85b5",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful response with the deleted sales item",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SalesItem",
                },
              },
            },
          },
          400: {
            description: "Error to delete product",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Sales item not found",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
          403: {
            description: "Access denied",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User authorization is required",
                      description: "Access denied",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Error to delete product from server",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Error deleting sales item",
                      description: "Error message",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };
