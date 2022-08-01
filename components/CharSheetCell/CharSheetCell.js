import styles from './CharSheetCell.module.scss'
import styled from "styled-components";

const Cell = styled.div`


`;


export default function CharSheetCell({ 
  children,
  className,
  title,
}) {
  return (
  	<Cell className={className +' '+styles.CharSheetCell} >
      {children}
	</Cell>
  )
}
