import { useState } from 'react';
import SituationItem from 'components/SituationItem';
import PopupInfo from 'components/PopupInfo';
import Title from 'components/Title';

import data from 'data/data.json'

import s from './HomePage.module.scss'

const HomePage = () => {
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
            <Title title='Choose a situation'/>
            
            <div className={s.itemsWrapper}>
                {data.map( ({title}, index) => (
                    <SituationItem key={title} title={title} onClick={isClickInfoModal} index={index} />
                    )
                )}
            </div>
            {isInfoModalOpen && (
                <PopupInfo onClose={isCloseInfoModal} description={descriptionInfo }/>
                )}
        </div>
    )
}

export default HomePage;