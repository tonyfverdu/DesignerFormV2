
function ListDataElement({ TitleList, fontSize, arrayOfLines }) {
  return (
    <ul className="list-group container-fluid border-0 w-100 m-0 p-0" >
      <li href="#" className="list-group-item list-group-item-action container-fluid bg-black fw-bolder text-center text-white border-0 mx-auto"
        style={{ fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)", padding: "0.1rem" }} >
        {TitleList}
      </li>

      {
        Array.isArray(arrayOfLines)
          ?
          arrayOfLines.map(line => {
            return (
              <div key={line.title}>
                <LineOfUL
                  color={line.color}
                  fontSize={line.fontSize}
                  title={line.title}
                  value={line.value}
                />
              </div>
            )
          })
          :
          <span className="txt-danger fs-6 fw-bold mx-auto">Error:  The argument of the function "ListDataElement" must be an array</span>
      }
    </ul>
  )
}

export default ListDataElement;

function LineOfUL({ color, fontSize, title, value }) {
  return (
    <li className={`list-group-item list-group-item-action list-group-item-${color} container-fluid border-0 px-1 py-0`} >
      <span className="ms-0 fw-bold text-start"
        style={{ fontSize: fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
        {title}
      </span>
      <span className="ms-1 p-0 fw-normal" style={{ fontSize: fontSize }} >
        {value}
      </span>
    </li>
  )
}