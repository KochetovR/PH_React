import { useState } from 'react';
import { MenuItem } from 'components/MenuItem/MenuItem';
import { PopupInfo } from 'components/PopupInfo/PopupInfo';

import data from 'data/data.json'

import s from './HomePage.module.css'

export const HomePage = () => {
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [descriptionInfo, setdescriptionInfo] = useState('');

    const isClickInfoModal = index => {
        setIsInfoModalOpen(true)
        setdescriptionInfo(data[index].description)
    }
    const isCloseInfoModal = () => {
        setIsInfoModalOpen(false)
        setdescriptionInfo(null)
    }
    return (
        <div className={s.container}>
            <p className={s.title}>Choose a situation</p>
            <div className={s.itemsWrapper}>
                {data.map( ({title}, index) => (
                    <MenuItem key={title} title={title} onClick={isClickInfoModal} index={index} />
                    )
                )}
            </div>
            {isInfoModalOpen && (
                <PopupInfo onClose={isCloseInfoModal} description={descriptionInfo }/>
                )}
        </div>
    )
}