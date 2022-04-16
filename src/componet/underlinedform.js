import classes from './underlinedform.module.css'

function Underlinedform(props) {
    return(
        <div className={classes.underlinedform}>
            <form >
                <input type={props.type} className={classes.inputbig} placeholder={props.bigplaceholder}></input>
                <button className={classes.btn}>{props.button}</button>
                
                
                
               
            </form>
        </div>
    )
}
export default Underlinedform