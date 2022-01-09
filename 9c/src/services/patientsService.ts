import patientsData from '../../data/patients.json';
import {
    PatientsEntry,
    NonSensitivePatientsEntry,
    NewPatientEntry,
} from '../types';
import { v1 as uuid } from 'uuid';

const patients: PatientsEntry[] = patientsData;

const getEntries = () => {
    return patients;
};

const getNonSensitivePatientsEnties = (): NonSensitivePatientsEntry[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

const findById = (id: string): PatientsEntry | undefined => {
    const entry = patients.find((patient) => patient.id === id);
    return entry;
};

const addPatient = (entry: NewPatientEntry): PatientsEntry => {
    const newPatientEntry = {
        id: String(uuid()),
        ...entry,
    };

    patients.push(newPatientEntry);
    return newPatientEntry;
};

export default {
    getEntries,
    getNonSensitivePatientsEnties,
    findById,
    addPatient,
};
