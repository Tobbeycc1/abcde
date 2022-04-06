import classes from './Homepage.module.css'
import hand from '../images/3d hand holding phone.png'
import Dash from '../componet/dash'
import Stepsbox from '../componet/stepsbox'
import inputicona from '../images/input location icon.png'
import inputiconb from '../images/request tex-z icon.png'
import inputiconc from '../images/Get assigned to a TM icon.png'
import inputicond from '../images/Monitor TM icon.png'
import inputicone from '../images/Delivered icon.png'
import girl from '../images/3d About us lady.png'


function Homepage(props) {
    return(
        <div>
            <div className={classes.title}>
                <div className={classes.box}>
                <h1 className={classes.test}>Bike no <br/>fit carry am ?</h1>
                <p className={classes.subheadertext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tellus, semper a efficitur sed, efficitur id diam.</p>
                <div className={classes.formheader}>
                    <form >
                    <input type='text' className={classes.actualformheader} placeholder='&#128269; &#124;  Type in package destination'></input>
                </form>  
                </div>
                </div>
            <img src={hand} className={classes.hand}/>
            </div>

            {/* How we operate */}
<div>
    <div className={classes.howweoperatetitlecontainer}> 
         <div className={classes.howweoperatecontainer}> 
    <Dash title={'How We Operate'}  />
    <p>No <span className={classes.smallnowahala}>Wahala</span></p>
    </div>
   
</div>
</div>
<div className={classes.stepsboxcontainer}>
   <Stepsbox title={'Input Your Location'} inputicon={inputicona} stext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tellus, semper a efficitur sed, efficitur id diam.'}/>
<Stepsbox title={'Request a Tex-Z '} inputicon={inputiconb} stext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tellus, semper a efficitur sed, efficitur id diam.'}/>
<Stepsbox title={'Get Assigned to a TM '} inputicon={inputiconc} stext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tellus, semper a efficitur sed, efficitur id diam.'}/> 
<Stepsbox title={'Monitor TM '} inputicon={inputicond} stext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tellus, semper a efficitur sed, efficitur id diam.'}/>
<Stepsbox title={'Delivered '} inputicon={inputicone} stext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tellus, semper a efficitur sed, efficitur id diam.'}/>
</div>

<div className={classes.aboutuscontainer}>
    <Dash title={'About Tex-Z'}/>
</div>
<div className={classes.ladyandtextcon}>
    <img src={girl} className={classes.lady}/>
    <p className={classes.abouttext}>Tex-Z delivery inc. is a business that has been established in Lagos, Nigeria in the year 2020 and is reputed to be amongst the top best delivery brands in Nigeria by the year 2040. <br/> <br/>

We intend to place much interest on delivering large sized goods with a considerable weight for both corporate and domestic clients, and we will strive to meet all the demands of our customers. <br/> <br/>

Our delivery business has been established not only to generate revenue and make profit but to solve problems facing retailers and customers in movement of their goods and also to compete favorably with other goods delivery business in Lagos and in Nigeria. Tex-Z delivery inc. is aimed at striking a balance between retailers of large sized goods and its respective customers in terms of the supposed goods movements. By so doing, saves the retailer and customer time, cost and energy.
</p>
</div>






        </div>
    )
}
export default Homepage