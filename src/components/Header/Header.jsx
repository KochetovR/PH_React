import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import NavMenu from '../NavMenu/'

import s from './Header.module.scss';

import logo from 'assets/img/logo.png';
import logo2x from 'assets/img/logo@2x.png';
import title from 'assets/img/title.png';
import title2x from 'assets/img/title@2x.png';

function Header() {
    const [navMenuisOpened, setNavMenuisOpened] = useState(false);
    const [rotateCloseButton, setRotateCloseButton] = useState(false);

    const isOpenNavMenu = () => {
        setNavMenuisOpened(true)
        setRotateCloseButton(false)
    }
    const isCloseNavMenu = () => {
        setNavMenuisOpened(false);
        setRotateCloseButton(true);
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
            <CSSTransition
                in={navMenuisOpened}
                timeout={500}
                classNames={{
                    enterActive: 'visible',
                    enterDone: 'visible',
                    exitActive: 'hidden',
                }}
                mountOnEnter
                unmountOnExit
            >
                <NavMenu onClose={isCloseNavMenu} rotateCloseButton={rotateCloseButton} />
            </CSSTransition>
        </header>
    )
}

export default Header;