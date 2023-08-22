import { useState, useContext, useRef } from 'react'
import { MyContext } from '../../context/MyContext.jsx'
import ListDataElement from './ListDataElement.jsx'
import '../../sass/componentSass/elementsForms/MasterElem_PB.scss'

function MasterElem_PB({ id_Element, placeholder, width, orderInBlock }) {
  const arrayOfList = [
    { color: "primary", fontSize: "0.54rem", title: "Id:", value: id_Element },
    { color: "success", fontSize: "0.54rem", title: "Title:", value: "Master Element" },
    { color: "primary", fontSize: "0.54rem", title: "Type of element:", value: "master" },
    { color: "success", fontSize: "0.54rem", title: "Label:", value: "Master Element" },
    { color: "primary", fontSize: "0.54rem", title: "Placeholder:", value: placeholder },
    { color: "success", fontSize: "0.54rem", title: "Order in block:", value: orderInBlock },
  ]
  const [toogleActiv, setToogleActiv] = useState(false)
  const refElement = useRef(null)

  function handleBtnMaster(ev) {
    //  Lo que debe hacer es:  
    //  coger los datos de este elemento 
    //  pasarlo a componente activo del contexto 
    //  sacar la informacion en la pantalla de informacion de componente de la izquierda
    ev.preventDefault()
    // console.log("ev.target:  ", ev.target)
    const element = ev.target.dataset
    setToogleActiv(!toogleActiv)
  }


  return (
    <div className="container-fluid d-flex flex-row justify-content-center align-items-center m-0 p-0 graycolor300"
      onClick={(ev) => handleBtnMaster(ev)} >
      {
        toogleActiv ?
          <ListDataElement
            TitleList={"Component Data"}
            fontSize={"0.6rem"}
            arrayOfLines={arrayOfList}
          />
          :
          <div className="contMasterElement_PB container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1 " >
            <label ref={refElement} id={id_Element}
              className="buttonMasterElem d-flex flex-row justify-content-start align-items-center m-0 p-1"
              required disabled={false} value={placeholder} data-row="0" data-col="0" data-width={width}>
              {placeholder}
            </label>
          </div>
      }
    </div>
  )
}

export default MasterElem_PB;


