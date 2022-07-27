//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import Header from '@components/Template/Header/Header'
import Container from '@components/Template/Container/Container'
import Sandbox from '@components/Template/Sandbox/Sandbox'
import ComponentMeta from '@components/Template/ComponentMeta/ComponentMeta'
import Footer from '@components/Template/Footer/Footer'

import ModalWrapper from '@components/Modals/ModalWrapper/ModalWrapper'
import Button1 from '@components/Typography/Button1/Button1'
import CustomHR from '@components/Typography/CustomHR/CustomHR'

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
        <title>Holy Mountain Component</title>
      </Head>

      <main>
        <Header title="Holy Mountain Component Demo" />
        <Container>
          <ComponentMeta
            title={props.title}
            author={props.author}
            authorTeam={props.authorTeam}
            description={props.description}
            contentProps={props.contentProps}
            libraries={props.libraries}
          />
        </Container>
        
        <Sandbox>
          {/*Components go here*/}
          <div>
          	Set modal buttons by using the modal_open classes <br/>
          	and set the specifc modal with the modal prop.  <br/><br/>

          	The video modal uses the 'dataYoutubeId' prop to set the video. <br/>
          	Video iFrame is cleared out on modal close. <br/>
          	The video modal currently only supports YouTube videos, <br/>
          	but is based on a generic iFrame, so further support is coming soon.
          	<CustomHR/>
          	The Thank You modal is triggered by a URL parameter of '<a href="/?thank_you">?thank_you</a>'.
          	<CustomHR/>
            <div className="flexRow">
              <Button1
                className="modal_open"
                modal="DefaultModal"
              >Default Modal</Button1>
              
              <Button1
                className="modal_open"
                modal="VideoModal"
                dataYoutubeId="ubBPXQ5U2_0"
                extraClass="sideMargin"
              >Video Modal</Button1>
            </div>

          	
          	
          </div>
        </Sandbox>
        
      </main>

      <Footer footerMessage={props.footerMessage} />

      <ModalWrapper/>
    </>
  )
}
