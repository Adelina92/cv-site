import styles from "./Footer.module.css";

export function Icon(props) {
  const {src} = props;
  return (
      <a className={styles.icon}>
          <img src={src}/>
      </a>
  )
}

export default function Footer() {
    return (
      <div className={styles.root}>
          <h4>Stay Connected With Me</h4>
          <div className={styles.socialMedia}>
            <Icon src="./twitter-icon.png" href="#"/>
            <Icon src="./facebook-icon.png" href="#"/>
            <Icon src="./vimeo-icon.png" href="#"/>
            <Icon src="./tumbler-icon.png" href="#"/>
            <Icon src="./pinterest-icon.png" href="#"/>
          </div>
      </div>
    );
}