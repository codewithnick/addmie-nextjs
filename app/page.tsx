// pages/index.js
import Header from '@/components/Header';
import styles from '../styles/Home.module.css';
import Signin from '@/components/Signin';
import Image from 'next/image';
import landingImage from '@/public/landing.webp'
export default function Home() {
  return (
    <div className={styles.container}>
     <Header></Header>
      <main className={styles.main}>
        <div className={styles.left}>
          <Image src={landingImage} alt="" height={500} width={500}></Image>
        </div>
        <div className={styles.right}>
          <Signin></Signin>          
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 ADDMIE. All rights reserved.</p>
      </footer>
    </div>
  );
}
