import React from 'react';
import s from './StyleComponents.module.css'

const Back = () => {
    return (
        <button className={s.back + ' ' + s.button}>
            Назад
        </button>
    );
};

export default Back;