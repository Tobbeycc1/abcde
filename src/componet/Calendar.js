import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import classes from './Calendar.module.css'
import './CalendarStyle.css'


function CalendarA(props) {
    return(
        <div>
         {/* <h2>Showindcjg</h2> */}
        <Calendar className={classes.calendarCon}/> 
         
        </div>
     
    )
}
export default CalendarA