import React from 'react';
import s from './StyleComponents.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Paper, Divider,InputBase} from '@mui/material';

const SearchInput = () => {
    return (
      <div>
      <input className={s.search}
      placeholder='Поиск'
      />
            <SearchIcon  sx={{ color: 'white' }} className={s.searchIcon} />
      </div>
    );
};

export default SearchInput;