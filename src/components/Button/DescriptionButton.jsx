import { Button } from '@mui/material';
import React from 'react';
import s from '../StyleComponents.module.css'

const DescriptionButton = () => {
    return (
        <button
            className={s.description +' '+ s.headerText+' '+s.button}
        >
            Описание
            <i className={s.arrow}></i>
        </button>
    );
};

export default DescriptionButton;