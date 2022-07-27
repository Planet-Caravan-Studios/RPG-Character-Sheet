import styles from './styles.module.scss'
import styled from "styled-components";

//import Fonts from '@components/StyleGuide/Fonts/Fonts'

const Cell = styled.div`
	background-color: ${props => props.colorCode || "transparent"}; 

	.cellInfo{
		color: ${props => props.textColor}; 
	}
}

`;

export default function Layout({ 
	varName,
 	colorCode,
 	textColor,
}) {
	return (
		
		<div className={styles.cellWrapper}>
			<Cell className={styles.cell} 
				colorCode={colorCode}
				varName={varName}
				textColor={textColor}
			>
				
				<div className={styles.cellInfo + " cellInfo"}>
					<p className={styles.varName}>{varName}</p>
					<p className={styles.colorCode}>{colorCode}</p>
				</div>
				
			</Cell>
		</div>

	)
}
