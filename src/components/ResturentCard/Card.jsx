import React from 'react';
import style from './Card.module.css';
const Card = ({ data }) => {
    const { name, category, cost, time, ratings, votes, reviews, payment } = data;
    return (
        <div className={style.card}>
            <div className={style.up}>
                <div className={style.left}>
                    <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg" alt="pic" />
                </div>
                <div className={style.right}>
                    <div>
                        <h2>{name}</h2>
                        <p>{category}, Pizza, Asian, Desserts</p>
                        <p>it costs {cost}</p>
                        <p>upto {time} mis</p>
                        <p>Accepts {payment} payments only</p>
                    </div>
                    <div>
                        <h3>{ratings}</h3>
                        <h5>{votes} votes</h5>
                        <h5>{reviews} review</h5>
                    </div>
                </div>
            </div>
            <div className={style.down}>
                <button>{"order online >"}</button>
            </div>
        </div>
    );
}

export default Card;
