import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSelect } from '../../store/slise/selectSlise';
import s from '../StyleComponents.module.css'

const IdButton = () => {
    const [select, setSelect] = useState('')
    const dispatch = useDispatch()
    useMemo(() => {
        dispatch(addSelect(select))
    }, [select])

    return (
        <div>
            <button
                onClick={() => select === 'id' ? setSelect('') : setSelect('id')}
                className={s.id + ' ' + s.headerText + ' ' + s.button}>
                ID
                <i className={select === 'id' ? s.arrow + ' ' + s.focus : s.arrow}></i>
            </button>
            <button
                onClick={() => select === 'title' ? setSelect('') : setSelect('title')}
                className={s.title + ' ' + s.headerText + ' ' + s.button}
            >
                Заголовок
                <i className={select === 'title' ? s.arrow + ' ' + s.focus : s.arrow}></i>
            </button>
            <button
                onClick={() => select === 'body' ? setSelect('') : setSelect('body')}
                className={s.description + ' ' + s.headerText + ' ' + s.button}
            >
                Описание
                <i className={select === 'body' ? s.arrow + ' ' + s.focus : s.arrow}></i>
            </button>
        </div>
    );
};

export default IdButton;