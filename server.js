import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors'
import fs from 'fs';

const app = express();

app.use(cors());

const PORT = 5000;

// This is to load the JSON file
const swaggerDocument = JSON.parse(fs.readFileSync('./swagger.json', 'utf8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
    console.log(`swagger docs available at http://localhost:${PORT}/api-docs`)
})

