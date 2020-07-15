import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../scss/organisms/Sidebar.scss';
import logotipo from '../../images/brand/imagotipo-t-rexpace.svg'

function Sidebar() {
  return (
    <section className="Sidebar">
      <figure className="Sidebar__logo text-center">
        <img width="200" src={logotipo} alt="T-REXPACE"/>
      </figure>
      <h3>Design System</h3>
      <div className="Sidebar__design-system">
        <div className="mb-2">
          <ul>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/principios">Principios</NavLink>
            </li>
          </ul>
        </div>
        <div className="mb-2">
          <h4 className="mb-1">Tokens</h4>
          <ul>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/colors">Colores</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/typo">Tipografías</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/spacing">Espaciado</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/iconSystem">IconSystem</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-1">Componentes</h4>
          <ul>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/header">Header</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/footer">Footer</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/buttons">Buttons</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/formularios">Formularios</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sidebar