// src/components/Navbar.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const NavbarMain = () => {
  const { isLoggedIn, user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed w-full backdrop-blur-[10px] bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to={isLoggedIn ? '/feed' : '/'} className="text-2xl text-text-dark font-bold">
              Bebas<span className="text-[#AE70FF]">Blog</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link to="/feed" className="text-text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Feed
                </Link>
                {/* Nanti kita buat halaman create post */}
                <Link to="/post/create" className="text-text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Buat Post
                </Link>
                <Link to={`/profile/${user?.username}`} className="text-text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Profil
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
    </nav>
  );
};

export default NavbarMain;
