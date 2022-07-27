import styles from './Texture.module.scss'
import styled from "styled-components";

const Overlay = styled.div`
	background-image: url('/img/textures/natural-paper.png');
	opacity: ${props => props.opacity || "1.0"};

	&[data-option="1"]{
		background-image: url('/img/textures/natural-paper.png');
	}
	&[data-option="2"]{
		background-image: url('/img/textures/paper-2.png');
	}
	&[data-option="3"]{
		background-image: url('/img/textures/light-paper-fibers.png');
	}
	&[data-option="4"]{
		background-image: url('/img/textures/clean-gray-paper.png');
	}
	&[data-option="5"]{
		background-image: url('/img/textures/cardboard.png');
	}
	&[data-option="6"]{
		background-image: url('/img/textures/green-dust-and-scratches.png');
	}
	&[data-option="7"]{
		background-image: url('/img/textures/groovepaper.png');
	}
	&[data-option="8"]{
		background-image: url('/img/textures/rice-paper-2.png');
	}
  }

`;


export default function Texture({ 
  //page vars
  option,
  opacity
}) {
  return (
  	<Overlay 
  		className={styles.Texture} 
  		data-option={option}
  		opacity={opacity}>
  	</Overlay>
  )
}
