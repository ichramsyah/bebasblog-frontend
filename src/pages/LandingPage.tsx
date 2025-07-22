import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-background mt-20 h-[1000vh] md:px-10 px-6">
      {/* Hero Section */}
      <section id="hero">
        <div className="w-full flex flex-wrap md:flex-nowrap gap-10">
          <div className="md:w-1/2 w-full">
            <div className="flex items-center justify-between px-6 py-1 bg-gradient-to-r from-[#D8F998] to-[#7BE5B1] rounded-full w-fit">
              <p className="text-sm font-medium text-dark">Powered by Ichramsyah</p>
            </div>
            <h1 className="md:text-5xl text-4xl font-bold font-dark mt-4">Share Your Moments with the World!</h1>
            <p className="text-base text-dark mt-5">Bebasblog is a social media platform that lets you share moments with pictures, likes, and comments. Built with love using the latest technology for a seamless experience.</p>
            <div className="flex items-center mt-6 space-x-4">
              <Link to="/feed" className="px-6 py-2 text-sm font-medium text-white bg-primary hover:bg-secondary hover:text-primary transition-all duration-200 rounded-sm">
                Get Started
              </Link>
              <Link to="/feed" className="px-6 py-2 text-sm font-medium text-primary bg-secondary hover:bg-primary transition-all duration-200 hover:text-white rounded-sm">
                Explore Post
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex items-center">
            <img src="/images/hero.png" className="w-full h-auto object-cover" alt="Hero" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
