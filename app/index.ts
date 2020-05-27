import express from 'express';
import cors from 'cors';

const normalizePort = (port: string) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || '5000');

const app: express.Application = express();
const router: express.Router = express.Router();

import apiRouter from './routers';

// adding cors
app.use(cors());

// Health check
app.get('/', (req, res) => {
    res.send('Hello');
});

// Router
router.use('/api', apiRouter);

// Mounting router
app.use('/', router);

// Start server
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Starting server at port ${PORT}`);
});
