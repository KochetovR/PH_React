import PropTypes from "prop-types";
import { CgClose } from 'react-icons/cg';
import s from './CloseButton.module.scss';

export default function CloseButton({callback, rotateButton}) {
    return (
        <button
        type="button"
        className={`${s.closeButton} ${rotateButton ? `${s.rotateButton}` : ''}`}
        onClick={callback}
        >
            <CgClose size='50' color='#fff'/>
        </button>
    )
}

CloseButton.propTypes = {
    callback: PropTypes.func.isRequired,
    rotateButton: PropTypes.bool
};