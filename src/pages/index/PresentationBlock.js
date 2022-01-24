import styles from "./PresentationBlock.module.css";
import { withContainer } from "../../utils/container";
import Header from "../common/Header";

export default function PresentationBlock() {
  return (
    <>
    <Header/>
    <div id="home" className={styles.wrapper}>

      <div className={withContainer(styles.root)}>
        <div className={styles.info}>
          <h1>Michael Clarke</h1>
          <p>
          Hello, I'm Michael Clarke, ui/ux designer based in dh wjd nw kldowk kenfjkk lgkpomeirn bkmodl kiorpgkw bbgh kjhg uhfio3 rehrfoe iehfui rfhe uih iubhj jhb
          </p>
          <button>DOWNLOAD CV</button>
       </div>
       <div className={styles.image}><img src="/center-image-person.png" /></div>
    </div>
    </div>
    </>
  );
}