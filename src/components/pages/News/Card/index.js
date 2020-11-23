import React from 'react';
import classes from './classes.module.css';
import eye from './eye.svg';

export default function CardDefault({imgUrl, text, viewsCount, date}) {
    return <div className={classes.card}>
        <div className={classes.cardImage}>
            <img src={imgUrl} alt='news image'/>
        </div>
        <div className={classes.cardContent}>
            <p>{text}</p>
        </div>
        <div className={classes.cardAction}>
            <span>{date}</span>
            <span>
                <span>{viewsCount}</span>
                <img src={eye}/>
            </span>
        </div>
    </div>
}