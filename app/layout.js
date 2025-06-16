import { FavoritesProvider } from "./context/favoritesContext";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "포켓몬 도감",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <FavoritesProvider>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">홈으로</Link>
            <Link href="/favorites">❤️ 찜 목록</Link>
          </nav>
          <main>{children}</main>
        </FavoritesProvider>
      </body>
    </html>
  );
}

