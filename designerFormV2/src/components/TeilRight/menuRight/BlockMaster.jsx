import { useState, useEffect, useContext, useRef } from 'react';
import { MyContext } from '../../../context/MyContext.jsx';
import LabelElem_PB from '../../elementsForms/LabelElem_PB.jsx';
// import Column from './Column.jsx';
import ColAddLine from './ColAddLine.jsx';

import MasterElem_PB from '../../elementsForms/MasterElem_PB.jsx';
import IconEditDelete from '../../icons/IconEditDelete.jsx';
import WhiteSpace_PB from '../../elementsForms/WhiteSpace_PB.jsx';

import '../../../sass/componentSass/TeilRight/Row.scss'
import form_enf_0001 from '../../../Data/JSONFormDataObj_01.js';


function BlockMaster({ block, index }) {
  const theContext = useContext(MyContext)
  const [columnsOfBlock, setColumnsOfBlock] = useState(block.columns)  //  <<=  Objetos columnas del bloque: block
  const [arrayOfCompByColumn, setArrayOfCompByColumn] = useState(block.columns.map(col => col.components))  //  <==  Array de componentes del bloque: block

  const [toogleColBefore, setToogleColBefore] = useState(true)
  const [toogleColAfter, setToogleColAfter] = useState(true)
  const [contComp, setContComp] = useState(0)
  const [compMaster, setCompMaster] = useState(theContext.masterComponentIni)

  // const [indexVariacion, setIndexVariacion] = useState(0)
  const refElementComp = useRef(null)

  const refElementArrayComps = useRef(null)
  // const elementComponentRef = useRef(null)

  //  FUNCTIONS
  //  1.-  ADD 1 COMPONENT TO arrayOfCompByColumn
  function addComp_Column(parIndex, parColumn) {
    if (Array.isArray(parColumn)) {
      setContComp(contComp => contComp + 1)
      // console.log("parIndex:  ", parIndex)
      // console.log("parColumn:  ", parColumn)

      setCompMaster({ ...theContext.masterComponentIni, id_Element: `idMaster_${contComp}` })
      // console.log("id del componente master:  ", comMaster.id_Element)

      parColumn.splice(parIndex + 1, 0, compMaster)
      // console.log("parColumn despues:  ", parColumn)
      setArrayOfCompByColumn(parColumn)
      theContext.setArrayOfBlocks([...theContext.arrayOfBlocks, block.columns[index].components = arrayOfCompByColumn])
    } else {
      console.log('Error:  The argument of the function "addComp_Colum" must be an array!!')
    }
  }

  function deleteComp_Column(parIndex, parColumn) {
    console.log("entro aqui por dios, parColumn:  ", parColumn)
    parColumn.splice(parIndex, 1)
    console.log("al borrar, parColumn:  ", parColumn)

    setArrayOfCompByColumn(parColumn)
    theContext.setArrayOfBlocks([...theContext.arrayOfBlocks, block.columns[index].components = arrayOfCompByColumn])
  }


  // function addNewCol(parAfterBefore, parIndex) {
  //   if (parAfterBefore === "after") {
  //     setToogleColAfter(!toogleColAfter)
  //     addComp_Colum(parIndex-1, arrayCompOfColum)

  //   } else if (parAfterBefore === "before") {
  //     setToogleColBefore(!toogleColBefore)
  //     addComp_Colum(parIndex, arrayCompOfColum)

  //   } else {
  //     console.error('Error: The argument of the function "addNewCol" must be the worts: "after" or "before" !!')
  //   }
  // }


  function addNewCol(parAfterBefore, parIndex) {
    if (parAfterBefore === "after") {
      setToogleColAfter(!parAfterBefore)
      addComp_Column(parIndex - 1, arrayOfCompByColumn)

    } else if (parAfterBefore === "before") {
      setToogleColBefore(!parAfterBefore)
      addComp_Column(parIndex, arrayOfCompByColumn)

    } else {
      console.error('Error: The argument of the function "addNewCol" must be the worts: "after" or "before" !!')
    }
  }

  //   QUITAR TODO LO QUE HA TOCADO ESTO

  // useEffect(() => {
  //   const columComp = theContext.arrayOfBlocks[index].columns.map(comp => comp).filter((elem, i) => i === indexVariacion)
  //   theContext.setArrayOfBlocks(columComp)
  // }, [arrayOfCompByColumn])

  return (
    <>
      <div id={`heading_${index}`} className="accordion-header" >
        <button className="accordion-button graycolor400 h6 fw-bold collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target={`#collapse_${index}`} aria-expanded="false" aria-controls={`collapse_${index}`}>
          <span className="h6 fw-bold">{block.title_Block}</span>
        </button>
      </div>

      <div id={`collapse_${index}`} className="accordion-collapse collapse p-0 mx-auto" aria-labelledby={`heading_${index}`} >
        <div className="accordion-body p-0 mx-1" >
          <div className="mx-auto row shadow-sm graycolor500" >
            <div className="col-2" >
              <LabelElem_PB
                id_Element={block.id_Block}
                orderInBlock={index}
                required={true}
                disabled={false}
                response={[""]}
                placeholder={block.label_Block}
                size={30}
                position={{ rowElem: 0, colElem: 0 }}
                width={2}
                borderElement={false}
                colorElement={"rgb(9, 9, 9)"}
                fontSizeElement={"0.7rem"}
              />
            </div>
          </div>

          {/* //  Rows ************************************************************************************************* */}
          <div ref={refElementArrayComps}>
            {
              columnsOfBlock !== undefined
                ?
                columnsOfBlock.map((col, indexA) => {
                  return (
                    <div key={indexA}>
                      {
                        !theContext.tooRead &&
                        <div className="row p-0 my-1 graycolor100 shadow-sm" >
                          <ColAddLine
                            block={block}
                            numRow={indexA}
                          />
                        </div>
                      }

                      <div className="row d-flex flex-nowrap justify-content-start align-items-center p-1 mb-1 graycolor100 shadow-sm" >
                        {/* {col.components.map((comp, indexB) => { */}
                        {col.components.map((comp, indexB) => {
                          //  A partir de aqui solo se trataria de un componente no de un array

                          return (
                            <div key={indexB} className={`col-${comp.dimension.width + ""} d-flex flex-nowrap justify-content-center align-items-center p-0 mx-1`} style={{ width: "auto" }}>

                              {
                                // !theContext.tooRead && toogleColBefore &&
                                <>
                                  <div ref={refElementComp} className="d-flex flex-row justify-content-between align-items-center p-0 m-0" style={{ height: "2.6rem" }}>
                                    <Column
                                      block={block}
                                      index={0}
                                      indexB={indexB}
                                      refElementComp={refElementComp}
                                      // setIndexVariacion={setIndexVariacion}
                                      addComp_Colum={addComp_Column}
                                      arrayOfCompByColumn={arrayOfCompByColumn}
                                      arrayComponetsInCol={col.components}
                                      toogleColBefore={toogleColBefore}
                                      toogleColAfter={toogleColAfter}
                                      setToogleColBefore={setToogleColBefore}
                                      setToogleColAfter={setToogleColAfter}
                                      setArrayOfCompByColumn={setArrayOfCompByColumn}

                                      deleteComp_Column={deleteComp_Column}
                                    />
                                  </div>
                                </>
                              }
                            </div>
                          )
                        })
                        }
                      </div >
                    </div>
                  )
                })
                :
                <p className="fs-6 fw-bolder text-center text-danger">Error</p>
            }
            {
              !theContext.tooRead &&
              < div className="row p-0 my-1 graycolor100 shadow-sm" >
                <ColAddLine
                  block={block}
                  numRow={columnsOfBlock.length}
                />
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default BlockMaster;

export function Column({ block, index, indexB, refElementComp, addComp_Colum, arrayOfCompByColumn, arrayComponetsInCol, setArrayOfCompByColumn,
  toogleColBefore, setToogleColBefore, toogleColAfter, setToogleColAfter, deleteComp_Column }) {
  const theContext = useContext(MyContext)
  const [isSpace, setIsSpace] = useState(false)

  setArrayOfCompByColumn(arrayComponetsInCol)

  // const refElementComp = useRef(null)

  const elementComponent = useRef(null)
  const refElementDivC = useRef(null)
  const refElementDivD = useRef(null)


  function addNewComponent(parAfterBefore, parIndex) {
    if (parAfterBefore === "after") {
      setToogleColAfter(!toogleColAfter)
      addComp_Colum(parIndex, arrayComponetsInCol)

    } else if (parAfterBefore === "before") {
      setToogleColBefore(!toogleColBefore)
      addComp_Colum(parIndex, arrayComponetsInCol)

    } else {
      console.error('Error: The argument of the function "addNewCol" must be the worts: "after" or "before" !!')
    }
  }

  function deleteComponent(index) {
    console.log("indice:  ", index)

    // const newArrayCompCol = arrayComponetsInCol.filter((elem, i) => {
    //   if (i !== index) {
    //     return elem
    //   }

    // })
    deleteComp_Column(index, arrayOfCompByColumn)
    elementComponent.current.remove()
    console.log("newArrayCompCol:  ", newArrayCompCol)
    setArrayOfCompByColumn(newArrayCompCol)
    // console.log("ArrayOfCompByColum:  ", arrayOfCompByColumn)
    theContext.setArrayOfBlocks([...theContext.arrayOfBlocks, block.columns[index].components = newArrayCompCol])

    // if (Array.isArray(parRefElement)) {
    //   parRefElement.forEach((elem, i) => {
    //     console.log("elem:  ", elem, "  i:  ", i)
    //     elem.current.remove()
    //   })
    // } else {
    //   console.error('Error: The argument of the function "deleteComponent" must be an array!!')
    // }
  }

  useEffect(() => {
    if (!toogleColBefore && toogleColAfter && theContext.arrayColumns !== undefined) {
      theContext.setArrayColumns([...theContext.arrayColumns, theContext.arrayColumns.length])  //  <<== ??
    }
  }, [toogleColBefore, toogleColAfter])

  return (
    <div ref={elementComponent} className="container-fluid d-flex flex-row justify-content-start align-items-center p-0 m-0" >
      <div className="d-flex flex-row justify-content-between align-items-start gap-1 m-auto p-0" >
        <div className="d-flex flex-column justify-content-between align-items-center p-0 mx-auto border" style={{ height: "2.6rem" }}>
          <CircleButton
            isButton={"before"}
            index={indexB}
            //addComp_Column={addComp_Column}
            addComp_Column={addNewComponent}
            parToogleCol={toogleColBefore}
          />
          <button type="button" className={`btn btn-outline-success circleCol ${!isSpace ? "circleColSpace" : "circleColMinus"} 
        d-flex flex-row justify-content-center align-items-center mx-auto fw-bold text-white p-0`}
            style={{ fontSize: "0.6rem" }}
            onClick={(ev) => setIsSpace(!isSpace)}>
            S
          </button>
        </div>
        {
          !isSpace
            ?
            <div className="d-flex flex-row justify-content-center align-items-center p-0 mx-auto" >
              <MasterElem_PB
                id_Element={`idMaster_ + ${indexB}`}
                placeholder={`Master_${indexB}`}
                width={2}
                orderInBlock={indexB}
              />
              <IconEditDelete
                index={indexB}
                deleteComponent={deleteComponent}
                refElementDiv={refElementComp}
              />
            </div>
            :
            <WhiteSpace_PB />
        }
        <CircleButton
          isButton={"after"}
          index={indexB}
          // addComp_Column={addComp_Column}
          addComp_Column={addNewComponent}
          parToogleCol={toogleColAfter}
        />
      </div>
    </div>
  )
}

export function CircleButton({ isButton, index, addComp_Column, parToogleCol }) {
  return (
    <button type="button" className={`circleCol ${parToogleCol ? "circleColPlus" : "circleColMinus"} d-flex flex-row justify-content-center align-items-center p-0`}
      onClick={() => addComp_Column(isButton, index)}>
      <span className="fw-bolder mx-auto text-dark text-center" >
        {
          parToogleCol ? "+" : "-"
        }
      </span>
    </button>
  )
}
