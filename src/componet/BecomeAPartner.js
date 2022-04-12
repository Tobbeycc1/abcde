import classes from './BecomeAPartner.module.css'
import Underlinedform from './underlinedform'
import 'animate.css';


function BecomeAPartner(props) {
    return(
        <div className={classes.modalCon} >
            <div className={classes.modal}  onClick={props.onClick}>
                
            </div>
      
            <div className={classes.test}  >
               <div className={classes.livetracksubcon}>
            <h3 className={classes.trackingtitle}>Phone Number</h3>
            <Underlinedform type={'number'} bigplaceholder={'Input your phone number'} button={'NEXT'}/>
           
            
            </div> 
            
            </div>
            
            

        </div>
    )
}
export default BecomeAPartner