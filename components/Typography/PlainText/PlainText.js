import styles from './PlainText.module.scss'
import styled from "styled-components";


export default function PlainText({ 
  //page vars
  children,
}) {
  return (
  	<p className={styles.PlainText}>
		{children}
  	</p>
  	
  )
}
