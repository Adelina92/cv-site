import styles from "./Input.module.css";
import { useState } from "react";
import { cn } from "../../../utils/styles";
import { useFormik } from "formik";


export default function Input() {
const formik = useFormik({
    initialValues: {firstName:"", lastName:"", email:"", phone:"", message:""}, onSubmit(values) {
        console.log(values);
    }
});


function onChange(key, value) {
   formik.setFieldValue(key, value);
}

function clearForm(event) {
    event.preventDefault();
    formik.resetForm();
}

return (
  <div>
    <div className={styles.inputContainer}>
      <input
        className={cn([styles.textBox, styles.firstName])}
        value={formik.values.firstName}
        onChange={(event) => onChange("firstName", event.target.value)}
        placeholder="First Name"
      />
      <input
        className={cn([styles.textBox, styles.lastName])}
        value={formik.values.lastName}
        onChange={(event) => onChange("lastName", event.target.value)}
        placeholder="Last Name"
      />
      <input
        className={cn([styles.textBox, styles.email])}
        value={formik.values.email}
        onChange={(event) => onChange("email", event.target.value)}
        placeholder="Email"
      />
      <input
        className={cn([styles.textBox, styles.phone])}
        value={formik.values.phone}
        onChange={(event) => onChange("phone", event.target.value)}
        placeholder="Phone"
      />
      <textarea
        className={cn([styles.textBox, styles.message])}
        value={formik.values.message}
        onChange={(event) => onChange("message", event.target.value)}
        placeholder="Your Message"
      />
    </div>
    <button className={styles.submit} onClick={formik.submitForm}>Submit Now</button>
    <button className={styles.submit} onClick={clearForm}>Clear</button>
  </div>
);
}