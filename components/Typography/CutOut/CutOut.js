import styles from './CutOut.module.scss'
import styled from "styled-components";


export default function CutOut({ 
  //page vars
  children,
}) {
  return (
  	<div className={styles.CutOut}>
  		<p className={styles.inner}>
  			{children}
  		</p>
  	</div>
  	
  )
}
