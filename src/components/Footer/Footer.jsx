import { assets } from '../../assets/assets'
import './Footer.css'
const footer=()=>{
    return(
        <div className="footer">
            <div className="left-footer">
                <img className="img" src={assets.logo}></img>
                <p>Lorem, ipsum dolor sit amet . Deleniti dignissimos iusto nulla ea. Ipsa alias corporis dolorem eveniet quasi eius quisquam quia esse.</p>
                 <div className="footer-icons">
                    <img src={assets.facebook_icon} alt="facebook"></img>
                    <img src={assets.twitter_icon} alt="twitter"></img>
                    <img src={assets.linkedin_icon} alt="linkedin"></img>
                 </div>
            </div>
            <div className="center-footer">
                <h3>Company</h3>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="right-footer">
                <h3>Get In Touch</h3>
                <ul>
                    <li>+12-345-6789</li>
                    <li>contact@tomatao.com</li>
                </ul>
            </div>
        </div>
    )
}
export default footer