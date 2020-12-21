//navbar.js

import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const NavBar = () => (
  <nav className={styles.navigation}>
  
      <Link href="/" >
        <a>Home</a>
      </Link>
 
      <Link href="/news">
        <a >News</a>
      </Link>

      <Link href="/news/science">
        <a >Science</a>
      </Link>

      <Link href="/news/business">
        <a >Business</a>
      </Link>

      <Link href="/news/entertainment">
        <a >Entertainment</a>
      </Link>

      <Link href="/news/sports">
        <a >Sports</a>
      </Link>

  </nav>
)

export default NavBar