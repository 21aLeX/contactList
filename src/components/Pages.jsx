import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './StyleComponents.module.css'
import { addPage, setCurrentPage } from '../store/slise/pagesSlise';
import GetData from '../API/GetData';
import { addPost } from '../store/slise/dataSlise';

const Pages = () => {
    const countPage = useSelector(state => state.page.page)
    const limit = useSelector(state => state.page.limit)
    const currentPages = useSelector(state => state.page.currentPage)
    const [nextState,setNextState] = useState(true)
    const [backState,setBackState] = useState(false)
    
  const dispatch = useDispatch()

    console.log(currentPages)
    const arrPages = useMemo(() => {
        const arrPages = []
        for (let i = 1; i <= countPage; i++) {
            arrPages.push(i)
        }
        return arrPages
    }
        ,
        [countPage])
function next (){
    res(currentPages+1)
  if(!backState)setBackState(true)
  dispatch(setCurrentPage(currentPages+1))
  if(currentPages+1 === countPage) setNextState(false)


}
function back (){
    res(currentPages-1)
  if(!nextState) setNextState(true)
  dispatch(setCurrentPage(currentPages-1))
  if(currentPages-1 === 1) setBackState(false)

}

async function res(page){
    try{
    
 const ansver =  await GetData.getAll(limit, page)
//  console.log(ansver.data)
 dispatch(addPost(ansver.data))
 dispatch(addPage(ansver.headers['x-total-count']))

} catch (e) {
  alert('Произошла ошибка' + e)
}
  }


    return (<div>
        <button onClick={next} className={s.next + ' ' + s.button}
        disabled={nextState ? false :true}
        >
            Вперед
        </button>

        <div className={s.number}>
            {arrPages.map((page, index) => (
                <span
                className={ page === currentPages ?s.numberColor :''}
                    id={index + 1}
                    key={index + 1}>
                    {page}
                </span>
            ))}
        </div>


        <button onClick={back} className={s.back + ' ' + s.button}
        disabled={backState ? false :true}
        >
            Назад
        </button>
    </div>
    );
};

export default Pages;