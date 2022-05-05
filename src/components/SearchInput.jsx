import React from 'react';
import s from './StyleComponents.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Paper, Divider,InputBase} from '@mui/material';

const SearchInput = () => {
    return (
             <Paper className={s.search}>
      <InputBase sx={{ ml: 1, flex: 6 }}/>
      <IconButton>
        <SearchIcon className={s.searchIcon} />
      </IconButton>
    </Paper>
    );
};

export default SearchInput;