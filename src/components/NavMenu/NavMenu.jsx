import { NavLink } from "react-router-dom";
// import { useState } from 'react';
import PropTypes from "prop-types";
import { CgClose } from 'react-icons/cg';

import s from './NavMenu.module.scss';

const style = {marginBottom: 30, fontSize: 28, fontFamily: 'Bevan', border: 'none'}

const NavMenu = ({ onClose, rotateCloseButton }) => {
    
    return (
        <nav className={`${s.nav}`}>
            <NavLink to="/"
                style={style}
                onClick={onClose}
            >Home</NavLink>
            <NavLink to="/HowToUse"
                style={style}
                onClick={onClose}
            >How to use</NavLink>
            <NavLink to="/contacts"
                style={{...style, marginBottom: 0}}
                onClick={onClose}
            >Contacts</NavLink>
            <button
                type="button"
                className={`${s.closeButton} ${rotateCloseButton ? 'rotateCloseButton' : ''}`}
                onClick={onClose}
            >
                <CgClose size='50' color='#fff'
                />
            </button>
        </nav>
    )
}

NavMenu.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default NavMenu;