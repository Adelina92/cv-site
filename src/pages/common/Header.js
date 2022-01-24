import styles from "./Header.module.css";
import { withContainer } from "../../utils/container";


export default function Header() {
  const navigateTo = (id) => {
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
  }
    return (
    <div className={withContainer(styles.root)}>
    <header className={styles.menu}>
     <a className={styles.logo}><img src="logo.png"/></a>
    <nav className={styles.navWrapper}>
      <ul className={styles.nav}>
          <li><a className={styles.menuButton} onClick={() => navigateTo("home")}>HOME</a></li>
          <li><a className={styles.menuButton} onClick={() => navigateTo("services")}>SERVICES</a></li>
          <li><a className={styles.menuButton} onClick={() => navigateTo("portfolio")}>PORTFOLIO</a></li>
          <li><a className={styles.menuButton} onClick={() => navigateTo("contact")}>CONTACT</a></li>
          <li><button className={styles.hireButton}>HIRE ME</button></li>
      </ul>
    </nav>
    </header>
    </div>
    );
}