'use client';
import { useEffect } from 'react';
import "./globals.css";
import "../public/assets/style.css";
import "../public/assets/responsive.css";
// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';





export default function RootLayout({ children }) {


  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
