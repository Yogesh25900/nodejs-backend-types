import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import bookroute from './routes/book.route';
import { PORT } from './configs';
import { connectDB } from './database/mongodb';
import authRO from './routes/user.route';
import adminRoutes from './routes/admin/user.route';
import cors from 'cors';

const app: Application = express();
const port = PORT;

connectDB();
app.use(bodyParser.json());

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
};
app.use(cors(
corsOptions
));

app.get('/', (req: Request, res: Response) => {
    res.send("hello world");
});

app.use('/api/users', authRO);
app.use('/api/books', bookroute);
app.use('/api/admin',adminRoutes);

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});

export default app;
