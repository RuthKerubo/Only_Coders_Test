import "./global.css";
import { NextAuthProvider } from "./providers";

export const metadata = {
  title: "News Feed",
  description: "Your trusted source",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
