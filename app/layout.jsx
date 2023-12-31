import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "HOME | Firefly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
