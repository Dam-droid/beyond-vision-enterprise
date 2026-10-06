import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className='footer'>
            <div className='container footer-grid'>
                <div>
                    <div className='footer-logo'>Beyond Vision Enterprise</div>
                    <p>Specialists in Construction, Transport & Logistics.</p>
                </div>

                <div>
                    <h3>Quick Links</h3>

                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/contact'>Contact</Link>
                </div>

                <div>
                    <h3>Services</h3>

                    <span>Construction Services</span>
                    <span>Transport Solutions</span>
                    <span>Logistics Management</span>
                </div>

                <div>
                    <h3>Contact</h3>

                    <span>South Africa</span>
                    <span>Professional & Reliable</span>
                    <span>Built Beyond Expectations</span>
                </div>
            </div>

            <div className='footer-bottom'>
                <div className='container'>
                    <p>
                       © {new Date().getFullYear()} Beyond Vision Enterprise.
                       All rights reserved. 
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;