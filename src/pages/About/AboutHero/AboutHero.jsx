import React, { useEffect, useRef } from "react";
import "./AboutHero.css";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import expIcon from "../../../assets/picture/About/AboutHero/plant.png";
import membersIcon from "../../../assets/picture/About/AboutHero/network.png";
import projectsIcon from "../../../assets/picture/About/AboutHero/clipboard.png";
// --- COMPONENT ĐẾM SỐ (TỰ ĐỘNG CHẠY KHI CUỘN TỚI) ---
const AnimatedNumber = ({ to, suffix = "", duration = 2 }) => {
    const ref = useRef(null);
    // Kích hoạt khi thẻ xuất hiện 50% trên màn hình
    const isInView = useInView(ref, { once: true, amount: 0.5 }); 
    const count = useMotionValue(0);
    // Làm tròn số và thêm hậu tố (ví dụ: chữ "+")
    const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

    useEffect(() => {
        if (isInView) {
            animate(count, to, { duration: duration, ease: "easeOut" });
        }
    }, [isInView, count, to, duration]);

    return <motion.span ref={ref} className="highlight-number">{rounded}</motion.span>;
};

const AboutHero = () => {
    return (
        <div className="aboutHeroContainer">
            
            <motion.div 
                className="aboutHeroOverlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
            
            <div className="aboutHeroContent">
                
                <motion.div 
                    className="aboutHeroTitles"
                    initial={{ opacity: 0, y: -80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                    <h1>About Us</h1>
                    <p>Informations about us you need to know</p>
                </motion.div>

                <motion.div 
                    className="aboutHeroCards"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    {/* Card 1 */}
                    <div className="aboutCard">
                        <div className="aboutCardIcon">
                            <img src={expIcon} alt="Experience" />
                        </div>
                        <div className="aboutCardText">
                            <h3>Experience</h3>
                            <p>Founded in <AnimatedNumber to={2015} duration={1.5} />, celebrating <AnimatedNumber to={10} duration={2} /> successful years.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="aboutCard">
                        <div className="aboutCardIcon">
                            <img src={membersIcon} alt="Active Members" />
                        </div>
                        <div className="aboutCardText">
                            <h3>Active Members</h3>
                            <p>A community of over <AnimatedNumber to={50} suffix="+" duration={2.5} /> engaged students.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="aboutCard">
                        <div className="aboutCardIcon">
                            <img src={projectsIcon} alt="Impactful Projects" />
                        </div>
                        <div className="aboutCardText">
                            <h3>Impactful Projects</h3>
                            <p>Delivering <AnimatedNumber to={10} suffix="+" duration={2} /> meaningful community initiatives.</p>
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </div>
    );
};

export default AboutHero;