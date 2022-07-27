import styles from './style.module.scss'
import styled from "styled-components";


export default function CustomList({ 
  //page vars
  children,
}) {
  return (
  	<ul className={styles.CustomList}>
		{children}
  	</ul>
  	
  )
}
