import { useState, useEffect, createContext } from 'react';

export const MyContext = createContext(null)
import formDataIni from '../Data/JSONFormDataIni.js';
import JSONFormDataObj_01 from '../Data/JSONFormDataObj_01.js'
import JSONFormPlantillaObj from '../Data/JSONFormPlantillaObj.js'


function TheContext({ children }) {
  const [toRead, setToRead] = useState(false)

  //    ******    MANAGEMENT  OF FORM:  FORM OBJECT, ARRAYBLOCKS, ARRAYCOLUMNS, ARRAYCOMPONENTS   **********************************
  //    1.-   MANAGEMENT OF FORM OBJECT - theContext.formObject   ******************************************************************
  const [formObject, setFormObject] = useState(JSONFormPlantillaObj)
  //  const [nameOfFormObject, setNameOfFormObject] = useState("")

  const [arrayOfBlocks, setArrayOfBlocks] = useState(JSONFormPlantillaObj.blocks)

  const [JSONEingabenForm, setJSONEingabenForm] = useState("")   //  <== Eingaben ( vor String JSON zur JSON-Formulardaten)
  const [JSONAusgabenForm, setJSONAusgabenForm] = useState("")   //  <== Ausgaben ( vor JSON-Formulardaten zur String JSON)
  const [toggleJSONAusgaben, setToggleJSONAusgaben] = useState(true)


  //    2.-   MANAGEMENT OF STATE FORM - READ OR CREATE-MODIFY    ******************************************************************
  const [tooRead, setTooRead] = useState(false)

  const OPTION_DESIGNER = { form: "form", block: "block", component: "component" };
  const [optionDesigner, setOptionDesigner] = useState(OPTION_DESIGNER.form);
  const [valueOfForm, setValueOfForm] = useState(null)             //  <==  Form select in the Context of App.

  //  Funtions of select Forms, Blocks and Components
  // I.-  Dieses Funktion hat keine machen
  function handleSubmitFormIni(ev) {
    ev.preventDefault();
    const newValue = ev.target.value;

    setValueOfForm(newValue);
  }

  // II.-  Dieses Funktion hat keine machen
  function handleButtonSubmitFormDyn() {
    setToggleJSONAusgaben(!toggleJSONAusgaben)
  }

  //    ***************************     STATE VARIABLES OF ELEMENTS HTML_BP   ******************
  const [label, setLabel] = useState("")
  const pruebaLabelElement = {
    id_Element: "ID_0000",
    orderInBlock: 1,
    position: { rowElem: 0, colElem: 0 },
    required: true,
    disabled: false,
    response: ["Soy la response of Label"],
    placeholder: "Soy un componente Label",
    size: 10,
    setLabel: setLabel
  }

  const [text, setText] = useState("")
  const pruebaTextElement = {
    id_Element: "ID_0001",
    labelElement: "Soy un componente Text: ",
    required: true,
    disabled: false,
    response: ["Soy la response"],
    placeholder: "Soy el placeholder del Text",
    size: 28,
    setText: setText
  }


  //////////////////////////////////////////////////////////////////////////////////////////////

  //  0.-  Name - type of the selected Component
  const [element, setElement] = useState("master")

  //  ****    Component objects
  //  1.-  Component ini (Master Component) 

  //  2.- Component Master ini
  const masterComponentIni = {
    "id_Element": "id_component_master",
    "title_Element": "Component Master",
    "type_Element": "master",
    "orderInBlock": 0,
    "label_Element": "Component Master",
    "required": true,
    "disabled": false,
    "response": [],
    "placeholder": "Default",
    "size": 0,
    "position": {
      "rowElem": 0,
      "colElem": 0
    },
    "dimension": {
      "width": 1,
      "height": "2.4rem"
    },
    "valueComponent": undefined,
    "setComponent": undefined,
    "name": undefined,
    "borderElement": true,
    "colorElement": "black",
    "fontSizeElement": "0.6rem",

    //  Element Select
    "optionValues": [],

    //  Element Area Text 
    "readonly": false,
    "row": 0,
    "col": 0,

    //  Element Checkbox
    "checked": false,

    //  Element Radio Buttons
    "legend": "",
    "radioButtons": [
      {
        "id_Element": "",
        "labelElement": "",
        "name": "",
        "required": true,
        "disabled": false,
        "checked": false,
        "response": [
          false
        ],
        "setRadioButton": undefined
      }
    ],

    //  Element Table

    //  Element Icon Image
    "srcURLIcon": "",
    "nameImage": "",
    "widthImage": 0
  }

  //  Rows of Components
  const masterRowCompsIni = {
    "components": [masterComponentIni]
  }
  const [arrayRowsComps, setArrayRowsComps] = useState([masterRowCompsIni])

  //  Block objects
  const masterBlock = {
    "id_Block": "id_block_master",
    "ordenDisplay_Block": 0,
    "title_Block": "Master Block",
    "label_Block": "MASTER BLOCK",
    "description_Block": "Master Block of the template form.",

    "columns": [
      masterRowCompsIni
    ]
  }



  //  State Variables from Context
  const exportData = {
    toRead, setToRead,
    formObject, setFormObject, arrayOfBlocks, setArrayOfBlocks,

    optionDesigner, setOptionDesigner,

    valueOfForm, setValueOfForm,

    toggleJSONAusgaben, setToggleJSONAusgaben,
    handleSubmitFormIni, handleButtonSubmitFormDyn,

    label, setLabel, text, setText,
    pruebaLabelElement, pruebaTextElement,

    element, setElement, masterBlock, masterComponentIni, masterRowCompsIni
  }

  return (
    <MyContext.Provider value={exportData} >
      {children}
    </MyContext.Provider>
  )
}

export default TheContext;