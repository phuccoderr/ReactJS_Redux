import React from 'react'
import ContactForm from './contact/ContactForm'
import styles from "./contact/ContactForm.module.scss"

function Contact() {
  return (
    <div className={styles.pageWrapper}>
      <ContactForm />
    </div>
  )
}

export default Contact