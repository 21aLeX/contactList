import { Button } from '@mui/material';
import React from 'react';
import s from '../StyleComponents.module.css'

const IdButton = () => {
    return (
        <button 
        className={s.id +' '+ s.headerText+' '+s.button}>
            ID
            <i className={s.arrow}></i>
        </button>
    );
};

export default IdButton;