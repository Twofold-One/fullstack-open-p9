import React from 'react';
import { ContentProps } from '../types';

export const Total = ({ courseParts }: ContentProps) => {
    return (
        <div>
            <p>
                Number of exercises{' '}
                {courseParts.reduce(
                    (carry, part) => carry + part.exerciseCount,
                    0
                )}
            </p>
        </div>
    );
};

export default Total;
