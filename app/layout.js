<<<<<<< HEAD
import { Space_Grotesk, Inter } from "next/font/google";
=======
import { Outfit, Inter } from "next/font/google";
>>>>>>> a271d8d5cec5f7504332e91aa5f8619fd93e98d2
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

<<<<<<< HEAD
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
    weight: ["400", "500", "600", "700"],
=======
const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
>>>>>>> a271d8d5cec5f7504332e91aa5f8619fd93e98d2
});

const inter = Inter({
    subsets: ["latin"],
<<<<<<< HEAD
    variable: "--font-body",
    display: "swap",
    weight: ["400", "500", "600"],
=======
    variable: "--font-inter",
    display: "swap",
>>>>>>> a271d8d5cec5f7504332e91aa5f8619fd93e98d2
});

export const metadata = {
    title: "Çiçekli Game Dev",
    description: "Deneyimlerin paylaşıldığı, haftalık derslerin verildiği ve game jam'lerin düzenlendiği özel bir oyun geliştirme topluluğu.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
<<<<<<< HEAD
            <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
=======
            <body className={`${outfit.variable} ${inter.variable}`}>
>>>>>>> a271d8d5cec5f7504332e91aa5f8619fd93e98d2
                <Navbar />
                <main style={{ flex: 1 }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
