import { createPortal } from 'react-dom';
import PropTypes from "prop-types";
import MainButton from 'components/MainButton';

import s from './PopupInfo.module.scss';

const modalRoot = document.querySelector('#root-modal');

const PopupInfo = ({ onClose, description }) => {
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
          onClose();
        }
    };
    return createPortal(
        <div className={s.popupBackdrop} onClick={handleBackdropClick}>
            <div className={s.popupContent}>
                <p className={s.description}>{description}</p>
                <MainButton onClick={onClose} text='Good' />
            </div>
        </div>,
        modalRoot,
    )
}

PopupInfo.propTypes = {
    onClose: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
};

export default PopupInfo;