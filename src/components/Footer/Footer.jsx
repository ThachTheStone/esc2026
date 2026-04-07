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
                            <li><a href="/About">About Skillcetera</a></li>
                            <li><a href="/CurrentSeason">About ESC</a></li>
                            <li><a href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fskillcetera%2Fposts%2Fpfbid0snAEV74viHdQn7SS45ZxEr93bQL2isTWZ5iZk6m3ULn7tqeFCcoFmiPnSLzgBVjjl&show_text=true&width=500">About our partner</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Follow us</h4>
                        <ul>
                            <li><a href="https://www.facebook.com/skillcetera">Facebook</a></li>
                            <li><a href="https://www.tiktok.com/@skillcetera_club?lang=en">Tik Tok</a></li>
                            <li><a href="https://www.youtube.com/@skillcetera">Youtube</a></li>
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