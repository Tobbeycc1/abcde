import classes from './WhyChooseus.module.css'
function WhyChooseUsBox(props) {
    return(
        <div>
            <img src={props.whyChooseUsIcon} alt={props.whyChooseUsIcon} className={classes.whyChooseUsIcon}/>
            <div>
                <p className={classes.wcuheader}>{props.whyChooseUsiconHeader}</p>
                <p>{props.whyChooseUsiconSubtext}</p>
            </div>
        </div>

    )
}
export default WhyChooseUsBox