import classes from './YourLogo.module.css'
function YourLogo(props) {
    return(
        <div className={classes.yourLogoCon}>
            <img  src={props.yourlogo} alt={props.yourlogo}/>
        </div>
    )
}
export default YourLogo