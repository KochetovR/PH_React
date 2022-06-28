import PropTypes from "prop-types";
import s from './MainButton.module.scss';

export default function MainButton({ text, onClick, width, height, fontSize, disabled }) {

    return (
        <button
            disabled={disabled}
            type='button'
            onClick={onClick}
            className={`${s.button} ${disabled ? `${s.disabled}` : ''}`}
            style={{width: width, height: height, fontSize: fontSize}}
        >{text}</button>
    )
}

MainButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    fontSize: PropTypes.number,
    disabled: PropTypes.bool

};