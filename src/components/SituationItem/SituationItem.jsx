import PropTypes from 'prop-types';

import s from './SituationItem.module.scss'

function SituationItem({ title, isClickOnTable, isClickInfoModal, index }) {
    return (
        <div className={s.buttonWrapper}>
            <button
                type='button'
                className={s.accentWrapper}
                onClick={() => isClickOnTable(index)}
            >
                <span className={s.title}>{title}</span>
            </button>
            <button
                type='button'
                className={s.questionButton}
                onClick={() => isClickInfoModal(index)}
            >
                <span className={s.question}>?</span>
            </button>
        </div>
    )
}

SituationItem.propTypes = {
    title: PropTypes.string.isRequired,
    isClickOnTable: PropTypes.func.isRequired,
    isClickInfoModal: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
}

export default SituationItem;