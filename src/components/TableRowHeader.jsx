import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import s from './StyleComponents.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IdButton from './Button/IdButton';

const TableRowHeader = () => {
    return (
        <thead>
            <tr>
            
            <td className={s.description}>Описание</td>
            <td>
            <i className={s.arrow3}></i>
            </td>
            </tr>
        </thead>
    );
};

export default TableRowHeader;