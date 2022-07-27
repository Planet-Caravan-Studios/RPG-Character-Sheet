import styles from './style.module.scss'
import styled from "styled-components";

export default function FixedSplit({ 
  image,
  imageAlt,
  titleCopy,
  bodyCopy
}) {
  return (
  	<div className={styles.slide}>
  		
  		<div className={styles.image}>
  			<img src={image} alt={imageAlt} />
  		</div>

  		<div className={styles.copy}>
  			<p className={styles.title}>
  				{titleCopy}
  			</p>
  			<p className={styles.body}>
  				{bodyCopy}
  			</p>
  		</div>

  	</div>
  )
}
