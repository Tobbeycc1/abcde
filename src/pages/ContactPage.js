
import Footer from '../componet/Footer'
import classes from './ContactPage.module.css'
function ContactPage(props) {
    return(
    <div>
          <div id='#c' className={classes.ContactCon}>
          <form className={classes.FormCon}>
              <div className={classes.FormSubCon}>
            <label className={classes.contactLabel}>Name</label> <br/> 
            <input type='text' className={classes.inputbig} placeholder='Enter your name'></input> <br/>

            <label className={classes.contactLabel}>E-mail</label> <br/> 
            <input type='email' className={classes.inputbig} placeholder='Enter your name'></input> <br/>
            
            <label className={classes.contactLabel}>Message</label> <br/> 
            <textarea placeholder='Enter your message' className={classes.textarea}/> <br/>

            
              </div>
            
                <button className={classes.btn}>SEND</button>  
            
            </form>
            
            

          </div>
          <div className={classes.footer}>
            <Footer id={'#a'}/>
            </div>
          
    </div>
    )
}
export default ContactPage