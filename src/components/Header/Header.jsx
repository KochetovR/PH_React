import { NavLink } from "react-router-dom";

import s from './Header.module.css';

import logo from 'assets/img/logo.png';
import logo2x from 'assets/img/logo@2x.png';
import title from 'assets/img/title.png';
import title2x from 'assets/img/title@2x.png';
import about from 'assets/img/about.png';
import about2x from 'assets/img/about@2x.png';


export function Header() {
    return (
        <header className={s.headerContainer}>
            <div className={s.logoBlock}>
                <img src={logo} alt="logo"
                    className={s.logo}
                    srcSet={logo2x}
                />
                <img src={title} alt="poker helper"
                    className={s.title}
                    srcSet={title2x}
                />
            </div>
                {/* <NavLink to="/">Home</NavLink> */}
            <NavLink to="/about"
                style={{ width: 38, height: 38 }}
            >
                <img src={about} alt="about"
                    className={s.about}
                    srcSet={about2x}
                />
            </NavLink>
        </header>
    )
}