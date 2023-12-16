import './index.css'
import TopBar from './topBar'
import Footer from './footer';
import modelOne from './assets/modelOne.jpg'
import modelTwo from './assets/modelTwo.jpg'

const AboutUs = () => {

    return(
        <>
        <TopBar/>
        <div className='aboutTop'>
        <h2>Elevate your essence with Phantom Apparel, where style meets indentity</h2>
        <p>Indulge in the allure of Phantom Apparel, a sanctuary where fashion
           transcends the ordinary. Our clothing and jewelry redefine 
           self-expression, weaving a narrative of individuality through 
           timeless pieces that marry style and substance. 
           From meticulously crafted accessories to apparel that seamlessly 
           blends comfort and sophistication, each creation is a testament to our 
           unwavering commitment to quality. At Phantom Apparel,
            we invite you to embrace your unique identity, making a statement 
            with every stitch and sparkle. Welcome to a world where fashion 
            is more than a trend; it's an expression of your distinctive journey.</p>
        </div>
        <div className='aboutMid'>
        {/* Maybe use map to shorten/clean up code w/ array? */}
        <div className='flip-card'>
          <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img id='modelOne' src={modelOne}></img>
          </div>
          <div className='flip-card-back'>
            <h2>About Us</h2>
            <p>Phantom was born with one mission - to create high-quality, 
              stylish apparel and jewelry that would empower people to express 
              themselves with confidence.
            </p>
            <p>Founded by a group of passionate designers and enthusiast, we 
              started our journey with a commitment to crafting jewelry that would 
              stand the test of time, both in terms of durability and style.
            </p>
            <p>
              Today, we continue to build on that legacy by designing unique and 
              trendsetting glasses that refelct the spirit and creativity of our 
              brand. Join us as we continue to redefine fashion and bring our vision
              to life
            </p>
            <button id='aboutBtn'>Browse Products</button>
          </div>
        </div>
        </div>
        <div className='flip-card'>
          <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img id='modelOne' src={modelTwo}></img>
          </div>
          <div className='flip-card-back'>
            <h2>Something For Everyone</h2>
            <p>
              At Phantom, we believe that everyone should have access to stylish 
              and affordable apparel. That's why we striver to create clothing and 
              jewelry that are not only trendy and fashionable, but also accesible 
              for everyone
            </p>
            <p>
              From classic to contemporary, our items are designed to suit every taste 
              and style, making it easy for our customers to find the perfect things they
              need
            </p>
            <p>
              Our commitment to accessibility is at the heart of everything we do, and we 
              take pride in helping people around the world look their best.
            </p>
            <button id='aboutBtn'>Browse Products</button>
          </div>
        </div>
        </div>
        </div>
        <Footer />
        </>
      )
    }

export default AboutUs