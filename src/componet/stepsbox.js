import classes from './stepsbox.module.css'
import Dash from '../componet/dash'

import Loremsubtext from './loremsubtext'
import Stepsicon from "./stepsicon"
function Stepsbox(props) {
    return(
        <div className={classes.stepsbox}>
<Stepsicon inputicon={props.inputicon}/>
<Dash title={props.title}/>
<Loremsubtext stext={props.stext}/>

        </div>
    )
}
export default Stepsbox