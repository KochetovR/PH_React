import PropTypes from "prop-types";

import s from './PositionButton.module.scss';

export default function PositionButton({position, top, left, onClick}, type) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${s.positionButton} ${s.position}`}
      style={{top: top, left: left}}
    >{position}</button>
  )
}

PositionButton.propTypes = {
  // onClick: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  type: PropTypes.string,
};

