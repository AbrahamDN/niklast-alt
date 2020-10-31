import React, { useState } from "react"
import {Button} from "@material-ui/core";

const Profile = () => {
    const [goalCount, setGoalCount] = useState(0);
    // const [stepsCount, setStepsCount] = useState(0);
    const [maxGoalsCount, setMaxGoalsCount] = useState(0);
    return(
        <div>
            <div>
                <h4>abc@gmail.com/zay altick</h4>
            </div>

            <div>
                <p>Goals completed: {goalCount} </p>
                <div>
                    <p>Max Goals {maxGoalsCount < 0 ? setMaxGoalsCount(0) : maxGoalsCount }</p>
                     <Button onClick={() => setMaxGoalsCount(maxGoalsCount-1)}>-</Button>
                     <Button onClick={() => setMaxGoalsCount(maxGoalsCount+1)}>+</Button>  

                </div>
                
            </div>

        </div>
    )
}

export default Profile
