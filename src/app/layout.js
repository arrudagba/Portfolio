import "./styles/globals.css";
import { ThemeProvider } from './context/ThemeContext';

export const metadata = {
  title: "arrudagba",
  description: "Software Engineer.",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider> 
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}