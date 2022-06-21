import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import TitleChoosePosition from "components/TitleChoosePosition";
import PositionButton from "components/PositionButton";
import StackSizeInput from "components/StackSizeInput";
import MainButton from "components/MainButton";
import CloseButton from "components/CloseButton";
import ResultPopup from "components/ResultPopup";

import tableData from 'data/tableButtons.json';
import situationsItemData from 'data/situationsItemData.json';

import s from './Table.module.scss';

const initialStackSize = index => situationsItemData[index].stack[0];
const initialHeroPosition = index => {
    return index === 3 ? 'bb' : null
};

const Table = ({ onClose, situationIndex, rotateCloseButton, refa }) => {
    const [srcImg, setSrcImg] = useState(null);
    const [whoChoose, setWhoChoose] = useState('hero');
    // const [whoCliked, setWhoCliked] = useState(null);
    const [selectIndex, setSelectIndex] = useState(0);
    const [heroPosition, setHeroPosition] = useState(() => initialHeroPosition(situationIndex))
    const [betterPosition, setBetterPosition] = useState(null);
    const [callerPosition, setCallerPosition] = useState(null);
    const [stackSize, setStackSize] = useState(() => initialStackSize(situationIndex));
    const [isResultModalOpen, setIsResultModalOpen] = useState(false);
    const [rotateCloseResultPopupButton, setRotateCloseResultPopupButton] = useState(false);
    const typeSituation = situationsItemData[situationIndex].type;

     useEffect(() => {
        if (!heroPosition || heroPosition === 'bb') {
            return setSrcImg(`${typeSituation}/${stackSize}/${betterPosition}`);
        }
        setSrcImg(`${typeSituation}_${stackSize}_${heroPosition}`);
    }, [typeSituation, stackSize, srcImg, heroPosition, betterPosition])

    const playersLength = situationsItemData[situationIndex].players.length - 1;

    // const players = situationsItemData[situationIndex].type

    const clickSelectPosition = position => {
        
        if (!position) {
            setHeroPosition(position)
            setSelectIndex(0)
            return
        }
        setHeroPosition(position)
        setSelectIndex(prevselectIndex => prevselectIndex === playersLength ? prevselectIndex : prevselectIndex + 1 )
        // setWhoCliked(situationsItemData[situationIndex].players[selectIndex])
        // whoChoose(situationsItemData[situationIndex].players[selectIndex])
        // setSelectIndex(prevselectIndex => prevselectIndex + 1)
        
        // switch (typeSituation) {
        //     case 'bb':
        //         setWhoChoose('better')
        //         break;
        //     case 'sqz':
        //         whoChoose === 'hero' ?
        //             setWhoChoose('better') : setWhoChoose('caller')
        //         break;
        //     case 'vs3bet':
        //         setWhoChoose('better');
        //         break;
        //     case 'vsOpen':
        //         setWhoChoose('better');
        //         break;
        //     default: return;
        // }
    }

    const isClickCalculate = () => {
        setIsResultModalOpen(true)
    }

    const changeStackSize = e => {
        setStackSize(e)
    }
    
    const isCloseResultModal = () => {
        setRotateCloseResultPopupButton(true)
        setIsResultModalOpen(false)
        setSrcImg(null)
    }
    
    const stack = situationsItemData[situationIndex].stack;

    return (
        <div ref={refa} className={s.tableWrapper}>
            <CloseButton callback={onClose} rotateButton={rotateCloseButton} />

            <TitleChoosePosition whoChoose={whoChoose} typeSituation={typeSituation} />

            <div className={s.table}>
                <div className={s.borderTable}></div>
                {tableData.map(({ position, top, left, disabled, autoActive }) => (
                    <PositionButton
                        key={position}
                        position={position}
                        top={top}
                        left={left}
                        disabled={disabled}
                        autoActive={autoActive}
                        type={typeSituation}
                        clickSelectPosition={clickSelectPosition}
                        selectIndex={selectIndex}
                        situationIndex={situationIndex}
                        heroPosition={heroPosition}
                    />
                )) }            
            </div>

            <StackSizeInput stack={stack} changeStack={changeStackSize} />

            <MainButton text="Calculate" width={200} height={50} fontSize={16} onClick={isClickCalculate} />
            
            {isResultModalOpen && (
                <ResultPopup onClose={isCloseResultModal} srcImg={srcImg} rotateCloseResultPopupButton={rotateCloseResultPopupButton} />
            )}
        </div>
    )
}

Table.propTypes = {
    onClose: PropTypes.func.isRequired,
    situationIndex: PropTypes.number.isRequired,
    rotateCloseButton: PropTypes.bool.isRequired,
    refa: PropTypes.any,
};

export default Table;