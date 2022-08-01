//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import Header from '@components/Template/Header/Header'
import Container from '@components/Template/Container/Container'
import Footer from '@components/Template/Footer/Footer'

import CharSheetCell from '@components/CharSheetCell/CharSheetCell'

//VARS
export async function getStaticProps() {
  
  //General Page VARS
	  let title = "Initial Component Demo"
	  let author = "Alec Reimel"
	  let authorTeam = "Planet Caravan Studios"
	  let description ="\
		This is the inital demo template for Holy Mountain frontend components.  \
		Clone this page out for demoing new components.\
	  "
	  let contentProps = 'N/A'
	  let libraries = "N/A"
	  
	  let footerMessage = "Created by Planet Caravan Studios"

    let characterNameTitle ='<span><span className="alt">C</span>haracter <span className="alt">N</span>ame</span>'
  
  //Component Content
  	let contentLeft = "Lorum Ipsum Dolor"

    return {
      props: {
        title,
        author,
        authorTeam,
        description,
        contentProps,
        libraries,
        footerMessage,
        contentLeft,
        characterNameTitle,
      }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>RPG Character Sheet</title>
      </Head>

      <main>
        <Header title="RPG Character Sheet" />
        <Container>
          <div className="grid">
            <div className="span-col-3">
              <CharSheetCell className="CharSheetCell charName">
                <div className="heading sketchGothic">
                  <span><span className='alt'>C</span>haracter</span> <br/>
                  <span><span className='alt'>N</span>ame:</span>
                </div>
                <div className="body">
                  Wrath Knight
                </div>
              </CharSheetCell>
            </div>
            <div className="span-col-2 ">
              <ul className="listFix">
                <li>
                  <span >Race: </span>
                  <span>Human</span>
                </li>
                <li>
                  <span >Class: </span>
                  <span>Paladin</span>
                </li>
                <li>
                  <span >Sub-Class: </span>
                  <span>Vengence, Terror Knight</span>
                </li>
                <li>
                  <span >Alignment: </span>
                  <span>Lawful Nuetral</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="listFix">
                <li>STR: <span className="sketchGothic">6</span></li>
                <li>DEX: <span className="sketchGothic">5</span></li>
                <li>CON: <span className="sketchGothic">4</span></li>
              </ul>
            </div>
            <div>
              <ul className="listFix">
                <li>INT: <span className="sketchGothic">5</span></li>
                <li>WIS: <span className="sketchGothic">4</span></li>
                <li>CHR: <span className="sketchGothic">3</span></li>
              </ul>
            </div>
            <div>Level, Health Points, Action Points</div>
            <div className="span-col-2">Clothing &amp; Armor</div>
            <div className="span-col-3 span-row-3 "><span className="alt">C</span>haracter <span className="alt">I</span>mage</div>
            <div>Wearable Item 1</div>
            <div>Wearable Item 2</div>
            <div>Bag Item 1: Health Potion</div>
            <div>Bag Item 2: Stamina Potion</div>
            <div>Bag Item 3: Torch</div>
            <div>Bag Item 4: Pipe weed</div>
            <div>Weapon</div>
            <div className="span-col-2">Attacks</div>
            <div className="span-col-2">Abilities</div>
          </div>
        </Container>
        
        
        
      </main>

      <Footer footerMessage={props.footerMessage} />

     
    </>
  )
}
