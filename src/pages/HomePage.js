import classes from './Homepage.module.css'
import hand from '../images/3d hand holding phone.png'
import Dash from '../componet/dash'
import Stepsbox from '../componet/stepsbox'
import inputicona from '../images/input location icon.png'
import inputiconb from '../images/request tex-z icon.png'
import inputiconc from '../images/Get assigned to a TM icon.png'
import inputicond from '../images/Monitor TM icon.png'
import inputicone from '../images/Delivered icon.png'


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
    <div>
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




        </div>
    )
}
export default Homepage