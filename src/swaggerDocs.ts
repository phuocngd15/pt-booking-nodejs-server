import glob from 'glob';

import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'API documentation for My API'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ],
        tags: [
            {
                name: 'Users',
                description: 'Endpoints for managing users',
            },
            {
                name: 'Products',
                description: 'Endpoints for managing products',
            },
        ],
    },
    apis: glob.sync('./**/*.router.ts'),
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
export {swaggerDocs}