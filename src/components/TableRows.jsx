import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import s from './StyleComponents.module.css'

const TableRows = () => {
  const listPost = useSelector(state => state.post.post);
  const select = useSelector(state => state.select.select);
  const search = useSelector(state => state.search.search);
  let sortPost
  if (select) {
    if (select != 'id') {
      sortPost = Array.from(listPost).sort((a, b) => a[select].localeCompare(b[select]))
    }
    else sortPost = Array.from(listPost).sort((a, b) => b[select] - a[select])
  }
  else sortPost = listPost

  const sortAndSearchPost = useMemo(() => {
    return sortPost.filter(post => post.title.toLowerCase().includes(search))
  }, [search, listPost, sortPost])

  return (
    <tbody className={s.tableRow}>
      {sortAndSearchPost.map((listPost, index) => (
        <tr
          align="right"
          key={index + 1}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <td className={s.text + ' ' + s.idTd}>
            {listPost.id}
          </td>
          <td className={s.text}>{listPost.title}</td>
          <td className={s.text}>{listPost.body}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRows;