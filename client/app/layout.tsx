'use client';
import './globals.css';
import AuthProvider from './(hooks)/AuthProvider';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
};

export default RootLayout;
