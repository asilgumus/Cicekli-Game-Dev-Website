import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata = {
    title: "Çiçekli Game Dev",
    description: "Deneyimlerin paylaşıldığı, haftalık derslerin verildiği ve game jam'lerin düzenlendiği özel bir oyun geliştirme topluluğu.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
            <body className={`${outfit.variable} ${inter.variable}`}>
                <Navbar />
                <main style={{ flex: 1 }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
