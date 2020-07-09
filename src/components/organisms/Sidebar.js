import React from 'react';
import { Link } from 'react-router-dom';

import '../../scss/organisms/Sidebar.scss';
import logotipo from '../../images/logotipo-placeholder.svg'

const Sidebar = () => {
  return (
    <section className="Sidebar">
      <figure className="Sidebar__logo">
        <img src={logotipo} alt="T-REXPACE"/>
      </figure>
      <div className="Sidebar__design-system">
        <h3>T-REXPACE DS</h3>
        <div className="mb-2">
          <ul>
            <li>
              <Link to="/">Principios</Link>
            </li>
          </ul>
        </div>
        <div className="mb-2">
          <h4 className="mb-1">Tokens</h4>
          <ul>
            <li>
              <Link to="/">Colores</Link>
            </li>
            <li>
              <Link to="/">Tipografías</Link>
            </li>
            <li>
              <Link to="/">Espaciado</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="mb-1">Componentes</h4>
          <ul>
            <li>
              <Link to="/footer">Footer</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sidebar