import Hero from "./HomeHero/Hero.jsx";
import AboutSection from "./HomeAbout/AboutSection.jsx";
import WhyJoin from "./HomeWhy/WhyJoin.jsx";
import Number from "./HomeNumber/Number.jsx";
import Register from "./HomeRegister/Register.jsx";
function Home() {
  return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '0px'}}>
            <Hero />
            <WhyJoin />
            <AboutSection />
            <Number />
            <Register />
        </div>
    
  );
}

export default Home;
