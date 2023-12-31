import { MdModeEdit, MdDeleteForever } from 'react-icons/md'
import { IconContext } from "react-icons";
import '../../sass/componentSass/icons/IconEditDelete.scss'


function IconEditDelete({index, deleteComponent, refElementDiv}) {

  // function deleteComponent() {
  //   refElementDiv.current.remove()
  // }

  return (
    <div>
      <div className="contIconsEditDelete d-flex justify-content-center align-items-center flex-column m-0 p-0 rounded-end" >
        <IconContext.Provider value={{ color: "rgba(251, 182, 53, 0.9)", size: "1.1rem", className: "contIcon" }}>
          <div className="d-flex flex-row justify-content-center align-items-center m-0 p-0">
            <MdModeEdit />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "rgba(250, 29, 29, 0.9)", size: "1.1rem", className: "contIcon" }}>
          <div className="d-flex flex-row justify-content-center align-items-center m-0 p-0"
            onClick={() => deleteComponent(index)}>
            <MdDeleteForever />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default IconEditDelete;