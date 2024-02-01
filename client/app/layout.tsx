'use client';
import './globals.css';

const RootLayout: React.FC = ({ children }) => {
  // export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
