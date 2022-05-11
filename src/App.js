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
import { useDispatch } from 'react-redux';
import {addPost} from './store/slise/dataSlise'

function App() {
  const dispatch = useDispatch()
  async function res(){
    try{
    
 const ot =  await GetData.getAll()
 dispatch(addPost(ot))
  console.log(typeof (ot))
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
      <Back/>
      <Number/>
      <Next/>
      </div>
  );
}

export default App;
