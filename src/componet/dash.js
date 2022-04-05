
import classes from './dash.module.css'
function Dash(props) {
    
    return(
        <div>
            <div className={classes.yellowdash}></div>
            <h3 className={classes.subhtitle}>{props.title}</h3>
        </div>
        
    )
    
}
export default Dash