import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import '../../scss/organisms/Sidebar.scss';
import logotipo from '../../images/brand/imagotipo-t-rexpace.svg'

function Sidebar() {
  return (
    <section className="Sidebar">
      <Link to='/'>
        <figure className="Sidebar__logo text-center">
          <img width="200" src={logotipo} alt="T-REXPACE"/>
        </figure>
      </Link>
      <h3>Design System</h3>
      <div className="Sidebar__design-system">
        <div className="mb-20">
          <ul>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/principios">Principios</NavLink>
            </li>
          </ul>
        </div>
        <div className="mb-20">
          <h4 className="mb-10">Tokens</h4>
          <ul>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/colores">Colores</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/tipografia">Tipografías</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/espaciado">Espaciado</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/animaciones">Animaciones</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/iconografia">Iconografía</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-10">Componentes</h4>
          <ul>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/grid">Grid</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/header">Header</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/footer">Footer</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/buttons">Botones</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/formularios">Formularios</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/asteroidCard">Asteroid Card</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/formBirthday">Form Birthday</NavLink>
            </li>
            <li>
              <NavLink className="Sidebar__link" activeClassName="active" to="/hazardousCard">Hazardous Indicator Card</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p><small>Para cualquier información contáctanos al correo <a className="Sidebar__link" href="mailto:trexpace298@gmail.com">trexpace298@gmail.com</a></small></p>
    </section>
  )
}

export default Sidebar