import React, { useMemo, useState } from 'react';
import s from './StyleComponents.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Paper, Divider, InputBase } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addSearch } from '../store/slise/searchSlise';

const SearchInput = () => {
  const [search, setSearch] = useState('')
  console.log(search)
  const dispatch = useDispatch()
  useMemo(() => {
    dispatch(addSearch(search))
  }, [search])
  return (
    <div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        className={s.search}
        placeholder='Поиск'
      />
      <SearchIcon sx={{ color: 'white' }} className={s.searchIcon} />
    </div>
  );
};

export default SearchInput;