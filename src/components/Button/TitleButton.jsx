import { Button } from '@mui/material';
import React from 'react';
import s from '../StyleComponents.module.css'

const TitleButton = () => {
    return (
        <button
            className={s.title +' '+ s.headerText+' '+s.button}
        >
            Заголовок
            <i className={s.arrow}></i>
        </button>
    );
};

export default TitleButton;