import React from 'react'
import styles from '../styles/Button.module.css'
import Button from '../components/Button'

const Cart = () => {
  return (
    <div>
        <div className={styles.btn} >cart</div>
        <Button title={"Cart"}/>
    </div>
  )
}

export default Cart