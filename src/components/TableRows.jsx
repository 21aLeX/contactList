import { TableBody, TableCell, TableRow} from '@mui/material';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import s from './StyleComponents.module.css'

const TableRows = () => {
    const listPost = useSelector(state => state.post.post);
    
//   const searchContact = useMemo(() => {
//     return listContact.filter(c => c.name.toLowerCase().includes(search) || c.telephone.toLowerCase().includes(search))
//   }, [listContact, search])
    return (
        <tr className={s.tableRow}>
      {listPost.map((listPost, index) => (
        <tr
        align="right"
          key={index + 1}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          {/* <TableCell style={{ width:5 }}>{index + 1}</TableCell> */}
          <td  className={s.text}>
            {listPost.id}
          </td>
          <td  className={s.text}>{listPost.title}</td>
          <td  className={s.text}>{listPost.body}</td>          
        </tr>
      ))}
    </tr>
    );
};

export default TableRows;