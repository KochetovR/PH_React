import PropTypes from 'prop-types';

import s from './MenuItem.module.css'

export function MenuItem({ title, onClick, index }) {
    return (
        <button
            type='button'
            className={s.buttonWrapper}
        >
            <div className={s.accentWrapper}>
                <span className={s.title}>{title}</span>
                <div
                    className={s.questionButton}
                    onClick={() => onClick(index)}
                >
                    <span className={s.question}>?</span>
                </div>
            </div>
        </button>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
}