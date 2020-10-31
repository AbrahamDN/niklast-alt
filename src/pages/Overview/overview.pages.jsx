import React from "react"
import {Button} from "@material-ui/core";
const Overview = () => {
    return(
        <div>
            <h2>Tasks Overview</h2>

            <div>
                <h4>First Goal</h4>
                <div>
                    Step 1
                </div>
            </div>

            <div>
                <h4>Second Goal</h4>
                <div>
                    Step 1
                </div>
            </div>

             <div>
                <Button variant="contained" >Add New Task</Button>
                <Button variant="contained" color="primary">Check Today's Steps</Button>
            </div>


        </div>
    )
}

export default Overview
