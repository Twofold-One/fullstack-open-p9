import express from 'express';
import calculateExercises from './exerciseCalculator';
import calculateBmi from './bmiCalculator';
const app = express();

// middleware
app.use(express.json());

app.get('/', (_req, res) => {
    res.send('9b part');
});

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const { height, weight } = req.query;

    if (!height || !weight) {
        return res.status(400).send({ error: 'malformatted params' });
    } else {
        const result = calculateBmi(Number(height), Number(weight));

        return res.send({
            weight: weight,
            height: height,
            bmi: result,
        });
    }
});

app.post('/exercises', (req, res) => {
    const { target, hoursPerDay } = req.body;

    if (!target && !hoursPerDay) {
        return res.status(400).json({
            error: 'content missing',
        });
    } else {
        const result = calculateExercises(target, hoursPerDay);

        return res.json(result);
    }
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
