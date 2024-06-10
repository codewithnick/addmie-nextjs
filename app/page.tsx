// pages/index.js
import Header from '@/components/Header';
import styles from '../styles/Home.module.css';
import Signin from '@/components/Signin';

export default function Home() {
  return (
    <div className={styles.container}>
     <Header></Header>
      <main className={styles.main}>
        <div className={styles.left}>
          <img src="landing.webp" alt="Phone Mockup" className={styles.phoneImage} />
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
