import React from 'react'
import styles from './layout.module.css'

function Layout({children}) {
  return (
    <>
    <header className={styles.header}><h1>Book App</h1>
    <p>
        <a>BtotoStart</a> | react.js
    </p>
    </header>

    {children}

    <footer className={styles.footer}><p>Creat by me :))</p> </footer>
    </>
  )
}

export default Layout