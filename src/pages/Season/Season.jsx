import React from "react";
import { Link } from "react-router-dom"; // Import thẻ Link để chuyển trang
import "./Season.css";

// TODO: Đổi đường dẫn thành ảnh thật của bạn sau
import img2023 from "../../assets/picture/Season/ESC2026.jpg";
import img2026 from "../../assets/picture/Season/ESC2026.jpg";
import img2025 from "../../assets/picture/Season/ESC2026.jpg";

const Season = () => {
    return (
        <div className="season-container">
            
            {/* THẺ BÊN TRÁI - ESC 2023 */}
            <div className="season-card card-side">
                <div className="season-image-wrapper">
                    <img src={img2023} alt="ESC 2023" />
                </div>
                <div className="season-content">
                    <h3>ESC 2023</h3>
                    <div className="season-actions">
                        <span className="status-badge completed">Completed</span>
                        {/* Dùng div tĩnh cho NO VIEW, không có link */}
                        <div className="view-btn disabled">NO VIEW</div>
                    </div>
                </div>
            </div>

            {/* THẺ Ở GIỮA (MAIN) - ESC 2026 */}
            <div className="season-card card-main">
                <div className="season-image-wrapper">
                    <img src={img2026} alt="ESC 2026" />
                </div>
                <div className="season-content">
                    <h3>ESC 2026</h3>
                    <div className="season-actions">
                        <span className="status-badge inprogress">In progress</span>
                        {/* Dùng Link để chuyển sang route /currentSeason */}
                        <Link to="/currentSeason" className="view-btn">View &rarr;</Link>
                    </div>
                </div>
            </div>

            {/* THẺ BÊN PHẢI - ESC 2025 */}
            <div className="season-card card-side">
                <div className="season-image-wrapper">
                    <img src={img2025} alt="ESC 2025" />
                </div>
                <div className="season-content">
                    <h3>ESC 2025</h3>
                    <div className="season-actions">
                        <span className="status-badge completed">Completed</span>
                        {/* Dùng div tĩnh cho NO VIEW, không có link */}
                        <div className="view-btn disabled">NO VIEW</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Season;