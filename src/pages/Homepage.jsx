// import { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import '../assets/css/Homepage.css';
import LogoSection from '../components/LogoSection';
import EventsSection from '../components/EventSection';
import GallerySection from '../components/GallerySection';
import SponsorsSection from '../components/SponsorSection';
import ContactSection from '../components/ContactSection';
import CoordinatorsSection from '../components/CoordinatorsSection';
// import Footer from '../components/Footer';

function Homepage() {

    return (
        <div className="homepage" data-spy="scroll" data-target="#navbar-example2" data-offset="0">
            <LogoSection />
            <EventsSection />
            <GallerySection />
            {/* <SponsorsSection /> */}
            <CoordinatorsSection />
            <ContactSection />
            {/* <Footer /> */}
        </div>
    );
}

export default Homepage;





// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
//     hidden: { opacity: 0, scale: 0 }
//   };

// const control = useAnimation();
//     const [ref, inView] = useInView();

//     useEffect(() => {
//         if (inView) {
//             control.start("visible");
//         } else {
//             control.start("hidden");
//         }
//     }, [control, inView]);