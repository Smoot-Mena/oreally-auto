import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return ( 
        <nav>
            <header className="top-banner">
                15% OFF orders over $100. Use code: <span>FEB15</span> online and ship it to your home. See details <Link>here</Link>.
            </header>
            <nav id="first-navbar">
                <section id="logo"><span>O'Really</span> AUTO PARTS
                </section>
                <section className="product-search">
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="navbar-search" />
                        <button>🔎</button>
                    </form>
                </section>
                <section>
                    Sign In
                </section>
                <section>Cart</section>
            </nav>
            <nav id="second-navbar">
                <ul>
                    <li>CATEGORIES</li>
                    <li>DEALS</li>
                    <li>STORE SERVICES</li>
                    <li>HOW TO</li>
                    <li>BRANDS</li>
                </ul>
                <span>Selected Store</span>
                <span>Garage</span>
            </nav>
        </nav>
     );
}
 
export default NavBar;