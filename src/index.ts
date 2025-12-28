import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import bookroute from './routes/book.route';
import { PORT } from './configs';
import { connectDB } from './database/mongodb';
import authRO from './routes/user.route';

const app: Application = express();
const port = PORT;

connectDB();
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send("hello world");
});

app.use('/api/users', authRO);
app.use('/api/books', bookroute);

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});

export default app;
