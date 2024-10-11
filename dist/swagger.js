import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "AceTV API",
            version: "1.0.0",
            description: "A simple API documentation",
        },
    },
    apis: ["./src/routes/*.ts"], // Asegúrate de apuntar a la ubicación correcta de tus archivos
};
const swaggerSpec = swaggerJSDoc(options);
export const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
