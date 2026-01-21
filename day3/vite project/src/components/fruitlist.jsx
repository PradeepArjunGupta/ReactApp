import React from 'react'
import styles from './fruitlist.module.css'
export default function fruitlist({list,clk}) {
  return (
  <div>
        <p>Clicked Value * 2 : {clk}</p>
      <ol className={styles.author}>
        {list.map((ele,idx) => (
          <li key={idx}>{ele}</li>
        ))}
      </ol>
    </div>
  )
}
