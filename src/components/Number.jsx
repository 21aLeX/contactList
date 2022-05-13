import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import s from './StyleComponents.module.css'

const Number = () => {
    const countPage = useSelector(state=>state.page.page)
   const arrPages = useMemo(()=>
        {const arrPages = []
            for(let i =1; i<=countPage; i++){
            arrPages.push(i)
        }
    return arrPages
    }
    ,
        [countPage] )
    return (
        <div className={s.number}>
            {arrPages.map((page, index) => (
        <span
        id={index + 1}
          key={index + 1}> 
          {page}       
        </span>
      ))}
        </div>
    );
};

export default Number;