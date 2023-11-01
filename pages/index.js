// this code assembles different sections of a web page, including a navigation bar, hero, about, explore, get started, world, insights, feedback, and a footer, creating a complete web page layout

// COMPONENT IMPORTS
import { Footer, Navbar } from '../components';
// SECTION IMPORTS
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
