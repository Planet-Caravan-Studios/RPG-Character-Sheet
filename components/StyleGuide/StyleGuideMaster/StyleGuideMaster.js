import styles from './styles.module.scss'
import styled from "styled-components";

import ColorCell from '@components/StyleGuide/ColorCell/ColorCell'



export default function Layout({ 
	//vars
}) {
	return (
		<div className={styles.Wrapper}>
			
			<section className={styles.StyleGuideSection}>
				
				<div className={styles.SectionHeader}>
					<h2>Colors</h2>
				</div>
				<br/>
				<div className={styles.SectionHeader}>
					<h3>Basic Colors</h3>
				</div>
				<div className={styles.cellWrapper}>
					<ColorCell className={styles.cell} 
						colorCode="#212121"
						varName="$black"
						textColor="#fafafa"
					/>

					<ColorCell className={styles.cell} 
						colorCode="#fafafa"
						varName="$white"
					/>

					<ColorCell className={styles.cell} 
						colorCode="#ececec"
						varName="$grey_1"
					/>

					<ColorCell className={styles.cell} 
						colorCode="#3e3e3e"
						varName="$grey_2"
						textColor="#fafafa"
					/>

					<ColorCell className={styles.cell} 
						colorCode="#fb0000"
						varName="$red"
					/>

					<ColorCell className={styles.cell} 
						colorCode="#D1D3D4"
						varName="$nasa_grey"
					/>
						
				</div>

				<div className={styles.SectionHeader}>
					<h3>Holy Mountain Colors</h3>
				</div>
				<div className={styles.cellWrapper}>
					<ColorCell className={styles.cell} 
						colorCode="#e30022"
						varName="$hm_red"
						
					/>

					<ColorCell className={styles.cell} 
						colorCode="#ff8b00"
						varName="$hm_orange"
					/>

					<ColorCell className={styles.cell} 
						colorCode="#fee72f"
						varName="$hm_yellow"
					/>

					<ColorCell className={styles.cell} 
						colorCode="#03c03c"
						varName="$hm_green"
					/>

					<ColorCell className={styles.cell} 
						colorCode="#1f75fe"
						varName="$hm_blue"
						textColor="#fafafa"
					/>

					<ColorCell className={styles.cell} 
						colorCode="#662b7e"
						varName="$hm_purple"
						textColor="#fafafa"
					/>
						
				</div>

			</section>


		</div>
	)
}
