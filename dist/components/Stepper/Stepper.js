import React from 'react';
import styles from './Stepper.module.scss';
const Stepper = ({ steps, minSteps = 2, maxSteps = 4, currentStep, className, onStepChange, isStepClickable = (step) => true, }) => {
    const validSteps = steps.slice(0, maxSteps);
    if (validSteps.length < minSteps) {
        console.error(`O número mínimo de etapas permitidas é ${minSteps}`);
        return null;
    }
    return (React.createElement("div", { className: `${styles.stepper} ${className || ''}` }, validSteps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;
        const isClickable = isStepClickable(stepNumber);
        return (React.createElement("div", { key: index, className: styles.stepContainer, onClick: () => isClickable && (onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(stepNumber)), style: {
                cursor: isClickable ? 'pointer' : 'not-allowed',
            } },
            React.createElement("div", { className: `${styles.stepCircle} ${isActive ? styles.selected : ''} ${isCompleted ? styles.completed : ''} ` }, stepNumber),
            React.createElement("span", { className: `${styles.stepLabel} ${isActive ? styles.selected : ''}` }, step),
            index < validSteps.length - 1 && (React.createElement("div", { className: `${styles.stepLine} ${isCompleted ? styles.completed : ''}` }))));
    })));
};
export default Stepper;
