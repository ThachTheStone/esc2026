import React from "react";
import "./CurrentSeason.css";

// Import các component con theo đúng thư mục của bạn
import CSHero from "./CSHero/CSHero";
import CSTimeline from "./CSTimeline/CSTimeline";
import CSOrganizer from "./CSOrganizer/CSOrganizer";
import CSJudge from "./CSJudge/CSJudge";
import CSPrize from "./CSPrize/CSPrize";
import CSPartner from "./CSPartner/CSPartner";
import CSRegister from "./CSRegister/CSRegister";

const CurrentSeason = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <CSHero />
            <CSTimeline />
            <CSJudge />
            <CSPrize />
            <CSOrganizer />
            <CSPartner />
            <CSRegister />
        </div>
    );
};

export default CurrentSeason;