import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import diagnosesRouter from './routes/diagnoses';
import patientsRouter from './routes/patients';
const app = express();
app.use(cors());
app.use(express.json());
morgan.token('body', (req: express.Request, _res: express.Response) =>
    JSON.stringify(req.body)
);
app.use(
    morgan(
        ':method :url :status :res[content-length] - :response-time ms :body'
    )
);

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/patients', patientsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
