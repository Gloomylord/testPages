import React from 'react';
import classes from './classes.module.css';
import logo from './logo.svg';
import logoTitle from './logoTitle.svg';
import Search from "./Search";

export default function Header() {

    return <header className={classes.header}>
        <div className={classes.container}>
            <div className={classes.logoContainer}>
                <span className={classes.logo}>
                    <img src={logo} alt='logo'/>
                    <img src={logoTitle} alt='logoTitle'/>
                </span>
            </div>
            <nav className={classes.nav}>
                <ul className={classes.list}>
                    <li>
                        <a href='#' className={classes.link}>Аукцион</a>
                    </li>
                    <li>
                        <a href='#' className={classes.link}>Срочный выкуп</a>
                    </li>
                    <li>
                        <a href='#' className={classes.link}>Оценка</a>
                    </li>
                    <li>
                        <a href='#' className={classes.link}>Юридическая проверка</a>
                    </li>
                </ul>
            </nav>
            <Search/>
            <div className={classes.userMenu}>
                <img src='/images/userImg.svg'/>
            </div>
        </div>
    </header>
}