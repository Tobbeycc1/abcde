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
import WhyChooseUsBox from '../componet/WhyChooseus'
import cheapRateIcon from '../images/cheap rates icon.png'
import swiftIcon from '../images/swift response icon.png'
import referIcon from '../images/refer & earn icon.png'
import YourLogo from '../componet/YourLogo'
import yourlogo from '../images/your logo.png'
import Footer from '../componet/Footer'



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
            <img src={hand} alt={girl} className={classes.hand}/>
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
    <img src={girl} alt={girl} className={classes.lady}/>
    <p className={classes.abouttext} id='#about'>Tex-Z delivery inc. is a business that has been established in Lagos, Nigeria in the year 2020 and is reputed to be amongst the top best delivery brands in Nigeria by the year 2040. <br/> <br/>

We intend to place much interest on delivering large sized goods with a considerable weight for both corporate and domestic clients, and we will strive to meet all the demands of our customers. <br/> <br/>

Our delivery business has been established not only to generate revenue and make profit but to solve problems facing retailers and customers in movement of their goods and also to compete favorably with other goods delivery business in Lagos and in Nigeria. Tex-Z delivery inc. is aimed at striking a balance between retailers of large sized goods and its respective customers in terms of the supposed goods movements. By so doing, saves the retailer and customer time, cost and energy.
</p>
</div>
<div className={classes.whyChooseUsCon}>
    <h3 className={classes.whyChooseUsTitle}>Why Choose Us?</h3>
    <p className={classes.whyChooseUsSubTitle}>Imagine a platform that allows you to plan your schedule with accurate information on 
exact timing your package would arrive, not forgetting our:</p>
<div className={classes.WhyChooseUsBoxCon}>
    <WhyChooseUsBox whyChooseUsiconHeader={'Cheap rates'} whyChooseUsIcon={cheapRateIcon} whyChooseUsiconSubtext={'Our prices are friendly, yet you get the best service'}/>
<WhyChooseUsBox whyChooseUsiconHeader={'Swift Response'} whyChooseUsIcon={swiftIcon} whyChooseUsiconSubtext={'Get your package in a blink of an eye'}/>
<WhyChooseUsBox whyChooseUsiconHeader={'Refer & Earn'} whyChooseUsIcon={referIcon} whyChooseUsiconSubtext={'You can get free bonuses when you share refer a friend'}/>
</div> 

</div>

<div>
    <div className={classes.aboutuscontainer}>
        <Dash title={'Those Who have Partnered With Us'}/>
        <p className={classes.aboutussubtext}>These brands says a lot about the quality of our services</p>
        </div>
        <div className={classes.yourlogocon}> 
            <YourLogo yourlogo={yourlogo}/>
            <YourLogo yourlogo={yourlogo}/>
            <YourLogo yourlogo={yourlogo}/>
            <YourLogo yourlogo={yourlogo}/>
            <YourLogo yourlogo={yourlogo}/>
            <YourLogo yourlogo={yourlogo}/>
            <YourLogo yourlogo={yourlogo}/>
            <YourLogo yourlogo={yourlogo}/>
            <YourLogo yourlogo={yourlogo}/>
            <YourLogo yourlogo={yourlogo}/>
        </div>
   
</div>


<div className={classes.bigfootercon}>
  <div className={classes.footercon}>
    <Footer/>
   
</div>  
</div>

 






        </div>
    )
}
export default Homepage