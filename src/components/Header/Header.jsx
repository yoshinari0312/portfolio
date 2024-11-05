import './Header.css';
import { HeaderButton } from './HeaderButton';

export const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="headerLeft">
          <h2>Onodera's Portfolio</h2>
        </div>
        <div className="headerNav">
          <HeaderButton href="#">Home</HeaderButton>
          <HeaderButton href="#about">About</HeaderButton>
          <HeaderButton href="#internship">Internship</HeaderButton>
          <HeaderButton href="#works">Works</HeaderButton>
          <HeaderButton href="#skills">Skills</HeaderButton>
          <HeaderButton href="#contact">Contact</HeaderButton>
        </div>
      </div>
    </header>
  )
}

