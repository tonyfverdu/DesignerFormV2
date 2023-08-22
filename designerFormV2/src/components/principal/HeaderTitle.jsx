import { useEffect, useContext } from 'react'
import { MyContext } from '../../context/MyContext.jsx';
import SelectForm from './SelectForm.jsx';
import SelectLayoutForm from './SelectLayoutForm.jsx'
import GroupButtonsSelect from '../GroupButtonsSelect';
// import IconsElem from '../icons/IconsElem';
import { TITLES_OF_APP } from '../../constants/contants.js'
import capitalizeString from '../../functions/capitalizeString.js';
import '../../sass/componentSass/principal/HeaderTitle.scss'


function HeaderTitle({ titleOfDesigner, titleSelectState, titleCreate }) {
  const theContext = useContext(MyContext)
  const { form, block, component } = titleCreate

  return (
    <div className="contHeader container-fluid d-flex justify-content-between align-items-center gx-1 m-0 py-1 px-2 rounded" >
      <div className="col-6 d-flex justify-content-between align-items-center gap-2" >
        <div className="d-flex flex-row justify-content-between align-items-center" >
          <SelectLayoutForm
            titleSelectState={titleOfDesigner}
          />
          <GroupButtonsSelect
            preId={"designer_"}
            role={"groupDesigner"}
            arialLabel={"Radio toggle button group designer"}
            typeButton={"radio"}
            nameInput={"btnRadioDesigner"}
            options={[TITLES_OF_APP.TITLE_DESIGNER_FBC.form, TITLES_OF_APP.TITLE_DESIGNER_FBC.block, TITLES_OF_APP.TITLE_DESIGNER_FBC.component]}
            colors={["success", "secondary", "info"]}
            sizeLetter={"0.8rem"}
            groupButton={"typeDesigner"}
          />
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
          <div className="d-flex flex-row justify-content-center align-items-center p-0">
            <SelectLayoutForm
              titleSelectState={titleSelectState}
            />
            <span className="text-danger text-start fw-bold p-0" style={{ fontSize: "0.8rem" }}>
              {capitalizeString(theContext.optionDesigner)}
            </span>
          </div>
          <GroupButtonsSelect
            preId={"layoutStatus_"}
            role={"groupRight"}
            arialLabel={"Radio toggle button group right"}
            typeButton={"radio"}
            nameInput={"btnRadio2"}
            options={["Read", "Delete", "New", "Modify"]}
            colors={["dark", "danger", "secondary", "success"]}
            sizeLetter={"0.8rem"}
            groupButton={"typeLayout"}
          />
        </div>
      </div>

      <div className="col-6 d-flex justify-content-end align-items-center mt-2" >
        <div className="d-flex flex-row justify-content-between align-items-center" >
          {
            theContext.optionDesigner === "form" ?
              <>
                <SelectLayoutForm
                  titleSelectState={form}
                />
                <SelectForm
                  height_dim={"1"}
                  width_dim={"22rem"}
                />
              </>
              :
              theContext.optionDesigner === "block" ?
                <>
                  <SelectLayoutForm
                    titleSelectState={block}
                  />
                </>
                :
                theContext.optionDesigner === "component" ?
                  <>
                    <SelectLayoutForm
                      titleSelectState={component}
                    />
                    <IconsElem
                      height={"1"}
                    />
                  </>
                  :
                  <></>
          }
        </div>
      </div>
    </div>
  )
}

export default HeaderTitle;