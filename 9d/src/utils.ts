const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled disciminated union member: ${JSON.stringify(value)}`
    );
};

export default assertNever;
