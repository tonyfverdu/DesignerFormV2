import { useState, useEffect, useContext, useRef } from 'react'
import { MyContext } from '../../context/MyContext.jsx'
import '../../sass/componentSass/elementsForms/CheckboxElem_PB.scss'


function CheckboxElem_PB({ id_Element, labelElement, required, disabled = false, checked = false, response, setCheckbox }) {
  const theContext = useContext(MyContext)
  const [responseCheckbox, setResponseCheckbox] = useState(response[0])
  const [valueOfCheckbox, setValueOfCheckbox] = useState(checked)
  const elementRef = useRef(null)
  const OrderRef = useRef(null)
  const RowYRef = useRef(null)
  const ColXRef = useRef(null)

  useEffect(() => {
    setValueOfCheckbox(checked)
    setCheckbox(valueOfCheckbox)
  }, [])

  // useEffect(() => {
  //   setCheckbox(valueOfCheckbox);
  // }, [valueOfCheckbox])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfCheckbox(ev.target.checked);
    setCheckbox(valueOfCheckbox);
  }

  return (
    <div className="contCheckboxElement form-check form-group container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1
    border border-1 border-secondary">
      <input id={id_Element} type="checkbox" className="form-check-input contCheckbox rounded-0" required={required} disabled={disabled}
        checked={valueOfCheckbox} onChange={(ev) => handleChange(ev)} />
      <label className="form-check-label labelOfForm d-flex flex-row justify-content-end align-items-center" htmlFor={id_Element}>
        {labelElement}
      </label>
    </div>
  )
}

export default CheckboxElem_PB;

/*
<div className="contCheckboxElement container-fluid d-flex flex-row justify-content-around align-items-center p-1">

     <input id={id_Element} type="checkbox" className="form-check-input" required={required} disabled={disabled}
        checked={checked} value={valueOfCheckbox} onChange={(ev) => handleChange(ev)} />
*/