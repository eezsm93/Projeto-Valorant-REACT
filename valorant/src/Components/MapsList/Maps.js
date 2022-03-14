import React from 'react'
import styles from './Maps.module.css'
import Data, { maps } from '../Data/Index'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MapA from '../../Assets/maps/map1.png'
import MapB from '../../Assets/maps/map2.png'
import MapC from '../../Assets/maps/map3.png'
import MapD from '../../Assets/maps/map4.png'
import MapE from '../../Assets/maps/map5.png'


const Maps = () => {

    const [mapsList, setMapsList] = React.useState(maps);
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
  };




  return (
    // <div className={styles.mapsContainer}>
    //     <div className={styles.maps}>
    //     {mapsList.map((map,index)=>( 
    //             <img key={index} src={require(`../../Assets/maps/${map}`)}/>
    //     ))}
            
    //     </div>

    // </div>

    <Box sx={{ width: '100%' }}>
    <Tabs
      value={value}
      onChange={() => handleChange}
      variant="scrollable"
      scrollButtons="off"
    >
      <img src={MapA}/>
      <img src={MapB}/>
      <img src={MapC}/>
      <img src={MapD}/>
      <img src={MapE}/>
    </Tabs>
  </Box>
  )
}

export default Maps