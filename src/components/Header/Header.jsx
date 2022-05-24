import { useState } from 'react';

import NavMenu from '../NavMenu/'

import s from './Header.module.scss';

import logo from 'assets/img/logo.png';
import logo2x from 'assets/img/logo@2x.png';
import title from 'assets/img/title.png';
import title2x from 'assets/img/title@2x.png';

function Header() {
    const [navMenuisOpened, setNavMenuisOpened] = useState(false)

    const isOpenNavMenu = () => {
        setNavMenuisOpened(true)
    }
    const isCloseNavMenu = () => {
        setNavMenuisOpened(false)
    }
    return (
        <header className={s.headerContainer}>
            <button
                type="button"
                className={s.buttonLogo}
                onClick={isOpenNavMenu}
            >
                <img src={logo} alt="logo"
                    srcSet={logo2x}
                />
            </button>
            <img src={title} alt="poker helper"
                className={s.title}
                srcSet={title2x}
            />
            {navMenuisOpened && <NavMenu onClose={isCloseNavMenu} />}
        </header>
    )
}

export default Header;