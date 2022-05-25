import './App.css';
import SearchInput from './components/SearchInput';
import Tables from './components/Tables';
import Pages from './components/Pages';
import GetData from './API/GetData';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './store/slise/dataSlise'
import { useMemo, useState } from 'react';
import { addPage } from './store/slise/pagesSlise';
import UiButton from './components/Button/UiButton';

function App() {
  const limit = useSelector(state => state.page.limit)
  const page = useSelector(state => state.page.page)
  const dispatch = useDispatch()
  async function res() {
    try {

      const ansver = await GetData.getAll(limit, page)
      dispatch(addPost(ansver.data))
      dispatch(addPage(ansver.headers['x-total-count']))

    } catch (e) {
      alert('Произошла ошибка' + e)
    }
  }
  useMemo(() => {
    res()

  }, [])
  return (
    <div>
      <div className='app'>
      </div>
      <SearchInput />
      <Tables />
      <UiButton />
      <Pages />
    </div>
  );
}

export default App;
