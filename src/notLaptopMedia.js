import { Link } from 'react-router-dom'

import classes from './notLaptopMedia.module.css'



function NotLaptop(props) {
    return(
        <div className={classes.navCon}>
        <Link to='/' className={classes.nav} onClick={props.onHomeClick}><span className={classes.icon}><i class="fa fa-home" ></i></span> HOME</Link> 
        <Link to='/live-track' className={classes.nav} onClick={props.onLiveTrackClick}><span className={classes.icon}><i class="fa fa-car" ></i></span>LIVE-TRACK</Link> 
        <span onClick={props.onBecomeAPartnerClick} className={classes.nav}><span className={classes.icon}><i class="fa fa-user-check" ></i></span>BECOME A TM</span>
        <Link to='/partner' className={classes.nav} onClick={props.onPartnerClick}><span className={classes.icon}><i class="fa fa-user-friends" ></i></span>PARTNER</Link> 
        <Link to='/contact' className={classes.nav} onClick={props.onContactClick}><span className={classes.icon}><i class="fa fa-user-circle" ></i></span>CONTACT</Link> 
        <Link to='/request-tm' className={classes.navreq} onClick={props.onRequestTMClick}>REQUEST TM</Link> 
        </div>
       
            )
}
export default NotLaptop