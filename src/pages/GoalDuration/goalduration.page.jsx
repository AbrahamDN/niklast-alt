import React, { useState } from "react"
import {Button} from "@material-ui/core";

const GoalDuration = ({goal}) => {
    const [days, setDays] = useState(1);

    return(
        <div>
            <div>
            <p>How many days will this task take to complete?</p>
            <h1>{goal}</h1>
            <h2>{days < 0 ? setDays(0) : days }</h2>
           <Button onClick={() => setDays(days-1)}>-</Button>
           <Button onClick={() => setDays(days+1)}>+</Button>  
           </div>
           <Button variant="contained" color="primary">NEXT</Button>
        </div>
    )
}

export default GoalDuration
