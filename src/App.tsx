import { Routes, Route } from 'react-router-dom';
import './App.css';

const LandingPage = () => <div>Landing Page</div>;
const FeedPage = () => <div>Feed Page</div>;
const ProfilePage = () => <div>Profile Page</div>;
const LoginPage = () => <div>Login Page</div>;
const RegisterPage = () => <div>Register Page</div>;

function App() {
  return (
    <div className="bg-background text-text-dark min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
