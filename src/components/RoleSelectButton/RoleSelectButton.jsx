import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import s from './RoleSelectButton.module.scss';

const initialActiveState = role => role === 'hero' ? true : false;

export default function RoleSelectButton({ onClick, role, activeRole }) {
    const [active, setActive] = useState(initialActiveState);

    useEffect(() => {
        if (role === activeRole) {
            setActive(true)
            return
        }
        setActive(false)
    },[activeRole, role])

    const handleClick = () => {
        onClick(role)
    }
    
    return (
        <button
            type="button"
            onClick={handleClick}
            className={`${s.button} ${s[role]} ${active ? s.active : ''}`}
        >
            {role}
        </button>
    )
}

RoleSelectButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    role: PropTypes.string.isRequired,
    activeRole: PropTypes.string.isRequired
}