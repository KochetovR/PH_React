import { createPortal } from 'react-dom';
import PropTypes from "prop-types";

import s from './PopupInfo.module.css';

const modalRoot = document.querySelector('#root-modal');

export const PopupInfo = ({ onClose, description }) => {
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
          onClose();
        }
    };
    return createPortal(
        <div className={s.popupBackdrop} onClick={handleBackdropClick}>
            <div className={s.popupContent}>
                <p className={s.description}>{description}</p>
                <button
                    type='button'
                    onClick={onClose}
                    className={s.closeButton}
                >Good</button>
            </div>
        </div>,
        modalRoot,
    )
}

PopupInfo.propTypes = {
    onClose: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
  };