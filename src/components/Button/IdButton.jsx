import { Button } from '@mui/material';
import React from 'react';
import s from '../StyleComponents.module.css'

const IdButton = () => {
    return (
        <Button 
        className={s.id}
         >
            ID
            <i className={s.arrow}></i>
        </Button>
    );
};

export default IdButton;