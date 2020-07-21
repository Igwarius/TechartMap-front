import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className="header">
      <h2 className="click"><Link className="click" to="/main">Главная</Link></h2>
      <h2 className="click"><Link className="click" to="/registration">Регстрация</Link></h2>
      <h2 className="click"><Link className="click" to="/enter">Вход</Link></h2>
    </div>
  );
}
export default Header;