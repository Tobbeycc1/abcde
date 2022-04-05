import { Link } from 'react-router-dom'
import classes from '../header.module.css'
import Logo from '../images/Logo.png'

function Header(props) {
    return(
<div className={classes.header}>
 <img src={Logo} className={classes.Logo} alt="Logo" />
<Link to='/' className={classes.nav}>HOME</Link> 
<Link to='/live-track' className={classes.nav}>LIVE-TRACK</Link> 
<span className={classes.nav}>BECOME A TM <span className={classes.icon}><i class="material-icons ">arrow_drop_down</i></span></span>
<Link to='/partner' className={classes.nav}>PARTNER</Link> 
<Link to='/contact' className={classes.nav}>CONTACT</Link> 
<Link to='/request-tm' className={classes.navreq}>REQUEST TM</Link> 

</div>
    )
}
export default Header