import React from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { PlayerDataString } from '../../documentationComponents/ComponentCode'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'

import PlayerData from '../../components/molecules/PlayerData'

const PlayerDataDetails = () => {
    return(
        <ComponentLayout 
            title="Player Data"
            underline={ true }
            details={
                <p>
                    El componente PlayerData formará parte de la tabla 
                    con los usuarios posicionados en los primeros lugares 
                    del juego de memorama
                </p>
            }
            component={ <PlayerData /> }
            code={ <ComponentLayoutCode 
                title="Player Data"
                jsx={ PlayerDataString.jsx }
                sass={ PlayerDataString.sass }
            />}
        />
    )
}

export default PlayerDataDetails