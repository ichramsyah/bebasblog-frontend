import { Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import FeedPage from './pages/FeedPage';
import AuthLayout from './layouts/AuthLayouts';
import MainLayout from './layouts/MainLayout';
import LandingLayout from './layouts/LandingLaout';
import LandingPage from './pages/LandingPage';

const ProfilePage = () => <div>Profile Page</div>;

function App() {
  return (
    <div className="bg-background text-text-dark min-h-screen">
      <Routes>
        {/* Landing */}
        <Route
          path="/"
          element={
            <LandingLayout>
              <LandingPage />
            </LandingLayout>
          }
        />

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
