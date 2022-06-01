import PropTypes from "prop-types";
import { useState } from "react";
import s from './StackSizeInput.module.scss';

export default function StackSizeInput({ min, max, step }) {
    const [stackSize, setStackSize] = useState(min);

    const isDragSlider = e => {
        setStackSize(e.currentTarget.value)
    }
    return (
        <>
            <p className={s.title}>Choose youre stack</p>
            <input
                onChange={isDragSlider}
                type="range"
                min={min}
                max={max}
                value={stackSize}
                step={step}
                className={s.range}
            />
            <p className={s.stackSize}>{stackSize}</p>
        </>
    )
}

StackSizeInput.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
};