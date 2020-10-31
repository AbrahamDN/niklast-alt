import { Step } from "@material-ui/core"
import React, { useState } from "react"
import {Input, Button} from "@material-ui/core";
import green from '@material-ui/core/colors/purple';
const Steps = ({currentGoal}) => {
    const [stepNumber, setStepNumber] = useState(1);
    const [currentStep, setCurrentStep] = useState("");
    const [steps, setSteps] = useState([]);

    const stepValue = (e) => {
         const value = e.target.value
         setCurrentStep(() => {
             return value
         })
    }

    const addSteps = () => {
        setSteps((prev) =>  [...prev,currentStep])
    }
    
    return(
        <div>
            <p>What steps will you take to achieve this goal?</p>
            <h4>{currentGoal}</h4>
            <div>
            <Input placeholder={`Step ${stepNumber}`} onChange={stepValue}/>
            <Button variant="contained" color="primary" type="submit" onClick={addSteps}>Add</Button>
            </div>

            <div>
                {steps.map(step => {
                    return(
                    <li>Step: {step}</li>
                    )
                })}
            </div>

            <div>
                <Button color="secondary">Back</Button>
                <Button>Next</Button>
            </div>

        </div>
    )
}

export default Steps
