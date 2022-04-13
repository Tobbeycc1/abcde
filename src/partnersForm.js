import classes from './partnersForm.module.css'
function PartnersForm(props) {
    return(
      
           <div>
               <form>
               <label className={classes.label}>{props.title}</label> <br/> <br/>
               <input className={classes.input} type={props.type} placeholder={props.placeholder}/>
                </form>
           </div>
           
          
      
    )
    
    console.log('fvck!!!!!!!!');
}
export default PartnersForm