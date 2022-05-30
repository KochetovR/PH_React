import PropTypes from "prop-types";

import s from './TitleChoosePosition.module.scss';

export default function TitleChoosePosition({ whoChoose }) {
    return (
        <>
            {whoChoose === 'hero' && (<p className={s.title}>Choose youre position</p>)}

            {whoChoose === 'better' && (<p className={s.title}>Choose better position</p>)}

            {whoChoose === 'caller' && (<p className={s.title}>Choose caller position</p>)}
        </>
    )
}

TitleChoosePosition.propTypes = {
    whoChoose: PropTypes.string,
};