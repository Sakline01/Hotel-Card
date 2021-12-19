import React from 'react';
import Card from './Card';
import style from './Resturent.module.css';

const Resturent = () => {
    return (
        <div className={style.flex}>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}

export default Resturent;
