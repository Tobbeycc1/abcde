import classes from './BecomeAPartner.module.css'
import Underlinedform from './underlinedform'

function BecomeAPartner(props) {
    return(
        <div className={classes.modalCon}>
            <div className={classes.modal}>
                <Underlinedform/>
            </div>
        </div>
    )
}
export default BecomeAPartner