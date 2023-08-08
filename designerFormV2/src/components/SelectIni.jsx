import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../context/MyContext.jsx'
import '../sass/componentSass/elementsForms/SelectElem_PB.scss'

import form_enf_0001 from '../Data/JSONFormDataObj_01.js';


function SelectIni({ elementID, labelElement, required, disabled = false, optionsValues, setSelect }) {
  const theContext = useContext(MyContext)
  const [valueSelect, setValueSelect] = useState("");

  function optionsOfSelet(optionsValues) {
    return (
      optionsValues.map((option, index) => {
        return <option key={index} value={option} className="fw-normal text-dark">{option}</option>
      })
    )
  }

  function handleOnChange(ev) {
    ev.preventDefault();
    const newValue = ev.target.value;
    setValueSelect(newValue)

    if (valueSelect === "Form Varicella disease") {
      theContext.setValueOfForm(form_enf_0001)
    } else if ("Form Tuberculosis disease"){
      theContext.setValueOfForm(undefined)
    }
  }

  return (
    <div className="contSelectElement form-floating form-group container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1
    border border-1 border-secondary">
      <label className="form-label labelOfForm mx-2 pt-2" >{labelElement}</label>
      <select id={elementID} size="1" required={required} disabled={disabled} aria-label=".form-select-sm"
        className={`form-select-sm contSelect rounded-0 ${disabled ? "selectNotActiv" : "selectActiv border border-secondary"} bg-white `}
        value={valueSelect} autoFocus onChange={(ev) => handleOnChange(ev)} >
        {
          optionsOfSelet(optionsValues)
        }
      </select>
    </div>
  );
}

export default SelectIni;