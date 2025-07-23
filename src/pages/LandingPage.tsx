import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-background mt-20 h-[1000vh] md:px-10 px-6">
      {/* Hero Section */}
      <section id="hero">
        <div className="w-full flex flex-wrap md:flex-nowrap gap-10">
          <div className="md:w-1/2 w-full">
            <div className="flex items-center justify-between px-6 py-1 bg-gradient-to-r from-[#D8F998] to-[#7BE5B1] rounded-full md:w-fit w-full">
              <p className="text-sm font-medium text-black">Powered by Ichramsyah</p>
            </div>
            <h1 className="md:text-[60px] text-5xl font-bold text-h1 mt-4 md:leading-[80px] leading-[55px]">Share Your Moments with the World!</h1>
            <p className="md:text-base text-h1 md:mt-5 mt-7">Bebasblog is a social media platform that lets you share moments with pictures, likes, and comments. Built with love using the latest technology for a seamless experience.</p>
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

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-[60px] font-bold text-gray-800">Bebasblog's Featured Features</h1>
            <p className="mt-4 text-lg text-gray-600">Discover the powerful tools that make blogging effortless and enjoyable.</p>
          </div>

          {/* Daftar Kartu Fitur */}
          <div className="space-y-16">
            {/* Kartu Fitur Pertama */}
            <div className="w-full bg-[#F0FDF4] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              {/* Kolom Teks */}
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Flexible & Secure Authentication</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Register and log in to Bebasblog the way you prefer. We support registration and login via secure email and password, as well as instant login with Google OAuth. A fast and secure process to start your blogging journey.
                </p>
              </div>
              {/* Kolom Gambar */}
              <div className="md:w-1/2">
                <img src="/images/hijau.webp" alt="Authentication Feature" className="w-full h-auto rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Kartu Fitur Kedua (dengan tata letak terbalik) */}
            <div className="w-full bg-[#F6FEE6] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              {/* Kolom Teks */}
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Complete Blog Post Management</h2>
                <p className="text-gray-600 text-lg leading-relaxed">Complete control is yours. Create, read, update, and delete your blog posts with an intuitive interface. Focus on your story, and we'll take care of the rest.</p>
              </div>
              {/* Kolom Gambar */}
              <div className="md:w-1/2">
                <img src="/images/lime.webp" alt="Blog Management Feature" className="w-full h-auto rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Kartu Fitur ketiga */}
            <div className="w-full bg-[#FFFAF1] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              {/* Kolom Teks */}
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Integrated Media & Image Upload</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Bring your posts to life with stunning visuals. With Cloudinary integration, you can easily upload and manage images, ensuring your media is securely stored and optimally displayed.
                </p>
              </div>
              {/* Kolom Gambar */}
              <div className="md:w-1/2">
                <img src="/images/oren.webp" alt="Authentication Feature" className="w-full h-auto rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Kartu Fitur keempat */}
            <div className="w-full bg-[#F1EEFF] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              {/* Kolom Teks */}
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">User Profile Personalization</h2>
                <p className="text-gray-600 text-lg leading-relaxed">Showcase your unique identity. Update your username, password, bio, and profile picture at any time. Customize your profile so readers can get to know you better.</p>
              </div>
              {/* Kolom Gambar */}
              <div className="md:w-1/2">
                <img src="/images/ungu.webp" alt="Authentication Feature" className="w-full h-auto rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
