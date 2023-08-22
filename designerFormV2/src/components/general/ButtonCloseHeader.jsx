import { IconContext } from "react-icons";
import { BsXSquareFill } from 'react-icons/bs';
import './ButtonCloseHeader.scss';


export default function ButtonCloseHeader({toggleHeader, setToggleHeader}) {
  return (
    <button className="contIconExit d-flex flex-column justify-content-center align-items-center rounded"
      aria-label="Close"
      onClick={() => setToggleHeader(!toggleHeader)} >
      <IconContext.Provider value={{ color: "red", className: "iconClass" }} >
        <BsXSquareFill />
      </IconContext.Provider >
    </button>
  )
}