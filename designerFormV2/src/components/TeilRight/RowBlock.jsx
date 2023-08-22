import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/MyContext.jsx';
import '../../sass/componentSass/TeilRight/Row.scss'


function RowBlock({ formInput, count, setLengthOfArrayOfBlocks, removeBlock }) {
  const theContext = useContext(MyContext)

  const [toogleNewRowBlock, setToogleNewRowBlock] = useState(true)
  theContext.setFormObject(formInput)
  theContext.setArrayOfBlocks(formInput.blocks)

  setLengthOfArrayOfBlocks(formInput.blocks.length)

  useEffect(() => {
    theContext.setFormObject(formInput)
    theContext.setArrayOfBlocks(formInput.blocks)

    setLengthOfArrayOfBlocks(formInput.blocks.length)
  }, [formInput])

  function addNewBlock() {
    theContext.setArrayOfBlocks(theContext.arrayOfBlocks.splice(count, 0, theContext.masterBlock))
    setLengthOfArrayOfBlocks(theContext.arrayOfBlocks.length)
    theContext.setFormObject({ ...theContext.formObject, blocks: theContext.arrayOfBlocks })

    setToogleNewRowBlock(!toogleNewRowBlock)
  }

  function deleteBlock() {
    theContext.setArrayOfBlocks(theContext.arrayOfBlocks.splice(count, 1))
    setLengthOfArrayOfBlocks(theContext.arrayOfBlocks.length)
    theContext.setFormObject({ ...theContext.formObject, blocks: theContext.arrayOfBlocks })

    removeBlock()

    setToogleNewRowBlock(!toogleNewRowBlock)
  }

  return (
    <div className="d-flex flex-row justify-content-center align-item-center p-0 m-0" >

      <span className="fs-6 fw-bold text-success p-0 me-1">{count <= 0 ? 0 : count}</span>

      <div className="col d-flex flex-row justify-content-start align-item-start p-0 m-0" >
        {
          !theContext.toRead &&
          <>
            <button type="button" className="circle d-flex flex-row justify-content-center align-item-center fw-bold btn btn-outline-secondary rounded-circle p-0 me-1"
              onClick={() => addNewBlock()}>
              <span className="text-center text-black fw-bold" >+</span>
            </button>

            <div className="contLine d-flex flex-row justify-content-center align-item-center graycolor600 p-0 mt-2"></div>

            <button type="button" className="circle d-flex flex-row justify-content-center align-item-center fw-bold btn btn-danger rounded-circle mx-auto ms-1"
              onClick={() => deleteBlock()}>
              <span className="text-center text-black fw-bold" >-</span>
            </button>
          </>
        }
      </div>
    </div>
  )
}

export default RowBlock;