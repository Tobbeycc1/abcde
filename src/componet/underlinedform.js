import classes from './underlinedform.module.css'

function Underlinedform(props) {
    return(
        <div className={classes.underlinedform}>
            <form >
                <input type='text' className={classes.inputbig} placeholder={props.bigplaceholder}></input>
                <div className={classes.formconbig}> <button className={classes.btnbig}>{props.button}</button></div>
               
            </form>
        </div>
    )
}
export default Underlinedform