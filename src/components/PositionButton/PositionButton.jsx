import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import s from './PositionButton.module.scss';

const initialWhoClickInMeState = (active, type) => active === type ? 'hero' : null;
const initialActiveState = (active, type) => active === type ? true : false;

export default function PositionButton({position, top, left, type, autoActive, activeRole, disabled, clickSelectPosition, heroPosition, betterPosition, callerPosition}) {
  const [whoClickInMe, setWhoClickInMe] = useState(() => initialWhoClickInMeState(autoActive,type));
  const [active, setActive] = useState(() => initialActiveState(autoActive, type));
  
  useEffect(() => {
    switch (activeRole) {
      case 'hero':
        if (whoClickInMe && heroPosition && position !== heroPosition && whoClickInMe === activeRole) {
          setWhoClickInMe(null)
          setActive(false)
        }
        break
      case 'better':
        if (whoClickInMe && betterPosition && position !== betterPosition && whoClickInMe === activeRole) {
          setWhoClickInMe(null)
          setActive(false)
        }
        break
      case 'caller':
        if (whoClickInMe && callerPosition && position !== callerPosition && whoClickInMe === activeRole) {
          setWhoClickInMe(null)
          setActive(false)
        }
        break
      default: return;
    }
  }, [whoClickInMe, heroPosition, position, activeRole, betterPosition, callerPosition])

  const isHandleClickInME = () => {
    if (whoClickInMe && whoClickInMe !== activeRole) {
      return
    }
    setActive(!active)

    if (whoClickInMe) {
      setWhoClickInMe(null)
      clickSelectPosition(null)
      return
    }
    clickSelectPosition(position)
    setWhoClickInMe(activeRole)
  }

  const disabledButton = disabled.includes(type)
  
  return (
    <button
      type="button"
      onClick={isHandleClickInME}
      disabled={disabledButton}
      className={`${s.positionButton} ${whoClickInMe ? `${s[whoClickInMe]}` : ''} ${active ? s.active : ''} ${ disabledButton ? `${s.disabled}` : ''} `}
      style={{top: top, left: left}}
    >{position.toUpperCase()}</button>
  )
}

PositionButton.propTypes = {
  position: PropTypes.string.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  autoActive: PropTypes.string,
  activeRole: PropTypes.string.isRequired,
  disabled: PropTypes.array.isRequired,
  clickSelectPosition: PropTypes.func.isRequired,
  heroPosition: PropTypes.string,
  betterPosition: PropTypes.string,
  callerPosition: PropTypes.string
};

