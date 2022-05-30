import { useState } from "react";
import PropTypes from "prop-types";
import { CgClose } from 'react-icons/cg';

import TitleChoosePosition from "components/TitleChoosePosition";
import PositionButton from "components/PositionButton";
import MainButton from "components/MainButton";

import s from './Table.module.scss';


const Table = ({ onClose, type, rotateCloseButton, refa }) => {
    const [whoChoose, setWhoChoose] = useState('hero');
    console.log(refa);

    const clickSelectPosition = () => {
        whoChoose === 'hero' ?
            setWhoChoose('better') : setWhoChoose('caller')  
    }

    const isClickCalculate = () => {
        console.log('please calculate');
    }
    return (
        <div ref={refa} className={s.tableWrapper}>
            <TitleChoosePosition whoChoose={whoChoose} />

            <div className={s.table}>
                <div className={s.borderTable}></div>
                <PositionButton position='BU' top={360} left={110} onClick={clickSelectPosition} />
                <PositionButton position='SB' top={290} left={23} onClick={clickSelectPosition} />
                <PositionButton position='BB' top={210} left={20} onClick={clickSelectPosition} />
                <PositionButton position='EP' top={130} left={20} />
                <PositionButton position='EP1' top={50} left={43} />
                <PositionButton position='MP1' top={50} left={177} />
                <PositionButton position='MP2' top={130} left={200} />
                <PositionButton position='MP3' top={210} left={200} />
                <PositionButton position='CO' top={290} left={198} />
                
            </div>

            <p className={s.title}>Choose youre stack</p>
            <input className={s.range} type="range" />
            <p className={s.stackSize}>5BB</p>

            <MainButton text="Calculate" width={200} height={50} fontSize={16} onClick={isClickCalculate} />

            <button
                type='button'
                onClick={onClose}
                className={`${s.closeButton} ${rotateCloseButton ? `${s.rotateCloseButton}` : ''}`}
            >
                <CgClose size='50' color='#fff'/>
            </button>
        </div>
    )
}

Table.propTypes = {
    onClose: PropTypes.func.isRequired,
    // type: PropTypes.string.isRequired,
    rotateCloseButton: PropTypes.bool.isRequired,
    // refa
};

export default Table;