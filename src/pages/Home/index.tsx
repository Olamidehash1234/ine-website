import HeroSection from './hero';
import AboutSection from './about';
import Matters from './matters'
import Get from './get'
import Works from './works';
import Journey from './journey'
// import Testimonials from './testimonial';
import Pricing from './pricing'
import Action from './action';

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <Works />
        <Matters />
        <Get />
        <Journey />
        {/* <Testimonials /> */}
        <Pricing />
        <Action />
    </div>
  );
};

export default Homepage;
