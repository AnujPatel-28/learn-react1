import React from 'react'
import styles from './Button.module.css'

const Button = () => {
  return (
    <div className={styles.button}>
        <center><h1>This is Button Component</h1></center>
      <center><button className={styles.btn}>Click me</button></center>
    </div>
  )
}

export default Button
