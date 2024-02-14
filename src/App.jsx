import './App.css'
import NavBar from './components/NavBar.jsx';
import Carousel from './components/Carousel.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Shop from './pages/shop.jsx';
import Product from './pages/product.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <NavBar />
      <section id='headers'>
        <header id='left-header'>How Battery Chargers and Maintainers Work <Link>Learn More</Link></header>
        <header id='right-header'>Want to Learn More About Our Free Battery Testing Service? <Link>Learn More</Link></header>
      </section>
      <Carousel show={1}>
        <section>
          <figure>
            <img src="src/assets/car-battery.jpg" alt="Car Battery" />
          </figure>
        </section>
        <section>
          <figure>
            <img src="src/assets/car-jumper-cables.jpg" alt="Car Battery" />
          </figure>
        </section>
        <section>
          <figure>
            <img src="src/assets/car-engine.jpg" alt="Car Engine" />
          </figure>
        </section>
      </Carousel>
      <form id='vehicle-choice'>
      <span>🚘.ᐟ </span>
      <header>Choose a Vehicle & Find What Parts Fit</header>
      <p>Filter your results by entering your Year, Make, Model to ensure you find the parts that fit your vehicle.</p>
        <button>🚘 CHOOSE A VEHICLE</button>
      </form>
      <main>
        <section>
          <article>
            <figure>
              <img src="" alt="" />
              <figcaption>🚚 FREE Next Day Delivery</figcaption>
            </figure>
            <p>on all products for orders $35 or more.</p>
            <Link>Learn More</Link>
          </article>
          <article>
            <figure>
              <img src="" alt="" />
              <figcaption>🏢 FREE Pick Up In-Store</figcaption>
            </figure>
            <p>Order Online and have your item(s) waiting for you at the store for pickup or curbside delivery.</p>
            <Link>Learn More</Link>
          </article>
          <article>
            <figure>
              <img src="" alt="" />
              <figcaption>⏲ Earn with O'Requite</figcaption>
            </figure>
            <p>Earn points every way you shop. Earn faster by shopping limited-time bonus point offers.</p>
            <Link>Join O'Requite or Sign In</Link>
          </article>
        </section>
        <section>
          <article>
            <figure>
              <img src="" alt="" />
              <figcaption>Save with an O'Really Oil Change</figcaption>
            </figure>
            <p>Complete your oil change with 5 quarts of O'Really Conventional Motor Oil + a MicroGard Filter and save. Available In-Store Only.</p>
            <Link>Find A Store</Link>
          </article>
          <article>
            <figure>
              <img src="" alt="" />
              <figcaption>Get A $15 Gift Card and 2x Points</figcaption>
            </figure>
            <p>After rebate with purchase of Sylvania Silverstar Twin Pack bulbs</p>
            <Link>Shop Sylvania Bulbs</Link>
          </article>
          <article>
            <figure>
              <img src="" alt="" />
              <figcaption>How-To: Winter Roadside Emergency Kits and Cold Weather Preparation</figcaption>
            </figure>
            <p>Stay safe and prepare for a snow storm, ice storm, or cold weather event with our winter How-To resources.</p>
            <Link>Learn More About Cold Weather Safety</Link>
          </article>
          <article>
            <figure>
              <img src="" alt="" />
              <figcaption>Maximize Your Membership</figcaption>
            </figure>
            <p>Have you signed up for our texts and emails? The more connected you are, the more you save!</p>
            <Link>Learn How to Make the Most of Your Membership</Link>
          </article>
          <article>
            <figure>
              <img src="" alt="" />
              <figcaption>Loaner Tool Program</figcaption>
            </figure>
            <p>Is your toolbox missing the tool you need to repair your vehicle? Rent the tools you need with the Loaner Tools Program at O'Really Auto Parts.</p>
            <Link>Learn More About Rental Tools</Link>
          </article>
          <article>
            <figure>
              <img src="" alt="" />
              <figcaption>Free Battery Testing</figcaption>
            </figure>
            <p>Bring your battery into your local O'Really Auto Parts store for a free diagnostic check.</p>
            <Link>Find Your Store for a Free Battery Test</Link>
          </article>
        </section>
        <section>
          <header>Featured Products You Might Like</header>
          <ul>
            <li>
              <figure>
                <img src="" alt="" />
                <figcaption>Rislone CAT Complete</figcaption>
              </figure>
              <p>Fuel, Exhaust & Emissions System Cleaner</p>
            </li>
            <li>
              <figure>
                <img src="" alt="" />
                <figcaption>Power Torque</figcaption>
              </figure>
              <p>Stubby 1/4" and 3/8" Dr Hex Bit Socket Sets</p>
            </li>
            <li>
              <figure>
                <img src="" alt="" />
                <figcaption>K-Seal</figcaption>
              </figure>
              <p>Coolant Leak Repair</p>
            </li>
            <li>
              <figure>
                <img src="" alt="" />
                <figcaption>Schumacher</figcaption>
              </figure>
              <p>2000 Amp Lithium Jump Starter</p>
            </li>
            <li>
              <figure>
                <img src="" alt="" />
                <figcaption>Mechanix Wear</figcaption>
              </figure>
              <p>ColdWork FastFit Work Gloves</p>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <section>
          <form onSubmit={handleSubmit}>
            <p>WORK AT O'Really</p>
            <button>EXPLORE JOBS</button>
          </form>
          <p>CONNECT with O'Really</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL:</label>
            <input id='email' type="email" placeholder='Sign Up for News & Special Offers' value={input}/>

            <button>SIGN UP</button>
          </form>
        </section>
        <section>
          <ul>
            <li>
              <h3>Contact Your Local Store</h3>
              <p>Call (203) 286-2005</p>
            </li>
            <li>
              <h3>Check Order Status</h3>
              <p>Check the status of your <Link>order</Link>.</p>
            </li>
            <li>
              <h3>O'Requite</h3>
              <p>Learn more about our <Link>loyalty program</Link>.</p>
            </li>
            <li>
              <h3>Find a Repair Shop</h3>
              <p>Find an Automotive Service Professional <Link>near you</Link>.</p>
            </li>
          </ul>
          <ul>
            <h3>About Us</h3>
            <li>
              <Link>Careers</Link>
            </li>
            <li>
              <Link>Company Overview</Link>
            </li>
            <li>
              <Link>Investor Relations</Link>
            </li>
            <li>
              <Link>Newsroom</Link>
            </li>
            <li>
              <Link>Legal Policies</Link>
            </li>
            <li>
              <Link>Site Directory</Link>
            </li>
            <li>
              <Link>Sustainability</Link>
            </li>
            <li>
              <Link>Community Relations</Link>
            </li>
          </ul>
          <ul>
            <h3>Resources</h3>
            <li><Link>Find a Store</Link></li>
            <li><Link>Current Ad</Link></li>
            <li><Link>Store Services</Link></li>
            <li><Link>List of Brands</Link></li>
            <li><Link>For the Professional</Link></li>
            <li><Link>Jobber Program</Link></li>
            <li><Link>Find a Repair Shop</Link></li>
            <li><Link>Coupons & Promotions</Link></li>
            <li><Link>Videos</Link></li>
            <li><Link>How to Hub</Link></li>
          </ul>
          <ul>
            <h3>Customer Service</h3>
            <li><Link>Contact Us</Link></li>
            <li><Link>FAQs</Link></li>
            <li><Link>Account Dashboard</Link></li>
            <li><Link>Gift Cards</Link></li>
            <li><Link>Rebates</Link></li>
            <li><Link>Returns & Exchanges</Link></li>
            <li><Link>Special Orders</Link></li>
            <li><Link>Shipping & Delivery</Link></li>
            <li><Link>Warranties</Link></li>
            <li><Link>SDS</Link></li>
          </ul>
        </section>
      </footer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:product' element={<Product />} />
      </Routes>
    </section>
  )
}

export default App;