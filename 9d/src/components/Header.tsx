import React from 'react';
import { HeaderProps } from '../types';

const Header = ({ courseName }: HeaderProps) => {
    return (
        <div>
            <h1>{courseName}</h1>
        </div>
    );
};

export default Header;
