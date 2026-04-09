import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

// LƯU Ý: Khuyên bạn nên đổi tên file "logo trắng.png" thành "logo-trang.png" trong máy tính của bạn nhé
import MainLogo from "../../assets/picture/Contact/logo trắng.png"; 
import PhoneIcon from "../../assets/picture/Contact/phone-calling-svgrepo-com.svg";
import MailIcon from "../../assets/picture/Contact/mail-open-alt-svgrepo-com.svg";
import HeartIcon from "../../assets/picture/Contact/heart-svgrepo-com.svg";
import FbIcon from "../../assets/picture/facebook.png";
import TiktokIcon from "../../assets/picture/Contact/tiktok-logo-thin-svgrepo-com.svg";
import YtIcon from "../../assets/picture/Contact/youtube-round-svgrepo-com.svg";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-content-wrapper">
                
                {/* CỘT TRÁI: TITLE & LOGO */}
                <motion.div 
                    className="contact-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="contact-title">CONTACT US.</h2>
                    <div className="contact-logo">
                        <img src={MainLogo} alt="Skillcetera Logo" />
                    </div>
                </motion.div>

                {/* CỘT PHẢI: KHUNG KÍNH THÔNG TIN */}
                <motion.div 
                    className="contact-right"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="contact-glass-box">
                        
                        {/* 1. MỤC PHONE */}
                        <div className="contact-item">
                            <div className="contact-icon">
                                <img src={PhoneIcon} alt="Phone" />
                            </div>
                            <div className="contact-info">
                                <h3>Phone</h3>
                                <p>0378382568</p>
                            </div>
                        </div>

                        {/* 2. MỤC MAIL */}
                        <div className="contact-item">
                            <div className="contact-icon">
                                <img src={MailIcon} alt="Mail" />
                            </div>
                            <div className="contact-info">
                                <h3>Mail</h3>
                                <p>skillcetera@gmail.com</p>
                            </div>
                        </div>

                        {/* 3. MỤC FOLLOW US */}
                        <div className="contact-item">
                            <div className="contact-icon">
                                <img src={HeartIcon} alt="Follow Us" />
                            </div>
                            <div className="contact-info">
                                <h3>Follow us</h3>
                                
                                {/* CÁC NÚT MẠNG XÃ HỘI (Đã xóa các chữ FB, IG, TT) */}
                                <div className="social-links">
                                    <a href="https://www.facebook.com/skillcetera" target="_blank" rel="noopener noreferrer" className="social-btn">
                                        <img src={FbIcon} alt="Facebook" />
                                    </a>
                                    
                                    <a href="https://www.youtube.com/@skillcetera" target="_blank" rel="noopener noreferrer" className="social-btn">
                                        <img src={YtIcon} alt="YouTube"/>
                                    </a>
                                    
                                    <a href="https://www.tiktok.com/@skillcetera_club" target="_blank" rel="noopener noreferrer" className="social-btn">
                                        <img src={TiktokIcon} alt="TikTok" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Contact;