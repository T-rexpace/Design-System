import React from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { AsteroidCardString } from '../../documentationComponents/ComponentCode'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'
import AsteroidCard from '../../components/molecules/AsteroidCard'
import DemoData from '../../components/DemoData'

const AsteroidCardDetails = () => {
    return(
        <ComponentLayout
            title='AsteroidCard'
            underline={ true }
            details={
                <p>
                    Nuestra card principal que resume la información relevante 
                    de cada Asteroide registrado en la App
                </p>
            }
            component={ <AsteroidCard data={ DemoData[0] } />}
            code ={ <ComponentLayoutCode
                title='AsteroidCard'
                jsx={ AsteroidCardString.jsx }
                sass={ AsteroidCardString.sass }
            /> }
        />
    )
}

export default AsteroidCardDetails