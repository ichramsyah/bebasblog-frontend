// src/components/Navbar.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useState } from 'react'; // Impor useState

const NavbarMain = () => {
  const { user, logout } = useAuthStore((state) => ({
    user: state.user,
    logout: state.logout,
  }));
  const isLoggedIn = !!user;
  const navigate = useNavigate();

  // State untuk mengontrol visibilitas menu di mobile
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Tutup menu setelah link diklik di mobile
  };

  return (
    <nav className="fixed w-full backdrop-blur-[20px] bg-white/20 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to={isLoggedIn ? '/feed' : '/'} className="text-2xl text-text-dark font-bold">
              Bebas<span className="text-[#AE70FF]">Blog</span>
            </Link>
          </div>

          {/* Tombol Hamburger di Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-primary focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>

          {/* Menu Navigasi Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link to="/feed" className="text-text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all">
                  Feed
                </Link>
                <Link to="/create-post" className="text-primary bg-secondary hover:bg-primary hover:text-white px-3 py-2 rounded-sm text-sm font-medium transition-all">
                  + Create Post
                </Link>
                <Link to={`/profile/${user?.username}`} className="flex items-center space-x-2">
                  {user?.profile_picture_url ? (
                    <img src={user.profile_picture_url} alt={user.username || 'Profil Pengguna'} className="w-8 h-8 rounded-full object-cover border-2 border-primary" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">{user?.username ? user.username.charAt(0).toUpperCase() : 'U'}</div>
                  )}
                </Link>
                <button onClick={handleLogout} className="bg-primary text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-opacity-90">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-primary bg-secondary hover:bg-primary hover:text-white px-3 py-2 rounded-sm text-sm font-medium transition-all">
                  Sign In
                </Link>
                <Link to="/register" className="bg-primary text-white hover:bg-secondary hover:text-primary px-3 py-2 rounded-sm text-sm font-medium transition-all">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Menu Navigasi Mobile (Tampil ketika isOpen true) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} px-2 pt-2 pb-3 space-y-1 sm:px-3`}>
        {isLoggedIn ? (
          <>
            <Link to="/feed" onClick={handleLinkClick} className="text-text-dark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Feed
            </Link>
            <Link to="/create-post" onClick={handleLinkClick} className="text-primary bg-secondary hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              + Create Post
            </Link>
            <Link to={`/profile/${user?.username}`} onClick={handleLinkClick} className="text-text-dark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Profil ({user?.username})
            </Link>
            <button onClick={handleLogout} className="text-left w-full bg-primary text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-opacity-90">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={handleLinkClick} className="text-primary bg-secondary hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Sign In
            </Link>
            <Link to="/register" onClick={handleLinkClick} className="bg-primary text-white hover:bg-secondary hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavbarMain;
