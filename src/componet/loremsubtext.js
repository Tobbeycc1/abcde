import classes from './stepsbox.module.css'
function Loremsubtext(props) {
    return(
        <div>
            <p className={classes.loremsubtext}>{props.stext}</p>
        </div>
    )
}
export default Loremsubtext