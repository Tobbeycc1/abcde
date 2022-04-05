import Dash from "./dash"

import classes from './stepsicon.module.css'
function Stepsicon(props) {
    return(
        <div>
           <img src={props.inputicon} className={classes.stepsicon} />
          
        </div>
    )
}
export default Stepsicon