import React from "react";
import "./CSHero.css";

// TODO: Import ảnh background thật của bạn vào đây
import HeroBg from "../../../../assets/picture/Season/BG_CSHero.png"; 

const CSHero = () => {
    return (
        <div 
            className="cs-hero-container"
            /* Chèn ảnh nền trực tiếp qua style để tiện thay đổi */
            style={{ backgroundImage: `url(${HeroBg})` }}
        >
            {/* Lớp phủ làm tối background */}
            <div className="cs-hero-overlay"></div>

            {/* Nội dung chính nằm trên lớp kính/nền */}
            <div className="cs-hero-content">
                
                {/* 1. KHU VỰC TITLE */}
                <div className="cs-hero-title">
                    <span className="text-white">ESC</span>
                    <span className="text-blue">2026</span>
                </div>

                {/* 2. CHỮ DƯỚI TITLE */}
                <div className="cs-hero-subtitle">
                    FIND YOUR FLOW
                </div>

                {/* 3. KHU VỰC BUTTONS (GLASSMORPHISM) */}
                <div className="cs-hero-buttons">
                    
                    <a 
                        href="https://forms.gle/29UFPSqUqQGGKg7Q8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cs-glass-btn action-btn"
                        style={{ textDecoration: 'none' }} /* Xóa gạch chân mặc định của link */
                    >
                        Register now &rarr;
                    </a>
                </div>

            </div>
        </div>
    );
};

export default CSHero;