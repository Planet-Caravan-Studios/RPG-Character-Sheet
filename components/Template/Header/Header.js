import styles from './Header.module.scss'
import Container from '@components/Template/Container/Container'
import Image from 'next/image'

export default function Header({ title }) {
  return (
  	<header className={styles.header}>
  	  <Container className={styles.container}>
  	    
  	    <div className={styles.contentLeft}>
              <a className={styles.logo} href="/">
                <img
                 src="/img/hm-logo-small.png"
                 alt="Holy Mountain Logo"
               />
              </a>
  	      
              <div className={styles.title}>
                <h1 className="computerfont">{title}</h1>
              </div>
  	    </div>
  
  	    <div className={styles.contentRight}>
  	      
  	    </div>
  	    
  	  </Container>
  	</header>
  )
}
