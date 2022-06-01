import { useState } from "react";
import PropTypes from "prop-types";

import TitleChoosePosition from "components/TitleChoosePosition";
import PositionButton from "components/PositionButton";
import StackSizeInput from "components/StackSizeInput";
import MainButton from "components/MainButton";
import CloseButton from "components/CloseButton";

import tableData from '../../data/tableButtons.json';

import s from './Table.module.scss';



const Table = ({ onClose, type, rotateCloseButton, refa }) => {
    const [whoChoose, setWhoChoose] = useState('hero');

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
                {tableData.map(({ position, top, left }) => (
                    <PositionButton
                        key={position}
                        position={position}
                        top={top}
                        left={left}
                        onClick={clickSelectPosition}
                    />
                )) }            
            </div>

            <StackSizeInput min={5} max={100} step={5} />

            <MainButton text="Calculate" width={200} height={50} fontSize={16} onClick={isClickCalculate} />
            <CloseButton callback={onClose} rotateButton={rotateCloseButton}/>
        </div>
    )
}

Table.propTypes = {
    onClose: PropTypes.func.isRequired,
    // type: PropTypes.string.isRequired,
    rotateCloseButton: PropTypes.bool.isRequired,
    refa: PropTypes.any,
};

export default Table;