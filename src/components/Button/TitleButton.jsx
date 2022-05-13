import { Button } from '@mui/material';
import React from 'react';
import s from '../StyleComponents.module.css'

const TitleButton = () => {
    return (
        <Button
            className={s.title}
        >
            Заголовок
            <i className={s.arrow}></i>
        </Button>
    );
};

export default TitleButton;