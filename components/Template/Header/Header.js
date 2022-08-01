import styles from './Header.module.scss'
import Container from '@components/Template/Container/Container'
import Image from 'next/image'

export default function Header({ title }) {
  return (
  	<header className={styles.header}>
  	  <Container className={styles.container}>
  	    
  	    <a className={styles.title} href="/">
          <h1 className="sketchGothic">
            RPG Character Sheet
          </h1>
        </a>
  	  </Container>
  	</header>
  )
}
