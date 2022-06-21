import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import s from './StackSizeInput.module.scss';

export default function StackSizeInput({ stack, changeStack }) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    
    const isDragSlider = e => {
        setCurrentStepIndex(e.currentTarget.value)
    }

    useEffect(() => {
        changeStack(stack[currentStepIndex])
    },[currentStepIndex, stack, changeStack])

    const maxStack = stack.length - 1
    
    return (
        <>
            <p className={s.title}>Choose youre stack</p>
            <input
                onChange={isDragSlider}
                type="range"
                min={0}
                max={maxStack}
                step={1}
                value={currentStepIndex}
                className={s.range}
            />
            <p className={s.stackSize}>{stack[currentStepIndex]} bb</p>
        </>
    )
}

StackSizeInput.propTypes = {
    stack: PropTypes.array.isRequired,
    changeStack: PropTypes.func.isRequired
};