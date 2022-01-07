import React, { useState } from 'react';
import Card from './Card';
import style from './Resturent.module.css';
import Data from '../../data.json';
import { v4 as uuidv4 } from 'uuid';

const Resturent = () => {
    const [data, setData] = useState(Data);
    const [star4, setStar4] = useState(false);
    const handleClick = () => {
        setStar4(true)
    }
    const ret = <>
        <div className={style.nav}>
            <button onClick={handleClick}>4 rating</button>
            <button>3 rating</button>
            <button>2 rating</button>
            <button>1 rating</button>
        </div>
        <div className={style.flex}>
            {
                data.filter(item => { return Number(item.ratings) >= 4 }).map(item => <Card key={uuidv4()} data={item} />)
            }
        </div>
    </>

    if (star4) {
        return (
            ret
        );
    }
    else {
        return (
            <>
                <div className={style.nav}>
                    <button onClick={handleClick}>4 rating</button>
                    <button>3 rating</button>
                    <button>2 rating</button>
                    <button>1 rating</button>
                </div>
                <div className={style.flex}>
                    {
                        data.map(item => <Card key={uuidv4()} data={item} />)
                    }
                </div>
            </>
        );
    }
}

export default Resturent;
