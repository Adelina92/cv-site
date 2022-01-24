import styles from "./SkillsBlock.module.css";
import { withContainer } from "../../utils/container";

export function SkillCard(props) {
    const {src, title, desc} = props;
    return (
        <div className={styles.skillCard}>
            <img src={src}/>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}

export default function SkillsBlock() {
    return (
      <div id="services" className={withContainer(styles.root)} >
          <h1 className={styles.title}>Specialising in</h1>
          <p className={styles.description}>Chwj dnwkl dowkken fjkklg. Kpomeirn bkmodlk iorpgk wbbghkjhg uihiubh jgjkfdg dzkfgh jjhb</p>
          <div className={styles.features}>
            <SkillCard src="/icon-skillcard1.png" title="App Development" desc="fewhjf jhefiejksf eufheiul few fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu"/>
            <SkillCard src="/icon-skillcard2.png" title="Website Design" desc="fewhjf jhefiejksf eufheiul few fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu jhef  iejksf eufheiul few"/>
            <SkillCard src="/icon-skillcard3.png" title="Design Research" desc="fewhjf fewhjf jhefiejksf eufheiul few fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu fiejksf eufheiul few"/>
            <SkillCard src="/icon-skillcard4.png" title="App Development" desc="fewhjf  fewhjf jhefiejksf eufheiul few fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu eufh eiul few"/>
            <SkillCard src="/icon-skillcard5.png" title="Website Design" desc="fewhjf jhefie fewhjf jhefiejksf eufheiul few fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu sf eufheiul few"/>
            <SkillCard src="/icon-skillcard6.png" title="Design Research" desc="fewhjf jhe iejksf fewhjf jhefiejksf eufheiul few fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu ul few"/>
            
            {/* <SkillCard2 image={<img src="/logo-skillcard1.png"/>} title="App Development" desc="fewhjf jhefiejksf eufheiul few fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu fewhjf jhefiejksf eufheiu"/> */}
          </div>
      </div>
    );
  }