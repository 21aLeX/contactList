import React from 'react';
import s from './StyleComponents.module.css'
import TableHeader from './TableHeader';
import TableRows from './TableRows';

const Tables = () => {
    return (
        <table>
            <TableHeader />
            <TableRows />
        </table>
    );
};

export default Tables;