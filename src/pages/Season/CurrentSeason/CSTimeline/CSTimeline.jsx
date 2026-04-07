import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CSTimeline.css";

// DỮ LIỆU CỦA 3 VÒNG THI (Được bóc tách chính xác từ ảnh của bạn)
const timelineData = [
    {
        id: 0,
        date: "February 25, 2026 - March 25, 2026",
        dateWidth: "418px",
        roundName: "Preliminary Round",
        roundTheme: "DRIFT",
        title: "Preliminary Round: DRIFT",
        content: (
            <>
                <h3 className="inner-gradient-title">FORMAT</h3>
                <p>
                    Participants register and submit their entries via the application form published on the competition's fanpage and official website. The topic is based on the theme "Find Your Flow," allowing contestants full creative freedom to develop their speeches within the competition's theme.
                </p>
                <h3 className="inner-gradient-title">REQUIREMENTS</h3>
                <ul>
                    <li><strong>Format:</strong> The video must be recorded in a 16:9 (landscape) ratio with a minimum resolution of 720p. The video image must be clear, and the contestant's appearance must be fully visible on screen.</li>
                    <li><strong>Duration:</strong> Each submitted video must not exceed 5 minutes.</li>
                    <li><strong>Content:</strong> Find Your Flow is the overarching theme of the competition. However, contestants are allowed to creatively develop their own speech content, provided that no more than 70% of the content deviates from the competition theme. The topic must be appropriately developed and must not include content related to racial or regional discrimination, politics, religion, or beliefs.</li>
                    <li><strong>Attire:</strong> Contestants appearing in the video must wear neat and appropriate attire.</li>
                </ul>
            </>
        )
    },
    {
        id: 1,
        date: "March 25, 2026 - April 25, 2026",
        dateWidth: "418px",
        roundName: "Semi- Final Round",
        roundTheme: "ALIGN",
        title: "Semi-Final Round: ALIGN",
        content: (
            <>
                <h3 className="inner-gradient-title">FORMAT</h3>
                <p>
                    The Top 30 outstanding entries advancing from the Preliminary Round will compete in the Semi-Final Round. In this stage, the Top 30 contestants will deliver their speeches based on a given topic (to be announced after qualifying for the round). Their performances will be professionally recorded and published on social media platforms.
                </p>
                <h3 className="inner-gradient-title">IMPLEMENTATION:</h3>
                <ul>
                    <li>All Semi-Final entries will be professionally filmed and produced by the Competition Organizing Committee.</li>
                    <li><strong>Tentative Shooting Day:</strong> April 12, 2026</li>
                    <li><strong>Attire:</strong> FPT University Ho Chi Minh City Campus</li>
                    <li><strong>Scoring Method:</strong> 30% audience votes on social media; 70% scores from the Judging Panel</li>
                </ul>
            </>
        )
    },
    {
        id: 2,
        date: "May 10, 2026",
        dateWidth: "252px", /* Nút dưới cùng ngắn hơn */
        roundName: "Grand Final Round",
        roundTheme: "FLOW",
        title: "Grand-Final Round: FLOW",
        content: (
            <>
                <h3 className="inner-gradient-title">FORMAT</h3>
                <p>
                    The Top 10 outstanding contestants advancing from the Semi-Final Round will compete in the Final Round.
                </p>
                <h3 className="inner-gradient-title">FINAL ROUND CONTENT:</h3>
                <ul>
                    <li>Prepared Speech Round for the Top 10</li>
                    <li>Impromptu Speaking Round (topic draw or image-based prompt) for the Top 5</li>
                    <li><strong>Attire:</strong> FPT University Ho Chi Minh City Campus</li>
                </ul>
            </>
        )
    }
];

const CSTimeline = () => {
    // State lưu trữ vòng thi đang được chọn (Mặc định là 0 - Preliminary)
    const [activeRound, setActiveRound] = useState(0);

    return (
        <div className="cs-timeline-container">
            
            {/* 1. TITLE TỔNG */}
            <motion.h2 
                className="cs-timeline-main-title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8 }}
            >
                TIMELINE
            </motion.h2>

            {/* 2. KHU VỰC TRỤC THỜI GIAN (TOP) */}
            <div className="timeline-navigator">
                {timelineData.map((item, index) => (
                    <div className="timeline-row" key={item.id}>
                        
                        {/* Cột trái: Ngày tháng (Glass Texture) */}
                        <div className="timeline-date-col">
                            <div 
                                className="timeline-date-glass"
                                style={{ width: item.dateWidth }}
                            >
                                {item.date}
                            </div>
                        </div>

                        {/* Cột giữa: Đường thẳng và Dấu chấm */}
                        <div className="timeline-center-col">
                            {/* Dấu chấm sẽ to lên nếu index bằng activeRound */}
                            <div className={`timeline-dot ${activeRound === index ? 'active' : ''}`}></div>
                            {/* Khóa đường kẻ nối ở điểm cuối cùng */}
                            {index !== timelineData.length - 1 && <div className="timeline-line"></div>}
                        </div>

                        {/* Cột phải: Tên Vòng thi (Có thể click) */}
                        <div className="timeline-name-col">
                            <div 
                                className={`timeline-name-text ${activeRound === index ? 'active' : ''}`}
                                onClick={() => setActiveRound(index)}
                            >
                                <h4>{item.roundName}</h4>
                                <p>{item.roundTheme}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* 3. KHU VỰC NỘI DUNG CHI TIẾT DƯỚI (BOTTOM) */}
            <div className="timeline-details-section">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeRound}
                        className="timeline-details-wrapper"
                        initial={{ opacity: 0, x: 100 }} /* Bắt đầu từ bên phải */
                        animate={{ opacity: 1, x: 0 }}   /* Trượt vào giữa */
                        exit={{ opacity: 0, x: -100 }}   /* Trượt biến mất sang trái */
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {/* Tiêu đề của Vòng */}
                        <h2 className="details-main-title">{timelineData[activeRound].title}</h2>
                        
                        {/* Khung nội dung Glassmorphism */}
                        <div className="details-glass-box">
                            {timelineData[activeRound].content}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
    );
};

export default CSTimeline;