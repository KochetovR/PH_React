import PropTypes from "prop-types";

import s from './TitleChoosePosition.module.scss';

export default function TitleChoosePosition({ activeRole }) {
    return (
        <>
            {activeRole === 'hero' && (<p className={s.title}>Choose youre position</p>)}

            {activeRole === 'better' && (<p className={s.title}>Choose better position</p>)}

            {activeRole === 'caller' && (<p className={s.title}>Choose caller position</p>)}
        </>
    )
}

TitleChoosePosition.propTypes = {
    activeRole: PropTypes.string,
};