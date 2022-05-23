import { IconButton } from '@mui/material';
import './App.css'; 
import SearchInput from './components/SearchInput';
import Tables from './components/Tables';
import s from './components/StyleComponents.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Back from './components/Back';
import Next from './components/Next';
import Number from './components/Number';
import GetData from './API/GetData';
import { useDispatch, useSelector } from 'react-redux';
import {addPost} from './store/slise/dataSlise'
import { useState } from 'react';
import { addPage } from './store/slise/pagesSlise';
import IdButton from './components/Button/IdButton';
import TitleButton from './components/Button/TitleButton';
import DescriptionButton from './components/Button/DescriptionButton';

function App() {
  const limit = useSelector(state => state.page.limit)
  const page =  useSelector(state => state.page.page)
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  async function res(){
    try{
    
 const ansver =  await GetData.getAll(limit, page)
 dispatch(addPost(ansver.data))
 dispatch(addPage(ansver.headers['x-total-count']))

} catch (e) {
  alert('Произошла ошибка' + e)
}
  }
  res()
  return (
    <div>
    <div className='app'>
    </div>
      <SearchInput/>     
      <Tables/>
            <IdButton/>
            <TitleButton/>
            <DescriptionButton/>
      <Back/>
      <Number/>
      <Next/>
      </div>
  );
}

export default App;
