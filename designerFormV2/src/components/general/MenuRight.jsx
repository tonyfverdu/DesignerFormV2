import HeaderTitle from '../principal/HeaderTitle.jsx';
import { TITLES_OF_APP } from '../../constants/contants.js';


export default function MenuRight() {
  return (
    <section className="container-fluid d-flex flex-column justify-content-center align-items-center m-0 p-1 bg-body">
      <div className="container-fluid row" >
        <div className="col-12" >
          <HeaderTitle
            titleOfDesigner={TITLES_OF_APP.TITLE_TYPE_DESIGNER}
            titleSelectState={TITLES_OF_APP.TITLE_SELECT_STATE}
            titleCreate={TITLES_OF_APP.TITLE_DESIGNER_FBC}
          />
        </div>
      </div>
    </section>
  )
}