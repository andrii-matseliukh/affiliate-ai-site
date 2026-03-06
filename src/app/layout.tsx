import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Affiliate AI Site',
  description: 'A site for affiliates to boost their earnings.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
