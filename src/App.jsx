import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAssistantWidget from './components/AIAssistantWidget';
import RouteTransition from './components/RouteTransition';
import { UIProvider } from './context/UIContext';

// Pages
import HomePage from './pages/Home';
import FeaturesPage from './pages/Features';
import PricingPage from './pages/Pricing';
import ContactPage from './pages/Contact';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import ForgotPasswordPage from './pages/ForgotPassword';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import DashboardArticles from './pages/dashboard/Articles';
import DashboardSources from './pages/dashboard/Sources';
import DashboardSummaries from './pages/dashboard/Summaries';
import DashboardNotifications from './pages/dashboard/Notifications';
import DashboardSettings from './pages/dashboard/Settings';

export default function App() {
  return (
    <UIProvider>
      <div className="min-h-screen bg-black text-white antialiased">
        <BrowserRouter>
          <Navbar />
          <main className="min-h-[70vh]">
            <Routes>
              <Route element={<RouteTransition />}> 
                <Route path="/" element={<HomePage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route index element={<DashboardArticles />} />
                  <Route path="articles" element={<DashboardArticles />} />
                  <Route path="sources" element={<DashboardSources />} />
                  <Route path="summaries" element={<DashboardSummaries />} />
                  <Route path="notifications" element={<DashboardNotifications />} />
                  <Route path="settings" element={<DashboardSettings />} />
                </Route>
              </Route>
            </Routes>
          </main>
          <Footer />
          <AIAssistantWidget />
        </BrowserRouter>
      </div>
    </UIProvider>
  );
}
