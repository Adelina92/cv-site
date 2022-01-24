import styles from "./PortfolioBlock.module.css";
import { withContainer } from "../../utils/container";
import { cn } from "../../utils/styles";

export default function PresentationBlock() {
  return (
    <div id="portfolio" className={withContainer(styles.root)}>
        <h1>My Portfolio</h1>
        <div className={styles.sectionButtonsWrapper}>
            <ul className={styles.sectionButtons}>
                <li><button>All Works</button></li>
                <li><button>Brands</button></li>
                <li><button>Photography</button></li>
                <li><button>Graphic</button></li>
                <li><button>Web Design</button></li>
            </ul>
        </div>
        <div className={styles.gridContainer}>
          <div className={cn([styles.item, styles.item1])}></div>
          <div className={cn([styles.item, styles.item2])}></div>
          <div className={cn([styles.item, styles.item3])}></div>
          <div className={cn([styles.item, styles.item4])}></div>
          <div className={cn([styles.item, styles.item5])}></div>
          <div className={cn([styles.item, styles.item6])}></div>
          <div className={cn([styles.item, styles.item7])}></div>
          <div className={cn([styles.item, styles.item8])}></div>
        </div>
  </div>

  );
}