import { Route, Routes } from 'react-router';


import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import SignOnPage from '../pages/SignOn';
import ForgetPasswordPage from '../pages/ForgetPassword';
import NotFound from '../pages/404';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<SignOnPage />} />
      <Route path="forget" element={<ForgetPasswordPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
