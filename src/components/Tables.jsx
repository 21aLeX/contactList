import React from 'react';
import s from './StyleComponents.module.css'
import TableHeader from './TableHeader';
import TableRowHeader from './TableRowHeader';
import TableRows from './TableRows';

const Tables = () => {
    return (
        <table>
            <TableHeader/>        
            <TableRowHeader/>
            {/* <TableRows/> */}
            
            </table>       
    );
};

export default Tables;