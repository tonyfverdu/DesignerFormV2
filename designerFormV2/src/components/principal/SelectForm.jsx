import { useContext } from 'react'
import { MyContext } from '../../context/MyContext.jsx'
import listFormsData from '../managementJSON/listFormsData.js'
import SelectIni from '../SelectIni.jsx'
import '../../sass/componentSass/icons/IconsElem.scss'


function SelectForm({ height_dim, width_dim }) {
  const theContext = useContext(MyContext)

  return (
    <form className="contIcons container d-flex justify-content-around align-items-center mx-auto me-0 p-0 bg-light"
      style={{ transform: `scale(${height_dim})`, width: width_dim }}
      onSubmit={(ev) => theContext.handleSubmitFormIni(ev)}>
      <div className="col-7 p-1">
        <SelectIni
          elementID={"idFormSelectIni"}
          labelElement={"View JSON"}
          required={true}
          disabled={false}
          optionsValues={listFormsData.map(elem => elem.title_Form)}
          setSelect={theContext.setValueOfForm}
        />
      </div>
      <div className="col-4 p-1">
        <button type="submit" className="btn btn-sm btn-outline-success p-2" onClick={theContext.handleButtonSubmitFormDyn}>
          <span className="fw-bold mx-2" style={{ fontSize: "0.7rem" }}>View JSON</span>
        </button>
      </div>
    </form>
  )
}

export default SelectForm;
