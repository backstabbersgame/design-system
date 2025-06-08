import React from 'react';
export interface StepperProps {
    /** Steps */
    steps: string[];
    /** Min steps */
    minSteps?: number;
    /** Max steps */
    maxSteps?: number;
    /** Inital step */
    currentStep: number;
    /** Custom class name */
    className?: string;
    /** Step change */
    onStepChange?: (step: number) => void;
    isStepClickable?: (step: number) => boolean;
}
declare const Stepper: ({ steps, minSteps, maxSteps, currentStep, className, onStepChange, isStepClickable, }: StepperProps) => React.JSX.Element | null;
export default Stepper;
