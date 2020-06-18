import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.scss'
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {

    return (
        <header>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <input className={styles.navSearch} type="text" placeholder="Search"/>
                    </li>
                    <li>
                        <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/">About me</Link>
                    </li>
                    <li>
                        <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/">Collective philosophy</Link>
                    </li>
                    <li>
                        <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/">Contact</Link>
                    </li>
                    <li>
                        <button className={styles.navButton}>SUBSCRIBE</button>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header