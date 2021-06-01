import { React, useEffect } from 'react';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/box";
import MultiContainer from '../MultiContainer';
import API from '../../utils/API';

const style = {
    margin:0, 
    padding:0,
    backgroundColor:"#f3f5f9",
    borderRadius:'20px',
    padding:'20px',
    minHeight:'300px'
}

let testLat="";
let testLon="";


// API.discoverActivities(testLat, testLon).then(
    //     console.log('test')
    // ).catch(err=>{
        //     console.log(err)
        //   })
        
        // const test = API.getLatLon("Palm Springs").then(res=>{
            //     console.log(res.data)
            // });
            
            
            
            
            export default function DiscoverMap() {
    

    // const test = API.discoverActivities('34.4208', '119.6982');
    // console.log(test.meta);

    // useEffect(()=>{
        
    //     const test = API.getLatLon("Palm Springs").then(res => {
    //         testLat=res.data.coord.lat; 
    //         testLon=res.data.coord.lon;
    //     }
    //     );
    
    // },[])
    return (
        <Box p={0}>
            <div style={style}>Map placeholder</div>
        </Box>
    )
}
