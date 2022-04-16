import { Link } from 'react-router-dom'
import classes from '../header.module.css'
import Logo from '../images/Logo.png'

function Header(props) {
    
    return(
<div className={classes.header}>
 <img src={Logo} className={classes.Logo} alt="Logo" />

    <div className={classes.navCon}>
        <Link to='/' className={classes.nav} onClick={props.onHomeClick}>HOME</Link> 
<Link to='/live-track' className={classes.nav} onClick={props.onLiveTrackClick}>LIVE-TRACK</Link> 
<span onClick={props.onBecomeAPartnerClick} className={classes.nav}>BECOME A TM <span className={classes.icon}><i class="material-icons ">arrow_drop_down</i></span></span>
<Link to='/partner' className={classes.nav} onClick={props.onPartnerClick}>PARTNER</Link> 
<Link to='/contact' className={classes.nav} onClick={props.onContactClick}>CONTACT</Link> 
<Link to='/request-tm' className={classes.navreq} onClick={props.onRequestTMClick}>REQUEST TM</Link> 
    </div>


</div>
    )
}
export default Header