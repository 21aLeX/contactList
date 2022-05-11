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

function App() {
  async function res(){
    try{
    
 const ot =  await GetData.getAll()} catch (e) {
  alert('Произошла ошибка' + e)
}
  }
  console.log(res())
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
