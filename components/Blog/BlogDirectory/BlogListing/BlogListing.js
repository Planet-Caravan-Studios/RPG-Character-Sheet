import styles from './styles.module.scss'
import styled from "styled-components";

const Cell = styled.div`

  $breakpoint: ${props => props.breakpoint || "1200px"};

  background: ${props => props.backgroundLeft};
  background: ${props => props.backgroundRight};

  @media only screen and (max-width : 1200px) { 
    	min-height: 50vw;
    }

  &.fixedWidth{
    width: ${props => props.fixedWidth || "50%"};
    @media only screen and (max-width : 1200px) { 
    	width: 100%;
    }
  }

  &.dynamicWidth{
	width: calc(100% -  ${props => props.fixedWidth});
	@media only screen and (max-width : 1200px) { 
		width: 100%;
	}
  }

`;


export default function BlogListing({ 
  backgroundLeft,
  contentLeft,
  backgroundRight,
  contentRight,
  fixedLeft,
  fixedRight,
  fixedWidth
}) {
	return (
		<div className={styles.cellWrapper} >

			

		</div>
	)
}
