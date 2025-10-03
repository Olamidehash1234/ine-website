import HeroSection from './hero';
import AboutSection from './about';
import Matters from './matters'
import Get from './get'
import Works from './works';
import Journey from './journey'

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <Works />
        <Matters />
        <Get />
        <Journey />
    </div>
  );
};

export default Homepage;
