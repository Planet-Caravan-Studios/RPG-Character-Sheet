//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import Header from '@components/Template/Header/Header'
import Container from '@components/Template/Container/Container'
import Footer from '@components/Template/Footer/Footer'

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
            <div className="span-col-2 SketchGothic"><span className="alt">C</span>haracter <span className="alt">N</span>ame</div>
            <div className="span-col-3 "><span className="alt">R</span>ace, <span className="alt">C</span>lass, <span className="alt">S</span>ub-<span className="alt">C</span>lass, <span className="alt">A</span>lignment</div>
            <div>Stats pt1</div>
            <div>Stats pt2</div>
            <div>Level, Health Points, Action Points</div>
            <div className="span-col-2">Clothing &amp; Armor</div>
            <div className="span-col-3 span-row-3 "><span className="alt">C</span>haracter <span className="alt">I</span>mage</div>
            <div>Wearable Item 1</div>
            <div>Wearable Item 2</div>
            <div>Bag Item 1</div>
            <div>Bag Item 2</div>
            <div>Bag Item 3</div>
            <div>Bag Item 4</div>
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
