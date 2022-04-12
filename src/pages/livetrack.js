import smallcar from '../images/vector small vehicle in live tra.png'
import wavy from '../images/wavy.png'
import classes from './livetrack.module.css'
import Underlinedform from "../componet/underlinedform"

function Livetrack(props) {
    return(
        <div className={classes.livetrackcon}>
            <div className={classes.livetracksubcon}>
            <h3 className={classes.trackingtitle}>Input <br/> TM Tracking Code</h3>
            <p className={classes.trackingsubtitle}>See where your Tex-z manager has gotten to</p>
            <div className={classes.underlineCon}><Underlinedform type={'text'} bigplaceholder={'Input unique TM tracking codev'} button={'TRACK'}/></div>
            
            </div>
            <div className={classes.wavycon}>
               <img src={wavy} alt={wavy} className={classes.wavy} /> 
            </div>
            <img src={smallcar} alt={smallcar} className={classes.smallcar} /> 
            

        </div>
    )
}
export default Livetrack