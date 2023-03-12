// import { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";
import CloseButton from "components/CloseButton";

import s from './ResultPopup.module.scss';

import IMAGES from '../../data/imageResult'

const modalRoot = document.querySelector('#root-modal');

export default function ResultPopup({ onClose, srcImg }) {
    
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
          onClose();
        }
    };

    return createPortal(
        <div className={s.popupBackdrop} onClick={handleBackdropClick}>
            <CloseButton callback={onClose} />
            <img src={IMAGES[srcImg]} alt="result" className={s.lightbox__image} />
        </div>,
        modalRoot,
    )
}

ResultPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
    srcImg: PropTypes.string.isRequired,
};