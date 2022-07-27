import styles from './Footer.module.scss'

export default function Footer({ footerMessage }) {
  return (
    <>
      <footer className={styles.footer}>
       <p className={styles.footer_message +" SketchGothic"}>{footerMessage}</p>
      </footer>
    </>
  )
}
