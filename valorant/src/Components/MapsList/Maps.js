import React from 'react'
import styles from './Maps.module.css'
import Data, { maps } from '../Data/Index'

const Maps = () => {

    const [mapsList, setMapsList] = React.useState(maps);



  return (
    <div className={styles.mapsContainer}>
        <div className={styles.maps}>
        {mapsList.map((map,index)=>( 
                <img key={index} src={require(`../../Assets/maps/${map}`)}/>
        ))}
            
        </div>

    </div>
  )
}

export default Maps