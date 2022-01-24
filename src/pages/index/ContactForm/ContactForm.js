import styles from "./ContactForm.module.css";
import { withContainer } from "../../../utils/container";
import Input from "./Input";

export function ContactInfo(props) {
  const {image, firstLine, secondLine} = props;
  return (
   <div className={styles.contactInfo}>
     <img src={image}/>
        <div>
          <h4>{firstLine}</h4>
          <h4>{secondLine}</h4>
        </div>
  </div>
  )
}

export default function ContactForm() {
  return (
    <div id="contact" className={styles.root}>
        <form className={withContainer(styles.contactForm)}>
          <div className={styles.contact}>
          <h1>Get In Touch</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.</p>
        <ContactInfo 
          image={"/contact_location.png"}
          firstLine={"Road No 542, Bream2244"}
          secondLine={"East winterfall, Barmingham, England"}
        />
        <ContactInfo
          image={"/contact_message.png"}
          firstLine={"Loremimpsumdlr@gmail.com"}
          secondLine={"uremail@gmail.com"}
        />
        <ContactInfo
          image={"/contact_phone.png"}
          firstLine={"+00 22558 25258 45488"}
          secondLine={"+00 22558 25258 45488"}
        />
          </div>

        <div className={styles.message}>
        <h1>Send a Message</h1>
        <Input/>
        </div>
        </form>
    </div>
  );
}