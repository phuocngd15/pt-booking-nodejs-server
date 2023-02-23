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
    },
    apis: glob.sync('./**/*.router.ts'),
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
export {swaggerDocs}