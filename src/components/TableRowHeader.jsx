import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import s from './StyleComponents.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TableRowHeader = () => {
    return (
        <tr>
            <td className={s.id}>ID
            </td>
            <IconButton  className={s.arrow1}>
            <KeyboardArrowDownIcon  />
            </IconButton>
            <td className={s.titleTable}>Заголовок</td>
            <IconButton  className={s.arrow2}>
            <KeyboardArrowDownIcon  />
            </IconButton>
            <td className={s.description}>Описание</td>
            <IconButton  className={s.arrow3}>
            <KeyboardArrowDownIcon  />
            </IconButton>
        </tr>
    );
};

export default TableRowHeader;