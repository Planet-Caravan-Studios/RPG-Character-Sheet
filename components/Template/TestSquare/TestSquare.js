import styles from './TestSquare.module.scss'

export default function TestSquare({ 
	children, 
}) {
  return (
    <div  className={styles.TestSquare}>
    	<div  className={styles.inner}>
    		{children}
    	</div>
    </div>
  )
}
