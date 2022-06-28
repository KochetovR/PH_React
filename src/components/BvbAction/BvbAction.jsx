import { useState, useEffect } from 'react'
import PropTypes from "prop-types";

import s from './BvbAction.module.scss';

export default function BvbAction({ action, chooseAction, bvbAction }) {
    const [active, setActive] = useState(false);

    const actionClass = action.replace(' ', '_')

    useEffect(() => {
        if (bvbAction === actionClass) {
            setActive(true)
            return
        }
        setActive(false)
    },[bvbAction, actionClass])

    

    const handleClickOnAction = () => {
        setActive(!active)
        chooseAction(actionClass)
    }

    
    return (
        <button
            type="button"
            onClick={handleClickOnAction}
            className={`${s.actionButton} ${s[actionClass]} ${active ? s.active : ''}`}
        >{action}</button>
    )
};

BvbAction.propTypes = {
    chooseAction: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
    bvbAction: PropTypes.string
};