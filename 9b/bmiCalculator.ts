const calculateBmi = (height: number, weigth: number): string => {
    const BMI = weigth / (height / 100) ** 2;

    if (BMI < 16) {
        return 'Underweight (Severe thinness)';
    } else if (BMI > 16 && BMI < 16.9) {
        return 'Underweight (Moderate thinness)';
    } else if (BMI > 17 && BMI < 18.4) {
        return 'Underweight (Mild thinness)';
    } else if (BMI > 18.5 && BMI < 24.9) {
        return 'Normal range';
    } else if (BMI > 25.0 && BMI < 29.9) {
        return 'Overweight (Pre-obese)';
    } else if (BMI > 30.0 && BMI < 34.9) {
        return 'Obese (Class I)';
    } else if (BMI > 35.0 && BMI < 39.9) {
        return 'Obese (Class II)';
    }
    return 'Obese (Class III)';
};

// const a = Number(process.argv[2]);
// const b = Number(process.argv[3]);
// console.log(calculateBmi(a, b));

export default calculateBmi;
