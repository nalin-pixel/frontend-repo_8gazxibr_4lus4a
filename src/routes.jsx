import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import DashboardLayout from './pages/Dashboard';
import Sources from './pages/dashboard/Sources';
import Articles from './pages/dashboard/Articles';
import Summaries from './pages/dashboard/Summaries';
import Notifications from './pages/dashboard/Notifications';
import Settings from './pages/dashboard/Settings';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';

export default function AppRoutes(){
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="features" element={<Features />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="contact" element={<Contact />} />

      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="forgot-password" element={<ForgotPassword />} />

      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard/sources" replace />} />
        <Route path="sources" element={<Sources />} />
        <Route path="articles" element={<Articles />} />
        <Route path="summaries" element={<Summaries />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
