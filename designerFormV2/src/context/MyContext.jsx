import { useState, useEffect, createContext } from 'react';

export const MyContext = createContext(null)


function TheContext({ children }) {
  const OPTION_DESIGNER = { form: "form", block: "block", component: "component" };
  const [optionDesigner, setOptionDesigner] = useState(OPTION_DESIGNER.form);
  const [valueOfForm, setValueOfForm] = useState(null)             //  <==  Form select in the Context of App.



  const [JSONEingabenForm, setJSONEingabenForm] = useState("")   //  <== Eingaben ( vor String JSON zur JSON-Formulardaten)
  const [JSONAusgabenForm, setJSONAusgabenForm] = useState("")   //  <== Ausgaben ( vor JSON-Formulardaten zur String JSON)
  const [toggleJSONEingaben, setToggleJSONEingaben] = useState(false)

  //  Funtions of select Forms, Blocks and Components
  // I.-  Dieses Funktion hat keine machen
  function handleSubmitFormIni(ev) {
    ev.preventDefault();
    const newValue = ev.target.value;

    setValueOfForm(newValue);
  }

  // II.-  Dieses Funktion hat keine machen
  function handleButtonSubmitFormDyn() {
    setToggleJSONEingaben(!toggleJSONEingaben)
  }


  //  State Variables from Context
  const exportData = {
    optionDesigner, setOptionDesigner,

    valueOfForm, setValueOfForm,

    toggleJSONEingaben, setToggleJSONEingaben,
    handleSubmitFormIni, handleButtonSubmitFormDyn
  }

  return (
    <MyContext.Provider value={exportData} >
      {children}
    </MyContext.Provider>
  )
}

export default TheContext;