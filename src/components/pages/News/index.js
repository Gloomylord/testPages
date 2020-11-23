import React from 'react';
import CardDefault from "./Card";
import classes from './classes.module.css';

export default function News() {
    return <section className={classes.main}>
        <div className={classes.container}>
            <div className={classes.cardContainer}>
                {Array.from({length: 13}).map((_, index) =>
                    <CardDefault
                        key={index}
                        imgUrl='/images/postImg.svg'
                        text={'Количество сделок с недвижимостью в' +
                        ' Москве в июле выросло благодаря снятию ограничений и льготной ипотеке'}/>
                )}
            </div>
        </div>
    </section>
}