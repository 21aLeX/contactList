import React from 'react';
import s from './StyleComponents.module.css'
import TableHeader from './TableHeader';
import TableRowHeader from './TableRowHeader';
import TableRows from './TableRows';

const Tables = () => {
    return (
        <div>
            <TableHeader/>        
            <TableRowHeader/>
            <TableRows/>
            
            </div>       
    );
};

export default Tables;