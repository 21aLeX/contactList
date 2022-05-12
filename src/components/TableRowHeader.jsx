import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import s from './StyleComponents.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TableRowHeader = () => {
    return (
        <thead>
            <tr>
            <td className={s.id}>ID
            </td>
            <td>
            <i className={s.arrow1}>
            </i>
            </td>
            <td className={s.titleTable}>Заголовок</td>
            <td>
            <i className={s.arrow2}>
            </i>
            </td>
            <td className={s.description}>Описание</td>
            <td>
            <i className={s.arrow3}></i>
            </td>
            </tr>
        </thead>
    );
};

export default TableRowHeader;