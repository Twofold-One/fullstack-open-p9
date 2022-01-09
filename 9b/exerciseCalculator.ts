const calculateExercises = (target: number, hoursPerDay: Array<number>) => {
    const periodLength = hoursPerDay.length;
    const trainingDays = hoursPerDay.filter((day) => day).length;
    const average =
        hoursPerDay.reduce((prev, current) => prev + current, 0) /
        hoursPerDay.length;
    const success = average > target;
    const rating =
        average / target >= 0.95 ? 3 : average / target >= 0.75 ? 2 : 1;
    const ratingDescription =
        rating === 3 ? 'great' : rating === 2 ? 'could be better' : 'bad';

    return {
        periodLength,
        trainingDays,
        target,
        average,
        success,
        rating,
        ratingDescription,
    };
};

// const a = Number(process.argv[2]);
// const b = process.argv.slice(3).map((arg) => Number(arg));

// console.log(calculateExercises(a, b));

export default calculateExercises;
