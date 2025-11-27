import React from 'react';
import styles from './page.module.css';
import { Heart, Code, Zap } from 'lucide-react';

export default function About() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Çiçekli Game Dev Hakkında</h1>
                <p className={styles.subtitle}>
                    Biz, oyunun geleceğini inşa eden tutkulu oyun geliştiricileri, tasarımcıları ve sanatçılarından oluşan bir grubuz.
                </p>
            </header>

            <section className={styles.section}>
                <div className={styles.content}>
                    <h2>Misyonumuz</h2>
                    <p>
                        2024'te kurulan Çiçekli Game Dev, arkadaşların oyun geliştirme süreçlerini paylaşmaları için küçük bir Discord sunucusu olarak başladı.
                        Bugün, oyun geliştirme zanaatında ustalaşmaya adanmış canlı ve özel bir topluluğa dönüştü.
                    </p>
                    <p>
                        Yaparak öğrenmeye inanıyoruz. Bu yüzden haftalık dersler, aylık meydan okumalar ve üç aylık game jam'ler düzenliyoruz.
                        Amacımız, üyelerin deneyebileceği, başarısız olabileceği ve birlikte başarabileceği güvenli, destekleyici bir ortam sağlamaktır.
                    </p>
                </div>
            </section>

            <section className={styles.values}>
                <h2 className={styles.valuesTitle}>Değerlerimiz</h2>
                <div className={styles.grid}>
                    <div className={styles.valueCard}>
                        <Heart className={styles.icon} size={40} />
                        <h3>Önce Topluluk</h3>
                        <p>Birbirimizi destekliyoruz. Hiçbir soru çok basit, hiçbir hata çok karmaşık değildir. Birlikte büyüyoruz.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <Code className={styles.icon} size={40} />
                        <h3>Ustalık</h3>
                        <p>Kodumuzla ve sanatımızla gurur duyuyoruz. Her pikselde ve her kod satırında mükemmellik için çabalıyoruz.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <Zap className={styles.icon} size={40} />
                        <h3>Yaratıcılık</h3>
                        <p>Çılgın fikirleri ve deneysel oynanışı teşvik ediyoruz. İnovasyon, risk aldığınızda gerçekleşir.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
