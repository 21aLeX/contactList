import { Button } from '@mui/material';
import React from 'react';
import s from '../StyleComponents.module.css'

const IdButton = () => {
    return (
        <div>
        <button 
        className={s.id +' '+ s.headerText+' '+s.button}>
            ID
            <i className={s.arrow}></i>
        </button>
        <button
        className={s.title +' '+ s.headerText+' '+s.button}
    >
        Заголовок
        <i className={s.arrow}></i>
    </button>
    <button
    className={s.description +' '+ s.headerText+' '+s.button}
>
    Описание
    <i className={s.arrow}></i>
</button>
</div>
    );
};

export default IdButton;