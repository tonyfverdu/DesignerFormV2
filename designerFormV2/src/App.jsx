import { useState, useContext } from 'react'
import { MyContext } from './context/MyContext.jsx';
import HeaderLogos from './components/general/HeaderLogos.jsx';
import ButtonCloseHeader from './components/general/ButtonCloseHeader.jsx';
import MenuRight from './components/general/MenuRight.jsx';

import ButtonSelectOptions from './components/ButtonSelectOptions.jsx';

// import FromJSONToForm from './components/managementJSON/FromJSONToForm.jsx'
import PrintFormTemplate from './components/managementJSON/PrintFormTemplate.jsx';

//  Constans
import { GROUP_BUTTONS_SELECT_RIGHT } from './constants/contants.js'
import './sass/App.scss'


function App() {
  const theContext = useContext(MyContext);
  const [toggleHeader, setToggleHeader] = useState(true)
  // const [toogleFormLayout, setToogleFormLayout] = useState(true)


  return (
    <div className="contCentral">
      <ButtonCloseHeader
        toggleHeader={toggleHeader}
        setToggleHeader={setToggleHeader}
      />

      {toggleHeader &&
        <HeaderLogos />
      }

      <main className="container-fluid p-0 m-0">

        {/* 2.-  Right Form */}
        {/* ****      Menu Right                **** */}
        <MenuRight />

        {/* ****      Form Layout               **** */}
        <section className="container-fluid d-flex flex-column justify-content-center align-items-center m-0 p-1 bg-body">
          {/* //  1.-  READ-CREATE-MODIFY NEW FORM:  Print Form Template    *********************************************************** */}
          <div className="container-fluid mx-auto p-1 bg-light rounded-0" >
            {
              theContext.toggleJSONAusgaben && theContext.optionDesigner === "form" &&
              <>
                <PrintFormTemplate
                  formInput={theContext.formObject}
                  setFormInput={theContext.setFormObject}
                />

                {/* 2.-  Group buttons of "Delete", "Save" and "Submit" dates of Form., Blocks and Components   ************ */}
                <div className="row d-flex justify-content-center align-items-center mt-2 p-1 mx-auto" >
                  <div className="col-12" >
                    <ButtonSelectOptions
                      typeButton={GROUP_BUTTONS_SELECT_RIGHT.typeButton}
                      role={GROUP_BUTTONS_SELECT_RIGHT.role}
                      arialLabelA={GROUP_BUTTONS_SELECT_RIGHT.arialLabel}
                      arialLabelB={GROUP_BUTTONS_SELECT_RIGHT.groupButton}
                      options={GROUP_BUTTONS_SELECT_RIGHT.options}
                      colors={GROUP_BUTTONS_SELECT_RIGHT.colors}
                    />
                  </div>
                </div>
              </>
            }
          </div>
        </section>
      </main>
    </div >
  )
}

export default App;



{/* {
            theContext.toggleJSONAusgaben && theContext.optionDesigner === "form" &&
            <FromJSONToForm />
          } */}
