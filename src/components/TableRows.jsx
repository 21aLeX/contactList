import { TableBody, TableCell, TableRow} from '@mui/material';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

const TableRows = () => {
    const listPost = useSelector(state => state.post.post);
    
//   const searchContact = useMemo(() => {
//     return listContact.filter(c => c.name.toLowerCase().includes(search) || c.telephone.toLowerCase().includes(search))
//   }, [listContact, search])
    return (
        <TableBody>
      {listPost.map((listPost, index) => (
        <TableRow
        align="right"
          key={index + 1}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell style={{ width:5 }}>{index + 1}</TableCell>
          <TableCell>
            {listPost.id}
          </TableCell>
          <TableCell>{listPost.title}</TableCell>
          <TableCell>{listPost.body}</TableCell>          
        </TableRow>
      ))}
    </TableBody>
    );
};

export default TableRows;