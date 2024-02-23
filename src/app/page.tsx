import React from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import HomePage from './components/HomePage'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <HomePage />
      </div>

    </main>
  )
}
