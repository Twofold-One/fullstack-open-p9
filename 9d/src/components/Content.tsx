import React from 'react';
import { ContentProps } from '../types';

export const Content = ({ courseParts }: ContentProps) => {
    return (
        <div>
            {courseParts.map((part) => (
                <div key={part.name}>
                    <p>
                        {part.name} {part.exerciseCount}{' '}
                    </p>
                    <p>{part.type}</p>
                </div>
            ))}
        </div>
    );
};

export default Content;
