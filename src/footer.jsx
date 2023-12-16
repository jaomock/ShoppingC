import './index.css'
import chatImg from './assets/chat.png'
import emailImg from './assets/email.png'
import phoneImg from './assets/phone.png'
// // import { featuredProducts } from './allProducts'
// import AllProducts from './allProducts'

function Footer(){
    return(
        <>
        <div className="subscribe">
            <h2 id='subHeader'>BE A PART OF THE FAMILY</h2>
            <p id='subText'>Enjoy 10% off your first purchase when you sign up!</p>
            <div className="labelnbtn">
                <input type="email" className="emaillabel" placeholder="Enter your email here"></input>
                <button id='subBtn'>SUBSCRIBE</button>
            </div>
        </div>
        <div className='allFooter'>
        <div className='moreInfoLeft'>
            <div className='sectionOne'>
                <h3 className='bottomTitle'>COMPANY</h3>
                <ul>
                    <li className='footerLI'>Our Store</li>
                    <li className='footerLI'>Shop Locations</li>
                    <li className='footerLI'>Virtual</li>
                    <li className='footerLI'>Eyecare</li>
                    <li className='footerLI'>Philanthropy</li>
                </ul>
            </div>
            <div className='sectionTwo'>
                <h3 className='bottomTitle'>BRAND</h3>
                <ul>
                    <li className='footerLI'>Style & Fit </li>
                    <li className='footerLI'>Craftsmanship</li>
                    <li className='footerLI'>Reviews</li>
                    <li className='footerLI'>Blog</li>
                    <li className='footerLI'>Press</li>
                </ul>
            </div>
            <div className='sectionThree'>
                <h3 className='bottomTitle'>HELP</h3>
                <ul>
                    <li className='footerLI'>Shipping & Returns</li>
                    <li className='footerLI'>Repairs</li>
                    <li className='footerLI'>Warranty</li>
                    <li className='footerLI'>FAQ</li>
                    <li className='footerLI'>Contact Us</li>
                </ul>
            </div>
            </div>
            <div className='vertical'></div>
            <div className='moreInfoRight'>
                <h3>ASK A SPECIALIST</h3>
                <p>Whether you're a collector or visiting for the first time,
                     we're here to assist!</p>
                <div className='contactInfo'>
                    <div className='cInfoSection'>
                    <img src={phoneImg}></img>
                    <p>(000) - PHANTOM</p>
                    </div>
                <div className='cInfoSection'>
                    <img src={emailImg}></img>
                    <p>Support@Phantom.xyz</p>
                </div>
                <div className='cInfoSection'>
                    <img src={chatImg}></img>
                    <p>Chat with us</p>
                </div>
                </div>
                </div>
            </div>
        <div className='actualFooter'>
                <p>© 2023 Phantom</p>
                <p className='underline'>Privacy</p>
                <p className='underline'>Accessibility</p>
                <p className='underline'>Terms of Service</p>
                <p className='underline'>Refund Policy</p>
                <p className='underline'>Conformity</p>
            </div>
        </>
    )
}

export default Footer