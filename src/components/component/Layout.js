// components/Layout.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');

    if (!token && router.pathname !== '/login') {
      // If token doesn't exist and not on login page, redirect to login
      router.push('/signUp');
    }
  }, []);

  return <>{children}</>;
};

export default Layout;
