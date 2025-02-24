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
            
            {/* CHARACTER NAME */}
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

            {/* CHARACTER ATTRIBUTES */}
            <div className="span-col-1 ">
              <CharSheetCell className="CharSheetCell charAttributes">
                <ul className="genericList">
                  <li>
                    <span className="attrName ">Race: </span>
                    <span className="attrVal">Human</span>
                  </li>
                  <li>
                    <span className="attrName ">Alignment: </span>
                    <span className="attrVal">Lawful Nuetral</span>
                  </li>
                </ul>
              </CharSheetCell>
            </div>

            {/* CHARACTER ATTRIBUTES */}
            <div className="span-col-1 ">
              <CharSheetCell className="CharSheetCell charAttributes">
                <ul className="genericList">
                  <li>
                    <span className="attrName " >Class: </span>
                    <span className="attrVal">Paladin</span>
                  </li>
                  <li>
                    <span className="attrName " >Sub-Class: </span>
                    <span className="attrVal">Vengence, Terror Knight</span>
                  </li>
                </ul>
              </CharSheetCell>
            </div>

            {/* BASE STATS 1 */}
            <div>
              <CharSheetCell className="CharSheetCell stats">
                <ul className="genericList">
                  <li>
                    <span className="statName ">STR: </span>
                    <span className="statVal sketchGothic bgRed">6</span>
                  </li>
                  <li>
                    <span className="statName ">DEX: </span>
                    <span className="statVal sketchGothic bgRed">5</span>
                  </li>
                  <li>
                    <span className="statName ">CON: </span>
                    <span className="statVal sketchGothic bgRed">5</span>
                  </li>
                </ul>
              </CharSheetCell>
            </div>

            {/* BASE STATS 2 */}
            <div>
              <CharSheetCell className="CharSheetCell stats">
                <ul className="genericList">
                  <li>
                    <span className="statName ">INT: </span>
                    <span className="statVal sketchGothic bgRed">5</span>
                  </li>
                  <li>
                    <span className="statName ">WIS: </span>
                    <span className="statVal sketchGothic bgRed">7</span>
                  </li>
                  <li>
                    <span className="statName ">CHR: </span>
                    <span className="statVal sketchGothic bgRed">4</span>
                  </li>
                </ul>
              </CharSheetCell>
            </div>

            {/* BASE STATS 3 */}
            <div className="span-col-1">
              <CharSheetCell className="CharSheetCell stats">
                <ul className="genericList">
                  <li>
                    <span className="statName ">LVL: </span>
                    <span className="statVal sketchGothic bgRed">8</span>
                  </li>
                  <li>
                    <span className="statName ">HP: </span>
                    <span className="statVal sketchGothic bgRed">12</span>
                  </li>
                  <li>
                    <span className="statName ">AP: </span>
                    <span className="statVal sketchGothic bgRed">9</span>
                  </li>
                </ul>
              </CharSheetCell>
            </div>

            {/* CLOTHING/ARMOR */}
            <div className="span-col-2">Clothing &amp; Armor</div>

            {/* CHARACTER IMAGE */}
            <div className="span-col-3 span-row-3 ">
              <CharSheetCell className="CharSheetCell charImage">
                <div className="heading sketchGothic">
                  <span><span className='alt'>C</span>haracter </span>
                  <span><span className='alt'>I</span>mage:</span>
                </div>

                <div className="imgFrame">
                  {/*<div className="imgFilter"></div>*/}
                  <img src="/img/characters/test-6.jpg" alt=""/>
                </div>

              </CharSheetCell>
            </div>
            
            {/* WEARABLE ITEM 1 */}
            <div className="span-col-1">
              <CharSheetCell className="CharSheetCell charItem">
                <div className="heading">Wearable Item 1</div>
                <div className="body">
                  <p>Pendant of Thor</p>
                  <p>+1 STR, +1 CON</p>
                </div>
                <div className="imgFrame">
                  <img src="/img/items/mjollnir.png" alt=""/>
                </div>
              </CharSheetCell>
            </div>

            {/* WEARABLE ITEM 2 */}
            <div className="span-col-1">
              Wearable Item 2
            </div>

            {/* BAG ITEM 1 */}
            <div className="span-col-1">
              Bag Item 1: Health Potion
            </div>
            
            {/* BAG ITEM 2 */}
            <div className="span-col-1">
              Bag Item 2: Stamina Potion
            </div>
            
            {/* BAG ITEM 3 */}
            <div className="span-col-1">
              Bag Item 3: Torch
            </div>
            
            {/* BAG ITEM 4 */}
            <div className="span-col-1">
              Bag Item 4: Pipe weed
            </div>

            {/* WEAPON */}
            <div className="span-col-2">
              Weapons
            </div>

            {/* ATTACKS */}
            <div className="span-col-2">
              Attacks
            </div>

            {/* ABILITIES */}
            <div className="span-col-1">
              Abilities
            </div>
          </div>
        </Container>
        
        
        
      </main>

      <Footer footerMessage={props.footerMessage} />

     
    </>
  )
}
