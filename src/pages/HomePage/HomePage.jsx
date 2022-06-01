import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import SituationItem from 'components/SituationItem';
import PopupInfo from 'components/PopupInfo';
import Title from 'components/Title';
import Table from 'components/Table';

import situationsItemData from 'data/situationsItemData.json'

import s from './HomePage.module.scss'

const HomePage = () => {
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [descriptionInfo, setdescriptionInfo] = useState('');
    const [openTable, setOpenTable] = useState(false);
    const [rotateCloseButton, setRotateCloseButton] = useState(false);

    const nodeRef = useRef(null)

    const isClickInfoModal = index => {
        setIsInfoModalOpen(true)
        setdescriptionInfo(situationsItemData[index].description)
    }
    const isCloseInfoModal = () => {
        setIsInfoModalOpen(false)
        setdescriptionInfo(null)
    }
    const isClickOnTable = type => {
        console.log(type);
        setOpenTable(true);
        setRotateCloseButton(false)
    }
    const isCloseTable = () => {
        setOpenTable(false);
        setRotateCloseButton(true);
    }
    return (
        <div className={s.container}>
            <Title title='Choose a situation'/>
            
            <div
                className={s.itemsWrapper}>
                {situationsItemData.map( ({title, type}, index) => (
                    <SituationItem
                        key={title}
                        title={title}
                        type={type}
                        isClickOnTable={isClickOnTable}
                        isClickInfoModal={isClickInfoModal}
                        index={index}
                    />
                    )
                )}
            </div>

            <CSSTransition
                nodeRef={nodeRef}
                in={openTable}
                timeout={500}
                classNames={{
                    enterActive: `${s.visible}`,
                    enterDone: `${s.visible}`,
                    exitActive: `${s.hidden}`,
                }}
                mountOnEnter
                unmountOnExit
            >
                <Table refa={nodeRef} onClose={isCloseTable} rotateCloseButton={rotateCloseButton} />
            </CSSTransition>

            {isInfoModalOpen && (
                <PopupInfo onClose={isCloseInfoModal} description={descriptionInfo }/>
            )}
        </div>
    )
}

export default HomePage;