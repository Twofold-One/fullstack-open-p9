import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatientEntry from '../utils';
const router = express.Router();

router.get('/:id', (req, res) => {
    const patient = patientsService.findById(req.params.id);

    if (patient) {
        res.send(patient);
    } else {
        res.sendStatus(404);
    }
});

router.get('/', (_req, res) => {
    res.send(patientsService.getNonSensitivePatientsEnties());
});

router.post('/', (req, res) => {
    try {
        const newPatientEntry = toNewPatientEntry(req.body);
        const addedPatient = patientsService.addPatient(newPatientEntry);
        res.json(addedPatient);
    } catch (error: unknown) {
        let errorMessage = 'Something went wrong';
        if (error instanceof Error) {
            errorMessage += 'Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }

    // const { name, dateOfBirth, ssn, gender, occupation } = req.body;
    // const newPatientEntry = patientsService.addPatient({
    //     name,
    //     dateOfBirth,
    //     ssn,
    //     gender,
    //     occupation,
    // });
    // res.json(newPatientEntry);
});

export default router;
