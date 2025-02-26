import React from 'react'
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AdminLayout from './Layout/AdminLayout'
import AuthLayout from './Layout/AuthLayout';
import Documentation from './Tuning/Pages/Documentation/Documentation';

import { hasRole } from './Utils/roleUtils';
import TestLogin from './TestLogin';
import TestLogout from './TestLogout';

const App = () => {

  const themeMode = useSelector((state) => state.themeMode.themeMode);
  const themeColor = useSelector((state) => state.theme.themeColor);
  const borderStroke = useSelector((state) => state.stroke.borderStroke);
  const boxLayout = useSelector((state) => state.boxLayout.boxLayout);
  const monochrome = useSelector((state) => state.monochrome.monochrome);
  const borderRadius = useSelector((state) => state.borderRadius.borderRadius);
  const iconColor = useSelector((state) => state.iconColor.iconColor);
  const gradientColor = useSelector((state) => state.gradientColor.gradientColor);
  const { isAuthenticated, roles } = useSelector((state) => state.auth);

  const location = useLocation();
  const pathname = location.pathname;

  const authTitleMapping = {
    "/signin": "Signin",
    "/signup": "Signup",
    "/password-reset": "PasswordReset",
    "/two-step": "TwoStep",
    "/lockscreen": "Lockscreen",
    "/maintenance": "Maintenance",
    "/404": "NoPage",
  };

  const isAuthRoute = authTitleMapping[pathname];

  if (!isAuthenticated && !isAuthRoute) {
    return <Navigate to="/signin" replace />;
  }


  if (pathname.startsWith('/hotels') && !hasRole(roles, 'admin')) {
    /* control paths by role
    used the hotels route for testing
    */
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <>
      {isAuthRoute ? (
        
        <AuthLayout />
      ) : pathname.startsWith('/docs') ? (
        <Documentation />
      ) : (
        <AdminLayout 
          themeMode={themeMode}
          themeColor={themeColor} 
          borderStroke={borderStroke} 
          boxLayout={boxLayout} 
          monochrome={monochrome}
          borderRadius={borderRadius}
          iconColor={iconColor}
          gradientColor={gradientColor}
        />
        
      )}
    </>
  )
}

export default App