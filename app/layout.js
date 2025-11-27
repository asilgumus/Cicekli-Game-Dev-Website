import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
    weight: ["400", "500", "600"],
});

export const metadata = {
    title: "Çiçekli Game Dev",
    description: "Deneyimlerin paylaşıldığı, haftalık derslerin verildiği ve game jam'lerin düzenlendiği özel bir oyun geliştirme topluluğu.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
            <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
                <Navbar />
                <main style={{ flex: 1 }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
