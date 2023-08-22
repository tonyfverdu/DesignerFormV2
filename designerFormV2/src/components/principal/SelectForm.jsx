import { useContext } from 'react'
import { MyContext } from '../../context/MyContext.jsx'
import listFormsData from '../managementJSON/listFormsData.js'
import SelectIni from './SelectIni.jsx'
import '../../sass/componentSass/icons/IconsElem.scss'


function SelectForm({ height_dim, width_dim }) {
  const theContext = useContext(MyContext)

  return (
    <form className="contIcons container d-flex justify-content-around align-items-center"
      style={{ transform: `scale(${height_dim})`, width: width_dim, padding: "0.2rem 0rem" }}
      onSubmit={(ev) => theContext.handleSubmitFormIni(ev)}>
      <div className="col-8" >
        <SelectIni
          elementID={"idFormSelectIni"}
          labelElement={"View JSON"}
          required={true}
          disabled={false}
          optionsValues={listFormsData.map(elem => elem.title_Form)}
          colorSelect={"green"}
          fontSizeSelect={"0.6rem"}
          setSelect={theContext.setValueOfForm}
        />
      </div>
      <div className="col-3" >
        <button type="submit" className="btn btn-sm btn-success p-1 px-2 me-2"
          onClick={theContext.handleButtonSubmitFormDyn}>
          <span className="fw-bold mx-auto" style={{ fontSize: "0.6rem" }}>View JSON</span>
        </button>
      </div>
    </form>
  )
}

export default SelectForm;
