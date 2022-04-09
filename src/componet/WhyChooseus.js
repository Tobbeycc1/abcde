import classes from './WhyChooseus.module.css'
function WhyChooseUsBox(props) {
    return(
        <div className={classes.WhyChooseUsCon}> 
            <img src={props.whyChooseUsIcon} alt={props.whyChooseUsIcon} className={classes.whyChooseUsIcon}/>
            <div className={classes.WCtextcon}>
                <p className={classes.wcuheader}>{props.whyChooseUsiconHeader}</p>
                <p className={classes.wcuSubText}>{props.whyChooseUsiconSubtext} </p>
            </div>
        </div>

    )
}
export default WhyChooseUsBox