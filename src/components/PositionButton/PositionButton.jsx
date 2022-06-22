import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import s from './PositionButton.module.scss';

import situationsItemData from 'data/situationsItemData.json';

const initialWhoClickInMeState = (active, type) => active === type ? 'hero' : null;
const initialActiveState = (active, type) => active === type ? true : false;

export default function PositionButton({position, top, left, type, autoActive, disabled, clickSelectPosition, situationIndex, selectIndex, heroPosition}) {
  const [whoClickInMe, setWhoClickInMe] = useState(() => initialWhoClickInMeState(autoActive,type));
  const [active, setActive] = useState(() => initialActiveState(autoActive,type));

  useEffect(() => {
    if (whoClickInMe && heroPosition && position !== heroPosition) {
      setWhoClickInMe(null)
      setActive(!active)
      console.log(position);
      console.log(heroPosition);
    }
  }, [heroPosition, active, position, whoClickInMe])

  const isHandleClickInME = () => {
    setActive(!active)

    if (whoClickInMe) {
      setWhoClickInMe(null)
      clickSelectPosition(null)
      return
    }
    clickSelectPosition(position)
    setWhoClickInMe(situationsItemData[situationIndex].players[selectIndex])
  }

  
  return (
    <button
      type="button"
      onClick={isHandleClickInME}
      className={`${s.positionButton} ${whoClickInMe ? `${whoClickInMe}` : ''} ${active ? 'activeButton' : ''}`}
      style={{top: top, left: left}}
    >{position.toUpperCase()}</button>
  )
}

PositionButton.propTypes = {
  clickSelectPosition: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  type: PropTypes.string,
  autoActive: PropTypes.string,
  disabled: PropTypes.array.isRequired
};

