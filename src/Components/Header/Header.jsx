import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
    <section className={styles.HeaderBg}>
    <div className={styles.layer}>
          <div className="container w-75">
            <h1 className={`h2  mb-4 ${styles.HeaderTitle}`}>
              <span className={styles.pinkyText}>Lorem ipsum</span> dolor sit
              amet, consectetur adipiscing elit convallis consectetur feugiat
            </h1>
            <h2 className={`h5 ${styles.mutedText}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
              convallis consectetur feugiat
            </h2>
            <Link className={styles.mainBtn} to="/#">
              Shop Now
            </Link>
          </div>
        </div>
    </section>
    </>
  )
}
