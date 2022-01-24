import styles from "./RecordBlock.module.css";
import { withContainer } from "../../utils/container";

export function ResultCard(props) {
  const {number, title} = props;
  return (
      <div className={styles.resultCard}>
          <p>{number}</p>
          <span>{title}</span>
      </div>
  )
}

export default function PresentationBlock() {
  return (
  <div className={styles.wrapper}>
    <div className={withContainer(styles.root)}>
      <ResultCard number="1285" title="PROJECTS"/>
      <ResultCard number="845" title="HAPPY CLIENTS"/>
      <ResultCard number="930" title="WORK HOURS"/>
      <ResultCard number="452" title="AWARDS"/>
    </div>
  </div>
  );
}