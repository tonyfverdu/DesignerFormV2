import { useState, useEffect, useContext, useRef } from 'react'
import { MyContext } from '../../../context/MyContext.jsx'
import MasterElem_PB from '../../elementsForms/MasterElem_PB.jsx'
import WhiteSpace_PB from '../../elementsForms/WhiteSpace_PB.jsx'
import IconEditDelete from '../../icons/IconEditDelete.jsx'
import '../../../sass/componentSass/TeilRight/Column.scss'


function Column({ comp, indexB, addComp_Colum, arrayCompOfColum }) {
  const theContext = useContext(MyContext)

  const [toogleColBefore, setToogleColBefore] = useState(false)
  const [toogleColAfter, setToogleColAfter] = useState(false)
  const [isSpace, setIsSpace] = useState(false)

  const refElementArrayComps = useRef(null)
  const elementComponent = useRef(null)
  const refElementDivC = useRef(null)
  const refElementDivD = useRef(null)

  function addNewCol(parAfterBefore, parIndex) {
    if (parAfterBefore === "after") {
      setToogleColAfter(!toogleColAfter)
      addComp_Colum(parIndex-1, arrayCompOfColum)

    } else if (parAfterBefore === "before") {
      setToogleColBefore(!toogleColBefore)
      addComp_Colum(parIndex, arrayCompOfColum)

    } else {
      console.error('Error: The argument of the function "addNewCol" must be the worts: "after" or "before" !!')
    }
  }

  function deleteComponent(parRefElement) {
    if (Array.isArray(parRefElement)) {
      parRefElement.forEach((elem, i) => {
        console.log("elem:  ", elem, "  i:  ", i)
        elem.current.remove()
      })
    } else {
      console.error('Error: The argument of the function "deleteComponent" must be an array!!')
    }
  }

  useEffect(() => {
    if (!toogleColBefore && toogleColAfter && theContext.arrayColumns !== undefined) {
      theContext.setArrayColumns([...theContext.arrayColumns, theContext.arrayColumns.length])  //  <<== ??
    }
  }, [toogleColBefore, toogleColAfter])


  return (
    <div ref={refElementArrayComps} className="container-fluid d-flex flex-row justify-content-start align-items-center p-0 mx-auto ms-1" >
      {
        arrayCompOfColum.map((component, index) => {
          return (
            <div ref={elementComponent} key={index} className="d-flex flex-row justify-content-between align-items-start gap-2 mx-1 p-0">
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

              {/* //  Aqui cambiar por componente: "component" */}
              {
                !isSpace
                  ?
                  <div className="d-flex flex-row justify-content-center align-items-center" >
                    <MasterElem_PB
                      comp={comp}
                      id_Element={comp.id_Element}
                      type_Element={comp.type_Element}
                      placeholder={comp.placeholder}
                      width={comp.dimension.width}
                      disabled={comp.disabled}
                    />
                    <IconEditDelete
                      deleteComponent={deleteComponent}
                      refElementDiv={[refElementArrayComps, elementComponent, refElementDivC, refElementDivD]}
                    />
                  </div>
                  :
                  <WhiteSpace_PB />
              }
              <CircleButton
                isButton={"after"}
                index={index={index}}
                addNewCol={addNewCol}
                parToogleCol={toogleColAfter}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default Column;

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

/*
    <div ref={refElementDivA} className="container-fluid d-flex flex-row justify-content-start align-items-start p-0 mx-auto ms-1 border border-danger" >
      {
        toogleColBefore &&
        <Column
          comp={comp}
        />
      }

      <div ref ={refElementDivB} className="d-flex flex-column justify-content-between align-items-center p-0 ms-1" style={{ height: "2.6rem" }}>
        <CircleButton
          isButton={"before"}
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

      <div ref ={refElementDivC} className="mx-1 p-0" >
        {
          !isSpace
            ?
            <div className="d-flex flex-row justify-content-center align-items-center" >
              <MasterElem_PB
                comp={comp}
                id_Element={comp.id_Element}
                type_Element={comp.type_Element}
                placeholder={comp.placeholder}
                width={comp.dimension.width}
                disabled={comp.disabled}
              />
              <IconEditDelete
                deleteComponent={deleteComponent}
                refElementDiv={[refElementDivA, refElementDivB, refElementDivC, refElementDivD]}
              />
            </div>
            :
            <WhiteSpace_PB />
        }
      </div>

      <>
        <CircleButton
          isButton={"after"}
          addNewCol={addNewCol}
          parToogleCol={toogleColAfter}
        />
        {
          toogleColAfter &&
          <Column
            comp={comp}
          />
        }
      </>
    </div>
*/

