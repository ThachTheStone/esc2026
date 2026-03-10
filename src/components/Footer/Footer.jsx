import logo from "../../assets/picture/Logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top-border"></div>

            <div className="footer-container footer-content">
                <div className="footer-left">
                    <img src={logo} alt="ESC Logo Footer" className="footer-logo"/>
                    <div className="footer-info">
                        <p>Address: FPT University</p>
                        <p>Organizer: Skillcetera</p>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-column">
                        <h4>About us</h4>
                        <ul>
                            <li><a href="#">About Skillcetera</a></li>
                            <li><a href="#">About ESC</a></li>
                            <li><a href="#">About our partner</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Follow us</h4>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Tik Tok</a></li>
                            <li><a href="#">Youtube</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-border"></div>

            <div className="copyright">
                <p>© 2026 ESC-English Speaking Competition. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;