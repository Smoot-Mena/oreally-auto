import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return ( 
        <nav>
            <header className="top-banner">
                35% OFF orders over $100. Use code: <span>PRESDAY</span> online and ship it to your home. See details <Link>here</Link>.
            </header>
            <nav id="first-navbar">
                <section id="logo"><span>O'Really</span> AUTO PARTS
                </section>
                <section className="product-search">
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="navbar-search" placeholder="Search by product, category, brand, or part #"/>
                        <button>🔎</button>
                    </form>
                </section>
                <section id="account">
                👤Account / Sign In <span>▼</span>
                </section>
                <section id="cart">🛒Cart | 0</section>
            </nav>
            <nav id="second-navbar">
                <ul>
                    <li>CATEGORIES <span>▼</span></li>
                    <li>DEALS <span>▼</span></li>
                    <li>STORE SERVICES <span>▼</span></li>
                    <li>HOW TO <span>▼</span></li>
                    <li>BRANDS <span>▼</span></li>
                </ul>
                <ul>
                    <li>📍 Selected Store <span>▼</span></li>
                    <li>🚘 Garage <span>▼</span></li>
                </ul>
            </nav>
        </nav>
     );
}
 
export default NavBar;