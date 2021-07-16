import styles from "./Header.module.css";

export default function Header() {
    const rootMixedStyles = [styles.root, "container"].join(" ");
    return <header className={rootMixedStyles}>
        <a className={styles.logo}>logo</a>
        <nav className={styles.navWrapper}>
            <ul className={styles.nav}>
                <li>Кнопка 1</li>
                <li>Кнопка 2</li>
                <li>Кнопка 3</li>
                <li>Кнопка 4</li>
                <li>Кнопка 5</li>
            </ul>
        </nav>
    </header>;
}