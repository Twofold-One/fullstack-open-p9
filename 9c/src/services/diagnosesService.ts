import diagnosesData from '../../data/diagnoses.json';
import { DiagnosesEntry } from '../types';

const diagnoses: Array<DiagnosesEntry> = diagnosesData;

const getEntries = () => {
    return diagnoses;
};

const addEntry = () => {
    return null;
};

export default {
    getEntries,
    addEntry,
};
