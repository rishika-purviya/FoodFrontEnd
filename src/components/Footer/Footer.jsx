import { assets } from '../../assets/assets'
import './Footer.css'
const footer=()=>{
    return(
        <div className="footer">
            <div className="left-footer">
                <img src={assets.logo}></img>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates eveniet architecto itaque perferendis consequuntur. Deleniti dignissimos iusto nulla ea. Ipsa alias corporis dolorem eveniet quasi eius quisquam quia esse.</p>
                 <div className="footer-icons">
                    <img src={assets.facebook_icon} alt="facebook"></img>
                    <img src={assets.twitter_icon} alt="twitter"></img>
                    <img src={assets.linkedin_icon} alt="linkedin"></img>
                 </div>
            </div>
            <div className="center-footer">
                <h1>Company</h1>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
    )
}
export default footer