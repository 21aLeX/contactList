import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import s from './StyleComponents.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TableRowHeader = () => {
    return (
        <tr>
            <td className={s.id}>ID
            </td>
            <i className={s.arrow1}>
            </i>
            <td className={s.titleTable}>Заголовок</td>
            <i className={s.arrow2}>
            </i>
            <td className={s.description}>Описание</td>
            <i className={s.arrow3}></i>
        </tr>
    );
};

export default TableRowHeader;