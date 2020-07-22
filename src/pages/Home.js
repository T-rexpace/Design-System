import React from 'react'

import HeaderDesignSystem from '../components/molecules/HeaderDesignSystem'

const Home = () => {
  return (
    <>
      <HeaderDesignSystem title='Sistema de diseño de T-REXPACE' underline={ true }/>
      <div className="wrapper">
        <div className="row">
          <div className="column-12">
            <p className="mb-20">
              Bienvenido al sistema de diseño de T-REXPACE. 
              Nuestra madre nodriza en la cual podrás acceder 
              a todos los recursos, <a href="https://www.notion.so/Gu-as-de-c-digo-5bf127faad29437c9cee598179ff08b7" target="_blank">guía de código</a> y pautas necesarias para 
              hacer uso de la lógica de los guidelines para 
              el producto.
            </p>
            <p>
              También puedes consultar el <a href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/097fe51d-8e04-4f0d-9dfb-244e18b7fdf2/MANUAL_DE_MARCA_T-REXSPACE.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200717T000636Z&X-Amz-Expires=86400&X-Amz-Signature=e8d73755cad5c2d29cb707ef3f0c7b007cbb044d30143cf0002294b94b9bbb75&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22MANUAL%2520DE%2520MARCA_T-REXSPACE.pdf%22" target="_blank">
              manual de identidad corporativa</a>. Este te servirá 
              de guía para mantener una comunicación uniforme de la 
              marca.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home