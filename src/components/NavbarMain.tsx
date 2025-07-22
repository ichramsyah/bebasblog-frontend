// src/components/Navbar.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore'; // Pastikan importnya default atau named sesuai export Anda

const NavbarMain = () => {
  const { user, logout } = useAuthStore((state) => ({
    user: state.user,
    logout: state.logout,
  }));

  // Cek apakah user sudah login
  const isLoggedIn = !!user; // Jika user object tidak null, berarti login

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed w-full backdrop-blur-[20px] bg-white/70 z-30">
      {' '}
      {/* Tambahkan z-50 agar navbar selalu di atas */}
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
                <Link to="/feed" className="text-text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all">
                  Feed
                </Link>
                <Link to="/post/create" className="text-primary bg-secondary hover:bg-primary hover:text-white px-3 py-2 rounded-sm text-sm font-medium transition-all">
                  + Create Post
                </Link>
                {/* Ganti teks "Profil" dengan gambar profil */}
                <Link to={`/profile/${user?.username}`} className="flex items-center space-x-2">
                  {user?.profile_picture_url ? (
                    <img
                      src={user.profile_picture_url}
                      alt={user.username || 'Profil Pengguna'}
                      className="w-8 h-8 rounded-full object-cover border-2 border-primary" // Tailwind classes untuk styling gambar
                    />
                  ) : (
                    // Fallback jika tidak ada foto profil (misal, ikon default atau inisial)
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
    </nav>
  );
};

export default NavbarMain;
