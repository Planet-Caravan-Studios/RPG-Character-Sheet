import styles from './Headline.module.scss'
import styled from "styled-components";


export default function Headline({ 
  //page vars
  children
}) {
  return (
  	<span className={styles.Headline}>
  		<span className={styles.inner}>
  			{children}
  		</span>
  	</span>
  	
  )
}
