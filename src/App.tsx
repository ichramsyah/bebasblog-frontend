import { Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import FeedPage from './pages/FeedPage';
import AuthLayout from './layouts/AuthLayouts';
import MainLayout from './layouts/MainLayout';

const LandingPage = () => <div>Landing Page</div>;
const ProfilePage = () => <div>Profile Page</div>;

function App() {
  return (
    <div className="bg-background text-text-dark min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Main App Pages */}
        <Route
          path="/feed"
          element={
            <MainLayout>
              <FeedPage />
            </MainLayout>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <MainLayout>
              <ProfilePage />
            </MainLayout>
          }
        />

        {/* Auth Pages */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <RegisterPage />
            </AuthLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
