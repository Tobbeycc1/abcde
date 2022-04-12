import classes from './Otp.module.css'
function Otp(props) {
    return (
        <div>
            <h3 className={classes.EnterOtp}>{props.EnterOtp}</h3>
            <p>{props.changedphonenumber}</p>
            <div>
                <input type='text'/>
            </div>
        </div>
    )
}
export default Otp