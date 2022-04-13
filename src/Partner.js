import PartnersForm from "./partnersForm"
import classes from './Partner.module.css'
import CalendarA from "./componet/Calendar"

function Partner(props) {
    return(
        <div className={classes.Pformcon}>
            <div className={classes.center}>

            <div className={classes.formCon}>
               
               <PartnersForm title={'Name'} type={'text'} placeholder={'Surname                           Other name                             Last name'}/>
          <PartnersForm title={'Phone Number'} type={'number'} placeholder={'Input an accessible phone number'}/>
          <PartnersForm title={'E-mail'} type={'email'} placeholder={'Input an accessible e-mail address'}/>
           </div>

           <div className={classes.calendarCon}>
              <label className={classes.label}>Schedule Date</label> <br/> <br/>
              <CalendarA/>
           </div>

           <div className={classes.calendarCon}>
              <label className={classes.label}>Schedule Time</label> <br/> <br/>
              <CalendarA/>
           </div>
            </div>
            
       
             
            
           

           
        </div>
       
    )
}
export default Partner