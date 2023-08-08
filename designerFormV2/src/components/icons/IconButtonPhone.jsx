import {useContext} from 'react'
import { MyContext } from '../../context/TheContext'
import { MdPhone } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonPhone() {
  const theContext = useContext(MyContext)

  function handleButton() {
    theContext.setElement("phone")
    theContext.setObjComponentShow({
      ...theContext.objComponentShow, elementID: "ID_phone_001",
      type: "phone", placeholder: "91-111-1111", size: 12,
      dimensions: { width: 3, height: "2.4rem" },
      labelElement: "Componente Phone: ",
      valueComponent: theContext.phone,
      setComponent: theContext.setPhone
    })
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <MdPhone />
      </button>
    </div>
  )
}

export default IconButtonPhone;

/*
  const component = {
    elementID: "ID_0005",
    type: "text",
    blockOrigen: "The first Block",
    orderInBlock: "5",
    position: { row: 1, col: 0 },
    dimensions: { width: 4, height: "2.4rem" },
    labelElement: "Soy un componente Phone",
    required: true,
    disabled: false,
    response: ["96-123-1234"],
    placeholder: "91-111-1111",
    size: 20,
    valueComponent: "",
    setComponent: theContext.setPhone
  }
*/