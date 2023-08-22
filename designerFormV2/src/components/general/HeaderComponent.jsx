import logo from '../../assets/logos/logo.svg';
import './HeaderComponent.scss';

function HeaderComponent({ title, subtitle }) {
  return (
    <header className='containerHeaderTitle'>
      <img src={logo} className="App-logo" alt="logo" />
      <header className="containerHeaderTitleText">
        <h2>{title}</h2>
        <h6>{subtitle}</h6>
      </header>
    </header>
  )
}

export default HeaderComponent;