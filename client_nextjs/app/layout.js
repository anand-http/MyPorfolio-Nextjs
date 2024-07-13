import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anand | Expertise in App & Web Development",
  description: "Welcome to my portfolio! I specialize in crafting exceptional digital experiences through bespoke web and app development solutions. With a passion for innovation and a keen eye for detail, I bring ideas to life, transforming concepts into functional and captivating digital products. Explore my portfolio to discover how I can help you achieve your digital goals with creativity and precision",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fevicon2.png" type="image/png" />
        <link rel="shortcut icon" href="/fevicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
