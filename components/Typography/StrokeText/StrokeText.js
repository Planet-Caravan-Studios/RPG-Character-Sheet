import styles from './style.module.scss'
import styled from "styled-components";


export default function StrokeText({ 
  //page vars
  children,
}) {
  return (
  	<span className={styles.StrokeText}>
		{children}
  	</span>
  	
  )
}
