import React from 'react';
import { Link } from 'react-router-dom';

import '../../scss/organisms/Sidebar.scss';
import logotipo from '../../images/brand/imagotipo-t-rexpace.svg'

function Sidebar() {
  return (
    <section className="Sidebar">
      <figure className="Sidebar__logo text-center">
        <img width="200" src={logotipo} alt="T-REXPACE"/>
      </figure>
      <div className="Sidebar__design-system">
        <h3>Design System</h3>
        <div className="mb-2">
          <ul>
            <li>
              <Link className="Sidebar__link" to="/principios">Principios</Link>
            </li>
          </ul>
        </div>
        <div className="mb-2">
          <h4 className="mb-1">Tokens</h4>
          <ul>
            <li>
              <Link className="Sidebar__link" to="/">Colores</Link>
            </li>
            <li>
              <Link className="Sidebar__link" to="/">Tipografías</Link>
            </li>
            <li>
              <Link className="Sidebar__link" to="/">Espaciado</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="mb-1">Componentes</h4>
          <ul>
            <li>
              <Link className="Sidebar__link" to="/header">Header</Link>
            </li>
            <li>
              <Link className="Sidebar__link" to="/footer">Footer</Link>
            </li>
            <li>
              <Link className="Sidebar__link" to="/buttons">Buttons</Link>
            </li>
            <li>
              <Link className="Sidebar__link" to="/formularios">Formularios</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sidebar