import styles from './Typography.module.scss'
import styled from "styled-components";

import StrokeText from '@components/Typography/StrokeText/StrokeText'


const Wrapper = styled.div`
	
`;


export default function Typography({ 
  //page vars
}) {
  return (
<div className={styles.outer}>
	<Wrapper 
			className={styles.wrapper} 
		>
			<ul>
				<li className={styles.display + " "} >
					<StrokeText>Stroke Text: <span>ComputerFont</span></StrokeText>
				</li>
			</ul>
		</Wrapper>

	<Wrapper 
		className={styles.wrapper} 
	>
		<ul>
			<li className={styles.display + " "} >
				Display Font: <span>ComputerFont</span>
			</li>
			<li className={styles.alt + " "}>
				Alt Font: <span>Windows Command Prompt</span>
			</li>
			<li className={styles.bodyFont + " "}>
				Body Font: <span>IBM Plex Mono</span>
			</li>
		</ul>
	</Wrapper>

	<Wrapper 
		className={styles.wrapper} 
	>
		<ul>
			<li className={styles.heading +" "+ styles.display} >
				Font Size: <span>Heading</span>
			</li>
			<li className={styles.subhead +" "+ styles.display}>
				Font Size: <span>Subhead</span>
			</li>
			<li className={styles.body +" "+ styles.display}>
				Font Size: <span>Body</span>
			</li>
			<li className={styles.detail +" "+ styles.display}>
				Font Size: <span>Detail</span>
			</li>
		</ul>

		<ul>
			<li className={styles.heading +" "+ styles.alt} >
				Font Size: <span>Heading</span>
			</li>
			<li className={styles.subhead +" "+ styles.alt}>
				Font Size: <span>Subhead</span>
			</li>
			<li className={styles.body +" "+ styles.alt}>
				Font Size: <span>Body</span>
			</li>
			<li className={styles.detail +" "+ styles.alt}>
				Font Size: <span>Detail</span>
			</li>
		</ul>

		<ul>
			<li className={styles.heading +" "+ styles.bodyFont} >
				Font Size: <span>Heading</span>
			</li>
			<li className={styles.subhead +" "+ styles.bodyFont}>
				Font Size: <span>Subhead</span>
			</li>
			<li className={styles.body +" "+ styles.bodyFont}>
				Font Size: <span>Body</span>
			</li>
			<li className={styles.detail +" "+ styles.bodyFont}>
				Font Size: <span>Detail</span>
			</li>
		</ul>
	</Wrapper>
</div>
  )
}
