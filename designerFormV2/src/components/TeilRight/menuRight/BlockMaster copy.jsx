import { useState, useEffect, useContext, useRef } from 'react';
import { MyContext } from '../../../context/MyContext.jsx';
import LabelElem_PB from '../../elementsForms/LabelElem_PB.jsx';
import Column from './Column.jsx';
import ColAddLine from './ColAddLine.jsx';

import MasterElem_PB from '../../elementsForms/MasterElem_PB.jsx';
import IconEditDelete from '../../icons/IconEditDelete.jsx';
import WhiteSpace_PB from '../../elementsForms/WhiteSpace_PB.jsx';

import '../../../sass/componentSass/TeilRight/Row.scss'


function BlockMaster({ block, index }) {
  const theContext = useContext(MyContext)

  const [columnsOfBlock, setColumnsOfBlock] = useState(block.columns)  //  <<=  Objetos columnas del bloque: block
  const [arrayOfCompByColumn, setArrayOfCompByColumn] = useState(block.columns.map(col => col.components))

  const refElementDiv = useRef(null)
  const [isSpace, setIsSpace] = useState(false)
  const [toogleColBefore, setToogleColBefore] = useState(true)
  const [toogleColAfter, setToogleColAfter] = useState(false)


  useEffect(() => {
    setColumnsOfBlock(block.columns)
    setArrayOfCompByColumn(block.columns.map(col => col.components))
  }, [block.columns])



  function comp_Colum(parArrayColumn) {
    if (Array.isArray(parArrayColumn)) {
      setArrayOfCompByColumn(parArrayColumn.map(col => col.components))
    } else {
      console.log('Error:  The argument of the function "compOfColum" must be an array!!')
      setArrayOfCompByColumn(null)
    }
  }

  function addComp_Colum(parIndex, parColumn) {
    if (Array.isArray(parColumn)) {
      setArrayOfCompByColumn(parColumn.splice(parIndex, 0, theContext.masterComponentIni))
    } else {
      console.log('Error:  The argument of the function "addComp_Colum" must be an array!!')
    }
  }

  function deleteComponent(parRefElement) {
    parRefElement.current.remove()
  }

  function addNewCol(parAfterBefore, parIndex) {
    if (parAfterBefore === "after") {
      setToogleColAfter(!parAfterBefore)
      addComp_Colum(parIndex - 1, arrayOfCompByColumn)

    } else if (parAfterBefore === "before") {
      setToogleColBefore(!parAfterBefore)
      addComp_Colum(parIndex, arrayOfCompByColumn)

    } else {
      console.error('Error: The argument of the function "addNewCol" must be the worts: "after" or "before" !!')
    }
  }

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

          {/* //  Rows *************************************************************************************************/}
          <div ref={refElementDiv}>
            {
              columnsOfBlock !== undefined
                ?
                columnsOfBlock.map((col, index) => {
                  return (
                    <>
                      {
                        !theContext.tooRead &&
                        <div key={index} className="row p-0 my-1 graycolor100 shadow-sm" >
                          <ColAddLine
                            block={block}
                            numRow={index}
                          />
                        </div>
                      }

                      <div key={index} className="row p-1 mb-1 graycolor100 shadow-sm" >
                        {col.components.map((comp, i) => {
                          return (
                            <div key={i} className={`col-${comp.dimension.width + ""} d-grip px-2 m-0 mx-2 border border-danger`} style={{ width: "auto" }}>
                              {
                                !theContext.tooRead && toogleColBefore &&
                                <>
                                  <div className="d-flex flex-column justify-content-between align-items-center p-0 ms-1" style={{ height: "2.6rem" }}>
                                    <CircleButton
                                      isButton={"before"}
                                      index={index}
                                      addNewCol={addNewCol}
                                      parToogleCol={toogleColBefore}
                                    />
                                    <button type="button" className={`btn btn-outline-success circleCol ${!isSpace ? "circleColSpace" : "circleColMinus"} 
        d-flex flex-row justify-content-center align-items-center mx-auto fw-bold text-white p-0`}
                                      style={{ fontSize: "0.6rem" }}
                                      onClick={(ev) => setIsSpace(!isSpace)}>
                                      S
                                    </button>
                                  </div>

                                  <Column
                                    comp={comp}
                                    addComp_Colum={addComp_Colum}
                                    arrayCompOfColum={col.components}
                                    isSpace={isSpace}
                                  />
                                  <CircleButton
                                    isButton={"after"}
                                    index={index = { index }}
                                    addNewCol={addNewCol}
                                    parToogleCol={toogleColBefore}
                                  />
                                </>
                              }
                            </div>
                          )
                        })
                        }
                      </div >
                    </>
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
        </div >
      </div >
    </>
  )
}

export default BlockMaster;

export function CircleButton({ isButton, index, addNewCol, parToogleCol }) {
  return (
    <button type="button" className={`circleCol ${!parToogleCol ? "circleColPlus" : "circleColMinus"} d-flex flex-row justify-content-center align-items-center p-0`}
      onClick={() => addNewCol(isButton, index)}>
      <span className="fw-bold m-0 mx-auto text-dark text-center" >
        {
          !parToogleCol ? "+" : "-"
        }
      </span>
    </button>
  )
}