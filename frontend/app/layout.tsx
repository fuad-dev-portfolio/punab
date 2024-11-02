// app/layout.tsx
import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Authentication App',
  description: 'Signup and Signin functionality',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
