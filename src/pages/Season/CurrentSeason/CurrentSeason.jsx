import React from 'react';
import Register from "../../Home/HomeRegister/Register.jsx";
import blank from "../../../assets/picture/horizontalBlank.jpg"
import "./CurrentSeason.css";


const CurrentSeason = () => {
    return (
        <div className="esc-container">
            <header className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">ESC - 2026</h1>
                    <p className="hero-subtitle">Theme: Find Your Flow</p>
                    <div className="hero-buttons">
                        <button className="btn-status">In progress</button>
                        <a href="https://forms.gle/29UFPSqUqQGGKg7Q8" className="btn-register-top" >
                            Register now <span>→</span>
                        </a>
                        
                    </div>
                </div>
            </header>
            <section className="section theme-section">
                <h2 className="section-title">Theme</h2>
                <p className="theme-desc">A short explanation of what ESC theme is in this particular</p>
            </section>
            <section className="section timeline-section">
                <h2 className="section-title">Timeline</h2>
                <div className="timeline-wrapper">
                    <div className="timeline-line">
                        <div className="timeline-dot active"></div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-image-placeholder"></div>
                        <div className="timeline-text">
                            <h3>Preliminary round</h3>
                            <p className="timeline-time">Time: xx/yy - xx/yy</p>
                            <p className="timeline-body">
                                Nowadays, when society is developing strongly and constantly changing,
                                people are still living with "standards" - invisible rules of society, culture...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section prizes-section">
                <h2 className="section-title">Prizes</h2>
                <div className="prizes-grid">
                    <div className="prize-card rank-2">
                        <div className="prize-icon"></div>
                        <div className="prize-info"></div>
                    </div>
                    <div className="prize-card rank-1">
                        <div className="prize-icon"></div>
                        <div className="prize-info"></div>
                    </div>
                    <div className="prize-card rank-3">
                        <div className="prize-icon"></div>
                        <div className="prize-info"></div>
                    </div>
                </div>
            </section>
            <section className="section judge-section">
                <h2 className="section-title">Judge</h2>
                <div className="judge-grid">
                    <div className="judge-card small">
                        <img src={blank} alt="Judge" className="judge-img" />
                    </div>
                    <div className="judge-card large">
                        <img src={blank} alt="Judge" className="judge-img" />
                    </div>
                    <div className="judge-card small">
                        <img src={blank} alt="Judge" className="judge-img" />
                    </div>
                </div>
            </section>
            <section className="section partner-section">
                <h2 className="section-title">Partner & Organizer</h2>
                <div className="partner-grid">
                    <div className="partner-logo"></div>
                    <div className="partner-logo"></div>
                    <div className="partner-logo"></div>
                    <div className="partner-logo"></div>
                </div>
            </section>
            <Register/>
        </div>
    );
};

export default CurrentSeason;