import HeaderComponent from './HeaderComponent.jsx';
import { TITLES_OF_APP } from '../../constants/contants.js';
import './HeaderLogos.scss';


export default function HeaderLogos() {
  return (
    <>
      <div className="containerLogos d-flex flex-row justify-content-between align-items-center mx-auto p-0">
        <figure className="figure">
          <img className="imageLogo" src={`./src/assets/logos/sass.svg`} alt='Logo Sass' />
        </figure>
        <figure className="figure">
          <img className="imageLogo" src={`./src/assets/logos/Bootstrap-5-1.svg`} alt='Logo Bootstrap 5.3' />
        </figure>
        <figure className="figure">
          <img className="imageLogo" src={`./src/assets/logos/javascriptES6.svg`} alt='Logo Javascript E6' />
        </figure>
        <figure className="figure">
          <img className="imageLogo" src={`./src/assets/logos/react.svg`} alt='Logo React' />
        </figure>
      </div>
      <div className="header-Principal container-fluid d-flex flex-row justify-content-start align-items-center overflow-hidden mx-auto mb-0 pt-4 bg-dark">
        <h2 className="container mx-auto p-0">{TITLES_OF_APP.MAIN_TITLE_APP}</h2>
      </div>
      <HeaderComponent
        title={TITLES_OF_APP.TITLE_MEMO_LIST_HEADER}
        subtitle={TITLES_OF_APP.SUBTITLE_MEMO_LIST_HEADER}
      />
    </>
  )
}