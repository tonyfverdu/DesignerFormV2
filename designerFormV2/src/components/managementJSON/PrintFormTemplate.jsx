import { useState, useEffect, useContext, useRef } from 'react'
import { MyContext } from '../../context/MyContext.jsx'

//  Rows od Blocks
import BlockMaster from '../TeilRight/menuRight/BlockMaster.jsx'
import RowBlock from '../TeilRight/RowBlock.jsx'

//  Import of Component of Form
import LabelElem_PB from '../elementsForms/LabelElem_PB.jsx'
import TextElem_PB from '../elementsForms/TextElem_PB.jsx'


function PrintFormTemplate({ formInput, setFormInput }) {
  const theContext = useContext(MyContext)
  const elementRowRef = useRef(null)

  //  ****    Local state variable    **************************************************************************************************
  const [formLocalSelect, setFormLocalSelect] = useState(formInput)
  const [arrayBlocksLocal, setArrayBlocksLocal] = useState(formInput.blocks)
  const [lengthOfArrayOfBlocks, setLengthOfArrayOfBlocks] = useState(formInput.blocks.length)

  useEffect(() => {
    setFormLocalSelect(theContext.formObject)
    setArrayBlocksLocal(theContext.formObject.blocks)
    setLengthOfArrayOfBlocks(theContext.formObject.blocks.length)
  }, [theContext.formObject])

  useEffect(() => {
    //  ==>>  Loading the form block array in the context variable:  theContext.arrayOfBlocks
    theContext.setFormObject(formLocalSelect)
    theContext.setArrayOfBlocks(formLocalSelect.blocks)

    // Ver componentes

  }, [formLocalSelect])

  function removeBlock() {
    elementRowRef.current.remove()
  }


  return (
    <form className="rounded-0" >
      <div className="container-fluid shadow-sm d-flex flex-column justify-content-start align-items-center p-0 mb-1 graycolor200" >
        <header className="row p-0 ms-2 mx-auto" >
          <h5 className="col display-6 fw-bolder p-2 text-sm-start text-capitalize text-dark" >
            Form Title: <span className="fs-5 text-secondary fw-bold mx-auto ms-1" > {formLocalSelect.title_Form} </span>
          </h5>
        </header>
      </div>

      < div className="container-fluid shadow-sm p-0 mb-1" >

        {/* //  First row:  Here are the dates of the form.  */}
        {/* //  1.-  First row:  Title of Form + Id of Form with background color gray */}
        <div className="container-fluid row d-flex flex-row justify-content-start align-items-center gx-0 shadow-sm graycolor500 p-1 mb-1" >
          <div className="col-2 text-start p-0 ms-0" >
            <LabelElem_PB
              id_Element={""}
              orderInBlock={0}
              required={true}
              disabled={true}
              response={[formLocalSelect.title_Form]}
              placeholder={formLocalSelect.title_Form}
              size={30}
              position={{ rowElem: 0, colElem: 0 }}
              width={2}
              borderElement={false}
              colorElement={"rgb(9, 9, 9)"}
              fontSizeElement={"0.8rem"}
            />
          </div>

          <div className="col-2 offset-md-8" >
            <TextElem_PB
              id_Element={"id_IdOfForm"}
              orderInBlock={1}
              labelElement={"Id: "}
              required={true}
              disabled={true}
              response={[""]}
              placeholder={formLocalSelect.id_Form}
              size={20}
              position={{ rowElem: 0, colElem: 10 }}
              width={2}
              borderElement={false}
              colorElement={"rgb(9, 9, 9)"}
              fontSizeElement={"0.8rem"}
              text={formLocalSelect.id_Form}
              setText={theContext.setText}
            />
          </div>
        </div>

        {/* //  2.-  Array of Form Blocks  */}
        {
          arrayBlocksLocal !== undefined
            ?
            Array.isArray(arrayBlocksLocal)
              ?
              arrayBlocksLocal.map((block, index) => {
                return (
                  <div key={block.id_Block} >
                    {
                      !theContext.toRead &&
                      <div ref={elementRowRef} className="container-fluid row d-flex flex-row justify-content-start align-items-center 
                      gx-0 shadow-sm graycolor200 p-1 mb-1" >
                        <RowBlock
                          formInput={formLocalSelect}
                          count={index}
                          setLengthOfArrayOfBlocks={setLengthOfArrayOfBlocks}
                          removeBlock={removeBlock}
                        />
                      </div>
                    }

                    <div ref={elementRowRef} id={`accordionBlock_${index}`} className="accordion accordion-flush bg-secondary mx-auto mb-1" >
                      <div className="accordion-item p-0 m-0" >
                        <BlockMaster
                          block={block}
                          index={index}
                        />
                      </div>
                    </div>
                  </div>
                )
              })
              :
              <p className="fs-6 text-center text-danger fw-bold">ERROR, theContext.arrayOfBlocks NO ES UN ARRAY </p>
            :
            <p className="fs-6 text-center text-danger fw-bold">ERROR</p>
        }
        {
          !theContext.toRead &&
          <div className="container-fluid row d-flex flex-row justify-content-start align-items-center 
          gx-0 shadow-sm graycolor200 p-1 mb-1">
            <RowBlock
              formInput={formInput}
              count={formInput.blocks.length}
              setLengthOfArrayOfBlocks={setLengthOfArrayOfBlocks}
              removeBlock={removeBlock}
            />
          </div>
        }
      </div>
    </form >
  )
}

export default PrintFormTemplate;

//    ****    EXPLICACION   *******************************************************
/*

1.-  Cargo en la variable de estado de React:  formLocalSelect, el valor del objeto de formulario: "formInput", 
     pasado como argumento al componente

2.-  Cargo en la variable de "contexto": theContext.arrayOfBlocks, el "array de bloques" del formulario de entrada.  
     Paso el valor de "length" de este array a la variable de estado del componente:  "lengthOfArrayOfBlocks"

     Cada vez que cambie el valor del parametro de entrada del componente:  "formInput", reinicializo el valor de los 
     valores anteriores con useEffect.

3.-  


*/
