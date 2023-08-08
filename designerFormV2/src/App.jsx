import { useState, useContext } from 'react'
import { MyContext } from './context/MyContext.jsx';
import HeaderComponent from './components/others/HeaderComponent.jsx'
import HeaderTitle from './components/principal/HeaderTitle.jsx';

import { IconContext } from "react-icons";
import { BsXSquareFill } from 'react-icons/bs'

import FromJSONToForm from './components/managementJSON/FromJSONToForm.jsx'

//  Constans
import { TITLES_OF_APP, GROUP_BUTTONS_SELECT_LEFT } from './constants/contants.js'
import './sass/App.scss'


function App() {
  const theContext = useContext(MyContext);
  const [toggleHeader, setToggleHeader] = useState(true)


  return (
    <div className="contCentral">
      <div className="containerApp d-flex flex-column justify-content-center align-items-center mx-auto">
        <button className="contIconExit d-flex flex-column justify-content-center align-items-center rounded" aria-label="Close" onClick={() => setToggleHeader(!toggleHeader)} >
          <IconContext.Provider value={{ color: "red", className: "iconClass" }} >
            <BsXSquareFill />
          </IconContext.Provider >
        </button>
      </div>

      {toggleHeader &&
        <>
          <div className="containerLogos d-flex flex-row justify-content-between align-items-center mx-auto p-0">
            <figure className="figure">
              <img className="imageLogo" src={`./src/assets/logos/sass.svg`} alt='Logo Sass' />
            </figure>
            <figure className="figure">
              <img className="imageLogo" src={`./src/assets/logos/Bootstrap-5-1.svg`} alt='Logo Bootstrap 5.3' />
            </figure>
            <figure className="figure">
              <img className="imageLogo" src={`./src/assets/logos/javascriptES6.svg`} alt='Logo Javascript E6' />
            </figure>
            <figure className="figure">
              <img className="imageLogo" src={`./src/assets/logos/react.svg`} alt='Logo React' />
            </figure>
          </div>
          <div className="header-Principal container-fluid d-flex flex-row justify-content-start align-items-center overflow-hidden mx-auto mb-0 pt-4 bg-dark">
            <h2 className="container mx-auto p-0">{TITLES_OF_APP.MAIN_TITLE_APP}</h2>
          </div>
          <HeaderComponent
            title={TITLES_OF_APP.TITLE_MEMO_LIST_HEADER}
            subtitle={TITLES_OF_APP.SUBTITLE_MEMO_LIST_HEADER}
          />
        </>
      }

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <main className="container-fluid d-flex justify-content-center align-items-start m-1 p-0">
        <section className="container-fluid d-flex flex-column justify-content-center align-items-center 
        mb-0 mt-1 p-1 bg-body">
          {/* ****      Form Processing Menu      **** */}
          <div className="row container-fluid" >
            <div className="col-12" >
              <HeaderTitle
                titleOfDesigner={TITLES_OF_APP.TITLE_TYPE_DESIGNER}
                titleSelectState={TITLES_OF_APP.TITLE_SELECT_STATE}
                titleCreate={TITLES_OF_APP.TITLE_DESIGNER_FBC}
              />
            </div>
          </div>

          {/* ****      Form Layout               **** */}
          {
            theContext.toggleJSONEingaben && theContext.optionDesigner === "form" &&
            <FromJSONToForm />
          }

          {/* {
            theContext.optionDesigner === "component" ?
              theContext.arrayOfRows.map((row, index) => {
                return <div key={index} className="row container-fluid d-flex flex-row justify-content-start align-item-center p-1 py-2 my-1 bg-light 
                border border-secondary border-end-0 border-start-0">
                  {row}
                </div>
              })
              :
              <>
                <p className="text-dark display-4 fw-bold p-6 mt-2 me-2">Aqui viene el layout de:  <span className="text-danger fw-bolder display-2">{theContext.optionDesigner}</span></p>
              </>
          } */}

          {/* <ComponentsList /> */}
        </section>


      </main>
    </div>
  )
}

export default App
