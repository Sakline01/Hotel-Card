import React from 'react';
import style from './Card.module.css';
const Card = () => {
    return (
        <div className={style.card}>
            <div className={style.up}>
                <div className={style.left}>
                    <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg" alt="pic" />
                </div>
                <div className={style.right}>
                    <div>
                        <h2>Grilled Chicken</h2>
                        <p>Continental, Pizza, Asian, Desserts</p>
                        <p>it costs 400</p>
                        <p>upto 30mis</p>
                        <p>Accepts online payments only</p>
                    </div>
                    <div>
                        <h3>4.3</h3>
                        <h5>766 votes</h5>
                        <h5>544 review</h5>
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
