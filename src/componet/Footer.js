
import classes from './Footer.module.css'

function Footer(props) {
    return (

<div className={classes.footerComponetCon}>
    <div className={classes.footerComponetSubSubCon}>
      <ul className={classes.newslettercon}>
        <li className={classes.dontMissOut}>Don&#180;t Miss Out On Any Information </li>
        <li className={classes.signUpToRecieveMail}>Sign up to receive emails &#38; newsletters from Tex-Z  </li>
        <li><form>
            <label className={classes.emailAddressLabel}>E-MAIL ADDRESS*</label> <br/>
            <input type='email' placeholder='Please type-in your e-mail address' className={classes.emailInput}/> <br/>
            <div className={classes.emailAdressBtnCon}>  <button className={classes.emailAdressBtn}>SIGN UP</button></div>
          
            </form> 
            </li>
        <li className={classes.bySigning}>By signing up, you understand &#38; agree that your data will be collected &#38; used with utmost confidentiality &#38; <span className={classes.underlineTermsOfUse}>Terms of Use</span> </li>
        <br/>
         <br/>
         <br/>
        </ul>

        <ul className={classes.TitleFooter}>
            <li className={classes.signUpToRecieveMailtitle}>TEX-Z inc.</li>
            <li className={classes.signUpToRecieveMailA}>About</li>
            <li className={classes.signUpToRecieveMailA}>Why choose us?</li>
            <li></li>

        </ul>

        <ul className={classes.TitleFooter}>
            <li className={classes.signUpToRecieveMailtitle}>CUSTOMER SERVICES</li>
            <li className={classes.signUpToRecieveMailA}>Contact</li>
            <li className={classes.signUpToRecieveMailA}>tex-Z account</li>
            <li className={classes.signUpToRecieveMailA}>Live-track</li>
            <li className={classes.signUpToRecieveMailA}>Reedem Bonus</li>
          

        </ul>

        <ul className={classes.TitleFooter}>
            <li className={classes.signUpToRecieveMailtitle}>FEED YOUR EYES</li>
            <li className={classes.signUpToRecieveMailA}>Blog</li>
            <a href='https://www.instagram.com/texz.com.ng/' target= '_blank' className={classes.instagramLogo}><i class='fab fa-instagram'></i></a> 
            <a href='https://twitter.com/tobbey_cc' target= '_blank' className={classes.instagramLogo}><i class='fab fa-twitter'></i></a>
            <a href='https://facebook.com/tobbey_cc' target= '_blank' className={classes.instagramLogo}><i class='fab fa-facebook'></i></a>
            <a href='https://www.youtube.com/' target= '_blank' className={classes.instagramLogo}><i class='fab fa-youtube'></i></a>
            
            
            
            
         </ul>
        
      
    </div>
    <div className={classes.termsOfUse}>
         <a href='https://facebook.com/tobbey_cc' target= '_blank' className={classes.instagramLogo}>Terms of Use</a>
         <p className={classes.copywright}>© 2022 Tex-Z Inc.</p>
         <a href='/#' className={classes.backToTop}>BACK TO TOP<span className={classes.arrowUP}><i class="material-icons ">arrow_drop_up</i></span></a>
         </div>   
         
        
    
        
     



    </div>
        
    )
    
}
export default Footer